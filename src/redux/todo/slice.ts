import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoInterface {
  id: number
  title: string
  completed: boolean
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (
      state: TodoInterface[],
      action: PayloadAction<{ title: string }>,
    ) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      }

      state.push(newTodo)
    },
    updateTodo: (
      state: TodoInterface[],
      action: PayloadAction<{ id: number; completed: boolean }>,
    ) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    deleteTodo: (
      state: TodoInterface[],
      action: PayloadAction<{ id: number }>,
    ): any => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
