# 📤 دليل رفع المشروع على GitHub

## المتطلبات الأساسية

### 1️⃣ تثبيت Git
إذا لم يكن Git مثبتاً على جهازك:

1. قم بزيارة: https://git-scm.com/download/win
2. قم بتحميل وتثبيت Git for Windows
3. بعد التثبيت، أعد تشغيل VS Code أو PowerShell
4. تحقق من التثبيت بكتابة:
```powershell
git --version
```

### 2️⃣ إنشاء حساب GitHub
إذا لم يكن لديك حساب:
1. اذهب إلى: https://github.com/join
2. أنشئ حساب جديد
3. قم بتأكيد بريدك الإلكتروني

## خطوات رفع المشروع

### الخطوة 1️⃣: تهيئة Git محلياً

افتح Terminal في VS Code (Ctrl + `) وقم بتشغيل:

```powershell
cd d:\website\mindshift
git init
git add .
git commit -m "Initial commit: MindShift blog with dark mode, search, and categories"
```

### الخطوة 2️⃣: إنشاء مستودع على GitHub

1. اذهب إلى: https://github.com/new
2. املأ المعلومات:
   - **Repository name**: `mindshift` أو `mindshift-blog`
   - **Description**: "Modern tech blog with Next.js 16, dark mode, and multilingual support"
   - **Visibility**: اختر Public أو Private
   - ⚠️ **مهم**: لا تقم بتحديد "Add a README file" (المشروع يحتوي عليه بالفعل)
3. اضغط **Create repository**

### الخطوة 3️⃣: ربط المشروع المحلي بـ GitHub

بعد إنشاء المستودع، ستظهر لك تعليمات. قم بتشغيل:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/mindshift.git
git branch -M main
git push -u origin main
```

**استبدل `YOUR_USERNAME` باسم مستخدمك على GitHub**

### الخطوة 4️⃣: إدخال بيانات الاعتماد

عند أول عملية push، سيطلب منك GitHub:
- **Username**: اسم مستخدمك على GitHub
- **Password**: استخدم **Personal Access Token** (ليس كلمة المرور العادية)

#### إنشاء Personal Access Token:
1. اذهب إلى: https://github.com/settings/tokens
2. اضغط **Generate new token** → **Generate new token (classic)**
3. اختر الصلاحيات: حدد `repo` (كامل الصلاحيات للمستودعات)
4. اضغط **Generate token**
5. **انسخ التوكن فوراً** (لن تتمكن من رؤيته مرة أخرى!)
6. استخدمه كـ "password" عند الـ push

## التحديثات المستقبلية

بعد الرفع الأول، لتحديث المشروع على GitHub:

```powershell
# 1. إضافة التغييرات
git add .

# 2. عمل commit مع رسالة وصفية
git commit -m "وصف التغييرات التي قمت بها"

# 3. رفع التغييرات
git push
```

### أمثلة على رسائل الـ commit:

```powershell
git commit -m "Add new AI article about GPT-5"
git commit -m "Fix dark mode toggle animation"
git commit -m "Update category translations"
git commit -m "Improve search performance"
```

## حماية المعلومات الحساسة

⚠️ **مهم جداً**: تأكد من عدم رفع ملف `.env.local` الذي يحتوي على مفاتيح Supabase!

الملف `.gitignore` يحمي هذا تلقائياً، لكن تحقق:

```powershell
# تحقق من الملفات التي سيتم رفعها
git status

# إذا رأيت .env.local في القائمة، قم بإزالته:
git rm --cached .env.local
git commit -m "Remove .env.local from git"
```

## نشر المشروع على Vercel

بعد رفع المشروع على GitHub، يمكنك نشره مجاناً:

### خطوات النشر:

1. اذهب إلى: https://vercel.com/signup
2. سجل الدخول باستخدام حساب GitHub
3. اضغط **Add New** → **Project**
4. اختر مستودع `mindshift` من القائمة
5. أضف متغيرات البيئة (Environment Variables):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
   ```
6. اضغط **Deploy** 🚀

خلال دقائق، سيكون موقعك متاحاً على رابط مثل:
```
https://mindshift-your-username.vercel.app
```

### المزايا:
- ✅ نشر تلقائي عند كل push على GitHub
- ✅ شهادة SSL مجانية (HTTPS)
- ✅ CDN عالمي سريع
- ✅ معاينة تلقائية للـ Pull Requests
- ✅ تحليلات الأداء

## استكشاف الأخطاء

### مشكلة: "git: command not found"
**الحل**: قم بتثبيت Git من الرابط أعلاه وأعد تشغيل Terminal

### مشكلة: "Authentication failed"
**الحل**: استخدم Personal Access Token بدلاً من كلمة المرور العادية

### مشكلة: "Repository already exists"
**الحل**: استخدم اسم مختلف للمستودع أو احذف المستودع القديم من GitHub

### مشكلة: "Your branch is ahead of origin/main"
**الحل**: 
```powershell
git push
```

## أوامر Git المفيدة

```powershell
# رؤية حالة المشروع
git status

# رؤية التغييرات التي لم يتم commit لها
git diff

# رؤية سجل الـ commits
git log --oneline

# التراجع عن تغييرات غير محفوظة
git checkout .

# إنشاء فرع جديد
git checkout -b feature-name

# التبديل بين الفروع
git checkout main

# دمج فرع مع main
git merge feature-name

# حذف فرع
git branch -d feature-name

# تحديث المشروع من GitHub
git pull
```

## نصائح للعمل مع Git

1. **اعمل commits صغيرة ومتكررة**: بدلاً من commit كبير واحد
2. **اكتب رسائل واضحة**: وضح ماذا فعلت في كل commit
3. **استخدم الفروع**: لتجربة ميزات جديدة دون التأثير على main
4. **اعمل pull قبل push**: لتجنب التعارضات
5. **راجع git status**: قبل كل commit للتأكد من الملفات الصحيحة

## الدعم

إذا واجهت أي مشاكل:
- 📖 [Git Documentation](https://git-scm.com/doc)
- 💬 [GitHub Docs](https://docs.github.com)
- 🎓 [Git Tutorial (Arabic)](https://www.youtube.com/results?search_query=git+github+tutorial+arabic)

---

**مبروك! 🎉 مشروعك الآن على GitHub**
