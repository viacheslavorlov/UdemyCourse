import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';


const EmployeesList = ({data, onDelete}) => {

    const employees = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
            )
    })

    return (
        <ul className={'app-list list-group'}>
            {employees}
        </ul>
    )
}

export default EmployeesList;