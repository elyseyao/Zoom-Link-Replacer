# Zoom Link Replacer
> Bookmarklet that replaces any zoom links on the page with the web client link.

## Installation
Create a new bookmark and add the following code:

`javascript: (function(){var links=document.links;let template=/(.*)zoom.us\/[a-zA-Z]*\/([0-9]+)$/gim;for(var i=0;i<links.length;i++)links[i].href=links[i].href.replace(template,"$1zoom.us/wc/$2/join");document.body.innerHTML=document.body.innerHTML.replace(template,"$1zoom.us/wc/$2/join");})();` 
