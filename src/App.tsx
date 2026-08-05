import { useRef, useState } from 'react'
import 'cubing/twisty'
import { cases, type Case } from './cases'

function generatedImageUrl(c: Case, size = 100) {
  const params = new URLSearchParams({
    fmt: 'png',
    size: String(size),
    stage: c.group === 'OLL' ? 'oll' : c.group === 'PLL' ? 'pll' : 'f2l',
    case: c.scramble,
    bg: 't',
  })
  if (c.group === 'OLL' || c.group === 'PLL') {
    params.set('view', 'plan')
  }
  if (c.group === 'OLL') {
    params.set('sch', 'FFFF00,808080,808080,808080,808080,808080')
  }
  return `https://visualcube.api.cubing.net/visualcube.php?${params.toString()}`
}

function caseImageUrl(c: Case, size = 100) {
  return c.imageUrl ?? generatedImageUrl(c, size)
}

function App() {
  const [activeTab, setActiveTab] = useState<'OLL' | 'PLL' | 'F2L'>('OLL')
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0)
  const currentCase = cases[currentCaseIndex]

  const [showAlgorithm, setShowAlgorithm] = useState(true)
  const [mode, setMode] = useState<'scramble' | 'solve'>('scramble')

  const scrambleRef = useRef<HTMLElement>(null)
  const solveRef = useRef<HTMLElement>(null)

  const isF2L = currentCase.group === 'F2L'

  const selectTab = (tab: 'OLL' | 'PLL' | 'F2L') => {
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

  const renderButton = (c: Case, index: number) => (
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
        maxWidth: '80px',
        textAlign: 'center',
        fontSize: '0.75rem',
      }}
    >
      <img src={caseImageUrl(c)} width={50} height={50} alt={c.name} />
      {c.name}
    </button>
  )

  const renderCaseGroup = (partNumber: 1 | 2, label: string) => {
    const casesInGroup = cases.filter((c) => c.group === activeTab && c.part === partNumber)
    if (casesInGroup.length === 0) return null

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{label}</span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {cases.map((c, index) => (c.group === activeTab && c.part === partNumber ? renderButton(c, index) : null))}
        </div>
      </div>
    )
  }

  const renderF2LByFamily = () => {
    const f2lCases = cases.filter((c) => c.group === 'F2L')
    const families = Array.from(new Set(f2lCases.map((c) => c.family ?? 'Other')))

    return families.map((family) => (
      <div key={family} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{family}</span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {cases.map((c, index) => (c.group === 'F2L' && (c.family ?? 'Other') === family ? renderButton(c, index) : null))}
        </div>
      </div>
    ))
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
        <button
          onClick={() => selectTab('F2L')}
          style={{
            fontWeight: activeTab === 'F2L' ? 'bold' : 'normal',
            borderBottom: activeTab === 'F2L' ? '2px solid white' : 'none',
          }}
        >
          F2L
        </button>
      </div>

      {activeTab === 'F2L' ? (
        renderF2LByFamily()
      ) : (
        <>
          {renderCaseGroup(1, activeTab === 'OLL' ? 'Part 1 — Edge Orientation' : 'Part 1 — Corners')}
          {renderCaseGroup(2, activeTab === 'OLL' ? 'Part 2 — Corner Orientation' : 'Part 2 — Edges')}
        </>
      )}

      <h1>{currentCase.name}</h1>
      <p>Scramble: {currentCase.scramble}</p>

      <button onClick={() => setShowAlgorithm((prev) => !prev)}>
        {showAlgorithm ? 'Hide Algorithm' : 'Show Algorithm'}
      </button>

      {showAlgorithm && <p>Algorithm: {currentCase.algorithm}</p>}

      {isF2L ? (
        <img src={caseImageUrl(currentCase, 220)} width={220} height={220} alt={currentCase.name} />
      ) : (
        <>
          <div style={{ display: mode === 'scramble' ? 'block' : 'none' }}>
            {/* @ts-expect-error - twisty-player is a custom element from cubing.js, not a typed React component */}
            <twisty-player
              id="scramble-player"
              ref={scrambleRef}
              experimental-setup-alg="z2"
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
              experimental-setup-alg={`z2 ${currentCase.scramble}`}
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
        </>
      )}
    </div>
  )
}

export default App