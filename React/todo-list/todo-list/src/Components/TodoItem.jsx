

export default function TodoItem() {
    return (
        <div className="todo-item">
            <span id="id">1.</span>
            <span className="description">Sample Todo Item Lorem ipsum dolor sit amet.</span>
            <input type="checkbox" />
            <button>Delete</button>
        </div>
    )
}