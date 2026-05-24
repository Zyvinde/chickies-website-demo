@import 'tailwindcss';
@import 'tw-animate-css';

:root {
  /* Black and Red Theme */
  --surface: #1a1a1a;
  --surface-dim: #0d0d0d;
  --surface-bright: #2a2a2a;
  --surface-container-lowest: #0a0a0a;
  --surface-container-low: #151515;
  --surface-container: #1a1a1a;
  --surface-container-high: #242424;
  --surface-container-highest: #2e2e2e;
  --on-surface: #ffffff;
  --on-surface-variant: #d0d0d0;
  --inverse-surface: #f5f5f5;
  --inverse-on-surface: #1a1a1a;
  --outline: #666666;
  --outline-variant: #444444;
  --surface-tint: #ff4444;
  --primary: #1a1a1a;
  --on-primary: #ffffff;
  --primary-container: #2a2a2a;
  --on-primary-container: #e0e0e0;
  --inverse-primary: #ffffff;
  --secondary: #666666;
  --on-secondary: #ffffff;
  --secondary-container: #333333;
  --on-secondary-container: #e0e0e0;
  --accent: #e63946;
  --on-accent: #ffffff;
  --accent-container: #ff6b6b;
  --on-accent-container: #ffffff;
  --border-primary: #ffffff;
}

@theme inline {
  --font-sans: var(--font-geist);
  --font-mono: var(--font-jetbrains);
}

@layer base {
  * {
    @apply border-current outline-offset-0;
  }
  
  body {
    @apply bg-black text-white;
  }

  /* Sharp corners everywhere */
  * {
    border-radius: 0 !important;
  }

  button, input, select, textarea, [role="button"] {
    border-radius: 0 !important;
  }

  img {
    border-radius: 0 !important;
  }
}

/* Heavy Border Grid System */
@layer components {
  .border-grid {
    @apply border-2 border-white;
  }

  .border-grid-heavy {
    @apply border-4 border-white;
  }

  .border-bottom-heavy {
    @apply border-b-4 border-white;
  }

  /* Button styles - Red accent on black */
  .btn-primary {
    @apply bg-red-600 text-white border-2 border-red-600 px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm transition-all;
    box-shadow: 0 4px 0 rgba(220, 38, 38, 0.8);
  }

  .btn-primary:hover {
    transform: translate(-2px, -2px);
    box-shadow: 0 6px 0 rgba(220, 38, 38, 0.8);
    @apply bg-red-700;
  }

  .btn-primary:active {
    transform: translate(0, 2px);
    box-shadow: 0 2px 0 rgba(220, 38, 38, 0.8);
  }

  .btn-secondary {
    @apply bg-black text-white border-2 border-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm transition-all;
    box-shadow: 0 4px 0 rgba(255, 255, 255, 0.3);
  }

  .btn-secondary:hover {
    transform: translate(-2px, -2px);
    box-shadow: 0 6px 0 rgba(255, 255, 255, 0.3);
    @apply bg-gray-900;
  }

  .btn-secondary:active {
    transform: translate(0, 2px);
    box-shadow: 0 2px 0 rgba(255, 255, 255, 0.3);
  }

  .btn-accent {
    @apply bg-red-600 text-white border-2 border-red-600 px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm transition-all;
    box-shadow: 0 4px 0 rgba(220, 38, 38, 0.8);
  }

  .btn-accent:hover {
    transform: translate(-2px, -2px);
    box-shadow: 0 6px 0 rgba(220, 38, 38, 0.8);
    @apply bg-red-700;
  }

  .btn-accent:active {
    transform: translate(0, 2px);
    box-shadow: 0 2px 0 rgba(220, 38, 38, 0.8);
  }

  /* Data Point Labels */
  .data-point {
    @apply border-t-2 border-white pt-3 mt-6;
  }

  .data-value {
    @apply text-4xl font-bold tracking-tight text-white;
  }

  .data-label {
    @apply text-xs uppercase tracking-[0.1em] font-bold text-gray-400;
  }

  /* Bento Grid */
  .bento-grid {
    @apply grid gap-0;
  }

  .bento-card {
    @apply border-2 border-white;
  }
}
