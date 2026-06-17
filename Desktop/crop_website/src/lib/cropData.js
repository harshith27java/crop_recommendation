 





export const CROPS = [
  "rice","maize","chickpea","kidneybeans","pigeonpeas","mothbeans","mungbean",
  "blackgram","lentil","pomegranate","banana","mango","grapes","watermelon",
  "muskmelon","apple","orange","papaya","coconut","cotton","jute","coffee",
];

export const CROP_EMOJI = {
  rice: "🌾", maize: "🌽", chickpea: "🫘", kidneybeans: "🫘", pigeonpeas: "🫘",
  mothbeans: "🫘", mungbean: "🫘", blackgram: "🫘", lentil: "🫘",
  pomegranate: "🍎", banana: "🍌", mango: "🥭", grapes: "🍇",
  watermelon: "🍉", muskmelon: "🍈", apple: "🍏", orange: "🍊",
  papaya: "🍐", coconut: "🥥", cotton: "🌿", jute: "🌱", coffee: "☕",
};











export const CROP_INFO = {
  rice: { name: "rice", description: "Staple cereal grain grown in flooded paddies.", season: "Kharif (Jun–Nov)", water: "Very High", conditions: "Warm, humid, high rainfall", ideal: { N: 80, P: 48, K: 40, temperature: 23, humidity: 82, ph: 6.4, rainfall: 236 } },
  maize: { name: "maize", description: "Versatile cereal used for food, feed and bioethanol.", season: "Kharif / Rabi", water: "Moderate", conditions: "Warm, moderate rainfall", ideal: { N: 78, P: 48, K: 20, temperature: 22, humidity: 65, ph: 6.3, rainfall: 84 } },
  chickpea: { name: "chickpea", description: "Protein-rich pulse crop, also called gram.", season: "Rabi (Oct–Mar)", water: "Low", conditions: "Cool, dry climate", ideal: { N: 40, P: 67, K: 80, temperature: 19, humidity: 17, ph: 7.3, rainfall: 80 } },
  kidneybeans: { name: "kidneybeans", description: "Common bean used widely in Indian cuisine.", season: "Rabi", water: "Moderate", conditions: "Cool, well-drained soil", ideal: { N: 21, P: 67, K: 20, temperature: 20, humidity: 22, ph: 5.8, rainfall: 105 } },
  pigeonpeas: { name: "pigeonpeas", description: "Drought-tolerant legume, key dal crop.", season: "Kharif", water: "Low", conditions: "Warm, semi-arid", ideal: { N: 21, P: 67, K: 20, temperature: 27, humidity: 48, ph: 5.8, rainfall: 149 } },
  mothbeans: { name: "mothbeans", description: "Drought-resistant pulse from arid zones.", season: "Kharif", water: "Very Low", conditions: "Hot, arid", ideal: { N: 21, P: 48, K: 20, temperature: 28, humidity: 53, ph: 6.8, rainfall: 51 } },
  mungbean: { name: "mungbean", description: "Short-duration green gram pulse.", season: "Kharif / Summer", water: "Low", conditions: "Warm, moderate humidity", ideal: { N: 21, P: 47, K: 20, temperature: 28, humidity: 85, ph: 6.7, rainfall: 48 } },
  blackgram: { name: "blackgram", description: "Urad dal — protein-rich legume.", season: "Kharif", water: "Low", conditions: "Warm, well-drained", ideal: { N: 40, P: 67, K: 19, temperature: 30, humidity: 65, ph: 7.1, rainfall: 67 } },
  lentil: { name: "lentil", description: "Cool-season pulse rich in protein.", season: "Rabi", water: "Low", conditions: "Cool, dry", ideal: { N: 19, P: 68, K: 19, temperature: 24, humidity: 64, ph: 6.9, rainfall: 45 } },
  pomegranate: { name: "pomegranate", description: "Hardy fruit suited to semi-arid climates.", season: "Year-round", water: "Low", conditions: "Hot, dry", ideal: { N: 19, P: 18, K: 40, temperature: 22, humidity: 90, ph: 6.4, rainfall: 107 } },
  banana: { name: "banana", description: "Tropical fruit with year-round demand.", season: "Year-round", water: "High", conditions: "Hot, humid", ideal: { N: 100, P: 82, K: 50, temperature: 27, humidity: 80, ph: 5.9, rainfall: 105 } },
  mango: { name: "mango", description: "King of fruits — tropical orchard crop.", season: "Mar–Jul harvest", water: "Moderate", conditions: "Hot, dry summers", ideal: { N: 20, P: 27, K: 30, temperature: 32, humidity: 50, ph: 5.8, rainfall: 95 } },
  grapes: { name: "grapes", description: "Vine fruit grown for table and wine use.", season: "Winter pruned", water: "Moderate", conditions: "Warm days, cool nights", ideal: { N: 23, P: 132, K: 200, temperature: 24, humidity: 82, ph: 6.0, rainfall: 70 } },
  watermelon: { name: "watermelon", description: "Summer cucurbit thriving in heat.", season: "Summer", water: "Moderate", conditions: "Hot, sandy loam", ideal: { N: 99, P: 17, K: 50, temperature: 25, humidity: 85, ph: 6.5, rainfall: 50 } },
  muskmelon: { name: "muskmelon", description: "Aromatic summer cucurbit.", season: "Summer", water: "Moderate", conditions: "Hot, well-drained", ideal: { N: 100, P: 18, K: 50, temperature: 28, humidity: 92, ph: 6.4, rainfall: 25 } },
  apple: { name: "apple", description: "Temperate fruit needing chilling hours.", season: "Spring bloom", water: "Moderate", conditions: "Cool temperate", ideal: { N: 21, P: 134, K: 200, temperature: 22, humidity: 92, ph: 5.9, rainfall: 113 } },
  orange: { name: "orange", description: "Citrus fruit, juicy and vitamin-C rich.", season: "Winter harvest", water: "Moderate", conditions: "Subtropical", ideal: { N: 19, P: 16, K: 10, temperature: 23, humidity: 92, ph: 7.0, rainfall: 110 } },
  papaya: { name: "papaya", description: "Fast-growing tropical fruit tree.", season: "Year-round", water: "Moderate", conditions: "Warm, humid", ideal: { N: 49, P: 59, K: 50, temperature: 33, humidity: 92, ph: 6.7, rainfall: 142 } },
  coconut: { name: "coconut", description: "Coastal palm with year-round yield.", season: "Year-round", water: "High", conditions: "Coastal, humid", ideal: { N: 22, P: 17, K: 31, temperature: 27, humidity: 95, ph: 6.0, rainfall: 175 } },
  cotton: { name: "cotton", description: "Major fiber crop of warm regions.", season: "Kharif", water: "Moderate", conditions: "Warm, sunny", ideal: { N: 118, P: 46, K: 20, temperature: 24, humidity: 80, ph: 6.9, rainfall: 80 } },
  jute: { name: "jute", description: "Bast fiber crop grown in humid lowlands.", season: "Kharif", water: "High", conditions: "Hot, humid, alluvial", ideal: { N: 78, P: 47, K: 40, temperature: 25, humidity: 80, ph: 6.7, rainfall: 175 } },
  coffee: { name: "coffee", description: "Shade-grown beverage crop of hill regions.", season: "Year-round", water: "Moderate", conditions: "Cool tropical highlands", ideal: { N: 101, P: 28, K: 30, temperature: 26, humidity: 59, ph: 6.8, rainfall: 158 } },
};

