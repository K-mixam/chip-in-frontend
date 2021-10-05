
import "./Sorting.scss";


const Sorting = () => {
    return(
        <div className="sort-form">
            <input type="checkbox" className="sort-form sort-form_box" id="chekbox_1"/>
            <label htmlFor="chekbox_1" className="sort-form sort-form_text">Только мои комнаты</label>
        </div>
    )
}

export default Sorting;