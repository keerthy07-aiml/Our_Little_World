/**
 * 🌸 OUR LITTLE WORLD — MASTER SCRIPT
 * Interactive Friendship Website for Our Inseparable Squad:
 * Keerthana, Vinothini, Rifana, Kavipriya, Vaithee, Subiii & Kaviiii
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ========================================================================
     1. STATE & DATA DICTIONARY
     ======================================================================== */
  const NICKNAME_DATA = {
    thango: {
      label: 'Thangoooo 🥹💗',
      avatar: '🥹💗',
      caption: 'Thangam-am thangam! Aana enna kalaaikka mattum first row-la ukkandhuruva! 😭💗 Seri seri, unakku special entry!'
    },
    chello: {
      label: 'Chelloooo 🐣💕',
      avatar: '🐣💕',
      caption: 'Awwww en chellakutty! 🥹 Ivlo innocent-ah nadikkaadha… un original character enakku mattum dhaan theriyum! 😂💞'
    },
    pattu: {
      label: 'Patttuuu 🤏😂',
      avatar: '🤏😂',
      caption: 'Pattu maadhiri soft-ah iruppa nu nenachen… aana torture panradhula nee vera level! 😭🤣'
    },
    bestie: {
      label: 'Bestieeee 👯‍♀️🌷',
      avatar: '👯‍♀️🌷',
      caption: 'Bestie-ah? Adhu title illa di… adhu lifetime headache package! 😂💗 Return policy kedaiyaadhu!'
    },
    eruma: {
      label: 'Erumaaa 🐃🤣',
      avatar: '🐃🤣',
      caption: 'ADA ERUMAAA! 😭😂 Unakku indha option select panna evlo thairiyam! Unna friend-ah vechurukken paaru… enna solla! 🐃💗'
    },
    darling: {
      label: 'Darlinggethadha 😭💋',
      avatar: '😭💋',
      caption: 'Aiyaiyooo darling-ah? 😂💋 Yaaru di nee, cinema heroine-ah? Seri vaa, unakku red-carpet entry kudukuren! 💅🌹'
    }
  };

  const CHAPTER_DATA = {
    '1': {
      title: 'Where It All Began 🌱',
      subtitle: 'Chapter 01 — 11th Standard at School',
      img: 'images/school-trio.png',
      desc: '11th Standard — Same school, same dreams. The beginning of our unbreakable bond in matching school uniforms and two braided plaits tied with ribbons. From day one, there was an unspoken magic waiting to unfold.'
    },
    '2': {
      title: 'Our School Playground 🌼',
      subtitle: 'Chapter 02 — Under the Shady Tree',
      img: 'images/playground.png',
      desc: 'The playground was our kingdom of laughter. Standing and sitting beneath the cool canopy of the banyan tree, trading lunchbox bites, laughing at silly stories, and racing back before the school bell sounded its final chime. Those sunny afternoons live forever in our hearts.'
    },
    '3': {
      title: 'Classroom Secrets & Bench Carvings 📚',
      subtitle: 'Chapter 03 — Notes, Bench Carvings & Wall Heart',
      img: 'images/wall_heart.png',
      desc: 'The wooden desks that held our world. Carving our names into the bench, drawing our heart on the classroom wall (“Not just classmates... But sisters ♡”), slipping folded notes across rows, and sharing glances that required zero words to understand.'
    },
    '4': {
      title: 'Oops, Teacher Saw Us! 🤭',
      subtitle: 'Chapter 04 — Caught in the Act',
      img: 'images/teacher-moment.png',
      desc: 'That legendary silence when the teacher suddenly stopped lecturing and turned straight to our bench! We hid behind opened textbooks, holding our breath, with tears of silent giggles in our eyes. Nothing brought us closer than shared mischief.'
    },
    '5': {
      title: 'After 12th — Different Colleges, Same Bond 💌',
      subtitle: 'Chapter 05 — The Journey Continues',
      img: 'images/videocall.png',
      desc: '12th Done, but our story was just beginning! Growing into college life, attending lectures, yet connecting constantly via video calls, endless WhatsApp audio notes, canteen treats, and knowing that through every new phase of life, our hearts stay forever linked.'
    }
  };

  const FRIEND_DATA = {
    '1': {
      title: 'Keerthana 🌸',
      subtitle: 'Keerthi ♡ IFET College of Engineering (B.Tech AIML)',
      img: 'images/friend1.png',
      desc: 'The creative soul and loving heart of our squad. Full of bright ideas, coding passion, sweet smiles, and always keeping everyone connected with warmth and genuine care.'
    },
    '2': {
      title: 'Vinothini (Vino) 🌷',
      subtitle: 'Vino ♡ IFET College of Engineering (B.Tech AIML)',
      img: 'images/friend2.png',
      desc: 'The unstoppable sunshine of our group! Infectious laughter, humorous expressions that crack everyone up during serious moments, and a loyal friend who stands by you no matter what.'
    },
    '3': {
      title: 'Rifana 🌼',
      subtitle: 'Rifu ♡ Thevanaiyammal Women\'s College',
      img: 'images/friend3.png',
      desc: 'Sweet, soulful, and deeply caring. Even across different colleges, she never misses a single video call, shares all our secrets, and makes sure our sisterhood remains eternal.'
    },
    '4': {
      title: 'Kavipriya 💗',
      subtitle: 'Kavipriya ♡ IFET College of Engineering (B.Tech AIML)',
      img: 'images/friend4.png',
      desc: 'The wonderful companion in our AIML journey at IFET! Sharing projects, canteen treats, library notes, and countless laughter-filled study sessions that make engineering a joy.'
    },
    '5': {
      title: 'Vaithee 🌻',
      subtitle: 'Vaithee ♡ The Pure & Loyal Soul',
      img: 'images/friend5.png',
      desc: 'The sweetest friend who brings calm and positive vibes wherever she goes! Honest, caring, and an irreplaceable pillar of our bond through every school and college day.'
    },
    '6': {
      title: 'Subiii 🌺',
      subtitle: 'Subiii ♡ The Cutest Energy',
      img: 'images/friend6.png',
      desc: 'Full of cute expressions and sweet banter! Never fails to bring a smile to our faces during long school breaks and unforgettable hangouts.'
    },
    '7': {
      title: 'Kaviiii 🎀',
      subtitle: 'Kaviiii ♡ Darling Bestie',
      img: 'images/friend7.png',
      desc: 'Our cherished sweetheart! Whether teasing, sharing snacks, or endless gossip sessions, school and college would never be the same without you.'
    }
  };

  let selectedNicknameKey = localStorage.getItem('olw_nickname_key') || null;
  let activeMemoryKey = 'chapter_1';

  /* ========================================================================
     2. WELCOME SCREEN INTERACTION (“NEE ENNAKU YAARU?”)
     ======================================================================== */
  const welcomeScreen = document.getElementById('welcome-screen');
  const nicknameBtns = document.querySelectorAll('.nickname-btn');
  const speechBubble = document.getElementById('speech-bubble');
  const speechAvatar = document.getElementById('speech-avatar');
  const speechText = document.getElementById('speech-text');
  const btnEnter = document.getElementById('btn-enter');
  const btnChangeAnswer = document.getElementById('btn-change-answer');
  const heroBadge = document.getElementById('hero-dynamic-badge');

  function updateNicknameSelection(key) {
    if (!NICKNAME_DATA[key]) return;
    selectedNicknameKey = key;
    localStorage.setItem('olw_nickname_key', key);

    // Update buttons
    nicknameBtns.forEach(btn => {
      const isCurrent = btn.dataset.key === key;
      btn.classList.toggle('selected', isCurrent);
      btn.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
    });

    const info = NICKNAME_DATA[key];
    speechAvatar.textContent = info.avatar;
    speechText.textContent = info.caption;
    speechBubble.style.display = 'block';

    // Show actions
    btnEnter.style.display = 'inline-flex';
    btnChangeAnswer.style.display = 'inline-block';

    // Little burst of celebration
    triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.7, 12);
  }

  nicknameBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateNicknameSelection(btn.dataset.key);
    });
  });

  btnChangeAnswer.addEventListener('click', () => {
    nicknameBtns.forEach(btn => btn.classList.remove('selected'));
    speechBubble.style.display = 'none';
    btnEnter.style.display = 'none';
    btnChangeAnswer.style.display = 'none';
    selectedNicknameKey = null;
  });

  btnEnter.addEventListener('click', () => {
    if (!selectedNicknameKey) return;
    const info = NICKNAME_DATA[selectedNicknameKey];

    // Update Hero badge with dynamic chosen nickname
    heroBadge.innerHTML = `<span>✨</span> Welcome inside, <strong>${info.label}</strong>! 🌸`;

    // Fade out welcome screen
    welcomeScreen.classList.add('hidden');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
    }, 800);

    // Scroll to top of page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // If already chosen in previous session, pre-select
  if (selectedNicknameKey && NICKNAME_DATA[selectedNicknameKey]) {
    updateNicknameSelection(selectedNicknameKey);
  }

  /* ========================================================================
     3. NAVBAR & MOBILE MENU
     ======================================================================== */
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveNav();
  }, { passive: true });

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('open');
      navLinks.classList.remove('active');
    });
  });

  function highlightActiveNav() {
    const sections = document.querySelectorAll('header, section');
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinkItems.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  /* ========================================================================
     4. BACKGROUND MUSIC PLAYER & WEB AUDIO SYNTHESIZER
     ======================================================================== */
  const musicWidget = document.getElementById('music-widget');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicIcon = document.getElementById('music-icon');
  const bgAudio = document.getElementById('bg-audio');

  let isPlayingMusic = false;
  let synthInterval = null;
  let audioCtx = null;

  // Gentle Ghibli-inspired music box chords fallback using Web Audio API
  function playSynthMusicBox() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const chords = [
        [261.63, 329.63, 392.00, 523.25], // C major
        [220.00, 261.63, 329.63, 440.00], // A minor
        [174.61, 220.00, 261.63, 349.23], // F major
        [196.00, 246.94, 293.66, 392.00]  // G major
      ];

      let chordIdx = 0;
      let noteStep = 0;

      function playChimeNote(freq, delay) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);

        // Music box envelope
        gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + delay + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + delay + 1.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(audioCtx.currentTime + delay);
        osc.stop(audioCtx.currentTime + delay + 1.3);
      }

      synthInterval = setInterval(() => {
        if (!isPlayingMusic) return;
        const currentChord = chords[chordIdx];
        const freq = currentChord[noteStep % currentChord.length];
        playChimeNote(freq, 0);

        // Add a subtle high chime harmonic
        if (noteStep % 2 === 0) {
          playChimeNote(freq * 2, 0.25);
        }

        noteStep++;
        if (noteStep >= 4) {
          noteStep = 0;
          chordIdx = (chordIdx + 1) % chords.length;
        }
      }, 550);
    } catch (e) {
      console.warn('Audio Context error:', e);
    }
  }

  function stopSynthMusicBox() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
  }

  function toggleMusic() {
    if (!isPlayingMusic) {
      isPlayingMusic = true;
      musicWidget.classList.add('playing');
      musicIcon.textContent = '⏸';

      // Try playing the local audio file first
      const playPromise = bgAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser blocks audio file or missing, use pure web audio synth
          playSynthMusicBox();
        });
      }
    } else {
      isPlayingMusic = false;
      musicWidget.classList.remove('playing');
      musicIcon.textContent = '♫';
      bgAudio.pause();
      stopSynthMusicBox();
    }
  }

  musicWidget.addEventListener('click', toggleMusic);
  musicToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusic();
  });

  bgAudio.addEventListener('error', () => {
    if (isPlayingMusic && !synthInterval) {
      playSynthMusicBox();
    }
  });

  /* ========================================================================
     5. MEMORY MODAL (CHAPTERS & FRIENDS PERSONAL NOTE STORAGE)
     ======================================================================== */
  const memoryModal = document.getElementById('memory-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBody = document.getElementById('modal-body');
  const personalNoteInput = document.getElementById('personal-note-input');
  const btnSaveNote = document.getElementById('btn-save-note');
  const saveStatus = document.getElementById('save-status');

  function openMemoryModal(dataKey, isFriend = false) {
    const data = isFriend ? FRIEND_DATA[dataKey] : CHAPTER_DATA[dataKey];
    if (!data) return;

    activeMemoryKey = isFriend ? `friend_${dataKey}` : `chapter_${dataKey}`;
    modalImg.src = data.img;
    modalImg.alt = data.title;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalBody.textContent = data.desc;

    // Load saved personal note from localStorage
    const savedNote = localStorage.getItem(`olw_note_${activeMemoryKey}`) || '';
    personalNoteInput.value = savedNote;
    saveStatus.textContent = savedNote ? 'Saved note loaded' : '';

    memoryModal.classList.add('open');
  }

  function closeMemoryModal() {
    memoryModal.classList.remove('open');
  }

  modalCloseBtn.addEventListener('click', closeMemoryModal);
  memoryModal.addEventListener('click', (e) => {
    if (e.target === memoryModal) closeMemoryModal();
  });

  btnSaveNote.addEventListener('click', () => {
    const text = personalNoteInput.value.trim();
    localStorage.setItem(`olw_note_${activeMemoryKey}`, text);
    saveStatus.textContent = '✨ Memory saved with love!';
    setTimeout(() => { saveStatus.textContent = ''; }, 3000);
  });

  // Chapter buttons and cards
  document.querySelectorAll('.scrapbook-card, .btn-open-memory').forEach(el => {
    el.addEventListener('click', (e) => {
      const chapter = el.dataset.chapter || el.closest('.scrapbook-card')?.dataset.chapter;
      const friend = el.dataset.friend || el.closest('.friend-card')?.dataset.friend;

      if (chapter) {
        openMemoryModal(chapter, false);
      } else if (friend) {
        openMemoryModal(friend, true);
      }
    });
  });

  /* ========================================================================
     6. EDITABLE FRIEND CARDS AUTO-SAVE
     ======================================================================== */
  const friendCards = document.querySelectorAll('.friend-card');
  friendCards.forEach(card => {
    const friendId = card.dataset.friend;
    const nickEl = card.querySelector('.friend-nickname');
    const memEl = card.querySelector('.friend-memory-box');

    // Load saved values if any
    const savedNick = localStorage.getItem(`olw_friend_nick_${friendId}`);
    const savedMem = localStorage.getItem(`olw_friend_mem_${friendId}`);
    if (savedNick) nickEl.textContent = savedNick;
    if (savedMem) memEl.textContent = savedMem;

    // Save on blur
    nickEl.addEventListener('blur', () => {
      localStorage.setItem(`olw_friend_nick_${friendId}`, nickEl.textContent.trim());
    });
    memEl.addEventListener('blur', () => {
      localStorage.setItem(`olw_friend_mem_${friendId}`, memEl.textContent.trim());
    });
  });

  /* ========================================================================
     7. POLAROID GALLERY FILTERING & LIGHTBOX
     ======================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const polaroidItems = Array.from(document.querySelectorAll('.polaroid-item'));
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let visiblePolaroids = [...polaroidItems];
  let currentLightboxIdx = 0;

  // Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      visiblePolaroids = [];

      polaroidItems.forEach(item => {
        const cat = item.dataset.category;
        const matches = (filter === 'all' || cat === filter);
        if (matches) {
          item.style.display = 'block';
          item.style.animation = 'popIn 0.35s ease';
          visiblePolaroids.push(item);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Open & Navigation
  function showLightboxIndex(idx) {
    if (visiblePolaroids.length === 0) return;
    currentLightboxIdx = (idx + visiblePolaroids.length) % visiblePolaroids.length;
    const item = visiblePolaroids[currentLightboxIdx];
    lightboxImg.src = item.dataset.img;
    lightboxCaption.textContent = item.dataset.caption;
  }

  polaroidItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = visiblePolaroids.indexOf(item);
      if (idx !== -1) {
        showLightboxIndex(idx);
        lightboxModal.classList.add('open');
      }
    });
  });

  function closeLightbox() {
    lightboxModal.classList.remove('open');
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => showLightboxIndex(currentLightboxIdx - 1));
  lightboxNext.addEventListener('click', () => showLightboxIndex(currentLightboxIdx + 1));
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // Keyboard navigation for Lightbox & Modal
  window.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightboxIndex(currentLightboxIdx - 1);
      if (e.key === 'ArrowRight') showLightboxIndex(currentLightboxIdx + 1);
    } else if (memoryModal.classList.contains('open')) {
      if (e.key === 'Escape') closeMemoryModal();
    }
  });

  /* ========================================================================
     8. GARDEN PATH TIMELINE SCROLL REVEAL
     ======================================================================== */
  const timelineItems = document.querySelectorAll('.timeline-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
  } else {
    timelineItems.forEach(item => item.classList.add('revealed'));
  }

  /* ========================================================================
     9. FINAL INTERACTIVE FEATURE — “PROMISE TO KEEP” 🤝💗
     ======================================================================== */
  const btnMakePromise = document.getElementById('btn-make-promise');
  const promiseCard = document.getElementById('promise-card');
  const promiseBanner = document.getElementById('promise-accepted-banner');

  let hasPromised = localStorage.getItem('olw_has_promised') === 'true';

  function applyPromiseAccepted() {
    promiseCard.classList.add('promised');
    promiseBanner.classList.add('show');
    btnMakePromise.innerHTML = '<span>💗 Our Promise, Always</span>';
    btnMakePromise.style.background = 'linear-gradient(135deg, #E8B86D 0%, #D47B8E 100%)';
  }

  if (hasPromised) {
    applyPromiseAccepted();
  }

  btnMakePromise.addEventListener('click', (e) => {
    hasPromised = true;
    localStorage.setItem('olw_has_promised', 'true');
    applyPromiseAccepted();

    // Trigger hearty flower burst
    const rect = btnMakePromise.getBoundingClientRect();
    triggerConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 35);
  });

  /* ========================================================================
     10. FLOATING FALLING PETALS CANVAS (GHIBLI BLOSSOM EFFECT)
     ======================================================================== */
  const canvas = document.getElementById('petal-canvas');
  const ctx = canvas.getContext('2d');

  let petals = [];
  const petalCount = 28;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Petal {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      this.size = Math.random() * 8 + 8;
      this.speedY = Math.random() * 1.2 + 0.8;
      this.speedX = Math.random() * 1.5 - 0.75;
      this.angle = Math.random() * 360;
      this.spin = Math.random() * 2 - 1;
      this.alpha = Math.random() * 0.5 + 0.4;
      // Soft blush pinks and peach
      const colors = ['#F4C9D2', '#FDE8ED', '#F4D5B8', '#FFF0F5'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.angle * Math.PI / 180) * 0.8;
      this.angle += this.spin;

      if (this.y > canvas.height + 20) {
        this.reset();
        this.y = -10;
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.angle * Math.PI) / 180);
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
      ctx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);
      ctx.fill();

      ctx.restore();
    }
  }

  for (let i = 0; i < petalCount; i++) {
    petals.push(new Petal());
  }

  function animatePetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animatePetals);
  }
  requestAnimationFrame(animatePetals);

  /* ========================================================================
     11. CLICK EFFECT: FLOATING HEARTS & CONFETTI BURST
     ======================================================================== */
  document.addEventListener('click', (e) => {
    // Avoid triggering click heart on interactive buttons to keep it clean
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('textarea')) {
      return;
    }
    createClickHeart(e.clientX, e.clientY);
  });

  function createClickHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'click-heart';
    const emojis = ['🌸', '💗', '✨', '🌷', '💕', '🌻', '🌺'];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }

  function triggerConfettiBurst(originX, originY, count = 20) {
    const emojis = ['🌸', '💗', '✨', '🌷', '🌼', '💕', '🌿', '🌻', '🌺', '🎀'];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'click-heart';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = `${originX}px`;
      el.style.top = `${originY}px`;
      el.style.fontSize = `${Math.random() * 1.2 + 1}rem`;

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 140 + 40;
      const destX = Math.cos(angle) * distance;
      const destY = Math.sin(angle) * distance - 40;

      el.style.transition = 'all 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
      document.body.appendChild(el);

      requestAnimationFrame(() => {
        el.style.transform = `translate(${destX}px, ${destY}px) scale(${Math.random() * 0.5 + 0.8})`;
        el.style.opacity = '0';
      });

      setTimeout(() => el.remove(), 1000);
    }
  }

  /* ========================================================================
     12. ACCESSIBILITY & MISSING IMAGE PLACEHOLDER SAFEGUARD
     ======================================================================== */
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.onerror = null;
      console.info('Image fallback applied for:', img.src);
      // Replace with beautiful pastel SVG placeholder
      const altText = img.alt || 'Our Little World Memory';
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
          <rect width="100%" height="100%" fill="#FFF9F0"/>
          <rect x="20" y="20" width="560" height="360" rx="16" fill="#FDE8ED" stroke="#E28FA0" stroke-width="2" stroke-dasharray="6,6"/>
          <text x="50%" y="42%" text-anchor="middle" font-size="48">🌸</text>
          <text x="50%" y="58%" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#344D40">${altText}</text>
          <text x="50%" y="68%" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#7A6256">Photo placeholder: Place ${img.getAttribute('src')} here</text>
        </svg>
      `)}`;
    });
  });

  console.log('🌸 Our Little World website initialized successfully with all besties!');
});
