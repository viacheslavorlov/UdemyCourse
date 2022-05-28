import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';


const EmployeesList = ({data}) => {

    const employees = data.map((item, i) => {
        // const {id, itemProps} = item;
        return (
            <EmployeesListItem key={i} {...item}/>
            )
    })

    return (
        <ul className={'app-list list-group'}>
            {employees}
        </ul>
    )
}

export default EmployeesList;