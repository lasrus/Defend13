diff --git a/src/main.tsx b/src/main.tsx
--- a/src/main.tsx
+++ b/src/main.tsx
@@ -0,0 +1,14 @@
+import { StrictMode } from 'react'
+import { createRoot } from 'react-dom/client'
+import { BrowserRouter } from 'react-router-dom'
+import './index.css'
+import App from './App.tsx'
+
+createRoot(document.getElementById('root')!).render(
+  <StrictMode>
+    <BrowserRouter>
+      <App />
+    </BrowserRouter>
+  </StrictMode>
+)
+
