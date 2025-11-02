import { useState } from 'react'
import './SlotBar.css'

const SlotBar = ({ slots = 4, onSlotChange }) => {
  const [slotItems, setSlotItems] = useState(Array(slots).fill(null))

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e, slotIndex) => {
    e.preventDefault()
    e.stopPropagation()
    
    const itemData = e.dataTransfer.getData('application/json')
    if (itemData) {
      try {
        const item = JSON.parse(itemData)
        const newSlotItems = [...slotItems]
        newSlotItems[slotIndex] = item
        setSlotItems(newSlotItems)
        
        if (onSlotChange) {
          onSlotChange(newSlotItems)
        }
      } catch (error) {
        console.error('Error parsing dropped item:', error)
      }
    }
  }

  const handleRemoveFromSlot = (slotIndex) => {
    const newSlotItems = [...slotItems]
    newSlotItems[slotIndex] = null
    setSlotItems(newSlotItems)
    
    if (onSlotChange) {
      onSlotChange(newSlotItems)
    }
  }

  return (
    <div className="slot-bar">
      <div className="slot-bar-container">
        {Array(slots).fill(null).map((_, index) => (
          <div
            key={index}
            className={`slot ${slotItems[index] ? 'slot-filled' : 'slot-empty'}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {slotItems[index] ? (
              <div className="slot-item">
                <div className="slot-item-icon">{slotItems[index].icon}</div>
                <div className="slot-item-title">{slotItems[index].title}</div>
                <button
                  className="slot-item-remove"
                  onClick={() => handleRemoveFromSlot(index)}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="slot-placeholder">
                <span className="slot-placeholder-text">Slot {index + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlotBar

