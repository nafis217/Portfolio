import type { CSSProperties } from 'react';
import { motion } from 'motion/react';

const INK = '#131314';
const FONT = "'Fira Code', ui-monospace, monospace";
// Lets SVG shapes scale/rotate around their own centre (or a chosen edge).
const around = (origin: string): CSSProperties => ({ transformBox: 'fill-box', transformOrigin: origin });

interface ArtProps {
  soft: string;
  deep: string;
}

/* 1 — Order workflow: Created → Approved → Dispatched → Delivered → Paid */
function OrderFlowArt({ soft, deep }: ArtProps) {
  const stages = ['Created', 'Approved', 'Dispatched', 'Delivered', 'Paid'];
  const xs = [70, 185, 300, 415, 530];
  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" role="img" aria-label="Illustration of an order moving through approval, dispatch, delivery and payment">
      <rect x="40" y="34" width="250" height="110" rx="18" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      <rect x="62" y="58" width="90" height="10" rx="5" fill={INK} fillOpacity="0.14" />
      <rect x="62" y="82" width="200" height="8" rx="4" fill={INK} fillOpacity="0.08" />
      <rect x="62" y="102" width="150" height="8" rx="4" fill={INK} fillOpacity="0.08" />
      <rect x="226" y="54" width="42" height="20" rx="10" fill={soft} />

      <rect x="312" y="34" width="248" height="110" rx="18" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.rect
          key={i}
          x={336 + i * 36}
          y={70}
          width="20"
          height="58"
          rx="6"
          fill={i % 2 ? soft : deep}
          fillOpacity={i % 2 ? 1 : 0.85}
          style={around('bottom')}
          animate={{ scaleY: [0.35, 1, 0.55, 0.9, 0.35] }}
          transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}

      <line x1="70" y1="250" x2="530" y2="250" stroke={INK} strokeOpacity="0.14" strokeWidth="3" strokeLinecap="round" />
      <motion.line
        x1="70" y1="250" x2="530" y2="250" stroke={deep} strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', times: [0, 0.9, 1] }}
      />
      {xs.map((x, i) => (
        <g key={stages[i]}>
          <motion.circle
            cx={x} cy={250} r="22" fill={soft}
            style={around('center')}
            animate={{ scale: [1, 1.7, 1], opacity: [0.7, 0, 0] }}
            transition={{ duration: 1.3, delay: i * 1.2, repeat: Infinity, repeatDelay: 4.7 }}
          />
          <circle cx={x} cy={250} r="22" fill="#fff" stroke={INK} strokeWidth="1.6" />
          <circle cx={x} cy={250} r="8" fill={deep} />
          <text x={x} y={304} textAnchor="middle" fontSize="12" fontFamily={FONT} fill={INK} fillOpacity="0.72">{stages[i]}</text>
        </g>
      ))}
      <rect x="40" y="346" width="520" height="40" rx="20" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      <rect x="58" y="362" width="120" height="8" rx="4" fill={INK} fillOpacity="0.14" />
      <rect x="448" y="354" width="96" height="24" rx="12" fill={deep} />
    </svg>
  );
}

/* 2 — Freezer tracking: phone with a scanning QR frame */
const QR = ['1110111', '1010101', '1110111', '0001000', '1101101', '0110010', '1011101'];

