
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedBackList from "./components/FeedbackList"
import FeedBackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"
import AboutPage from "./pages/AboutPages"
import {FeedbackProvider} from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

function App() {
    return (
        <FeedbackProvider>
        <Router> 
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <FeedbackForm  />
                        <FeedBackStats />
                        <FeedBackList  />
                        
                        </>

                    }> 
                        
                    </Route>
                </Routes>

                <Routes>
                    <Route path='/about' element={<AboutPage/>} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    )
}


export default App