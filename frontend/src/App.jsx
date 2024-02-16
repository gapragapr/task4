import Wrapper from "./components/Wrapper/Wrapper"
import { Routes, Route, useNavigate } from "react-router-dom"

import Form from "./components/Form/Form"
import Table from "./components/Table/Table"
import { useEffect } from "react"


function App() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/form/login')
  }, [])
  
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/form/*" element={<Form />} />
          <Route path="interface" element={<Table/> } />  
        </Routes>
      </Wrapper>
    </>
  )
}

export default App
