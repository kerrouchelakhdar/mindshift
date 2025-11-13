# إعداد Supabase لـ MindShift

هذا الدليل يشرح كيفية إعداد قاعدة بيانات Supabase لموقع MindShift.

## الخطوات

### 1. إنشاء مشروع Supabase

1. اذهب إلى [supabase.com](https://supabase.com)
2. قم بإنشاء حساب أو تسجيل الدخول
3. اضغط على "New Project"
4. أدخل تفاصيل المشروع:
   - اسم المشروع: `mindshift`
   - كلمة مرور قاعدة البيانات (احفظها في مكان آمن)
   - المنطقة: اختر الأقرب لك

### 2. إنشاء جدول المقالات

1. في لوحة تحكم Supabase، اذهب إلى **SQL Editor**
2. اضغط على **+ New query**
3. انسخ محتويات ملف `supabase/schema.sql` والصقه في المحرر
4. اضغط **Run** لتنفيذ الأمر

هذا سينشئ:
- جدول `articles` بجميع الأعمدة المطلوبة
- Indexes للأداء الأفضل
- Row Level Security (RLS) للقراءة العامة

### 3. إضافة البيانات التجريبية

1. في **SQL Editor**، افتح استعلام جديد
2. انسخ محتويات ملف `supabase/seed.sql` والصقه
3. اضغط **Run** لإضافة 5 مقالات تجريبية

### 4. الحصول على مفاتيح API

1. اذهب إلى **Settings** > **API**
2. انسخ القيم التالية:
   - **Project URL** (URL)
   - **anon public** key (المفتاح العام)

### 5. إعداد متغيرات البيئة

1. في مجلد المشروع، انسخ الملف:
   ```powershell
   Copy-Item .env.local.example .env.local
   ```

2. افتح `.env.local` وأضف القيم:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. احفظ الملف

### 6. إعادة تشغيل خادم التطوير

```powershell
# أوقف الخادم الحالي (Ctrl+C)
# ثم شغّله من جديد
npm run dev
```

الآن المشروع سيجلب المقالات من Supabase بدلاً من البيانات التجريبية!

## التحقق من الاتصال

عند تشغيل المشروع، يجب ألا ترى الرسالة:
```
[supabaseClient] Missing Supabase env vars. Using mock data where applicable.
```

إذا رأيت هذه الرسالة، تحقق من:
- صحة المتغيرات في `.env.local`
- أن الملف `.env.local` موجود في المجلد الرئيسي
- إعادة تشغيل خادم التطوير بعد التعديل

## إضافة مقالات جديدة

يمكنك إضافة مقالات جديدة عبر:

1. **SQL Editor في Supabase:**
   ```sql
   INSERT INTO articles (slug, title, description, category, image_url, content, author)
   VALUES (
     'your-article-slug',
     'عنوان المقال',
     'وصف قصير',
     'الفئة',
     'https://example.com/image.jpg',
     'محتوى المقال الكامل',
     'اسم الكاتب'
   );
   ```

2. **Table Editor في Supabase:**
   - اذهب إلى **Table Editor** > **articles**
   - اضغط **Insert** > **Insert row**
   - أدخل البيانات في النموذج

## هيكل جدول المقالات

| العمود | النوع | الوصف |
|--------|------|-------|
| id | UUID | معرّف فريد (تلقائي) |
| slug | TEXT | رابط المقال (فريد) |
| title | TEXT | عنوان المقال |
| description | TEXT | وصف قصير |
| category | TEXT | الفئة |
| image_url | TEXT | رابط الصورة |
| content | TEXT | المحتوى الكامل |
| author | TEXT | اسم الكاتب |
| published_at | TIMESTAMPTZ | تاريخ النشر |
| created_at | TIMESTAMPTZ | تاريخ الإنشاء (تلقائي) |
| updated_at | TIMESTAMPTZ | تاريخ التحديث (تلقائي) |

## استكشاف الأخطاء

### لا تظهر المقالات
- تحقق من أن جدول `articles` يحتوي على بيانات
- تحقق من Row Level Security policies
- افتح Console في المتصفح وابحث عن أخطاء

### خطأ في الاتصال
- تحقق من صحة URL والمفتاح
- تأكد من أن المشروع نشط في Supabase
- تحقق من اتصالك بالإنترنت

### البيانات لا تتحدث
- Next.js يستخدم ISR (Incremental Static Regeneration)
- البيانات تُحدّث كل دقيقة (revalidate: 60)
- امسح الـ cache: احذف مجلد `.next` وأعد البناء
