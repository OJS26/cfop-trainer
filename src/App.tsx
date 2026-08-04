import { useRef, useState } from 'react'
import 'cubing/twisty'
import { cases } from './cases'

function App() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0)
  const currentCase = cases[currentCaseIndex]

  const [showAlgorithm, setShowAlgorithm] = useState(true)
  const [mode, setMode] = useState<'scramble' | 'solve'>('scramble')

  const scrambleRef = useRef<HTMLElement>(null)
  const solveRef = useRef<HTMLElement>(null)

  const playScramble = () => {
    setMode('scramble')
    const player = scrambleRef.current as any
    if (!player) return
    player.timestamp = 'start'
    player.play()
  }

  const playSolve = () => {
    setMode('solve')
    const player = solveRef.current as any
    if (!player) return
    player.timestamp = 'start'
    player.play()
  }

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
      <h1>{currentCase.name}</h1>
      <p>Scramble: {currentCase.scramble}</p>

      <button onClick={() => setShowAlgorithm((prev) => !prev)}>
        {showAlgorithm ? 'Hide Algorithm' : 'Show Algorithm'}
      </button>

      {showAlgorithm &&
        (mode === 'scramble' ? (
          // @ts-expect-error - twisty-alg-viewer is a custom element, not typed for React
          <twisty-alg-viewer for="scramble-player" alg={currentCase.scramble} />
        ) : (
          // @ts-expect-error - twisty-alg-viewer is a custom element, not typed for React
          <twisty-alg-viewer for="solve-player" alg={currentCase.algorithm} />
        ))}

      <div style={{ display: mode === 'scramble' ? 'block' : 'none' }}>
        {/* @ts-expect-error - twisty-player is a custom element from cubing.js, not a typed React component */}
        <twisty-player
          id="scramble-player"
          ref={scrambleRef}
          alg={currentCase.scramble}
          background="none"
          control-panel="bottom-row"
          style={{ width: '300px', height: '300px' }}
        />
      </div>

      <div style={{ display: mode === 'solve' ? 'block' : 'none' }}>
        {/* @ts-expect-error - twisty-player is a custom element from cubing.js, not a typed React component */}
        <twisty-player
          id="solve-player"
          ref={solveRef}
          experimental-setup-alg={currentCase.scramble}
          alg={currentCase.algorithm}
          background="none"
          control-panel="bottom-row"
          style={{ width: '300px', height: '300px' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={playScramble}>Play Scramble</button>
        <button onClick={playSolve}>Play Solve</button>
      </div>
    </div>
  )
}

export default App