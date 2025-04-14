interface Props {
	name: string;
}

const Window = function ({ name }: Props) {
	return <window name={name} />;
};

export default Window;
