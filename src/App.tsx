import { useEffect, useRef } from 'react'
import 'cubing/twisty'

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
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
      }}
    >
      {/* @ts-expect-error - twisty-player is a custom element from cubing.js, not a typed React component */}
      <twisty-player
        ref={playerRef}
        alg="R U R' U R U2' R'"
        experimental-setup-anchor="start"
        background="none"
        control-panel="bottom-row"
      />
    </div>
  )
}

export default App