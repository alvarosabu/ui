import type { HighlighterGeneric } from 'shiki/core'
import { createCssVariablesTheme } from 'shiki/core'
import type { BundledLanguage, BundledTheme } from 'shiki'
import { createHighlighter } from 'shiki'

// Create a custom CSS variables theme, the following are the default values
export const asShikiTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

// Promise to create the highlighter
let highlighterPromise: Promise<HighlighterGeneric<BundledLanguage, BundledTheme>>

function getHighlighter(): Promise<HighlighterGeneric<BundledLanguage, BundledTheme>> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [asShikiTheme],
      langs: ['javascript', 'typescript', 'html', 'json', 'bash', 'css', 'xml', 'yaml', 'markdown'],
    })
  }
  return highlighterPromise
}

export async function useSyntaxHighlighter(): Promise<{ highlighter: HighlighterGeneric<BundledLanguage, BundledTheme> }> {
  const highlighter = await getHighlighter()
  return {
    highlighter,
  }
}
