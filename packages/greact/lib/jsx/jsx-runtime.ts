import type GObject20 from "gi://GObject?version=2.0";
import { renderJSX } from "./render";
import type { GtkElements, GtkTag, JSXChildren } from "./types";

namespace JSX {
	// Allow any html tag
	export type IntrinsicElements = {
		[T in GtkTag]: GtkElements[T] & JSXChildren;
	};

	// Declare the shape of JSX rendering result
	// This is required so the return types of components can be inferred
	export type Element = GObject20.Object & {};
}

// Expose the main namespace
export type { JSX };

// Expose factories
export const jsx = renderJSX;
export const jsxs = renderJSX;
export const jsxDEV = renderJSX;
