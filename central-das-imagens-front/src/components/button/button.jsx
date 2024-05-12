import "./button.css"

export function Button({type, children}) {
    return (
        <button type={type} className="botao">{children}</button>
    )
}