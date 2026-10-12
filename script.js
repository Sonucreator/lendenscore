function showTime() {
	const currentTime = document.getElementById('currentTime');
	if (!currentTime) return;
	currentTime.textContent = new Date().toUTCString();
}

showTime();
setInterval(showTime, 1000);
