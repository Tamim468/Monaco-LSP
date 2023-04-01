import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      vscode: '@codingame/monaco-languageclient/lib/vscode-compatibility',
    },
  },
})
