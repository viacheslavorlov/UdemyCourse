import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить нового сотрудника</h3>
            <form className="add-form d-flex">
                <input
                    className={'form-control new-post-label'}
                    type="text"
                    placeholder={'Name'}/>
                <input
                    className={'form-control new-post-label'}
                    type="text"
                    placeholder={'Зарплата в $'}/>
                <button type={'submit'}
                    className={'btn btn-outline-light'}>
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;