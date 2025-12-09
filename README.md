✅ 1. عدد الصفحات المقترحة لتطبيق Inventory Management

التطبيق الاحترافي عادة يحتوي من:

🔵 A. Tabs (الصفحات الأساسية)

هذه هي الصفحات التي تظهر دائماً في الأسفل:

Dashboard

إحصائيات

عدد المنتجات

تنبيهات نقص المخزون

Chart بسيط

Products

قائمة المنتجات

بحث

فلترة

Categories

تنظيم المنتجات حسب الفئات

Settings

النسخة الاحتياطية

إدارة الحساب

المظهر (light/dark)

اللغة

→ هذا يعطيك 4 Tabs جيدة جداً لتطبيق Inventory.

🔵 B. Stack Screens (شاشات إضافية داخل كل قسم)
داخل Products:

Add Product

Edit Product

Product Details

داخل Categories:

Add Category

Edit Category

داخل Settings:

Backup / Restore

About App

Profile

🔥 إجمالي الصفحات المقترحة: 12 صفحة

4 صفحات Tabs

8 صفحات Stack إضافية

✅ 2. Structure مثالي لمشروعك

استخدم هذا الهيكل لتنظيم التطبيق:

src/
app/
index.tsx
(onboarding)/
index.tsx
step1.tsx
step2.tsx
(tabs)/
\_layout.tsx
dashboard.tsx
products/
index.tsx
categories.tsx
settings.tsx
products/
add.tsx
edit.tsx
details.tsx
categories/
add.tsx
edit.tsx
settings/
backup.tsx
about.tsx
profile.tsx

👌 3. لماذا هذا العدد من الصفحات مناسب؟
✔️ احترافي

يغطي كل مكونات نظام إدارة المخزون.

✔️ قابل للتطوير

الآن LocalStorage، مستقبلًا SQL أو API بدون تغيير كبير.

✔️ UX جيد

الصفحات مقسّمة بشكل واضح مثل التطبيقات الحقيقية.

🔥 4. كيف تعمل Tabs + Stack مع بعض؟

"Tabs" للصفحات الأساسية فقط

"Stack" للشاشات التي يدخل لها المستخدم بعد الضغط على عنصر

مثال:

يدخل Products → يرى قائمة

يضغط Product → ينتقل إلى details عبر Stack

من details → يستطيع Edit عبر Stack

📁 Project File Structure
src/
├─ app/
│ ├─ \_layout.tsx ← Root Layout (Stack: onboarding + tabs)
│ ├─ index.tsx ← redirect إلى onboarding أو tabs
│ ├─ (onboarding)/
│ │ ├─ index.tsx ← Onboarding Step 0
│ │ ├─ step1.tsx ← Onboarding Step 1
│ │ └─ step2.tsx ← Onboarding Step 2
│ ├─ (tabs)/
│ │ ├─ \_layout.tsx ← Tabs Layout
│ │ ├─ index.tsx ← Dashboard
│ │ ├─ products/
│ │ │ └─ index.tsx ← Products list
│ │ ├─ categories.tsx
│ │ └─ settings.tsx
│ ├─ products/
│ │ ├─ add.tsx
│ │ ├─ edit.tsx
│ │ └─ details.tsx
│ ├─ categories/
│ │ ├─ add.tsx
│ │ └─ edit.tsx
│ └─ settings/
│ ├─ backup.tsx
│ ├─ about.tsx
│ └─ profile.tsx
├─ components/
│ ├─ Button.tsx
│ ├─ NavPoint.tsx
│ └─ onboarding/
│ └─ ImageView.tsx
├─ types/
│ ├─ onboarding.ts
│ ├─ product.ts
│ ├─ category.ts
│ ├─ settings.ts
│ └─ components.ts
└─ assets/
└─ utils/
├─ image.png
├─ step1.png
└─ step2.png

📌 Import Examples
Onboarding Index:
import Button from "@/src/components/Button";
import ImageView from "@/src/components/onboarding/ImageView";
import NavPoint from "@/src/components/NavPoint";
import { router } from "expo-router";
import { OnboardingStep } from "@/src/types/onboarding";

Products List:
import { Product } from "@/src/types/product";
import Button from "@/src/components/Button";

NavPoint Component:
import { NavPointProps } from "@/src/types/components";

Dashboard:
import { DashboardStats } from "@/src/types/dashboard";

🗂 Types / Interfaces

types/onboarding.ts → OnboardingStep

types/product.ts → Product

types/category.ts → Category

types/settings.ts → UserProfile, BackupSettings

types/components.ts → ButtonProps, NavPointProps

types/dashboard.ts → DashboardStats

💡 Notes

كل import يبدأ بـ @/src/... لتسهيل التنقل

index.tsx داخل (tabs) هو Dashboard

كل onboarding step يستخدم NavPoint مع total و active

كل component صغير (Button, ImageView) يستخدم props من types/components.ts
