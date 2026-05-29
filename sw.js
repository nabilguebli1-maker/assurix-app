self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", event => {
  // تترك فارغة للسماح بالعمل المتصل حالياً
});