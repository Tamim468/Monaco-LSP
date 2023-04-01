import { languages } from 'monaco-editor-core'
// @ts-ignore

export const registerLanguage = () => {
  languages.register({
    id: 'lua',
    extensions: ['.lua'],
    aliases: ['Lua', 'lua'],
  })
  languages.setMonarchTokensProvider('lua', {keywords: 'and break continue do else elseif end for function if in local not or repeat return then until while next'.split(' '),
  constants: 'true false nil'.split(' '),
  brackets: [
      { token: 'delimiter.bracket', open: '{', close: '}' },
      { token: 'delimiter.array', open: '[', close: ']' },
      { token: 'delimiter.parenthesis', open: '(', close: ')' },
  ],
  globals: [
      // basic
      'print', 'error', 'warn', 'require', 'game', 'assert',

      // raws
      'rawset', 'rawget', 'rawequal',

      // debug
      'getupvalue', 'debug.getupvalue',
      'getconstant', 'debug.getconstant',
      'setstack', 'debug.setstack',
      'getproto', 'debug.getproto',
      'getstack', 'debug.getstack',
      'getfunctionname', 'debug.getfunctionname',
      'profilebegin', 'debug.profilebegin',
      'getprotos', 'debug.getprotos',
      'traceback', 'debug.traceback',
      'getconstants', 'debug.getconstants',
      'getinfo', 'debug.getinfo',
      'setupvalue', 'debug.setupvalue',
      'setconstant', 'debug.setconstant',
      'profileend', 'debug.profileend',
      'getupvalues', 'debug.getupvalues',

      // table
      'table',
      'pack', 'table.pack',
      'move', 'table.move',
      'insert', 'table.insert',
      'getn', 'table.getn',
      'foreachi', 'table.foreachi',
      'maxn', 'table.maxn',
      'foreach', 'table.foreach',
      'concat', 'table.concat',
      'unpack', 'table.unpack',
      'find', 'table.find',
      'create', 'table.create',
      'sort', 'table.sort',
      'remove', 'table.remove',

      // bit
      'bit32',
      'bit32.band',
      'bit32.extract',
      'bit32.bor',
      'bit32.bnot',
      'bit32.arshift',
      'bit32.rshift',
      'bit32.rrotate',
      'bit32.replace',
      'bit32.lshift',
      'bit32.lrotate',
      'bit32.btest',
      'bit32.bxor',

      // math
      'math',
      'math.log',
      'math.ldexp',
      'math.rad',
      'math.cosh',
      'math.random',
      'math.frexp',
      'math.tanh',
      'math.floor',
      'math.max',
      'math.sqrt',
      'math.modf',
      'math.huge',
      'math.pow',
      'math.atan',
      'math.tan',
      'math.cos',
      'math.sign',
      'math.clamp',
      'math.log10',
      'math.noise',
      'math.acos',
      'math.abs',
      'math.pi',
      'math.sinh',
      'math.asin',
      'math.min',
      'math.deg',
      'math.fmod',
      'math.randomseed',
      'math.atan2',
      'math.ceil',
      'math.sin',
      'math.exp',

      // string
      'string',
      'string.sub',
      'string.split',
      'string.upper',
      'string.len',
      'string.find',
      'string.match',
      'string.char',
      'string.rep',
      'string.gmatch',
      'string.reverse',
      'string.byte',
      'string.format',
      'string.gsub',
      'string.lower',

  ],
  operators: [
      '+', '-', '*', '/', '%', '^', '#', '=',
      //';', ':', ',', '.', '..', '...', '+=', '-=', '*=', '/=', '..='
      '..', '...', '+=', '-=', '*=', '/=', '..='
  ],
  special_operators: [
      '==', '~=', '<=', '>=', '<', '>', '->'
  ],
  // we include these common regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%\#\.]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  // The main tokenizer for our languages
  tokenizer: {
      root: [
          // Functions and type annotations:
          [/(?=(function)(\s+[a-zA-Z_][a-zA-Z0-9_]*[\.:][a-zA-Z_][a-zA-Z0-9_]*)(\<.+\>)(\())/, '', '@function_decl'],
          [/(?=(function)(\s+[a-zA-Z_][a-zA-Z0-9_]*[\.:][a-zA-Z_][a-zA-Z0-9_]*\s*)(\())/, '', '@function_decl'],
          [/(?=(function)(\s+[a-zA-Z_][a-zA-Z0-9_]*)(\<.+\>)(\())/, '', '@function_decl'],
          [/(?=(function)(\s+[a-zA-Z_][a-zA-Z0-9_]*\s*)(\())/, '', '@function_decl'],
          [/(?=(function)(\s+[a-zA-Z_][a-zA-Z0-9_]*\s*)(\())/, '', '@function_decl'],
          [/(?=(function)(\())/, '', '@function_decl'],

          // identifiers and keywords
          [/(?<![^.]\.|:)\b(self)\b/, 'variable.language.self'],
          [/(?<![^.]\.|:)\b(workspace|game|script|plugin|shared|_G|_VERSION|math\.(pi|huge))\b|(?<![.])\.{3}(?!\.)/, 'constant.language'],
          [/(?<![^.]\.|:)\b(assert|collectgarbage|error|getfenv|getmetatable|ipairs|loadstring|next|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|tonumber|tostring|type|unpack|xpcall|typeof|wait|delay|settings|elapsedTime|tick|time|warn|spawn|newproxy|UserSettings)\b(?=\s*(?:[({\"']|\[\[))/, 'support.function'],
          [/(?<![^.]\.|:)\b(coroutine\.(create|resume|running|status|wrap|yield|isyieldable)|string\.(byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper|split|packsize|pack|unpack)|table\.(concat|insert|maxn|remove|sort|create|find|foreach|foreachi|getn|move|pack|unpack|clear)|math\.(abs|acos|asin|atan2?|ceil|cosh?|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pow|rad|random|randomseed|tointeger|type|ult|noise|clamp|sign|sinh?|sqrt|tanh?|round)|io\.(close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|os\.(clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\.(cpath|loaded|loadlib|path|preload|seeall)|debug\.(debug|[gs]etfenv|[gs]ethook|getinfo|[gs]etlocal|[gs]etmetatable|getregistry|[gs]etupvalue|traceback|profileend|profilebegin)|utf8\.(char|codes|codepoint|len|offset|graphemes|charpattern|nfcnormalize|nfdnormalize)|bit32\.(arshift|band|bnot|bor|btest|bxor|extract|lrotate|lshift|replace|rrotate|rshift))\b(?=\s*(?:[({\"']|\[\[))/, 'support.function.library'],
          [/\b(Axes|BrickColor|CFrame|Color3|ColorSequence|ColorSequenceKeypoint|DateTime|DockWidgetPluginGuiInfo|Faces|Instance|NumberRange|NumberSequence|NumberSequenceKeypoint|PathWaypoint|PhysicalProperties|Random|Ray|RaycastParams|Rect|Region3|Region3int16|TweenInfo|UDim|UDim2|Vector2|Vector2int16|Vector3|Vector3int16|Drawing|PD|task)\b/, 'support.type'],
          [/\b(local)\b/, 'keyword.local'],
          [/\b(and|break|continue|do|else|elseif|end|for|function|if|in|local|not|or|repeat|return|then|until|while|next)\b/, 'keyword'],

          [/\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?=\s*(?:[({\"']|\[\[))/, 'entity.name.function'],
          [/\b([A-Z_][A-Z0-9_]*)\b/, 'variable.other.constant'],

          // Enums:
          [/(Enum)(\.)(\w*)(\.)(\w*)/, ['variable.other.enummember.lua', '', 'variable.other.enummember.lua', '', 'variable.other.enummember.lua']],
          [/(Enum)(\.)(\w*)/, ['variable.other.enummember.lua', '', 'variable.other.enummember.lua']],

          // Type declarations:
          //[/(\bexport\b\s+)(?=(\btype\b\s+)([\w_]+)(<.+>)?(\s*=))/, 'keyword.control.export'],
          //[/(\btype\b\s+)([\w_]+)(<.+>)(\s*=)/, ['storage.type', 'support.type.alias', '', '']],
          //[/(\btype\b\s+)([\w_]+)(\s*=)/, ['storage.type', 'support.type.alias', '']],
          [/(?=\b(export|type)\b\s*[a-zA-Z_])/, '', '@type_decl'],

          [/[a-zA-Z_]\w*/, {
              cases: {
                  '@keywords': { token: 'keyword.$0' },
                  '@constants': { token: 'constants.$0' },
                  '@globals': { token: 'global' },
                  '@default': 'identifier'
              }
          }],

          // whitespace
          { include: '@whitespace' },

          // index
          [/(?=(\.+[a-zA-Z_][a-zA-Z0-9_]*))(?!(\.+[a-zA-Z_][a-zA-Z0-9_]*)\()/, '', '@index'],

          // keys
          //[/(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ['delimiter', '', 'key', '', 'delimiter']],
          //[/({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ['@brackets', '', 'key', '', 'delimiter']],

          // delimiters and operators
          [/\[([=]*)\[/, 'delimiter.longstring', '@longstring.$1'], // longstring first
          [/[{}()\[\]]/, '@brackets'],
          //[/\.\./, 'operator'],
          [/@symbols/, {
              cases: {
                  '@operators': 'operator',
                  '@special_operators': 'operator.special',
                  '@default': ''
              }
          }],
          // numbers
          [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
          [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
          [/0[bB][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.binary'],
          [/\d+?/, 'number'],
          // delimiter: after number because of .\d floats
          [/[;,.]/, 'delimiter'],
          // strings: recover on non-terminated strings
          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/'([^'\\]|\\.)*$/, 'string.invalid'],
          [/"/, 'string.delimeter', '@string."'],
          [/'/, 'string.delimeter', '@string.\''],
      ],

      // Safe symbols:
      index: [
          [/\.[^a-zA-Z_]/, '', '@pop'],
          [/[a-zA-Z_][a-zA-Z0-9_]*/, 'variable.property', '@pop'],
      ],

      // Tables & type tables:
      type_decl: [
          [/\s*export\s+/, 'keyword.control.export'],
          [/\s*type\s+/, 'storage.type'],
          [/\b[a-zA-Z_][a-zA-Z0-9_]*\b\s*/, 'entity.name.type.alias'],
          [/\</, 'punctuation.definition.typeparameters', '@type_group'],
          [/\s*=\s*{/, '@rematch', '@table_type_elements_popall'],
          [/./, '', '@pop'], // Dip if a character is untracked
      ],
      table_type_elements_popall: [
          [/(\s*=\s*)({)/, ['keyword.operator', 'punctuation.definition.block']], // Consume ' - {' character

          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/'([^'\\]|\\.)*$/, 'string.invalid'],
          [/"/, 'string.delimeter', '@string."'],
          [/'/, 'string.delimeter', '@string.\''],

          [/[\[\]]/, 'punctuation.definition.block'],
          [/[a-zA-Z_][a-zA-Z0-9_]*/, 'variable.object.property'],
          [/{/, 'punctuation.definition.block', '@table_type_elements'],

          [/: |\?: /, 'keyword.operator.typedef.annotation', '@type_name'],
          [/[,\;]/, 'punctuation.separator.table'],

          [/}/, 'punctuation.definition.block', '@popall'],
          { include: '@whitespace' },
      ],
      table_type_elements: [
          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/'([^'\\]|\\.)*$/, 'string.invalid'],
          [/"/, 'string.delimeter', '@string."'],
          [/'/, 'string.delimeter', '@string.\''],

          [/[\[\]]/, 'punctuation.definition.block'],
          [/[a-zA-Z_][a-zA-Z0-9_]*/, 'variable.object.property'],
          [/[\<\>]/, 'punctuation.definition.typeparameters'],
          [/{/, 'punctuation.definition.block', '@table_type_elements'],

          [/: |\?: /, 'keyword.operator.typedef.annotation', '@type_name'],
          [/[,\;]/, 'punctuation.separator.table'],

          [/}/, 'punctuation.definition.block', '@pop'],
          { include: '@whitespace' },
      ],

      // Functions & types:
      function_decl: [
          [/function/, 'keyword.control'],
          [/(\s+[a-zA-Z_][a-zA-Z0-9_]*)([\.:])([a-zA-Z_][a-zA-Z0-9_]*\s*)/, ['entity.name.function', 'punctuation.separator.parameter', 'entity.name.function']],
          [/\s+[a-zA-Z_][a-zA-Z0-9_]*\s*/, 'entity.name.function'],
          [/\</, 'punctuation.definition.typeparameters', '@type_group'],
          [/\(/, 'punctuation.definition.parameters', '@function_params'],
          [/\)/, 'punctuation.definition.parameters', '@pop'],
      ],
      type_operators: [
          [/(\~|\-\>)/, 'operator.type'],
          [/[&|?]/, 'punctuation.definition.parameters'],
          [/\.\.\./, 'variable.parameter.variadic'],
      ],
      type_group: [
          [/[([]/, 'punctuation.definition.parameters', '@type_group'],
          [/[{]/, 'punctuation.definition.block', '@table_type_elements'], // { exclusive for type tables
          [/[\<]/, 'punctuation.definition.typeparameters', '@type_group'],
          [/[a-zA-Z_][a-zA-Z0-9_]*/, 'support.type'],
          //[/\.\.\./, 'variable.parameter.variadic'],
          //[/[&|?]/, 'punctuation.definition.parameters'],
          { include: '@type_operators' },
          [/,/, 'punctuation'],
          [/[>]/, 'punctuation.definition.typeparameters', '@pop'],
          [/[)\]}]/, 'punctuation.definition.parameters', '@pop'],
      ],
      type_name: [
          [/\[,/, 'punctuation.definition.parameters', '@pop'],
          [/(\(|\[[^\,])/, 'punctuation.definition.parameters', '@type_group'],
          //[/[\<]/, 'punctuation.definition.typeparameters', '@type_group'],
          [/[{]/, 'punctuation.definition.block', '@table_type_elements'], // { exclusive for type tables
          [/[a-zA-Z_][a-zA-Z0-9_]*/, 'support.type'],
          //[/\.\.\./, 'variable.parameter.variadic'],
          //[/[&|?]/, 'punctuation.definition.parameters'],
          [/[\<\>]/, 'punctuation.definition.typeparameters'],
          //[/->/, 'operator.returns'],
          //[/[>]/, 'punctuation.definition.typeparameters', '@pop'],
          { include: '@type_operators' },
          [/(?=[)\]},;])/, 'punctuation.definition.parameters', '@pop'],
      ],
      function_params: [
          [/[([\]]/, 'punctuation.definition.parameters'],
          [/\.\.\./, 'variable.parameter.variadic'],
          [/[a-zA-Z_][a-zA-Z0-9_]*/, 'variable.parameter.function'],
          [/: |\?: /, 'keyword.operator.type.annotation', '@type_name'],
          [/,/, 'punctuation.separator.arguments'],
          [/(?=\))/, '', '@pop'],
      ],

      whitespace: [
          [/[ \t\r\n]+/, ''],
          [/--\[([=]*)\[/, 'comment', '@comment.$1'],
          [/--.*$/, 'comment'],
      ],
      comment: [
          [/(?=(\@\w+)((\[\w+\])?\s*)[\{])/, '', '@comment_highlight'],
          [/(\@)(\w+\s*)/, ['operator', 'comment.highlight.descriptor']],
          [/\t+\# \w.+/, 'comment.highlight.title'],
          [/\]([=]*)\]/, {
              cases: {
                  '$1==$S2': { token: 'comment', next: '@pop' },
                  '@default': 'comment'
              }
          }],
          [/./, 'comment'],
      ],
      comment_highlight: [
          [/(\@)(\w+\s*)/, ['operator', 'comment.highlight.descriptor']],
          [/(\[)(\w+)(\]\s*)/, ['comment.delimiter.modifier', 'comment.highlight.modifier', 'comment.delimiter.modifier']],
          [/\{/, 'punctuation.definition.parameters', '@type_group'],
          [/(([^\t]| )[a-z][a-zA-Z0-9_]*)/, 'comment.highlight.name', '@pop'],
          [/./, '@rematch', '@pop'],
      ],
      longstring: [
          [/[^\]]+/, 'longstring'],
          [/\]([=]*)\]/, {
              cases: {
                  '$1==$S2': { token: 'delimiter.longstring', next: '@pop' },
                  '@default': 'delimiter.longstring'
              }
          }],
          [/./, 'longstring']
      ],
      string: [
          [/[^\\"']+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/["']/, {
              cases: {
                  '$#==$S2': { token: 'string.delimeter', next: '@pop' },
                  '@default': 'string'
              }
          }]
      ],
  },
});
  languages.setLanguageConfiguration('lua', {comments: {
    lineComment: '--',
    blockComment: ['--[[', ']]'],
},
brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
    ['do', 'end'],
    ['then', 'end']
],
autoClosingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"', close: '"' },
    { open: '\'', close: '\'' },
],
surroundingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"', close: '"' },
    { open: '\'', close: '\'' },
],
folding: {
    markers: {
        start: new RegExp("^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))"),
        end: new RegExp("^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))")
    }
}})
}