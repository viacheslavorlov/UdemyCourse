import {Component} from "react";
import nextId from "react-id-generator";

import './app.css';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Linch', salary: 11000, increase: false, like: true, id: nextId()},
				{name: 'John', salary: 3000, increase: true, like: false, id: nextId()},
				{name: 'Albert', salary: 5000, increase: false, like:false, id: nextId()}
			],
			visibleData: [],
			term: '',
			filterArg: ''
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

		const newEmployeeData = {
			name,
			salary,
			increase: false,
			id: nextId()
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

	searchEmployee = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => item.name.indexOf(term) > -1);
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	filterArgChange = (filterArg) => {
		this.setState({filterArg});
	}

	filterEmployee = (items, arg) => {
		switch (arg) {
			case 'like':
				return items.filter(item => item.like);
			case 'salary':
				return items.filter(item => item.salary > 4000);
			default:
				return items;
		}
	}
	//
	// changeSalary = (id, newSalary) => {
	// 	this.setState(({...data}) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return {...item, salary: newSalary};
	// 			}
	// 			return item;
	// 		})
	// 	}));
	// }

	render() {
		const { data, term, filterArg} = this.state;
		const employees = this.state.data.length;
		const employeesOnIncrease = this.state.data.filter(item => item.increase).length;

		const visibleData = this.filterEmployee(this.searchEmployee(data, term), filterArg);

		return (

			<div className='app'>
				{/*<WhoAmI name={'alex'} surname={'smith'} myLink={'www.vk.com'}/>*/}
				<AppInfo employees={employees} employeesOnIncrease={employeesOnIncrease}/>

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter filterEmployee={this.filterEmployee}
					           data={visibleData}
							   filterArgChange={this.filterArgChange}/>
				</div>
				<div>
					<EmployeesList data={visibleData}
					               onDelete={this.deleteItem}
								   onToggleIncrease={this.onToggleIncrease}
								   onToggleRise={this.onToggleRise}
								   changeSalary={this.changeSalary}
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