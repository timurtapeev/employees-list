import './app-filter.css'

// class AppFilter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filter: 'all'
//         }
//     }
//     onUpdateFilter = (e) => {
//         const newFilter = e.currentTarget.getAttribute('data-filter');
//         this.setState(() => ({
//             filter: newFilter
//         }))
//         this.props.onUpdateFilter(newFilter);
//     }

//     render() {
//         return (
//             <div className="btn-group">
//                 <button 
//                     className="btn btn-light"
//                     type="button"
//                     data-filter='all'
//                     onClick={this.onUpdateFilter}>
//                         Все сотрудники
//                 </button>
    
//                 <button 
//                     className="btn btn-outline-light"
//                     type="button"
//                     data-filter='rise'
//                     onClick={this.onUpdateFilter}>
//                         На повышение
//                 </button>
    
//                 <button 
//                     className="btn btn-outline-light"
//                     type="button"
//                     data-filter='more'
//                     onClick={this.onUpdateFilter}>
//                         З/П больше 1000$
//                 </button>
//             </div>
//         )
//     }
// }

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;