function ScannerArt({ soft, deep }: ArtProps) {
  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" role="img" aria-label="Illustration of a phone scanning a QR code on a freezer">
      <rect x="205" y="22" width="190" height="376" rx="36" fill="#fff" stroke={INK} strokeWidth="2" />
      <rect x="270" y="36" width="60" height="9" rx="4.5" fill={INK} fillOpacity="0.85" />
      <rect x="228" y="68" width="144" height="144" rx="16" fill={soft} fillOpacity="0.55" />
      {QR.map((row, r) =>
        row.split('').map((cell, c) =>
          cell === '1' ? <rect key={`${r}-${c}`} x={246 + c * 15} y={86 + r * 15} width="11" height="11" rx="2" fill={INK} fillOpacity="0.88" /> : null,
        ),
      )}
      {[
        'M232 96 V76 H252', 'M368 96 V76 H348', 'M232 184 V204 H252', 'M368 184 V204 H348',
      ].map((d) => (
        <path key={d} d={d} fill="none" stroke={deep} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      <motion.rect
        x="238" y="86" width="124" height="3" rx="1.5" fill={deep}
        animate={{ y: [86, 192, 86] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <rect x="228" y="232" width="144" height="38" rx="12" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      <rect x="242" y="246" width="70" height="8" rx="4" fill={INK} fillOpacity="0.18" />
      <rect x="228" y="280" width="144" height="38" rx="12" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      <rect x="242" y="294" width="90" height="8" rx="4" fill={INK} fillOpacity="0.12" />
      <rect x="228" y="338" width="144" height="36" rx="18" fill={deep} />

      <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}>
        <rect x="36" y="110" width="140" height="38" rx="19" fill="#fff" stroke={INK} strokeOpacity="0.18" />
        <circle cx="58" cy="129" r="6" fill={deep} />
        <text x="72" y="133" fontSize="12" fontFamily={FONT} fill={INK}>Shop assigned</text>
      </motion.g>
      <motion.g animate={{ y: [0, 9, 0] }} transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
        <rect x="424" y="236" width="146" height="38" rx="19" fill="#fff" stroke={INK} strokeOpacity="0.18" />
        <circle cx="446" cy="255" r="6" fill={soft} stroke={deep} strokeWidth="1.5" />
        <text x="460" y="259" fontSize="12" fontFamily={FONT} fill={INK}>Transfer logged</text>
      </motion.g>
      <path d="M176 129 C 196 129, 196 140, 228 150" fill="none" stroke={INK} strokeOpacity="0.25" strokeDasharray="4 5" />
      <path d="M424 255 C 404 255, 400 252, 372 252" fill="none" stroke={INK} strokeOpacity="0.25" strokeDasharray="4 5" />
    </svg>
  );
}

/* 3 — Salon SaaS: booking calendar + live queue + POS */
const BOOKINGS = [
  { c: 0, r: 0, h: 1, fill: 0 }, { c: 1, r: 1, h: 2, fill: 1 }, { c: 2, r: 0, h: 1, fill: 1 },
  { c: 3, r: 2, h: 1, fill: 0 }, { c: 4, r: 1, h: 1, fill: 1 }, { c: 0, r: 3, h: 1, fill: 1 }, { c: 2, r: 3, h: 1, fill: 0 },
];

function SalonArt({ soft, deep }: ArtProps) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" role="img" aria-label="Illustration of a salon booking calendar, live queue and checkout">
      <rect x="30" y="24" width="388" height="290" rx="20" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      {days.map((d, i) => (
        <text key={d} x={72 + i * 68} y={56} fontSize="11" fontFamily={FONT} fill={INK} fillOpacity="0.55" textAnchor="middle">{d}</text>
      ))}
      {[0, 1, 2, 3, 4].map((r) => (
        <line key={r} x1="42" x2="406" y1={76 + r * 56} y2={76 + r * 56} stroke={INK} strokeOpacity="0.08" />
      ))}
      {BOOKINGS.map((b, i) => (
        <motion.rect
          key={i}
          x={44 + b.c * 68}
          y={82 + b.r * 56}
          width="56"
          height={b.h * 56 - 12}
          rx="10"
          fill={b.fill ? soft : deep}
          fillOpacity={b.fill ? 1 : 0.9}
          style={around('top')}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, times: [0, 0.12, 0.85, 1], repeat: Infinity, delay: i * 0.7, ease: 'easeOut' }}
        />
      ))}

      <rect x="436" y="24" width="134" height="290" rx="20" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      <text x="452" y="52" fontSize="11" fontFamily={FONT} fill={INK} fillOpacity="0.6">Live queue</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <motion.circle
            cx={462} cy={86 + i * 52} r="14"
            fill={i === 0 ? deep : soft}
            animate={i === 0 ? { scale: [1, 1.15, 1] } : { opacity: [1, 0.55, 1] }}
            style={around('center')}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
          />
          <rect x="486" y={78 + i * 52} width={i === 0 ? 66 : 54} height="8" rx="4" fill={INK} fillOpacity="0.2" />
          <rect x="486" y={94 + i * 52} width="38" height="6" rx="3" fill={INK} fillOpacity="0.1" />
        </g>
      ))}

      <rect x="30" y="334" width="540" height="62" rx="20" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      <rect x="54" y="358" width="110" height="10" rx="5" fill={INK} fillOpacity="0.16" />
      <rect x="54" y="376" width="70" height="7" rx="3.5" fill={INK} fillOpacity="0.1" />
      <motion.rect
        x="436" y="350" width="112" height="30" rx="15" fill={deep}
        style={around('center')}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
    </svg>
  );
}

