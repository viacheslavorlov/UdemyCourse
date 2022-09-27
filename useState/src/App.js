import {
	useEffect,
	useRef,
	useState,
	useCallback,
	useMemo,
	memo,
	PureComponent,
	Component,
	createContext,
	useContext
} from 'react';
import React from "react";
import {Container} from 'react-bootstrap';
import './App.css';
import Calc from "./calc";
import Bank from "./components/bank/Bank";
import Slider from "./components/Slider/Slider";
import NamesList from "./components/NamesList/NamesList";


// * useContext


const dataContext = createContext({
	name: 'none',
	surname: 'none2'
});

// const {Provider, Consumer} = dataContext;
//
//
//
// class InputComponent extends Component {
// 	render () {
// 		return (
// 			// <Consumer>
// 			// 	{
// 			// 		value => {
// 			// 			return (
// 			// 				<input
// 			// 					type="email"
// 			// 					value={value.surname}
// 			// 					className="form-control"
// 			// 					placeholder="name@example.com"/>
// 			// 			)
// 			// 		}
// 			// 	}
// 			//
// 			// </Consumer>
//
// 			<input
// 				type="email"
// 				value={this.context.surname}
// 				className="form-control"
// 				placeholder="name@example.com"/>
// 		)
// 	}
// }
//
// InputComponent.contextType = dataContext;

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

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в
// -50/50. По достижению границы ничего не происходит 3) RND изменяет счетчик в случайное значение от -50 до 50.
// Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния 4) RESET сбрасывает счетчик в 0
// или в начальное значение из пропсов. Выберите один из вариантов


// function useInputWithValidate(initialValue) {
// 	const [value, setValue] = useState(initialValue)
//
// 	const onChange = event => {
// 		setValue(event.target.value);
// 	}
// 	const validateInput = () => value.search(/\d/) >= 0;
// 	return {value, onChange, validateInput};
// }

//***мемоизация функционального компонента***
// function propsCompare(prev, next) {
//
// 	return prev.fixedProp.name === next.fixedProp.name;
// }


const InputComponent = () => {
	const context = useContext(dataContext);
	return (
		<input type="email"
		       value={context.surname}
				className="form-control"
		       placeholder="name@example.com"/>
	)
}
const Form = (props) => {
	console.log('form render');
		return (
			<Container>
				<form className="w-50 border mt-5 p-3 m-auto">
					<div className="mb-3">
						<InputComponent/>
						<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
						<input type="email"
						       // onChange={event => this.setState((state) => ({...state, name: event.target.value}))}
						       value={props.name}
						       className={`form-control`}
						       id="exampleFormControlInput1" placeholder="name@example.com"/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea" className="form-label">Example Textarea</label>
						<textarea
							id="exampleFormControlTextarea"
							className="form-control"
							// onChange={event => this.setState((state) => ({...state, email: event.target.value}))}
							value={props.email}
							rows="3"></textarea>
					</div>

				</form>
			</Container>
		)
}

// * мемоизация классового компонента через PureComponent (происходит автоматически)
// class Form extends PureComponent {
//
//
// 	render() {
//
// 		// input = useInputWithValidate('');
// 		// textarea = useInputWithValidate('');
//
// 		// const color = input.validateInput() ? 'text-danger' : null;
// 		console.log('form render')
//
// 		return (
// 			<Container>
// 				<form className="w-50 border mt-5 p-3 m-auto">
// 					<div className="mb-3">
// 						<input type="text" value={`${this.props.name} / ${this.props.email}`} className="form-control"
// 						       readOnly/>
// 						<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
// 						<input type="email"
// 						       // onChange={event => this.setState((state) => ({...state, name: event.target.value}))}
// 						       value={this.props.name}
// 						       className={`form-control`}
// 						       id="exampleFormControlInput1" placeholder="name@example.com"/>
// 					</div>
// 					<div className="mb-3">
// 						<label htmlFor="exampleFormControlTextarea" className="form-label">Example Textarea</label>
// 						<textarea
// 							id="exampleFormControlTextarea"
// 							className="form-control"
// 							// onChange={event => this.setState((state) => ({...state, email: event.target.value}))}
// 							value={this.props.email}
// 							rows="3"></textarea>
// 					</div>
//
// 				</form>
// 			</Container>
// 		)
// 	}
// }







function App() {
	const [fixedProp, setFixedProp] = useState({
		name: 'none',
		surname: 'none2'
	});
	const [slider, setSlider] = useState(true);
	const [value, setValue] = useState(0);

	const [amount, setAmount] = useState(0)

	const [valute, setValute] = useState('USD');
	const address = `https://www.cbr-xml-daily.ru/daily_json.js`;
	const getResource = async (url) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}
		return await res.json();
	}
	const getValue = async (url) => {
		const res = await getResource(url);
		setValue((res.Valute[valute].Value * amount).toFixed(2));
		// setFixedProp((fixedProp) => ({...fixedProp, name: value}))
	}
	useEffect(() => {
		getValue(address)
	}, [valute, amount]);

	return (
		// <Provider value={fixedProp}>
		<>
			{/*<NamesList/>*/}

			{/*<button onClick={() => setSlider(!slider)}>Click!</button>*/}
			{/*{slider ? <Slider/> : null}/!* ! useState useEffect*!/*/}
			{/*<Calc/> /!* ! useState*!/*/}
			<Bank amount={amount} value={value} valute={valute} setAmount={setAmount} setValue={setValue} setValute={setValute}/>
			{/* ! useState !useRef  ! useEffect*/}
			<Form name={fixedProp.name} email={fixedProp.surname}/>
		</>
		// </Provider>
	);
}

export default App;