export const FEATURES = [
  { key: "N", label: "Nitrogen (N)", unit: "kg/ha", min: 0, max: 140, step: 1, desc: "Ratio of Nitrogen content in soil" },
  { key: "P", label: "Phosphorus (P)", unit: "kg/ha", min: 5, max: 145, step: 1, desc: "Ratio of Phosphorus content in soil" },
  { key: "K", label: "Potassium (K)", unit: "kg/ha", min: 5, max: 205, step: 1, desc: "Ratio of Potassium content in soil" },
  { key: "temperature", label: "Temperature", unit: "°C", min: 8, max: 45, step: 0.1, desc: "Average temperature in Celsius" },
  { key: "humidity", label: "Humidity", unit: "%", min: 10, max: 100, step: 0.1, desc: "Relative humidity in %" },
  { key: "ph", label: "Soil pH", unit: "", min: 3.5, max: 10, step: 0.1, desc: "pH value of the soil" },
  { key: "rainfall", label: "Rainfall", unit: "mm", min: 20, max: 300, step: 0.5, desc: "Rainfall in mm" },
] ;

 


export const DEFAULT_INPUT = { N: 90, P: 42, K: 43, temperature: 21, humidity: 82, ph: 6.5, rainfall: 200 };

// Simple distance-based predictor mimicking the GB model behavior on this dataset.






