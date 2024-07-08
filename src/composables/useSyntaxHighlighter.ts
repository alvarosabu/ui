import { createCssVariablesTheme } from 'shiki/core'
import { createHighlighter } from 'shiki'

// Create a custom CSS variables theme, the following are the default values
export const asShikiTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

export const highlighter = await createHighlighter({
  themes: [asShikiTheme],
  langs: ['javascript', 'typescript', 'html', 'json', 'bash', 'css', 'xml', 'yaml', 'markdown'],
})

export async function useSyntaxHighlighter() {
  return {
    highlighter,
  }
}
