import App from "./App"
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
const root = createRoot(document.querySelector('#root'))
root.render(
    <>
        <Canvas>
          <App/>
        </Canvas>
    </>
    
)