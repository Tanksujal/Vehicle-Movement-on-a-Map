import MyMapComponent from './pages/MyMapComponent'
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {


  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<MyMapComponent/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
