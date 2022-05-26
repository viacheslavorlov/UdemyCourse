import './app-filter.css';

const AppFilter = () => {
    return (
        <div className={'button-group'}>
            <button
            className={'btn btn-light'}
            type={'button'}>
                Все сотрудники
            </button>
            <button
                className={'btn btn-outline-light'}
                type={'button'}>
                    На повышение
            </button>
            <button
                className={'btn btn-outline-light'}
                type={'button'}>
                Зарплата больше 1000$
            </button>
        </div>
    );
}

export default AppFilter;