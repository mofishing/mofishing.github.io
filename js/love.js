"use strict";
! function(e, r, t) {
	function a() {
		for (var e = 0; e < i.length; e++) i[e].alpha <= 0 ? (r.body.removeChild(i[e].el), i.splice(e, 1)) : (i[e].y--, i[e].scale += .004, i[e].alpha -= .013, i[e].el.style.cssText = "left:" + i[e].x + "px;top:" + i[e].y + "px;opacity:" + i[e].alpha + ";transform:scale(" + i[e].scale + "," + i[e].scale + ") rotate(45deg);background:" + i[e].color + ";z-index:99999");
		requestAnimationFrame(a)
	}
	var o, i = [];
	e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
			setTimeout(e, 1e3 / 60)
		},
		function(t) {
			var a = r.createElement("style");
			a.type = "text/css";
			try {
				a.appendChild(r.createTextNode(t))
			} catch (e) {
				a.styleSheet.cssText = t
			}
			r.getElementsByTagName("head")[0].appendChild(a)
		}(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o = "function" == typeof e.onclick && e.onclick, e.onclick = function(e) {
			var t, a;
			o && o(), t = e, (a = r.createElement("div")).className = "heart", i.push({
				el: a,
				x: t.clientX - 5,
				y: t.clientY - 5,
				scale: 1,
				alpha: 1,
				color: "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
			}), r.body.appendChild(a)
		}, a()
}(window, document);