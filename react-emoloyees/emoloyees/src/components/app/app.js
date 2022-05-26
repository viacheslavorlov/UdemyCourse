import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
	return (
		<div className='app'>
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>

					<AppFilter/>

			</div>
			<div>
				<EmployeesList/>
			</div>
			<div>
				<EmployeesAddForm/>
			</div>
		</div>
	);
}

export default App;