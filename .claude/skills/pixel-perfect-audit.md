# Skill: Pixel-Perfect Visual Audit

## Description
Executes an automated visual audit comparing rendered pages against reference screenshots in `references/`.

## Steps
1. Navigate to target URL (`http://localhost:3000`, `?view=photos`, or `?view=photos&photo=22`) using a headless browser at 1920x1080 viewport.
2. Capture full-page and element-level screenshots.
3. Compare typography sizes, line heights, paddings, hex colors, and element alignment against reference screenshots.
4. Flag any deviations exceeding 2px or noticeable color/contrast discrepancies.