function distance(input, ideal) {
  const w = { N: 1, P: 1, K: 1, temperature: 3, humidity: 1.5, ph: 8, rainfall: 0.6 };
  let s = 0;
  (Object.keys(w) ).forEach((k) => {
    const d = (input[k] - ideal[k]);
    s += w[k] * d * d;
  });
  return Math.sqrt(s);
}

export function predictTopK(input, k = 3) {
  const scored = CROPS.map((c) => {
    const d = distance(input, CROP_INFO[c].ideal );
    return { crop: c, d };
  });
  scored.sort((a, b) => a.d - b.d);
  // softmax-style confidences from inverse distance
  const invs = scored.map((s) => 1 / (1 + s.d));
  const sum = invs.reduce((a, b) => a + b, 0);
  const probs = invs.map((v) => v / sum);
  return scored.slice(0, k).map((s, i) => ({
    crop: s.crop,
    confidence: Math.min(99.9, probs[i] * 100 * (i === 0 ? 1.6 : 1)),
    score: Math.max(0, Math.min(100, 100 - s.d * 0.8)),
  }));
}



export function explain(input, crop) {
  const ideal = CROP_INFO[crop].ideal;
  const ranges = { N: 140, P: 140, K: 200, temperature: 30, humidity: 80, ph: 5, rainfall: 280 };
  return FEATURES.map((f) => {
    const diff = Math.abs(input[f.key] - ideal[f.key ]) / ranges[f.key ];
    // closer = more positive impact
    const impact = +(1 - diff * 2).toFixed(3);
    return { feature: f.key , label: f.label, value: input[f.key ], impact };
  }).sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact));
}

// Paper metrics
export const PAPER_METRICS = { accuracy: 99.27, precision: 99.32, recall: 99.36, f1: 99.32 };

export const ALGO_METRICS = [
  { name: "Gradient Boosting", accuracy: 99.27, precision: 99.32, recall: 99.36, f1: 99.32 },
  { name: "Random Forest", accuracy: 99.09, precision: 99.15, recall: 99.10, f1: 99.10 },
  { name: "Neural Network", accuracy: 98.86, precision: 98.95, recall: 98.86, f1: 98.88 },
  { name: "KNN", accuracy: 97.50, precision: 97.62, recall: 97.50, f1: 97.50 },
  { name: "SVM", accuracy: 96.82, precision: 96.95, recall: 96.82, f1: 96.84 },
  { name: "Logistic Regression", accuracy: 96.36, precision: 96.50, recall: 96.36, f1: 96.38 },
  { name: "LDA", accuracy: 96.14, precision: 96.20, recall: 96.14, f1: 96.15 },
  { name: "Naive Bayes", accuracy: 99.55, precision: 99.55, recall: 99.55, f1: 99.55 },
  { name: "Decision Tree", accuracy: 98.18, precision: 98.30, recall: 98.18, f1: 98.20 },
  { name: "QDA", accuracy: 98.86, precision: 98.92, recall: 98.86, f1: 98.86 },
];

