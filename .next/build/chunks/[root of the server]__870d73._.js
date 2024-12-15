module.exports = {

"[externals]/ [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path");

module.exports = mod;
}}),
"[externals]/ [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url");

module.exports = mod;
}}),
"[project]/postcss.config.mjs [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/** @type {import('postcss-load-config').Config} */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const config = {
    plugins: {
        tailwindcss: {}
    }
};
const __TURBOPACK__default__export__ = config;
}}),
"[project]/postcss.config.mjs/transform.ts { CONFIG => \"[project]/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>transform),
    "init": (()=>init)
});
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/postcss/lib/postcss.mjs [postcss] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/postcss.config.mjs [postcss] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (path, cjs)");
;
;
;
const contextDir = process.cwd();
function toPath(file) {
    const relPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["relative"])(contextDir, file);
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(relPath)) {
        throw new Error(`Cannot depend on path (${file}) outside of root directory (${contextDir})`);
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== "/" ? relPath.replaceAll(__TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"], "/") : relPath;
}
let processor;
const init = async (ipc)=>{
    let config = __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"];
    if (typeof config === "function") {
        config = await config({
            env: "development"
        });
    }
    if (typeof config === "undefined") {
        throw new Error("PostCSS config is undefined (make sure to export an function or object from config file)");
    }
    let plugins;
    if (Array.isArray(config.plugins)) {
        plugins = config.plugins.map((plugin)=>{
            if (Array.isArray(plugin)) {
                return plugin;
            } else if (typeof plugin === "string") {
                return [
                    plugin,
                    {}
                ];
            } else {
                return plugin;
            }
        });
    } else if (typeof config.plugins === "object") {
        plugins = Object.entries(config.plugins).filter(([, options])=>options);
    } else {
        plugins = [];
    }
    const loadedPlugins = plugins.map((plugin)=>{
        if (Array.isArray(plugin)) {
            const [arg, options] = plugin;
            let pluginFactory = arg;
            if (typeof pluginFactory === "string") {
                pluginFactory = __turbopack_external_require__(pluginFactory);
            }
            if (pluginFactory.default) {
                pluginFactory = pluginFactory.default;
            }
            return pluginFactory(options);
        }
        return plugin;
    });
    processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"])(loadedPlugins);
};
async function transform(ipc, cssContent, name) {
    const { css, map, messages } = await processor.process(cssContent, {
        from: name,
        to: name,
        map: {
            inline: false,
            annotation: false
        }
    });
    const assets = [];
    for (const msg of messages){
        switch(msg.type){
            case "asset":
                assets.push({
                    file: msg.file,
                    content: msg.content,
                    sourceMap: typeof msg.sourceMap === "string" ? msg.sourceMap : JSON.stringify(msg.sourceMap)
                });
                break;
            case "file-dependency":
            case "missing-dependency":
                ipc.sendInfo({
                    type: "fileDependency",
                    path: toPath(msg.file)
                });
                break;
            case "build-dependency":
                ipc.sendInfo({
                    type: "buildDependency",
                    path: toPath(msg.file)
                });
                break;
            case "dir-dependency":
                ipc.sendInfo({
                    type: "dirDependency",
                    path: toPath(msg.dir),
                    glob: msg.glob
                });
                break;
            case "context-dependency":
                ipc.sendInfo({
                    type: "dirDependency",
                    path: toPath(msg.file),
                    glob: "**"
                });
                break;
            default:
                break;
        }
    }
    return {
        css,
        map: JSON.stringify(map),
        assets
    };
}
}}),
"[project]/node_modules/postcss/lib/css-syntax-error.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let pico = __turbopack_require__("[project]/node_modules/picocolors/picocolors.js [postcss] (ecmascript)");
let terminalHighlight = __turbopack_require__("[project]/node_modules/postcss/lib/terminal-highlight.js [postcss] (ecmascript)");
class CssSyntaxError extends Error {
    constructor(message, line, column, source, file, plugin){
        super(message);
        this.name = 'CssSyntaxError';
        this.reason = message;
        if (file) {
            this.file = file;
        }
        if (source) {
            this.source = source;
        }
        if (plugin) {
            this.plugin = plugin;
        }
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            if (typeof line === 'number') {
                this.line = line;
                this.column = column;
            } else {
                this.line = line.line;
                this.column = line.column;
                this.endLine = column.line;
                this.endColumn = column.column;
            }
        }
        this.setMessage();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
        }
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ': ' : '';
        this.message += this.file ? this.file : '<css input>';
        if (typeof this.line !== 'undefined') {
            this.message += ':' + this.line + ':' + this.column;
        }
        this.message += ': ' + this.reason;
    }
    showSourceCode(color) {
        if (!this.source) return '';
        let css = this.source;
        if (color == null) color = pico.isColorSupported;
        let aside = (text)=>text;
        let mark = (text)=>text;
        let highlight = (text)=>text;
        if (color) {
            let { bold, gray, red } = pico.createColors(true);
            mark = (text)=>bold(red(text));
            aside = (text)=>gray(text);
            if (terminalHighlight) {
                highlight = (text)=>terminalHighlight(text);
            }
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        return lines.slice(start, end).map((line, index)=>{
            let number = start + 1 + index;
            let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
            if (number === this.line) {
                if (line.length > 160) {
                    let padding = 20;
                    let subLineStart = Math.max(0, this.column - padding);
                    let subLineEnd = Math.max(this.column + padding, this.endColumn + padding);
                    let subLine = line.slice(subLineStart, subLineEnd);
                    let spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, Math.min(this.column - 1, padding - 1)).replace(/[^\t]/g, ' ');
                    return mark('>') + aside(gutter) + highlight(subLine) + '\n ' + spacing + mark('^');
                }
                let spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, this.column - 1).replace(/[^\t]/g, ' ');
                return mark('>') + aside(gutter) + highlight(line) + '\n ' + spacing + mark('^');
            }
            return ' ' + aside(gutter) + highlight(line);
        }).join('\n');
    }
    toString() {
        let code = this.showSourceCode();
        if (code) {
            code = '\n\n' + code + '\n';
        }
        return this.name + ': ' + this.message + code;
    }
}
module.exports = CssSyntaxError;
CssSyntaxError.default = CssSyntaxError;
}}),
"[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Stringifier = __turbopack_require__("[project]/node_modules/postcss/lib/stringifier.js [postcss] (ecmascript)");
function stringify(node, builder) {
    let str = new Stringifier(builder);
    str.stringify(node);
}
module.exports = stringify;
stringify.default = stringify;
}}),
"[project]/node_modules/postcss/lib/symbols.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
module.exports.isClean = Symbol('isClean');
module.exports.my = Symbol('my');
}}),
"[project]/node_modules/postcss/lib/node.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let CssSyntaxError = __turbopack_require__("[project]/node_modules/postcss/lib/css-syntax-error.js [postcss] (ecmascript)");
let Stringifier = __turbopack_require__("[project]/node_modules/postcss/lib/stringifier.js [postcss] (ecmascript)");
let stringify = __turbopack_require__("[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)");
let { isClean, my } = __turbopack_require__("[project]/node_modules/postcss/lib/symbols.js [postcss] (ecmascript)");
function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for(let i in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i)) {
            continue;
        }
        if (i === 'proxyCache') continue;
        let value = obj[i];
        let type = typeof value;
        if (i === 'parent' && type === 'object') {
            if (parent) cloned[i] = parent;
        } else if (i === 'source') {
            cloned[i] = value;
        } else if (Array.isArray(value)) {
            cloned[i] = value.map((j)=>cloneNode(j, cloned));
        } else {
            if (type === 'object' && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }
    return cloned;
}
function sourceOffset(inputCSS, position) {
    // Not all custom syntaxes support `offset` in `source.start` and `source.end`
    if (position && typeof position.offset !== 'undefined') {
        return position.offset;
    }
    let column = 1;
    let line = 1;
    let offset = 0;
    for(let i = 0; i < inputCSS.length; i++){
        if (line === position.line && column === position.column) {
            offset = i;
            break;
        }
        if (inputCSS[i] === '\n') {
            column = 1;
            line += 1;
        } else {
            column += 1;
        }
    }
    return offset;
}
class Node {
    constructor(defaults = {}){
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for(let name in defaults){
            if (name === 'nodes') {
                this.nodes = [];
                for (let node of defaults[name]){
                    if (typeof node.clone === 'function') {
                        this.append(node.clone());
                    } else {
                        this.append(node);
                    }
                }
            } else {
                this[name] = defaults[name];
            }
        }
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    assign(overrides = {}) {
        for(let name in overrides){
            this[name] = overrides[name];
        }
        return this;
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
        let cloned = cloneNode(this);
        for(let name in overrides){
            cloned[name] = overrides[name];
        }
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    error(message, opts = {}) {
        if (this.source) {
            let { end, start } = this.rangeBy(opts);
            return this.source.input.error(message, {
                column: start.column,
                line: start.line
            }, {
                column: end.column,
                line: end.line
            }, opts);
        }
        return new CssSyntaxError(message);
    }
    getProxyProcessor() {
        return {
            get (node, prop) {
                if (prop === 'proxyOf') {
                    return node;
                } else if (prop === 'root') {
                    return ()=>node.root().toProxy();
                } else {
                    return node[prop];
                }
            },
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'prop' || prop === 'value' || prop === 'name' || prop === 'params' || prop === 'important' || /* c8 ignore next */ prop === 'text') {
                    node.markDirty();
                }
                return true;
            }
        };
    }
    /* c8 ignore next 3 */ markClean() {
        this[isClean] = true;
    }
    markDirty() {
        if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while(next = next.parent){
                next[isClean] = false;
            }
        }
    }
    next() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
    }
    positionBy(opts) {
        let pos = this.source.start;
        if (opts.index) {
            pos = this.positionInside(opts.index);
        } else if (opts.word) {
            let stringRepresentation = this.source.input.css.slice(sourceOffset(this.source.input.css, this.source.start), sourceOffset(this.source.input.css, this.source.end));
            let index = stringRepresentation.indexOf(opts.word);
            if (index !== -1) pos = this.positionInside(index);
        }
        return pos;
    }
    positionInside(index) {
        let column = this.source.start.column;
        let line = this.source.start.line;
        let offset = sourceOffset(this.source.input.css, this.source.start);
        let end = offset + index;
        for(let i = offset; i < end; i++){
            if (this.source.input.css[i] === '\n') {
                column = 1;
                line += 1;
            } else {
                column += 1;
            }
        }
        return {
            column,
            line
        };
    }
    prev() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
    }
    rangeBy(opts) {
        let start = {
            column: this.source.start.column,
            line: this.source.start.line
        };
        let end = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line
        } : {
            column: start.column + 1,
            line: start.line
        };
        if (opts.word) {
            let stringRepresentation = this.source.input.css.slice(sourceOffset(this.source.input.css, this.source.start), sourceOffset(this.source.input.css, this.source.end));
            let index = stringRepresentation.indexOf(opts.word);
            if (index !== -1) {
                start = this.positionInside(index);
                end = this.positionInside(index + opts.word.length);
            }
        } else {
            if (opts.start) {
                start = {
                    column: opts.start.column,
                    line: opts.start.line
                };
            } else if (opts.index) {
                start = this.positionInside(opts.index);
            }
            if (opts.end) {
                end = {
                    column: opts.end.column,
                    line: opts.end.line
                };
            } else if (typeof opts.endIndex === 'number') {
                end = this.positionInside(opts.endIndex);
            } else if (opts.index) {
                end = this.positionInside(opts.index + 1);
            }
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) {
            end = {
                column: start.column + 1,
                line: start.line
            };
        }
        return {
            end,
            start
        };
    }
    raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
    }
    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.parent = undefined;
        return this;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes){
                if (node === this) {
                    foundSelf = true;
                } else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node);
                    bookmark = node;
                } else {
                    this.parent.insertBefore(bookmark, node);
                }
            }
            if (!foundSelf) {
                this.remove();
            }
        }
        return this;
    }
    root() {
        let result = this;
        while(result.parent && result.parent.type !== 'document'){
            result = result.parent;
        }
        return result;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) {
                continue;
            }
            if (name === 'parent' || name === 'proxyCache') continue;
            let value = this[name];
            if (Array.isArray(value)) {
                fixed[name] = value.map((i)=>{
                    if (typeof i === 'object' && i.toJSON) {
                        return i.toJSON(null, inputs);
                    } else {
                        return i;
                    }
                });
            } else if (typeof value === 'object' && value.toJSON) {
                fixed[name] = value.toJSON(null, inputs);
            } else if (name === 'source') {
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    end: value.end,
                    inputId,
                    start: value.start
                };
            } else {
                fixed[name] = value;
            }
        }
        if (emitInputs) {
            fixed.inputs = [
                ...inputs.keys()
            ].map((input)=>input.toJSON());
        }
        return fixed;
    }
    toProxy() {
        if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor());
        }
        return this.proxyCache;
    }
    toString(stringifier = stringify) {
        if (stringifier.stringify) stringifier = stringifier.stringify;
        let result = '';
        stringifier(this, (i)=>{
            result += i;
        });
        return result;
    }
    warn(result, text, opts) {
        let data = {
            node: this
        };
        for(let i in opts)data[i] = opts[i];
        return result.warn(text, data);
    }
    get proxyOf() {
        return this;
    }
}
module.exports = Node;
Node.default = Node;
}}),
"[project]/node_modules/postcss/lib/comment.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Node = __turbopack_require__("[project]/node_modules/postcss/lib/node.js [postcss] (ecmascript)");
class Comment extends Node {
    constructor(defaults){
        super(defaults);
        this.type = 'comment';
    }
}
module.exports = Comment;
Comment.default = Comment;
}}),
"[project]/node_modules/postcss/lib/declaration.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Node = __turbopack_require__("[project]/node_modules/postcss/lib/node.js [postcss] (ecmascript)");
class Declaration extends Node {
    constructor(defaults){
        if (defaults && typeof defaults.value !== 'undefined' && typeof defaults.value !== 'string') {
            defaults = {
                ...defaults,
                value: String(defaults.value)
            };
        }
        super(defaults);
        this.type = 'decl';
    }
    get variable() {
        return this.prop.startsWith('--') || this.prop[0] === '$';
    }
}
module.exports = Declaration;
Declaration.default = Declaration;
}}),
"[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Comment = __turbopack_require__("[project]/node_modules/postcss/lib/comment.js [postcss] (ecmascript)");
let Declaration = __turbopack_require__("[project]/node_modules/postcss/lib/declaration.js [postcss] (ecmascript)");
let Node = __turbopack_require__("[project]/node_modules/postcss/lib/node.js [postcss] (ecmascript)");
let { isClean, my } = __turbopack_require__("[project]/node_modules/postcss/lib/symbols.js [postcss] (ecmascript)");
let AtRule, parse, Root, Rule;
function cleanSource(nodes) {
    return nodes.map((i)=>{
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}
function markTreeDirty(node) {
    node[isClean] = false;
    if (node.proxyOf.nodes) {
        for (let i of node.proxyOf.nodes){
            markTreeDirty(i);
        }
    }
}
class Container extends Node {
    append(...children) {
        for (let child of children){
            let nodes = this.normalize(child, this.last);
            for (let node of nodes)this.proxyOf.nodes.push(node);
        }
        this.markDirty();
        return this;
    }
    cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) {
            for (let node of this.nodes)node.cleanRaws(keepBetween);
        }
    }
    each(callback) {
        if (!this.proxyOf.nodes) return undefined;
        let iterator = this.getIterator();
        let index, result;
        while(this.indexes[iterator] < this.proxyOf.nodes.length){
            index = this.indexes[iterator];
            result = callback(this.proxyOf.nodes[index], index);
            if (result === false) break;
            this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result;
    }
    every(condition) {
        return this.nodes.every(condition);
    }
    getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
    }
    getProxyProcessor() {
        return {
            get (node, prop) {
                if (prop === 'proxyOf') {
                    return node;
                } else if (!node[prop]) {
                    return node[prop];
                } else if (prop === 'each' || typeof prop === 'string' && prop.startsWith('walk')) {
                    return (...args)=>{
                        return node[prop](...args.map((i)=>{
                            if (typeof i === 'function') {
                                return (child, index)=>i(child.toProxy(), index);
                            } else {
                                return i;
                            }
                        }));
                    };
                } else if (prop === 'every' || prop === 'some') {
                    return (cb)=>{
                        return node[prop]((child, ...other)=>cb(child.toProxy(), ...other));
                    };
                } else if (prop === 'root') {
                    return ()=>node.root().toProxy();
                } else if (prop === 'nodes') {
                    return node.nodes.map((i)=>i.toProxy());
                } else if (prop === 'first' || prop === 'last') {
                    return node[prop].toProxy();
                } else {
                    return node[prop];
                }
            },
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'name' || prop === 'params' || prop === 'selector') {
                    node.markDirty();
                }
                return true;
            }
        };
    }
    index(child) {
        if (typeof child === 'number') return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
    }
    insertAfter(exist, add) {
        let existIndex = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex + 1, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex < index) {
                this.indexes[id] = index + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    insertBefore(exist, add) {
        let existIndex = this.index(exist);
        let type = existIndex === 0 ? 'prepend' : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex <= index) {
                this.indexes[id] = index + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    normalize(nodes, sample) {
        if (typeof nodes === 'string') {
            nodes = cleanSource(parse(nodes).nodes);
        } else if (typeof nodes === 'undefined') {
            nodes = [];
        } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i of nodes){
                if (i.parent) i.parent.removeChild(i, 'ignore');
            }
        } else if (nodes.type === 'root' && this.type !== 'document') {
            nodes = nodes.nodes.slice(0);
            for (let i of nodes){
                if (i.parent) i.parent.removeChild(i, 'ignore');
            }
        } else if (nodes.type) {
            nodes = [
                nodes
            ];
        } else if (nodes.prop) {
            if (typeof nodes.value === 'undefined') {
                throw new Error('Value field is missed in node creation');
            } else if (typeof nodes.value !== 'string') {
                nodes.value = String(nodes.value);
            }
            nodes = [
                new Declaration(nodes)
            ];
        } else if (nodes.selector || nodes.selectors) {
            nodes = [
                new Rule(nodes)
            ];
        } else if (nodes.name) {
            nodes = [
                new AtRule(nodes)
            ];
        } else if (nodes.text) {
            nodes = [
                new Comment(nodes)
            ];
        } else {
            throw new Error('Unknown node type in node creation');
        }
        let processed = nodes.map((i)=>{
            /* c8 ignore next */ if (!i[my]) Container.rebuild(i);
            i = i.proxyOf;
            if (i.parent) i.parent.removeChild(i);
            if (i[isClean]) markTreeDirty(i);
            if (!i.raws) i.raws = {};
            if (typeof i.raws.before === 'undefined') {
                if (sample && typeof sample.raws.before !== 'undefined') {
                    i.raws.before = sample.raws.before.replace(/\S/g, '');
                }
            }
            i.parent = this.proxyOf;
            return i;
        });
        return processed;
    }
    prepend(...children) {
        children = children.reverse();
        for (let child of children){
            let nodes = this.normalize(child, this.first, 'prepend').reverse();
            for (let node of nodes)this.proxyOf.nodes.unshift(node);
            for(let id in this.indexes){
                this.indexes[id] = this.indexes[id] + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
    }
    removeAll() {
        for (let node of this.proxyOf.nodes)node.parent = undefined;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
    }
    removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = undefined;
        this.proxyOf.nodes.splice(child, 1);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (index >= child) {
                this.indexes[id] = index - 1;
            }
        }
        this.markDirty();
        return this;
    }
    replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }
        this.walkDecls((decl)=>{
            if (opts.props && !opts.props.includes(decl.prop)) return;
            if (opts.fast && !decl.value.includes(opts.fast)) return;
            decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
    }
    some(condition) {
        return this.nodes.some(condition);
    }
    walk(callback) {
        return this.each((child, i)=>{
            let result;
            try {
                result = callback(child, i);
            } catch (e) {
                throw child.addToError(e);
            }
            if (result !== false && child.walk) {
                result = child.walk(callback);
            }
            return result;
        });
    }
    walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk((child, i)=>{
                if (child.type === 'atrule') {
                    return callback(child, i);
                }
            });
        }
        if (name instanceof RegExp) {
            return this.walk((child, i)=>{
                if (child.type === 'atrule' && name.test(child.name)) {
                    return callback(child, i);
                }
            });
        }
        return this.walk((child, i)=>{
            if (child.type === 'atrule' && child.name === name) {
                return callback(child, i);
            }
        });
    }
    walkComments(callback) {
        return this.walk((child, i)=>{
            if (child.type === 'comment') {
                return callback(child, i);
            }
        });
    }
    walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk((child, i)=>{
                if (child.type === 'decl') {
                    return callback(child, i);
                }
            });
        }
        if (prop instanceof RegExp) {
            return this.walk((child, i)=>{
                if (child.type === 'decl' && prop.test(child.prop)) {
                    return callback(child, i);
                }
            });
        }
        return this.walk((child, i)=>{
            if (child.type === 'decl' && child.prop === prop) {
                return callback(child, i);
            }
        });
    }
    walkRules(selector, callback) {
        if (!callback) {
            callback = selector;
            return this.walk((child, i)=>{
                if (child.type === 'rule') {
                    return callback(child, i);
                }
            });
        }
        if (selector instanceof RegExp) {
            return this.walk((child, i)=>{
                if (child.type === 'rule' && selector.test(child.selector)) {
                    return callback(child, i);
                }
            });
        }
        return this.walk((child, i)=>{
            if (child.type === 'rule' && child.selector === selector) {
                return callback(child, i);
            }
        });
    }
    get first() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[0];
    }
    get last() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
}
Container.registerParse = (dependant)=>{
    parse = dependant;
};
Container.registerRule = (dependant)=>{
    Rule = dependant;
};
Container.registerAtRule = (dependant)=>{
    AtRule = dependant;
};
Container.registerRoot = (dependant)=>{
    Root = dependant;
};
module.exports = Container;
Container.default = Container;
/* c8 ignore start */ Container.rebuild = (node)=>{
    if (node.type === 'atrule') {
        Object.setPrototypeOf(node, AtRule.prototype);
    } else if (node.type === 'rule') {
        Object.setPrototypeOf(node, Rule.prototype);
    } else if (node.type === 'decl') {
        Object.setPrototypeOf(node, Declaration.prototype);
    } else if (node.type === 'comment') {
        Object.setPrototypeOf(node, Comment.prototype);
    } else if (node.type === 'root') {
        Object.setPrototypeOf(node, Root.prototype);
    }
    node[my] = true;
    if (node.nodes) {
        node.nodes.forEach((child)=>{
            Container.rebuild(child);
        });
    }
} /* c8 ignore stop */ ;
}}),
"[project]/node_modules/postcss/lib/at-rule.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_require__("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
class AtRule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'atrule';
    }
    append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
    }
    prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
    }
}
module.exports = AtRule;
AtRule.default = AtRule;
Container.registerAtRule(AtRule);
}}),
"[project]/node_modules/postcss/lib/document.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_require__("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let LazyResult, Processor;
class Document extends Container {
    constructor(defaults){
        // type needs to be passed to super, otherwise child roots won't be normalized correctly
        super({
            type: 'document',
            ...defaults
        });
        if (!this.nodes) {
            this.nodes = [];
        }
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Document.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Document.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Document;
Document.default = Document;
}}),
"[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let { nanoid } = __turbopack_require__("[project]/node_modules/postcss/node_modules/nanoid/non-secure/index.cjs [postcss] (ecmascript)");
let { isAbsolute, resolve } = __turbopack_require__("[externals]/ [external] (path, cjs)");
let { SourceMapConsumer, SourceMapGenerator } = __turbopack_require__("[project]/node_modules/source-map-js/source-map.js [postcss] (ecmascript)");
let { fileURLToPath, pathToFileURL } = __turbopack_require__("[externals]/ [external] (url, cjs)");
let CssSyntaxError = __turbopack_require__("[project]/node_modules/postcss/lib/css-syntax-error.js [postcss] (ecmascript)");
let PreviousMap = __turbopack_require__("[project]/node_modules/postcss/lib/previous-map.js [postcss] (ecmascript)");
let terminalHighlight = __turbopack_require__("[project]/node_modules/postcss/lib/terminal-highlight.js [postcss] (ecmascript)");
let fromOffsetCache = Symbol('fromOffsetCache');
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(resolve && isAbsolute);
class Input {
    constructor(css, opts = {}){
        if (css === null || typeof css === 'undefined' || typeof css === 'object' && !css.toString) {
            throw new Error(`PostCSS received ${css} instead of CSS string`);
        }
        this.css = css.toString();
        if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
            this.hasBOM = true;
            this.css = this.css.slice(1);
        } else {
            this.hasBOM = false;
        }
        if (opts.from) {
            if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
                this.file = opts.from;
            } else {
                this.file = resolve(opts.from);
            }
        }
        if (pathAvailable && sourceMapAvailable) {
            let map = new PreviousMap(this.css, opts);
            if (map.text) {
                this.map = map;
                let file = map.consumer().file;
                if (!this.file && file) this.file = this.mapResolve(file);
            }
        }
        if (!this.file) {
            this.id = '<input css ' + nanoid(6) + '>';
        }
        if (this.map) this.map.file = this.from;
    }
    error(message, line, column, opts = {}) {
        let endColumn, endLine, result;
        if (line && typeof line === 'object') {
            let start = line;
            let end = column;
            if (typeof start.offset === 'number') {
                let pos = this.fromOffset(start.offset);
                line = pos.line;
                column = pos.col;
            } else {
                line = start.line;
                column = start.column;
            }
            if (typeof end.offset === 'number') {
                let pos = this.fromOffset(end.offset);
                endLine = pos.line;
                endColumn = pos.col;
            } else {
                endLine = end.line;
                endColumn = end.column;
            }
        } else if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) {
            result = new CssSyntaxError(message, origin.endLine === undefined ? origin.line : {
                column: origin.column,
                line: origin.line
            }, origin.endLine === undefined ? origin.column : {
                column: origin.endColumn,
                line: origin.endLine
            }, origin.source, origin.file, opts.plugin);
        } else {
            result = new CssSyntaxError(message, endLine === undefined ? line : {
                column,
                line
            }, endLine === undefined ? column : {
                column: endColumn,
                line: endLine
            }, this.css, this.file, opts.plugin);
        }
        result.input = {
            column,
            endColumn,
            endLine,
            line,
            source: this.css
        };
        if (this.file) {
            if (pathToFileURL) {
                result.input.url = pathToFileURL(this.file).toString();
            }
            result.input.file = this.file;
        }
        return result;
    }
    fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache]) {
            let lines = this.css.split('\n');
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for(let i = 0, l = lines.length; i < l; i++){
                lineToIndex[i] = prevIndex;
                prevIndex += lines[i].length + 1;
            }
            this[fromOffsetCache] = lineToIndex;
        } else {
            lineToIndex = this[fromOffsetCache];
        }
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) {
            min = lineToIndex.length - 1;
        } else {
            let max = lineToIndex.length - 2;
            let mid;
            while(min < max){
                mid = min + (max - min >> 1);
                if (offset < lineToIndex[mid]) {
                    max = mid - 1;
                } else if (offset >= lineToIndex[mid + 1]) {
                    min = mid + 1;
                } else {
                    min = mid;
                    break;
                }
            }
        }
        return {
            col: offset - lineToIndex[min] + 1,
            line: min + 1
        };
    }
    mapResolve(file) {
        if (/^\w+:\/\//.test(file)) {
            return file;
        }
        return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file);
    }
    origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
            column,
            line
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === 'number') {
            to = consumer.originalPositionFor({
                column: endColumn,
                line: endLine
            });
        }
        let fromUrl;
        if (isAbsolute(from.source)) {
            fromUrl = pathToFileURL(from.source);
        } else {
            fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
        }
        let result = {
            column: from.column,
            endColumn: to && to.column,
            endLine: to && to.line,
            line: from.line,
            url: fromUrl.toString()
        };
        if (fromUrl.protocol === 'file:') {
            if (fileURLToPath) {
                result.file = fileURLToPath(fromUrl);
            } else {
                /* c8 ignore next 2 */ throw new Error(`file: protocol is not available in this PostCSS build`);
            }
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result.source = source;
        return result;
    }
    toJSON() {
        let json = {};
        for (let name of [
            'hasBOM',
            'css',
            'file',
            'id'
        ]){
            if (this[name] != null) {
                json[name] = this[name];
            }
        }
        if (this.map) {
            json.map = {
                ...this.map
            };
            if (json.map.consumerCache) {
                json.map.consumerCache = undefined;
            }
        }
        return json;
    }
    get from() {
        return this.file || this.id;
    }
}
module.exports = Input;
Input.default = Input;
if (terminalHighlight && terminalHighlight.registerInput) {
    terminalHighlight.registerInput(Input);
}
}}),
"[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_require__("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let LazyResult, Processor;
class Root extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'root';
        if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === 'prepend') {
                if (this.nodes.length > 1) {
                    sample.raws.before = this.nodes[1].raws.before;
                } else {
                    delete sample.raws.before;
                }
            } else if (this.first !== sample) {
                for (let node of nodes){
                    node.raws.before = sample.raws.before;
                }
            }
        }
        return nodes;
    }
    removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[index].raws.before;
        }
        return super.removeChild(child);
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Root.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Root.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Root;
Root.default = Root;
Container.registerRoot(Root);
}}),
"[project]/node_modules/postcss/lib/list.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let list = {
    comma (string) {
        return list.split(string, [
            ','
        ], true);
    },
    space (string) {
        let spaces = [
            ' ',
            '\n',
            '\t'
        ];
        return list.split(string, spaces);
    },
    split (string, separators, last) {
        let array = [];
        let current = '';
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = '';
        let escape = false;
        for (let letter of string){
            if (escape) {
                escape = false;
            } else if (letter === '\\') {
                escape = true;
            } else if (inQuote) {
                if (letter === prevQuote) {
                    inQuote = false;
                }
            } else if (letter === '"' || letter === "'") {
                inQuote = true;
                prevQuote = letter;
            } else if (letter === '(') {
                func += 1;
            } else if (letter === ')') {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== '') array.push(current.trim());
                current = '';
                split = false;
            } else {
                current += letter;
            }
        }
        if (last || current !== '') array.push(current.trim());
        return array;
    }
};
module.exports = list;
list.default = list;
}}),
"[project]/node_modules/postcss/lib/rule.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_require__("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let list = __turbopack_require__("[project]/node_modules/postcss/lib/list.js [postcss] (ecmascript)");
class Rule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'rule';
        if (!this.nodes) this.nodes = [];
    }
    get selectors() {
        return list.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
        this.selector = values.join(sep);
    }
}
module.exports = Rule;
Rule.default = Rule;
Container.registerRule(Rule);
}}),
"[project]/node_modules/postcss/lib/fromJSON.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let AtRule = __turbopack_require__("[project]/node_modules/postcss/lib/at-rule.js [postcss] (ecmascript)");
let Comment = __turbopack_require__("[project]/node_modules/postcss/lib/comment.js [postcss] (ecmascript)");
let Declaration = __turbopack_require__("[project]/node_modules/postcss/lib/declaration.js [postcss] (ecmascript)");
let Input = __turbopack_require__("[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)");
let PreviousMap = __turbopack_require__("[project]/node_modules/postcss/lib/previous-map.js [postcss] (ecmascript)");
let Root = __turbopack_require__("[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)");
let Rule = __turbopack_require__("[project]/node_modules/postcss/lib/rule.js [postcss] (ecmascript)");
function fromJSON(json, inputs) {
    if (Array.isArray(json)) return json.map((n)=>fromJSON(n));
    let { inputs: ownInputs, ...defaults } = json;
    if (ownInputs) {
        inputs = [];
        for (let input of ownInputs){
            let inputHydrated = {
                ...input,
                __proto__: Input.prototype
            };
            if (inputHydrated.map) {
                inputHydrated.map = {
                    ...inputHydrated.map,
                    __proto__: PreviousMap.prototype
                };
            }
            inputs.push(inputHydrated);
        }
    }
    if (defaults.nodes) {
        defaults.nodes = json.nodes.map((n)=>fromJSON(n, inputs));
    }
    if (defaults.source) {
        let { inputId, ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) {
            defaults.source.input = inputs[inputId];
        }
    }
    if (defaults.type === 'root') {
        return new Root(defaults);
    } else if (defaults.type === 'decl') {
        return new Declaration(defaults);
    } else if (defaults.type === 'rule') {
        return new Rule(defaults);
    } else if (defaults.type === 'comment') {
        return new Comment(defaults);
    } else if (defaults.type === 'atrule') {
        return new AtRule(defaults);
    } else {
        throw new Error('Unknown node type: ' + json.type);
    }
}
module.exports = fromJSON;
fromJSON.default = fromJSON;
}}),
"[project]/node_modules/source-map-js/source-map.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.SourceMapGenerator = __turbopack_require__("[project]/node_modules/source-map-js/lib/source-map-generator.js [postcss] (ecmascript)").SourceMapGenerator;
exports.SourceMapConsumer = __turbopack_require__("[project]/node_modules/source-map-js/lib/source-map-consumer.js [postcss] (ecmascript)").SourceMapConsumer;
exports.SourceNode = __turbopack_require__("[project]/node_modules/source-map-js/lib/source-node.js [postcss] (ecmascript)").SourceNode;
}}),
"[project]/node_modules/postcss/lib/map-generator.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let { dirname, relative, resolve, sep } = __turbopack_require__("[externals]/ [external] (path, cjs)");
let { SourceMapConsumer, SourceMapGenerator } = __turbopack_require__("[project]/node_modules/source-map-js/source-map.js [postcss] (ecmascript)");
let { pathToFileURL } = __turbopack_require__("[externals]/ [external] (url, cjs)");
let Input = __turbopack_require__("[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)");
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
class MapGenerator {
    constructor(stringify, root, opts, cssString){
        this.stringify = stringify;
        this.mapOpts = opts.map || {};
        this.root = root;
        this.opts = opts;
        this.css = cssString;
        this.originalCSS = cssString;
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
        this.memoizedFileURLs = new Map();
        this.memoizedPaths = new Map();
        this.memoizedURLs = new Map();
    }
    addAnnotation() {
        let content;
        if (this.isInline()) {
            content = 'data:application/json;base64,' + this.toBase64(this.map.toString());
        } else if (typeof this.mapOpts.annotation === 'string') {
            content = this.mapOpts.annotation;
        } else if (typeof this.mapOpts.annotation === 'function') {
            content = this.mapOpts.annotation(this.opts.to, this.root);
        } else {
            content = this.outputFile() + '.map';
        }
        let eol = '\n';
        if (this.css.includes('\r\n')) eol = '\r\n';
        this.css += eol + '/*# sourceMappingURL=' + content + ' */';
    }
    applyPrevMaps() {
        for (let prev of this.previous()){
            let from = this.toUrl(this.path(prev.file));
            let root = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
                map = new SourceMapConsumer(prev.text);
                if (map.sourcesContent) {
                    map.sourcesContent = null;
                }
            } else {
                map = prev.consumer();
            }
            this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
        }
    }
    clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
            let node;
            for(let i = this.root.nodes.length - 1; i >= 0; i--){
                node = this.root.nodes[i];
                if (node.type !== 'comment') continue;
                if (node.text.startsWith('# sourceMappingURL=')) {
                    this.root.removeChild(i);
                }
            }
        } else if (this.css) {
            this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, '');
        }
    }
    generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) {
            return this.generateMap();
        } else {
            let result = '';
            this.stringify(this.root, (i)=>{
                result += i;
            });
            return [
                result
            ];
        }
    }
    generateMap() {
        if (this.root) {
            this.generateString();
        } else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator.fromSourceMap(prev, {
                ignoreInvalidMapping: true
            });
        } else {
            this.map = new SourceMapGenerator({
                file: this.outputFile(),
                ignoreInvalidMapping: true
            });
            this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : '<no source>'
            });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) {
            return [
                this.css
            ];
        } else {
            return [
                this.css,
                this.map
            ];
        }
    }
    generateString() {
        this.css = '';
        this.map = new SourceMapGenerator({
            file: this.outputFile(),
            ignoreInvalidMapping: true
        });
        let line = 1;
        let column = 1;
        let noSource = '<no source>';
        let mapping = {
            generated: {
                column: 0,
                line: 0
            },
            original: {
                column: 0,
                line: 0
            },
            source: ''
        };
        let last, lines;
        this.stringify(this.root, (str, node, type)=>{
            this.css += str;
            if (node && type !== 'end') {
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                if (node.source && node.source.start) {
                    mapping.source = this.sourcePath(node);
                    mapping.original.line = node.source.start.line;
                    mapping.original.column = node.source.start.column - 1;
                    this.map.addMapping(mapping);
                } else {
                    mapping.source = noSource;
                    mapping.original.line = 1;
                    mapping.original.column = 0;
                    this.map.addMapping(mapping);
                }
            }
            lines = str.match(/\n/g);
            if (lines) {
                line += lines.length;
                last = str.lastIndexOf('\n');
                column = str.length - last;
            } else {
                column += str.length;
            }
            if (node && type !== 'start') {
                let p = node.parent || {
                    raws: {}
                };
                let childless = node.type === 'decl' || node.type === 'atrule' && !node.nodes;
                if (!childless || node !== p.last || p.raws.semicolon) {
                    if (node.source && node.source.end) {
                        mapping.source = this.sourcePath(node);
                        mapping.original.line = node.source.end.line;
                        mapping.original.column = node.source.end.column - 1;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 2;
                        this.map.addMapping(mapping);
                    } else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 1;
                        this.map.addMapping(mapping);
                    }
                }
            }
        });
    }
    isAnnotation() {
        if (this.isInline()) {
            return true;
        }
        if (typeof this.mapOpts.annotation !== 'undefined') {
            return this.mapOpts.annotation;
        }
        if (this.previous().length) {
            return this.previous().some((i)=>i.annotation);
        }
        return true;
    }
    isInline() {
        if (typeof this.mapOpts.inline !== 'undefined') {
            return this.mapOpts.inline;
        }
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== 'undefined' && annotation !== true) {
            return false;
        }
        if (this.previous().length) {
            return this.previous().some((i)=>i.inline);
        }
        return true;
    }
    isMap() {
        if (typeof this.opts.map !== 'undefined') {
            return !!this.opts.map;
        }
        return this.previous().length > 0;
    }
    isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== 'undefined') {
            return this.mapOpts.sourcesContent;
        }
        if (this.previous().length) {
            return this.previous().some((i)=>i.withContent());
        }
        return true;
    }
    outputFile() {
        if (this.opts.to) {
            return this.path(this.opts.to);
        } else if (this.opts.from) {
            return this.path(this.opts.from);
        } else {
            return 'to.css';
        }
    }
    path(file) {
        if (this.mapOpts.absolute) return file;
        if (file.charCodeAt(0) === 60 /* `<` */ ) return file;
        if (/^\w+:\/\//.test(file)) return file;
        let cached = this.memoizedPaths.get(file);
        if (cached) return cached;
        let from = this.opts.to ? dirname(this.opts.to) : '.';
        if (typeof this.mapOpts.annotation === 'string') {
            from = dirname(resolve(from, this.mapOpts.annotation));
        }
        let path = relative(from, file);
        this.memoizedPaths.set(file, path);
        return path;
    }
    previous() {
        if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) {
                this.root.walk((node)=>{
                    if (node.source && node.source.input.map) {
                        let map = node.source.input.map;
                        if (!this.previousMaps.includes(map)) {
                            this.previousMaps.push(map);
                        }
                    }
                });
            } else {
                let input = new Input(this.originalCSS, this.opts);
                if (input.map) this.previousMaps.push(input.map);
            }
        }
        return this.previousMaps;
    }
    setSourcesContent() {
        let already = {};
        if (this.root) {
            this.root.walk((node)=>{
                if (node.source) {
                    let from = node.source.input.from;
                    if (from && !already[from]) {
                        already[from] = true;
                        let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                        this.map.setSourceContent(fromUrl, node.source.input.css);
                    }
                }
            });
        } else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : '<no source>';
            this.map.setSourceContent(from, this.css);
        }
    }
    sourcePath(node) {
        if (this.mapOpts.from) {
            return this.toUrl(this.mapOpts.from);
        } else if (this.usesFileUrls) {
            return this.toFileUrl(node.source.input.from);
        } else {
            return this.toUrl(this.path(node.source.input.from));
        }
    }
    toBase64(str) {
        if ("TURBOPACK compile-time truthy", 1) {
            return Buffer.from(str).toString('base64');
        } else {
            "TURBOPACK unreachable";
        }
    }
    toFileUrl(path) {
        let cached = this.memoizedFileURLs.get(path);
        if (cached) return cached;
        if (pathToFileURL) {
            let fileURL = pathToFileURL(path).toString();
            this.memoizedFileURLs.set(path, fileURL);
            return fileURL;
        } else {
            throw new Error('`map.absolute` option is not available in this PostCSS build');
        }
    }
    toUrl(path) {
        let cached = this.memoizedURLs.get(path);
        if (cached) return cached;
        if (sep === '\\') {
            path = path.replace(/\\/g, '/');
        }
        let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
        this.memoizedURLs.set(path, url);
        return url;
    }
}
module.exports = MapGenerator;
}}),
"[project]/node_modules/postcss/lib/parse.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_require__("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let Input = __turbopack_require__("[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)");
let Parser = __turbopack_require__("[project]/node_modules/postcss/lib/parser.js [postcss] (ecmascript)");
function parse(css, opts) {
    let input = new Input(css, opts);
    let parser = new Parser(input);
    try {
        parser.parse();
    } catch (e) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (e.name === 'CssSyntaxError' && opts && opts.from) {
                if (/\.scss$/i.test(opts.from)) {
                    e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
                } else if (/\.sass/i.test(opts.from)) {
                    e.message += '\nYou tried to parse Sass with ' + 'the standard CSS parser; ' + 'try again with the postcss-sass parser';
                } else if (/\.less$/i.test(opts.from)) {
                    e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
                }
            }
        }
        throw e;
    }
    return parser.root;
}
module.exports = parse;
parse.default = parse;
Container.registerParse(parse);
}}),
"[project]/node_modules/postcss/lib/warning.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
class Warning {
    constructor(text, opts = {}){
        this.type = 'warning';
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) {
            return this.node.error(this.text, {
                index: this.index,
                plugin: this.plugin,
                word: this.word
            }).message;
        }
        if (this.plugin) {
            return this.plugin + ': ' + this.text;
        }
        return this.text;
    }
}
module.exports = Warning;
Warning.default = Warning;
}}),
"[project]/node_modules/postcss/lib/result.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Warning = __turbopack_require__("[project]/node_modules/postcss/lib/warning.js [postcss] (ecmascript)");
class Result {
    constructor(processor, root, opts){
        this.processor = processor;
        this.messages = [];
        this.root = root;
        this.opts = opts;
        this.css = undefined;
        this.map = undefined;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
                opts.plugin = this.lastPlugin.postcssPlugin;
            }
        }
        let warning = new Warning(text, opts);
        this.messages.push(warning);
        return warning;
    }
    warnings() {
        return this.messages.filter((i)=>i.type === 'warning');
    }
    get content() {
        return this.css;
    }
}
module.exports = Result;
Result.default = Result;
}}),
"[project]/node_modules/postcss/lib/warn-once.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/* eslint-disable no-console */ 'use strict';
let printed = {};
module.exports = function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== 'undefined' && console.warn) {
        console.warn(message);
    }
};
}}),
"[project]/node_modules/postcss/lib/lazy-result.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_require__("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let Document = __turbopack_require__("[project]/node_modules/postcss/lib/document.js [postcss] (ecmascript)");
let MapGenerator = __turbopack_require__("[project]/node_modules/postcss/lib/map-generator.js [postcss] (ecmascript)");
let parse = __turbopack_require__("[project]/node_modules/postcss/lib/parse.js [postcss] (ecmascript)");
let Result = __turbopack_require__("[project]/node_modules/postcss/lib/result.js [postcss] (ecmascript)");
let Root = __turbopack_require__("[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)");
let stringify = __turbopack_require__("[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)");
let { isClean, my } = __turbopack_require__("[project]/node_modules/postcss/lib/symbols.js [postcss] (ecmascript)");
let warnOnce = __turbopack_require__("[project]/node_modules/postcss/lib/warn-once.js [postcss] (ecmascript)");
const TYPE_TO_CLASS_NAME = {
    atrule: 'AtRule',
    comment: 'Comment',
    decl: 'Declaration',
    document: 'Document',
    root: 'Root',
    rule: 'Rule'
};
const PLUGIN_PROPS = {
    AtRule: true,
    AtRuleExit: true,
    Comment: true,
    CommentExit: true,
    Declaration: true,
    DeclarationExit: true,
    Document: true,
    DocumentExit: true,
    Once: true,
    OnceExit: true,
    postcssPlugin: true,
    prepare: true,
    Root: true,
    RootExit: true,
    Rule: true,
    RuleExit: true
};
const NOT_VISITORS = {
    Once: true,
    postcssPlugin: true,
    prepare: true
};
const CHILDREN = 0;
function isPromise(obj) {
    return typeof obj === 'object' && typeof obj.then === 'function';
}
function getEvents(node) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME[node.type];
    if (node.type === 'decl') {
        key = node.prop.toLowerCase();
    } else if (node.type === 'atrule') {
        key = node.name.toLowerCase();
    }
    if (key && node.append) {
        return [
            type,
            type + '-' + key,
            CHILDREN,
            type + 'Exit',
            type + 'Exit-' + key
        ];
    } else if (key) {
        return [
            type,
            type + '-' + key,
            type + 'Exit',
            type + 'Exit-' + key
        ];
    } else if (node.append) {
        return [
            type,
            CHILDREN,
            type + 'Exit'
        ];
    } else {
        return [
            type,
            type + 'Exit'
        ];
    }
}
function toStack(node) {
    let events;
    if (node.type === 'document') {
        events = [
            'Document',
            CHILDREN,
            'DocumentExit'
        ];
    } else if (node.type === 'root') {
        events = [
            'Root',
            CHILDREN,
            'RootExit'
        ];
    } else {
        events = getEvents(node);
    }
    return {
        eventIndex: 0,
        events,
        iterator: 0,
        node,
        visitorIndex: 0,
        visitors: []
    };
}
function cleanMarks(node) {
    node[isClean] = false;
    if (node.nodes) node.nodes.forEach((i)=>cleanMarks(i));
    return node;
}
let postcss = {};
class LazyResult {
    constructor(processor, css, opts){
        this.stringified = false;
        this.processed = false;
        let root;
        if (typeof css === 'object' && css !== null && (css.type === 'root' || css.type === 'document')) {
            root = cleanMarks(css);
        } else if (css instanceof LazyResult || css instanceof Result) {
            root = cleanMarks(css.root);
            if (css.map) {
                if (typeof opts.map === 'undefined') opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            let parser = parse;
            if (opts.syntax) parser = opts.syntax.parse;
            if (opts.parser) parser = opts.parser;
            if (parser.parse) parser = parser.parse;
            try {
                root = parser(css, opts);
            } catch (error) {
                this.processed = true;
                this.error = error;
            }
            if (root && !root[my]) {
                /* c8 ignore next 2 */ Container.rebuild(root);
            }
        }
        this.result = new Result(processor, root, opts);
        this.helpers = {
            ...postcss,
            postcss,
            result: this.result
        };
        this.plugins = this.processor.plugins.map((plugin)=>{
            if (typeof plugin === 'object' && plugin.prepare) {
                return {
                    ...plugin,
                    ...plugin.prepare(this.result)
                };
            } else {
                return plugin;
            }
        });
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) {
            this.processing = this.runAsync();
        }
        return this.processing;
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    getAsyncError() {
        throw new Error('Use process(css).then(cb) to work with async plugins');
    }
    handleError(error, node) {
        let plugin = this.result.lastPlugin;
        try {
            if (node) node.addToError(error);
            this.error = error;
            if (error.name === 'CssSyntaxError' && !error.plugin) {
                error.plugin = plugin.postcssPlugin;
                error.setMessage();
            } else if (plugin.postcssVersion) {
                if ("TURBOPACK compile-time truthy", 1) {
                    let pluginName = plugin.postcssPlugin;
                    let pluginVer = plugin.postcssVersion;
                    let runtimeVer = this.result.processor.version;
                    let a = pluginVer.split('.');
                    let b = runtimeVer.split('.');
                    if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
                        // eslint-disable-next-line no-console
                        console.error('Unknown error from PostCSS plugin. Your current PostCSS ' + 'version is ' + runtimeVer + ', but ' + pluginName + ' uses ' + pluginVer + '. Perhaps this is the source of the error below.');
                    }
                }
            }
        } catch (err) {
            /* c8 ignore next 3 */ // eslint-disable-next-line no-console
            if (console && console.error) console.error(err);
        }
        return error;
    }
    prepareVisitors() {
        this.listeners = {};
        let add = (plugin, type, cb)=>{
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([
                plugin,
                cb
            ]);
        };
        for (let plugin of this.plugins){
            if (typeof plugin === 'object') {
                for(let event in plugin){
                    if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
                        throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. ` + `Try to update PostCSS (${this.processor.version} now).`);
                    }
                    if (!NOT_VISITORS[event]) {
                        if (typeof plugin[event] === 'object') {
                            for(let filter in plugin[event]){
                                if (filter === '*') {
                                    add(plugin, event, plugin[event][filter]);
                                } else {
                                    add(plugin, event + '-' + filter.toLowerCase(), plugin[event][filter]);
                                }
                            }
                        } else if (typeof plugin[event] === 'function') {
                            add(plugin, event, plugin[event]);
                        }
                    }
                }
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
        this.plugin = 0;
        for(let i = 0; i < this.plugins.length; i++){
            let plugin = this.plugins[i];
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) {
                try {
                    await promise;
                } catch (error) {
                    throw this.handleError(error);
                }
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                let stack = [
                    toStack(root)
                ];
                while(stack.length > 0){
                    let promise = this.visitTick(stack);
                    if (isPromise(promise)) {
                        try {
                            await promise;
                        } catch (e) {
                            let node = stack[stack.length - 1].node;
                            throw this.handleError(e, node);
                        }
                    }
                }
            }
            if (this.listeners.OnceExit) {
                for (let [plugin, visitor] of this.listeners.OnceExit){
                    this.result.lastPlugin = plugin;
                    try {
                        if (root.type === 'document') {
                            let roots = root.nodes.map((subRoot)=>visitor(subRoot, this.helpers));
                            await Promise.all(roots);
                        } else {
                            await visitor(root, this.helpers);
                        }
                    } catch (e) {
                        throw this.handleError(e);
                    }
                }
            }
        }
        this.processed = true;
        return this.stringify();
    }
    runOnRoot(plugin) {
        this.result.lastPlugin = plugin;
        try {
            if (typeof plugin === 'object' && plugin.Once) {
                if (this.result.root.type === 'document') {
                    let roots = this.result.root.nodes.map((root)=>plugin.Once(root, this.helpers));
                    if (isPromise(roots[0])) {
                        return Promise.all(roots);
                    }
                    return roots;
                }
                return plugin.Once(this.result.root, this.helpers);
            } else if (typeof plugin === 'function') {
                return plugin(this.result.root, this.result);
            }
        } catch (error) {
            throw this.handleError(error);
        }
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) {
            throw this.getAsyncError();
        }
        for (let plugin of this.plugins){
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) {
                throw this.getAsyncError();
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                this.walkSync(root);
            }
            if (this.listeners.OnceExit) {
                if (root.type === 'document') {
                    for (let subRoot of root.nodes){
                        this.visitSync(this.listeners.OnceExit, subRoot);
                    }
                } else {
                    this.visitSync(this.listeners.OnceExit, root);
                }
            }
        }
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (!('from' in this.opts)) {
                warnOnce('Without `from` option PostCSS could generate wrong source map ' + 'and will not find Browserslist config. Set it to CSS file path ' + 'or to `undefined` to prevent this warning.');
            }
        }
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this.css;
    }
    visitSync(visitors, node) {
        for (let [plugin, visitor] of visitors){
            this.result.lastPlugin = plugin;
            let promise;
            try {
                promise = visitor(node, this.helpers);
            } catch (e) {
                throw this.handleError(e, node.proxyOf);
            }
            if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
                return true;
            }
            if (isPromise(promise)) {
                throw this.getAsyncError();
            }
        }
    }
    visitTick(stack) {
        let visit = stack[stack.length - 1];
        let { node, visitors } = visit;
        if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
            stack.pop();
            return;
        }
        if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
            let [plugin, visitor] = visitors[visit.visitorIndex];
            visit.visitorIndex += 1;
            if (visit.visitorIndex === visitors.length) {
                visit.visitors = [];
                visit.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin;
            try {
                return visitor(node.toProxy(), this.helpers);
            } catch (e) {
                throw this.handleError(e, node);
            }
        }
        if (visit.iterator !== 0) {
            let iterator = visit.iterator;
            let child;
            while(child = node.nodes[node.indexes[iterator]]){
                node.indexes[iterator] += 1;
                if (!child[isClean]) {
                    child[isClean] = true;
                    stack.push(toStack(child));
                    return;
                }
            }
            visit.iterator = 0;
            delete node.indexes[iterator];
        }
        let events = visit.events;
        while(visit.eventIndex < events.length){
            let event = events[visit.eventIndex];
            visit.eventIndex += 1;
            if (event === CHILDREN) {
                if (node.nodes && node.nodes.length) {
                    node[isClean] = true;
                    visit.iterator = node.getIterator();
                }
                return;
            } else if (this.listeners[event]) {
                visit.visitors = this.listeners[event];
                return;
            }
        }
        stack.pop();
    }
    walkSync(node) {
        node[isClean] = true;
        let events = getEvents(node);
        for (let event of events){
            if (event === CHILDREN) {
                if (node.nodes) {
                    node.each((child)=>{
                        if (!child[isClean]) this.walkSync(child);
                    });
                }
            } else {
                let visitors = this.listeners[event];
                if (visitors) {
                    if (this.visitSync(visitors, node.toProxy())) return;
                }
            }
        }
    }
    warnings() {
        return this.sync().warnings();
    }
    get content() {
        return this.stringify().content;
    }
    get css() {
        return this.stringify().css;
    }
    get map() {
        return this.stringify().map;
    }
    get messages() {
        return this.sync().messages;
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        return this.sync().root;
    }
    get [Symbol.toStringTag]() {
        return 'LazyResult';
    }
}
LazyResult.registerPostcss = (dependant)=>{
    postcss = dependant;
};
module.exports = LazyResult;
LazyResult.default = LazyResult;
Root.registerLazyResult(LazyResult);
Document.registerLazyResult(LazyResult);
}}),
"[project]/node_modules/postcss/lib/processor.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let Document = __turbopack_require__("[project]/node_modules/postcss/lib/document.js [postcss] (ecmascript)");
let LazyResult = __turbopack_require__("[project]/node_modules/postcss/lib/lazy-result.js [postcss] (ecmascript)");
let NoWorkResult = __turbopack_require__("[project]/node_modules/postcss/lib/no-work-result.js [postcss] (ecmascript)");
let Root = __turbopack_require__("[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)");
class Processor {
    constructor(plugins = []){
        this.version = '8.4.49';
        this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
        let normalized = [];
        for (let i of plugins){
            if (i.postcss === true) {
                i = i();
            } else if (i.postcss) {
                i = i.postcss;
            }
            if (typeof i === 'object' && Array.isArray(i.plugins)) {
                normalized = normalized.concat(i.plugins);
            } else if (typeof i === 'object' && i.postcssPlugin) {
                normalized.push(i);
            } else if (typeof i === 'function') {
                normalized.push(i);
            } else if (typeof i === 'object' && (i.parse || i.stringify)) {
                if ("TURBOPACK compile-time truthy", 1) {
                    throw new Error('PostCSS syntaxes cannot be used as plugins. Instead, please use ' + 'one of the syntax/parser/stringifier options as outlined ' + 'in your PostCSS runner documentation.');
                }
            } else {
                throw new Error(i + ' is not a PostCSS plugin');
            }
        }
        return normalized;
    }
    process(css, opts = {}) {
        if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
            return new NoWorkResult(this, css, opts);
        } else {
            return new LazyResult(this, css, opts);
        }
    }
    use(plugin) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin
        ]));
        return this;
    }
}
module.exports = Processor;
Processor.default = Processor;
Root.registerProcessor(Processor);
Document.registerProcessor(Processor);
}}),
"[project]/node_modules/postcss/lib/postcss.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let AtRule = __turbopack_require__("[project]/node_modules/postcss/lib/at-rule.js [postcss] (ecmascript)");
let Comment = __turbopack_require__("[project]/node_modules/postcss/lib/comment.js [postcss] (ecmascript)");
let Container = __turbopack_require__("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let CssSyntaxError = __turbopack_require__("[project]/node_modules/postcss/lib/css-syntax-error.js [postcss] (ecmascript)");
let Declaration = __turbopack_require__("[project]/node_modules/postcss/lib/declaration.js [postcss] (ecmascript)");
let Document = __turbopack_require__("[project]/node_modules/postcss/lib/document.js [postcss] (ecmascript)");
let fromJSON = __turbopack_require__("[project]/node_modules/postcss/lib/fromJSON.js [postcss] (ecmascript)");
let Input = __turbopack_require__("[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)");
let LazyResult = __turbopack_require__("[project]/node_modules/postcss/lib/lazy-result.js [postcss] (ecmascript)");
let list = __turbopack_require__("[project]/node_modules/postcss/lib/list.js [postcss] (ecmascript)");
let Node = __turbopack_require__("[project]/node_modules/postcss/lib/node.js [postcss] (ecmascript)");
let parse = __turbopack_require__("[project]/node_modules/postcss/lib/parse.js [postcss] (ecmascript)");
let Processor = __turbopack_require__("[project]/node_modules/postcss/lib/processor.js [postcss] (ecmascript)");
let Result = __turbopack_require__("[project]/node_modules/postcss/lib/result.js [postcss] (ecmascript)");
let Root = __turbopack_require__("[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)");
let Rule = __turbopack_require__("[project]/node_modules/postcss/lib/rule.js [postcss] (ecmascript)");
let stringify = __turbopack_require__("[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)");
let Warning = __turbopack_require__("[project]/node_modules/postcss/lib/warning.js [postcss] (ecmascript)");
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
    }
    return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        // eslint-disable-next-line no-console
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            // eslint-disable-next-line no-console
            console.warn(name + ': postcss.plugin was deprecated. Migration guide:\n' + 'https://evilmartians.com/chronicles/postcss-8-plugin-migration');
            if (process.env.LANG && process.env.LANG.startsWith('cn')) {
                /* c8 ignore next 7 */ // eslint-disable-next-line no-console
                console.warn(name + ': 里面 postcss.plugin 被弃用. 迁移指南:\n' + 'https://www.w3ctech.com/topic/2226');
            }
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, 'postcss', {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment(defaults);
postcss.atRule = (defaults)=>new AtRule(defaults);
postcss.decl = (defaults)=>new Declaration(defaults);
postcss.rule = (defaults)=>new Rule(defaults);
postcss.root = (defaults)=>new Root(defaults);
postcss.document = (defaults)=>new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
module.exports = postcss;
postcss.default = postcss;
}}),
"[project]/node_modules/postcss/lib/postcss.mjs [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AtRule": (()=>AtRule),
    "Comment": (()=>Comment),
    "Container": (()=>Container),
    "CssSyntaxError": (()=>CssSyntaxError),
    "Declaration": (()=>Declaration),
    "Document": (()=>Document),
    "Input": (()=>Input),
    "Node": (()=>Node),
    "Processor": (()=>Processor),
    "Result": (()=>Result),
    "Root": (()=>Root),
    "Rule": (()=>Rule),
    "Warning": (()=>Warning),
    "atRule": (()=>atRule),
    "comment": (()=>comment),
    "decl": (()=>decl),
    "default": (()=>__TURBOPACK__default__export__),
    "document": (()=>document),
    "fromJSON": (()=>fromJSON),
    "list": (()=>list),
    "parse": (()=>parse),
    "plugin": (()=>plugin),
    "root": (()=>root),
    "rule": (()=>rule),
    "stringify": (()=>stringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/postcss/lib/postcss.js [postcss] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"];
const stringify = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].stringify;
const fromJSON = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].fromJSON;
const plugin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].plugin;
const parse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].parse;
const list = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].list;
const document = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].document;
const comment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].comment;
const atRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].atRule;
const rule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].rule;
const decl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].decl;
const root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].root;
const CssSyntaxError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].CssSyntaxError;
const Declaration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Declaration;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Container;
const Processor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Processor;
const Document = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Document;
const Comment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Comment;
const Warning = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Warning;
const AtRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].AtRule;
const Result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Result;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Input;
const Rule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Rule;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Root;
const Node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Node;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__870d73._.js.map