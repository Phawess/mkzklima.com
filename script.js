document.addEventListener('DOMContentLoaded', () => {
    // Menü toggle animasyonu
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            menu.style.transform = 'translateX(0)';
        } else {
            menu.style.transform = 'translateX(-100%)';
        }
    });

    // Satın Al butonu işlevselliği
    const satinAlButtons = document.querySelectorAll('.urun-content button');
    const phoneNumber = "05013671005"; // Belirttiğiniz telefon numarası

    satinAlButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = `tel:${phoneNumber}`;
        });
    });

    // İletişim formu gönderimi
    const form = document.querySelector('#iletisimFormu');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mesajınız başarıyla gönderildi!');
        form.reset();
    });
});
