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
        title: "خاتم ذكي استيل مقاوم للماء لقياس درجة الحرارة وحالة المزاج",
        price: "40 ج.م (3 ر.س)",
        category: "أكسسوارات وعروض",
        image: "https://ae01.alicdn.com/kf/S56b156e10772452bb0a774744c1ca0021.jpg_350x350.jpg", 
        affiliateUrl: "https://s.click.aliexpress.com/e/_c3yd30gB",
        tag: "عرض خاص"
    }
];

// دالة تحويل النص إلى ID مناسب للروابط
function slugify(text) {
    return 'cat-' + text.replace(/\s+/g, '-').toLowerCase();
}

// دالة لعرض المنتجات وبناء القائمة الجانبية
function displayProducts() {
    const grid = document.getElementById('products-grid');
    const menu = document.getElementById('categories-menu');

    if (!grid) return;

    grid.innerHTML = '';
    if (menu) menu.innerHTML = '';

    // 1. تجميع المنتجات حسب القسم (Category)
    const categories = {};
    products.forEach(product => {
        const cat = product.category || 'منتجات أخرى';
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push(product);
    });

    // 2. بناء الأقسام والقائمة
    for (const [categoryName, items] of Object.entries(categories)) {
        const sectionId = slugify(categoryName);

        // أ) إضافة عنصر القائمة
        if (menu) {
            const menuItem = `
                <a href="#${sectionId}" onclick="closeMenu()" class="flex items-center justify-between p-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-50">
                    <span>${categoryName}</span>
                    <span class="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-bold">${items.length}</span>
                </a>
            `;
            menu.innerHTML += menuItem;
        }

        // ب) بناء كروت المنتجات
        const cardsHTML = items.map(product => `
            <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between">
                <div>
                    <div class="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-contain">
                        <span class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">${product.tag}</span>
                    </div>
                    <div class="p-4 text-right" dir="rtl">
                        <h4 class="font-bold text-gray-800 text-sm mb-2 line-clamp-2">${product.title}</h4>
                        <p class="text-blue-600 font-bold text-lg">${product.price}</p>
                    </div>
                </div>
                <div class="p-4 pt-0">
                    <a href="${product.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="block w-full text-center bg-gray-900 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                        اشترِ الآن من علي اكسبريس 🛒
                    </a>
                </div>
            </div>
        `).join('');

        // ج) إضافة قطاع القسم بالكامل
        const categorySection = `
            <div id="${sectionId}" class="category-section w-full mb-12 scroll-mt-24" dir="rtl">
                <div class="flex items-center mb-6 border-b-2 border-blue-600 pb-2">
                    <h3 class="text-xl font-bold text-gray-800">${categoryName}</h3>
                    <span class="mr-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">${items.length}</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    ${cardsHTML}
                </div>
            </div>
        `;

        grid.innerHTML += categorySection;
    }
}

// --- التحكم في فتح وإغلاق القائمة الجانبية ---
function openMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('menu-overlay');
    
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('menu-overlay');

    sidebar.classList.add('translate-x-full');
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

// ربط أزرار القائمة بالأحداث (Events)
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();

    const toggleBtn = document.getElementById('toggle-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const overlay = document.getElementById('menu-overlay');

    if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
});
