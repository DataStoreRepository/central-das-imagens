import "./button.css"

export function Button({type, onClick, children, color, size}) {

    const buttonStyle = {
        backgroundColor: color,
        border: 'none',
        padding: '10px 20px',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '16px',
        width: size
    };

    return (
        <button style={buttonStyle} type={type} onClick={onClick} className="botao">{children}</button>
    )
}