import { useEffect } from 'react'
import Particles from '../components/Particles/Particles'
import Grid from '../components/Grid/Grid'
import SlotBar from '../components/SlotBar/SlotBar'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.body.style.backgroundColor = '#000000'
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.overflowY = 'auto'
    document.body.style.overflowX = 'hidden'
    document.documentElement.style.overflowX = 'hidden'
  }, [])

  const handleSlotChange = (slotItems) => {
    console.log('Slot items changed:', slotItems)
    // Burada slot değişikliklerini işleyebilirsiniz
  }

  return (
    <>
      {/* Slot Bar - Fixed at top */}
      <SlotBar slots={4} onSlotChange={handleSlotChange} />
      
      <div style={{ 
        width: '100%', 
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: '#000000',
        paddingTop: 'max(320px, min(24vh, 360px))', // SlotBar yüksekliği
        overflowX: 'hidden'
      }}>
        {/* Background Particles */}
        <div style={{ 
          width: '100%', 
          height: '100%', 
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}>
          <Particles
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleColors={undefined}
            moveParticlesOnHover={false}
            alphaParticles={false}
            particleBaseSize={100}
            sizeRandomness={1}
            cameraDistance={20}
            disableRotation={false}
            className=""
          />
        </div>
        
        {/* Grid Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          zIndex: 10,
          padding: '2rem',
          minHeight: 'calc(100vh - max(320px, min(24vh, 360px)))'
        }}>
          <Grid />
        </div>
      </div>
    </>
  )
}

export default App

