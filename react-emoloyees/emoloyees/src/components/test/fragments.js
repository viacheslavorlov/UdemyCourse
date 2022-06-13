import {Component} from "react";
import styled from "styled-components";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = { // для изменения динамических показателей
			years: 34,
			text: '+++'
		}
	}

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
	// ? Fragment создаётся с помощью пустого тега  !!! не требует дополнительного импорта {Fragment} from 'react'
	// ? или с помощью тега <Fragment><Fragment/> (поддерживает атрибут  key)
	render() {
		const {name, surname, myLink} = this.props;
		const {years, position, text} = this.state;

		//styled CSS

		const Wrapper = styled.div`
          width: 600px;
          background-color: #f8b500;
		`;

		return (
			<>
				<Button>bootstrap button</Button>
				<button onClick={this.nextYear}>{text}</button>
				<Wrapper>
					<h1>My name is {name}, surname - {surname}, age - {years}</h1>
				</Wrapper>
				<a href={myLink}>{myLink}</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInput(e, 'some arg')}/>
				</form>
				<p>{position}</p>

			</>
		);
	}
}

export default WhoAmI;