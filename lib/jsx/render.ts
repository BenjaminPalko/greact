import type { JSX } from "./jsx-runtime";
import type { FunctionComponent } from "./types";

export function renderJSX<T extends keyof JSX.IntrinsicElements>(
	tag: string | FunctionComponent | undefined,
	props: JSX.IntrinsicElements[T],
) {
	if (typeof tag === "function") {
		return tag(props);
	}
	if (typeof tag === "undefined") {
		return {};
	}
	const { children, ...rest } = props;
	return { [tag]: { ...rest } };
}
