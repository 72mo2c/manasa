#!/bin/bash
# سكريبت إصلاح البناء لحِرَفْنا

echo "🔧 بدء إصلاح حِرَفْنا - منصة التجارة الإلكترونية للحرف اليدوية العربية"
echo "================================================================="

# التبديل للمجلد
cd "$(dirname "$0")"

echo "📂 مجلد العمل: $(pwd)"
echo ""

# حذف الملفات المؤقتة
echo "🗑️  حذف الملفات المؤقتة..."
rm -rf node_modules
rm -f package-lock.json
rm -f .npmrc

# إنشاء package-lock.json جديد
echo "📋 إنشاء package-lock.json جديد..."
echo '{"lockfileVersion": 3, "name": "hirafna-platform", "version": "1.0.0", "requires": true, "packages": {"": {"name": "hirafna-platform", "version": "1.0.0", "license": "MIT"}}, ".lockfileVersion": 3, "name": "hirafna-platform", "version": "1.0.0", "lockfileVersion": 3}' > package-lock.json

# إعداد npm
echo "⚙️  إعداد npm..."
npm config set global false
npm config set prefix ./node_modules

echo ""
echo "📦 تثبيت التبعيات الأساسية..."
npm install next@14.0.0 react@18.2.0 react-dom@18.2.0 --save

echo ""
echo "📦 تثبيت بقية التبعيات..."
npm install --no-audit --no-fund

echo ""
echo "🏗️  بناء المشروع..."
npm run build

echo ""
echo "✨ تم الانتهاء!"
echo "🚀 المشروع جاهز للرفع على Vercel"

# عرض الإحصائيات
echo ""
echo "📊 إحصائيات المشروع:"
echo "- الملفات: $(find src -name "*.tsx" -o -name "*.ts" | wc -l) ملف TypeScript/React"
echo "- الصور: $(ls imgs/ 2>/dev/null | wc -l) صورة"
echo "- المكونات: $(find src/components -name "*.tsx" 2>/dev/null | wc -l) مكون"

echo ""
echo "🔗 الروابط المفيدة:"
echo "- Vercel Dashboard: https://vercel.com/dashboard"
echo "- GitHub Repository: [اضف رابط المستودع]"

echo ""
echo "⚠️  تذكير:"
echo "- تأكد من إضافة متغيرات البيئة في Vercel"
echo "- تأكد من ربط مستودع GitHub مع Vercel"
echo "- تأكد من أن Vercel يستخدم Node.js 20"