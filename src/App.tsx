import { useEffect, useRef, useState } from 'react'
import 'cubing/twisty'
import { sune } from './cases'

function App() {
  const playerRef = useRef<HTMLElement>(null)
  const [showAlgorithm, setShowAlgorithm] = useState(true)
  const [mode, setMode] = useState<'scramble' | 'solve'>('scramble')

  useEffect(() => {
    const player = playerRef.current as any
    if (!player) return
    player.timestamp = 'start'
    player.play()
  }, [mode])

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

      {mode === 'scramble' ? (
        // @ts-expect-error - twisty-player is a custom element from cubing.js, not a typed React component
        <twisty-player
          ref={playerRef}
          alg={sune.scramble}
          background="none"
          control-panel="bottom-row"
          style={{ width: '300px', height: '300px' }}
        />
      ) : (
        // @ts-expect-error - twisty-player is a custom element from cubing.js, not a typed React component
        <twisty-player
          ref={playerRef}
          experimental-setup-alg={sune.scramble}
          alg={sune.algorithm}
          background="none"
          control-panel="bottom-row"
          style={{ width: '300px', height: '300px' }}
        />
      )}

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => setMode('scramble')}>Play Scramble</button>
        <button onClick={() => setMode('solve')}>Play Solve</button>
      </div>
    </div>
  )
}

export default App