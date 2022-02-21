import { useState } from "react"
import Header from "./components/Header"
import FeedBackItem from "./components/FeedBackItem"

function App() {
    const [feedback, setFeedback] = useState
    return (
        <> 
            <Header />
            <div className='container'>
                <FeedBackItem />
            </div>
        </>
    )
}


export default App