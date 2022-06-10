import './employees-add-form.scss';
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.name && this.state.salary) {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            });
        }
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form className="add-form d-flex"
                      onSubmit={this.onSubmit}
                >
                    <input
                        className={'form-control new-post-label'}
                        type="text"
                        placeholder={'Name'}
                        onChange={this.onValueChange}
                        name={'name'}
                        value={name}/>
                    <input
                        className={'form-control new-post-label'}
                        type="text"
                        placeholder={'Зарплата в $'}
                        onChange={this.onValueChange}
                        name={'salary'}
                        value={salary}/>
                    <button type={'submit'}
                            className={'btn btn-outline-light'}>
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;