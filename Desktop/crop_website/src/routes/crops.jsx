const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { CROPS, CROP_INFO, CROP_EMOJI } from "@/lib/cropData";
import { Search, Droplet, Thermometer, Calendar } from "lucide-react";

export const Route = createFileRoute("/crops")({
  head: () => ({ meta: [
    { title: "Crops Knowledge Base — CropAI Advisor" },
    { name: "description", content: "Browse all 22 crops: ideal soil, climate, water needs and growing season." },
    { property: "og:title", content: "Crops Knowledge Base — CropAI Advisor" },
    { property: "og:description", content: "Detailed cards for all 22 crops in the dataset." },
  ]}),
  component: Crops,
});

function Crops() {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () => CROPS.filter((c) => c.toLowerCase().includes(q.trim().toLowerCase())),
    [q],
  );

  return (
    _jsxDEV('div', { children: [
      _jsxDEV(PageHeader, {
        eyebrow: "Knowledge Base" ,
        title: "22 crops, at a glance"    ,
        description: "Reference card for every crop the model can recommend, including ideal soil and climate ranges from the dataset."                 ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this
      )

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8"     , children: 
        _jsxDEV('div', { className: "relative max-w-md" , children: [
          _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this )
          , _jsxDEV('input', {
            value: q,
            onChange: (e) => setQ(e.target.value),
            placeholder: "Search crops..." ,
            className: "w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"           ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this
          )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16"          , children: [
        filtered.map((c) => {
          const info = CROP_INFO[c];
          return (
            _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-5 hover:shadow-[var(--shadow-soft)] transition-shadow group"       , children: [
              _jsxDEV('div', { className: "flex items-center justify-between"  , children: [
                _jsxDEV('div', { className: "text-4xl group-hover:scale-110 transition-transform"  , children: CROP_EMOJI[c]}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
                , _jsxDEV('span', { className: "text-[10px] uppercase tracking-widest text-muted-foreground"   , children: [info.water, " water" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)
              , _jsxDEV('h3', { className: "mt-3 font-semibold text-lg capitalize"   , children: c}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
              , _jsxDEV('p', { className: "mt-1 text-sm text-muted-foreground line-clamp-2"   , children: info.description}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)
              , _jsxDEV('div', { className: "mt-4 space-y-1.5 text-xs"  , children: [
                _jsxDEV('div', { className: "flex items-center gap-2 text-muted-foreground"   , children: [_jsxDEV(Calendar, { className: "w-3.5 h-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this ), " " , info.season]}, void 0, true, {fileName: _jsxFileName, lineNumber: 56}, this)
                , _jsxDEV('div', { className: "flex items-center gap-2 text-muted-foreground"   , children: [_jsxDEV(Thermometer, { className: "w-3.5 h-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this ), " " , info.ideal.temperature.toFixed(0), "°C avg" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)
                , _jsxDEV('div', { className: "flex items-center gap-2 text-muted-foreground"   , children: [_jsxDEV(Droplet, { className: "w-3.5 h-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this ), " " , info.ideal.rainfall.toFixed(0), " mm rainfall"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 55}, this)
              , _jsxDEV('div', { className: "mt-4 pt-3 border-t border-border text-xs grid grid-cols-3 gap-2 tabular-nums"        , children: [
                _jsxDEV('div', { children: [_jsxDEV('span', { className: "text-muted-foreground", children: "N"}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this), " " , _jsxDEV('span', { className: "font-medium", children: info.ideal.N}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)
                , _jsxDEV('div', { children: [_jsxDEV('span', { className: "text-muted-foreground", children: "P"}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this), " " , _jsxDEV('span', { className: "font-medium", children: info.ideal.P}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)
                , _jsxDEV('div', { children: [_jsxDEV('span', { className: "text-muted-foreground", children: "K"}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this), " " , _jsxDEV('span', { className: "font-medium", children: info.ideal.K}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 63}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 60}, this)
            ]}, c, true, {fileName: _jsxFileName, lineNumber: 48}, this)
          );
        })
        , filtered.length === 0 && (
          _jsxDEV('p', { className: "text-muted-foreground col-span-full text-center py-12"   , children: ["No crops match \""   , q, "\"."]}, void 0, true, {fileName: _jsxFileName, lineNumber: 69}, this)
        )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 25}, this)
  );
}