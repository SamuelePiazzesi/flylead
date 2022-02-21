import React, { useEffect, useRef } from "react";

const AnimatedTitle = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		console.log(canvas);
		const ctx = canvas.getContext("2d");
		let particles = [];
		let amount = 0;
		let mouse = { x: 0, y: 0 };
		let radius = 1;

		var colors = [
			"#81599F",
			"#2b2d68",
			"#E4D456",
			"#57128B",
			"#4D59D2",
			"#D88604",
		];

		var ww = (canvas.width = window.innerWidth);
		var wh = (canvas.height = window.innerHeight);

		function Particle(x, y) {
			this.x = Math.random() * ww;
			this.y = Math.random() * wh;
			this.dest = {
				x: x,
				y: y,
			};
			this.r = Math.random() * 5 + 2;
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
			if (distance < radius * 70) {
				this.accX = (this.x - mouse.x) / 100;
				this.accY = (this.y - mouse.y) / 100;
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
			wh = canvas.height = window.innerHeight / 2;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.font = "bold " + ww / 3.5 + "px sans-serif";
			ctx.lineHeight = ww * 2;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText("Flylead", ww / 2, wh / 2);

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

		console.log("ciao");
	}, []);

	return (
		<div className="mt-5">
			<canvas id="scene" className="w-full h-72" ref={canvasRef}></canvas>
		</div>
	);
};

export default AnimatedTitle;
