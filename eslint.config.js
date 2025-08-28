(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/eslint.config.js b/eslint.config.js
--- a/eslint.config.js
+++ b/eslint.config.js
@@ -0,0 +1,24 @@
+import js from '@eslint/js'
+import globals from 'globals'
+import reactHooks from 'eslint-plugin-react-hooks'
+import reactRefresh from 'eslint-plugin-react-refresh'
+import tseslint from 'typescript-eslint'
+import { globalIgnores } from 'eslint/config'
+
+export default tseslint.config([
+  globalIgnores(['dist']),
+  {
+    files: ['**/*.{ts,tsx}'],
+    extends: [
+      js.configs.recommended,
+      tseslint.configs.recommended,
+      reactHooks.configs['recommended-latest'],
+      reactRefresh.configs.vite,
+    ],
+    languageOptions: {
+      ecmaVersion: 2020,
+      globals: globals.browser,
+    },
+  },
+])
+
EOF
)
