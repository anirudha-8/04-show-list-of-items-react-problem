const ShowList = () => {
	const items = [
		"item1",
		"item2",
		"item3",
		"item4",
		"item5",
		"item6",
		"item7",
		"item8",
		"item9",
		"item10",
	];
	return (
		<div>
			<ul>
				{items.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
};
export default ShowList;
