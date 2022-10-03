import React from 'react'
import { useSelector } from 'react-redux'

const CompletedItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true),
  )

  return (
    <h5 className='mt-3 font-weight-light'>
      Completed Items:{' '}
      <span className='font-weight-bolder'>{completedTodos.length}</span>
    </h5>
  )
}

export default CompletedItems
