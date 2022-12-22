# mastodon-zoom

This is the source for the Mastodon Zoom extension.

## Installation

For supported domains, install from [Chrome Web Store](https://chrome.google.com/webstore/detail/mastodon-zoom/hhhbnhdjbimopocclifikecdnmngjpaf). 
This is the preferred installation.

## Activating Mastodon Zoom

A zoom mode to view just articles in the Mastodon web UI: 
 - Press "esc" to unfocus search/compose.
 - Press "z" to toggle zoom mode. 
 - Press "j" or "down" to go to the next article. 
 - Press "k" or "up" to go to the previous article. 

## Privacy

This extension does not store any data. Nor does it upload any data anywhere. 

## Adding a Mastodon Server

The currently supported servers are listed in [manifest.json](https://github.com/laffra/mastodon-zoom/blob/main/manifest.json). 
To add another server, edit that file and:

  - Locate the list of domains starting on line 11
  - Add your preferred Mastodon Server
  - Try out your change by manually installing (see instructions below)
  - Try out your local installation to see if the extension works 
  - Send a PR to add your server to the official extension

## Manual Installation

A few simple steps:

  1. Run the following from your command line: ```git clone https://github.com/laffra/mastodon-zoom```
  1. Open Chrome or Brave and activate "Manage Extensions" 
  1. Enable "Developer Mode"
  1. Load unpacked and point the to folder you created in step 1
