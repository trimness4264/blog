+++
date = '2026-07-17T19:36:12+08:00'
draft = false
title = 'How I jailbreak my iPad 6th generation with palera1n using archlinux'
+++

`Update: You should now use Dopamine 3.0 instead because it is a better choice in most of cases.`

# Preparations

- an iPad that has A8-A11 CPU
- A computer with intel or apple silicon chips installed `Linux/macOS`.
- A USB-A to lightning cable to connect PC and iPad

I've tried to use palera1n with my 9800x3d amd pc but finally failed, and the official docs refers to it. See [this issue](https://github.com/palera1n/palera1n/issues/694) for detailed information.
My environment is a iPad 2018 128G storage version has a `iPadOS 17.7.10` with a Thinkpad T14P which uses arch btw.

# Tips

Jailbreaks may break some features and even turn your device into a brick. PLEASE don't use it on your mainly used device, Trollstore may be a better choice for supported device.

# Installation Procedures

First, ensure you have a linux environment. If not, you can view [this article](https://blog.itshenryz.com/2023/01/31/palera1n-win-without-usb) to build a temporary Ubuntu GNU/Linux OS on the base of Windows in an easy way.
If you have been a linux user, you can keep reading this article.

```bash
sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"
```

After installation, run these following commands to restart usbmuxd

```bash
sudo systemctl stop usbmuxd
sudo usbmuxd -f -p
```

Next, connect your apple device, unlock it and just click trust the computer button.

Then open a new terminal emulator window to start the palera1n program in rootless mode.

```bash
sudo palera1n -l
```

Just follow the instructions on the screen such as hold the power and home button for 4 seconds,then the home button for 10s.

After another period of waiting you can disconnect the USB cable and see the `palera1n` application appears in your `App Library`.

Opening the app, choose a package manager to install, I prefer `Sileo` to `Zebra`.

Set a secure root password for the later use of terminal.

Fine! You have jailbreaked your iPad successfully in these simple steps.

But notice that this type of jailbreak is not pernament, which mean you have to apply these procedures every time after rebooting your device to reenable jailbreak.

Now, you can install whatever apps you want freely on this apple device instead of bearing Apple's strict censorship to the apps on the `App Store`.

# Ending

It is such an interesting thing to jailbreak your Apple devices, just like getting full root access on Android. While exploring the jailbreak related information, I also got some fun and tricks!
