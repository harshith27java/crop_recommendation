const _jsxFileName = "";import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FEATURES, DEFAULT_INPUT, predictTopK, explain, CROP_INFO, CROP_EMOJI, } from "@/lib/cropData";
import { Sparkles, AlertTriangle, ArrowRight, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/predict")({
  head: () => ({ meta: [
    { title: "Crop Prediction — CropAI Advisor" },
    { name: "description", content: "Interactive crop prediction simulator: enter soil and climate values, get Top-3 crops with confidence and explanation." },
    { property: "og:title", content: "Crop Prediction — CropAI Advisor" },
    { property: "og:description", content: "Top-3 crop recommendations with confidence scores and LIME-style explanations." },
  ]}),
  component: Predict,
});

function Predict() {
  const [input, setInput] = useState(DEFAULT_INPUT);
  const [submitted, setSubmitted] = useState(null);

  const set = (k, v) => setInput((p) => ({ ...p, [k]: v }));

  const top3 = useMemo(() => (submitted ? predictTopK(submitted, 3) : []), [submitted]);
  const best = top3[0];
  const contribs = useMemo(() => (submitted && best ? explain(submitted, best.crop) : []), [submitted, best]);

  const onPredict = () => {
    setSubmitted({ ...input });
    toast.success("Prediction generated", { description: "Top-3 crops computed from your inputs." });
  };

  const reset = () => { setInput(DEFAULT_INPUT); setSubmitted(null); };

  return (
    _jsxDEV('div', { children: [
      _jsxDEV(PageHeader, {
        eyebrow: "Prediction Simulator" ,
        title: "Recommend the best crop for your field"      ,
        description: "Adjust the seven inputs and run the model. You'll see the top-3 ranked crops, a suitability score, and which features drove the result."                      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this
      )

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-6 mb-16"        , children: [
        /* Form */
        _jsxDEV('div', { className: "lg:col-span-2 rounded-2xl border border-border bg-card p-6 h-fit sticky top-20"        , children: [
          _jsxDEV('h2', { className: "font-semibold text-lg" , children: "Soil & climate inputs"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-1"  , children: "Drag sliders or type values."    }, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
          , _jsxDEV('div', { className: "mt-5 space-y-5" , children: 
            FEATURES.map((f) => (
              _jsxDEV('div', { children: [
                _jsxDEV('div', { className: "flex items-center justify-between text-sm"   , children: [
                  _jsxDEV('label', { className: "font-medium", children: [f.label, " " , _jsxDEV('span', { className: "text-muted-foreground text-xs" , children: f.unit && `(${f.unit})`}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)
                  , _jsxDEV('input', {
                    type: "number",
                    value: input[f.key ],
                    min: f.min,
                    max: f.max,
                    step: f.step,
                    onChange: (e) => set(f.key , +e.target.value),
                    className: "w-20 text-right px-2 py-1 rounded-md border border-border bg-background tabular-nums text-sm"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this
                  )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)
                , _jsxDEV('input', {
                  type: "range",
                  value: input[f.key ],
                  min: f.min,
                  max: f.max,
                  step: f.step,
                  onChange: (e) => set(f.key , +e.target.value),
                  className: "w-full mt-2 accent-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this
                )
              ]}, f.key, true, {fileName: _jsxFileName, lineNumber: 50}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
          , _jsxDEV('div', { className: "mt-6 flex gap-2"  , children: [
            _jsxDEV('button', { onClick: onPredict, className: "flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-lg font-medium hover:opacity-90 shadow-[var(--shadow-glow)] transition"            , children: [
              _jsxDEV(Sparkles, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this ), " Predict"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 76}, this)
            , _jsxDEV('button', { onClick: reset, className: "inline-flex items-center justify-center gap-2 border border-border bg-card px-3 py-2.5 rounded-lg text-sm hover:bg-muted"           , children: 
              _jsxDEV(RotateCcw, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 75}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)

        /* Results */
        , _jsxDEV('div', { className: "lg:col-span-3 space-y-6" , children: [
          !submitted && (
            _jsxDEV('div', { className: "rounded-2xl border border-dashed border-border bg-card p-12 text-center"      , children: [
              _jsxDEV(Sparkles, { className: "w-8 h-8 text-primary mx-auto"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 89}, this )
              , _jsxDEV('h3', { className: "mt-3 font-semibold text-lg"  , children: "Ready when you are"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
              , _jsxDEV('p', { className: "mt-1 text-sm text-muted-foreground"  , children: ["Set your soil and climate values, then hit "        , _jsxDEV('strong', { children: "Predict"}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this), "."]}, void 0, true, {fileName: _jsxFileName, lineNumber: 91}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 88}, this)
          )

          , best && (
            _jsxDEV(_Fragment, { children: [
              /* Best card */
              _jsxDEV('div', { className: "rounded-3xl p-8 bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)]"    , children: [
                _jsxDEV('div', { className: "flex items-start justify-between gap-4"   , children: [
                  _jsxDEV('div', { children: [
                    _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-primary-foreground/70"   , children: "Recommended crop" }, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this)
                    , _jsxDEV('div', { className: "mt-2 flex items-center gap-3"   , children: [
                      _jsxDEV('span', { className: "text-5xl", children: CROP_EMOJI[best.crop]}, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)
                      , _jsxDEV('h2', { className: "text-4xl font-bold capitalize"  , children: best.crop}, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 102}, this)
                    , _jsxDEV('p', { className: "mt-3 text-primary-foreground/80 max-w-md text-sm"   , children: CROP_INFO[best.crop].description}, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 100}, this)
                  , _jsxDEV(Gauge, { value: best.score,}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 99}, this)
                , best.confidence < 80 && (
                  _jsxDEV('div', { className: "mt-5 flex items-start gap-2 p-3 rounded-lg bg-destructive/20 text-primary-foreground text-sm"        , children: [
                    _jsxDEV(AlertTriangle, { className: "w-4 h-4 mt-0.5 shrink-0"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this )
                    , _jsxDEV('p', { children: "Prediction confidence is moderate. Consider reviewing your input values."        }, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 111}, this)
                )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 98}, this)

              /* Top 3 */
              , _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
                _jsxDEV('h3', { className: "font-semibold text-lg" , children: "Top 3 recommendations"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this)
                , _jsxDEV('div', { className: "mt-4 space-y-3" , children: 
                  top3.map((p, i) => (
                    _jsxDEV('div', { className: "flex items-center gap-4"  , children: [
                      _jsxDEV('div', { className: "w-8 text-center text-sm text-muted-foreground font-mono"    , children: ["#", i + 1]}, void 0, true, {fileName: _jsxFileName, lineNumber: 124}, this)
                      , _jsxDEV('div', { className: "text-2xl", children: CROP_EMOJI[p.crop]}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this)
                      , _jsxDEV('div', { className: "flex-1 min-w-0" , children: [
                        _jsxDEV('div', { className: "flex justify-between text-sm font-medium"   , children: [
                          _jsxDEV('span', { className: "capitalize", children: p.crop}, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
                          , _jsxDEV('span', { className: "tabular-nums text-primary" , children: [p.confidence.toFixed(1), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 129}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 127}, this)
                        , _jsxDEV('div', { className: "mt-1.5 h-2 rounded-full bg-muted overflow-hidden"    , children: 
                          _jsxDEV('div', { className: "h-full bg-[var(--gradient-accent)] transition-all"  , style: { width: `${p.confidence}%` },}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this )
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 126}, this)
                    ]}, p.crop, true, {fileName: _jsxFileName, lineNumber: 123}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
                , _jsxDEV('p', { className: "mt-4 text-xs text-muted-foreground"  , children: [
                  _jsxDEV('strong', { children: "Why not the others?"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this), " Lower-ranked crops match fewer ideal conditions (e.g. wrong rainfall band or pH range) — see the contribution chart below."
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 119}, this)

              /* LIME */
              , _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
                _jsxDEV('h3', { className: "font-semibold text-lg" , children: "What influenced this prediction?"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 145}, this)
                , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-1"  , children: ["LIME-style local feature contributions for "     , _jsxDEV('span', { className: "capitalize font-medium text-foreground"  , children: best.crop}, void 0, false, {fileName: _jsxFileName, lineNumber: 146}, this), "."]}, void 0, true, {fileName: _jsxFileName, lineNumber: 146}, this)
                , _jsxDEV('div', { className: "mt-4 space-y-3" , children: 
                  contribs.map((c) => {
                    const pos = c.impact >= 0;
                    const w = Math.min(100, Math.abs(c.impact) * 100);
                    return (
                      _jsxDEV('div', { className: "grid grid-cols-[140px_1fr_60px] items-center gap-3 text-sm"    , children: [
                        _jsxDEV('div', { className: "truncate", children: c.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 153}, this)
                        , _jsxDEV('div', { className: "relative h-6 bg-muted rounded"   , children: [
                          _jsxDEV('div', {
                            className: `absolute top-0 bottom-0 ${pos ? "left-1/2 bg-primary" : "right-1/2 bg-destructive"} rounded`,
                            style: { width: `${w / 2}%` },}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this
                          )
                          , _jsxDEV('div', { className: "absolute top-0 bottom-0 left-1/2 w-px bg-border"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 159}, this )
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 154}, this)
                        , _jsxDEV('div', { className: `tabular-nums text-right font-mono text-xs ${pos ? "text-primary" : "text-destructive"}`, children: [
                          pos ? "+" : "", (c.impact * 100).toFixed(0), "%"
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 161}, this)
                      ]}, c.feature, true, {fileName: _jsxFileName, lineNumber: 152}, this)
                    );
                  })
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 147}, this)
                , _jsxDEV('div', { className: "mt-5", children: 
                  _jsxDEV(Link, { to: "/explain", className: "inline-flex items-center gap-1 text-sm text-primary hover:underline"     , children: ["Learn more about Explainable AI "
                         , _jsxDEV(ArrowRight, { className: "w-3 h-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 169}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 168}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 144}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 96}, this)
          )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 86}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
  );
}

function Gauge({ value }) {
  const v = Math.max(0, Math.min(100, value));
  const angle = (v / 100) * 180;
  const label = v >= 90 ? "Excellent" : v >= 75 ? "Good" : v >= 50 ? "Moderate" : "Poor";
  return (
    _jsxDEV('div', { className: "text-center", children: [
      _jsxDEV('svg', { viewBox: "0 0 100 60"   , className: "w-32 h-20" , children: [
        _jsxDEV('path', { d: "M 5 55 A 45 45 0 0 1 95 55"          , fill: "none", stroke: "currentColor", strokeOpacity: "0.2", strokeWidth: "8", strokeLinecap: "round",}, void 0, false, {fileName: _jsxFileName, lineNumber: 189}, this )
        , _jsxDEV('path', {
          d: "M 5 55 A 45 45 0 0 1 95 55"          ,
          fill: "none",
          stroke: "oklch(0.78 0.13 115)"  ,
          strokeWidth: "8",
          strokeLinecap: "round",
          strokeDasharray: `${(angle / 180) * 141.37} 141.37`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 190}, this
        )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 188}, this)
      , _jsxDEV('div', { className: "-mt-4 text-3xl font-bold tabular-nums"   , children: v.toFixed(0)}, void 0, false, {fileName: _jsxFileName, lineNumber: 199}, this)
      , _jsxDEV('div', { className: "text-xs uppercase tracking-widest opacity-80"   , children: label}, void 0, false, {fileName: _jsxFileName, lineNumber: 200}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 187}, this)
  );
}