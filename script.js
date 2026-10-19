function showTime() {
	const timeElement = document.getElementById('currentTime');
	if (!timeElement) return;
	timeElement.textContent = new Date().toUTCString();
}

showTime();
if (document.getElementById('currentTime')) {
	setInterval(showTime, 1000);
}
