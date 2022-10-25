import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../redux/store'
import { deleteTodo, updateTodo } from '../../redux/todo/slice'

interface Props {
  id: number
  title: string
  completed: boolean
}

export default function Item({ id, title, completed }: Props) {
  const dispatch: AppDispatch = useDispatch()

  const handleComplete = () => {
    dispatch(updateTodo({ id: id, completed: !completed }))
  }

  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id: id,
      }),
    )
  }

  return (
    <li className={`list-group-item ${completed && 'list-group-item-info'}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={() => handleComplete()}
          ></input>
          {title}
        </span>
        <button className="btn btn-warning" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </li>
  )
}
