export default function TaskBlock() {
    const now = new Date()
    return (
         <div className="tasks"> 
        <div className="task">
            <input type="checkbox" className="custom-checkbox"/ >
            <label>Be happy</label>
        </div>
        <div className="date">
                <p>Date: { now.toLocaleTimeString() }</p>
            </div>
            </div>
    )
}