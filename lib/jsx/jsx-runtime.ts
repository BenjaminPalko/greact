import { renderJSX } from "./render";
import type { JSXChildren, RenderedNode } from "./types";

namespace JSX {
	export type Attributes = Record<string, unknown> & JSXChildren;
	// Allow any html tag
	export type IntrinsicElements = Record<string, Attributes>;

	// Declare the shape of JSX rendering result
	// This is required so the return types of components can be inferred
	export type Element = RenderedNode;
}

// Expose the main namespace
export type { JSX };

// Expose factories
export const jsx = renderJSX;
export const jsxs = renderJSX;
export const jsxDEV = renderJSX;
