import init, {
  format,
  Config,
  IndentType,
  LineEndings,
  OutputVerification,
  QuoteStyle,
} from 'stylua-wasm'
import wasm from 'stylua-wasm/stylua_wasm_bg.wasm?url'
import { languages } from 'monaco-editor-core'

let isInit = false

export interface ExtraFormattingConfig {
  column_width?: number
  line_endings?: LineEndings
  quote_style?: QuoteStyle
  no_call_parentheses?: false
}

export const registerFormatting = (config: ExtraFormattingConfig = {}) =>
  languages.registerDocumentRangeFormattingEditProvider('lua', {
    //see: https://github.com/JohnnyMorganz/StyLua/blob/master/stylua-vscode/src/extension.ts
    async provideDocumentRangeFormattingEdits(
      model,
      _range,
      options
    ): Promise<languages.TextEdit[]> {
      if (!isInit) {
        await init(wasm)
        isInit = true
      }

      // Always replace the whole model with our new formatted version (that is
      // what the stylua vscode extension does).
      const linesCount = model.getLineCount()
      const fullDocumentRange = {
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: linesCount,
        endColumn: model.getLinesContent()[linesCount - 1].length + 1,
      }

      const styluaConfig: Config = {
        ...config,
        indent_width: options.tabSize,
        indent_type: options.insertSpaces ? IndentType.Spaces : IndentType.Tabs,
      }

      const text = format(
        model.getValue(),
        styluaConfig,
        OutputVerification.Full
      )

      return [{ range: fullDocumentRange, text }]
    },
  })
