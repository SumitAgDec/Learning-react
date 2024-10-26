import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux';  // Use named import for Provider
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <h1 className='mb-4'>Todo with redux</h1>
    <TodoForm/>
    <TodoItem/>
  </Provider>,
)
