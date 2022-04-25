//移动端适配代码-------------------------------------------------------------
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			// var clientWidth = window.screen.width;
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
		};
	if(!doc.addEventListener) return;
	//win.addEventListener(resizeEvt, recalc, false);
	recalc();
	//doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);