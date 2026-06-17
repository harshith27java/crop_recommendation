const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Leaf, Brain, Eye, TrendingUp, Sprout, FlaskConical, Cloud, Droplet } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — CropAI Advisor" },
    { name: "description", content: "Problem, solution and architecture behind the ML-powered crop recommendation system." },
    { property: "og:title", content: "About — CropAI Advisor" },
    { property: "og:description", content: "Problem, solution and architecture of the crop recommendation system." },
  ]}),
  component: About,
});

const FEATURES = [
  { icon: FlaskConical, label: "Nitrogen (N)" },
  { icon: FlaskConical, label: "Phosphorus (P)" },
  { icon: FlaskConical, label: "Potassium (K)" },
  { icon: TrendingUp, label: "Temperature" },
  { icon: Cloud, label: "Humidity" },
  { icon: Droplet, label: "pH" },
  { icon: Cloud, label: "Rainfall" },
];

function About() {
  return (
    _jsxDEV('div', { children: [
      _jsxDEV(PageHeader, {
        eyebrow: "About the project"  ,
        title: "Smarter farming decisions with explainable ML"     ,
        description: "CropAI Advisor turns soil and climate readings into a confidence-scored crop recommendation, then shows exactly which features drove the decision."                   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this
      )

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6"       , children: [
        _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-8"    , children: [
          _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-primary font-semibold"    , children: "Problem"}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this)
          , _jsxDEV('h2', { className: "mt-2 text-2xl font-bold"  , children: "Choosing the right crop is hard"     }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
          , _jsxDEV('p', { className: "mt-3 text-muted-foreground" , children: "Farmers must weigh soil nutrients (N, P, K), temperature, humidity, pH and rainfall — all interacting in complex ways. Poor matches reduce yields, waste inputs and erode income."


          }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 35}, this)
        , _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-8"    , children: [
          _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-primary font-semibold"    , children: "Solution"}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
          , _jsxDEV('h2', { className: "mt-2 text-2xl font-bold"  , children: "ML + explainability"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
          , _jsxDEV('p', { className: "mt-3 text-muted-foreground" , children: "A Gradient Boosting classifier trained on 2,200 records across 22 crops predicts the best match. LIME then breaks the prediction down feature by feature so the recommendation is trustworthy, not a black box."



          }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12"     , children: [
        _jsxDEV('h2', { className: "text-2xl font-bold" , children: "Seven input features"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
        , _jsxDEV('div', { className: "mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3"     , children: 
          FEATURES.map((f) => (
            _jsxDEV('div', { className: "rounded-xl border border-border bg-card p-4 flex flex-col items-center text-center gap-2"         , children: [
              _jsxDEV(f.icon, { className: "w-5 h-5 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this )
              , _jsxDEV('p', { className: "text-sm font-medium" , children: f.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
            ]}, f.label, true, {fileName: _jsxFileName, lineNumber: 58}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 grid md:grid-cols-3 gap-4"        , children: 
        [
          { icon: Leaf, title: "Why it matters", body: "Better crop choices increase yield, reduce input costs and improve food security at the village scale." },
          { icon: Brain, title: "ML in agriculture", body: "Models capture non-linear interactions between nutrients and climate that humans struggle to balance." },
          { icon: Eye, title: "Why explainability", body: "LIME shows the contribution of each feature so domain experts can verify and trust each prediction." },
        ].map((c) => (
          _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
            _jsxDEV(c.icon, { className: "w-6 h-6 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this )
            , _jsxDEV('h3', { className: "mt-3 font-semibold text-lg"  , children: c.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: c.body}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)
          ]}, c.title, true, {fileName: _jsxFileName, lineNumber: 72}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)

      /* Architecture */
      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-16"      , children: [
        _jsxDEV('h2', { className: "text-2xl font-bold" , children: "System architecture" }, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this)
        , _jsxDEV('div', { className: "mt-6 rounded-2xl border border-border bg-card p-8"     , children: 
          _jsxDEV('div', { className: "flex flex-col md:flex-row items-stretch gap-3"    , children: 
            [
              { t: "User Input", s: "N, P, K, temp, humidity, pH, rainfall" },
              { t: "Preprocessing", s: "StandardScaler · LabelEncoder" },
              { t: "Gradient Boosting", s: "Trained on 2,200 samples · 22 classes" },
              { t: "Prediction + Confidence", s: "Top-3 ranked crops" },
              { t: "LIME Explanation", s: "Per-feature contributions" },
              { t: "Visualization", s: "Cards · charts · gauge" },
            ].map((step, i, arr) => (
              _jsxDEV('div', { className: "flex-1 flex items-center gap-3"   , children: [
                _jsxDEV('div', { className: "flex-1 rounded-xl border border-border bg-background p-4"     , children: [
                  _jsxDEV('div', { className: "w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-semibold"        , children: i + 1}, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this)
                  , _jsxDEV('p', { className: "mt-2 font-semibold text-sm"  , children: step.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this)
                  , _jsxDEV('p', { className: "text-xs text-muted-foreground" , children: step.s}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 94}, this)
                , i < arr.length - 1 && (
                  _jsxDEV('div', { className: "hidden md:block text-muted-foreground"  , children: _jsxDEV(Sprout, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)
                )
              ]}, step.t, true, {fileName: _jsxFileName, lineNumber: 93}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 81}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)
  );
}