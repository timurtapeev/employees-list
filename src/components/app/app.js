import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name: 'John', surname: 'Ivanov', salary: 2000, increase: false, id: 1},
        {name: 'Alex', surname: 'Smith', salary: 500, increase: true, id: 2},
        {name: 'Ivan', surname: 'Duglas', salary: 1100, increase: false, id: 3}
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;