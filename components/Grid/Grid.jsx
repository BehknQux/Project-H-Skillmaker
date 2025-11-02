import { useState } from 'react'
import Balatro from '../Balatro/Balatro'
import GlassSurface from '../GlassSurface/GlassSurface'
import Shuffle from '../Shuffle/Shuffle'
import GradientText from '../GradientText/GradientText'
import { behaviourUnits } from '../../src/data/behaviourUnits'
import './Grid.css'

// Type için gradient renkleri (enderlikten bağımsız) - Her tip için ayrı renk skalası
const TYPE_GRADIENT_COLORS = {
  passive: ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  active: ["#ff4080", "#ff6b40", "#ff4080", "#ff6b40", "#ff4080"],
  ultimate: ["#ffd700", "#ff8c00", "#ffd700", "#ff8c00", "#ffd700"],
  support: ["#9d4edd", "#c77dff", "#9d4edd", "#c77dff", "#9d4edd"]
}

// Enderlik renkleri - 5 seviye
const RARITY_COLORS = {
  1: { // Gri tonlarda - Common
    color1: '#4B5563',
    color2: '#374151',
    color3: '#1F2937'
  },
  2: { // Yeşil tonlarda - Uncommon
    color1: '#047857',
    color2: '#065F46',
    color3: '#064E3B'
  },
  3: { // Mavi tonlarda - Rare
    color1: '#1D4ED8',
    color2: '#1E40AF',
    color3: '#1E3A8A'
  },
  4: { // Mor tonlarda - Epic
    color1: '#6D28D9',
    color2: '#5B21B6',
    color3: '#4C1D95'
  },
  5: { // Altın tonlarda - Legendary
    color1: '#B45309',
    color2: '#92400E',
    color3: '#78350F'
  }
}

const Grid = ({ items = [] }) => {
  const [draggedItem, setDraggedItem] = useState(null)

  // Enderlik seviyesine göre renkleri al
  const getRarityColors = (rarity) => {
    return RARITY_COLORS[rarity] || RARITY_COLORS[1]
  }

  const gridItems = items.length > 0 ? items : behaviourUnits

  const handleDragStart = (e, item) => {
    setDraggedItem(item.id)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('application/json', JSON.stringify(item))
    
    // Drag görseli için
    const dragImage = e.currentTarget.cloneNode(true)
    dragImage.style.width = e.currentTarget.offsetWidth + 'px'
    dragImage.style.opacity = '0.8'
    dragImage.style.position = 'absolute'
    dragImage.style.top = '-1000px'
    document.body.appendChild(dragImage)
    e.dataTransfer.setDragImage(dragImage, e.currentTarget.offsetWidth / 2, e.currentTarget.offsetHeight / 2)
    
    setTimeout(() => {
      document.body.removeChild(dragImage)
    }, 0)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
  }

  return (
    <div className="custom-grid">
      {gridItems.map((item, index) => {
        const balatroKey = `balatro-${item.id || index}`
        const isDragging = draggedItem === item.id
        
        return (
          <div
            key={item.id || index}
            className={`grid-item-wrapper ${isDragging ? 'dragging' : ''}`}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
            style={{}}
          >
            <div className="grid-item-container" style={{ 
              width: '100%', 
              height: '100%', 
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Balatro
                key={balatroKey}
                isRotate={false}
                mouseInteraction={false}
                pixelFilter={700}
                color1={item.color1 || getRarityColors(item.rarity || 1).color1}
                color2={item.color2 || getRarityColors(item.rarity || 1).color2}
                color3={item.color3 || getRarityColors(item.rarity || 1).color3}
              />
              <div className="grid-item">
                <div className="grid-item-content-wrapper">
                  <div className="grid-item-glass-background">
                    <GlassSurface
                      width="100%"
                      height="100%"
                      borderRadius={50}
                      borderWidth={0.07}
                      brightness={50}
                      opacity={0.93}
                      blur={11}
                      displace={0.5}
                      backgroundOpacity={0.1}
                      saturation={1}
                      distortionScale={-180}
                      redOffset={0}
                      greenOffset={10}
                      blueOffset={20}
                      mixBlendMode="difference"
                    />
                  </div>
                  <div className="grid-item-content">
                    <div className="grid-item-icon">{item.icon || '✨'}</div>
                    <Shuffle
                      text={item.title}
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce={true}
                      triggerOnHover={true}
                      respectReducedMotion={true}
                      tag="h3"
                      className="grid-item-title"
                    />
                    <div className="grid-item-types">
                      {(Array.isArray(item.type) ? item.type : [item.type || 'passive']).map((type, typeIndex) => (
                        <GradientText
                          key={typeIndex}
                          colors={TYPE_GRADIENT_COLORS[type] || TYPE_GRADIENT_COLORS.passive}
                          animationSpeed={3}
                          showBorder={false}
                          className="grid-item-type"
                        >
                          {type}
                        </GradientText>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Grid

