This fork has some minor fixes that include:

- Add missing devDependancy `ts-node`
- Rather than a single luau-lsp.exe, now includes binaries for each target platform in a bin folder (osx, win64, linux-arm64, linux-x86_64)

Make sure you change to using the correct binary for your platform in [`/server/src/launch.ts`](/server/src/launch.ts)

# Monaco-LSP

Featuring a monaco editor with language client (https://github.com/TypeFox/monaco-languageclient) which connects the editor to luau language server from johnnymorganz!

THANKS TO https://github.com/arnoson/monaco-lua-example! TYSM!
Only what's different is that there's even a epic new language server which is related to roblox along with intelisense.

# Instructions

Link: https://www.youtube.com/watch?v=8qQJucQwTCY
