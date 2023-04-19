import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap/all';
import { useRef } from 'react';

function App() {
  const boxRef = useRef()
  let rotationY = 0
  let rotationSpeed = 0

  window.onwheel = (e) => {
    var isTrackpad = false;
    if (e.wheelDeltaY) {
      if (e.wheelDeltaY === (e.deltaY * -3)) {
        isTrackpad = true;
      }
    }
    else if (e.deltaMode === 0) {
      isTrackpad = true;
    }
    isTrackpad ? rotationSpeed = e.wheelDeltaY * 0.001: rotationSpeed = e.wheelDeltaY * 0.001
    e.wheelDeltaY > 0 ? rotationY -= -1 * rotationSpeed : rotationY += 1 * rotationSpeed
    console.log(rotationY);
  }

  const updateRotation = () => {
    gsap.to(boxRef.current.rotation, 
      {
        x: rotationY,
        duration: .3
      })
  }

  useFrame(()=> {
    updateRotation()
  })

  return (
   <>
    <Box ref = {boxRef}
      material-color = '#002199'
    />
   </>
  );
}
export default App