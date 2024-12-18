import './App.css'
import { Navbar } from './components/navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndonesiaPage from './pages/indonesiaPage'
import HomePage from './pages/homePage'
import ProgrammingPage from './pages/programmingPage'
import CovidPage from './pages/covidPage'
import SavePage from './pages/savePage'



export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}


function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout><HomePage/></Layout>} path="/"></Route>
        <Route element={<Layout><IndonesiaPage/></Layout>} path="/indonesia"></Route>
        <Route element={<Layout><ProgrammingPage/></Layout>} path="/programming"></Route>
        <Route element={<Layout><CovidPage/></Layout>} path="/covid"></Route>
        <Route element={<Layout><SavePage/></Layout>} path="/saved"></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
