import SideNavBar from './components/SideBar/SideNavBar'
import Auth from './components/Auth/Auth'
import AllProducts from './components/AllProducts/AllProducts'
import EditableTable from './components/Editable_Table/EditableTable'
import Upload from './components/Upload/Upload'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <SideNavBar/>
    <Routes>
      <Route exact path="/" element={<EditableTable/>}/>
      <Route exact path="/orders" element={<EditableTable/>}/>
      <Route exact path="/my_cakes" element={<AllProducts/>}/>
      <Route exact path="/upload" element={<Upload/>}/>
 

    </Routes>
    </>
  );
}

export default App;
