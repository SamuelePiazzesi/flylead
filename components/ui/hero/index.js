import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import AnimatedTitle from "../animated-title";

const Hero = ({}) => {
	return (
		<div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
			<div className="mx-auto max-w-7xl lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8">
					<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
						<div className="lg:py-24">
							<a
								href="#"
								className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
							>
								<span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
									We're hiring
								</span>
								<span className="ml-4 text-sm">Visit our careers page</span>
								<ChevronRightIcon
									className="ml-2 w-5 h-5 text-gray-500"
									aria-hidden="true"
								/>
							</a>
							<AnimatedTitle />

							<p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
								Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
								fugiat.
							</p>

							<div className="mt-10 sm:mt-12"></div>
						</div>
					</div>
					<div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
						<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
							{/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
							<img
								className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
								src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
