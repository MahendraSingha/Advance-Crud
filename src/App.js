import logo from './logo.svg';
import './App.css';
import IndexPage from './components/IndexPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPage from './components/AddPage';
import EditPage from './components/EditPage';

function App() {
  return (
    <div className="App">
      {/* <IndexPage /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<IndexPage />} />
          <Route exact path='/add' element={<AddPage />} />
          <Route exact path='/edit' element={<EditPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
