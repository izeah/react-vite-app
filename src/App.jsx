import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/About";
import Header from "@/components/Header";
import { AuthProvider, UIProviders } from "@/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <UIProviders>
      <AuthProvider>
        <ToastContainer />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AuthProvider>
    </UIProviders>
  );
}

export default App;
