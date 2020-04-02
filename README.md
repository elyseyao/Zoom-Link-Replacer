# Zoom Link Replacer
> Bookmarklet that replaces any zoom links on the page with the web client link.

## Installation
Drag the link below to your Bookmarks bar:
<a href="javascript: (function() {var links = document.links; let template = /(.*)zoom.us\/meeting\/([0-9]{9})/i; for (var i = 0; i < links.length; i++) {links[i].href = links[i].href.replace(template, '$1zoom.us/wc/$2/join');}document.body.innerHTML = document.body.innerHTML.replace(template, '$1zoom.us/wc/$2/join');})();">Zoom Link Replacer</a>