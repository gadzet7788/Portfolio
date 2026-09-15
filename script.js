/* ==========================================================================
   DIKSHA — Portfolio
   script.js · vanilla JS + GSAP, ScrollTrigger, Lenis (CDN)
   ========================================================================== */
(() => {
  'use strict';

  /* ---------- 0. CONFIG — edit these ---------- */
  const CONFIG = {
    // Contact form endpoint (FormSubmit). After activating, replace the email in this URL with the random
    // string FormSubmit sends you, so your address isn't visible in the site's code.
    formEndpoint: 'https://formsubmit.co/ajax/gadzet7788@gmail.com',
    linkedin: '',                        // no LinkedIn links on the page yet
    github: 'https://github.com/gadzet7788',
  };

  /* ---------- 1. Utilities ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const html = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isDesktop = () => window.matchMedia('(min-width: 1025px)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const pad = (n, l) => String(n).padStart(l, '0');

  let lenis = null;
  let velocity = () => 0;

  /* Split an element's text into word > char spans (idempotent). */
  function splitChars(el) {
    if (!el) return [];
    if (el.dataset.splitDone) return $$('.char', el);
    const text = el.textContent;
    el.textContent = '';
    text.split(/(\s+)/).forEach(part => {
      if (!part) return;
      if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); return; }
      const word = document.createElement('span');
      word.className = 'word';
      word.setAttribute('aria-hidden', 'true');
      [...part].forEach(ch => {
        const c = document.createElement('span');
        c.className = 'char';
        c.textContent = ch;
        word.appendChild(c);
      });
      el.appendChild(word);
    });
    el.dataset.splitDone = '1';
    return $$('.char', el);
  }

  /* Split into words, preserving inline elements (em, mark). masked = wrap each word in an overflow mask. */
  function splitWords(el, masked = false) {
    const out = [];
    const walk = (node, parent, hl) => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { parent.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            if (masked) {
              w.className = 'wmask';
              const inner = document.createElement('span');
              inner.textContent = part;
              w.appendChild(inner);
              out.push(inner);
            } else {
              w.className = 'word' + (hl ? ' is-hl' : '');
              w.textContent = part;
              out.push(w);
            }
            parent.appendChild(w);
          });
        } else if (n.nodeType === 1) {
          const clone = n.cloneNode(false);
          parent.appendChild(clone);
          walk(n, clone, hl || n.tagName === 'MARK');
        }
      });
    };
    const frag = document.createDocumentFragment();
    walk(el, frag, false);
    el.textContent = '';
    el.appendChild(frag);
    return out;
  }

  /* ---------- 2. Content wiring (works without GSAP) ---------- */
  function wireContent() {
    $$('[data-social]').forEach(a => {
      const url = CONFIG[a.dataset.social];
      if (url && url !== '#') { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    });

    const rows = $('.mt__rows');
    if (rows) {
      const data = [
        ['EL-1024', 'Wireless Earbuds Pro', 'Audio', '248', 1], ['EL-1031', 'Smartwatch S2', 'Wearables', '96', 1],
        ['EL-1047', '65W GaN Charger', 'Power', '412', 1], ['EL-1052', 'USB-C Cable 2m', 'Cables', '38', 0],
        ['EL-1068', 'Magnetic Phone Mount', 'Accessories', '175', 1], ['EL-1073', 'Bluetooth Speaker Mini', 'Audio', '64', 1],
        ['EL-1089', 'Power Bank 20K', 'Power', '22', 0], ['EL-1094', 'Aluminium Laptop Stand', 'Accessories', '131', 1],
        ['EL-1102', 'Noise-Cancel Headset', 'Audio', '87', 1], ['EL-1117', 'Wireless Charging Pad', 'Power', '203', 1],
      ];
      rows.innerHTML = data.map(([sku, name, cat, qty, ok]) =>
        `<div class="mt__row"><span>${sku}</span><span>${name}</span><span>${cat}</span><span>${qty}</span><span class="mt__status${ok ? '' : ' mt__status--low'}">${ok ? 'In stock' : 'Low stock'}</span></div>`
      ).join('');
    }

    const clock = $('[data-clock]');
    if (clock) {
      const fmt = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit' });
      const tick = () => { clock.textContent = fmt.format(new Date()); };
      tick();
      setInterval(tick, 30000);
    }
  }

  function initContactForm() {
    const form = $('#contact-form');
    if (!form) return;
    const status = $('.form__status', form);
    const setState = (state, message) => {
      form.dataset.state = state;
      status.textContent = message;
    };
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (form.dataset.state === 'sending' || !form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form));
      if (data._honey) return; // bot filled the hidden field
      setState('sending', 'Sending…');
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            topic: data.topic || 'Not specified',
            message: data.message,
            _subject: `New portfolio enquiry from ${data.name}`,
            _replyto: data.email,
            _template: 'table',
            _captcha: 'false',
          }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || `HTTP ${res.status}`);
        form.reset();
        setState('success', "Thanks — your message is on its way. I'll get back to you soon.");
      } catch (err) {
        console.error('Contact form:', err);
        setState('error', "Sorry, your message couldn't be sent right now. Please try again in a moment, or reach me on GitHub.");
      }
    });
  }

  function initAccordion() {
    const rows = $$('.svc__row');
    rows.forEach(row => {
      const head = $('.svc__head', row);
      head.addEventListener('click', () => {
        const open = !row.classList.contains('is-open');
        rows.forEach(r => { r.classList.remove('is-open'); $('.svc__head', r).setAttribute('aria-expanded', 'false'); });
        if (open) { row.classList.add('is-open'); head.setAttribute('aria-expanded', 'true'); }
        setTimeout(() => { if (window.ScrollTrigger) ScrollTrigger.refresh(); }, 750);
      });
    });
  }

  function initMenu() {
    const burger = $('.nav__burger');
    const menu = $('#menu');
    if (!burger || !menu) return;
    const set = (open, viaKeyboard = false) => {
      document.body.classList.toggle('menu-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', String(!open));
      if (lenis) open ? lenis.stop() : lenis.start();
      if (open && viaKeyboard) setTimeout(() => $('a', menu).focus({ preventScroll: true }), 300);
    };
    burger.addEventListener('click', e => set(!document.body.classList.contains('menu-open'), e.detail === 0));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { set(false); burger.focus(); }
    });
    $$('a', menu).forEach(a => a.addEventListener('click', () => set(false)));
  }

  function initAnchors() {
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = id === '#top' ? 0 : $(id);
      if (target === null) return;
      e.preventDefault();
      const offset = a.classList.contains('slat') && isDesktop() && !reduceMotion ? window.innerHeight * 0.7 : 0;
      if (lenis) {
        lenis.scrollTo(target, { offset, duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) });
      } else {
        const top = target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  }

  function initLazyLoops() {
    const vids = $$('.slat video');
    if (!vids.length || !('IntersectionObserver' in window)) return;
    const load = v => {
      if (v.dataset.loaded || !v.dataset.src) return;
      v.dataset.loaded = '1';
      v.addEventListener('loadeddata', () => v.classList.add('is-loaded'), { once: true });
      v.addEventListener('error', () => v.remove(), { once: true });
      v.src = v.dataset.src;
    };
    const io = new IntersectionObserver(entries => entries.forEach(({ target: v, isIntersecting }) => {
      if (isIntersecting) { load(v); if (!reduceMotion) v.play().catch(() => {}); }
      else if (v.dataset.loaded) v.pause();
    }), { rootMargin: '200px' });
    vids.forEach(v => io.observe(v));
  }

  /* Chapter stills: AI-generated frames that sit between the CSS scene and the video. */
  function initStills() {
    const imgs = $$('.chapter__still');
    const load = img => {
      if (img.dataset.loaded) return;
      img.dataset.loaded = '1';
      img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
      img.addEventListener('error', () => img.remove(), { once: true });
      img.src = img.dataset.src;
    };
    if (!('IntersectionObserver' in window)) { imgs.forEach(load); return; }
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { load(e.target); io.unobserve(e.target); }
    }), { rootMargin: '150% 0px' });
    imgs.forEach(img => io.observe(img));
  }

  function initNav() {
    const nav = $('.nav');
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle('is-scrolled', y > 80);
      if (y > lastY + 2 && y > 400 && !document.body.classList.contains('menu-open')) nav.classList.add('is-hidden');
      else if (y < lastY - 2 || y < 400) nav.classList.remove('is-hidden');
      lastY = y;
    };
    if (lenis) lenis.on('scroll', onScroll); else window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    nav.addEventListener('focusin', () => nav.classList.remove('is-hidden'));
    if (!window.ScrollTrigger) return;
    $$('.nav__links a').forEach(a => {
      const sec = $(a.getAttribute('href'));
      if (sec) ScrollTrigger.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%', onToggle: st => a.classList.toggle('is-active', st.isActive) });
    });
  }

  /* ---------- 3. Motion foundations ---------- */
  function initLenis() {
    if (reduceMotion || typeof window.Lenis !== 'function') return;
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  function initVelocity() {
    let last = window.scrollY;
    let v = 0;
    gsap.ticker.add(() => {
      const y = window.scrollY;
      v = lenis ? lenis.velocity : lerp(v, y - last, 0.3);
      last = y;
    });
    velocity = () => v || 0;
  }

  function initTheme() {
    $$('main [data-theme], footer[data-theme]').forEach(sec => {
      ScrollTrigger.create({
        trigger: sec, start: 'top 40px', end: 'bottom 40px',
        onToggle: st => { if (st.isActive) document.body.dataset.theme = sec.dataset.theme; },
      });
    });
  }

  function initProgress() {
    gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
  }

  function runPreloader() {
    const pre = $('.preloader');
    return new Promise(resolve => {
      if (!pre) { resolve(); return; }
      pre.style.animation = 'none';
      let seen = false;
      try { seen = sessionStorage.getItem('dk-visited') === '1'; sessionStorage.setItem('dk-visited', '1'); } catch (err) { /* storage blocked */ }
      if (seen) {
        gsap.to(pre, { opacity: 0, duration: 0.5, ease: 'power2.out', onComplete: () => pre.remove() });
        resolve();
        return;
      }
      if (lenis) lenis.stop();
      const count = $('.preloader__count', pre);
      const letters = $$('.preloader__word span', pre);
      const counter = { v: 0 };
      gsap.timeline({ onComplete: () => { pre.remove(); if (lenis) lenis.start(); } })
        .from(letters, { yPercent: 110, duration: 1, stagger: 0.05, ease: 'expo.out' })
        .to(counter, { v: 100, duration: 1.6, ease: 'power2.inOut', onUpdate: () => { count.textContent = pad(Math.round(counter.v), 3); } }, 0)
        .to($('.preloader__bar span', pre), { scaleX: 1, duration: 1.6, ease: 'power2.inOut' }, 0)
        .to(letters, { yPercent: -110, duration: 0.6, stagger: 0.03, ease: 'power3.in' }, 1.55)
        .to(pre, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' }, 1.85)
        .call(resolve, null, 2.05);
    });
  }

  /* ---------- 4. Cursor, magnetic, scramble ---------- */
  function initCursor() {
    if (!finePointer || reduceMotion) return;
    const cur = $('.cursor');
    const dot = $('.cursor__dot', cur);
    const ring = $('.cursor__ring', cur);
    html.classList.add('has-cursor');
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const r = { ...pos };
    const dx = gsap.quickSetter(dot, 'x', 'px'), dy = gsap.quickSetter(dot, 'y', 'px');
    const rx = gsap.quickSetter(ring, 'x', 'px'), ry = gsap.quickSetter(ring, 'y', 'px');
    window.addEventListener('pointermove', e => { pos.x = e.clientX; pos.y = e.clientY; cur.classList.remove('is-hidden'); }, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => cur.classList.add('is-hidden'));
    gsap.ticker.add(() => {
      r.x = lerp(r.x, pos.x, 0.18); r.y = lerp(r.y, pos.y, 0.18);
      dx(pos.x); dy(pos.y); rx(r.x); ry(r.y);
    });
    document.addEventListener('pointerover', e => {
      const view = e.target.closest('[data-cursor="view"]');
      const link = e.target.closest('a, button, [data-tilt]');
      cur.classList.toggle('is-view', !!view);
      cur.classList.toggle('is-link', !view && !!link);
    });
  }

  function initMagnetic() {
    if (!finePointer || reduceMotion) return;
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('pointermove', e => {
        const b = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - b.left - b.width / 2) * 0.3, y: (e.clientY - b.top - b.height / 2) * 0.3, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
      });
      el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, .4)', overwrite: 'auto' }));
    });
  }

  const GLYPHS = '01<>/{}#_=+*';
  function scramble(el) {
    if (!el || el._scrambling) return;
    const original = el.dataset.text || (el.dataset.text = el.textContent);
    const total = Math.min(26, original.length + 8);
    let frame = 0;
    el._scrambling = true;
    const step = () => {
      const progress = frame / total;
      el.textContent = [...original].map((ch, i) =>
        ch === ' ' || i / original.length < progress ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]
      ).join('');
      if (++frame <= total) requestAnimationFrame(step);
      else { el.textContent = original; el._scrambling = false; }
    };
    step();
  }

  function initScramble() {
    if (!finePointer || reduceMotion) return;
    $$('a[data-scramble]').forEach(a => a.addEventListener('pointerenter', () => scramble(a)));
    $$('.case').forEach(c => c.addEventListener('pointerenter', () => scramble($('[data-scramble]', c))));
  }

  /* ---------- 5. Hero ---------- */
  function initHero() {
    const hero = $('.hero');
    const chars = $$('.hero__title [data-split]').flatMap(splitChars);
    const slats = $$('.slat', hero);
    const reveals = [...$$('.hero__top > *', hero), ...$$('.reveal', hero), $('.hero__scroll', hero)].filter(Boolean);
    gsap.set(chars, { yPercent: 115 });
    gsap.set(slats, { scaleY: 0 });
    gsap.set(reveals, { opacity: 0, y: 24 });

    $$('.hero__line', hero).forEach(line => {
      gsap.to(line, {
        xPercent: Number(line.dataset.drift) * 9, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      });
    });
    gsap.to($('.hero__bottom', hero), {
      opacity: 0, y: -40, ease: 'none',
      scrollTrigger: { trigger: hero, start: '25% top', end: '75% top', scrub: true },
    });

    return () => gsap.timeline({ defaults: { ease: 'expo.out' } })
      .to(chars, { yPercent: 0, duration: 1.3, stagger: 0.025 })
      .to(slats, { scaleY: 1, duration: 1.2, stagger: 0.1 }, 0.35)
      .to(reveals, { opacity: 1, y: 0, duration: 1.1, stagger: 0.06 }, 0.55);
  }

  /* ---------- 6. Stats & marquee ---------- */
  function initStats() {
    $$('[data-count]').forEach(el => {
      const end = Number(el.dataset.count);
      const padLen = Number(el.dataset.pad || 0);
      const o = { v: 0 };
      ScrollTrigger.create({
        trigger: el, start: 'top 85%', once: true,
        onEnter: () => gsap.to(o, { v: end, duration: 2, ease: 'power3.out', onUpdate: () => { el.textContent = pad(Math.round(o.v), padLen); } }),
      });
    });
    gsap.from('.stat', { opacity: 0, y: 40, duration: 1.1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '.stats__grid', start: 'top 88%' } });

    const marquee = $('.marquee');
    const track = marquee && $('.marquee__track', marquee);
    if (!track) return;
    marquee.classList.add('marquee--js');
    let half = track.scrollWidth / 2;
    const measure = () => { half = track.scrollWidth / 2; };
    window.addEventListener('resize', measure);
    ScrollTrigger.addEventListener('refresh', measure);
    let x = 0, dir = 1, skew = 0;
    const setX = gsap.quickSetter(track, 'x', 'px');
    const setSkew = gsap.quickSetter(track, 'skewX', 'deg');
    gsap.ticker.add((time, dt) => {
      const v = velocity();
      if (Math.abs(v) > 0.5) dir = v > 0 ? 1 : -1;
      x -= (1 + Math.min(Math.abs(v) * 0.6, 30)) * dir * (dt / 16.7) * 1.1;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      skew = lerp(skew, clamp(-v * 0.25, -8, 8), 0.1);
      setX(x);
      setSkew(skew);
    });
  }

  /* ---------- 7. Headings & mission ---------- */
  function initTitles() {
    $$('.section-title, .mission__title, .pillars__heading, .story__quote p').forEach(title => {
      const words = splitWords(title, true);
      gsap.from(words, { yPercent: 115, duration: 1.2, stagger: 0.05, ease: 'expo.out', scrollTrigger: { trigger: title, start: 'top 85%' } });
    });
    $$('main .label').forEach(label => {
      if (label.closest('.hero')) return;
      gsap.from(label, { opacity: 0, x: -16, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: label, start: 'top 90%' } });
    });
  }

  function initMission() {
    const text = $('.mission__text');
    if (!text) return;
    const words = splitWords(text);
    gsap.fromTo(words, { opacity: 0.14 }, {
      opacity: 1, ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: text, start: 'top 78%', end: 'bottom 50%', scrub: true },
    });
  }

  /* ---------- 8. Pillars — scroll-scrubbed film chapters ---------- */
  class ChapterScrubber {
    constructor(chapter) {
      this.ch = chapter;
      this.video = $('.chapter__video', chapter);
      this.timeEl = $('.chapter__time', chapter);
      this.target = 0;
      this.current = 0;
      this.ready = false;
      this.duration = 10;
      this.label = '';
      this.tick = this.tick.bind(this);
    }
    load(src) {
      const v = this.video;
      if (!v || !src || v.dataset.loaded) return;
      v.dataset.loaded = '1';
      v.addEventListener('loadedmetadata', () => { this.duration = v.duration || 10; this.ready = true; }, { once: true });
      v.addEventListener('loadeddata', () => v.classList.add('is-loaded'), { once: true });
      v.addEventListener('error', () => { this.ready = false; v.remove(); this.video = null; }, { once: true });
      v.preload = 'auto';
      v.src = src;
      v.load();
    }
    set(p) { this.target = p; }
    tick() {
      const d = this.target - this.current;
      if (Math.abs(d) < 0.0004) return;
      this.current += d * 0.12;
      const p = this.current;
      this.ch.style.setProperty('--p', p.toFixed(4));
      if (this.video && this.ready) {
        const t = p * (this.duration - 0.05);
        if (Math.abs(this.video.currentTime - t) > 0.01) this.video.currentTime = t;
      }
      const label = `00:${pad(Math.floor(p * this.duration), 2)} / 00:${pad(Math.round(this.duration), 2)}`;
      if (label !== this.label) { this.timeEl.textContent = label; this.label = label; }
    }
  }

  /* iOS/Safari: videos must be "unlocked" by a user gesture before seeking paints frames. */
  function primeVideos() {
    const prime = () => {
      $$('.chapter__video').forEach(v => { if (v.src) v.play().then(() => v.pause()).catch(() => {}); });
    };
    window.addEventListener('pointerdown', prime, { once: true, passive: true });
    window.addEventListener('touchstart', prime, { once: true, passive: true });
  }

  function chaptersDesktop() {
    const cleanups = [];
    const chapters = $$('.chapter');
    chapters.forEach((ch, i) => {
      const frame = $('.chapter__frame', ch);
      const shade = $('.chapter__shade', ch);
      const scrubber = new ChapterScrubber(ch);
      const src = scrubber.video && scrubber.video.dataset.srcDesktop;
      gsap.ticker.add(scrubber.tick);
      cleanups.push(() => { gsap.ticker.remove(scrubber.tick); ch.style.removeProperty('--p'); });

      ScrollTrigger.create({
        trigger: ch, start: 'top bottom+=150%', end: 'bottom top-=100%',
        onEnter: () => scrubber.load(src), onEnterBack: () => scrubber.load(src),
      });

      // Shutter entry — rounded window expands to full bleed, emerald scan line sweeps
      const first = i === 0;
      gsap.fromTo(frame, { clipPath: first ? 'inset(16% 18% round 32px)' : 'inset(7% 5% round 24px)' }, {
        clipPath: 'inset(0% 0% round 0px)', ease: 'none',
        scrollTrigger: {
          trigger: ch, start: 'top bottom', end: 'top top', scrub: true,
          onUpdate: st => {
            frame.style.setProperty('--e', (1 - st.progress).toFixed(3));
            frame.style.setProperty('--scan', first ? 0 : Math.sin(st.progress * Math.PI).toFixed(3));
          },
        },
      });

      const the = splitChars($('.chapter__the', ch));
      const role = splitChars($('.chapter__role', ch));
      const kicker = $('.chapter__kicker', ch);
      const body = $('.chapter__body', ch);
      const chips = $$('.chip', ch);
      const hud = $('.chapter__hud', ch);
      gsap.set([...the, ...role], { yPercent: 115 });
      gsap.set([kicker, body, hud], { opacity: 0, y: 30 });
      gsap.set(chips, { opacity: 0, y: 16, scale: 0.9 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ch, start: 'top top', end: 'bottom bottom', scrub: 1, onUpdate: st => scrubber.set(st.progress) },
      });
      tl.to(hud, { opacity: 1, y: 0, duration: 0.06 }, 0)
        .to(the, { yPercent: 0, duration: 0.08, stagger: 0.012, ease: 'expo.out' }, 0.02)
        .to(kicker, { opacity: 1, y: 0, duration: 0.08 }, 0.04)
        .to(role, { yPercent: 0, duration: 0.12, stagger: 0.012, ease: 'expo.out' }, 0.05)
        .to(body, { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.33)
        .to(chips, { opacity: 1, y: 0, scale: 1, duration: 0.08, stagger: 0.025, ease: 'back.out(1.6)' }, 0.52);
      if (i < chapters.length - 1) {
        tl.to([...role, ...the], { yPercent: -115, duration: 0.1, stagger: 0.006, ease: 'power2.in' }, 0.86)
          .to([kicker, body, ...chips, hud], { opacity: 0, y: -30, duration: 0.1, ease: 'power2.in' }, 0.86)
          .to(frame, { opacity: 0.35, duration: 0.12, ease: 'none' }, 0.88);
      } else {
        tl.to(shade, { opacity: 0.85, duration: 0.2, ease: 'none' }, 0.8);
      }
      tl.set({}, {}, 1);
    });
    return () => cleanups.forEach(fn => fn());
  }

  function chaptersMobile() {
    const cleanups = [];
    $$('.chapter').forEach(ch => {
      const v = $('.chapter__video', ch);
      if (v && !reduceMotion && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            if (!v.dataset.loaded) {
              v.dataset.loaded = '1';
              v.loop = true;
              v.addEventListener('loadeddata', () => v.classList.add('is-loaded'), { once: true });
              v.addEventListener('error', () => v.remove(), { once: true });
              v.src = v.dataset.srcMobile;
            }
            v.play().catch(() => {});
          } else if (v.dataset.loaded) {
            v.pause();
          }
        }, { rootMargin: '100px' });
        io.observe(v);
        cleanups.push(() => io.disconnect());
      }
      const chars = [...splitChars($('.chapter__the', ch)), ...splitChars($('.chapter__role', ch))];
      const rest = [$('.chapter__kicker', ch), $('.chapter__body', ch), ...$$('.chip', ch)];
      gsap.timeline({ scrollTrigger: { trigger: ch, start: 'top 55%', toggleActions: 'play none none reverse' } })
        .from(chars, { yPercent: 115, duration: 1.1, stagger: 0.02, ease: 'expo.out' })
        .from(rest, { opacity: 0, y: 24, duration: 0.9, stagger: 0.05, ease: 'power3.out' }, 0.3);
    });
    return () => cleanups.forEach(fn => fn());
  }

  /* ---------- 9. Services ---------- */
  function initServices() {
    gsap.from('.svc__row', { opacity: 0, y: 30, duration: 1, stagger: 0.07, ease: 'expo.out', scrollTrigger: { trigger: '.svc', start: 'top 85%' } });
    if (!finePointer || reduceMotion) return;
    const list = $('.svc');
    const pv = $('.svc__preview');
    const label = $('.svc__preview-label', pv);
    const glyph = $('.svc__preview-glyph', pv);
    const xTo = gsap.quickTo(pv, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(pv, 'y', { duration: 0.6, ease: 'power3.out' });
    list.addEventListener('pointermove', e => { xTo(e.clientX + 150); yTo(e.clientY); });
    list.addEventListener('pointerenter', () => gsap.to(pv, { opacity: 1, scale: 1, duration: 0.5, ease: 'expo.out', overwrite: 'auto' }));
    list.addEventListener('pointerleave', () => gsap.to(pv, { opacity: 0, scale: 0.4, duration: 0.4, ease: 'power3.in', overwrite: 'auto' }));
    $$('.svc__row', list).forEach(row => row.addEventListener('pointerenter', () => {
      if (pv.dataset.pillar === row.dataset.pillar) return;
      pv.dataset.pillar = row.dataset.pillar;
      label.textContent = row.dataset.pillar;
      gsap.fromTo(glyph, { scale: 0.6, rotate: -20 }, { scale: 1, rotate: 0, duration: 0.6, ease: 'expo.out' });
    }));
  }

  /* ---------- 10. How we work ---------- */
  function initEngage() {
    gsap.from('.card', { opacity: 0, y: 80, duration: 1.2, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '.engage__cards', start: 'top 85%' } });
    gsap.fromTo('.process__line', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.process', start: 'top 92%', end: 'top 55%', scrub: true } });
    gsap.from('.process li', { opacity: 0, y: 20, duration: 0.9, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.process', start: 'top 85%' } });
    if (!finePointer || reduceMotion) return;
    $$('[data-tilt]').forEach(card => {
      card.addEventListener('pointermove', e => {
        const b = card.getBoundingClientRect();
        const px = (e.clientX - b.left) / b.width;
        const py = (e.clientY - b.top) / b.height;
        card.style.setProperty('--mx', `${px * 100}%`);
        card.style.setProperty('--my', `${py * 100}%`);
        gsap.to(card, { rotateY: (px - 0.5) * 8, rotateX: -(py - 0.5) * 8, transformPerspective: 900, duration: 0.6, ease: 'power3.out', overwrite: 'auto' });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: 1, ease: 'elastic.out(1, .5)', overwrite: 'auto' }));
    });
  }

  /* ---------- 11. Work — horizontal gallery ---------- */
  function workDesktop() {
    const sec = $('.work');
    const track = $('.work__track');
    const cases = $$('.case', track);
    const current = $('.work__current');
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const setHeight = () => { sec.style.height = `${distance() + window.innerHeight}px`; };
    setHeight();
    ScrollTrigger.addEventListener('refreshInit', setHeight);

    const tween = gsap.to(track, {
      x: () => -distance(), ease: 'none',
      scrollTrigger: {
        trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 1, invalidateOnRefresh: true,
        onUpdate: st => {
          const n = pad(Math.min(cases.length, Math.floor(st.progress * cases.length) + 1), 2);
          if (current.textContent !== n) current.textContent = n;
        },
      },
    });
    cases.forEach(c => {
      const media = $('.mock, .case__media img', c);
      if (media) {
        gsap.fromTo(media, { xPercent: 5 }, {
          xPercent: -5, ease: 'none',
          scrollTrigger: { trigger: c, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
        });
      }
    });
    return () => { ScrollTrigger.removeEventListener('refreshInit', setHeight); sec.style.height = ''; };
  }

  function workMobile() {
    $$('.case').forEach(c => gsap.from(c, { opacity: 0, y: 60, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 88%' } }));
  }

  /* ---------- 12. Story ---------- */
  function initStory() {
    const story = $('.story');
    const items = $$('.tl');
    const track = $('.story__phase-track');
    const label = $('.story__phase-label');
    if (!items.length) return;
    $('.timeline').classList.add('timeline--js');
    items[0].classList.add('is-active');
    gsap.fromTo('.timeline__line b', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 62%', end: 'bottom 62%', scrub: true } });
    items.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item, start: 'top 62%', end: 'bottom 62%',
        onToggle: st => {
          if (!st.isActive) return;
          items.forEach((o, j) => { o.classList.toggle('is-active', j === i); o.classList.toggle('is-past', j < i); });
          if (track) track.style.setProperty('--i', i);
          if (label) label.textContent = item.dataset.label;
        },
      });
      gsap.from($$('.tl__kicker, .tl__title, .tl__text', item), { y: 40, opacity: 0, duration: 1.1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: item, start: 'top 82%' } });
    });
    gsap.to(story, { backgroundColor: '#EEF1F5', ease: 'none', scrollTrigger: { trigger: story, start: 'top 50%', end: 'center center', scrub: true } });
  }

  /* ---------- 13. CTA ---------- */
  function initCta() {
    const title = $('.cta__title');
    if (!title) return;
    const chars = $$('[data-split]', title).flatMap(splitChars);
    gsap.from(chars, { yPercent: 115, duration: 1.3, stagger: 0.02, ease: 'expo.out', scrollTrigger: { trigger: title, start: 'top 82%', toggleActions: 'play none none reverse' } });
    gsap.fromTo(title, { scale: 0.9 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'center center', scrub: true } });
    gsap.from('.cta__intro > *, .form', { opacity: 0, y: 30, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.cta__sub', start: 'top 92%' } });
  }

  /* ---------- 14. Boot ---------- */
  wireContent();
  initContactForm();
  initAccordion();
  initMenu();
  initAnchors();
  initLazyLoops();
  initStills();

  const hasGSAP = !!(window.gsap && window.ScrollTrigger);
  if (!hasGSAP || reduceMotion) {
    const pre = $('.preloader');
    if (pre) pre.remove();
    if (hasGSAP) gsap.registerPlugin(ScrollTrigger);
    initNav();
    if (hasGSAP) initTheme();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  html.classList.add('js-ready');

  initLenis();
  initVelocity();
  initNav();
  initTheme();
  initProgress();
  initCursor();
  initMagnetic();
  initScramble();
  const heroIntro = initHero();
  initStats();
  initTitles();
  initMission();
  initServices();
  initEngage();
  initStory();
  initCta();
  primeVideos();

  const mm = gsap.matchMedia();
  mm.add('(min-width: 1025px)', () => {
    const undoChapters = chaptersDesktop();
    const undoWork = workDesktop();
    return () => { undoChapters(); undoWork(); };
  });
  mm.add('(max-width: 1024px)', () => {
    workMobile();
    return chaptersMobile();
  });

  runPreloader().then(heroIntro);

  const refresh = () => ScrollTrigger.refresh();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
  window.addEventListener('load', refresh);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) $$('video').forEach(v => v.pause());
  });
})();
