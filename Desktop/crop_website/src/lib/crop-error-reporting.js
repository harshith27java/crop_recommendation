export function reportCropError(error, context = {}) {
  if (typeof window === "undefined") return;
  console.error("CropAI error:", error, context);
}
