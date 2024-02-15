import Wrapper from "./components/Wrapper/Wrapper"
import { Routes, Route } from "react-router-dom"

import Form from "./components/Form/Form"
import Table from "./components/Table/Table"


function App() {
  
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
