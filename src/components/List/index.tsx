import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import { TodoInterface } from '../../redux/todo/slice'
import Item from '../Item'

export default function List() {
  const todos = useSelector((state: RootState) => state.todos)

  return (
    <ul className="list-group">
      {todos.map((todo: TodoInterface, index: number) => (
        <Item
          key={index}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  )
}
