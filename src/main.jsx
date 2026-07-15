import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import './styles/main.scss'    // On créera ce fichier après

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </StrictMode>,
)