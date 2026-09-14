export function WaveDivider({ className = "text-white/60" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1 py-3 ${className}`} aria-hidden="true">
      <svg
        width="68"
        height="14"
        viewBox="0 0 68 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-3 opacity-80"
      >
        <path
          d="M2 7C5.5 3 9.5 3 13 7C16.5 11 20.5 11 24 7C27.5 3 31.5 3 35 7C38.5 11 42.5 11 46 7C49.5 3 53.5 3 57 7C60.5 11 64.5 11 66 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 9C9.5 5 13.5 5 17 9C20.5 13 24.5 13 28 9C31.5 5 35.5 5 39 9C42.5 13 46.5 13 50 9C53.5 5 57.5 5 61 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
