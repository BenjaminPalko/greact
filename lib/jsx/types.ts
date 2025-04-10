export type RenderedNode = object;

export type JSXNode =
	| RenderedNode
	| (() => JSXNode)
	| boolean
	| number
	| bigint
	| string
	| null
	| undefined;

export interface JSXChildren {
	children?: JSXNode | JSXNode[] | undefined;
}

export type FunctionComponent = (
	props?: Record<string, unknown>,
) => RenderedNode;
