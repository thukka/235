import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameFetcher from './GameFetcher'

function App() {
  const [count, setCount] = useState(0)
/*   const [playerData, setPlayerData] = useState(null)

  const fetchPlayerData = () => {
    fetch('https://statsapi.web.nhl.com/api/v1/game/2023020063/boxscore')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPlayerData(data)
      })
  }

  useEffect(() => {
    console.log('use effect initiated')
    fetchPlayerData()
  }, [])

  console.log('playerData: ', playerData) */

  GameFetcher()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
{/*           Patu: {playerData.teams.home.players.ID8479339.stats.skaterStats.assists} */}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
