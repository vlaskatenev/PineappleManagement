import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
