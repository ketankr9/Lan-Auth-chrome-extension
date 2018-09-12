chrome.webNavigation.onCompleted.addListener(function() {
  chrome.tabs.getSelected(function(tab) {
    chrome.tabs.remove(tab.id, function() { });
  });
}, {url: [{urlMatches : 'http://192.168.249.1:1000/keepalive*'}]});

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({'url': "options/options.html" }, function(tab){ });
});
