import "@dotlottie/player-component";
import reframe from "reframe.js";
import gsap from "gsap";

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
gsap.set(marquee, { autoAlpha: 0 });

player.addEventListener("complete", () => {
	tl.to(marquee, {
		autoAlpha: 1,
		duration: 0.8,
		onComplete: Marquee(".marquee", 0.2),
	});
	tl.to(btn, { autoAlpha: 1, duration: 1 });
	tl.to(btnWrapper, { autoAlpha: 1, duration: 1 }, "<");
	tl.to(neon, { autoAlpha: 1, duration: 1 }, "<");
	tl.to(pFooter, {
		autoAlpha: 1,
		yPercent: -80,
		duration: 0.5,
		onComplete: startNeon,
	});
});

function startNeon() {
	neon.classList.add("active");
}

// MARQUEE
function Marquee(selector, speed) {
	const parentSelector = document.querySelector(selector);
	const clone = parentSelector.innerHTML;
	const firstElement = parentSelector.children[0];
	let i = 0;
	console.log(firstElement);
	parentSelector.insertAdjacentHTML("beforeend", clone);
	parentSelector.insertAdjacentHTML("beforeend", clone);
	parentSelector.insertAdjacentHTML("beforeend", clone);
	parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);
	// parentSelector.insertAdjacentHTML("beforeend", clone);

	setInterval(function () {
		firstElement.style.marginLeft = `-${i}px`;
		if (i > firstElement.clientWidth) {
			i = 0;
		}
		i = i + speed;
	}, 0);
}

// window.addEventListener("load", Marquee(".marquee", 0.2));
