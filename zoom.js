javascript: (function() {  document.body.innerHTML = document.body.innerHTML.replace(/zoom\.us\/[a-zA-Z]*\/([0-9]{9,10})/g, 'zoom.us/wc/$1/join').replace(/(\/join)+/g, '/join');})();
