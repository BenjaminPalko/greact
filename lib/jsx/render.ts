import type { JSX } from "./jsx-runtime";
import {
	GtkClasses,
	type FunctionComponent,
	type GtkElements,
	type GtkTag,
} from "./types";

function renderTag<T extends GtkTag>(tag: T, attributes: GtkElements[T]) {
	return new GtkClasses[tag]({ ...attributes });
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
	return renderTag(tag, rest as GtkElements[T]);
}
