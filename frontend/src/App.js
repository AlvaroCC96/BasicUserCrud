import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navegation from './components/Navegation'
import CreateUser from './components/CreateUser'
import ListUser from './components/ListUser'



function App() {
  return (
    <div className="">
      <Navegation/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element = { <ListUser/>}/>
          <Route path='/CreateUser' element = { <CreateUser/>}/>
          <Route path='/edit/:id' element = { <CreateUser/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
