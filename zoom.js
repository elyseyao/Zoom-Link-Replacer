javascript: (function() {
    document.body.innerHTML = document.body.innerHTML.replace(/zoom\.us\/[a-zA-Z]*\/([0-9]{9,10})/g, 'zoom.us/wc/$1/join').replace(/(\/join)+/g, '/join');
    if(window.location.href.indexOf("zoom.us")>-1){
        url = window.location.href.replace(/zoom\.us\/[a-zA-Z]*\/([0-9]{9,10})/g, 'zoom.us/wc/$1/join');
        window.location.replace(url);
    }
})();

