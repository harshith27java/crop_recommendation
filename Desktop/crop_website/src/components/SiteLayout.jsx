const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, } from "react";
import { Sprout, Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/paper", label: "Paper" },
  { to: "/dataset", label: "Dataset" },
  { to: "/predict", label: "Predict" },
  { to: "/explain", label: "Explainable AI" },
  { to: "/performance", label: "Performance" },
  { to: "/crops", label: "Crops" },
] ;

export function SiteLayout({ children }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    _jsxDEV('div', { className: "min-h-screen flex flex-col bg-background text-foreground"    , children: [
      _jsxDEV('header', { className: "sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border"      , children: [
        _jsxDEV('div', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4"         , children: [
          _jsxDEV(Link, { to: "/", className: "flex items-center gap-2 shrink-0 group"    , children: [
            _jsxDEV('div', { className: "w-9 h-9 rounded-xl grid place-items-center bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)] group-hover:scale-105 transition-transform"         , children: 
              _jsxDEV(Sprout, { className: "w-5 h-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
            , _jsxDEV('div', { className: "flex flex-col leading-none"  , children: [
              _jsxDEV('span', { className: "font-bold text-sm tracking-tight"  , children: "CropAI"}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
              , _jsxDEV('span', { className: "text-[10px] text-muted-foreground uppercase tracking-widest"   , children: "Advisor"}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 42}, this)

          , _jsxDEV('nav', { className: "hidden lg:flex items-center gap-1"   , children: 
            NAV.map((n) => {
              const active = pathname === n.to;
              return (
                _jsxDEV(Link, {

                  to: n.to,
                  className: cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  ),
 children: 
                  n.label
                }, n.to, false, {fileName: _jsxFileName, lineNumber: 56}, this)
              );
            })
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)

          , _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
            _jsxDEV('button', {
              onClick: toggleDark,
              'aria-label': "Toggle theme" ,
              className: "p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"     ,
 children: 
              dark ? _jsxDEV(Sun, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this ) : _jsxDEV(Moon, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
            , _jsxDEV('button', {
              onClick: () => setOpen((o) => !o),
              'aria-label': "Toggle menu" ,
              className: "lg:hidden p-2 rounded-md hover:bg-muted text-muted-foreground"    ,
 children: 
              open ? _jsxDEV(X, { className: "w-5 h-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this ) : _jsxDEV(Menu, { className: "w-5 h-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 72}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 41}, this)
        , open && (
          _jsxDEV('div', { className: "lg:hidden border-t border-border bg-background animate-fade-in"    , children: 
            _jsxDEV('nav', { className: "px-4 py-2 flex flex-col"   , children: 
              NAV.map((n) => (
                _jsxDEV(Link, {

                  to: n.to,
                  className: cn(
                    "px-3 py-2.5 rounded-md text-sm font-medium",
                    pathname === n.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted",
                  ),
 children: 
                  n.label
                }, n.to, false, {fileName: _jsxFileName, lineNumber: 93}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
        )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 40}, this)

      , _jsxDEV('main', { className: "flex-1", children: children}, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this)

      , _jsxDEV('footer', { className: "border-t border-border mt-16"  , children: 
        _jsxDEV('div', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"             , children: [
          _jsxDEV('p', { children: "CropAI Advisor — ML-powered crop recommendation showcase."      }, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this)
          , _jsxDEV('p', { children: ["Built with research from "    , _jsxDEV('a', { className: "underline hover:text-foreground" , href: "https://doi.org/10.1038/s41598-025-07003-8", target: "_blank", rel: "noopener noreferrer" , children: "Scientific Reports (2025)"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 116}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 114}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 39}, this)
  );
}