import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'BLMFaYlxf7k4p0iwa4CrWlzakmqjPGn8bGCE4-ecB1M5eP8eKBt3NOYbe4tMjiqaNZTOQ2NZL_7w9mnC8MVun-s'
        }).then(subscription => {
          // Отправьте подписку на ваш сервер
          console.log('Push Subscription: ', subscription);
        }).catch(error => {
          console.error('Error during push subscription', error);
        });
      });
    }
  }, []);

  return (
    <>
      <div>
        hi
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
