import "./input.css"

export function Input({type, text, name, placeholder, onChangeFN, value}) {
    return (
        <div className="form-cadastro">
            <div>
                <label htmlFor={name}>{text}:</label>
            </div>
            <div>
                <input 
                    type={type} 
                    name={name} 
                    id={name} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChangeFN} 
                />
            </div>
        </div>
    )
}