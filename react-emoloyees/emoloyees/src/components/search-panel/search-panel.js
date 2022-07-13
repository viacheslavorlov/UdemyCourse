import './search-panel.css';
import {Component} from "react";
import React from "react";
import ReactDOM from "react-dom";

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.myRef = React.createRef(); // ! стандартный способ установить
	}

	// setInputRef = elem => {
	// 	this.myRef = elem;
	// }
	//
	focusInput = () => {
		if (this.myRef) {
			this.myRef.current.focus();//переводит фокус обратно на элемент с рефом
		}

	}


	componentDidMount() {
		this.myRef.current.focus();
	}

	onSearch = (e) => {
		const term = e.target.value;
		this.setState({term});
		this.props.onUpdateSearch(term);
	}

	showMeItWorks = () => {
		console.log('click!'); // будет работать на содержимом портала! подобно делигированию событий
	}

	render() {
		return (
			<div onClick={this.showMeItWorks}>
				<input
					ref={this.myRef}
					type={'text'}
					className={'form-control search-input'}
					placeholder={'Найти'}
					value={this.state.term}
					onChange={this.onSearch}
				/>
				<textarea onClick={this.focusInput}></textarea>
				<Portal>
					<Text/>
				</Portal>

			</div>
		)
	}
}

const Portal = (props) => {
	const node = document.createElement('div');
	document.body.appendChild(node);

	return ReactDOM.createPortal(props.children, node);
}

const Text = () => {
	return (
		<div>
			<p
			style={{backgroundColor: 'red',
					position: 'absolute',
					right: '50%',
					top: '10%'}}
			>HELLO!</p>
		</div>
	)

}

export default SearchPanel;