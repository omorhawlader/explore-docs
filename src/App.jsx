import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from '../layout'
import ConceptsPage from './components/concepts-page'


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/react-fundamentals' >
            <Route index element={<div className='ml-64 mt-16 flex-1'><h1>React Fundamentals</h1></div>} />
            <Route path=':title' element={<ConceptsPage />} />

          </Route>
          {/* <Route path='/basic-javaScript-rendered-hello-world' element={<h1>Omar</h1>} />
          <Route path='/intro-to-raw-react-APIs' element={<h1>Omar</h1>} />
          <Route path='/using-jsx' element={<h1>Omar</h1>} />
          <Route path='/creating-custom-components' element={<h1>Omar</h1>} />
          <Route path='/styling' element={<h1>Omar</h1>} />
          <Route path='/forms' element={<h1>Omar</h1>} />
          <Route path='/rendering-arrays' element={<h1>Omar</h1>} /> */}
        </Route>
      </Routes>


    </>
  )
}

export default App
