import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { Projects } from "./components/pages/Projects";
import { Skills } from "./components/pages/Skills";
import { Career } from "./components/pages/Career";
import { Blog } from "./components/pages/Blog";
import { Downloads } from "./components/pages/Downloads";
import { Contact } from "./components/pages/Contact";
import { Toaster } from "./components/ui/sonner";
import "./styles/globals.css";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NavLink/Link를 쓰도록 Navigation 컴포넌트만 살짝 수정(아래 참고) */}
      <Navigation />

      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />

          {/* 존재하지 않는 경로는 홈으로 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
