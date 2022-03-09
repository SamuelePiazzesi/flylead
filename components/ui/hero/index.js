import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import AnimatedTitle from "../animated-title";

const Hero = () => {
	const navigation = [
		{ name: "Product", href: "#" },
		{ name: "Features", href: "#" },
		{ name: "Marketplace", href: "#" },
		{ name: "Company", href: "#" },
	];

	return (
		<section className="mx-automin-h-96 px-4 sm:mt-10 sm:mb-24">
			<div className="text-center">
				<AnimatedTitle />
				<p className="max-w-md mx-auto text-base text-gray-300 sm:text-lg mb-8 md:text-xl md:max-w-3xl">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
					cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
					aliqua.
				</p>
				<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
					<div className="rounded-md shadow">
						<a
							href="#"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neon hover:bg-neon md:py-4 md:text-lg md:px-10"
						>
							Get started
						</a>
					</div>
					<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
						<a
							href="#"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neon bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
						>
							Live demo
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