// Sample dataset rows (subset from the dataset for the explorer page)
export const SAMPLE_ROWS = [
  { N:90,P:42,K:43,temperature:20.88,humidity:82.00,ph:6.50,rainfall:202.94,label:"rice"},
  { N:85,P:58,K:41,temperature:21.77,humidity:80.32,ph:7.04,rainfall:226.66,label:"rice"},
  { N:60,P:55,K:44,temperature:23.00,humidity:82.32,ph:7.84,rainfall:263.96,label:"rice"},
  { N:74,P:35,K:40,temperature:26.49,humidity:80.16,ph:6.98,rainfall:242.86,label:"rice"},
  { N:78,P:42,K:42,temperature:20.13,humidity:81.60,ph:7.63,rainfall:262.72,label:"rice"},
  { N:69,P:37,K:42,temperature:23.05,humidity:83.37,ph:7.07,rainfall:251.05,label:"rice"},
  { N:71,P:54,K:16,temperature:22.61,humidity:63.69,ph:5.75,rainfall:87.76,label:"maize"},
  { N:84,P:58,K:23,temperature:18.27,humidity:64.30,ph:6.20,rainfall:74.43,label:"maize"},
  { N:76,P:44,K:18,temperature:24.99,humidity:60.40,ph:6.84,rainfall:68.30,label:"maize"},
  { N:40,P:72,K:77,temperature:17.02,humidity:16.86,ph:7.49,rainfall:88.55,label:"chickpea"},
  { N:36,P:58,K:79,temperature:19.10,humidity:18.45,ph:7.36,rainfall:71.10,label:"chickpea"},
  { N:20,P:67,K:19,temperature:20.27,humidity:21.61,ph:5.69,rainfall:127.18,label:"kidneybeans"},
  { N:18,P:62,K:18,temperature:23.45,humidity:24.40,ph:6.05,rainfall:80.10,label:"kidneybeans"},
  { N:23,P:70,K:18,temperature:27.36,humidity:48.40,ph:6.06,rainfall:144.87,label:"pigeonpeas"},
  { N:19,P:48,K:18,temperature:28.40,humidity:54.18,ph:6.85,rainfall:51.20,label:"mothbeans"},
  { N:23,P:46,K:20,temperature:28.92,humidity:85.50,ph:6.71,rainfall:48.34,label:"mungbean"},
  { N:42,P:66,K:18,temperature:29.96,humidity:65.41,ph:7.18,rainfall:67.85,label:"blackgram"},
  { N:20,P:65,K:20,temperature:24.10,humidity:64.80,ph:6.92,rainfall:45.94,label:"lentil"},
  { N:18,P:18,K:42,temperature:22.39,humidity:90.74,ph:6.45,rainfall:107.53,label:"pomegranate"},
  { N:100,P:82,K:50,temperature:27.38,humidity:80.36,ph:5.95,rainfall:104.63,label:"banana"},
  { N:20,P:27,K:30,temperature:31.76,humidity:50.05,ph:5.76,rainfall:94.79,label:"mango"},
  { N:25,P:132,K:200,temperature:24.20,humidity:81.85,ph:6.02,rainfall:69.61,label:"grapes"},
  { N:99,P:17,K:50,temperature:25.59,humidity:85.95,ph:6.50,rainfall:50.79,label:"watermelon"},
  { N:100,P:18,K:50,temperature:28.66,humidity:92.34,ph:6.36,rainfall:24.69,label:"muskmelon"},
  { N:21,P:134,K:200,temperature:21.83,humidity:92.33,ph:5.93,rainfall:112.65,label:"apple"},
  { N:19,P:16,K:10,temperature:22.77,humidity:92.50,ph:7.01,rainfall:110.47,label:"orange"},
  { N:49,P:59,K:50,temperature:33.72,humidity:92.40,ph:6.74,rainfall:142.38,label:"papaya"},
  { N:22,P:17,K:31,temperature:27.41,humidity:94.84,ph:5.97,rainfall:175.69,label:"coconut"},
  { N:118,P:46,K:20,temperature:23.99,humidity:79.93,ph:6.85,rainfall:80.40,label:"cotton"},
  { N:78,P:47,K:40,temperature:24.96,humidity:79.64,ph:6.73,rainfall:174.72,label:"jute"},
  { N:101,P:28,K:30,temperature:25.54,humidity:58.87,ph:6.81,rainfall:158.07,label:"coffee"},
];