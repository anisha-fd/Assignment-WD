import React, { useState } from 'react'

function MouseEvent() {

    const [pos, setPos] = useState({ x: 0, y: 0 })

    const moveEffect = (e) => {        
        setPos({
            x: e.clientX,
            y: e.clientY
        })
    }
    window.addEventListener("mousemove", moveEffect)
    return (
        <div>
            
            <div style={{
                height: 100,
                width: '100px',
                borderRadius: '70px',
                border:" 20px solid skyblue" ,
                background: 'solidblue',
                transform: `translate(${pos.x}px,${pos.y}px)`

            }}>








            </div>
            
        </div>
    )
}

export default MouseEvent
