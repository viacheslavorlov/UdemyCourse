import {useEffect, useRef, useState} from 'react';
import React from "react";
import {Container} from 'react-bootstrap';
import './App.css';
import Calc from "./calc";
// class Slider extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }
//
//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }
//
//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }
//
//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100"
// src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
// alt="slide" /> <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto'
// : null}</div> <div className="buttons mt-3"> <button className="btn btn-primary me-2" onClick={() =>
// this.changeSlide(-1)}>-1</button> <button className="btn btn-primary me-2" onClick={() =>
// this.changeSlide(1)}>+1</button> <button className="btn btn-primary me-2" onClick={this.toggleAutoplay}>toggle
// autoplay</button> </div> </div> </Container> ) } }


const calcValue = () => {
	console.log('random');

	return +(Math.random() * (50 - -50) + -50).toFixed(0);
}

const Slider = (props) => {

	const [slide, setSlide] = useState(0); //вызова функции быть не должно, либо callback функции с
	// аргументами - засоряет память
	const [autoplay, setAutoplay] = useState(false);

	function changeSlide(i) {
		setSlide(slide => slide + i);
	}

	function toogleAutoplay() {
		setAutoplay(autoplay => !autoplay);
	}

	// ! вариант с объектом состояния - нежелательно использовать, так как сильно усложняет логику и требует
	// усиленного контролья за иммутабельностью
	// const [state, setState] = useState({slide: 0, autoplay: false});
	//
	// function changeSlide(i) {
	// 	setState(state => ({...state, slide: state.slide + i}));
	// }
	//
	// function toogleAutoplay() {
	// 	setState(state => ({...state, autoplay: !state.autoplay}));
	// }

	function logging() {
		// console.log('log');
	}

	const getSomeImages = () => {
		console.log('fetching');
		return [
			"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
			"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
		]
	}

	useEffect(() => {
		console.log('effect');
		document.title = `Slide: ${slide}`;

		window.addEventListener('click', logging);

		return () => {
			window.removeEventListener("click", logging);
		}
	}, [slide]);


	return (
		<Container>
			<div className="slider w-50 m-auto">

				{
					getSomeImages().map((url, i) => {
						return (
							<img className="d-block w-100"
							     src={url}
							     key={i}
							     alt="slide"/>
						)
					})
				}

				<div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null} </div>
				<div className="buttons mt-3">
					<button
						className="btn btn-primary me-2"
						onClick={() => changeSlide(-1)}>-1
					</button>
					<button
						className="btn btn-primary me-2"
						onClick={() => changeSlide(1)}>+1
					</button>
					<button
						className="btn btn-primary me-2"
						onClick={toogleAutoplay}>toggle autoplay
					</button>
				</div>
			</div>
		</Container>
	)
}


const Bank = () => {

	const [valueUSD, setValueUSD] = useState();
	const [valueEUR, setValueEUR] = useState();
	const [valute, setValute] = useState();
	const valueRef = useRef(document.querySelector('#valute'));
	const onValueChange = () => {
		setValute(valueRef.current.value);
	};


	const address = `https://www.cbr-xml-daily.ru/daily_json.js`;
	const getResource = async (url) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}
		return await res.json();
	}
	const getValueUSD = async (url) => {
		const res = await getResource(url);
		setValueUSD(res['Valute']['USD'].Value);
	}

	const getValueEUR = async (url) => {
		const res = await getResource(url);
		setValueEUR(res['Valute']['EUR'].Value);
	}

	useEffect(() => {
		onValueChange();
	})

	useEffect(() => {
		getValueUSD(address);
		getValueEUR(address);
	}, [valueEUR, valueEUR]);


	return (
		<div className="app">
			<div>
				<select ref={valueRef} name="valute" id="valute" onChange={onValueChange}>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
				</select>

				<p>1 {valute} = {valute === 'USD' ? valueUSD : valueEUR} рублей</p>

			</div>
		</div>
	)
}


// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в
// -50/50. По достижению границы ничего не происходит 3) RND изменяет счетчик в случайное значение от -50 до 50.
// Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния 4) RESET сбрасывает счетчик в 0
// или в начальное значение из пропсов. Выберите один из вариантов


function App() {
	const [slider, setSlider] = useState(true);

	return (
		<>
			<button onClick={() => setSlider(!slider)}>Click!</button>
			{slider ? <Slider/> : null}{/* ! useState useEffect*/}
			<Calc/> {/* ! useState*/}
			<Bank/>
		</>
	);
}

export default App;
