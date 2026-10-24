#!/usr/bin/env bash
set -euo pipefail

# The theme requires standalone Dart Sass with the embedded protocol.
sass_version=1.93.2
if ! command -v sass >/dev/null 2>&1; then
  case "$(uname -s)/$(uname -m)" in
    Linux/x86_64) sass_platform=linux-x64 ;;
    Linux/aarch64|Linux/arm64) sass_platform=linux-arm64 ;;
    Darwin/x86_64) sass_platform=macos-x64 ;;
    Darwin/arm64) sass_platform=macos-arm64 ;;
    *) echo 'Install standalone Dart Sass and add sass to PATH.' >&2; exit 1 ;;
  esac
  sass_cache="${XDG_CACHE_HOME:-${TMPDIR:-/tmp}}/leo-blog-dart-sass/${sass_version}/${sass_platform}"
  if [[ ! -x "$sass_cache/dart-sass/sass" ]]; then
    mkdir -p "$sass_cache"
    sass_download=$(mktemp -d)
    trap 'rm -rf "$sass_download"' EXIT
    curl --fail --location --retry 2 \
      "https://github.com/sass/dart-sass/releases/download/${sass_version}/dart-sass-${sass_version}-${sass_platform}.tar.gz" \
      --output "$sass_download/sass.tar.gz"
    tar -xzf "$sass_download/sass.tar.gz" -C "$sass_cache"
  fi
  export PATH="$sass_cache/dart-sass:$PATH"
fi

hugo "$@"
