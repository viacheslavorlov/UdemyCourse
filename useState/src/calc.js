import {useState} from "react";

const Calc = () => {

	// Используйте только стрелочную форму методов
	// Почему? Подробный ответ будет в следующем уроке
	const [counter, setCounter] = useState(0);
	function changeCounter(i) {
		if (counter <= 49 && counter >= -49) {
			setCounter(counter => counter + i)
		}


	}
	function rndCounter() {
		setCounter(Math.round((Math.random() * (50 - -50)) - 50));
	}

	function reset() {
		setCounter(0);
	}

	return (
		<div className="app">
			<div className="counter">{counter}</div>
			<div className="controls">
				<button onClick={() => changeCounter(1)}>INC</button>
				<button onClick={() => changeCounter(-1)}>DEC</button>
				<button onClick={rndCounter}>RND</button>
				<button onClick={reset}>RESET</button>
			</div>
		</div>
	)
}

export default Calc;