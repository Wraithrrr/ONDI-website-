export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for waves */}
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EE89E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2DBF6E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1A9B54" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2DBF6E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#178A4A" stopOpacity="0.4" />
          </linearGradient>

          {/* Glow filter for luminous effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Wave layers with flowing paths */}
        <g filter="url(#strongGlow)">
          <path
            d="M 0,400 Q 300,200 600,350 T 1200,300 L 1200,800 L 0,800 Z"
            fill="url(#waveGradient1)"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M 0,400 Q 300,200 600,350 T 1200,300 L 1200,800 L 0,800 Z;
                M 0,350 Q 300,250 600,300 T 1200,400 L 1200,800 L 0,800 Z;
                M 0,400 Q 300,200 600,350 T 1200,300 L 1200,800 L 0,800 Z
              "
            />
          </path>
        </g>

        <g filter="url(#glow)">
          <path
            d="M 0,500 Q 400,300 800,450 T 1200,400"
            stroke="url(#waveGradient1)"
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M 0,500 Q 400,300 800,450 T 1200,400;
                M 0,450 Q 400,350 800,400 T 1200,500;
                M 0,500 Q 400,300 800,450 T 1200,400
              "
            />
          </path>
        </g>

        <g filter="url(#glow)">
          <path
            d="M 0,550 Q 350,400 700,500 T 1200,450"
            stroke="url(#waveGradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              dur="18s"
              repeatCount="indefinite"
              values="
                M 0,550 Q 350,400 700,500 T 1200,450;
                M 0,500 Q 350,450 700,450 T 1200,550;
                M 0,550 Q 350,400 700,500 T 1200,450
              "
            />
          </path>
        </g>

        {/* Flowing line layers */}
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d={`M ${i * 100},${400 + i * 20} Q ${300 + i * 50},${300 + i * 15} ${600 + i * 40},${420 + i * 10} T ${1200 + i * 30},${380 + i * 15}`}
            stroke={i % 2 === 0 ? "url(#waveGradient1)" : "url(#waveGradient2)"}
            strokeWidth="1"
            fill="none"
            opacity={0.3 - i * 0.02}
            filter="url(#glow)"
          >
            <animate
              attributeName="d"
              dur={`${12 + i * 2}s`}
              repeatCount="indefinite"
              values={`
                M ${i * 100},${400 + i * 20} Q ${300 + i * 50},${300 + i * 15} ${600 + i * 40},${420 + i * 10} T ${1200 + i * 30},${380 + i * 15};
                M ${i * 100},${420 + i * 20} Q ${300 + i * 50},${350 + i * 15} ${600 + i * 40},${400 + i * 10} T ${1200 + i * 30},${420 + i * 15};
                M ${i * 100},${400 + i * 20} Q ${300 + i * 50},${300 + i * 15} ${600 + i * 40},${420 + i * 10} T ${1200 + i * 30},${380 + i * 15}
              `}
            />
          </path>
        ))}

        {/* Accent glow spots */}
        <circle cx="800" cy="400" r="150" fill="url(#waveGradient1)" opacity="0.1" filter="url(#strongGlow)">
          <animate attributeName="cy" dur="10s" repeatCount="indefinite" values="400;350;400" />
          <animate attributeName="r" dur="10s" repeatCount="indefinite" values="150;180;150" />
        </circle>

        <circle cx="300" cy="500" r="120" fill="url(#waveGradient2)" opacity="0.08" filter="url(#strongGlow)">
          <animate attributeName="cy" dur="12s" repeatCount="indefinite" values="500;450;500" />
          <animate attributeName="r" dur="12s" repeatCount="indefinite" values="120;150;120" />
        </circle>
      </svg>
    </div>
  );
}