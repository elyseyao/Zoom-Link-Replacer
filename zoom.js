javascript: (function() {
    var links = document.links;
    let template = /(.*)zoom.us\/meeting\/([0-9]{9})/i;
    for (var i = 0; i < links.length; i++) {
        links[i].href = links[i].href.replace(template, '$1zoom.us/wc/$2/join');
    }
    document.body.innerHTML = document.body.innerHTML.replace(template, '$1zoom.us/wc/$2/join');
})();
