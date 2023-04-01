define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Function": {

			/**
			 * Closure:
			 */

			"hookfunction()": {
				"insertText": "hookfunction(${1:f}, ${2:hook})",
				"documentation": {
					value: [
						"```lua", "function hookfunction(f: function, hook: function))\n  -> original: function", "```",
						"",
						"Redirects calls to `f` with `hook` and returns the original function.",
					].join("\n")
				},
			},

			"iskrnlclosure()": {
				"insertText": "iskrnlclosure(${1:f})",
				"documentation": {
					value: [
						"```lua", "function iskrnlclosure(f: function)\n  -> boolean", "```",
						"",
						"Returns whether the closure was created by Krnl."
					].join("\n")
				},
			},

			"iscclosure()": {
				"insertText": "iscclosure(${1:f})",
				"documentation": {
					value: [
						"```lua", "function iscclosure(f: function)\n  -> boolean", "```",
						"",
						"Returns whether the closure is a CClosure."
					].join("\n")
				},
			},

			"islclosure()": {
				"insertText": "islclosure(${1:f})",
				"documentation": {
					value: [
						"```lua", "function islclosure(f: function)\n  -> boolean", "```",
						"",
						"Returns whether the closure is a LuaClosure."
					].join("\n")
				},
			},

			"newcclosure()": {
				"insertText": "newcclosure(${1:f})",
				"documentation": {
					value: [
						"```lua", "function newcclosure(f: function)\n  -> CClosure: function", "```",
						"",
						"Transforms a LuaClosure into a CClosure with error handling."
					].join("\n")
				},
			},

			/**
			 * Input:
			 */

			"keypress()": {
				"insertText": "keypress(${1:keyCode})",
				"documentation": {
					value: [
						"```lua", "function keypress(keyCode: KeyCode)", "```",
						"",
						"Virtually presses a key.",
					].join("\n")
				},
			},

			"keyrelease()": {
				"insertText": "keyrelease(${1:keyCode})",
				"documentation": {
					value: [
						"```lua", "function keyrelease(keyCode: KeyCode)", "```",
						"",
						"Virtually releases a key.",
					].join("\n")
				},
			},

			"mouse1click()": {
				"insertText": "mouse1click()",
				"documentation": {
					value: [
						"```lua", "function mouse1click()", "```",
						"",
						"Simulates a left-mouse button click.",
					].join("\n")
				},
			},

			"mouse1down()": {
				"insertText": "mouse1down()",
				"documentation": {
					value: [
						"```lua", "function mouse1down()", "```",
						"",
						"Virtually presses the left-mouse button.",
					].join("\n")
				},
			},

			"mouse1up()": {
				"insertText": "mouse1up()",
				"documentation": {
					value: [
						"```lua", "function mouse1up()", "```",
						"",
						"Virtually releases the left-mouse button.",
					].join("\n")
				},
			},

			"mouse2click()": {
				"insertText": "mouse2click()",
				"documentation": {
					value: [
						"```lua", "function mouse2click()", "```",
						"",
						"Simulates a right-mouse button click.",
					].join("\n")
				},
			},

			"mouse2down()": {
				"insertText": "mouse2down()",
				"documentation": {
					value: [
						"```lua", "function mouse2down()", "```",
						"",
						"Virtually presses the right-mouse button.",
					].join("\n")
				},
			},

			"mouse2up()": {
				"insertText": "mouse2up()",
				"documentation": {
					value: [
						"```lua", "function mouse2up()", "```",
						"",
						"Virtually releases the right-mouse button.",
					].join("\n")
				},
			},

			"isrbxactive()": {
				"insertText": "isrbxactive()",
				"documentation": {
					value: [
						"```lua", "function isrbxactive()\n  -> boolean", "```",
						"",
						"Returns whether the Roblox window is active.",
					].join("\n")
				},
			},

			"mousemoverel()": {
				"insertText": "mousemoverel(${1:deltaX}, ${2:deltaY})",
				"documentation": {
					value: [
						"```lua", "function mousemoverel(deltaX: number, deltaY: number)", "```",
						"",
						"Moves the cursor relative to it's current position.",
					].join("\n")
				},
			},

			"mousemoveabs()": {
				"insertText": "mousemoveabs(${1:X}, ${2:Y})",
				"documentation": {
					value: [
						"```lua", "function mousemoveabs(X: number, Y: number)", "```",
						"",
						"Moves the cursor to (X, Y).",
					].join("\n")
				},
			},

			"mousescroll()": {
				"insertText": "mousescroll(${1:distance})",
				"documentation": {
					value: [
						"```lua", "function mousescroll(distance: number)", "```",
						"",
						"Simulates a scroll of `distance` pixels.",
					].join("\n")
				},
			},

			/**
			 * Reflection:
			 */

			"setscriptable()": {
				"insertText": "setscriptable(${1:instance}, ${2:property}, ${3:scriptable})",
				"documentation": {
					value: [
						"```lua", "function setscriptable(instance: Instance, property: string, scriptable: boolean)", "```",
						"",
						"Flags a property of `instance` as scriptable.",
					].join("\n")
				},
			},

			"gethiddenproperty()": {
				"insertText": "gethiddenproperty(${1:instance}, ${2:property})",
				"documentation": {
					value: [
						"```lua", "function gethiddenproperty(instance: Instance, property: string)\n  -> any", "```",
						"",
						"Gets a property of `instance` regardless of the IsScriptable flag.",
					].join("\n")
				},
			},

			"sethiddenproperty()": {
				"insertText": "sethiddenproperty(${1:instance}, ${2:property}, ${3:value})",
				"documentation": {
					value: [
						"```lua", "function sethiddenproperty(instance: Instance, property: string, value: any)", "```",
						"",
						"Sets a property of `instance` to value regardless of the IsScriptable flag.",
					].join("\n")
				},
			},

			"getproperties()": {
				"insertText": "getproperties(${1:instance})",
				"documentation": {
					value: [
						"```lua", "function getproperties(instance: Instance)\n  -> Map<string, any>", "```",
						"",
						"Returns all properties of `instance`, including hidden properties.",
					].join("\n")
				},
			},

			"setsimulationradius()": {
				"insertText": "setsimulationradius(${1:radius})",
				"documentation": {
					value: [
						"```lua", "function setsimulationradius(radius: number)", "```",
						"",
						"Sets the LocalPlayer's SimulationRadius to `radius`.",
					].join("\n")
				},
			},

			"getspecialinfo()": {
				"insertText": "getspecialinfo(${1:instance})",
				"documentation": {
					value: [
						"```lua", "function getspecialinfo(instance: Instance)\n  -> Map<string, any>", "```",
						"",
						"Gets special properties of certain instances.",
						"",
						'```lua', 'instance: Instance\n   | "MeshPart"\n   | "UnionOperation"\n   | "Terrain"', '```',
					].join("\n")
				},
			},

			"fireclickdetector()": {
				"insertText": "fireclickdetector(${1:clickDetector})",
				"documentation": {
					value: [
						"```lua", "function fireclickdetector(clickDetector: ClickDetector, distance: number(0))", "```",
						"",
						"Sends a click signal for the ClickDetector.",
					].join("\n")
				},
			},

			"firetouchinterest()": {
				"insertText": "firetouchinterest(${1:part}, ${2:otherPart}, ${3:touchType})",
				"documentation": {
					value: [
						"```lua", "function firetouchinterest(part: Instance, otherPart: Instance, touchType: number)", "```",
						"",
						"Fires the Touched/TouchEnded event of otherPart and part based on touchType.",
						"",
						'```lua', 'touchType: number\n   | 0: Touch\n   | 1: TouchEnded', '```',
					].join("\n")
				},
			},

			"fireproximityprompt()": {
				"insertText": "fireproximityprompt(${1:proximityPrompt})",
				"documentation": {
					value: [
						"```lua", "function fireproximityprompt(proximityPrompt: ProximityPrompt)", "```",
						"",
						"Triggers the ProximityPrompt.",
					].join("\n")
				},
			},

			"getconnections()": {
				"insertText": "getconnections(${1:signal})",
				"documentation": {
					value: [
						"```lua", "function getconnections(signal: RBXScriptSignal)\n  -> Array<KrnlConnection>", "```",
						"",
						"Returns a list of connections for the given signal.",
						"",
						'```lua',
						'export type KrnlConnection = {',
						'\tFunction: function,',
						'\tEnable: (self) -> void,',
						'\tDisable: (self) -> void,',
						'\tFire: (self, ...any) -> void,',
						'}',
						'```',
					].join("\n")
				},
			},

			/**
			 * Script:
			 */

			"getscriptclosure()": {
				"insertText": "getscriptclosure(${1:object})",
				"documentation": {
					value: [
						"```lua", "function getscriptclosure(script: LocalScript | ModuleScript)\n  -> function", "```",
						"",
						"Creates a LuaClosure for the given script.",
					].join("\n")
				},
			},

			"decompile()": {
				"insertText": "decompile(${1:object})",
				"documentation": {
					value: [
						"```lua", "function decompile(script: LocalScript | ModuleScript)\n  -> string", "```",
						"",
						"Decompiles a script and returns a representation of the source.",
					].join("\n")
				},
			},

			"getcallingscript()": {
				"insertText": "getcallingscript()",
				"documentation": {
					value: [
						"```lua", "function getcallingscript()\n  -> LocalScript | ModuleScript", "```",
						"",
						"Gets the script that called the current function.",
					].join("\n")
				},
			},

			"getsenv()": {
				"insertText": "getsenv(${1:object})",
				"documentation": {
					value: [
						"```lua", "function getsenv(script: LocalScript | ModuleScript)\n  -> Map<any, any>", "```",
						"",
						"Returns a script's global environment.",
					].join("\n")
				},
			},

			"getloadedmodules()": {
				"insertText": "getloadedmodules()",
				"documentation": {
					value: [
						"```lua", "function getloadedmodules()\n  -> Array<ModuleScript>", "```",
						"",
						"Returns an array populated with all loaded ModuleScripts.",
					].join("\n")
				},
			},

			"getscripts()": {
				"insertText": "getscripts()",
				"documentation": {
					value: [
						"```lua", "function getscripts()\n  -> Array<LocalScript | ModuleScript>", "```",
						"",
						"Returns an array populated with all existing scripts.",
					].join("\n")
				},
			},

			/**
			 * Console:
			 */

			"rconsolename()": {
				"insertText": "rconsolename(${1:name})",
				"documentation": {
					value: [
						"```lua", "function rconsolename(name: string)", "```",
						"",
						"Creates a Windows console using the name.",
					].join("\n")
				},
			},

			"rconsoleprint()": {
				"insertText": "rconsoleprint(${1:data})",
				"documentation": {
					value: [
						"```lua", "function rconsoleprint(data: string)", "```",
						"",
						"Outputs data to the Windows console.",
					].join("\n")
				},
			},

			"rconsoleinfo()": {
				"insertText": "rconsoleinfo(${1:data})",
				"documentation": {
					value: [
						"```lua", "function rconsoleinfo(data: string)", "```",
						"",
						"Outputs data to the console preceded with [INFO].",
					].join("\n")
				},
			},

			"rconsolewarn()": {
				"insertText": "rconsolewarn(${1:data})",
				"documentation": {
					value: [
						"```lua", "function rconsolewarn(data: string)", "```",
						"",
						"Outputs data to the console preceded with [WARNING].",
					].join("\n")
				},
			},

			"rconsoleerr()": {
				"insertText": "rconsoleerr(${1:data})",
				"documentation": {
					value: [
						"```lua", "function rconsoleerr(data: string)", "```",
						"",
						"Outputs data to the console preceded with [ERROR].",
					].join("\n")
				},
			},

			"rconsoleclose()": {
				"insertText": "rconsoleclose()",
				"documentation": {
					value: [
						"```lua", "function rconsolecloses()", "```",
						"",
						"Closes the Windows console if it is open.",
					].join("\n")
				},
			},

			"rconsoleclear()": {
				"insertText": "rconsoleclear()",
				"documentation": {
					value: [
						"```lua", "function rconsoleclear()", "```",
						"",
						"Clears the Windows console.",
					].join("\n")
				},
			},

			"rconsoleinput()": {
				"insertText": "rconsoleinput()",
				"documentation": {
					value: [
						"```lua", "function rconsoleinput()\n  -> string", "```",
						"",
						"Reads input from the Windows console.",
					].join("\n")
				},
			},

			"messagebox()": {
				"insertText": "messagebox(${1:text}, ${2:caption}, ${3:flags})",
				"documentation": {
					value: [
						"```lua", "function messagebox(text: string, caption: string, flags: number)\n  -> MsgBoxResult: number", "```",
						"",
						"Prompts a MessageBox with the given text, caption and flags, and returns the result.",
						"",
						'```lua',
						'MsgBoxResult: number',
						'   | 1: OK',
						'   | 2: CANCEL',
						'   | 3: ABORT',
						'   | 4: RETRY',
						'   | 5: IGNORE',
						'   | 6: YES',
						'   | 7: NO',
						'   | 10: TRYAGAIN',
						'   | 11: CONTINUE',
						'```',
					].join("\n")
				},
			},

			/**
			 * Network:
			 */

			"getnetworkmode()": {
				"insertText": "getnetworkmode()",
				"documentation": {
					value: [
						"```lua", "function getnetworkmode()\n  -> number", "```",
						"",
						"Returns the current network mode.", // TODO: Specify network modes
					].join("\n")
				},
			},

			"setnetworkmode()": {
				"insertText": "setnetworkmode(${1:mode})",
				"documentation": {
					value: [
						"```lua", "function setnetworkmode(mode: number)", "```",
						"",
						"Sets the current network mode.",
					].join("\n")
				},
			},

			"request()": {
				"insertText": "request(${1:data})",
				"documentation": {
					value: [
						"```lua", "function request(requestOptions: RequestOptions)\n  -> Response", "```",
						"",
						"Sends an HTTP request using a dictionary to specify the request data, such as the target URL, method, headers and request body data. It returns a dictionary that describes the response data received.",
						'',
						'```lua',
						'export type RequestOptions = {',
						'\tUrl: string,',
						'\tMethod: string?,',
						'\tHeaders: Map<string, string>?,',
						'\tBody: string?,',
						'}',
						'',
						'export type Response = {',
						'\tSuccess: boolean,',
						'\tStatusCode: number,',
						'\tStatusMessage: string?,',
						'\tHeaders: string?,',
						'\tBody: string?,',
						'}',
						'```',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/HttpService/RequestAsync)',
					].join("\n")
				},
			},

			/**
			 * Crypt:
			 */

			"run_secure()": {
				"insertText": "run_secure(${1:data})",
				"documentation": {
					value: [
						"```lua", "function run_secure(data: string)", "```",
						"",
						"Decrypts a string to execute it.",
					].join("\n")
				},
			},

			/**
			 * Misc:
			 */

			"getrawmetatable()": {
				"insertText": "getrawmetatable(${1:object})",
				"documentation": {
					value: [
						"```lua", "function getrawmetatable(object: any)\n  -> metatable: table?", "```",
						"",
						"Returns the metatable of the given object. Unlike `getmetatable`, it ignores the `__metatable` metamethod.",
					].join("\n")
				},
			},

			"setrawmetatable()": {
				"insertText": "setrawmetatable(${1:object}, ${2:metatable})",
				"documentation": {
					value: [
						"```lua", "function setrawmetatable(object: any, metatable: table)", "```",
						"",
						"Sets the metatable for the given object. Unlike `setmetatable`, it ignores the `__metatable` metamethod.",
					].join("\n")
				},
			},

			"setreadonly()": {
				"insertText": "setreadonly(${1:table}, ${2:readonly})",
				"documentation": {
					value: [
						"```lua", "function setreadonly(table: table, readonly: boolean)", "```",
						"",
						"Sets whether a table can be written to. Typically used to temporarily unlock metatables.",
					].join("\n")
				},
			},

			"isreadonly()": {
				"insertText": "isreadonly(${1:table})",
				"documentation": {
					value: [
						"```lua", "function isreadonly(table: table)\n  -> boolean", "```",
						"",
						"Returns whether the table can be written to.",
					].join("\n")
				},
			},

			"getnamecallmethod()": {
				"insertText": "getnamecallmethod()",
				"documentation": {
					value: [
						"```lua", "function getnamecallmethod()\n  -> string?", "```",
						"",
						"Returns the current namecall method.",
						"",
						'```lua',
						'metatable.__namecall = newcclosure(',
						'\tfunction(self: Instance, ...any)',
						'\t\tlocal method = getnamecallmethod()',
						'\t\tif method == "LovesKrnl" then',
						'\t\t\treturn true',
						'\t\tend',
						'\t\treturn namecall(self, ...)',
						'\tend',
						')',
						'```',
					].join("\n")
				},
			},

			"setnamecallmethod()": {
				"insertText": "setnamecallmethod(${1:method})",
				"documentation": {
					value: [
						"```lua", "function setnamecallmethod(method: string)", "```",
						"",
						"Changes the current namecall method.",
						"",
						'```lua',
						'metatable.__namecall = newcclosure(',
						'\tfunction(self: Instance, ...any)',
						'\t\tlocal method = getnamecallmethod()',
						'\t\tif method == "HttpGet" then',
						'\t\t\tsetnamecallmethod("HttpGetAsync")',
						'\t\tend',
						'\t\treturn namecall(self, ...)',
						'\tend',
						')',
						'```',
					].join("\n")
				},
			},

			"checkcaller()": {
				"insertText": "checkcaller()",
				"documentation": {
					value: [
						"```lua", "function checkcaller()\n  -> boolean", "```",
						"",
						"Returns whether the calling thread was created by Krnl.",
					].join("\n")
				},
			},

			"setfflag()": {
				"insertText": "setfflag(${1:fflag}, ${2:value})",
				"documentation": {
					value: [
						"```lua", "function setfflag(fflag: string, value: string | number | boolean)\n  -> success: boolean", "```",
						"",
						"Sets the value of fflag to value.",
					].join("\n")
				},
			},

			"getthreadcontext()": {
				"insertText": "getthreadcontext()",
				"documentation": {
					value: [
						"```lua", "function getthreadcontext()\n  -> number", "```",
						"",
						"Returns the current thread identity.",
						"",
						"[View documents](https://roblox.fandom.com/wiki/Security_context)"
					].join("\n")
				},
			},

			"setthreadcontext()": {
				"insertText": "setthreadcontext(${1:identity})",
				"documentation": {
					value: [
						"```lua", "function setthreadcontext(identity: number)", "```",
						"",
						"Sets the current thread identity.",
						"",
						"[View documents](https://roblox.fandom.com/wiki/Security_context)"
					].join("\n")
				},
			},

			"queue_on_teleport()": {
				"insertText": "queue_on_teleport(${1:source})",
				"documentation": {
					value: [
						"```lua", "function queue_on_teleport(source: string)", "```",
						"",
						"Queues a script to be executed after teleporting.",
					].join("\n")
				},
			},

			"gethui()": {
				"insertText": "gethui()",
				"documentation": {
					value: [
						"```lua", "function gethui()\n  -> Folder", "```",
						"",
						"Returns a hidden CoreGui instance. Typically used to hide GUI objects from being accessed by the game.",
					].join("\n")
				},
			},

			"getgenv()": {
				"insertText": "getgenv()",
				"documentation": {
					value: [
						"```lua", "function getgenv()\n  -> Map<any, any>", "```",
						"",
						"Returns the current global environment.",
					].join("\n")
				},
			},

			"getrenv()": {
				"insertText": "getrenv()",
				"documentation": {
					value: [
						"```lua", "function getrenv()\n  -> Map<any, any>", "```",
						"",
						"Returns Roblox's global environment.",
					].join("\n")
				},
			},

			"getreg()": {
				"insertText": "getreg()",
				"documentation": {
					value: [
						"```lua", "function getreg()\n  -> Map<any, any>", "```",
						"",
						"Returns the Lua registry.",
					].join("\n")
				},
			},

			"setclipboard()": {
				"insertText": "setclipboard(${1:data})",
				"documentation": {
					value: [
						"```lua", "function setclipboard(data: string)", "```",
						"",
						"Copies a string to the clipboard.",
					].join("\n")
				},
			},

			"getgc()": {
				"insertText": "getgc(${1:includeTables})",
				"documentation": {
					value: [
						"```lua", "function getgc(includeTables: boolean(false))\n  -> Array<function | table>", "```",
						"",
						"Returns a list of garbage-collected functions and tables if included.",
					].join("\n")
				},
			},

			"getcustomasset()": {
				"insertText": "getcustomasset(${1:assetPath})",
				"documentation": {
					value: [
						"```lua", "function getcustomasset(assetPath: string)\n  -> Content: string", "```",
						"",
						"Generates a rbxasset:// [`content`](https://developer.roblox.com/en-us/articles/Content) URL for the given asset from Krnl's `workspace` directory.",
					].join("\n")
				},
			},

			"setfpscap()": {
				"insertText": "setfpscap(${1:fpsCap})",
				"documentation": {
					value: [
						"```lua", "function setfpscap(fpsCap: number)", "```",
						"",
						"Sets the framerate limit. Passing 0 unlocks the framerate.",
					].join("\n")
				},
			},

			/**
			 * File system:
			 */

			"isfolder()": {
				"insertText": "isfolder(${1:path})",
				"documentation": {
					value: [
						"```lua\n", "function isfolder(path: string)\n  -> boolean", "\n```",
						"",
						"Returns whether a file at the given path exists and is a folder."
					].join("\n")
				},
			},

			"isfile()": {
				"insertText": "isfile(${1:path})",
				"documentation": {
					value: [
						"```lua", "function isfile(path: string)\n  -> boolean", "```",
						"",
						"Returns whether a file at the given path exists and is a file."
					].join("\n")
				},
			},

			"makefolder()": {
				"insertText": "makefolder(${1:path})",
				"documentation": {
					value: [
						"```lua", "function makefolder(path: string)", "```",
						"",
						"Makes a folder if the given path is empty. If `path` is a file, it will error."
					].join("\n")
				},
			},

			"delfile()": {
				"insertText": "delfile(${1:file})",
				"documentation": {
					value: [
						"```lua", "function delfile(file: string)", "```",
						"",
						"Deletes a file at the given path."
					].join("\n")
				},
			},

			"delfolder()": {
				"insertText": "delfolder(${1:directory})",
				"documentation": {
					value: [
						"```lua", "function delfolder(directory: string)", "```",
						"",
						"Deletes a folder at the given path."
					].join("\n")
				},
			},

			"listfiles()": {
				"insertText": "listfiles(${1:directory})",
				"documentation": {
					value: [
						"```lua", "function listfiles(directory: string)\n  -> Array<string>", "```",
						"",
						"Returns a list of file paths located in the directory."
					].join("\n")
				},
			},

			"readfile()": {
				"insertText": "readfile(${1:file})",
				"documentation": {
					value: [
						"```lua", "function readfile(file: string)\n  -> data: string", "```",
						"",
						"Returns the file's contents."
					].join("\n")
				},
			},

			"writefile()": {
				"insertText": "writefile(${1:file}, ${2:data})",
				"documentation": {
					value: [
						"```lua", "function writefile(file: string, data: string)", "```",
						"",
						"Overwrites an existing file or creates a new file."
					].join("\n")
				},
			},

			"appendfile()": {
				"insertText": "appendfile(${1:file}, ${2:data})",
				"documentation": {
					value: [
						"```lua", "function appendfile(file: string, data: string)", "```",
						"",
						"Appends data to a file's contents or creates a new file."
					].join("\n")
				},
			},
		},
	};
});