/* 4 — Shopify storefront with a sliding cart drawer */
function StoreArt({ soft, deep }: ArtProps) {
  const tints = [soft, '#ece0b8', '#d3c9ea'];
  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" role="img" aria-label="Illustration of a storefront with product cards and a cart drawer">
      <defs>
        <clipPath id="store-frame"><rect x="30" y="24" width="540" height="372" rx="20" /></clipPath>
      </defs>
      <rect x="30" y="24" width="540" height="372" rx="20" fill="#fff" stroke={INK} strokeOpacity="0.16" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={56 + i * 18} cy={50} r="5" fill={INK} fillOpacity={0.12 + i * 0.06} />
      ))}
      <rect x="150" y="40" width="300" height="20" rx="10" fill={INK} fillOpacity="0.06" />
      <line x1="30" x2="570" y1="76" y2="76" stroke={INK} strokeOpacity="0.08" />

      {tints.map((tint, i) => (
        <g key={i}>
          <rect x={52 + i * 168} y="98" width="152" height="150" rx="14" fill={tint} />
          <motion.circle
            cx={128 + i * 168} cy={172} r={i === 1 ? 30 : 26}
            fill="#fff" fillOpacity="0.75"
            style={around('center')}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3.2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <rect x={52 + i * 168} y="262" width="104" height="9" rx="4.5" fill={INK} fillOpacity="0.2" />
          <rect x={52 + i * 168} y="280" width="64" height="8" rx="4" fill={INK} fillOpacity="0.1" />
          <rect x={52 + i * 168} y="302" width="62" height="24" rx="12" fill={deep} fillOpacity="0.92" />
        </g>
      ))}
      <rect x="52" y="346" width="496" height="30" rx="15" fill={INK} fillOpacity="0.05" />

      <g clipPath="url(#store-frame)">
        <motion.g
          initial={{ x: 220 }}
          animate={{ x: [220, 220, 0, 0, 220] }}
          transition={{ duration: 7.5, times: [0, 0.2, 0.34, 0.8, 0.94], repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="370" y="24" width="200" height="372" fill="#fff" stroke={INK} strokeOpacity="0.2" />
          <rect x="390" y="48" width="70" height="10" rx="5" fill={INK} fillOpacity="0.5" />
          {[0, 1].map((i) => (
            <g key={i}>
              <rect x="390" y={80 + i * 74} width="52" height="52" rx="10" fill={tints[i]} />
              <rect x="454" y={90 + i * 74} width="92" height="8" rx="4" fill={INK} fillOpacity="0.2" />
              <rect x="454" y={108 + i * 74} width="52" height="7" rx="3.5" fill={INK} fillOpacity="0.1" />
            </g>
          ))}
          <rect x="390" y="344" width="160" height="34" rx="17" fill={deep} />
        </motion.g>
      </g>
    </svg>
  );
}

/* 5 — AML Core: RACI responsibility matrix */
const RACI: (string | null)[][] = [
  ['R', 'A', null, 'I'], [null, 'R', 'A', 'C'], ['C', null, 'R', 'A'], ['A', 'I', null, 'R'], ['I', 'C', 'A', null],
];

function RaciArt({ soft, deep }: ArtProps) {
  const heads = ['R', 'A', 'C', 'I'];
  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" role="img" aria-label="Illustration of a RACI responsibility matrix">
      <rect x="30" y="24" width="540" height="372" rx="20" fill="#fff" stroke={INK} strokeOpacity="0.14" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={54 + i * 84} y="46" width="72" height="22" rx="11" fill={i === 0 ? INK : 'none'} fillOpacity={i === 0 ? 0.9 : 1} stroke={INK} strokeOpacity={i === 0 ? 0 : 0.2} />
      ))}
      {heads.map((h, i) => (
        <g key={h}>
          <circle cx={288 + i * 70} cy={112} r="17" fill={soft} />
          <text x={288 + i * 70} y={117} textAnchor="middle" fontSize="14" fontWeight="600" fontFamily={FONT} fill={deep}>{h}</text>
        </g>
      ))}
      <motion.rect
        x="48" y="128" width="504" height="44" rx="14" fill={soft} fillOpacity="0.55"
        animate={{ y: [128, 128, 176, 176, 224, 224, 272, 272, 320, 320, 128] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }}
      />
      {RACI.map((row, r) => (
        <g key={r}>
          <rect x="64" y={142 + r * 48} width={92 - (r % 3) * 12} height="9" rx="4.5" fill={INK} fillOpacity="0.22" />
          <rect x="64" y={158 + r * 48} width="56" height="7" rx="3.5" fill={INK} fillOpacity="0.1" />
          {row.map((cell, c) =>
            cell ? (
              <g key={c}>
                <circle cx={288 + c * 70} cy={150 + r * 48} r="15" fill={cell === 'A' ? deep : '#fff'} stroke={cell === 'A' ? deep : INK} strokeOpacity={cell === 'A' ? 1 : 0.25} />
                <text x={288 + c * 70} y={155 + r * 48} textAnchor="middle" fontSize="13" fontWeight="600" fontFamily={FONT} fill={cell === 'A' ? '#fff' : cell === 'R' ? deep : INK} fillOpacity={cell === 'C' || cell === 'I' ? 0.6 : 1}>{cell}</text>
              </g>
            ) : null,
          )}
        </g>
      ))}
    </svg>
  );
}

const ART: Record<string, (props: ArtProps) => React.ReactElement> = {
  'igloo-oms': OrderFlowArt,
  iglootrack: ScannerArt,
  'my-salon': SalonArt,
  'pink-fresh': StoreArt,
  'aml-core': RaciArt,
};

export function ProjectArt({ id, soft, deep }: { id: string } & ArtProps) {
  const Art = ART[id];
  return Art ? <Art soft={soft} deep={deep} /> : null;
}
