/**
 * Generate Fonts CSS
 * ==================
 * This script reads the fonts configuration from design.config.ts
 * and generates @font-face declarations in src/css/fonts.css
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import type { DesignConfig, FontsConfig, FontFamilyDefinition } from '../src/types/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadConfig(): Promise<DesignConfig> {
  const configPath = path.resolve(__dirname, '../design.config.ts');
  const configUrl = new URL(`file:///${configPath.replace(/\\/g, '/')}`).href;
  const config = await import(configUrl);
  return config.default;
}

function generateFontFace(
  family: FontFamilyDefinition,
  style: 'normal' | 'italic',
  fileName: string,
  formats: string[]
): string {
  const fontName = family.name;
  const isVariable = family.variable ?? false;
  const weights = family.weights ?? [400, 400];

  // Generate src with configured formats
  const baseName = fileName.replace(/\.(ttf|woff2?)$/i, '');
  const sources: string[] = [];

  // Only add formats specified in config
  if (formats.includes('woff2')) {
    sources.push(`url('../fonts/${baseName}.woff2') format('woff2')`);
  }
  if (formats.includes('ttf')) {
    sources.push(`url('../fonts/${baseName}.ttf') format('truetype')`);
  }

  const weightValue = isVariable ? `${weights[0]} ${weights[1]}` : String(weights[0]);

  return `@font-face {
  font-family: '${fontName}';
  src: ${sources.join(',\n       ')};
  font-weight: ${weightValue};
  font-style: ${style};
  font-display: swap;
}`;
}

async function generateFontsCSS(config: DesignConfig): Promise<void> {
  const fonts = config.fonts;

  if (!fonts) {
    console.log('⚠ No fonts configuration found in design.config.ts');
    return;
  }

  let content = `/**
 * Font Face Declarations
 * Auto-generated from design.config.ts
 *
 * Import this file to load custom fonts:
 * import '@smcore/corex-design/css/fonts';
 */

`;

  for (const [key, family] of Object.entries(fonts.families)) {
    content += `/* ${family.name} (${key}) */\n`;

    // Generate normal style
    if (family.files.normal) {
      content += generateFontFace(family, 'normal', family.files.normal, fonts.formats);
      content += '\n\n';
    }

    // Generate italic style
    if (family.files.italic) {
      content += generateFontFace(family, 'italic', family.files.italic, fonts.formats);
      content += '\n\n';
    }
  }

  const outputPath = path.resolve(__dirname, '../src/css/fonts.css');
  await fs.writeFile(outputPath, content.trim() + '\n');
  console.log('✓ Generated: src/css/fonts.css');
}

async function main() {
  console.log('Generating font CSS...\n');

  try {
    const config = await loadConfig();
    await generateFontsCSS(config);
    console.log('\n✓ Font CSS generated successfully!');
  } catch (error) {
    console.error('Error generating fonts:', error);
    process.exit(1);
  }
}

main();
