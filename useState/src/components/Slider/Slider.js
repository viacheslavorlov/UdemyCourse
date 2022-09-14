import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Container} from "react-bootstrap";

const countTotal = (num) => {
	console.log('counting');
	return num + 10;
}

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

	const getSomeImages = useCallback(() => {
			console.log('fetching');
			return [
				"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
				"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
			]
		}, []
	);


	useEffect(() => {
		console.log('effect');
		document.title = `Slide: ${slide}`;

		window.addEventListener('click', logging);

		return () => {
			window.removeEventListener("click", logging);
		}
	}, [slide]);

	const total = useMemo(() => {
		return countTotal(slide);
	}, [slide]);


	return (
		<Container>
			<div className="slider w-50 m-auto">

				<Slide getSomeImages={getSomeImages}/>

				<div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null} </div>
				<div className="text-center mt-5">Total count of slides: {total}</div>
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

const Slide = ({getSomeImages}) => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		setImages(getSomeImages());
	}, [getSomeImages]);
	return (
		<>
			{images.map((url, i) => {
				return (
					<img className="d-block w-100"
					     src={url}
					     key={i}
					     alt="slide"/>
				)
			})}
		</>
	)
}

export default Slider;