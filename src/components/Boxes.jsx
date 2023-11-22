import React from "react";

const Boxes = () => {
	const options = ['One', 'Two', 'Three', 'Four', 'Five'];
	const onOptionChangeHandler = (event) => {
		console.log("User Selected Value - ", event.target.value)
	}
	return (
		<>
			<center>
				<h1>Welcome to Geeks for Geeks</h1>
				<h3>HTML select tag in React js</h3>

				<select onChange={onOptionChangeHandler}>

					<option>Please choose one option</option>
					{options.map((option, index) => {
						return <option key={index} >
							{option}
						</option>
					})}
				</select>
			</center>
		</>
	);
};

export default Boxes;
