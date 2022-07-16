import {Component, useEffect, useState} from 'react';
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
		console.log('log');
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
				<img className="d-block w-100"
				     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
				     alt="slide"/>
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


function App() {
	const [slider, setSlider] = useState(true);

	return (
		<>
			<button onClick={() => setSlider(!slider)}>Click!</button>
			{slider ? <Slider/> : null}{/* ! useState useEffect*/}
			<Calc/> {/* ! useState*/}
		</>
	);
}

export default App;
