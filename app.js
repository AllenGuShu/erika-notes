import { CARDS } from './data/cards.js';

/* ─────────────────────────────────────────
   課程筆記 — 切換課次
───────────────────────────────────────── */
/* ── 課程筆記：切換課次 ── */
  function switchLesson(index) {
    index = parseInt(index, 10);
    document.querySelectorAll('.lesson-panel').forEach((p, i) => p.classList.toggle('active', i === index));
    document.getElementById('lessonSelect').value = index;
  }

  /* ── 頂層分頁切換 ── */
  function switchView(id, btn) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('view-' + id).classList.add('active');
    btn.classList.add('active');
  }

  /* ══════════════════════════════════════════
     單字文法卡 — 資料（57 張）
  ══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   單字文法閃卡 — 狀態
───────────────────────────────────────── */
let deck = [...CARDS], idx = 0;

  /* ── 語音（Web Speech API） ── */
  function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }
  function speakFront() { speak(deck[idx].audioFront); }
  function speakBack()  { speak(deck[idx].ex); }

  /* ── 渲染目前卡片 ── */
  function renderCard() {
    const c = deck[idx];
    const wrap = document.getElementById('studyCard');
    // reset flip + type colour class
    wrap.classList.remove('flipped', 'fc-v', 'fc-g');
    wrap.classList.add(c.type === 'vocab' ? 'fc-v' : 'fc-g');
    // badge
    document.getElementById('cardBadge').textContent = c.badge;
    // front word – swap class for vocab vs gram size
    const wordEl = document.getElementById('cardWord');
    wordEl.className = c.type === 'vocab' ? 'fc-word' : 'fc-gword';
    wordEl.textContent = c.front;
    // back
    document.getElementById('cardReading').textContent = c.reading;
    document.getElementById('cardDef').textContent     = c.def;
    document.getElementById('cardEx').textContent      = c.ex;
    document.getElementById('cardExZh').textContent    = c.exZh || '';
    // counter
    document.getElementById('cardCounter').textContent = `第 ${idx + 1} / ${deck.length} 張`;
  }

  /* ── 翻牌（翻到背面時自動朗讀例句） ── */
  function flipCard() {
    const wrap = document.getElementById('studyCard');
    const toBack = !wrap.classList.contains('flipped');
    wrap.classList.toggle('flipped');
    if (toBack) speak(deck[idx].ex);
  }

  /* ── 上一張 ／ 下一張 ── */
  function nextCard() { idx = (idx + 1) % deck.length;              renderCard(); }
  function prevCard() { idx = (idx - 1 + deck.length) % deck.length; renderCard(); }

  /* ── 篩選 ── */
  function setFilter(f, btn) {
    document.querySelectorAll('#cardFilterRow .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if      (f === 'all')   deck = [...CARDS];
    else if (f === 'vocab') deck = CARDS.filter(c => c.type === 'vocab');
    else if (f === 'gram')  deck = CARDS.filter(c => c.type === 'gram');
    else if (f.startsWith('cat:')) { const cat = f.slice(4); deck = CARDS.filter(c => c.cat === cat); }
    else if (f === 'n5' || f === 'n4' || f === 'n3') { deck = CARDS.filter(c => c.jlpt === f && c.type === 'gram'); }
    idx = 0;
    renderCard();
  }

  /* ── 洗牌 ── */
  function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    idx = 0;
    renderCard();
  }

  /* ── 初始化 ── */
  (function() {
    document.getElementById('totalCount').textContent =
      document.getElementById('lessonSelect').options.length;
    renderCard();
  })();

/* ─────────────────────────────────────────
   全域函式掛到 window（供 HTML onclick 使用）
───────────────────────────────────────── */
window.switchLesson  = switchLesson;
window.switchView    = switchView;
window.setFilter     = setFilter;
window.flipCard      = flipCard;
window.nextCard      = nextCard;
window.prevCard      = prevCard;
window.shuffleDeck   = shuffleDeck;
window.speakFront    = speakFront;
window.speakBack     = speakBack;

function selectChoice(el, isCorrect) {
  const item = el.closest('.quiz-item');
  if (item.querySelector('.correct, .wrong')) return; // already answered
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    const correct = item.querySelector('[onclick*="true"]');
    if (correct) correct.classList.add('correct');
  }
  item.querySelector('.quiz-ans-block').classList.add('show');
}
window.selectChoice = selectChoice;
