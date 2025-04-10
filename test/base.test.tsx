describe("JSX", () => {
	it("should render basic", () => {
		const Component = () => {
			console.log("Component");
			return (
				<div>
					<span>First</span>
				</div>
			);
		};
		const rendered = (
			<div>
				<span>Second</span>
				<Component />
			</div>
		);
		console.log(JSON.stringify(rendered, null, 2));
	});
});
