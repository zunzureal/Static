"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Button, Dropdown, DropdownTrigger,DropdownMenu, DropdownItem } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "../config/site"
import { title, subtitle } from "../components/primitives";
import playbuttonicon from "../public/playbuttonicon.svg"
import Spline from '@splinetool/react-spline';


export default function Home() {
	return (
		<section className="noScroll flex flex-col items-start justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-left justify-start z-10">
				<h1 className={title()}>Best&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Practise&nbsp;</h1>
				<br />
				<h1 className={title()}>
					website full of statics problems.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Easy to learn together.
				</h2>
			</div>

			<div className="flex gap-3 z-10">
				<Dropdown>
					<DropdownTrigger>
						<Button className="w-36 h-12 bg-gradient-to-tr from-pink-500 to-purple-500 text-white">
							<span className="pl-12">
								<span className="pr-4">Get Started</span>
							</span>
							<a className="link-arrow"></a>
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Static Actions">
						<DropdownItem href="ex1">Ex1</DropdownItem>
						<DropdownItem href="ex2">Ex2</DropdownItem>
						<DropdownItem href="ex3">Ex3</DropdownItem>
						<DropdownItem href="ex3">Ex4</DropdownItem>
						<DropdownItem href="ex3">Ex5</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Button color="primary" variant="light" className="w-36 h-12">
					Watch Video
				</Button>
			</div>
			<Spline className="absolute ml-36 hidden md:block" scene="https://prod.spline.design/o2qhn6uXcboL4xlG/scene.splinecode" />
			<div className="sm:hidden">
				<Spline className="absolute" scene="https://prod.spline.design/o2qhn6uXcboL4xlG/scene.splinecode" />
			</div>
		</section >
	);
}
