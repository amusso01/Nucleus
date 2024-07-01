import "@dotlottie/player-component";
import reframe from "reframe.js";
import gsap from "gsap";

let player = document.querySelector("dotlottie-player"),
	ratio = document.querySelector(".ratio"),
	btnWrapper = document.querySelector(".btn-wrapper"),
	neon = document.querySelector(".btn-neon"),
	btn = document.querySelector(".neon"),
	pFooter = document.querySelector(".paragraph-footer");

let tl = gsap.timeline();

// reframe(ratio);

gsap.set(btn, { autoAlpha: 0 });
gsap.set(btnWrapper, { autoAlpha: 0 });
gsap.set(neon, { autoAlpha: 0 });
gsap.set(pFooter, { autoAlpha: 0 });

player.addEventListener("complete", () => {
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
