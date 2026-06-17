const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, BookOpen, Target, Cpu, BarChart3, Eye, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/paper")({
  head: () => ({ meta: [
    { title: "Research Paper — CropAI Advisor" },
    { name: "description", content: "Advancing Crop Recommendation System with Supervised ML and Explainable AI — paper summary and findings." },
    { property: "og:title", content: "Research Paper — CropAI Advisor" },
    { property: "og:description", content: "Paper summary, methodology and results." },
  ]}),
  component: Paper,
});

const PAPER_URL = "https://doi.org/10.1038/s41598-025-07003-8";

const SECTIONS = [
  { icon: Target, title: "Problem", body: "Crop selection depends on multiple soil and climate variables. Manual rules-of-thumb miss complex interactions and don't scale, motivating an ML-based recommender." },
  { icon: BookOpen, title: "Methodology", body: "The authors benchmark 10 supervised classifiers on the Kaggle Crop Recommendation dataset, then apply LIME to explain predictions from the best model." },
  { icon: Cpu, title: "Models compared", body: "KNN, Decision Tree, Random Forest, Naive Bayes, SVM, Logistic Regression, Neural Network, Gradient Boosting, LDA and QDA." },
  { icon: BarChart3, title: "Experimental setup", body: "Standard 80/20 train-test split with StandardScaler preprocessing; metrics reported are Accuracy, Precision, Recall and F1 (macro)." },
  { icon: CheckCircle2, title: "Results", body: "Gradient Boosting reached 99.27% accuracy / 99.32% F1, a top-tier result that the paper highlights as the recommended deployment model." },
  { icon: Eye, title: "Explainable AI (LIME)", body: "LIME locally approximates the model around each input to attribute the prediction to individual features (e.g. rainfall +32%, humidity +24%)." },
];

function Paper() {
  return (
    _jsxDEV('div', { children: [
      _jsxDEV(PageHeader, {
        eyebrow: "Research Paper" ,
        title: "Advancing Crop Recommendation with Supervised ML and Explainable AI"        ,
        description: "Scientific Reports (Nature Portfolio), 2025 · DOI 10.1038/s41598-025-07003-8"       ,
        actions: 
          _jsxDEV('a', {
            href: PAPER_URL,
            target: "_blank",
            rel: "noopener noreferrer" ,
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium hover:opacity-90 transition"          ,
 children: ["Open Original Paper "
               , _jsxDEV(ExternalLink, { className: "w-4 h-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this
      )

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"    , children: 
        _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-8"    , children: [
          _jsxDEV('h2', { className: "text-xl font-bold" , children: "Abstract"}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
          , _jsxDEV('p', { className: "mt-3 text-muted-foreground leading-relaxed"  , children: "Agricultural decision-making increasingly relies on data. This study compares ten supervised machine-learning algorithms on the Kaggle crop recommendation dataset (2,200 samples, 7 features, 22 crops) and identifies Gradient Boosting as the best-performing model (Accuracy 99.27%, F1 99.32%). To make the system trustworthy, LIME is integrated to produce local, per-feature explanations for each recommendation. The result is an accurate and interpretable advisor suitable for real-world agronomic guidance."






          }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)

      , _jsxDEV('section', { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 grid md:grid-cols-2 gap-4 mb-16"         , children: 
        SECTIONS.map((s) => (
          _jsxDEV('div', { className: "rounded-2xl border border-border bg-card p-6"    , children: [
            _jsxDEV('div', { className: "flex items-center gap-3"  , children: [
              _jsxDEV('div', { className: "w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center"      , children: 
                _jsxDEV(s.icon, { className: "w-5 h-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
              , _jsxDEV('h3', { className: "font-semibold text-lg" , children: s.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)
            , _jsxDEV('p', { className: "mt-3 text-sm text-muted-foreground leading-relaxed"   , children: s.body}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
          ]}, s.title, true, {fileName: _jsxFileName, lineNumber: 61}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 28}, this)
  );
}