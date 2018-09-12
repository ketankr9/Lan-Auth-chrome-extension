document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get({
      mUsername: '',
      mPassword: ''
      }, function(items) {
        document.querySelector('#ft_un').value = items.mUsername;
        document.querySelector('#ft_pd').value = items.mPassword;
        document.getElementsByTagName('input')[5].click();
    });

});
