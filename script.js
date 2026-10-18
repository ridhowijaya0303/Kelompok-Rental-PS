/**
 * NEXUS PLAYSTATION RENTAL - INTERACTIVE JAVASCRIPT
 * Features:
 * - Dynamic Game Catalog with real-time search & category filtering
 * - Real-time Rental Cost Calculator & Live Receipt Summary
 * - Package Selector with Form Auto-Fill
 * - Interactive Booking System with Modal & WhatsApp Integration
 * - Mobile Navigation Menu & Sticky Scroll Navbar
 * - FAQ Accordion Dropdowns
 * - Toast Notification System
 */

// --- 1. GAME CATALOG DATABASE ---
const GAMES_DATABASE = [
    {
        id: 'fc25',
        title: 'EA SPORTS FC 25',
        genre: 'Sepakbola / Simulasi',
        category: 'sports',
        players: '1 - 4 Pemain',
        badge: 'HOT 🔥',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'wukong',
        title: 'Black Myth: Wukong',
        genre: 'Action RPG / Fantasy',
        category: 'action',
        players: '1 Pemain',
        badge: 'GOTY Nominee',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'spiderman2',
        title: "Marvel's Spider-Man 2",
        genre: 'Action Adventure',
        category: 'action',
        players: '1 Pemain',
        badge: 'PS5 Exclusive',
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'tekken8',
        title: 'Tekken 8',
        genre: 'Fighting / Versus',
        category: 'fighting',
        players: '1 - 2 Pemain',
        badge: 'Tournament',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'gt7',
        title: 'Gran Turismo 7',
        genre: 'Real Driving Simulator',
        category: 'racing',
        players: '1 - 2 Pemain (VR2)',
        badge: '4K 120Hz',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'gow_rag',
        title: 'God of War Ragnarök',
        genre: 'Epic Action Adventure',
        category: 'action',
        players: '1 Pemain',
        badge: 'Masterpiece',
        image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'gta5',
        title: 'Grand Theft Auto V',
        genre: 'Open World / Action',
        category: 'action',
        players: '1 Pemain',
        badge: 'Populer',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'it_takes_two',
        title: 'It Takes Two',
        genre: 'Co-op Adventure',
        category: 'party',
        players: '2 Pemain Khusus',
        badge: 'Best Co-op',
        image: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'mk1',
        title: 'Mortal Kombat 1',
        genre: 'Fighting / Action',
        category: 'fighting',
        players: '1 - 2 Pemain',
        badge: 'Brutal Combat',
        image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'efootball',
        title: 'eFootball 2025',
        genre: 'Sepakbola',
        category: 'sports',
        players: '1 - 4 Pemain',
        badge: 'Update Squad',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'overcooked',
        title: 'Overcooked! All You Can Eat',
        genre: 'Party / Cooking Chaos',
        category: 'party',
        players: '1 - 4 Pemain',
        badge: 'Seru Ramean',
        image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'wwe2k24',
        title: 'WWE 2K24',
        genre: 'Gulat / Sport Action',
        category: 'sports',
        players: '1 - 4 Pemain',
        badge: 'Smackdown',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
    }
];

// --- 2. DOM ELEMENTS ---
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initGameCatalog();
    initRentalCalculator();
    initPackageSelection();
    initFAQAccordion();
    initDateInput();
});

// --- 3. TOAST NOTIFICATION HELPER ---
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

// --- 4. NAVIGATION & MOBILE MENU ---
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightActiveNavLink();
    });

    // Mobile menu toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
}

function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            if (link) link.classList.add('active');
        }
    });
}

