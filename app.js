// مصفوفة المنتجات (هنا بنحط بيانات كل منتج ورابط الأفيليت بتاعه)
const products = [
    {
        id: 1,
        title: "فستان صيفي كاجوال منقوش بنقاط دائرية",
        price: "120 ريال",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80", // صورة تجريبية
        affiliateUrl: "https://ar.aliexpress.com", // هنا هتحط رابط الأفيليت الخاص بيك للمنتج ده
        tag: "وصل حديثاً"
    },
    {
        id: 2,
        title: "طقم قطعتين تيشيرت وشورت مريح يومي",
        price: "85 ريال",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
        affiliateUrl: "https://ar.aliexpress.com",
        tag: "الأكثر مبيعاً"
    },
    {
        id: 3,
        title: "حقيبة يد كلاسيكية أنيقة بمقبض علوي",
        price: "95 ريال",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
        affiliateUrl: "https://ar.aliexpress.com",
        tag: "خصم 20%"
    },
    {
        id: 4,
        title: "حذاء رياضي مريح وخفيف الوزن للركض",
        price: "150 ريال",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        affiliateUrl: "https://ar.aliexpress.com",
        tag: "شحن مجاني"
    }
];

// دالة لعرض المنتجات في الصفحة تلقائياً
function displayProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = ''; // تفريغ الصفحة الأول

    products.forEach(product => {
        const productCard = `
            <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between">
                <div>
                    <!-- صورة المنتج -->
                    <div class="relative h-64 bg-gray-100">
                        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
                        <span class="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">${product.tag}</span>
                    </div>
                    <!-- تفاصيل المنتج -->
                    <div class="p-4">
                        <h4 class="font-bold text-gray-800 text-sm mb-2 line-clamp-2">${product.title}</h4>
                        <p class="text-pink-600 font-bold text-lg">${product.price}</p>
                    </div>
                </div>
                <!-- زر الشراء (رابط الأفيليت) -->
                <div class="p-4 pt-0">
                    <a href="${product.affiliateUrl}" target="_blank" class="block w-full text-center bg-gray-900 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                        اشترِ الآن من علي اكسبيرس 🛒
                    </a>
                </div>
            </div>
        `;
        grid.innerHTML += productCard;
    });
}

// تشغيل الدالة بمجرد تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayProducts);
