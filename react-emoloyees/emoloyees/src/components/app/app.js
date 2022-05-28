import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import WhoAmI from "../test/state";

const propInfo = {name: 'john', surname: 'doe'};

function App() {

	const data = [
		{name: 'Linch', salary: 11000, increase: false, id: 1},
		{name: 'John', salary: 3000, increase: true, id: 2},
		{name: 'Albert', salary: 5000, increase: false, id: 3}
	];

	return (
		<div className='app'>
			<WhoAmI {...propInfo}/>
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
			<div>
				<EmployeesList data={data}/>
			</div>
			<div>
				<EmployeesAddForm/>
			</div>
		</div>
	);
}

export default App;