import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const createTodo = (text) => {
  return () =>
    fetch('http://localhost:8000/todo/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: text }),
    })
}

const Form = () => {
  const [text, setText] = useState('')
  const queryClient = useQueryClient()

  const todoMutation = useMutation(createTodo(text), {
    onSuccess: () => {
      console.log('Success')
      queryClient.invalidateQueries(['todo'])
    },
    onError: (error) => {
      console.log('Error')
    },
  })

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button onClick={(e) => todoMutation.mutate()}>Create</button>
    </div>
  )
}

export default Form
