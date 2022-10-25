import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../redux/store'
import { addTodo } from '../../redux/todo/slice'

export default function Form() {
  const dispatch: AppDispatch = useDispatch()
  const [value, setValue] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      addTodo({
        title: value,
      }),
    )

    setValue('')
  }

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2 w-50"
        placeholder="Add todo here"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button
        type="submit"
        className="btn btn-secondary w-25 mb-2 font-weight-bold"
      >
        Submit
      </button>
    </form>
  )
}
