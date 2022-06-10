import './app-filter.css';
import {Component} from "react";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterArg: ''
        }
    }


    filterEmployee = (e) => {
        const filterArg =  e.target.getAttribute('datafld');

        this.props.filterArgChange(filterArg);
        this.props.filterEmployee(this.props.data, filterArg);
    }


    render() {

        const buttonsData = [
            {name: 'all', label: 'Все сотрудники', colored: false},
            {name: 'like', label: 'На повышение', colored: false},
            {name: 'salary', label: 'Зарплата больше 4000$', colored: true}
        ];

        const buttons = buttonsData.map(({name, label,colored}) => {

            const active = this.state.filterArg === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';
            const style = colored ? {color: 'red'} : null;
            return (
                <button
                    className={`btn ${clazz}`}
                    type={'button'}
                    onClick={this.filterEmployee}
                    datafld={name}
                    key={name}
                    style={style}>
                    {label}
                </button>
            )
        });

        return (
            <div className={'button-group'}>
                {buttons}
                {/*<button*/}
                {/*    className={'btn btn-light'}*/}
                {/*    type={'button'}*/}
                {/*    onClick={this.filterEmployee}*/}
                {/*    data-filter={''}>*/}
                {/*    Все сотрудники*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className={'btn btn-outline-light'}*/}
                {/*    type={'button'}*/}
                {/*    onClick={this.filterEmployee}*/}
                {/*    data-filter={'like'}>*/}
                {/*    На повышение*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className={'btn btn-outline-light'}*/}
                {/*    type={'button'}*/}
                {/*    onClick={this.filterEmployee}*/}
                {/*    data-filter={'salary'}>*/}
                {/*    Зарплата больше 1000$*/}
                {/*</button>*/}
            </div>
        );
    }
}

export default AppFilter;