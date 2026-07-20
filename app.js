// مصفوفة المنتجات (هنا بنحط بيانات كل منتج ورابط الأفيليت بتاعه)
const products = [
    {
        id: 1,
        title: "Lenovo V88 Drone 8K 4K - طائرة درون لينوفو الذكية", // تم تعديلها إلى title لتتوافق مع الدالة
        price: "1,744 EGP",
        image: "https://ae01.alicdn.com/kf/S36a082ebf3fb4192804c0552565b0886j.jpg_350x350.jpg", 
        affiliateUrl: "https://s.click.aliexpress.com/e/_c3C5z1ij",
        tag: "جديد مميز" // تم إضافة التاج عشان يظهر التصميم مظبوط
    }
];

// دالة لعرض المنتجات في الصفحة تلقائياً
function displayProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return; // حماية إضافية لو العنصر مش موجود في الصفحة
    
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
                        اشترِ الآن من علي اكسبريس 🛒
                    </a>
                </div>
            </div>
        `;
        grid.innerHTML += productCard;
    });
}

// تشغيل الدالة بمجرد تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayProducts);
}

// تشغيل الدالة بمجرد تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayProducts);
