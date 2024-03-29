import type { Rule } from 'unocss'

export const rules: Rule[] = [
  [
    'text-bg-md',
    {
      'background-image': 'linear-gradient(to top, #99ffd580 54%, transparent 54%, transparent 100%)',
      'width': 'fit-content',
      'transition': 'all 400ms ease-in-out',
    },
  ],
  [
    'text-bg-sm',
    {
      'background-image': 'linear-gradient(to top, #99ffd580 30%, transparent 30%, transparent 100%)',
      'width': 'fit-content',
      'transition': 'all 400ms ease-in-out',
    },
  ],
  [/^line-height-(\d+)$/, ([, d]) => ({ 'line-height': `${Number.parseInt(d) * 0.25}` })],
]
