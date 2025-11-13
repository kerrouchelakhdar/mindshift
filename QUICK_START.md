# 🚀 البداية السريعة - رفع المشروع على GitHub

## ✅ الخطوات (5 دقائق فقط!)

### 1. تثبيت Git (إذا لم يكن مثبتاً)
- حمّل من: https://git-scm.com/download/win
- ثبّت البرنامج
- أعد تشغيل VS Code

### 2. افتح Terminal في VS Code
اضغط: `Ctrl + ~` أو من القائمة: Terminal → New Terminal

### 3. شغّل هذه الأوامر واحداً تلو الآخر:

```powershell
# الانتقال لمجلد المشروع
cd d:\website\mindshift

# تهيئة Git
git init

# إضافة كل الملفات
git add .

# عمل Commit أول
git commit -m "Initial commit: MindShift blog with dark mode and categories"
```

### 4. أنشئ مستودع على GitHub
1. اذهب لـ: https://github.com/new
2. اسم المستودع: `mindshift`
3. الوصف: `Modern tech blog with Next.js 16`
4. اختر Public
5. **لا تحدد** "Add a README file"
6. اضغط "Create repository"

### 5. اربط المشروع بـ GitHub

**GitHub سيعطيك أوامر، استخدمها. أو استخدم هذه:**

```powershell
# استبدل YOUR_USERNAME باسمك على GitHub
git remote add origin https://github.com/YOUR_USERNAME/mindshift.git
git branch -M main
git push -u origin main
```

### 6. أدخل بيانات الدخول
- Username: اسم مستخدمك على GitHub
- Password: Personal Access Token (اصنعه من https://github.com/settings/tokens)

---

## 🎉 تم! مشروعك الآن على GitHub

### التحديثات المستقبلية:
```powershell
git add .
git commit -m "وصف التغيير"
git push
```

### نشر على Vercel (مجاني):
1. vercel.com → سجل دخول بـ GitHub
2. Import Project → اختر mindshift
3. Deploy → تم! 🚀

---

**للتفاصيل الكاملة، اقرأ: `GITHUB_SETUP.md`**
