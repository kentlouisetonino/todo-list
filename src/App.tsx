import 'bootstrap/dist/css/bootstrap.min.css'

import CompletedItems from './components/CompletedItems'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import List from './components/List'

export default function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <Header />
      <Form />
      <List />
      <CompletedItems />
      <Footer />
    </div>
  )
}
