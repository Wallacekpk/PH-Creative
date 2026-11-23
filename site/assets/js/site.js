/* PH Creative · comportamento da página. Os dados ficam em dados.js. */
(function () {
  'use strict';

  var D = window.PH_DADOS || {};
  var HERO_VIDEO = D.HERO_VIDEO || {};
  var ESTILOS = D.ESTILOS || [];
  var works = (D.VIDEO_WORKS || []).filter(function (w) { return w && w.id; });
  var byId = {};
  works.forEach(function (w) { byId[w.id] = w; });

  var mm = function (q) { return !!(window.matchMedia && window.matchMedia(q).matches); };
  var reduce = mm('(prefers-reduced-motion: reduce)');
  var small = mm('(max-width: 760px)');
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  var canScrollTl = !!(window.CSS && CSS.supports && CSS.supports('animation-timeline: scroll()'));
  var hasIO = 'IntersectionObserver' in window;

  var root = document.querySelector('.ph');
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var num = String(D.WHATSAPP || '5500000000000').replace(/\D/g, '');
  var wa = function (msg) { return 'https://wa.me/' + num + '?text=' + encodeURIComponent(msg); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var norm = function (s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim(); };
  var ARROW = '<svg class="arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';
  var ARROW_SM = '<svg class="ar" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';

  /* ---------- WhatsApp ---------- */
  var MSG_GERAL = 'Oi, PH! Vim pelo site e quero um orçamento de criativos.';
  $$('[data-wa]').forEach(function (a) { a.href = wa(MSG_GERAL); });

  /* ---------- observadores: revelar no scroll e tocar vídeo visível ---------- */
  var seen = typeof WeakSet === 'function' ? new WeakSet() : null;
  var revealIO = hasIO ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); revealIO.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }) : null;
  var videoIO = hasIO ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting && !reduce) {
        v.muted = true;
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { threshold: 0.2 }) : null;

  function scan(ctx) {
    $$('.rv', ctx || root).forEach(function (el) {
      if (seen && seen.has(el)) return;
      if (seen) seen.add(el);
      if (revealIO && !reduce) revealIO.observe(el);
      else el.classList.add('is-in');
    });
    $$('video[data-autoplay]', ctx || root).forEach(function (v) {
      if (seen && seen.has(v)) return;
      if (seen) seen.add(v);
      v.muted = true;
      if (videoIO) videoIO.observe(v);
    });
  }

  /* ---------- peça da galeria (vídeo, imagem ou moldura vazia) ---------- */
  function media(w, hidden, ratio) {
    var meta = '<span class="v-meta"><span>' + esc(w.estilo) + '</span><span>' + esc(w.duracao) + '</span></span>' +
      '<span class="v-title">' + esc(w.titulo) + '</span>';
    if (w.arquivo) {
      return '<button type="button" class="vbtn" data-open="' + esc(w.id) + '"' + (hidden ? ' tabindex="-1"' : '') +
        ' aria-label="Assistir com som: ' + esc(w.titulo || 'trabalho') + ', estilo ' + esc(w.estilo) + '">' +
        '<video data-autoplay="1" src="' + esc(w.arquivo) + '"' + (w.poster ? ' poster="' + esc(w.poster) + '"' : '') +
        ' muted loop playsinline preload="none"></video>' + meta + '</button>';
    }
    if (w.poster) {
      return '<div class="vbtn is-img"><img src="' + esc(w.poster) + '" alt="' +
        (hidden ? '' : 'Exemplo de criativo no estilo ' + esc(w.estilo)) + '" loading="lazy" decoding="async">' + meta + '</div>';
    }
    return '<div class="vempty"><span class="top"><span class="chip">' + esc(w.estilo) + '</span>' +
      (ratio && w.proporcao ? '<span class="ratio">' + esc(w.proporcao) + '</span>' : '') + '</span>' +
      '<span class="play" aria-hidden="true"></span>' +
      (w.titulo ? '<span class="mid">' + esc(w.titulo) + '</span>' : '<span class="mid"></span>') + '</div>';
  }

  /* ---------- galeria em movimento infinito ---------- */
  function track(list, shift) {
    if (!list.length) return '';
    var half = [];
    while (half.length < 8) half = half.concat(list);
    var make = function (dup) {
      return half.map(function (w) {
        return '<div class="tile r916"' + (dup ? ' aria-hidden="true"' : '') + '>' + media(w, dup) + '</div>';
      }).join('');
    };
    return make(false) + make(true);
  }
  var listA = works, listB = [];
  if (works.length >= 6) {
    listA = works.filter(function (w, i) { return i % 2 === 0; });
    listB = works.filter(function (w, i) { return i % 2 === 1; });
  }
  var rowA = $('#rowA'), rowB = $('#rowB');
  if (rowA) rowA.innerHTML = track(listA, 0);
  if (rowB) {
    if (listB.length) rowB.innerHTML = track(listB, 2);
    else rowB.parentNode.removeChild(rowB);
  }

  /* ---------- estilos ---------- */
  var tab = Math.min(2, Math.max(0, ESTILOS.length - 1));
  var estList = $('#estList'), estPanel = $('#estPanel');

  function renderEstList() {
    estList.innerHTML = ESTILOS.map(function (e, i) {
      var on = i === tab;
      var preco = e.avulso === 'Sob consulta' ? 'Sob consulta' : 'a partir de ' + e.avulso;
      return '<li><button type="button" class="est-btn' + (on ? ' is-on' : '') + '" aria-pressed="' + on + '" data-tab="' + i + '">' +
        '<span class="n">' + (i < 9 ? '0' : '') + (i + 1) + '</span><span class="nm">' + esc(e.nome) + '</span>' +
        '<span class="pr">' + esc(preco) + '</span>' + ARROW_SM + '</button></li>';
    }).join('');
  }

  function renderEstPanel() {
    var e = ESTILOS[tab];
    if (!e) return;
    var exemplos = works.filter(function (w) { return norm(w.estilo) === norm(e.nome); });
    var pos = ['m', 's1x', 's2x'];
    var frames = pos.map(function (p, k) {
      var w = exemplos[k] || { id: '', arquivo: '', estilo: e.nome, titulo: '', duracao: '' };
      return '<div class="' + p + '">' + media(w, false) + '</div>';
    }).join('');
    var preco = e.avulso === 'Sob consulta' ? 'Sob consulta' : 'A partir de ' + e.avulso + ' por vídeo';
    estPanel.innerHTML =
      '<div class="' + (tab % 2 === 0 ? 'swap-a' : 'swap-b') + '">' +
      '<div class="stage">' + frames + '</div>' +
      '<div class="est-info">' +
      '<h3 class="display">' + esc(e.nome) + '</h3>' +
      '<p class="lead">' + esc(e.descricao) + '</p>' +
      '<dl class="meta"><dt>Preço</dt><dd>' + esc(preco) + '</dd><dt>Prazo</dt><dd>' + esc(e.prazo || '[PRAZO]') +
      '</dd><dt>Ideal para</dt><dd>' + esc(e.ideal) + '</dd></dl>' +
      '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px 28px;margin-top:8px">' +
      '<a class="btn btn-primary" href="' + esc(wa('Oi, PH! Vim pelo site e quero criativos no estilo ' + e.nome + '.')) +
      '" target="_blank" rel="noopener">Quero esse estilo' + ARROW + '</a>' +
      '<a class="link-u" href="#precos">Ver todos os preços</a></div></div></div>';
    scan(estPanel);
  }

  if (estList && estPanel && ESTILOS.length) {
    renderEstList();
    renderEstPanel();
    estList.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-tab]');
      if (!b) return;
      var i = +b.getAttribute('data-tab');
      if (i === tab) return;
      tab = i;
      $$('.est-btn', estList).forEach(function (x, k) {
        x.classList.toggle('is-on', k === tab);
        x.setAttribute('aria-pressed', String(k === tab));
      });
      renderEstPanel();
    });
  }

  /* ---------- preços ---------- */
  var PLANS = [
    { id: 'a', label: 'Avulso', cta: 'Pedir vídeos avulsos', msg: 'quero pedir vídeos avulsos' },
    { id: 'p5', label: 'Pacote 5', cta: 'Montar pacote de 5 vídeos', msg: 'quero montar um pacote de 5 vídeos' },
    { id: 'p10', label: 'Pacote 10', cta: 'Montar pacote de 10 vídeos', msg: 'quero montar um pacote de 10 vídeos' }
  ];
  var plan = 'p10';
  var seg = $('#planSeg'), priceRows = $('#priceRows'), planCta = $('#planCta');

  if (priceRows) {
    priceRows.innerHTML = ESTILOS.map(function (s) {
      return '<div class="prow' + (s.recomendado ? ' is-rec' : '') + '" role="row">' +
        '<div role="cell" class="pname">' + esc(s.nome) + (s.recomendado ? '<span class="rec-tag">Recomendado</span>' : '') + '</div>' +
        '<div role="cell" class="pc" data-col="a">' + esc(s.avulso) + '</div>' +
        '<div role="cell" class="pc" data-col="p5">' + esc(s.pacote5) + '</div>' +
        '<div role="cell" class="pc" data-col="p10">' + esc(s.pacote10) + '</div></div>';
    }).join('');
  }
  if (seg) {
    seg.innerHTML = PLANS.map(function (p) {
      return '<button type="button" data-plan="' + p.id + '">' + p.label + '</button>';
    }).join('');
    seg.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-plan]');
      if (b) setPlan(b.getAttribute('data-plan'));
    });
  }
  function setPlan(id) {
    plan = id;
    var cur = PLANS.filter(function (p) { return p.id === plan; })[0] || PLANS[2];
    $$('[data-plan]').forEach(function (b) {
      var on = b.getAttribute('data-plan') === plan;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });
    $$('[data-col]').forEach(function (c) { c.classList.toggle('is-on', c.getAttribute('data-col') === plan); });
    if (planCta) {
      planCta.href = wa('Oi, PH! Vim pelo site e ' + cur.msg + '.');
      $('.lbl-cta', planCta).textContent = cur.cta;
    }
  }
  setPlan(plan);

  /* ---------- dúvidas (uma aberta por vez) ---------- */
  $$('.faq-item').forEach(function (item, i) {
    var q = $('.faq-q', item), a = $('.faq-a', item);
    q.addEventListener('click', function () {
      var open = item.classList.contains('is-open');
      $$('.faq-item').forEach(function (o) {
        o.classList.remove('is-open');
        $('.faq-q', o).setAttribute('aria-expanded', 'false');
        $('.faq-a', o).setAttribute('aria-hidden', 'true');
      });
      if (!open) {
        item.classList.add('is-open');
        q.setAttribute('aria-expanded', 'true');
        a.setAttribute('aria-hidden', 'false');
      }
    });
  });

  /* ---------- menu do celular ---------- */
  var menuBtn = $('.menu-btn'), menu = $('#menu-mobile');
  function setMenu(open) {
    if (!menu) return;
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? 'Fechar' : 'Menu';
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && !menu.hidden) setMenu(false); });
  }

  /* ---------- vídeo de fundo (hero e contato) ---------- */
  var heroSrc = (small && HERO_VIDEO.arquivoMobile) ? HERO_VIDEO.arquivoMobile : HERO_VIDEO.arquivo;
  var heroMedia = $('.hero-media'), endBox = $('#contato');
  function endPoster() {
    if (!endBox || !HERO_VIDEO.poster || $('.end-media', endBox)) return;
    var d = document.createElement('div');
    d.className = 'end-media';
    d.setAttribute('aria-hidden', 'true');
    d.innerHTML = '<img src="' + esc(HERO_VIDEO.poster) + '" alt="" loading="lazy">';
    endBox.insertBefore(d, endBox.firstChild);
  }
  var poster = $('.hero-poster');
  if (poster) {
    if (HERO_VIDEO.poster) poster.src = HERO_VIDEO.poster;
    else poster.parentNode.removeChild(poster);
  }
  if (heroSrc && !saveData && !reduce && heroMedia) {
    var v = document.createElement('video');
    v.className = 'hero-video';
    v.setAttribute('data-autoplay', '1');
    v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.preload = 'auto';
    if (HERO_VIDEO.poster) v.poster = HERO_VIDEO.poster;
    v.src = heroSrc;
    heroMedia.appendChild(v);
    var ev = document.createElement('div');
    ev.className = 'end-media';
    ev.setAttribute('aria-hidden', 'true');
    ev.innerHTML = '<video data-autoplay="1" src="' + esc(heroSrc) + '"' + (HERO_VIDEO.poster ? ' poster="' + esc(HERO_VIDEO.poster) + '"' : '') +
      ' muted loop playsinline preload="none"></video>';
    if (endBox) endBox.insertBefore(ev, endBox.firstChild);
    v.addEventListener('error', function () {
      if (v.parentNode) v.parentNode.removeChild(v);
      if (ev.parentNode) ev.parentNode.removeChild(ev);
      endPoster();
    });
  } else {
    endPoster();
  }

  /* ---------- player com som ---------- */
  var lastFocus = null, modalEl = null;
  function closeModal() {
    if (!modalEl) return;
    var vid = $('video', modalEl);
    if (vid) vid.pause();
    modalEl.parentNode.removeChild(modalEl);
    modalEl = null;
    document.documentElement.classList.remove('is-locked');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function openModal(id) {
    var w = byId[id];
    if (!w || !w.arquivo) return;
    lastFocus = document.activeElement;
    setMenu(false);
    var info = [w.estilo, w.duracao].filter(Boolean).join(' · ');
    modalEl = document.createElement('div');
    modalEl.className = 'modal';
    modalEl.setAttribute('role', 'dialog');
    modalEl.setAttribute('aria-modal', 'true');
    modalEl.setAttribute('aria-label', 'Vídeo: ' + (w.titulo || ''));
    modalEl.innerHTML =
      '<button type="button" class="modal-bg" aria-label="Fechar o vídeo" tabindex="-1"></button>' +
      '<div class="modal-card">' +
      '<button type="button" class="modal-x">Fechar<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg></button>' +
      '<video src="' + esc(w.arquivo) + '"' + (w.poster ? ' poster="' + esc(w.poster) + '"' : '') + ' controls autoplay playsinline preload="auto"></video>' +
      '<div class="modal-cap"><b>' + esc(w.titulo) + '</b><span>' + esc(info) + '</span></div></div>';
    document.body.appendChild(modalEl);
    document.documentElement.classList.add('is-locked');
    $('.modal-bg', modalEl).addEventListener('click', closeModal);
    $('.modal-x', modalEl).addEventListener('click', closeModal);
    $('.modal-x', modalEl).focus();
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-open]');
    if (b) openModal(b.getAttribute('data-open'));
  });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') closeModal(); });

  /* ---------- barra de progresso e timecode ---------- */
  var tcEl = $('.nav-tc span'), bar = $('.nav-prog'), raf = 0, lastTc = '';
  function onScroll() {
    if (raf) return;
    raf = requestAnimationFrame(function () {
      raf = 0;
      var d = document.documentElement;
      var max = Math.max(1, d.scrollHeight - window.innerHeight);
      var p = Math.min(1, Math.max(0, (window.scrollY || 0) / max));
      if (!canScrollTl && bar) bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
      var s = Math.round(p * 52);
      var tc = '00:' + (s < 10 ? '0' + s : String(s));
      if (tc !== lastTc && tcEl) { tcEl.textContent = tc; lastTc = tc; }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- começar ---------- */
  if (D.ANIMAR_FILEIRA === false || reduce) root.classList.add('is-static');
  scan(root);
  onScroll();
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { root.classList.add('is-ready'); });
  });
})();
