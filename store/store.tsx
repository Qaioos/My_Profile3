import { configureStore } from '@reduxjs/toolkit';
// 1. استيراد الـ API الذي قمنا بإنشائه لاستقبال البيانات
import { getData } from '../src/feat/Redux/FetchData'; 

export const store = configureStore({
  reducer: {
    // 2. إضافة الـ Reducer الخاص بالـ API ديناميكياً
    [getData.reducerPath]: getData.reducer,
  },
  // 3. تفعيل الـ Middleware المسؤول عن إدارات الكاش والتحديث التلقائي للبيانات
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getData.middleware),
});

// 4. تصدير أنواع التايب سكريبت (Types) لضمان الدعم الكامل أثناء كتابة الأكواد
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
