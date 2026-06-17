const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ALGO_METRICS, PAPER_METRICS } from "@/lib/cropData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/performance")({
  head: () => ({ meta: [
    { title: "Model Performance — CropAI Advisor" },
    { name: "description", content: "Compare 10 ML algorithms on the crop recommendation dataset. Gradient Boosting wins." },
    { property: "og:title", content: "Model Performance — CropAI Advisor" },
    { property: "og:description", content: "Algorithm comparison: accuracy, precision, recall, F1." },
  ]}),
  component: Performance,
});

function Performance() {
  const sorted = [...ALGO_METRICS].sort((a, b) => b.accuracy - a.accuracy);
  const radarData = ["accuracy", "precision", "recall", "f1"].map((k) => ({
    metric: k.toUpperCase(),
    "Gradient Boosting": ALGO_METRICS.find(a => a.name === "Gradient Boosting")[k ],
    "Random Forest": ALGO_METRICS.find(a => a.name === "Random Forest")[k ],
    "Neural Network": ALGO_METRICS.find(a => a.name === "Neural Network")[k ],
  }));

  return (
    _jsxDEV('div', { children: [
      _jsxDEV(PageHeader, {
        eyebrow: "Model Performance" ,
        title: "Algorithm benchmark" ,
        description: "Ten supervised classifiers evaluated on the same train/test split. Gradient Boosting and Naive Bayes lead — but Gradient Boosting is the paper's recommended deployment model for its generalization and explainability fit."                              ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this
      )

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"         , children: 
        ([
          ["Accuracy", PAPER_METRICS.accuracy],
          ["Precision", PAPER_METRICS.precision],
          ["Recall", PAPER_METRICS.recall],
          ["F1 Score", PAPER_METRICS.f1],
        ] ).map(([k, v]) => (
          _jsxDEV('div', { className: "rounded-xl border border-border bg-card p-5"    , children: [
            _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-muted-foreground"   , children: k}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)
            , _jsxDEV('p', { className: "mt-2 text-3xl font-bold text-primary tabular-nums"    , children: [v.toFixed(2), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
            , _jsxDEV('p', { className: "mt-1 text-xs text-muted-foreground"  , children: "Gradient Boosting (paper)"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
          ]}, k, true, {fileName: _jsxFileName, lineNumber: 41}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 mb-8"        , children: [
        _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
          _jsxDEV('h2', { className: "font-semibold", children: "Accuracy comparison" }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
          , _jsxDEV('div', { className: "mt-4 h-72" , children: 
            _jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: 
              _jsxDEV(BarChart, { data: sorted, margin: { left: 0, right: 10, top: 10, bottom: 50 }, children: [
                _jsxDEV(XAxis, { dataKey: "name", angle: -30, textAnchor: "end", interval: 0, height: 70, stroke: "currentColor", opacity: 0.6, fontSize: 11,}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this )
                , _jsxDEV(YAxis, { domain: [95, 100], stroke: "currentColor", opacity: 0.6, fontSize: 11,}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this )
                , _jsxDEV(Tooltip, { contentStyle: { background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 },}, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this )
                , _jsxDEV(Bar, { dataKey: "accuracy", fill: "oklch(0.36 0.07 150)"  , radius: [6,6,0,0],}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 50}, this)
        , _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
          _jsxDEV('h2', { className: "font-semibold", children: "Top-3 radar" }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
          , _jsxDEV('div', { className: "mt-4 h-72" , children: 
            _jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: 
              _jsxDEV(RadarChart, { data: radarData, children: [
                _jsxDEV(PolarGrid, { stroke: "currentColor", opacity: 0.2,}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this )
                , _jsxDEV(PolarAngleAxis, { dataKey: "metric", stroke: "currentColor", opacity: 0.7, fontSize: 11,}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this )
                , _jsxDEV(PolarRadiusAxis, { domain: [95, 100], stroke: "currentColor", opacity: 0.4,}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this )
                , _jsxDEV(Radar, { dataKey: "Gradient Boosting" , stroke: "oklch(0.36 0.07 150)"  , fill: "oklch(0.36 0.07 150)"  , fillOpacity: 0.35,}, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this )
                , _jsxDEV(Radar, { dataKey: "Random Forest" , stroke: "oklch(0.65 0.13 115)"  , fill: "oklch(0.65 0.13 115)"  , fillOpacity: 0.25,}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this )
                , _jsxDEV(Radar, { dataKey: "Neural Network" , stroke: "oklch(0.6 0.1 200)"  , fill: "oklch(0.6 0.1 200)"  , fillOpacity: 0.2,}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this )
                , _jsxDEV(Legend, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 67}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 63}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"     , children: [
        _jsxDEV('h2', { className: "text-xl font-bold mb-4"  , children: "Full comparison" }, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this)
        , _jsxDEV('div', { className: "overflow-x-auto rounded-xl border border-border bg-card"    , children: 
          _jsxDEV('table', { className: "w-full text-sm" , children: [
            _jsxDEV('thead', { className: "bg-muted/50 text-left" , children: 
              _jsxDEV('tr', { children: [
                _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "Algorithm"}, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this)
                , _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "Accuracy"}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this)
                , _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "Precision"}, void 0, false, {fileName: _jsxFileName, lineNumber: 89}, this)
                , _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "Recall"}, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
                , _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "F1"}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 86}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this)
            , _jsxDEV('tbody', { children: 
              sorted.map((a) => {
                const isBest = a.name === "Gradient Boosting";
                return (
                  _jsxDEV('tr', { className: `border-t border-border ${isBest ? "bg-primary/5" : ""}`, children: [
                    _jsxDEV('td', { className: "px-4 py-3 font-medium"  , children: 
                      _jsxDEV('span', { className: "inline-flex items-center gap-2"  , children: [
                        isBest && _jsxDEV(Trophy, { className: "w-4 h-4 text-accent"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this )
                        , a.name
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 100}, this)
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 99}, this)
                    , _jsxDEV('td', { className: "px-4 py-3 tabular-nums"  , children: [a.accuracy.toFixed(2), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 105}, this)
                    , _jsxDEV('td', { className: "px-4 py-3 tabular-nums"  , children: [a.precision.toFixed(2), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)
                    , _jsxDEV('td', { className: "px-4 py-3 tabular-nums"  , children: [a.recall.toFixed(2), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)
                    , _jsxDEV('td', { className: "px-4 py-3 tabular-nums"  , children: [a.f1.toFixed(2), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 108}, this)
                  ]}, a.name, true, {fileName: _jsxFileName, lineNumber: 98}, this)
                );
              })
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 94}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 84}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this)

        , _jsxDEV('div', { className: "mt-6 rounded-2xl border border-border bg-card p-6"     , children: [
          _jsxDEV('h3', { className: "font-semibold flex items-center gap-2"   , children: [_jsxDEV(Trophy, { className: "w-5 h-5 text-accent"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 117}, this ), " Why Gradient Boosting?"   ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 117}, this)
          , _jsxDEV('ul', { className: "mt-3 grid md:grid-cols-2 gap-3 text-sm text-muted-foreground"     , children: [
            _jsxDEV('li', { className: "rounded-lg bg-muted/40 p-3"  , children: "Top-tier accuracy with strong generalization across all 22 crops."        }, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this)
            , _jsxDEV('li', { className: "rounded-lg bg-muted/40 p-3"  , children: "Ensemble of weak learners handles non-linear nutrient/climate interactions."       }, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this)
            , _jsxDEV('li', { className: "rounded-lg bg-muted/40 p-3"  , children: "Calibrated probability outputs feed naturally into Top-3 recommendations."       }, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
            , _jsxDEV('li', { className: "rounded-lg bg-muted/40 p-3"  , children: "Plays well with LIME for stable local explanations."       }, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 118}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 116}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 81}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)
  );
}