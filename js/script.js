let menuShown = false

const navigator = () => {
	let menu = document.querySelector('.menu');
	let bg = document.querySelector('.menubg');

	if(menuShown === false) {
		menu.style.transform = "rotate(0deg)";
		bg.style.width = "100%";
		 menuShown = true;
	}
	else {
		menu.style.transform = "rotate(180deg) translateX(25px)";
		bg.style.width = "0vw";
		menuShown = false;
	}
}


const about= ()=>{
	 document.getElementById("demo").innerHTML = "about.html";
}

const services = () => {
	let web = document.getElementById('webcard');
	let whead = document.getElementById('wheading');
	let wcon = document.getElementById('wcontent');

	let seo = document.getElementById('seo');
	let shead = document.getElementById('sheading');
	let scon = document.getElementById('scontent');

	let app = document.getElementById('appcard');
	let ahead = document.getElementById('aheading');
	let acon = document.getElementById('acontent');

	let wbg = document.getElementById('webbg');
	let seobg = document.getElementById('seobg');
	let mobbg = document.getElementById('mobbg');

	web.addEventListener("mouseenter", function () {
		wbg.style.opacity="1";
		whead.style.transform = "translateY(0px)";
		wcon.style.transform = "scaleY(1)";
		wcon.style.opacity = "1";
		seo.style.opacity = "0";
		app.style.opacity = "0";
		web.style.border = "none";
		app.style.transitionDelay = "0s";
		seo.style.transitionDelay = "0s";
		web.style.transitionDelay = "0s";
		app.style.transitionDelay = "0s";
		web.style.boxShadow = "0 15px 30px 0 rgba(0,0,0,0.3), 0 5px 15px 0 rgba(0,0,0,0.2)";
	})

	web.addEventListener("mouseleave", function () {
		wbg.style.opacity="0";
		whead.style.transform = "translateY(150px)";
		wcon.style.transform = "scaleY(0)";
		wcon.style.opacity = "0";
		seo.style.opacity = "1";
		web.style.border = "1px solid #fff";
		app.style.opacity = "1";
		app.style.transitionDelay = "0.5s";
		seo.style.transitionDelay = "0.5s";
		web.style.boxShadow = "none";
	})

	seo.addEventListener("mouseenter", function () {
		seobg.style.opacity="1";
		shead.style.transform = "translateY(0px)";
		scon.style.transform = "scaleY(1)";
		scon.style.opacity = "1";
		web.style.opacity = "0";
		seo.style.border = "none";
		app.style.opacity = "0";
		app.style.transitionDelay = "0s";
		web.style.transitionDelay = "0s";
		seo.style.transitionDelay = "0s";
		seo.style.boxShadow = "0 15px 30px 0 rgba(0,0,0,0.3), 0 5px 15px 0 rgba(0,0,0,0.2)";
	})

	seo.addEventListener("mouseleave", function () {
		seobg.style.opacity="0";
		shead.style.transform = "translateY(150px)";
		scon.style.transform = "scaleY(0)";
		scon.style.opacity = "0";
		web.style.opacity = "1";
		app.style.opacity = "1";
		app.style.transitionDelay = "0.5s";
		web.style.transitionDelay = "0.5s";
		seo.style.border = "1px solid #fff";
		seo.style.boxShadow = "none";
	})

	app.addEventListener("mouseenter", function () {
		mobbg.style.opacity="1";
		ahead.style.transform = "translateY(0px)";
		acon.style.transform = "scaleY(1)";
		acon.style.opacity = "1";
		web.style.opacity = "0";
		seo.style.opacity = "0";
		seo.style.transitionDelay = "0s";
		web.style.transitionDelay = "0s";
		app.style.transitionDelay = "0s";
		app.style.border = "none";
		app.style.boxShadow = "0 15px 30px 0 rgba(0,0,0,0.3), 0 5px 15px 0 rgba(0,0,0,0.2)";
	})

	app.addEventListener("mouseleave", function () {
		mobbg.style.opacity="0";
		ahead.style.transform = "translateY(150px)";
		acon.style.transform = "scaleY(0)";
		acon.style.opacity = "0";
		web.style.opacity = "1";
		app.style.boxShadow = "none";
		app.style.border = "1px solid #fff";
		seo.style.opacity = "1";
		seo.style.transitionDelay = "0.5s";
		web.style.transitionDelay = "0.5s";
	})
}


services();