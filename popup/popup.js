onload = setTimeout(init, 0);

function init() {

	document.getElementById("mLogin").addEventListener('click', function(event){
		chrome.tabs.create({"url": "http://detectportal.firefox.com/success.txt"});
	});

	document.getElementById("mLogout").addEventListener('click', function(event){
		chrome.tabs.create({"url": "http://192.168.249.1:1000/logout?"});
	});

}
