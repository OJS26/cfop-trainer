import { useEffect, useRef, useState } from 'react'
import 'cubing/twisty'
import { sune } from './cases'

function App() {
  const playerRef = useRef<HTMLElement>(null)
  const [showAlgorithm, setShowAlgorithm] = useState(true)

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

      <button onClick={() => setShowAlgorithm((prev) => !prev)}>
        {showAlgorithm ? 'Hide Algorithm' : 'Show Algorithm'}
      </button>

      {showAlgorithm && <p>Algorithm: {sune.algorithm}</p>}

      {/* @ts-expect-error - twisty-player is a custom element from cubing.js, not a typed React component */}
      <twisty-player
        ref={playerRef}
        alg={sune.algorithm}
        experimental-setup-anchor="start"
        background="none"
        control-panel="bottom-row"
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  )
}

export default App