# mastodon-zoom

This is the source for the Mastodon Zoom extension.

## Installation

For supported domains, install from [Chrome Web Store](https://chrome.google.com/webstore/detail/mastodon-zoom/hhhbnhdjbimopocclifikecdnmngjpaf). 
This is the preferred installation.

## Activating Mastodon Zoom

  - Reload your mastodon instance browser tab
  - Click anywhere in the background (to take focus away from your status text area)
  - Press "z" to toggle zoom mode
  - Press "j" or "Arrow Down" to go to the next article
  - Press "k" or "Arrow Up" to go to the previous article
  - Press "?" to see all shortcuts
  - Press "z" to go back to normal mode
  
## Adding a Mastodon Server

The currently supported servers are listed in [manifest.json](https://github.com/laffra/mastodon-zoom/blob/main/manifest.json). 
To add another server, locate the list of domains starting on line 11 and add your preferred Mastodon Server.
Send a PR to add your server. In the meantime, you can try out your change by manually installing.

## Manual Installation

A few simple steps:

  - Run the following from your command line:

        git clone https://github.com/laffra/mastodon-zoom
    
  - Open Chrome or Brave and activate "Manage Extensions" 
  - Enable "Developer Mode"
  - Load unpacked and point the to folder you created using git clone
