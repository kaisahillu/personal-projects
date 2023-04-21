import './FilterBar.css';

export function FilterBar() {

    return (
        <div className="filterbar">
            <select name='categories'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}