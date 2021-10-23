import "./AddProductInput.scss";


const AddProductInput = () => {
    return(
        <div className="tmp-input-item">
            <label>
                <span className="tmp-input-title">Кол-во</span>
                <div>
                    <input className="tmp-input"></input>
                    <span className="text">шт.</span>
                </div>
            </label>
            <label>
                <span className="tmp-input-title">Цена</span>
                <div>
                    <input className="tmp-input"></input>
                    <span className="text">₽</span>
                </div>
            </label>
        </div>
    );
};

export default AddProductInput;