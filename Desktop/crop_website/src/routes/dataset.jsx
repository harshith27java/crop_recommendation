const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SAMPLE_ROWS, CROPS, FEATURES } from "@/lib/cropData";
import { Download, Search, ArrowUpDown } from "lucide-react";

export const Route = createFileRoute("/dataset")({
  head: () => ({ meta: [
    { title: "Dataset — CropAI Advisor" },
    { name: "description", content: "Crop Recommendation Dataset: 2,200 records, 7 features, 22 crops. Search, sort and explore." },
    { property: "og:title", content: "Dataset — CropAI Advisor" },
    { property: "og:description", content: "Browse the Crop Recommendation dataset." },
  ]}),
  component: Dataset,
});



function Dataset() {
  const [q, setQ] = useState("");
  const [crop, setCrop] = useState("all");
  const [sort, setSort] = useState("label");
  const [dir, setDir] = useState(1);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 10;

  const rows = useMemo(() => {
    const filtered = SAMPLE_ROWS.filter((r) => {
      if (crop !== "all" && r.label !== crop) return false;
      if (!q.trim()) return true;
      const ql = q.toLowerCase();
      return r.label.toLowerCase().includes(ql) || JSON.stringify(r).toLowerCase().includes(ql);
    });
    return [...filtered].sort((a, b) => {
      const av = a[sort] ;
      const bv = b[sort] ;
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  }, [q, crop, sort, dir]);

  const pageRows = rows.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));

  const toggleSort = (key) => {
    if (sort === key) setDir((d) => (d === 1 ? -1 : 1));
    else { setSort(key); setDir(1); }
  };

  return (
    _jsxDEV('div', { children: [
      _jsxDEV(PageHeader, {
        eyebrow: "Dataset",
        title: "Crop Recommendation Dataset"  ,
        description: "2,200 records · 22 crops · 7 numeric features. Sourced from Kaggle."           ,
        actions: 
          _jsxDEV('a', {
            href: "https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset",
            target: "_blank",
            rel: "noopener noreferrer" ,
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium hover:opacity-90 transition"          ,
 children: [
            _jsxDEV(Download, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this ), " Download Dataset"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this
      )

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"         , children: 
        [
          { l: "Records", v: "2,200" },
          { l: "Features", v: "7" },
          { l: "Crops", v: "22" },
          { l: "Missing values", v: "0" },
        ].map((s) => (
          _jsxDEV('div', { className: "rounded-xl border border-border bg-card p-5"    , children: [
            _jsxDEV('p', { className: "text-xs uppercase tracking-widest text-muted-foreground"   , children: s.l}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this)
            , _jsxDEV('p', { className: "mt-2 text-2xl font-bold text-primary"   , children: s.v}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this)
          ]}, s.l, true, {fileName: _jsxFileName, lineNumber: 76}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8"     , children: [
        _jsxDEV('h2', { className: "text-xl font-bold mb-4"  , children: "Feature descriptions" }, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
        , _jsxDEV('div', { className: "overflow-x-auto rounded-xl border border-border bg-card"    , children: 
          _jsxDEV('table', { className: "w-full text-sm" , children: [
            _jsxDEV('thead', { className: "bg-muted/50 text-left" , children: 
              _jsxDEV('tr', { children: [_jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "Feature"}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this), _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "Description"}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this), _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "Unit"}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this), _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: "Range"}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 88}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this)
            , _jsxDEV('tbody', { children: 
              FEATURES.map((f) => (
                _jsxDEV('tr', { className: "border-t border-border" , children: [
                  _jsxDEV('td', { className: "px-4 py-3 font-medium"  , children: f.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this)
                  , _jsxDEV('td', { className: "px-4 py-3 text-muted-foreground"  , children: f.desc}, void 0, false, {fileName: _jsxFileName, lineNumber: 94}, this)
                  , _jsxDEV('td', { className: "px-4 py-3" , children: f.unit || "—"}, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this)
                  , _jsxDEV('td', { className: "px-4 py-3 tabular-nums text-muted-foreground"   , children: [f.min, " – "  , f.max]}, void 0, true, {fileName: _jsxFileName, lineNumber: 96}, this)
                ]}, f.key, true, {fileName: _jsxFileName, lineNumber: 92}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 86}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 83}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"     , children: [
        _jsxDEV('h2', { className: "text-xl font-bold mb-4"  , children: "Sample rows" }, void 0, false, {fileName: _jsxFileName, lineNumber: 105}, this)
        , _jsxDEV('div', { className: "flex flex-wrap gap-3 mb-4"   , children: [
          _jsxDEV('div', { className: "relative flex-1 min-w-[240px]"  , children: [
            _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this )
            , _jsxDEV('input', {
              value: q,
              onChange: (e) => { setQ(e.target.value); setPage(0); },
              placeholder: "Search...",
              className: "w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"           ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)
          , _jsxDEV('select', {
            value: crop,
            onChange: (e) => { setCrop(e.target.value); setPage(0); },
            className: "px-3 py-2.5 rounded-lg border border-border bg-card text-sm"      ,
 children: [
            _jsxDEV('option', { value: "all", children: "All crops" }, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
            , CROPS.map((c) => _jsxDEV('option', { value: c, children: c}, c, false, {fileName: _jsxFileName, lineNumber: 122}, this))
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 116}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)
        , _jsxDEV('div', { className: "overflow-x-auto rounded-xl border border-border bg-card"    , children: 
          _jsxDEV('table', { className: "w-full text-sm" , children: [
            _jsxDEV('thead', { className: "bg-muted/50 text-left" , children: 
              _jsxDEV('tr', { children: 
                (["N","P","K","temperature","humidity","ph","rainfall","label"] ).map((k) => (
                  _jsxDEV('th', { className: "px-4 py-3 font-semibold"  , children: 
                    _jsxDEV('button', { onClick: () => toggleSort(k), className: "inline-flex items-center gap-1 hover:text-primary"   , children: [
                      k, " " , _jsxDEV(ArrowUpDown, { className: "w-3 h-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this )
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 131}, this)
                  }, k, false, {fileName: _jsxFileName, lineNumber: 130}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 127}, this)
            , _jsxDEV('tbody', { children: [
              pageRows.map((r, i) => (
                _jsxDEV('tr', { className: "border-t border-border hover:bg-muted/30"  , children: [
                  _jsxDEV('td', { className: "px-4 py-2.5 tabular-nums"  , children: r.N}, void 0, false, {fileName: _jsxFileName, lineNumber: 141}, this)
                  , _jsxDEV('td', { className: "px-4 py-2.5 tabular-nums"  , children: r.P}, void 0, false, {fileName: _jsxFileName, lineNumber: 142}, this)
                  , _jsxDEV('td', { className: "px-4 py-2.5 tabular-nums"  , children: r.K}, void 0, false, {fileName: _jsxFileName, lineNumber: 143}, this)
                  , _jsxDEV('td', { className: "px-4 py-2.5 tabular-nums"  , children: r.temperature.toFixed(2)}, void 0, false, {fileName: _jsxFileName, lineNumber: 144}, this)
                  , _jsxDEV('td', { className: "px-4 py-2.5 tabular-nums"  , children: r.humidity.toFixed(2)}, void 0, false, {fileName: _jsxFileName, lineNumber: 145}, this)
                  , _jsxDEV('td', { className: "px-4 py-2.5 tabular-nums"  , children: r.ph.toFixed(2)}, void 0, false, {fileName: _jsxFileName, lineNumber: 146}, this)
                  , _jsxDEV('td', { className: "px-4 py-2.5 tabular-nums"  , children: r.rainfall.toFixed(2)}, void 0, false, {fileName: _jsxFileName, lineNumber: 147}, this)
                  , _jsxDEV('td', { className: "px-4 py-2.5" , children: _jsxDEV('span', { className: "inline-flex px-2 py-0.5 rounded-full bg-accent/30 text-accent-foreground text-xs font-medium"       , children: r.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)
                ]}, i, true, {fileName: _jsxFileName, lineNumber: 140}, this)
              ))
              , pageRows.length === 0 && (
                _jsxDEV('tr', { children: _jsxDEV('td', { colSpan: 8, className: "px-4 py-8 text-center text-muted-foreground"   , children: "No rows match your filters."    }, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this)
              )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 126}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this)
        , _jsxDEV('div', { className: "flex items-center justify-between mt-4 text-sm text-muted-foreground"     , children: [
          _jsxDEV('p', { children: ["Showing " , pageRows.length, " of "  , rows.length]}, void 0, true, {fileName: _jsxFileName, lineNumber: 158}, this)
          , _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
            _jsxDEV('button', { onClick: () => setPage((p) => Math.max(0, p - 1)), disabled: page === 0, className: "px-3 py-1.5 rounded-md border border-border bg-card disabled:opacity-50 hover:bg-muted"       , children: "Prev"}, void 0, false, {fileName: _jsxFileName, lineNumber: 160}, this)
            , _jsxDEV('span', { children: ["Page " , page + 1, " / "  , pages]}, void 0, true, {fileName: _jsxFileName, lineNumber: 161}, this)
            , _jsxDEV('button', { onClick: () => setPage((p) => Math.min(pages - 1, p + 1)), disabled: page >= pages - 1, className: "px-3 py-1.5 rounded-md border border-border bg-card disabled:opacity-50 hover:bg-muted"       , children: "Next"}, void 0, false, {fileName: _jsxFileName, lineNumber: 162}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 159}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 157}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 104}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)
  );
}