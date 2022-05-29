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
				years: state.years + 1,
				position: ''
			})
		);
	}

	commitInput = (e, arg) => {
		console.log(arg);
		this.setState({
			position: e.target.value
		});
	}
				/*onClick - аналог addEventListener*/
	render() {
		const {name, surname, myLink} = this.props;
		const {years, position, text} = this.state;
		return (
			<div>
				<button onClick={this.nextYear}>{text}</button>

				<h1>My name is {name}, surname - {surname}, age - {years}</h1>
				<a href={myLink}></a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInput(e, 'some arg')}/>
				</form>
				<p>{position}</p>
			</div>
		);
	}
}

export default WhoAmI;