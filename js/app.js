// ==========================
// UTIL: Decode Base64
// ==========================
// function encodeBase64(str) {
//     return btoa(unescape(encodeURIComponent(str)));
// }

// document.getElementById('mainWrapper').addEventListener('click', function() {
//     const guestNameEl = document.getElementById('guestName');
//     let guestName = guestNameEl ? guestNameEl.textContent.trim() : '';
//     let encodedGuest = encodeBase64(guestName);
//     window.location.href = `invitation.html?guest=${encodedGuest}`;
// });

// ==========================
// GALLERY MODAL LOGIC
// ==========================
const galleryBtn = document.querySelector('[data-action="gallery"]');
const galleryModal = document.getElementById('galleryModal');
const closeGallery = document.getElementById('closeGallery');

if (galleryBtn && galleryModal) {
    galleryBtn.addEventListener('click', () => {
        galleryModal.classList.remove('hidden');
        galleryModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');

        revealGallery();
    });
    }

if (closeGallery && galleryModal) {
    closeGallery.addEventListener('click', () => {
        galleryModal.classList.add('hidden');
        galleryModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
    });
}

// klik area gelap untuk menutup modal
if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.add('hidden');
            galleryModal.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        }
    });
}


// ==========================
// DATE & VENUE MODAL
// ==========================
const dateBtn = document.querySelector('[data-action="date"]');
const dateModal = document.getElementById('dateModal');
const closeDate = document.getElementById('closeDate');

if (dateBtn && dateModal) {
    dateBtn.addEventListener('click', () => {
        dateModal.classList.remove('hidden');
        dateModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
    });
}

if (closeDate && dateModal) {
    closeDate.addEventListener('click', () => {
        dateModal.classList.add('hidden');
        dateModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
    });
}

// klik area gelap untuk close
if (dateModal) {
    dateModal.addEventListener('click', (e) => {
        if (e.target === dateModal) {
            closeDate.click();
        }
    });
}

// ==========================
// ABOUT US MODAL
// ==========================
const aboutBtn = document.querySelector('[data-action="about"]');
const aboutModal = document.getElementById('aboutModal');
const closeAbout = document.getElementById('closeAbout');

if (aboutBtn && aboutModal) {
    aboutBtn.addEventListener('click', () => {
        aboutModal.classList.remove('hidden');
        aboutModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
    });
}

if (closeAbout && aboutModal) {
    closeAbout.addEventListener('click', () => {
        aboutModal.classList.add('hidden');
        aboutModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
    });
}

// klik area gelap untuk close
if (aboutModal) {
    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            closeAbout.click();
        }
    });
}


// ==========================
// OUR LAUGHTALES MODAL
// ==========================
const storyBtn = document.querySelector('[data-action="story"]');
const storyModal = document.getElementById('storyModal');
const closeStory = document.getElementById('closeStory');

if (storyBtn && storyModal) {
    storyBtn.addEventListener('click', () => {
        storyModal.classList.remove('hidden');
        storyModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
    });
}

if (closeStory && storyModal) {
    closeStory.addEventListener('click', () => {
        storyModal.classList.add('hidden');
        storyModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
    });
}

// klik area gelap untuk close
if (storyModal) {
    storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) {
            closeStory.click();
        }
    });
}


// ==========================
// GIFT MODAL
// ==========================
const giftBtn = document.querySelector('[data-action="gift"]');
const giftModal = document.getElementById('giftModal');
const closeGift = document.getElementById('closeGift');
const copyBank = document.getElementById('copyBank');
const bankNumberEl = document.getElementById('bankNumber');
const copyBank2 = document.getElementById('copyBank2');
const bankNumber2El = document.getElementById('bankNumber2');

if (giftBtn && giftModal) {
    giftBtn.addEventListener('click', () => {
        giftModal.classList.remove('hidden');
        giftModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
    });
}

if (closeGift && giftModal) {
    closeGift.addEventListener('click', () => {
        giftModal.classList.add('hidden');
        giftModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
    });
}

// klik area gelap untuk close
if (giftModal) {
    giftModal.addEventListener('click', (e) => {
        if (e.target === giftModal) {
            closeGift.click();
        }
    });
}

// COPY REKENING
if (copyBank && bankNumberEl) {
    copyBank.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(bankNumberEl.innerText);
            copyBank.innerText = 'Berhasil Disalin ✓';

            setTimeout(() => {
                copyBank.innerText = 'Salin Nomor Rekening';
            }, 2000);
        } catch {
            alert('Gagal menyalin nomor');
        }
    });
}
if (copyBank2 && bankNumber2El) {
    copyBank2.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(bankNumber2El.innerText);
            copyBank2.innerText = 'Berhasil Disalin ✓';

            setTimeout(() => {
                copyBank2.innerText = 'Salin Nomor Rekening';
            }, 2000);
        } catch {
            alert('Gagal menyalin nomor');
        }
    });
}

