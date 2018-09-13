chrome.webNavigation.onCompleted.addListener(function() {
  chrome.tabs.query({}, function(foundTabs) {
        var tabsCount = foundTabs.length;
        console.info("tabsCount = " + tabsCount);
        if(tabsCount == 1){
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              var tab = tabs[0];
              chrome.tabs.update(tab.id, {url: "https://www.google.com/"});
          });
        }else{
          chrome.tabs.getSelected(function(tab) {
            chrome.tabs.remove(tab.id, function() { });
          });
        }
    });
}, {url: [{urlMatches : 'http://192.168.249.1:1000/keepalive*'}]});

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({'url': "options/options.html" }, function(tab){ });
});
