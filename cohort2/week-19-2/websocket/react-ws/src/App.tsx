import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage , setLatestMessage] = useState(""); 



  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
      console.log('Connected to server');
      setSocket(socket);
    }
    socket.onmessage = (message) => {
      console.log('Received message:', message.data);
      setLatestMessage(message.data);
    }


  }, [])

  if(!socket) {
    return <div>
      Socket is not connected</div>
  }

  return (
    <>
      {socket ? (
        <div>
          Socket is connected

          {latestMessage}
        </div>

      ) : (
        <div>Socket is not connected</div>
      )}
    </>
  )
}

export default App