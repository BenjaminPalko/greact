import GLib from "gi://GLib?version=2.0";
import Gtk40 from "gi://Gtk?version=4.0";
import Window from "./windows";

Gtk40.init();

const root = Window({ name: "foo" });

if (root instanceof Gtk40.Window) {
	const loop = GLib.MainLoop.new(null, false);

	root.connect("close-request", () => loop.quit());
	root.present();

	loop.run();
	console.log(root.name);
}
