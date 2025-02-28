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

// أكواد التجاوب
function adjustLayout() {
    if (window.innerWidth < 768) {
        // تغييرات للتصميم على الأجهزة المحمولة
        nav ul {
            flex-direction: column;
            align-items: center;
        }

        nav ul li {
            margin: 5px 0;
        }

        .gallery img {
            width: 100%;
        }
    } else {
        // تغييرات للتصميم على أجهزة سطح المكتب
        // ...
    }
}

// استدعاء الدالة عند تحميل الصفحة وتغيير حجم النافذة
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);