import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import { TodoInterface } from '../../redux/todo/slice'

export default function CompletedItems() {
  const completedTodos = useSelector((state: RootState) =>
    state.todos.filter((todo: TodoInterface) => todo.completed === true),
  )

  return (
    <h5 className="mt-3 font-weight-light">
      Completed Items:{' '}
      <span className="font-weight-bolder">{completedTodos.length}</span>
    </h5>
  )
}
