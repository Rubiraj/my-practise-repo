import React from 'react'
import todosData from './todosItem'
import TodoItem from './Todoitem'
import './style.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = { todos: todosData }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const undatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }

                }
                return todo
            })
            return {
                todos: undatedTodos
            }
        })
    }

    render() {
        const todosComponents = this.state.todos.map(item =>
            <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
                {todosComponents}
            </div>
        )
    }
}

export default App