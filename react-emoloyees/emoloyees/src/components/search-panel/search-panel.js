import './search-panel.css';
import {Component} from "react";
import React from "react";

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		// this.myRef = React.createRef(); // ! стандартный способ установить
	}

	setInputRef = elem => {
		this.myRef = elem;
	}

	focusInput = () => {
		if (this.myRef) {
			this.myRef.focus();
		}

	}


// componentDidMount() {
//
// }

onSearch = (e) => {
	const term = e.target.value;
	this.setState({term});
	this.props.onUpdateSearch(term);
}

render()
{
	return (
		<div>
			<input
				ref={this.setInputRef}
				type={'text'}
				className={'form-control search-input'}
				placeholder={'Найти'}
				value={this.state.term}
				onChange={this.onSearch}
			/>
			<textarea onClick={this.focusInput}></textarea>
		</div>
	)
}
}

export default SearchPanel;