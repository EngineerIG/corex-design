import type { Config } from 'tailwindcss';
import { tailwindPreset } from '@smcore/corex-design/tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindPreset],
  // Only for demo
  safelist: [
    'animate-fadeIn',
    'animate-fadeOut',
    'animate-slideInUp',
    'animate-slideInDown',
    'animate-slideInLeft',
    'animate-slideInRight',
    'animate-scaleIn',
    'animate-scaleOut',
    'animate-spin',
    'animate-ping',
    'animate-pulse',
    'animate-bounce',
    'animate-shake',
  ],
} satisfies Config;
