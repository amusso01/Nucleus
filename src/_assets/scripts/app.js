import "@dotlottie/player-component";
// import reframe from "reframe.js";
import gsap from "gsap";
// import $ from "jquery";

import { Marquee, loop } from "dynamic-marquee";

let player = document.querySelector("dotlottie-player"),
	ratio = document.querySelector(".ratio"),
	btnWrapper = document.querySelector(".btn-wrapper"),
	neon = document.querySelector(".btn-neon"),
	btn = document.querySelector(".neon"),
	pFooter = document.querySelector(".paragraph-footer");
marquee = document.querySelector(".tickerwrapper");

let tl = gsap.timeline();

// reframe(ratio);

gsap.set(btn, { autoAlpha: 0 });
gsap.set(btnWrapper, { autoAlpha: 0 });
gsap.set(neon, { autoAlpha: 0 });
gsap.set(pFooter, { autoAlpha: 0 });
// gsap.set(marquee, { autoAlpha: 0, xPercent: 100 });

player.addEventListener("complete", () => {
	tl.to(btn, { autoAlpha: 1, duration: 1 });
	tl.to(btnWrapper, { autoAlpha: 1, duration: 1 }, "<");
	tl.to(neon, { autoAlpha: 1, duration: 1 }, "<");
	tl.to(pFooter, {
		autoAlpha: 1,
		yPercent: -80,
		duration: 0.5,
		onComplete: startNeon,
		startTicker,
	});
	// tl.to(marquee, {
	// 	autoAlpha: 1,
	// 	duration: 10,
	// 	xPercent: 0,
	// });
});

function startNeon() {
	neon.classList.add("active");
}

const marqueeText = document.createElement("div");
marqueeText.innerHTML = "&nbsp•&nbsp";

const tickerTape = new Marquee(document.getElementById("tickerTape"), {
	rate: 0, // 20 pixels/s downwards
	upDown: false, // downwards instead of to the right
	startOnScreen: false, // start on screen
});

// tickerTape.appendItem(marqueeText);

const control = loop(tickerTape, [
	() =>
		"WE’RE HIRING PROBLEM SOLVERS IN SOFTWARE ENGINEERING, DESIGN, SALES, AND MARKETING!",
	() => {
		const marqueeText = document.createElement("div");
		marqueeText.innerHTML = "&nbsp-&nbsp";
		return marqueeText;
	},
	() =>
		"WE’RE HIRING PROBLEM SOLVERS IN SOFTWARE ENGINEERING, DESIGN, SALES, AND MARKETING!",
	() => {
		const marqueeText = document.createElement("div");
		marqueeText.innerHTML = "&nbsp-&nbsp";
		return marqueeText;
	},
]);

function startTicker() {
	let mql = window.matchMedia("(max-width: 640px)");
	if (!mql) {
		tickerTape.setRate(-170);
	} else {
		tickerTape.setRate(-120);
	}
}

// MARQUEE
// function Marquee(selector, speed) {
// 	const parentSelector = document.querySelector(selector);
// 	const clone = parentSelector.innerHTML;
// 	const firstElement = parentSelector.children[0];
// 	let i = 0;
// 	parentSelector.insertAdjacentHTML("beforeend", clone);
// 	parentSelector.insertAdjacentHTML("beforeend", clone);
// 	parentSelector.insertAdjacentHTML("beforeend", clone);
// 	parentSelector.insertAdjacentHTML("beforeend", clone);
// 	parentSelector.insertAdjacentHTML("beforeend", clone);
// 	// parentSelector.insertAdjacentHTML("beforeend", clone);
// 	// parentSelector.insertAdjacentHTML("beforeend", clone);
// 	// parentSelector.insertAdjacentHTML("beforeend", clone);
// 	// parentSelector.insertAdjacentHTML("beforeend", clone);
// 	// parentSelector.insertAdjacentHTML("beforeend", clone);
// 	// parentSelector.insertAdjacentHTML("beforeend", clone);
// 	// parentSelector.insertAdjacentHTML("beforeend", clone);
// 	// parentSelector.insertAdjacentHTML("beforeend", clone);

// 	setInterval(function () {
// 		firstElement.style.marginLeft = `-${i}px`;
// 		if (i > firstElement.clientWidth) {
// 			i = 0;
// 		}
// 		i = i + speed;
// 	}, 0);
// }

// window.addEventListener("load", Marquee(".marquee", 0.2));
