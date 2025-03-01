// أكواد النماذج
document.getElementById('booking-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم استلام طلب الحجز بنجاح!');
});

document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم استلام رسالتك بنجاح!');
});

// أكواد العدسة المكبرة
const magnifierIcon = document.getElementById('magnifier-icon');
let isMagnifying = false;

magnifierIcon?.addEventListener('click', () => {
    isMagnifying = !isMagnifying;
    if (isMagnifying) {
        document.body.addEventListener('mouseover', magnifyElement);
    } else {
        document.body.removeEventListener('mouseover', magnifyElement);
        resetMagnification();
    }
});

function magnifyElement(event) {
    if (isMagnifying) {
        resetMagnification();
        event.target.classList.add('magnified');
    }
}

function resetMagnification() {
    document.querySelectorAll('.magnified').forEach(element => {
        element.classList.remove('magnified');
    });
}

// أكواد تشغيل الصوت
const playSoundButton = document.getElementById('playSoundButton');
const myAudio = document.getElementById('myAudio');

playSoundButton?.addEventListener('click', () => {
    myAudio.play();
});

// قائمة التنقل المتجاوبة
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle?.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// إضافة الخدمات الإضافية
const addServicesButton = document.getElementById('add-services');
const additionalServicesDiv = document.getElementById('additional-services');

addServicesButton?.addEventListener('click', () => {
    if (additionalServicesDiv.style.display === 'none') {
        additionalServicesDiv.style.display = 'block';
    } else {
        additionalServicesDiv.style.display = 'none';
    }
});

// حساب وعرض السعر الكامل
function calculateTotalPrice() {
    const packagesSelect = document.getElementById('packages');
    const servicesSelect = document.getElementById('services');
    const coursesSelect = document.getElementById('courses');
    const totalPriceDiv = document.getElementById('total-price');

    let totalPrice = 0;

    // أسعار الخدمات الإضافية
    const packagePrices = {
        '5-rounds': 1000,
        'triple-tee': 500,
        'spa-break': 200,
    };

    const servicePrices = {
        'golf-lessons': 50,
        'digital-training': 30,
        'cart-rental': 20,
        'club-rental': 15,
    };

    const coursePrices = {
        'sea-view': 150,
        'other-courses': 100,
    };

    // حساب سعر الحزم
    if (packagesSelect.value) {
        totalPrice += packagePrices[packagesSelect.value];
    }

    // حساب سعر الخدمات
    if (servicesSelect.value) {
        totalPrice += servicePrices[servicesSelect.value];
    }

    // حساب سعر الملاعب
    if (coursesSelect.value) {
        totalPrice += coursePrices[coursesSelect.value];
    }

    // عرض السعر الكامل
    if (totalPrice > 0) {
        totalPriceDiv.textContent = `السعر الكامل: ${totalPrice} يورو`;
    } else {
        totalPriceDiv.textContent = '';
    }
}

// استدعاء دالة حساب السعر عند تغيير أي من الخدمات الإضافية
const packagesSelect = document.getElementById('packages');
const servicesSelect = document.getElementById('services');
const coursesSelect = document.getElementById('courses');

packagesSelect?.addEventListener('change', calculateTotalPrice);
servicesSelect?.addEventListener('change', calculateTotalPrice);
coursesSelect?.addEventListener('change', calculateTotalPrice);