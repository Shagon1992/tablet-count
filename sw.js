self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tablet-counter").then(c =>
      c.addAll(["./", "./index.html", "./manifest.json"])
    )
  );
});
