import { useState, useEffect, useRef } from 'react';
import './App.css';
import mascot from './assets/mascot.png';
import mapImg from './assets/peta.jpg';
import { PLACES, MAP_W, MAP_H } from './places.js';

function Mascot({ style, alt }) {
  return <img src={mascot} alt={alt || 'Maskot Taman Pintar'} style={{ display: 'block', ...style }} />;
}

function Decorations() {
  return (
    <>
      <div className="deco" style={{ width: 120, height: 120, background: 'var(--yellow)', top: -30, right: -30, opacity: .35 }} />
      <div className="deco" style={{ width: 80, height: 80, background: 'var(--pink)', bottom: 40, left: -30, opacity: .3 }} />
      <div className="deco" style={{ width: 50, height: 50, background: 'var(--green)', top: '60%', right: 20, opacity: .25 }} />
      <span className="deco-star" style={{ top: '12%', left: '14%' }}>⭐</span>
      <span className="deco-star" style={{ top: '22%', right: '12%', animationDelay: '.6s' }}>✨</span>
      <span className="deco-star" style={{ bottom: '18%', left: '20%', animationDelay: '1.1s' }}>🌟</span>
    </>
  );
}

function MapView({ onRoomClick }) {
  const [hover, setHover] = useState(null);
  const pts = (poly) => poly.map((p) => p.join(',')).join(' ');
  const hint = hover
    ? hover.label
    : window.innerWidth < 600 ? 'Geser peta, lalu ketuk bangunannya' : 'Klik bangunan di peta untuk melihat detailnya';

  return (
    <div>
      <div className="map-hint">{hint}</div>
      <div className="map-scroll">
        <div className="map-wrap">
          <img className="map-img" src={mapImg} alt="Peta Taman Pintar Yogyakarta" />
          <svg className="map-svg" viewBox={`0 0 ${MAP_W} ${MAP_H}`}>
            {PLACES.map((pl) => (
              <polygon
                key={pl.id}
                className="hotspot"
                points={pts(pl.poly)}
                tabIndex={0}
                role="button"
                aria-label={pl.label}
                onClick={() => onRoomClick(pl)}
                onMouseEnter={() => setHover(pl)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(pl)}
                onBlur={() => setHover(null)}
                onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') onRoomClick(pl); }}
              />
            ))}
          </svg>
        </div>
      </div>
      <div className="map-legend">
        {PLACES.map((pl) => (
          <button key={pl.id} className="legend-chip" onClick={() => onRoomClick(pl)}>
            {pl.icon} {pl.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Tema Planetarium (antariksa) ---------- */
const STARS = Array.from({ length: 44 }, (_, i) => ({ x: (i * 37) % 100, y: (i * 61) % 100, s: 1 + (i % 3), d: (i % 7) * 0.3 }));

function Stars() {
  return STARS.map((st, i) => (
    <span key={i} className="star" style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s, animationDelay: `${st.d}s` }} />
  ));
}

function SpaceOverlay() {
  return (
    <div className="space-overlay space-bg">
      <Stars />
      <div className="space-planet">🪐</div>
      <div className="space-rocket">🚀</div>
      <div className="space-text">Menuju antariksa…</div>
    </div>
  );
}

function SpaceSky() {
  return (
    <>
      <Stars />
      <span className="space-float" style={{ top: '14%', right: '8%' }}>🪐</span>
      <span className="space-float" style={{ top: '42%', left: '6%', animationDelay: '1s' }}>🌙</span>
      <span className="space-float" style={{ bottom: '22%', right: '12%', animationDelay: '2s' }}>🚀</span>
    </>
  );
}

/* ---------- Tema Kampung Kerajinan (tenun/batik) ---------- */
const WEAVE_COLORS = ['#c9702f', '#e8a24a', '#a8551f'];

function CraftOverlay() {
  return (
    <div className="craft-overlay craft-bg">
      <span className="craft-emoji" style={{ top: '28%', left: '22%' }}>🧶</span>
      <span className="craft-emoji" style={{ top: '30%', right: '22%', animationDelay: '.1s' }}>🏺</span>
      <span className="craft-emoji" style={{ bottom: '28%', left: '24%', animationDelay: '.2s' }}>🎨</span>
      <span className="craft-emoji" style={{ bottom: '26%', right: '24%', animationDelay: '.3s' }}>🎋</span>
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className={`weave-bar ${i % 2 ? 'wr' : 'wl'}`}
          style={{ top: `${i * 12.5}%`, background: WEAVE_COLORS[i % 3], animationDelay: `${i * 0.04}s` }}
        />
      ))}
      <div className="craft-text">Menenun kerajinan…</div>
    </div>
  );
}

function CraftSky() {
  return (
    <>
      <span className="space-float" style={{ top: '14%', right: '8%' }}>🏺</span>
      <span className="space-float" style={{ top: '42%', left: '6%', animationDelay: '1s' }}>🧶</span>
      <span className="space-float" style={{ bottom: '22%', right: '12%', animationDelay: '2s' }}>🎋</span>
    </>
  );
}

/* ---------- Tema Gedung Oval (masa purba) ---------- */
function DinoOverlay() {
  return (
    <div className="dino-overlay dino-bg">
      <div className="dino-scene">
        <div className="dino-sun" />
        <span className="dino-comet">☄️</span>
        <span className="dino-volcano">🌋</span>
        <div className="dino-smoke">
          <i />
          <i style={{ animationDelay: '.5s' }} />
          <i style={{ animationDelay: '1s' }} />
        </div>
        <div className="dino-ground" />
        <span className="dino-plant" style={{ left: '3%', bottom: '17%', fontSize: '3.4rem' }}>🌴</span>
        <span className="dino-plant" style={{ left: '26%', bottom: '8%' }}>🌿</span>
        <span className="dino-plant" style={{ right: '30%', bottom: '10%' }}>🌿</span>
        <span className="dino-plant" style={{ right: '2%', bottom: '14%', fontSize: '3.4rem' }}>🌴</span>
        <span className="dino-sauro">🦕</span>
        <span className="dino-trex">🦖</span>
        <div className="dino-text">ROAAR!</div>
      </div>
    </div>
  );
}

function DinoSky() {
  return (
    <>
      <span className="space-float" style={{ top: '14%', right: '8%' }}>🦕</span>
      <span className="space-float" style={{ top: '44%', left: '5%', animationDelay: '1s' }}>🌴</span>
      <span className="space-float" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>🦖</span>
    </>
  );
}

function LoginScreen({ onGo }) {
  return (
    <div className="screen login-wrap">
      <Decorations />
      <div className="login-card">
        <div className="mark">
          <Mascot style={{ width: '74%', height: '74%', objectFit: 'contain' }} />
        </div>
        <h1>Halo, Sahabat Pintar!</h1>
        <p>Yuk tekan tombol di bawah buat mulai main dan belajar seru bareng kita!</p>
        <button className="go-btn" onClick={onGo}>
          Let's Go <span aria-hidden="true">🚀</span>
        </button>
      </div>
    </div>
  );
}

/* ---------- Tema Wahana Bahari (laut) ---------- */
function OceanOverlay() {
  return (
    <div className="ocean-overlay">
      <div className="ocean-sun" />
      <span className="ocean-cloud" style={{ top: '10%', left: '8%' }}>☁️</span>
      <span className="ocean-cloud" style={{ top: '20%', right: '6%', animationDelay: '.4s' }}>☁️</span>
      <span className="ocean-dolphin">🐬</span>
      <div className="ocean-water">
        <span className="ocean-fish" style={{ top: '26%', left: '22%' }}>🐠</span>
        <span className="ocean-fish" style={{ top: '52%', right: '18%', animationDelay: '.5s' }}>🐟</span>
        <span className="ocean-fish" style={{ top: '74%', left: '38%', animationDelay: '1s' }}>🐙</span>
        {Array.from({ length: 6 }, (_, i) => (
          <i key={i} className="ocean-bubble" style={{ left: `${12 + i * 15}%`, animationDelay: `${i * 0.25}s` }} />
        ))}
        <div className="ocean-text">Menyelam ke wahana bahari…</div>
      </div>
      <span className="ocean-boat">⛵</span>
    </div>
  );
}

function OceanSky() {
  return (
    <>
      <span className="space-float" style={{ top: '14%', right: '8%' }}>🐠</span>
      <span className="space-float" style={{ top: '44%', left: '5%', animationDelay: '1s' }}>🐚</span>
      <span className="space-float" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>⛵</span>
    </>
  );
}

/* ---------- Grid kegiatan dalam satu ruang + lembar penjelasan ---------- */
function ActGrid({ items, onPick }) {
  return (
    <div className="act-section">
      <h3>Kegiatan Seru ✨</h3>
      <div className="act-grid">
        {items.map((a) => (
          <button key={a.id} className="act-card" onClick={() => onPick(a)}>
            <img src={a.photo} alt={a.name} />
            <span className="act-name">{a.icon} {a.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ActSheet({ act, onClose }) {
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(ev) => ev.stopPropagation()} role="dialog" aria-label={act.name}>
        <button className="sheet-close" onClick={onClose} aria-label="Tutup">✕</button>
        <img className="sheet-img" src={act.photo} alt={act.name} />
        <h3>{act.icon} {act.name}</h3>
        <p>{act.desc}</p>
      </div>
    </div>
  );
}

/* ---------- Tema Gedung Kotak (teknologi) ---------- */
const BIN_COLS = Array.from({ length: 14 }, (_, c) => ({
  x: c * 7.5 + 2,
  d: (c % 5) * 0.15,
  s: Array.from({ length: 16 }, (_, r) => (c * 7 + r * 3) % 2).join('\n'),
}));

function TechOverlay() {
  return (
    <div className="tech-overlay tech-bg">
      <div className="tech-scene">
        {BIN_COLS.map((b, i) => (
          <div key={i} className="tech-bin" style={{ left: `${b.x}%`, animationDelay: `${b.d}s` }}>{b.s}</div>
        ))}
        <div className="tech-ring" />
        <span className="tech-bot">🤖</span>
        <span className="tech-chip" style={{ top: '24%', left: '18%' }}>💡</span>
        <span className="tech-chip" style={{ top: '26%', right: '18%', animationDelay: '.1s' }}>⚙️</span>
        <span className="tech-chip" style={{ bottom: '30%', left: '16%', animationDelay: '.2s' }}>💻</span>
        <span className="tech-chip" style={{ bottom: '28%', right: '16%', animationDelay: '.3s' }}>🔬</span>
        <div className="tech-bar"><i /></div>
        <div className="tech-text">Memuat teknologi…</div>
        <div className="tech-scan" />
      </div>
    </div>
  );
}

function TechSky() {
  return (
    <>
      <span className="space-float" style={{ top: '14%', right: '8%' }}>💡</span>
      <span className="space-float" style={{ top: '44%', left: '5%', animationDelay: '1s' }}>⚙️</span>
      <span className="space-float" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>🤖</span>
    </>
  );
}

function LoadingOverlay({ showMascot }) {
  return (
    <div className="loading-overlay">
      {showMascot && (
        <div className="loading-icon">
          <Mascot style={{ width: 96, height: 96, objectFit: 'contain' }} />
        </div>
      )}
      <div className="cloud-panel cloud-left" />
      <div className="cloud-panel cloud-right" />
    </div>
  );
}

function MascotPeek() {
  return (
    <>
      <div className="mascot-bubble">Hai! 👋</div>
      <img className="mascot-peek-img" src={mascot} alt="Maskot menyapa" />
    </>
  );
}

/* ---------- Tema PAUD Timur (dunia anak-anak) ---------- */
const KIDS_BALLOONS = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];

function KidsOverlay() {
  return (
    <div className="kids-overlay">
      <div className="kids-rainbow" />
      <span className="kids-cloud" style={{ top: '10%', left: '6%' }}>☁️</span>
      <span className="kids-cloud" style={{ top: '18%', right: '6%', animationDelay: '.5s' }}>☁️</span>
      {KIDS_BALLOONS.map((b, i) => (
        <span
          key={i}
          className="kids-balloon"
          style={{ left: `${6 + i * 14}%`, animationDelay: `${i * 0.12}s`, filter: `hue-rotate(${i * 50}deg)` }}
        >
          {b}
        </span>
      ))}
      <span className="kids-toy" style={{ bottom: '16%', left: '14%' }}>🧸</span>
      <span className="kids-toy" style={{ bottom: '18%', right: '14%', animationDelay: '.3s' }}>🎠</span>
      <span className="kids-twinkle" style={{ top: '34%', left: '18%' }}>⭐</span>
      <span className="kids-twinkle" style={{ top: '30%', right: '20%', animationDelay: '.4s' }}>✨</span>
      <div className="kids-center">
        <Mascot style={{ width: 96, height: 96, objectFit: 'contain' }} />
        <div className="kids-text">Ayo bermain bersama!</div>
      </div>
    </div>
  );
}

function KidsSky() {
  return (
    <>
      <span className="space-float" style={{ top: '12%', right: '7%' }}>🎈</span>
      <span className="space-float" style={{ top: '40%', left: '4%', animationDelay: '1s' }}>🧸</span>
      <span className="space-float" style={{ bottom: '20%', right: '9%', animationDelay: '2s' }}>🪁</span>
      <span className="space-float" style={{ bottom: '8%', left: '10%', animationDelay: '1.5s' }}>🌈</span>
    </>
  );
}

function PhotoGrid({ photos }) {
  const [open, setOpen] = useState(null);
  const go = (d) => setOpen((o) => (o + d + photos.length) % photos.length);
  return (
    <div className="kids-gallery-wrap">
      <div className={`kids-gallery${photos.length === 1 ? ' single' : ''}`}>
        {photos.map((src, i) => (
          <button
            key={i}
            className={`kids-tile kt${i % 4}`}
            style={{ animationDelay: `${i * 0.09}s` }}
            onClick={() => setOpen(i)}
            aria-label={`Foto ${i + 1}`}
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="sheet-backdrop kids-viewer" onClick={() => setOpen(null)}>
          <button className="sheet-close" onClick={() => setOpen(null)} aria-label="Tutup">✕</button>
          <button className="kids-nav kids-prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Sebelumnya">‹</button>
          <img className="kids-viewer-img" src={photos[open]} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="kids-nav kids-next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Berikutnya">›</button>
        </div>
      )}
    </div>
  );
}

/* ---------- Tema Taman Air Menari (air mancur menari) ---------- */
const JET_H = [38, 62, 84, 58, 92, 66, 44, 78, 54, 88, 48, 70];

function DanceJets({ count = JET_H.length, className = '' }) {
  return (
    <div className={`dance-jets ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <i
          key={i}
          className="dance-jet"
          style={{ left: `${(i + 0.5) * (100 / count)}%`, '--h': `${JET_H[i % JET_H.length]}%`, animationDelay: `${i * 0.11}s` }}
        />
      ))}
    </div>
  );
}

function DanceOverlay() {
  return (
    <div className="dance-overlay">
      <span className="dance-sun" />
      <span className="ocean-cloud" style={{ top: '9%', left: '8%' }}>☁️</span>
      <span className="ocean-cloud" style={{ top: '17%', right: '8%', animationDelay: '.5s' }}>☁️</span>
      <DanceJets />
      <span className="dance-drop" style={{ left: '22%' }}>💧</span>
      <span className="dance-drop" style={{ left: '48%', animationDelay: '.3s' }}>💦</span>
      <span className="dance-drop" style={{ left: '74%', animationDelay: '.6s' }}>💧</span>
      <div className="dance-floor" />
      <div className="dance-text">Air sedang menari…</div>
    </div>
  );
}

function DanceSky() {
  return (
    <>
      <DanceJets count={10} className="dance-jets-bg" />
      <span className="space-float" style={{ top: '13%', right: '7%' }}>💦</span>
      <span className="space-float" style={{ top: '42%', left: '4%', animationDelay: '1s' }}>💧</span>
      <span className="space-float" style={{ bottom: '24%', right: '9%', animationDelay: '2s' }}>🌊</span>
    </>
  );
}

/* ---------- Tema Wahana Lalu Lintas ---------- */
const TRAFFIC_VEHICLES = ['🚗', '🚌', '🛵', '🚲', '🚕', '🚓'];

function TrafficLight({ style }) {
  return (
    <div className="tl" style={style}>
      <i className="tl-r" /><i className="tl-y" /><i className="tl-g" />
    </div>
  );
}

function TrafficOverlay() {
  return (
    <div className="traffic-overlay">
      <span className="ocean-cloud" style={{ top: '8%', left: '8%' }}>☁️</span>
      <span className="ocean-cloud" style={{ top: '16%', right: '8%', animationDelay: '.5s' }}>☁️</span>
      <TrafficLight style={{ top: '26%', left: '50%', marginLeft: -22 }} />
      <div className="traffic-text">Ayo tertib berlalu lintas!</div>
      <div className="traffic-road">
        <div className="traffic-lane" />
        <div className="traffic-zebra" />
        {TRAFFIC_VEHICLES.map((v, i) => (
          <span key={i} className="traffic-car" style={{ bottom: `${i % 2 ? 18 : 52}%`, animationDelay: `${i * 0.28}s` }}>{v}</span>
        ))}
      </div>
    </div>
  );
}

function TrafficSky() {
  return (
    <>
      <TrafficLight style={{ position: 'absolute', top: '12%', right: '6%', transform: 'scale(.8)' }} />
      <span className="space-float" style={{ top: '42%', left: '4%', animationDelay: '1s' }}>🚸</span>
      <div className="traffic-strip">
        <div className="traffic-lane" />
        {TRAFFIC_VEHICLES.map((v, i) => (
          <span key={i} className="traffic-car small" style={{ animationDelay: `${i * 1.6}s`, animationDuration: '9s' }}>{v}</span>
        ))}
      </div>
    </>
  );
}

/* ---------- Tema PAUD Barat (balok warna-warni) ---------- */
const BLOCK_COLORS = ['#ff4d4d', '#ffcb2f', '#2f80ed', '#27ae60', '#ff8a3d', '#9b51e0'];
const BLOCK_ROWS = [5, 4, 3, 2];

function BlocksOverlay() {
  let n = 0;
  return (
    <div className="blocks-overlay">
      <span className="ocean-cloud" style={{ top: '8%', left: '8%' }}>☁️</span>
      <span className="ocean-cloud" style={{ top: '16%', right: '8%', animationDelay: '.5s' }}>☁️</span>
      <span className="blocks-fly" style={{ top: '24%', left: '-10%' }}>🦋</span>
      <span className="blocks-fly" style={{ top: '34%', left: '-10%', animationDelay: '.6s' }}>🦋</span>
      <div className="blocks-stack">
        {BLOCK_ROWS.map((cnt, r) => (
          <div key={r} className="blocks-row">
            {Array.from({ length: cnt }, (_, c) => {
              const k = n++;
              return <i key={c} className="blk" style={{ background: BLOCK_COLORS[k % 6], animationDelay: `${k * 0.09}s` }} />;
            })}
          </div>
        ))}
        <span className="blocks-star">⭐</span>
      </div>
      <div className="blocks-text">Ayo membangun dan bermain!</div>
    </div>
  );
}

function BlocksSky() {
  return (
    <>
      {BLOCK_COLORS.map((c, i) => (
        <i
          key={i}
          className="blk-float"
          style={{ background: c, top: `${10 + i * 14}%`, [i % 2 ? 'right' : 'left']: `${2 + (i % 3) * 3}%`, animationDelay: `${i * 0.5}s` }}
        />
      ))}
      <span className="space-float" style={{ top: '16%', right: '10%' }}>🦋</span>
      <span className="space-float" style={{ bottom: '16%', left: '8%', animationDelay: '1.4s' }}>🌈</span>
    </>
  );
}

/* ---------- Tema Zona Pengolahan Sampah (daur ulang) ---------- */
const RECYCLE_ITEMS = ['🥤', '🍾', '📰', '🥫', '📦', '🧴', '🥤', '🍾'];

function RecycleOverlay() {
  return (
    <div className="recycle-overlay">
      <span className="ocean-cloud" style={{ top: '8%', left: '8%' }}>☁️</span>
      <span className="ocean-cloud" style={{ top: '15%', right: '8%', animationDelay: '.5s' }}>☁️</span>
      <div className="recycle-loop">♻️</div>
      {RECYCLE_ITEMS.map((it, i) => (
        <span key={i} className="recycle-item" style={{ left: `${10 + i * 11}%`, animationDelay: `${i * 0.18}s` }}>{it}</span>
      ))}
      <div className="recycle-bin">🗑️</div>
      <div className="recycle-grass">
        {['🌱', '🌿', '🌱', '🌿', '🌱'].map((g, i) => (
          <span key={i} className="recycle-sprout" style={{ left: `${12 + i * 19}%`, animationDelay: `${1.1 + i * 0.12}s` }}>{g}</span>
        ))}
      </div>
      <div className="recycle-text">Pilah, olah, daur ulang!</div>
    </div>
  );
}

function RecycleSky() {
  return (
    <>
      <span className="recycle-spin" style={{ top: '12%', right: '6%' }}>♻️</span>
      <span className="recycle-spin" style={{ top: '48%', left: '3%', fontSize: '1.6rem', animationDirection: 'reverse' }}>♻️</span>
      <span className="recycle-spin" style={{ bottom: '14%', right: '9%', fontSize: '1.8rem' }}>♻️</span>
      {['🍃', '🍂', '🍃', '🌿'].map((l, i) => (
        <span key={i} className="recycle-leaf" style={{ left: `${12 + i * 24}%`, animationDelay: `${i * 1.6}s` }}>{l}</span>
      ))}
    </>
  );
}

/* ---------- Tema Perpustakaan dan Perfilman (buku) ---------- */
const BOOK_LETTERS = ['A', 'B', 'C', 'Ü', '1', '2', '3', 'Z'];

function BookOverlay() {
  return (
    <div className="book-overlay">
      <span className="ocean-cloud" style={{ top: '8%', left: '8%' }}>☁️</span>
      <span className="ocean-cloud" style={{ top: '15%', right: '8%', animationDelay: '.5s' }}>☁️</span>
      {BOOK_LETTERS.map((l, i) => (
        <span key={i} className="book-letter" style={{ left: `${22 + i * 8}%`, animationDelay: `${0.5 + i * 0.16}s`, color: BLOCK_COLORS[i % 6] }}>{l === 'Ü' ? 'D' : l}</span>
      ))}
      <div className="book-open">
        <div className="book-cover" />
        {[0, 1, 2, 3].map((p) => (
          <div key={p} className="book-page" style={{ animationDelay: `${0.2 + p * 0.28}s` }} />
        ))}
      </div>
      <span className="book-emoji" style={{ left: '10%', bottom: '12%' }}>📚</span>
      <span className="book-emoji" style={{ right: '10%', bottom: '14%', animationDelay: '.3s' }}>🎬</span>
      <div className="book-text">Ayo membaca dan menonton!</div>
    </div>
  );
}

function BookSky() {
  return (
    <>
      <span className="space-float" style={{ top: '12%', right: '7%' }}>📖</span>
      <span className="space-float" style={{ top: '44%', left: '4%', animationDelay: '1s' }}>✏️</span>
      <span className="space-float" style={{ bottom: '22%', right: '9%', animationDelay: '2s' }}>🔖</span>
      <div className="book-film"><i /></div>
    </>
  );
}

function RoomScreen({ room, onBack }) {
  const [act, setAct] = useState(null);
  const space = room.id === 'p10';
  const craft = room.id === 'p1';
  const dino = room.id === 'p3';
  const ocean = room.id === 'p7';
  const tech = room.id === 'p5';
  const kids = room.id === 'p9';
  const dance = room.id === 'p8';
  const traffic = room.id === 'p12';
  const blocks = room.id === 'p11';
  const recycle = room.id === 'p14';
  const book = room.id === 'p2';
  const theme = space ? ' space-screen space-bg' : craft ? ' craft-screen craft-bg' : dino ? ' dino-screen dino-bg' : ocean ? ' ocean-screen ocean-bg' : tech ? ' tech-screen tech-bg' : kids ? ' kids-screen kids-bg' : dance ? ' dance-screen dance-bg' : traffic ? ' traffic-screen traffic-bg' : blocks ? ' blocks-screen blocks-bg' : recycle ? ' recycle-screen recycle-bg' : book ? ' book-screen book-bg' : '';

  return (
    <div className={`screen${theme}`}>
      {space && <SpaceSky />}
      {craft && <CraftSky />}
      {dino && <DinoSky />}
      {ocean && <OceanSky />}
      {tech && <TechSky />}
      {kids && <KidsSky />}
      {dance && <DanceSky />}
      {traffic && <TrafficSky />}
      {blocks && <BlocksSky />}
      {recycle && <RecycleSky />}
      {book && <BookSky />}
      <div className="topbar">
        <button className="back-btn" onClick={onBack} aria-label="Kembali ke denah">⬅</button>
        <span className="brand">{room.icon} {room.label}</span>
        <span className="topbar-spacer" />
      </div>
      <div className="home-body">
        {!theme && <Decorations />}
        <div className="room-detail-card">
          <div className="room-detail-icon" style={{ background: room.fill }}>{room.icon}</div>
          <h2>{room.label}</h2>
          {room.photo && <img className="room-photo" src={room.photo} alt={room.label} />}
          <p className="sub">{room.desc}</p>
        </div>
        {room.gallery && <PhotoGrid photos={room.gallery} />}
        {room.activities && <ActGrid items={room.activities} onPick={setAct} />}
      </div>
      {act && <ActSheet act={act} onClose={() => setAct(null)} />}
    </div>
  );
}

const NOTE_FREQ = {
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00
};

const BEAT = 0.26; // tempo ceria & cepat ala lagu anak-anak

// melodi "Twinkle Twinkle Little Star" (lagu rakyat domain publik, bukan berhak cipta)
// format: [nada, lama-ketuk] — ketuk 2 = setengah not (lebih panjang)
const MELODY = [
  ['C5', 1], ['C5', 1], ['G5', 1], ['G5', 1], ['A5', 1], ['A5', 1], ['G5', 2],
  ['F5', 1], ['F5', 1], ['E5', 1], ['E5', 1], ['D5', 1], ['D5', 1], ['C5', 2],
  ['G5', 1], ['G5', 1], ['F5', 1], ['F5', 1], ['E5', 1], ['E5', 1], ['D5', 2],
  ['G5', 1], ['G5', 1], ['F5', 1], ['F5', 1], ['E5', 1], ['E5', 1], ['D5', 2],
  ['C5', 1], ['C5', 1], ['G5', 1], ['G5', 1], ['A5', 1], ['A5', 1], ['G5', 2],
  ['F5', 1], ['F5', 1], ['E5', 1], ['E5', 1], ['D5', 1], ['D5', 1], ['C5', 2],
  [null, 2]
];

// bunyi ala "kotak musik" mainan: nada utama + nada atas lembut, serangan cepat, staccato
function playMelodyNote(ctx, freq, startTime, activeDur) {
  if (!freq) return;
  [{ mult: 1, gain: 0.20, type: 'triangle' }, { mult: 2, gain: 0.06, type: 'sine' }].forEach(layer => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = layer.type;
    osc.frequency.value = freq * layer.mult;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(layer.gain, startTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + activeDur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + activeDur + 0.02);
  });
}

function useChildTune(isOn) {
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isOn) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    let step = 0;

    function scheduleNext() {
      const [noteName, beats] = MELODY[step % MELODY.length];
      const slotDur = beats * BEAT;
      const activeDur = slotDur * 0.7; // sisanya jadi jeda -> kesan "lompat-lompat" ceria
      playMelodyNote(ctx, NOTE_FREQ[noteName], ctx.currentTime, activeDur);
      step++;
      timerRef.current = setTimeout(scheduleNext, slotDur * 1000);
    }
    scheduleNext();

    return () => {
      clearTimeout(timerRef.current);
      ctx.close();
    };
  }, [isOn]);
}

function HomeScreen({ onLogout, onRoomClick }) {
  const [musicOn, setMusicOn] = useState(false);
  useChildTune(musicOn);

  return (
    <div className="screen">
      <div className="topbar">
        <span className="brand">🌿 Pintar Explore</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            className="music-btn"
            onClick={() => setMusicOn(m => !m)}
            title={musicOn ? 'Matikan musik' : 'Putar musik'}
            aria-pressed={musicOn}
          >
            {musicOn ? '🔊' : '🔈'}
          </button>
          <button
            className="avatar"
            style={{ border: 'none', cursor: 'pointer' }}
            onClick={onLogout}
            title="Keluar"
            aria-label="Keluar"
          >
            🚪
          </button>
        </div>
      </div>
      <div className="home-body">
        <Decorations />
        <h2>Denah Lokasi</h2>
        <p className="sub">Klik bangunan di peta buat lihat lebih lanjut!</p>
        <div className="plan-card">
          <MapView onRoomClick={onRoomClick} />
        </div>
      </div>
      <MascotPeek />
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('login'); // 'login' | 'transition' | 'home' | 'room'
  const [activeRoom, setActiveRoom] = useState(null);
  const [pending, setPending] = useState(null); // { page, room }

  function goTo(nextPage, room) {
    setPending({ page: nextPage, room: room || null });
    setPage('transition');
  }

  useEffect(() => {
    if (page === 'transition' && pending) {
      const t = setTimeout(() => {
        setActiveRoom(pending.room);
        setPage(pending.page);
        setPending(null);
      }, 1800);
      return () => clearTimeout(t);
    }
  }, [page, pending]);

  if (page === 'login') {
    return <LoginScreen onGo={() => goTo('home')} />;
  }

  if (page === 'transition') {
    const rid = pending && pending.room && pending.room.id;
    if (rid === 'p10') return <SpaceOverlay />;
    if (rid === 'p1') return <CraftOverlay />;
    if (rid === 'p3') return <DinoOverlay />;
    if (rid === 'p7') return <OceanOverlay />;
    if (rid === 'p5') return <TechOverlay />;
    if (rid === 'p9') return <KidsOverlay />;
    if (rid === 'p8') return <DanceOverlay />;
    if (rid === 'p12') return <TrafficOverlay />;
    if (rid === 'p11') return <BlocksOverlay />;
    if (rid === 'p14') return <RecycleOverlay />;
    if (rid === 'p2') return <BookOverlay />;
    return <LoadingOverlay showMascot={!(pending && pending.page === 'room')} />;
  }

  if (page === 'room' && activeRoom) {
    return <RoomScreen room={activeRoom} onBack={() => goTo('home')} />;
  }

  return (
    <HomeScreen
      onLogout={() => setPage('login')}
      onRoomClick={(room) => goTo('room', room)}
    />
  );
}
