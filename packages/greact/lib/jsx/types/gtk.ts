import Gtk40 from "gi://Gtk?version=4.0";

export const GtkClasses = {
	window: Gtk40.Window,
};
export type GtkElements = {
	[K in keyof typeof GtkClasses]: ConstructorParameters<
		(typeof GtkClasses)[K]
	>[0];
};
export type GtkTag = keyof typeof GtkClasses;
