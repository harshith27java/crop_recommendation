const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { DEFAULT_INPUT, explain, predictTopK, CROP_EMOJI } from "@/lib/cropData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Eye, Lightbulb, Shield } from "lucide-react";

export const Route = createFileRoute("/explain")({
  head: () => ({ meta: [
    { title: "Explainable AI — CropAI Advisor" },
    { name: "description", content: "Understand how LIME explains each crop recommendation feature by feature." },
    { property: "og:title", content: "Explainable AI — CropAI Advisor" },
    { property: "og:description", content: "Per-feature contributions for transparent ML predictions." },
  ]}),
  component: Explain,
});

function Explain() {
  const top = predictTopK(DEFAULT_INPUT, 1)[0];
  const contribs = explain(DEFAULT_INPUT, top.crop);
  const chart = contribs.map((c) => ({ name: c.label.replace(/\s*\(.*\)/, ""), impact: +(c.impact * 100).toFixed(1) }));
  const positives = chart.filter((c) => c.impact >= 0);
  const negatives = chart.filter((c) => c.impact < 0);

  return (
    _jsxDEV('div', { children: [
      _jsxDEV(PageHeader, {
        eyebrow: "Explainable AI" ,
        title: "What influenced this prediction?"   ,
        description: "LIME (Local Interpretable Model-agnostic Explanations) locally approximates the model around a single input to attribute the prediction to individual features."                   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this
      )

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-4 mb-8"        , children: 
        [
          { icon: Eye, title: "Transparency", body: "See exactly which features pushed the model toward this crop." },
          { icon: Lightbulb, title: "Insight", body: "Identify which input changes would most improve suitability." },
          { icon: Shield, title: "Trust", body: "Agronomists can verify each recommendation before acting on it." },
        ].map((c) => (
          _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
            _jsxDEV(c.icon, { className: "w-5 h-5 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this )
            , _jsxDEV('h3', { className: "mt-3 font-semibold" , children: c.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
            , _jsxDEV('p', { className: "mt-1 text-sm text-muted-foreground"  , children: c.body}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
          ]}, c.title, true, {fileName: _jsxFileName, lineNumber: 38}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8"     , children: 
        _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
          _jsxDEV('div', { className: "flex items-center justify-between flex-wrap gap-3"    , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-muted-foreground"   , children: "Example prediction" }, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
              , _jsxDEV('h2', { className: "text-2xl font-bold capitalize flex items-center gap-2"     , children: [
                _jsxDEV('span', { className: "text-3xl", children: CROP_EMOJI[top.crop]}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this), " " , top.crop
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)
            , _jsxDEV('div', { className: "text-right", children: [
              _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-muted-foreground"   , children: "Confidence"}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
              , _jsxDEV('p', { className: "text-2xl font-bold text-primary tabular-nums"   , children: [top.confidence.toFixed(1), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 55}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 48}, this)

          , _jsxDEV('div', { className: "mt-6 h-72" , children: 
            _jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: 
              _jsxDEV(BarChart, { data: chart, layout: "vertical", margin: { left: 20, right: 30, top: 10, bottom: 10 }, children: [
                _jsxDEV(XAxis, { type: "number", domain: [-100, 100], tickFormatter: (v) => `${v}%`, stroke: "currentColor", opacity: 0.5, fontSize: 11,}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this )
                , _jsxDEV(YAxis, { type: "category", dataKey: "name", width: 100, stroke: "currentColor", opacity: 0.7, fontSize: 12,}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this )
                , _jsxDEV(Tooltip, {
                  formatter: (v) => [`${v}%`, "Contribution"],
                  contentStyle: { background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 },}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this
                )
                , _jsxDEV(Bar, { dataKey: "impact", radius: [0, 6, 6, 0], children: 
                  chart.map((c, i) => (
                    _jsxDEV(Cell, { fill: c.impact >= 0 ? "oklch(0.36 0.07 150)" : "oklch(0.6 0.18 27)",}, i, false, {fileName: _jsxFileName, lineNumber: 72}, this )
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 63}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 47}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-4 mb-16"        , children: [
        _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
          _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-primary font-semibold"    , children: "Pushing toward" }, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this)
          , _jsxDEV('h3', { className: "mt-1 font-semibold" , children: "Positive contributions" }, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
          , _jsxDEV('ul', { className: "mt-3 space-y-2 text-sm"  , children: [
            positives.map((c) => (
              _jsxDEV('li', { className: "flex justify-between" , children: [_jsxDEV('span', { children: c.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this), _jsxDEV('span', { className: "font-mono text-primary tabular-nums"  , children: ["+", c.impact.toFixed(0), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 87}, this)]}, c.name, true, {fileName: _jsxFileName, lineNumber: 87}, this)
            ))
            , positives.length === 0 && _jsxDEV('li', { className: "text-muted-foreground", children: "None."}, void 0, false, {fileName: _jsxFileName, lineNumber: 89}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 85}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 82}, this)
        , _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
          _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-destructive font-semibold"    , children: "Pushing away" }, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this)
          , _jsxDEV('h3', { className: "mt-1 font-semibold" , children: "Negative contributions" }, void 0, false, {fileName: _jsxFileName, lineNumber: 94}, this)
          , _jsxDEV('ul', { className: "mt-3 space-y-2 text-sm"  , children: [
            negatives.map((c) => (
              _jsxDEV('li', { className: "flex justify-between" , children: [_jsxDEV('span', { children: c.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this), _jsxDEV('span', { className: "font-mono text-destructive tabular-nums"  , children: [c.impact.toFixed(0), "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 97}, this)]}, c.name, true, {fileName: _jsxFileName, lineNumber: 97}, this)
            ))
            , negatives.length === 0 && _jsxDEV('li', { className: "text-muted-foreground", children: "None — this is a strong match."      }, void 0, false, {fileName: _jsxFileName, lineNumber: 99}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 95}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 92}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 81}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 25}, this)
  );
}