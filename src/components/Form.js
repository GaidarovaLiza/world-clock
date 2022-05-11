import { ReactPropTypes } from "react";
import { useState } from "react";


export default function Form({ addNewClock }) {
	const initialFormState = { id: null, name: "", timeZone: "", time: "" };
	const [clock, setClock] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.currentTarget;
		setClock({ ...clock, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!clock.name || !clock.timeZone) {
			return alert("Заполните все поля!")
		} else {
			setClock(initialFormState);
			addNewClock(clock);
			return;
		}
	};

	return (
		<form onSubmit={handleSubmit}	>
			<div className="title">
				<span className="title-name">Название</span>
				<span className="title-time-zone">Временная зона</span>
			</div>
			<input
				type="text"
				name="name"
				value={clock.name}
				onChange={handleInputChange}
			/>
			<input
				type="text"
				name="timeZone"
				value={clock.timeZone}
				onChange={handleInputChange}
			/>
			<button className="add-clock">Добавить</button>
		</form>
	)
}