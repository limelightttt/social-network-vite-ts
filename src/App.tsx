import { MainPage } from "./pages/MainPage/MainPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <BrowserRouter>
          <Routes>
            <Route element={<LoginPage/>} path="/"/>
            <Route element={<MainPage/>} path="/main-page"/>
            <Route element={<ProfilePage/>} path="/profile-page"/>
            <Route element={<RegistrationPage/>} path="registration-page"/>
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}



export default App;


