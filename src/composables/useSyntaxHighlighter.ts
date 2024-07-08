import { createCssVariablesTheme } from 'shiki/core'
import { createHighlighter } from 'shiki'

// Create a custom CSS variables theme, the following are the default values
export const asShikiTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

// Promise to create the highlighter
let highlighterPromise: Promise<unknown>

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [asShikiTheme],
      langs: ['javascript', 'typescript', 'html', 'json', 'bash', 'css', 'xml', 'yaml', 'markdown'],
    })
  }
  return highlighterPromise
}

export async function useSyntaxHighlighter() {
  const highlighter = await getHighlighter()
  return {
    highlighter,
  }
}
