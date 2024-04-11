import { useQuery } from '@tanstack/react-query'
import './App.css'
import Form from './components/Form'

function App() {
  const { data, status, isFetching } = useQuery(
    ['todo'],
    async () => await (await fetch('http://localhost:8000/todo')).json()
  )

  console.log('Data', data)

  if (isFetching) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <Form />
      <p>Status: {status}</p>
      {data && data.data && data.data.map((todo) => <li>{todo.title}</li>)}
    </div>
  )
}

export default App
