import React, { useEffect, useRef } from "react";
import { themeColors } from "../../shared/constants";

const AnimatedTitle = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let particles = [];
		let amount = 0;
		let mouse = { x: 0, y: 0 };
		let radius = 1;

		const colors = Object.values(themeColors);

		let ww = (canvas.width = window.innerWidth);
		let wh = (canvas.height = window.innerHeight);

		function Particle(x, y) {
			this.x = Math.random() * ww;
			this.y = Math.random() * wh;
			this.dest = {
				x: x,
				y: y,
			};
			this.r = Math.random() * 3 + 2;
			this.vx = (Math.random() - 0.5) * 20;
			this.vy = (Math.random() - 0.5) * 20;
			this.accX = 0;
			this.accY = 0;
			this.friction = Math.random() * 0.05 + 0.94;

			this.color = colors[Math.floor(Math.random() * 6)];
		}

		Particle.prototype.render = function () {
			this.accX = (this.dest.x - this.x) / 1000;
			this.accY = (this.dest.y - this.y) / 1000;
			this.vx += this.accX;
			this.vy += this.accY;
			this.vx *= this.friction;
			this.vy *= this.friction;

			this.x += this.vx;
			this.y += this.vy;

			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
			ctx.fill();

			const a = this.x - mouse.x;
			const b = this.y - mouse.y;

			const distance = Math.sqrt(a * a + b * b);
			if (distance < radius * 140) {
				this.accX = (this.x - mouse.x) / 50;
				this.accY = (this.y - mouse.y) / 50;
				this.vx += this.accX;
				this.vy += this.accY;
			}
		};

		function onMouseMove(e) {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}

		function onTouchMove(e) {
			if (e.touches.length > 0) {
				mouse.x = e.touches[0].clientX;
				mouse.y = e.touches[0].clientY;
			}
		}

		function onTouchEnd() {
			mouse.x = -9999;
			mouse.y = -9999;
		}

		function initScene() {
			ww = canvas.width = window.innerWidth;
			wh = canvas.height = window.innerHeight / 1.75;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.font = "bold " + ww / 5 + "px sans-serif";
			ctx.lineHeight = ww;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText("Athenix", ww / 2, wh / 2);

			let data = ctx.getImageData(0, 0, ww, wh).data;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.globalCompositeOperation = "screen";

			particles = [];
			for (let i = 0; i < ww; i += Math.round(ww / 150)) {
				for (var j = 0; j < wh; j += Math.round(ww / 150)) {
					if (data[(i + j * ww) * 4 + 3] > 150) {
						particles.push(new Particle(i, j));
					}
				}
			}
			amount = particles.length;
		}

		function onMouseClick() {
			radius++;
			if (radius === 5) {
				radius = 0;
			}
		}

		function render(a) {
			requestAnimationFrame(render);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < amount; i++) {
				particles[i].render();
			}
		}
		window.addEventListener("resize", initScene);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("touchmove", onTouchMove);
		window.addEventListener("click", onMouseClick);
		window.addEventListener("touchend", onTouchEnd);
		initScene();
		requestAnimationFrame(render);
	}, []);

	return (
		<div className="">
			<canvas id="scene" className="w-full" ref={canvasRef}></canvas>
		</div>
	);
};

export default AnimatedTitle;