// --- 5. GAME CATALOG RENDER & FILTER ---
function initGameCatalog() {
    const gamesGrid = document.getElementById('gamesGrid');
    const searchInput = document.getElementById('gameSearchInput');
    const clearSearch = document.getElementById('clearSearch');
    const chips = document.querySelectorAll('.category-chips .chip');
    const emptyState = document.getElementById('catalogEmpty');
    const resetFilterBtn = document.getElementById('resetCatalogFilter');

    let currentCategory = 'all';
    let currentSearchQuery = '';

    function renderGames() {
        if (!gamesGrid) return;

        const filteredGames = GAMES_DATABASE.filter(game => {
            const matchesCat = (currentCategory === 'all') || (game.category === currentCategory);
            const matchesSearch = game.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                                  game.genre.toLowerCase().includes(currentSearchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        gamesGrid.innerHTML = '';

        if (filteredGames.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';

            filteredGames.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML = `
                    <div class="game-thumb">
                        <img src="${game.image}" alt="${game.title}" loading="lazy">
                        <span class="game-badge">${game.badge}</span>
                    </div>
                    <div class="game-body">
                        <h4 class="game-title">${game.title}</h4>
                        <span class="game-genre">${game.genre}</span>
                        <div class="game-meta">
                            <span class="game-players"><i class="fa-solid fa-users"></i> ${game.players}</span>
                            <button class="game-action-btn" data-title="${game.title}">
                                + Request Main
                            </button>
                        </div>
                    </div>
                `;
                gamesGrid.appendChild(card);
            });

            // Bind request buttons
            document.querySelectorAll('.game-action-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const gameTitle = e.currentTarget.getAttribute('data-title');
                    addGameToBookingNote(gameTitle);
                });
            });
        }
    }

    // Category chips click
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.getAttribute('data-category');
            renderGames();
        });
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.trim();
            if (clearSearch) {
                clearSearch.style.display = currentSearchQuery.length > 0 ? 'block' : 'none';
            }
            renderGames();
        });
    }

    if (clearSearch) {
        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchQuery = '';
            clearSearch.style.display = 'none';
            renderGames();
            searchInput.focus();
        });
    }

    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', () => {
            currentCategory = 'all';
            currentSearchQuery = '';
            if (searchInput) searchInput.value = '';
            if (clearSearch) clearSearch.style.display = 'none';
            chips.forEach(c => {
                c.classList.toggle('active', c.getAttribute('data-category') === 'all');
            });
            renderGames();
        });
    }

    // Initial render
    renderGames();
}

function addGameToBookingNote(gameTitle) {
    const custNote = document.getElementById('custNote');
    if (!custNote) return;

    if (custNote.value.includes(gameTitle)) {
        showToast(`Game "${gameTitle}" sudah ada di catatan booking.`);
    } else {
        if (custNote.value.trim() === '') {
            custNote.value = `Mau main: ${gameTitle}`;
        } else {
            custNote.value += `, ${gameTitle}`;
        }
        showToast(`"${gameTitle}" ditambahkan ke catatan sewa!`);
    }

    // Scroll smoothly to booking
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
        custNote.focus();
    }
}

