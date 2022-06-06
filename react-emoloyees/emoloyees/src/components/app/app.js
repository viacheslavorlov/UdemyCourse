import {Component} from "react";
import nextId from "react-id-generator";

import './app.css';

import fragments from "../test/fragments";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import WhoAmI from "../test/fragments";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Linch', salary: 11000, increase: false, like: true, id: 1},
				{name: 'John', salary: 3000, increase: true, like: false, id: 2},
				{name: 'Albert', salary: 5000, increase: false, like:false, id: 3}
			]
		}
	}

	deleteItem = id => {
		console.log(id)
		this.setState(({data}) => {
			// const index = data.findIndex(elem => elem.id === id);
			// const before = data.slice(0, index);
			// const after = data.slice(index+1, data.length)
			// return {
			// 	data: [...before, ...after]
			// }

			//или короткий метод с фильтром
			return {
				data: data.filter(elem => elem.id !== id)
			}
		});
	}

	addNewEmployee = (name, salary) => {
		const idForEmployee = nextId();

		const newEmployeeData = {
			name,
			salary,
			increase: false,
			id: idForEmployee
		}
		this.setState(({data}) => {
			const newData = [...data, newEmployeeData]
			return {
				data: newData
			}
		});
	}

	onToggleIncrease = (id) => {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, increase: !old.increase};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			}
		})
	}

	onToggleRise = (id) => {
		// this.setState(({data}) => {
		// 	const index = data.findIndex(elem => elem.id === id);
		//
		// 	const old = data[index];
		// 	const newItem = {...old, like: !old.like};
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
		// 	return {
		// 		data: newArr
		// 	}
		// })
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, like: !item.like}
				}
				return item;
			})
		}))
	}

	render() {
		const employees = this.state.data.length;
		const employeesOnIncrease = this.state.data.filter(item => item.increase).length;

		return (

			<div className='app'>
				{/*<WhoAmI name={'alex'} surname={'smith'} myLink={'www.vk.com'}/>*/}
				<AppInfo employees={employees} employeesOnIncrease={employeesOnIncrease}/>

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				<div>
					<EmployeesList data={this.state.data}
					               onDelete={this.deleteItem}
								   onToggleIncrease={this.onToggleIncrease}
								   onToggleRise={this.onToggleRise}
					/>
				</div>
				<div>
					<EmployeesAddForm
						onAdd={this.addNewEmployee}/>
				</div>
			</div>
		);
	}
}

export default App;