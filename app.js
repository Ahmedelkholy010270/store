// مصفوفة المنتجات مقسمة حسب الفئات (Categories)
const products = [
    {
        id: 1,
        title: "Lenovo V88 Drone 8K 4K - طائرة درون لينوفو الذكية",
        price: "1,744 EGP (130 ر.س)",
        category: "طائرات الدرون",
        image: "https://ae01.alicdn.com/kf/S36a082ebf3fb4192804c0552565b0886j.jpg_350x350.jpg", 
        affiliateUrl: "https://s.click.aliexpress.com/e/_c3C5z1ij",
        tag: "جديد مميز"
    },
    {
        id: 2,
        title: "خاتم ذكي استيل مقاوم للماء لقياس درجة الحرارة وحالة المزاج", // ضفت الفاصلة العادية هنا وعربت العنوان
        price: "40 ج.م (3 ر.س)",
        category: "أكسسوارات وعروض",
        image: "https://ae01.alicdn.com/kf/S56b156e10772452bb0a774744c1ca0021.jpg_350x350.jpg", 
        affiliateUrl: "https://s.click.aliexpress.com/e/_c3yd30gB",
        tag: "عرض خاص"
    }
];

// دالة لعرض المنتجات مقسمة حسب الأقسام
function displayProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) {
        console.log("خطأ: لم يتم العثور على عنصر products-grid في الـ HTML");
        return;
    }
    
    grid.innerHTML = ''; // تفريغ الـ div لضمان عدم التكرار

    // 1. تجميع المنتجات حسب القسم (Category)
    const categories = {};
    products.forEach(product => {
        const cat = product.category || 'منتجات أخرى';
        if (!categories[cat]) {
            categories[cat] = [];
        }
        categories[cat].push(product);
    });

    // 2. عرض كل قسم بعنوانه والمنتجات الخاصة به
    for (const [categoryName, items] of Object.entries(categories)) {
        
        // بناء كروت المنتجات للقسم الحالي
        const cardsHTML = items.map(product => `
            <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between">
                <div>
                    <!-- صورة المنتج -->
                    <div class="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-contain">
                        <span class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">${product.tag}</span>
                    </div>
                    <!-- تفاصيل المنتج -->
                    <div class="p-4 text-right" dir="rtl">
                        <h4 class="font-bold text-gray-800 text-sm mb-2 line-clamp-2">${product.title}</h4>
                        <p class="text-blue-600 font-bold text-lg">${product.price}</p>
                    </div>
                </div>
                <!-- زر الشراء -->
                <div class="p-4 pt-0">
                    <a href="${product.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="block w-full text-center bg-gray-900 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                        اشترِ الآن من علي اكسبريس 🛒
                    </a>
                </div>
            </div>
        `).join('');

        // إضافة قطاع القسم بالكامل مع العنوان وشبكة المنتجات
        const categorySection = `
            <div class="category-section w-full mb-10 col-span-full" dir="rtl">
                <!-- عنوان القسم -->
                <div class="flex items-center mb-4 border-b-2 border-blue-600 pb-2">
                    <h3 class="text-xl font-bold text-gray-800">${categoryName}</h3>
                    <span class="mr-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">${items.length}</span>
                </div>
                <!-- شبكة كروت المنتجات التابعة للقسم -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    ${cardsHTML}
                </div>
            </div>
        `;

        grid.innerHTML += categorySection;
    }
}

// تشغيل الدالة بمجرد تحميل الصفحة بالكامل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayProducts);
} else {
    displayProducts();
}
