const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";

export function PageHeader({ eyebrow, title, description, actions }) {
  return (
    _jsxDEV('header', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8"      , children: [
      eyebrow && (
        _jsxDEV('p', { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-3"     , children: eyebrow}, void 0, false, {fileName: _jsxFileName, lineNumber: 7}, this)
      )
      , _jsxDEV('div', { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4"     , children: [
        _jsxDEV('div', { className: "max-w-3xl", children: [
          _jsxDEV('h1', { className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"    , children: title}, void 0, false, {fileName: _jsxFileName, lineNumber: 11}, this)
          , description && _jsxDEV('p', { className: "mt-4 text-muted-foreground text-lg"  , children: description}, void 0, false, {fileName: _jsxFileName, lineNumber: 12}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 10}, this)
        , actions && _jsxDEV('div', { className: "flex flex-wrap gap-2 shrink-0"   , children: actions}, void 0, false, {fileName: _jsxFileName, lineNumber: 14}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 9}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 5}, this)
  );
}