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
    myAudio.play().catch(error => {
        console.error('Error playing audio:', error);
        alert('حدث خطأ أثناء تشغيل الصوت. يرجى التأكد من أن ملف الصوت موجود.');
    });
});

myAudio?.addEventListener('error', (error) => {
    console.error('Audio load error:', error);
    alert('حدث خطأ أثناء تحميل ملف الصوت. يرجى التأكد من أن الملف موجود.');
});

myAudio?.addEventListener('loadeddata', () => {
    console.log('Audio loaded successfully');
});

// قائمة التنقل المتجاوبة
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle?.addEventListener('click', () => {
    navUl.classList.toggle('active');
});
