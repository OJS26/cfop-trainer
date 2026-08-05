import { useRef, useState } from 'react'
import 'cubing/twisty'
import { cases, type Case } from './cases'

function visualCubeUrl(c: Case) {
  const params = new URLSearchParams({
    fmt: 'png',
    size: '100',
    view: 'plan',
    stage: c.group === 'OLL' ? 'oll' : 'pll',
    case: c.scramble,
    bg: 't',
  })
  if (c.group === 'OLL') {
    params.set('sch', 'FFFF00,808080,808080,808080,808080,808080')
  }
  return `https://visualcube.api.cubing.net/visualcube.php?${params.toString()}`
}

function App() {
  const [activeTab, setActiveTab] = useState<'OLL' | 'PLL'>('OLL')
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0)
  const currentCase = cases[currentCaseIndex]

  const [showAlgorithm, setShowAlgorithm] = useState(true)
  const [mode, setMode] = useState<'scramble' | 'solve'>('scramble')

  const scrambleRef = useRef<HTMLElement>(null)
  const solveRef = useRef<HTMLElement>(null)

  const selectTab = (tab: 'OLL' | 'PLL') => {
    setActiveTab(tab)
    const firstIndexInTab = cases.findIndex((c) => c.group === tab)
    if (firstIndexInTab !== -1) {
      setCurrentCaseIndex(firstIndexInTab)
    }
    setMode('scramble')
  }

  const selectCase = (index: number) => {
    setCurrentCaseIndex(index)
    setMode('scramble')
  }

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

  const renderCaseGroup = (partNumber: 1 | 2, label: string) => {
    const casesInGroup = cases.filter((c) => c.group === activeTab && c.part === partNumber)
    if (casesInGroup.length === 0) return null

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{label}</span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {cases.map((c, index) =>
            c.group === activeTab && c.part === partNumber ? (
              <button
                key={c.id}
                onClick={() => selectCase(index)}
                style={{
                  fontWeight: index === currentCaseIndex ? 'bold' : 'normal',
                  opacity: index === currentCaseIndex ? 1 : 0.6,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '4px',
                }}
              >
                <img src={visualCubeUrl(c)} width={50} height={50} alt={c.name} />
                {c.name}
              </button>
            ) : null
          )}
        </div>
      </div>
    )
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
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={() => selectTab('OLL')}
          style={{
            fontWeight: activeTab === 'OLL' ? 'bold' : 'normal',
            borderBottom: activeTab === 'OLL' ? '2px solid white' : 'none',
          }}
        >
          OLL
        </button>
        <button
          onClick={() => selectTab('PLL')}
          style={{
            fontWeight: activeTab === 'PLL' ? 'bold' : 'normal',
            borderBottom: activeTab === 'PLL' ? '2px solid white' : 'none',
          }}
        >
          PLL
        </button>
      </div>

      {renderCaseGroup(1, activeTab === 'OLL' ? 'Part 1 — Edge Orientation' : 'Part 1 — Corners')}
      {renderCaseGroup(2, activeTab === 'OLL' ? 'Part 2 — Corner Orientation' : 'Part 2 — Edges')}

      <h1>{currentCase.name}</h1>
      <p>Scramble: {currentCase.scramble}</p>

      <button onClick={() => setShowAlgorithm((prev) => !prev)}>
        {showAlgorithm ? 'Hide Algorithm' : 'Show Algorithm'}
      </button>

      {showAlgorithm && <p>Algorithm: {currentCase.algorithm}</p>}

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