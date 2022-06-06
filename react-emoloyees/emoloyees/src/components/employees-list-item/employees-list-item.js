import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleRise, onToggleIncrease, increase, like} = props;

    const adIncrease = (increase) ? ' increase' : '';
    const adLike = (like) ? ' like' : '';

    return (
        <li className={
            "list-group-item d-flex justify-content-between" + adIncrease + adLike
        }>
            <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
            <input type="text"
                   className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className={'d-flex justify-content-center align-items-center'}>
                <button type={'button'}
                        onClick={onToggleIncrease}
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

export default EmployeesListItem;