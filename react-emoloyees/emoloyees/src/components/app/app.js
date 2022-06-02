import { Component } from "react";

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
				{name: 'Linch', salary: 11000, increase: false, id: 1},
				{name: 'John', salary: 3000, increase: true, id: 2},
				{name: 'Albert', salary: 5000, increase: false, id: 3}
			]
		}
	}

	deleteItem = id => {
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

	render() {
		return (
			<div className='app'>

				<AppInfo/>

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				<div>
					<EmployeesList data={this.state.data}
					               onDelete={this.deleteItem}/>
				</div>
				<div>
					<EmployeesAddForm/>
				</div>
			</div>
		);
	}
}

export default App;