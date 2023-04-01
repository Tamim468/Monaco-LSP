import { MonacoServices } from '@codingame/monaco-languageclient'
import * as monaco from 'monaco-editor-core'
import editorWorker from 'monaco-editor-core/esm/vs/editor/editor.worker?worker'
import { LineEndings, QuoteStyle } from 'stylua-wasm'
import { connectLanguageServer } from './connectLanguageServer'
import { registerFormatting } from './registerFormatting'
import { registerLanguage } from './registerLanguage'
    ; (self as any).MonacoEnvironment = {
        getWorker: () => new editorWorker(),
    }

MonacoServices.install(monaco)

// If you change the port, make sure to also change it for the server!
const port = 8080

registerLanguage()
registerFormatting({
    // Stylua's `ident_width` and `ident_type` will be set by monaco editor's
    // `tabSize` and `use_spaces`.
    column_width: 80,
    line_endings: LineEndings.Unix,
    quote_style: QuoteStyle.AutoPreferSingle,
    no_call_parentheses: false,
})

const protocol = location.protocol === 'https:' ? 'wss' : 'ws'
connectLanguageServer(`${protocol}://${location.hostname}:${port}`)

export { };

declare global {
    interface Window {
        editor: any;
    }
}

const editor = window.editor

window.editor = monaco.editor.create(
    document.querySelector('#editor-container')!,
    {
        model: monaco.editor.createModel(
            ``,
            'lua'
        ),
        theme: 'vs-dark',
        tabSize: 2,
        folding: true,
        dragAndDrop: true,
        links: true,
        minimap: {
            enabled: false,
        },
        scrollbar: {
            vertical: 'visible',
            horizontal: 'hidden'
        },
        showFoldingControls: "always",
        smoothScrolling: true,
        cursorBlinking: "smooth",
        cursorSmoothCaretAnimation: true,
    }
)

window.onresize = function () {
    window.editor.layout();
}

editor.getAction('editor.action.formatDocument').run()