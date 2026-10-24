This website is statically generated. It possesses no database, no trackers, and essentially no long-term memory. It cannot hear you.

However, conversation is possible via the following off-site protocols:

### The Fediverse

{{ site.Params.author.name | default "The author" }} has outsourced all social interactions to the [Fediverse](https://en.wikipedia.org/wiki/Fediverse).

{{ with .Params.fedi }}
A specific thread for this entry has been initialized. You may file your grievances or corrections [over here]({{ . }}).
{{ else }}
This entry has not yet been syndicated to the timeline. It is currently enjoying its solitude.
{{ end }}

### Webmention

You may broadcast a [Webmention](https://indieweb.org/Webmention) to this URL. If valid, your packet will be acknowledged. Eventually.

### Legacy Methods

If you prefer the reliability of 1970s technology, the SMTP protocol remains fully operational, at least for now.
