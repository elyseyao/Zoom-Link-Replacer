# Zoom Link Replacer
> Bookmarklet that replaces any Zoom links on the page with the web client link and/or redirects from Zoom landing page to the web client.

## Installation
Create a new bookmark and add the following code:

```
javascript: (function() { document.body.innerHTML = document.body.innerHTML.replace(/zoom\.us\/[a-zA-Z]*\/([0-9]{9,10})/g, 'zoom.us/wc/$1/join').replace(/(\/join)+/g, '/join');if(window.location.href.indexOf("zoom.us")>-1){ url = window.location.href.replace(/zoom\.us\/[a-zA-Z]*\/([0-9]{9,10})/g, 'zoom.us/wc/$1/join'); window.location.replace(url);}})();
```
