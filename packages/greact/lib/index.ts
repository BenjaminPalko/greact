import type { JSX } from "@lib/jsx/jsx-runtime";
import GLib20 from "gi://GLib";
import Gtk40 from "gi://Gtk?version=4.0";

export * from "./jsx/jsx-runtime";

export const createRoot = () => {
	Gtk40.init();
	const render = (element: JSX.Element) => {
		const loop = GLib20.MainLoop.new(null, false);

		if (element instanceof Gtk40.Window) {
			element.connect("close-request", () => loop.quit());
			element.present();
		}

		loop.run();
	};

	return {
		render: render,
	};
};
