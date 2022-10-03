import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import List from './components/List'
import CompletedItems from './components/CompletedItems'

const App = () => {
  return (
    <div className='container bg-white p-4 mt-5'>
      <Header />
      <Form />
      <List />
      <CompletedItems />
      <Footer />
    </div>
  )
}

export default App
