const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Database, Sparkles, Activity, Brain, Layers, Award } from "lucide-react";
import { PAPER_METRICS } from "@/lib/cropData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CropAI Advisor — ML Crop Recommendation" },
      { name: "description", content: "Gradient Boosting + LIME powered crop recommendation: 99.27% accuracy on 22 crops." },
      { property: "og:title", content: "CropAI Advisor" },
      { property: "og:description", content: "ML-powered crop recommendation with explainable AI." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    _jsxDEV('div', { children: [
      /* Hero */
      _jsxDEV('section', { className: "relative overflow-hidden" , children: [
        _jsxDEV('div', {
          className: "absolute inset-0 -z-10 opacity-[0.07]"   ,
          style: {
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          },}, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this
        )
        , _jsxDEV('div', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28"        , children: 
          _jsxDEV('div', { className: "max-w-3xl", children: [
            _jsxDEV('div', { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/30 text-accent-foreground text-xs font-medium mb-6 animate-fade-in"           , children: [
              _jsxDEV(Sparkles, { className: "w-3.5 h-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this ), "Research-backed · Gradient Boosting · LIME XAI"

            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)
            , _jsxDEV('h1', { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]"      , children: ["Grow the "
                , _jsxDEV('span', { className: "text-primary", children: "right crop" }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this), ",", _jsxDEV('br', {}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this ), "backed by machine learning."

            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
            , _jsxDEV('p', { className: "mt-6 text-lg text-muted-foreground max-w-2xl"   , children: ["CropAI Advisor recommends the best crop for your soil and climate using a Gradient Boosting model that achieved "

                  , _jsxDEV('strong', { className: "text-foreground", children: "99.27% accuracy" }, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this), " in peer-reviewed research, with every prediction explained via LIME."

            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 40}, this)
            , _jsxDEV('div', { className: "mt-8 flex flex-wrap gap-3"   , children: [
              _jsxDEV(Link, {
                to: "/predict",
                className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]"           ,
 children: ["Try Crop Prediction "
                   , _jsxDEV(ArrowRight, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)
              , _jsxDEV('a', {
                href: "https://doi.org/10.1038/s41598-025-07003-8",
                target: "_blank",
                rel: "noopener noreferrer" ,
                className: "inline-flex items-center gap-2 border border-border bg-card px-5 py-3 rounded-lg font-medium hover:bg-muted transition"           ,
 children: [
                _jsxDEV(FileText, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this ), " View Research Paper"
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)
              , _jsxDEV('a', {
                href: "https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset",
                target: "_blank",
                rel: "noopener noreferrer" ,
                className: "inline-flex items-center gap-2 border border-border bg-card px-5 py-3 rounded-lg font-medium hover:bg-muted transition"           ,
 children: [
                _jsxDEV(Database, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this ), " Explore Dataset"
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 60}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 21}, this)

      /* Metrics */
      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12"     , children: 
        _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4"   , children: 
          [
            { label: "Accuracy", value: PAPER_METRICS.accuracy },
            { label: "Precision", value: PAPER_METRICS.precision },
            { label: "Recall", value: PAPER_METRICS.recall },
            { label: "F1 Score", value: PAPER_METRICS.f1 },
          ].map((m, i) => (
            _jsxDEV('div', {

              className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-shadow animate-fade-in"        ,
              style: { animationDelay: `${i * 80}ms` },
 children: [
              _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-muted-foreground"   , children: m.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this)
              , _jsxDEV('p', { className: "mt-3 text-4xl font-bold text-primary tabular-nums"    , children: [
                m.value.toFixed(2), "%"
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 88}, this)
              , _jsxDEV('div', { className: "mt-3 h-1.5 rounded-full bg-muted overflow-hidden"    , children: 
                _jsxDEV('div', { className: "h-full bg-[var(--gradient-accent)]" , style: { width: `${m.value}%` },}, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
            ]}, m.label, true, {fileName: _jsxFileName, lineNumber: 82}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)

      /* Facts grid */
      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"     , children: 
        _jsxDEV('div', { className: "grid md:grid-cols-3 lg:grid-cols-5 gap-4"   , children: 
          [
            { icon: Database, label: "Total Samples", value: "2,200" },
            { icon: Layers, label: "Input Features", value: "7" },
            { icon: Award, label: "Crop Classes", value: "22" },
            { icon: Activity, label: "Algorithm", value: "Gradient Boosting" },
            { icon: Brain, label: "Explainability", value: "LIME" },
          ].map((f) => (
            _jsxDEV('div', { className: "rounded-xl border border-border bg-card p-5 flex flex-col gap-2"       , children: [
              _jsxDEV(f.icon, { className: "w-5 h-5 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 110}, this )
              , _jsxDEV('p', { className: "text-xs text-muted-foreground" , children: f.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this)
              , _jsxDEV('p', { className: "text-lg font-semibold" , children: f.value}, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this)
            ]}, f.label, true, {fileName: _jsxFileName, lineNumber: 109}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)

      /* CTA */
      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"     , children: 
        _jsxDEV('div', { className: "rounded-3xl p-10 lg:p-14 bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)] relative overflow-hidden"       , children: 
          _jsxDEV('div', { className: "relative z-10 max-w-2xl"  , children: [
            _jsxDEV('h2', { className: "text-3xl sm:text-4xl font-bold tracking-tight"   , children: "Try a live prediction"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
            , _jsxDEV('p', { className: "mt-3 text-primary-foreground/80" , children: "Enter soil nutrients and climate values to see the top-3 recommended crops and the feature contributions that drove the model's decision."


            }, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
            , _jsxDEV(Link, {
              to: "/predict",
              className: "mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition"           ,
 children: ["Open the simulator "
                 , _jsxDEV(ArrowRight, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 127}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 121}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 19}, this)
  );
}