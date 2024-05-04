import "./container.css"

export function Container ({children}) {
    return (
        <div className="container">
            {children}
        </div>
    )
}