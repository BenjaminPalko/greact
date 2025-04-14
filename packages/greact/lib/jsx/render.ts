import Gtk40 from "gi://Gtk?version=4.0";
import type { JSX } from "./jsx-runtime";
import {
	type FunctionComponent,
	GtkClasses,
	type GtkElements,
	type GtkTag,
	type JSXNode,
} from "./types";

import type GObject from "gi://GObject";

function renderChildren(children: JSXNode | JSXNode[]): GObject.Object[] {
	if (Array.isArray(children)) {
		return children.flatMap(renderChildren);
	}
	if (typeof children === "string") {
		return [new Gtk40.Label({ name: children })];
	}
	return [];
}

function renderTag<T extends GtkTag>(
	tag: T,
	attributes: GtkElements[T],
	children: GObject.Object[],
) {
	const node = new GtkClasses[tag]({ ...attributes });
	return node;
}

export function renderJSX<T extends GtkTag>(
	tag: T | FunctionComponent | undefined,
	props: JSX.IntrinsicElements[T],
) {
	if (typeof tag === "function") {
		return tag(props as Record<string, unknown>);
	}
	if (typeof tag === "undefined") {
		return {};
	}
	const { children, ...rest } = props;
	return renderTag(tag, rest as GtkElements[T], renderChildren(children));
}
