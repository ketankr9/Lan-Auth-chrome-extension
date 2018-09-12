// Saves options to chrome.storage
function save_options() {
  var username = document.getElementById('mUsername').value;
  var password = document.getElementById('mPassword').value;
  chrome.storage.sync.set({
    mUsername: username,
    mPassword: password
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
  });
}

// Restores username and password state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    mUsername: '',
    mPassword: ''
  }, function(items) {
    document.getElementById('mUsername').value = items.mUsername;
    document.getElementById('mPassword').value = items.mPassword;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
