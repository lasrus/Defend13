diff --git a/src/lib/utils.ts b/src/lib/utils.ts
--- a/src/lib/utils.ts
+++ b/src/lib/utils.ts
@@ -0,0 +1,8 @@
+import { clsx, type ClassValue } from 'clsx'
+import { twMerge } from 'tailwind-merge'
+
+export function cn(...inputs: ClassValue[]) {
+  return twMerge(clsx(inputs))
+}
+
+
