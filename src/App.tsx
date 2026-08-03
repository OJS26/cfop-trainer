import { useEffect, useRef } from 'react'
import 'cubing/twisty'
import { sune } from './cases'

function App() {
  const playerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // @ts-expect-error - twisty-player is a custom element, not a typed React component
    playerRef.current?.play?.()
  }, [])

  return (
    <div
      style={{
        background: '#111',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        color: 'white',
        fontFamily: 'sans-serif',
        gap: '1rem',
      }}
    >
      <h1>{sune.name}</h1>
      <p>Scramble: {sune.scramble}</p>

      
      
    </div>
  )
}

export default App