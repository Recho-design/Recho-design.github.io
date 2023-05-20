// 字体大小

function fontSize() {
	var deviceWidth =
		document.documentElement.clientWidth > 1200 ? 1200 : document.documentElement.clientWidth;
	if (deviceWidth > 576) { document.documentElement.style.fontSize = (deviceWidth / 1300) + "rem"; }
	else {
		document.documentElement.style.fontSize = (deviceWidth / 950) + "rem";
	}
}
fontSize();
window.onresize = fontSize;
