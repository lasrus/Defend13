diff --git a/vite.config.ts b/vite.config.ts
--- a/vite.config.ts
+++ b/vite.config.ts
@@ -0,0 +1,8 @@
+import { defineConfig } from 'vite'
+import react from '@vitejs/plugin-react'
+
+// https://vite.dev/config/
+export default defineConfig({
+  plugins: [react()],
+})
+
