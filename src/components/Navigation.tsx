// components/Navigation.tsx
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const menuItems = [
    { label: "홈", to: "/" },
    { label: "프로젝트", to: "/projects" },
    { label: "스킬", to: "/skills" },
    { label: "경력", to: "/career" },
    { label: "블로그", to: "/blog" },
    { label: "다운로드", to: "/downloads" },
    { label: "연락하기", to: "/contact" },
  ];

  // NavLink 공통 클래스
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors tracking-tight ${
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <motion.button
            onClick={() => navigate("/")}
            className="tracking-tight cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-logo text-2xl text-[#333]">Bami.</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                end={item.to === "/"} // 홈은 정확히 일치할 때만 active
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark((v) => !v)}
              className="ml-2 cursor-pointer"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsDark((v) => !v)}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg"
          >
            <div className="px-6 py-4 space-y-3">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block w-full text-left py-2 transition-colors tracking-tight ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                  end={item.to === "/"}
                  onClick={() => setIsMenuOpen(false)} // 이동 후 메뉴 닫기
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