// --- 6. RENTAL COST CALCULATOR & RECEIPT SUMMARY ---
function initRentalCalculator() {
    const form = document.getElementById('rentalCalcForm');
    const rentalTypeRadios = document.querySelectorAll('input[name="rentalType"]');
    const consoleSelect = document.getElementById('consoleType');
    const durationRange = document.getElementById('durationRange');
    const durationDisplay = document.getElementById('durationDisplay');
    const durationLabel = document.getElementById('durationLabel');
    const rangeMarks = document.getElementById('rangeMarks');
    const stickGroup = document.getElementById('stickGroup');
    const stickCountRadios = document.querySelectorAll('input[name="stickCount"]');
    const addonSnack = document.getElementById('addonSnack');
    const addonAntarJemput = document.getElementById('addonAntarJemput');
    const takeawayAddonElements = document.querySelectorAll('.takeaway-only-addon');

    // Summary elements
    const sumType = document.getElementById('sumType');
    const sumConsole = document.getElementById('sumConsole');
    const sumDuration = document.getElementById('sumDuration');
    const sumBaseRate = document.getElementById('sumBaseRate');
    const sumSticks = document.getElementById('sumSticks');
    const sumAddons = document.getElementById('sumAddons');
    const sumTotal = document.getElementById('sumTotal');

    function updateCalculator() {
        const rentalType = document.querySelector('input[name="rentalType"]:checked').value;
        const consoleVal = consoleSelect.value;
        const durationVal = parseInt(durationRange.value, 10);
        const stickVal = parseInt(document.querySelector('input[name="stickCount"]:checked').value, 10);
        const isSnackSelected = addonSnack ? addonSnack.checked : false;
        const isDeliverySelected = addonAntarJemput ? addonAntarJemput.checked : false;

        let baseRate = 0;
        let stickCost = 0;
        let addonsCost = 0;

        // Onsite or Takeaway configuration
        if (rentalType === 'onsite') {
            // Hours
            durationLabel.textContent = 'Durasi Sewa:';
            durationDisplay.textContent = `${durationVal} Jam`;

            // Adjust marks if needed
            rangeMarks.innerHTML = `
                <span>1 Jam</span>
                <span>3 Jam</span>
                <span>5 Jam</span>
                <span>8 Jam</span>
                <span>10 Jam</span>
            `;

            // Calculate Base Rate for Onsite
            if (consoleVal === 'ps4') {
                if (durationVal === 1) baseRate = 8000;
                else if (durationVal === 3) baseRate = 22000;
                else if (durationVal === 5) baseRate = 35000;
                else baseRate = durationVal * 7500;
            } else if (consoleVal === 'ps5') {
                if (durationVal === 1) baseRate = 15000;
                else if (durationVal === 3) baseRate = 40000;
                else if (durationVal === 5) baseRate = 65000;
                else baseRate = durationVal * 13000;
            } else if (consoleVal === 'ps5-vip') {
                if (durationVal === 1) baseRate = 30000;
                else if (durationVal === 3) baseRate = 80000;
                else if (durationVal >= 6) baseRate = 150000 + ((durationVal - 6) * 25000);
                else baseRate = durationVal * 28000;
            } else if (consoleVal === 'psvr2') {
                if (durationVal === 1) baseRate = 25000;
                else if (durationVal === 2) baseRate = 45000;
                else baseRate = durationVal * 22000;
            }

            // Sticks add-on (Hourly flat fee per session)
            if (stickVal === 3) stickCost = 5000;
            else if (stickVal === 4) stickCost = 10000;

            // Takeaway elements hidden
            takeawayAddonElements.forEach(el => el.style.display = 'none');
            if (addonAntarJemput) addonAntarJemput.checked = false;

        } else {
            // Takeaway (Days)
            durationLabel.textContent = 'Durasi Sewa Harian:';
            durationDisplay.textContent = `${durationVal} Hari (24 Jam x ${durationVal})`;

            rangeMarks.innerHTML = `
                <span>1 Hari</span>
                <span>2 Hari</span>
                <span>3 Hari (Diskon)</span>
                <span>5 Hari</span>
                <span>7 Hari (Mingguan)</span>
            `;

            // Calculate Base Rate for Takeaway
            if (consoleVal === 'ps4') {
                if (durationVal === 1) baseRate = 75000;
                else if (durationVal === 3) baseRate = 200000;
                else if (durationVal === 7) baseRate = 420000;
                else baseRate = durationVal * 70000;
            } else if (consoleVal === 'ps5' || consoleVal === 'ps5-vip') {
                if (durationVal === 1) baseRate = 150000;
                else if (durationVal === 3) baseRate = 400000;
                else if (durationVal === 7) baseRate = 850000;
                else baseRate = durationVal * 140000;
            } else if (consoleVal === 'psvr2') {
                baseRate = durationVal * 100000;
            }

            // Sticks add-on for takeaway
            if (stickVal === 3) stickCost = 15000 * durationVal;
            else if (stickVal === 4) stickCost = 25000 * durationVal;

            // Show takeaway addons
            takeawayAddonElements.forEach(el => el.style.display = 'flex');
        }

        // Addons
        if (isSnackSelected) addonsCost += 15000;
        if (rentalType === 'takeaway' && isDeliverySelected) addonsCost += 20000;

        const totalCost = baseRate + stickCost + addonsCost;

        // Update Summary Card
        const consoleNames = {
            'ps4': 'PlayStation 4 Slim/Pro',
            'ps5': 'PlayStation 5 (Reguler)',
            'ps5-vip': 'PlayStation 5 (VIP Lounge)',
            'psvr2': 'PlayStation VR2 Set'
        };

        if (sumType) sumType.textContent = rentalType === 'onsite' ? 'Main di Tempat (Lounge)' : 'Sewa Bawa Pulang (Takeaway)';
        if (sumConsole) sumConsole.textContent = consoleNames[consoleVal] || consoleVal;
        if (sumDuration) sumDuration.textContent = rentalType === 'onsite' ? `${durationVal} Jam` : `${durationVal} Hari (24h/hari)`;
        if (sumBaseRate) sumBaseRate.textContent = formatRupiah(baseRate);
        if (sumSticks) sumSticks.textContent = stickVal === 2 ? 'Rp 0 (2 Stik Bawaan)' : `${formatRupiah(stickCost)} (${stickVal} Stik)`;
        if (sumAddons) sumAddons.textContent = addonsCost > 0 ? formatRupiah(addonsCost) : 'Rp 0';
        if (sumTotal) sumTotal.textContent = formatRupiah(totalCost);

        return {
            rentalType,
            consoleName: consoleNames[consoleVal],
            duration: rentalType === 'onsite' ? `${durationVal} Jam` : `${durationVal} Hari`,
            stickCount: `${stickVal} Stik`,
            baseRate,
            stickCost,
            addonsCost,
            totalCost
        };
    }

    // Event listeners for inputs
    rentalTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'takeaway') {
                durationRange.min = 1;
                durationRange.max = 7;
                durationRange.value = 1;
            } else {
                durationRange.min = 1;
                durationRange.max = 10;
                durationRange.value = 3;
            }
            updateCalculator();
        });
    });

    consoleSelect.addEventListener('change', updateCalculator);
    durationRange.addEventListener('input', updateCalculator);
    stickCountRadios.forEach(r => r.addEventListener('change', updateCalculator));
    if (addonSnack) addonSnack.addEventListener('change', updateCalculator);
    if (addonAntarJemput) addonAntarJemput.addEventListener('change', updateCalculator);

    // Initial calc
    updateCalculator();

    // Form Submission & WhatsApp Generation
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('custName').value.trim();
            const phone = document.getElementById('custPhone').value.trim();
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            const note = document.getElementById('custNote').value.trim() || 'Tidak ada catatan khusus';

            if (!name || !phone || !date || !time) {
                alert('Silakan lengkapi nama, nomor telepon, tanggal dan jam sewa terlebih dahulu!');
                return;
            }

            const calcData = updateCalculator();
            const bookingCode = 'NX-' + Math.floor(10000 + Math.random() * 90000);

            // Populate Modal Receipt
            const modalBodyReceipt = document.getElementById('modalBodyReceipt');
            if (modalBodyReceipt) {
                modalBodyReceipt.innerHTML = `
                    <div class="receipt-code">KODE TIKET: <strong>${bookingCode}</strong></div>
                    <div class="receipt-row">
                        <span class="receipt-label">Nama Pemesan:</span>
                        <span class="receipt-val">${name}</span>
                    </div>
                    <div class="receipt-row">
                        <span class="receipt-label">No. WhatsApp:</span>
                        <span class="receipt-val">${phone}</span>
                    </div>
                    <div class="receipt-row">
                        <span class="receipt-label">Layanan:</span>
                        <span class="receipt-val">${calcData.rentalType === 'onsite' ? 'Main di Tempat' : 'Sewa Bawa Pulang'}</span>
                    </div>
                    <div class="receipt-row">
                        <span class="receipt-label">Konsol:</span>
                        <span class="receipt-val">${calcData.consoleName}</span>
                    </div>
                    <div class="receipt-row">
                        <span class="receipt-label">Durasi:</span>
                        <span class="receipt-val">${calcData.duration}</span>
                    </div>
                    <div class="receipt-row">
                        <span class="receipt-label">Total Controller:</span>
                        <span class="receipt-val">${calcData.stickCount}</span>
                    </div>
                    <div class="receipt-row">
                        <span class="receipt-label">Jadwal:</span>
                        <span class="receipt-val">${formatDateIndo(date)} pukul ${time} WIB</span>
                    </div>
                    <div class="receipt-row">
                        <span class="receipt-label">Request / Catatan:</span>
                        <span class="receipt-val">${note}</span>
                    </div>
                    <div class="receipt-total">
                        <span class="receipt-total-label">Total Estimasi:</span>
                        <span class="receipt-total-val">${formatRupiah(calcData.totalCost)}</span>
                    </div>
                `;
            }

            // Open Modal
            const bookingModal = document.getElementById('bookingModal');
            if (bookingModal) {
                bookingModal.classList.add('active');
            }

            // Bind confirmation to WhatsApp
            const confirmBtn = document.getElementById('modalConfirmWA');
            if (confirmBtn) {
                confirmBtn.onclick = () => {
                    const message = 
`🎮 *RESERVASI SEWA PS - NEXUS PLAYSTATION* 🎮
━━━━━━━━━━━━━━━━━━━━━
🏷️ *Kode Booking:* ${bookingCode}
👤 *Nama:* ${name}
📱 *No. WhatsApp:* ${phone}
📍 *Tipe Sewa:* ${calcData.rentalType === 'onsite' ? 'Main di Tempat (Lounge)' : 'Sewa Bawa Pulang (Rumah)'}
🕹️ *Konsol:* ${calcData.consoleName}
⏱️ *Durasi:* ${calcData.duration}
🎮 *Stik:* ${calcData.stickCount}
📅 *Jadwal Booking:* ${formatDateIndo(date)} pukul ${time} WIB
📝 *Request Game:* ${note}
━━━━━━━━━━━━━━━━━━━━━
💰 *Total Biaya:* ${formatRupiah(calcData.totalCost)}
━━━━━━━━━━━━━━━━━━━━━
Halo Admin Nexus Rental PS, mohon konfirmasi ketersediaan unit untuk reservasi ini. Terima kasih!`;

                    const waNumber = '6281234567890';
                    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
                    
                    window.open(waUrl, '_blank');
                    bookingModal.classList.remove('active');
                    showToast('Pesanan berhasil dibuat! Membuka WhatsApp...');
                };
            }
        });
    }

    // Modal Close handlers
    const modalClose = document.getElementById('modalClose');
    const modalCancel = document.getElementById('modalCancel');
    const bookingModal = document.getElementById('bookingModal');

    if (modalClose && bookingModal) {
        modalClose.addEventListener('click', () => bookingModal.classList.remove('active'));
    }
    if (modalCancel && bookingModal) {
        modalCancel.addEventListener('click', () => bookingModal.classList.remove('active'));
    }
    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) bookingModal.classList.remove('active');
        });
    }
}

