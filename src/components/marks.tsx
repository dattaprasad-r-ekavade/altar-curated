export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg className={`sprig ${className}`} viewBox="0 0 40 96" aria-hidden="true" focusable="false">
      <path d="M20 94 C19 70 21 44 20 14" />
      <path d="M20 78 C12 76 7 70 5 62 C13 63 18 69 20 78 Z" />
      <path d="M20 64 C28 62 33 56 35 48 C27 49 22 55 20 64 Z" />
      <path d="M20 48 C13 46 9 41 7 34 C14 35 18 40 20 48 Z" />
      <path d="M20 34 C26 32 30 28 31 22 C25 23 21 27 20 34 Z" />
      <circle cx="20" cy="10" r="3.2" />
    </svg>
  );
}

export function AltarArch({ className = "" }: { className?: string }) {
  return (
    <svg className={`altar-arch ${className}`} viewBox="0 0 220 300" aria-hidden="true" focusable="false">
      <path d="M14 296 V112 A96 96 0 0 1 206 112 V296" />
      <path className="faint" d="M34 296 V116 A76 76 0 0 1 186 116 V296" />
      <path className="faint" d="M4 296 H216" />
      <g className="altar-sprig">
        <path d="M110 262 C108 214 112 170 110 118" />
        <path d="M110 236 C94 232 85 220 81 204 C97 206 107 218 110 236 Z" />
        <path d="M110 208 C126 204 135 192 139 176 C123 178 113 190 110 208 Z" />
        <path d="M110 180 C96 176 88 166 85 152 C99 154 108 164 110 180 Z" />
        <path d="M110 154 C122 150 129 142 131 130 C119 132 112 140 110 154 Z" />
      </g>
      <circle className="altar-bud" cx="110" cy="108" r="5" />
      <path className="faint" d="M84 262 H136" />
    </svg>
  );
}
