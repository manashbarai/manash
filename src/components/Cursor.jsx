import React, { useEffect, useRef } from 'react'
import gsap from "gsap"

const Cursor = () => {  
  const size = 30
  const circle = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e
    mouse.current = { x: clientX, y: clientY }
    moveCircle(clientX, clientY)
  }

  const moveCircle = (x, y) => {
    if (circle.current) {
      gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 })
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", manageMouseMove)
      return () => window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [])

  return (
    <div 
      ref={circle}
      className="fixed top-0 start-0 bg-red-600 rounded-full pointer-events-none"
      style={{ width: size, height: size }}
    ></div>
  )
}

export default Cursor
