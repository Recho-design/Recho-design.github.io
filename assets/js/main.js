$(function () {
	$('.streamersbox1').liMarquee({
		hoverstop: false
	});
});

$(function () {
	$('.streamersbox2').liMarquee({
		hoverstop: false
	});
});

$(function () {
	$('.nav-link').hover(function () { $(this).addClass('hover-choose'); },
		function () { $(this).removeClass('hover-choose'); })
});

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