// const wishInput = document.getElementById('wishMessage');
// const sendWishBtn = document.getElementById('sendWish');
// const wishList = document.getElementById('wishList');

// // load dari localStorage
// const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');

// function renderWishes() {
//     wishList.innerHTML = '';
//     wishes.slice().reverse().forEach(msg => {
//         const div = document.createElement('div');
//         div.className = 'bg-slate-100 rounded-lg p-3 text-sm';
//         div.innerText = msg;
//         wishList.appendChild(div);
//     });
// }

// renderWishes();

// sendWishBtn.addEventListener('click', () => {
//     const msg = wishInput.value.trim();
//     if (!msg) return;

//     wishes.push(msg);
//     localStorage.setItem('wishes', JSON.stringify(wishes));

//     wishInput.value = '';
//     renderWishes();
// });



// ==========================
// BACKGROUND MUSIC (AUTOPLAY SAFE)
// ==========================
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let musicStarted = false;

// fungsi play sekali
async function startMusic() {
    if (musicStarted || !bgMusic) return;

    try {
        bgMusic.volume = 0.6;
        await bgMusic.play();
        musicStarted = true;

        if (musicBtn) musicBtn.style.opacity = '0.7';
    } catch (err) {
        // iOS akan masuk sini → tunggu interaksi
    }
}

// 1️⃣ coba autoplay saat load (Android/Desktop)
window.addEventListener('load', startMusic);

// 2️⃣ fallback iOS: play saat interaksi pertama
document.addEventListener('click', startMusic, { once: true });
document.addEventListener('touchstart', startMusic, { once: true });

// 3️⃣ tombol manual play / pause
if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', async () => {
        try {
            if (bgMusic.paused) {
                await bgMusic.play();
                musicStarted = true;
                musicBtn.style.opacity = '0.7';
            } else {
                bgMusic.pause();
                musicBtn.style.opacity = '1';
            }
        } catch (err) {
            console.log('Music blocked:', err);
        }
    });
}




// ==========================
// BUTTON LAIN (NON-GALLERY)
// ==========================
document.querySelectorAll('[data-action]').forEach(btn => {
    const action = btn.dataset.action;

    // gallery sudah ditangani sendiri
    if (action === 'gallery') return;

    btn.addEventListener('click', () => {
        switch (action) {
            case 'date':
                // alert('Date & Venue akan dibuka');
                break;

            case 'about':
                // alert('About Us Hadi & Dini');
                break;

            case 'story':
                // alert('Our Laughtales');
                break;

            case 'gift':
                // alert('Gift & QR');
                break;

            case 'music':
                // alert('Play / Pause Music');
                break;
        }
    });
});


// ==========================
// COUNTDOWN WEDDING DAY
// ==========================
const weddingDate = new Date('2026-06-28T08:00:00+08:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const d = document.getElementById('cdDays');
    const h = document.getElementById('cdHours');
    const m = document.getElementById('cdMinutes');
    const s = document.getElementById('cdSeconds');

    if (d) d.innerText = days;
    if (h) h.innerText = hours;
    if (m) m.innerText = minutes;
    if (s) s.innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ==========================
// LOADING SCREEN
// ==========================
window.addEventListener('load', () => {
    const loading = document.getElementById('loadingScreen');
    if (!loading) return;

    setTimeout(() => {
        loading.classList.add('opacity-0');
        loading.style.transition = 'opacity .5s ease';

        setTimeout(() => {
            loading.remove();
        }, 500);
    }, 1200);
});

// ==========================
// REVEAL GALLERY
// ==========================
function revealGallery() {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('reveal');
        }, index * 120); // delay bertahap
    });
}
// ==================
// KLIK DI MANA SAJA UNTUK MEMBUKA UNDANGAN

// UTK index.html
// document.getElementById('mainWrapper').addEventListener('click', function() {
//     const guestNameEl = document.getElementById('guestName');
//     let guestName = guestNameEl ? guestNameEl.textContent.trim() : '';
//     guestName = encodeURIComponent(guestName);
//     window.location.href = `invitation.html?guest=${guestName}`;
// });

// // Untuk invitation.html
// const urlParams = new URLSearchParams(window.location.search);
//   const guest = urlParams.get('guest');
//   if (guest) {
//     document.getElementById('guestNameDisplay').textContent = decodeURIComponent(guest);
//   }