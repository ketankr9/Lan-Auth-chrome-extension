document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get({
      musername: '',
      mpassword: ''
      }, function(items) {
        document.querySelector('#ft_un').value = items.musername;
        document.querySelector('#ft_pd').value = items.mpassword;
        document.getElementsByTagName('input')[5].click();
    });

});
