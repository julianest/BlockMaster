import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Profile from "../components/Profile";
import LandingRoutes from "./LandingRoutes";
import { PrivateRoutes, PublicRoutes } from "./PublicAndPrivateRoutes";
import Spinner from 'react-bootstrap/Spinner';
import "../styles/index.css";

const AppRoutes = () => {
  const [checkIn, setCheckIn] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setCheckIn(false)
    })
  }, [setIsLoggedIn, setCheckIn])
  if (checkIn) {
    return (
      <div className="spinnerCarga" style={{marginTop: "30%"}} >
        <h1 className="blockMaster">Cargando</h1>
        <Spinner animation="border" variant="success" />
      </div>
    )
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          } />
          <Route path="/profile" element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Profile />
            </PublicRoutes>
          } />
          <Route path="/*" element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <LandingRoutes />
            </PrivateRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AppRoutes;