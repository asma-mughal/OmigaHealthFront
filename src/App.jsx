import './App.css'
import {useEffect, useState, Suspense} from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import Detail from './pages/Detail';
import Dashboard from './components/Dashboard';
import { AdminLogin } from './pages';
import DashboardAdmin from './pages/Admin/components/DashboardAdmin';
import AuthState from './context/AuthState';
import DetailHospital from './pages/DetailHospital';
import DetailDoctor from './pages/DetailDoctor';
import Departments from './pages/Departments';
import ChangePassword from './pages/Admin/components/ChangePassword';
import CardDoctor from './pages/CardDoctor';
import DeveloperPage from './pages/DeveloperPage';
import ImageGallery from './pages/ImageGallery';
import ImageDocGallery from './pages/ImageDocGallery';
function App() {
  const [dot, setDot] = useState(false);
  const [doc, setDoc] = useState('');


 useEffect(()=>{
  const lang = localStorage.getItem("i18nextLng");
  if(lang!="en") {
    document.body.dir = "rtl";
  }
 })
  return (
    <>
    <AuthState>
     <Suspense fallback={null}>
 <Routes>
  <Route path="/" element={<Dashboard dot={dot} setDot={setDot} doc={doc} setDoc={setDoc} />} />
  <Route path="/abt" element={<Detail dot={dot} setDot={setDot} />} />
  <Route path="/admin" element={<AdminLogin />} />
  <Route path="/dash" element={<DashboardAdmin />} />
  <Route path="/detail" element={<DetailHospital dot={dot} setDot={setDot}
  doc={doc}
  setDoc={setDoc}
 />} 
  />
  <Route path="/detailDoc" element={<DetailDoctor  dot={dot} setDot={setDot} />}
  />
  <Route path="/change" element={<ChangePassword />} />
  <Route path="/cardDoc"  element={<CardDoctor dot={dot} setDot={setDot}  />} />
  <Route path="/gallery" element={<ImageGallery />} />
  <Route path="/dept" element={<Departments 
  doc={doc} setDoC={setDoc} dot={dot} 
  setDot={setDot} />}
 />
 <Route path="/developer" element={<DeveloperPage />} />
 <Route path="/docGallery" element={<ImageDocGallery />} />
 </Routes>
 </Suspense>
 </AuthState>
  </>
  )
}

export default App