// --- 7. PACKAGE FILTER TABS & QUICK SELECTION ---
function initPackageSelection() {
    // Filter tabs for packages
    const pkgTabs = document.querySelectorAll('.pkg-tab-btn');
    const pricingCards = document.querySelectorAll('.pricing-card');

    pkgTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            pkgTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetCategory = tab.getAttribute('data-target');

            pricingCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (targetCategory === 'semua' || cardCat === targetCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // "Pilih Paket Ini" button inside cards
    const selectPackageBtns = document.querySelectorAll('.select-package-btn');
    selectPackageBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const consoleVal = e.currentTarget.getAttribute('data-console');
            const rentalType = e.currentTarget.getAttribute('data-type');
            const hoursVal = parseInt(e.currentTarget.getAttribute('data-hours'), 10);

            // Set radio type
            const radioTarget = document.querySelector(`input[name="rentalType"][value="${rentalType}"]`);
            if (radioTarget) {
                radioTarget.checked = true;
                radioTarget.dispatchEvent(new Event('change'));
            }

            // Set console select
            const consoleSelect = document.getElementById('consoleType');
            if (consoleSelect) {
                consoleSelect.value = consoleVal;
                consoleSelect.dispatchEvent(new Event('change'));
            }

            // Set duration range
            const durationRange = document.getElementById('durationRange');
            if (durationRange) {
                if (rentalType === 'takeaway') {
                    durationRange.value = 1;
                } else {
                    durationRange.value = hoursVal || 3;
                }
                durationRange.dispatchEvent(new Event('input'));
            }

            // Scroll to booking section smoothly
            const bookingSec = document.getElementById('booking');
            if (bookingSec) {
                bookingSec.scrollIntoView({ behavior: 'smooth' });
                showToast(`Paket ${consoleVal.toUpperCase()} terpilih! Silakan isi data diri.`);
            }
        });
    });
}

// --- 8. FAQ ACCORDION ---
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');

                // Close all others
                faqItems.forEach(other => {
                    other.classList.remove('active');
                    const otherAnswer = other.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                });

                if (!isOpen) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
                }
            });
        }
    });
}

// --- 9. HELPER UTILITIES ---
function formatRupiah(num) {
    return 'Rp ' + Number(num).toLocaleString('id-ID');
}

function formatDateIndo(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

function initDateInput() {
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
        dateInput.min = today;
    }
}

