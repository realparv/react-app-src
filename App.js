import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import LoginPage from './Component/LoginPage'
import Dashboard from './Component/Dashboard'
import HomePage from './Component/HomePage'
import LandingPage from './Component/LandingPage'
import Horizontalchart from './Component/Chart'

import './App.css'

export default function App() {
    
    return (
    //  <>
    //  <div>
    //   hello
    //  </div>
    //  </>
    <div><Horizontalchart/>
    <LandingPage/>
    <LoginPage/>
    <Dashboard/>
    <HomePage/>
    <BrowserRouter>
    <Routes>
            {/* <div> */}
               
                    <Route exact path="/" element={<LandingPage/>} >
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/homepage" element={<HomePage/>} />
                    <Route path="/chart" element={<Chart/>} />
                    <Route path="/analysis" element={<HomePage/>} />  
                </Route>
            {/* </div> */}
        </Routes>
    </BrowserRouter>
  </div>

    )
}
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);