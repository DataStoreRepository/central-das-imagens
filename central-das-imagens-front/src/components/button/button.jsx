import "./button.css"

export function Button({type, onClick, children}) {
    return (
        <button type={type} onClick={onClick} className="botao">{children}</button>
    )
}