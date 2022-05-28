import {Component} from "react";

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = { // для изменения динамических показателей
			years: 34,
			text: '+++'
		}
	}
	// state - часть классового объекта.
	// состояние может динамически меняться
	// может быть как у классовых так и у функциональных компонентов
	// напрямую state менять нельзя, только через команду setState()
	// изменение state асинхронная операция, поэтому для точности требуется передавать callback функцию
	// для сохранения последовательности действий
	// (состояние изменяется на основании предыдущего состояния -
	// если оно не успело измениться в ходе асинхронной операции -
	// то нормальная последовательность действий может нарушиться)
	// можно менять только состояния которые нужно изменить (через функцию setState()),
	// остальные состояния - не указанные в функции останутся в неизменном виде.

	nextYear = () => { // В КЛАССАХ ТОЛЬКО СТРЕЛОЧНЫЕ ФУРКЦИИ!
		this.setState(state => ({
				years: state.years + 1
			})
		);
	}

	render() {
		const {name, surname, myLink} = this.props;
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				{/*onClick - аналог addEventListener*/}
				<h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
				<a href={myLink}></a>
			</div>
		);
	}
}

export default WhoAmI;