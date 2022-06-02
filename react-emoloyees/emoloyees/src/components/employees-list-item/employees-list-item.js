import './employees-list-item.css';
import {Component} from "react";


class EmployeesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: this.props.increase,
			like: false
		}
	}

	increaseSalary = () => {
		this.setState(({increase}) => ({
				increase: !increase // короткая запись с использованием деструктуризации state ({item}) => ({item...})
			}))
		}


	addFavorite = () => {
		this.setState(({like}) => ({
			like: !like   // короткая запись с использованием деструктуризации state ({item}) => ({item...})
		}))
	}

	render() {
		const {name, salary, onDelete} = this.props;
		const {increase, like} = this.state;

		const adIncrease = (increase) ? ' increase' : '';
		const adLike = (like) ? ' like' : '';

		return (
			<li className={
				"list-group-item d-flex justify-content-between" + adIncrease + adLike
			}>
				<span className="list-group-item-label" onClick={this.addFavorite}>{name}</span>
				<input type="text"
				       className="list-group-item-input" defaultValue={salary + '$'}/>
				<div className={'d-flex justify-content-center align-items-center'}>
					<button type={'button'}
					        onClick={this.increaseSalary}
					        className={'btn-cookie btn-sm'}>
						<i className={'fas fa-cookie'}></i>
					</button>
					<button type={'button'}
					        className={'btn-trash btn-sm'}
							onClick={onDelete}
							>
						<i className={'fas fa-trash'}></i>
					</button>
					<i className={'fas fa-star'}></i>
				</div>
			</li>
		)
	}
}

export default EmployeesListItem;