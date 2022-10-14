import React from 'react'
import { createRoot, type Root } from 'react-dom/client'

import { App } from './app'
import { Envs } from './constants/envs'

if (process.env.NODE_ENV === Envs.DEVELOPMENT) {
  // setup mock server
  // setup other dev environment stuffs
}

const root: Root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
