
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $24c52f343453d62d$var$ownKeys = function(o) {
    $24c52f343453d62d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $24c52f343453d62d$var$ownKeys(o);
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $24c52f343453d62d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $24c52f343453d62d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __esDecorate: $24c52f343453d62d$export$3a84e1ae4e97e9b0,
    __runInitializers: $24c52f343453d62d$export$d831c04e792af3d,
    __propKey: $24c52f343453d62d$export$6a2a36740a146cb8,
    __setFunctionName: $24c52f343453d62d$export$d1a06452d3489bc7,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $24c52f343453d62d$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $53e576283d0b4ca1$var$t = window, $53e576283d0b4ca1$export$b4d10f6001c083c2 = $53e576283d0b4ca1$var$t.ShadowRoot && (void 0 === $53e576283d0b4ca1$var$t.ShadyCSS || $53e576283d0b4ca1$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $53e576283d0b4ca1$var$s = Symbol(), $53e576283d0b4ca1$var$n = new WeakMap;
class $53e576283d0b4ca1$export$505d1e8739bad805 {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $53e576283d0b4ca1$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($53e576283d0b4ca1$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $53e576283d0b4ca1$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $53e576283d0b4ca1$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $53e576283d0b4ca1$export$8d80f9cac07cdb3 = (t)=>new $53e576283d0b4ca1$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $53e576283d0b4ca1$var$s), $53e576283d0b4ca1$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $53e576283d0b4ca1$export$505d1e8739bad805(n, t, $53e576283d0b4ca1$var$s);
}, $53e576283d0b4ca1$export$2ca4a66ec4cecb90 = (s, n)=>{
    $53e576283d0b4ca1$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $53e576283d0b4ca1$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $53e576283d0b4ca1$export$ee69dfd951e24778 = $53e576283d0b4ca1$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $53e576283d0b4ca1$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $b22ad1691173679b$var$s;
const $b22ad1691173679b$var$e = window, $b22ad1691173679b$var$r = $b22ad1691173679b$var$e.trustedTypes, $b22ad1691173679b$var$h = $b22ad1691173679b$var$r ? $b22ad1691173679b$var$r.emptyScript : "", $b22ad1691173679b$var$o = $b22ad1691173679b$var$e.reactiveElementPolyfillSupport, $b22ad1691173679b$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $b22ad1691173679b$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, $b22ad1691173679b$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $b22ad1691173679b$var$l = {
    attribute: !0,
    type: String,
    converter: $b22ad1691173679b$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $b22ad1691173679b$export$53a6892c50694894
}, $b22ad1691173679b$var$d = "finalized";
class $b22ad1691173679b$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $b22ad1691173679b$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $b22ad1691173679b$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty($b22ad1691173679b$var$d)) return !1;
        this[$b22ad1691173679b$var$d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, $53e576283d0b4ca1$export$ee69dfd951e24778)(i));
        } else void 0 !== i && s.push((0, $53e576283d0b4ca1$export$ee69dfd951e24778)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $53e576283d0b4ca1$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $b22ad1691173679b$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $b22ad1691173679b$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $b22ad1691173679b$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $b22ad1691173679b$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$b22ad1691173679b$export$c7c07a37856565d[$b22ad1691173679b$var$d] = !0, $b22ad1691173679b$export$c7c07a37856565d.elementProperties = new Map, $b22ad1691173679b$export$c7c07a37856565d.elementStyles = [], $b22ad1691173679b$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $b22ad1691173679b$var$o || $b22ad1691173679b$var$o({
    ReactiveElement: $b22ad1691173679b$export$c7c07a37856565d
}), (null !== ($b22ad1691173679b$var$s = $b22ad1691173679b$var$e.reactiveElementVersions) && void 0 !== $b22ad1691173679b$var$s ? $b22ad1691173679b$var$s : $b22ad1691173679b$var$e.reactiveElementVersions = []).push("1.6.3");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $1cb21db0eb1a0be5$var$t;
const $1cb21db0eb1a0be5$var$i = window, $1cb21db0eb1a0be5$var$s = $1cb21db0eb1a0be5$var$i.trustedTypes, $1cb21db0eb1a0be5$var$e = $1cb21db0eb1a0be5$var$s ? $1cb21db0eb1a0be5$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $1cb21db0eb1a0be5$var$o = "$lit$", $1cb21db0eb1a0be5$var$n = `lit$${(Math.random() + "").slice(9)}$`, $1cb21db0eb1a0be5$var$l = "?" + $1cb21db0eb1a0be5$var$n, $1cb21db0eb1a0be5$var$h = `<${$1cb21db0eb1a0be5$var$l}>`, $1cb21db0eb1a0be5$var$r = document, $1cb21db0eb1a0be5$var$u = ()=>$1cb21db0eb1a0be5$var$r.createComment(""), $1cb21db0eb1a0be5$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $1cb21db0eb1a0be5$var$c = Array.isArray, $1cb21db0eb1a0be5$var$v = (t)=>$1cb21db0eb1a0be5$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $1cb21db0eb1a0be5$var$a = "[ \t\n\f\r]", $1cb21db0eb1a0be5$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $1cb21db0eb1a0be5$var$_ = /-->/g, $1cb21db0eb1a0be5$var$m = />/g, $1cb21db0eb1a0be5$var$p = RegExp(`>|${$1cb21db0eb1a0be5$var$a}(?:([^\\s"'>=/]+)(${$1cb21db0eb1a0be5$var$a}*=${$1cb21db0eb1a0be5$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $1cb21db0eb1a0be5$var$g = /'/g, $1cb21db0eb1a0be5$var$$ = /"/g, $1cb21db0eb1a0be5$var$y = /^(?:script|style|textarea|title)$/i, $1cb21db0eb1a0be5$var$w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $1cb21db0eb1a0be5$export$c0bb0b647f701bb5 = $1cb21db0eb1a0be5$var$w(1), $1cb21db0eb1a0be5$export$7ed1367e7fa1ad68 = $1cb21db0eb1a0be5$var$w(2), $1cb21db0eb1a0be5$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $1cb21db0eb1a0be5$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $1cb21db0eb1a0be5$var$E = new WeakMap, $1cb21db0eb1a0be5$var$C = $1cb21db0eb1a0be5$var$r.createTreeWalker($1cb21db0eb1a0be5$var$r, 129, null, !1);
function $1cb21db0eb1a0be5$var$P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $1cb21db0eb1a0be5$var$e ? $1cb21db0eb1a0be5$var$e.createHTML(i) : i;
}
const $1cb21db0eb1a0be5$var$V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = $1cb21db0eb1a0be5$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $1cb21db0eb1a0be5$var$f ? "!--" === c[1] ? u = $1cb21db0eb1a0be5$var$_ : void 0 !== c[1] ? u = $1cb21db0eb1a0be5$var$m : void 0 !== c[2] ? ($1cb21db0eb1a0be5$var$y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = $1cb21db0eb1a0be5$var$p) : void 0 !== c[3] && (u = $1cb21db0eb1a0be5$var$p) : u === $1cb21db0eb1a0be5$var$p ? ">" === c[0] ? (u = null != l ? l : $1cb21db0eb1a0be5$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? $1cb21db0eb1a0be5$var$p : '"' === c[3] ? $1cb21db0eb1a0be5$var$$ : $1cb21db0eb1a0be5$var$g) : u === $1cb21db0eb1a0be5$var$$ || u === $1cb21db0eb1a0be5$var$g ? u = $1cb21db0eb1a0be5$var$p : u === $1cb21db0eb1a0be5$var$_ || u === $1cb21db0eb1a0be5$var$m ? u = $1cb21db0eb1a0be5$var$f : (u = $1cb21db0eb1a0be5$var$p, l = void 0);
        const w = u === $1cb21db0eb1a0be5$var$p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === $1cb21db0eb1a0be5$var$f ? s + $1cb21db0eb1a0be5$var$h : v >= 0 ? (e.push(d), s.slice(0, v) + $1cb21db0eb1a0be5$var$o + s.slice(v) + $1cb21db0eb1a0be5$var$n + w) : s + $1cb21db0eb1a0be5$var$n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        $1cb21db0eb1a0be5$var$P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class $1cb21db0eb1a0be5$var$N {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = $1cb21db0eb1a0be5$var$V(t, i);
        if (this.el = $1cb21db0eb1a0be5$var$N.createElement(a, e), $1cb21db0eb1a0be5$var$C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = $1cb21db0eb1a0be5$var$C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith($1cb21db0eb1a0be5$var$o) || i.startsWith($1cb21db0eb1a0be5$var$n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + $1cb21db0eb1a0be5$var$o).split($1cb21db0eb1a0be5$var$n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $1cb21db0eb1a0be5$var$H : "?" === i[1] ? $1cb21db0eb1a0be5$var$L : "@" === i[1] ? $1cb21db0eb1a0be5$var$z : $1cb21db0eb1a0be5$var$k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if ($1cb21db0eb1a0be5$var$y.test(h.tagName)) {
                    const t = h.textContent.split($1cb21db0eb1a0be5$var$n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = $1cb21db0eb1a0be5$var$s ? $1cb21db0eb1a0be5$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], $1cb21db0eb1a0be5$var$u()), $1cb21db0eb1a0be5$var$C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], $1cb21db0eb1a0be5$var$u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === $1cb21db0eb1a0be5$var$l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf($1cb21db0eb1a0be5$var$n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += $1cb21db0eb1a0be5$var$n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = $1cb21db0eb1a0be5$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $1cb21db0eb1a0be5$var$S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $1cb21db0eb1a0be5$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $1cb21db0eb1a0be5$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $1cb21db0eb1a0be5$var$S(t, r._$AS(t, i.values), r, e)), i;
}
class $1cb21db0eb1a0be5$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $1cb21db0eb1a0be5$var$r).importNode(s, !0);
        $1cb21db0eb1a0be5$var$C.currentNode = o;
        let n = $1cb21db0eb1a0be5$var$C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new $1cb21db0eb1a0be5$var$R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new $1cb21db0eb1a0be5$var$Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = $1cb21db0eb1a0be5$var$C.nextNode(), l++);
        }
        return $1cb21db0eb1a0be5$var$C.currentNode = $1cb21db0eb1a0be5$var$r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $1cb21db0eb1a0be5$var$R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $1cb21db0eb1a0be5$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $1cb21db0eb1a0be5$var$S(this, t, i), $1cb21db0eb1a0be5$var$d(t) ? t === $1cb21db0eb1a0be5$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $1cb21db0eb1a0be5$export$45b790e32b2810ee && this._$AR(), this._$AH = $1cb21db0eb1a0be5$export$45b790e32b2810ee) : t !== this._$AH && t !== $1cb21db0eb1a0be5$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $1cb21db0eb1a0be5$var$v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $1cb21db0eb1a0be5$export$45b790e32b2810ee && $1cb21db0eb1a0be5$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.$($1cb21db0eb1a0be5$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $1cb21db0eb1a0be5$var$N.createElement($1cb21db0eb1a0be5$var$P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new $1cb21db0eb1a0be5$var$M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $1cb21db0eb1a0be5$var$E.get(t.strings);
        return void 0 === i && $1cb21db0eb1a0be5$var$E.set(t.strings, i = new $1cb21db0eb1a0be5$var$N(t)), i;
    }
    T(t) {
        $1cb21db0eb1a0be5$var$c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $1cb21db0eb1a0be5$var$R(this.k($1cb21db0eb1a0be5$var$u()), this.k($1cb21db0eb1a0be5$var$u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $1cb21db0eb1a0be5$var$k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $1cb21db0eb1a0be5$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $1cb21db0eb1a0be5$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $1cb21db0eb1a0be5$var$S(this, t, i, 0), n = !$1cb21db0eb1a0be5$var$d(t) || t !== this._$AH && t !== $1cb21db0eb1a0be5$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $1cb21db0eb1a0be5$var$S(this, e[s + l], i, l), h === $1cb21db0eb1a0be5$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$1cb21db0eb1a0be5$var$d(h) || h !== this._$AH[l]), h === $1cb21db0eb1a0be5$export$45b790e32b2810ee ? t = $1cb21db0eb1a0be5$export$45b790e32b2810ee : t !== $1cb21db0eb1a0be5$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $1cb21db0eb1a0be5$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $1cb21db0eb1a0be5$var$H extends $1cb21db0eb1a0be5$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $1cb21db0eb1a0be5$export$45b790e32b2810ee ? void 0 : t;
    }
}
const $1cb21db0eb1a0be5$var$I = $1cb21db0eb1a0be5$var$s ? $1cb21db0eb1a0be5$var$s.emptyScript : "";
class $1cb21db0eb1a0be5$var$L extends $1cb21db0eb1a0be5$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== $1cb21db0eb1a0be5$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $1cb21db0eb1a0be5$var$I) : this.element.removeAttribute(this.name);
    }
}
class $1cb21db0eb1a0be5$var$z extends $1cb21db0eb1a0be5$var$k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $1cb21db0eb1a0be5$var$S(this, t, i, 0)) && void 0 !== s ? s : $1cb21db0eb1a0be5$export$45b790e32b2810ee) === $1cb21db0eb1a0be5$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $1cb21db0eb1a0be5$export$45b790e32b2810ee && e !== $1cb21db0eb1a0be5$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $1cb21db0eb1a0be5$export$45b790e32b2810ee && (e === $1cb21db0eb1a0be5$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $1cb21db0eb1a0be5$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $1cb21db0eb1a0be5$var$S(this, t);
    }
}
const $1cb21db0eb1a0be5$export$8613d1ca9052b22e = {
    O: $1cb21db0eb1a0be5$var$o,
    P: $1cb21db0eb1a0be5$var$n,
    A: $1cb21db0eb1a0be5$var$l,
    C: 1,
    M: $1cb21db0eb1a0be5$var$V,
    L: $1cb21db0eb1a0be5$var$M,
    R: $1cb21db0eb1a0be5$var$v,
    D: $1cb21db0eb1a0be5$var$S,
    I: $1cb21db0eb1a0be5$var$R,
    V: $1cb21db0eb1a0be5$var$k,
    H: $1cb21db0eb1a0be5$var$L,
    N: $1cb21db0eb1a0be5$var$z,
    U: $1cb21db0eb1a0be5$var$H,
    F: $1cb21db0eb1a0be5$var$Z
}, $1cb21db0eb1a0be5$var$B = $1cb21db0eb1a0be5$var$i.litHtmlPolyfillSupport;
null == $1cb21db0eb1a0be5$var$B || $1cb21db0eb1a0be5$var$B($1cb21db0eb1a0be5$var$N, $1cb21db0eb1a0be5$var$R), (null !== ($1cb21db0eb1a0be5$var$t = $1cb21db0eb1a0be5$var$i.litHtmlVersions) && void 0 !== $1cb21db0eb1a0be5$var$t ? $1cb21db0eb1a0be5$var$t : $1cb21db0eb1a0be5$var$i.litHtmlVersions = []).push("2.8.0");
const $1cb21db0eb1a0be5$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $1cb21db0eb1a0be5$var$R(i.insertBefore($1cb21db0eb1a0be5$var$u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $b79cab361f081c93$var$t = window, $b79cab361f081c93$export$b4d10f6001c083c2 = $b79cab361f081c93$var$t.ShadowRoot && (void 0 === $b79cab361f081c93$var$t.ShadyCSS || $b79cab361f081c93$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $b79cab361f081c93$var$s = Symbol(), $b79cab361f081c93$var$n = new WeakMap;
class $b79cab361f081c93$export$505d1e8739bad805 {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $b79cab361f081c93$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($b79cab361f081c93$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $b79cab361f081c93$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $b79cab361f081c93$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $b79cab361f081c93$export$8d80f9cac07cdb3 = (t)=>new $b79cab361f081c93$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $b79cab361f081c93$var$s), $b79cab361f081c93$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $b79cab361f081c93$export$505d1e8739bad805(n, t, $b79cab361f081c93$var$s);
}, $b79cab361f081c93$export$2ca4a66ec4cecb90 = (s, n)=>{
    $b79cab361f081c93$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $b79cab361f081c93$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $b79cab361f081c93$export$ee69dfd951e24778 = $b79cab361f081c93$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $b79cab361f081c93$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $e620ef0d8bdd6ef5$var$s;
const $e620ef0d8bdd6ef5$var$e = window, $e620ef0d8bdd6ef5$var$r = $e620ef0d8bdd6ef5$var$e.trustedTypes, $e620ef0d8bdd6ef5$var$h = $e620ef0d8bdd6ef5$var$r ? $e620ef0d8bdd6ef5$var$r.emptyScript : "", $e620ef0d8bdd6ef5$var$o = $e620ef0d8bdd6ef5$var$e.reactiveElementPolyfillSupport, $e620ef0d8bdd6ef5$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $e620ef0d8bdd6ef5$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, $e620ef0d8bdd6ef5$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $e620ef0d8bdd6ef5$var$l = {
    attribute: !0,
    type: String,
    converter: $e620ef0d8bdd6ef5$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $e620ef0d8bdd6ef5$export$53a6892c50694894
}, $e620ef0d8bdd6ef5$var$d = "finalized";
class $e620ef0d8bdd6ef5$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $e620ef0d8bdd6ef5$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $e620ef0d8bdd6ef5$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty($e620ef0d8bdd6ef5$var$d)) return !1;
        this[$e620ef0d8bdd6ef5$var$d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, $b79cab361f081c93$export$ee69dfd951e24778)(i));
        } else void 0 !== i && s.push((0, $b79cab361f081c93$export$ee69dfd951e24778)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $b79cab361f081c93$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $e620ef0d8bdd6ef5$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $e620ef0d8bdd6ef5$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $e620ef0d8bdd6ef5$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $e620ef0d8bdd6ef5$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$e620ef0d8bdd6ef5$export$c7c07a37856565d[$e620ef0d8bdd6ef5$var$d] = !0, $e620ef0d8bdd6ef5$export$c7c07a37856565d.elementProperties = new Map, $e620ef0d8bdd6ef5$export$c7c07a37856565d.elementStyles = [], $e620ef0d8bdd6ef5$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $e620ef0d8bdd6ef5$var$o || $e620ef0d8bdd6ef5$var$o({
    ReactiveElement: $e620ef0d8bdd6ef5$export$c7c07a37856565d
}), (null !== ($e620ef0d8bdd6ef5$var$s = $e620ef0d8bdd6ef5$var$e.reactiveElementVersions) && void 0 !== $e620ef0d8bdd6ef5$var$s ? $e620ef0d8bdd6ef5$var$s : $e620ef0d8bdd6ef5$var$e.reactiveElementVersions = []).push("1.6.3");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $f156c5f18ecaaf3f$var$t;
const $f156c5f18ecaaf3f$var$i = window, $f156c5f18ecaaf3f$var$s = $f156c5f18ecaaf3f$var$i.trustedTypes, $f156c5f18ecaaf3f$var$e = $f156c5f18ecaaf3f$var$s ? $f156c5f18ecaaf3f$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f156c5f18ecaaf3f$var$o = "$lit$", $f156c5f18ecaaf3f$var$n = `lit$${(Math.random() + "").slice(9)}$`, $f156c5f18ecaaf3f$var$l = "?" + $f156c5f18ecaaf3f$var$n, $f156c5f18ecaaf3f$var$h = `<${$f156c5f18ecaaf3f$var$l}>`, $f156c5f18ecaaf3f$var$r = document, $f156c5f18ecaaf3f$var$u = ()=>$f156c5f18ecaaf3f$var$r.createComment(""), $f156c5f18ecaaf3f$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f156c5f18ecaaf3f$var$c = Array.isArray, $f156c5f18ecaaf3f$var$v = (t)=>$f156c5f18ecaaf3f$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $f156c5f18ecaaf3f$var$a = "[ \t\n\f\r]", $f156c5f18ecaaf3f$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f156c5f18ecaaf3f$var$_ = /-->/g, $f156c5f18ecaaf3f$var$m = />/g, $f156c5f18ecaaf3f$var$p = RegExp(`>|${$f156c5f18ecaaf3f$var$a}(?:([^\\s"'>=/]+)(${$f156c5f18ecaaf3f$var$a}*=${$f156c5f18ecaaf3f$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f156c5f18ecaaf3f$var$g = /'/g, $f156c5f18ecaaf3f$var$$ = /"/g, $f156c5f18ecaaf3f$var$y = /^(?:script|style|textarea|title)$/i, $f156c5f18ecaaf3f$var$w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f156c5f18ecaaf3f$export$c0bb0b647f701bb5 = $f156c5f18ecaaf3f$var$w(1), $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68 = $f156c5f18ecaaf3f$var$w(2), $f156c5f18ecaaf3f$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f156c5f18ecaaf3f$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f156c5f18ecaaf3f$var$E = new WeakMap, $f156c5f18ecaaf3f$var$C = $f156c5f18ecaaf3f$var$r.createTreeWalker($f156c5f18ecaaf3f$var$r, 129, null, !1);
function $f156c5f18ecaaf3f$var$P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f156c5f18ecaaf3f$var$e ? $f156c5f18ecaaf3f$var$e.createHTML(i) : i;
}
const $f156c5f18ecaaf3f$var$V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = $f156c5f18ecaaf3f$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $f156c5f18ecaaf3f$var$f ? "!--" === c[1] ? u = $f156c5f18ecaaf3f$var$_ : void 0 !== c[1] ? u = $f156c5f18ecaaf3f$var$m : void 0 !== c[2] ? ($f156c5f18ecaaf3f$var$y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = $f156c5f18ecaaf3f$var$p) : void 0 !== c[3] && (u = $f156c5f18ecaaf3f$var$p) : u === $f156c5f18ecaaf3f$var$p ? ">" === c[0] ? (u = null != l ? l : $f156c5f18ecaaf3f$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? $f156c5f18ecaaf3f$var$p : '"' === c[3] ? $f156c5f18ecaaf3f$var$$ : $f156c5f18ecaaf3f$var$g) : u === $f156c5f18ecaaf3f$var$$ || u === $f156c5f18ecaaf3f$var$g ? u = $f156c5f18ecaaf3f$var$p : u === $f156c5f18ecaaf3f$var$_ || u === $f156c5f18ecaaf3f$var$m ? u = $f156c5f18ecaaf3f$var$f : (u = $f156c5f18ecaaf3f$var$p, l = void 0);
        const w = u === $f156c5f18ecaaf3f$var$p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === $f156c5f18ecaaf3f$var$f ? s + $f156c5f18ecaaf3f$var$h : v >= 0 ? (e.push(d), s.slice(0, v) + $f156c5f18ecaaf3f$var$o + s.slice(v) + $f156c5f18ecaaf3f$var$n + w) : s + $f156c5f18ecaaf3f$var$n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        $f156c5f18ecaaf3f$var$P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class $f156c5f18ecaaf3f$var$N {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = $f156c5f18ecaaf3f$var$V(t, i);
        if (this.el = $f156c5f18ecaaf3f$var$N.createElement(a, e), $f156c5f18ecaaf3f$var$C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = $f156c5f18ecaaf3f$var$C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith($f156c5f18ecaaf3f$var$o) || i.startsWith($f156c5f18ecaaf3f$var$n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + $f156c5f18ecaaf3f$var$o).split($f156c5f18ecaaf3f$var$n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $f156c5f18ecaaf3f$var$H : "?" === i[1] ? $f156c5f18ecaaf3f$var$L : "@" === i[1] ? $f156c5f18ecaaf3f$var$z : $f156c5f18ecaaf3f$var$k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if ($f156c5f18ecaaf3f$var$y.test(h.tagName)) {
                    const t = h.textContent.split($f156c5f18ecaaf3f$var$n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = $f156c5f18ecaaf3f$var$s ? $f156c5f18ecaaf3f$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], $f156c5f18ecaaf3f$var$u()), $f156c5f18ecaaf3f$var$C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], $f156c5f18ecaaf3f$var$u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === $f156c5f18ecaaf3f$var$l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf($f156c5f18ecaaf3f$var$n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += $f156c5f18ecaaf3f$var$n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = $f156c5f18ecaaf3f$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f156c5f18ecaaf3f$var$S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $f156c5f18ecaaf3f$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $f156c5f18ecaaf3f$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $f156c5f18ecaaf3f$var$S(t, r._$AS(t, i.values), r, e)), i;
}
class $f156c5f18ecaaf3f$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $f156c5f18ecaaf3f$var$r).importNode(s, !0);
        $f156c5f18ecaaf3f$var$C.currentNode = o;
        let n = $f156c5f18ecaaf3f$var$C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new $f156c5f18ecaaf3f$var$R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new $f156c5f18ecaaf3f$var$Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = $f156c5f18ecaaf3f$var$C.nextNode(), l++);
        }
        return $f156c5f18ecaaf3f$var$C.currentNode = $f156c5f18ecaaf3f$var$r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f156c5f18ecaaf3f$var$R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $f156c5f18ecaaf3f$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f156c5f18ecaaf3f$var$S(this, t, i), $f156c5f18ecaaf3f$var$d(t) ? t === $f156c5f18ecaaf3f$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f156c5f18ecaaf3f$export$45b790e32b2810ee && this._$AR(), this._$AH = $f156c5f18ecaaf3f$export$45b790e32b2810ee) : t !== this._$AH && t !== $f156c5f18ecaaf3f$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $f156c5f18ecaaf3f$var$v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $f156c5f18ecaaf3f$export$45b790e32b2810ee && $f156c5f18ecaaf3f$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.$($f156c5f18ecaaf3f$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $f156c5f18ecaaf3f$var$N.createElement($f156c5f18ecaaf3f$var$P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new $f156c5f18ecaaf3f$var$M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f156c5f18ecaaf3f$var$E.get(t.strings);
        return void 0 === i && $f156c5f18ecaaf3f$var$E.set(t.strings, i = new $f156c5f18ecaaf3f$var$N(t)), i;
    }
    T(t) {
        $f156c5f18ecaaf3f$var$c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $f156c5f18ecaaf3f$var$R(this.k($f156c5f18ecaaf3f$var$u()), this.k($f156c5f18ecaaf3f$var$u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $f156c5f18ecaaf3f$var$k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $f156c5f18ecaaf3f$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f156c5f18ecaaf3f$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $f156c5f18ecaaf3f$var$S(this, t, i, 0), n = !$f156c5f18ecaaf3f$var$d(t) || t !== this._$AH && t !== $f156c5f18ecaaf3f$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $f156c5f18ecaaf3f$var$S(this, e[s + l], i, l), h === $f156c5f18ecaaf3f$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$f156c5f18ecaaf3f$var$d(h) || h !== this._$AH[l]), h === $f156c5f18ecaaf3f$export$45b790e32b2810ee ? t = $f156c5f18ecaaf3f$export$45b790e32b2810ee : t !== $f156c5f18ecaaf3f$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $f156c5f18ecaaf3f$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $f156c5f18ecaaf3f$var$H extends $f156c5f18ecaaf3f$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f156c5f18ecaaf3f$export$45b790e32b2810ee ? void 0 : t;
    }
}
const $f156c5f18ecaaf3f$var$I = $f156c5f18ecaaf3f$var$s ? $f156c5f18ecaaf3f$var$s.emptyScript : "";
class $f156c5f18ecaaf3f$var$L extends $f156c5f18ecaaf3f$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== $f156c5f18ecaaf3f$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $f156c5f18ecaaf3f$var$I) : this.element.removeAttribute(this.name);
    }
}
class $f156c5f18ecaaf3f$var$z extends $f156c5f18ecaaf3f$var$k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $f156c5f18ecaaf3f$var$S(this, t, i, 0)) && void 0 !== s ? s : $f156c5f18ecaaf3f$export$45b790e32b2810ee) === $f156c5f18ecaaf3f$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $f156c5f18ecaaf3f$export$45b790e32b2810ee && e !== $f156c5f18ecaaf3f$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $f156c5f18ecaaf3f$export$45b790e32b2810ee && (e === $f156c5f18ecaaf3f$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f156c5f18ecaaf3f$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f156c5f18ecaaf3f$var$S(this, t);
    }
}
const $f156c5f18ecaaf3f$export$8613d1ca9052b22e = {
    O: $f156c5f18ecaaf3f$var$o,
    P: $f156c5f18ecaaf3f$var$n,
    A: $f156c5f18ecaaf3f$var$l,
    C: 1,
    M: $f156c5f18ecaaf3f$var$V,
    L: $f156c5f18ecaaf3f$var$M,
    R: $f156c5f18ecaaf3f$var$v,
    D: $f156c5f18ecaaf3f$var$S,
    I: $f156c5f18ecaaf3f$var$R,
    V: $f156c5f18ecaaf3f$var$k,
    H: $f156c5f18ecaaf3f$var$L,
    N: $f156c5f18ecaaf3f$var$z,
    U: $f156c5f18ecaaf3f$var$H,
    F: $f156c5f18ecaaf3f$var$Z
}, $f156c5f18ecaaf3f$var$B = $f156c5f18ecaaf3f$var$i.litHtmlPolyfillSupport;
null == $f156c5f18ecaaf3f$var$B || $f156c5f18ecaaf3f$var$B($f156c5f18ecaaf3f$var$N, $f156c5f18ecaaf3f$var$R), (null !== ($f156c5f18ecaaf3f$var$t = $f156c5f18ecaaf3f$var$i.litHtmlVersions) && void 0 !== $f156c5f18ecaaf3f$var$t ? $f156c5f18ecaaf3f$var$t : $f156c5f18ecaaf3f$var$i.litHtmlVersions = []).push("2.8.0");
const $f156c5f18ecaaf3f$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $f156c5f18ecaaf3f$var$R(i.insertBefore($f156c5f18ecaaf3f$var$u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $ab210b2da7b39b9d$var$l, $ab210b2da7b39b9d$var$o;
const $ab210b2da7b39b9d$export$8bf27daf9e8907c9 = (0, $e620ef0d8bdd6ef5$export$c7c07a37856565d);
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $e620ef0d8bdd6ef5$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f156c5f18ecaaf3f$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, $f156c5f18ecaaf3f$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157.finalized = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, null === ($ab210b2da7b39b9d$var$l = globalThis.litElementHydrateSupport) || void 0 === $ab210b2da7b39b9d$var$l || $ab210b2da7b39b9d$var$l.call(globalThis, {
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$n = globalThis.litElementPolyfillSupport;
null == $ab210b2da7b39b9d$var$n || $ab210b2da7b39b9d$var$n({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($ab210b2da7b39b9d$var$o = globalThis.litElementVersions) && void 0 !== $ab210b2da7b39b9d$var$o ? $ab210b2da7b39b9d$var$o : globalThis.litElementVersions = []).push("3.3.3");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7d73aec7fd8dd996$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $8e719a98b1b15d5f$export$da64fc29f17f9d0e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t, elements: s } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $8fbcd235ba38df66$var$i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    }, $8fbcd235ba38df66$var$e = (i, e, n)=>{
    e.constructor.createProperty(n, i);
};
function $8fbcd235ba38df66$export$d541bacb2bda4494(n) {
    return (t, o)=>void 0 !== o ? $8fbcd235ba38df66$var$e(n, t, o) : $8fbcd235ba38df66$var$i(n, t);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $d728c145a8b96d94$export$ca000e230c0caa3e(t) {
    return (0, $8fbcd235ba38df66$export$d541bacb2bda4494)({
        ...t,
        state: !0
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1b379d642bebdcd8$export$29fd0ed4087278b5 = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, $1b379d642bebdcd8$export$18eb0154d0069a01 = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), $1b379d642bebdcd8$export$757d561a932dc1cb = ({ finisher: e, descriptor: t })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $5e6239f42387ad50$export$b2b799818fbabcf3(e) {
    return (0, $1b379d642bebdcd8$export$757d561a932dc1cb)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $5b7c5dc48a1578e2$export$2fa187e846a241c4(i, n) {
    return (0, $1b379d642bebdcd8$export$757d561a932dc1cb)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $5e308599118f65a6$export$dcd0d083aa86c355(e) {
    return (0, $1b379d642bebdcd8$export$757d561a932dc1cb)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $bbf857d70a3f8828$export$163dfc35cc43f240(e) {
    return (0, $1b379d642bebdcd8$export$757d561a932dc1cb)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $dfdcaea63035e5b6$var$n;
const $dfdcaea63035e5b6$var$e = null != (null === ($dfdcaea63035e5b6$var$n = window.HTMLSlotElement) || void 0 === $dfdcaea63035e5b6$var$n ? void 0 : $dfdcaea63035e5b6$var$n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function $dfdcaea63035e5b6$export$4682af2d9ee91415(n) {
    const { slot: l, selector: t } = null != n ? n : {};
    return (0, $1b379d642bebdcd8$export$757d561a932dc1cb)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? $dfdcaea63035e5b6$var$e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $0dbad5fc6fe57972$export$1bdbe53f9df1b8(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, $dfdcaea63035e5b6$export$4682af2d9ee91415)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, $1b379d642bebdcd8$export$757d561a932dc1cb)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




// Weather utilities adapted from HA frontend


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d85aafe743f48872$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $d85aafe743f48872$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $d85aafe743f48872$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d16a35d1024078e1$var$i = "important", $d16a35d1024078e1$var$n = " !" + $d16a35d1024078e1$var$i, $d16a35d1024078e1$export$1e5b4ce2fa884e6a = (0, $d85aafe743f48872$export$99b43ad1ed32e735)(class extends (0, $d85aafe743f48872$export$befdefbdce210f91) {
    constructor(t){
        var e;
        if (super(t), t.type !== (0, $d85aafe743f48872$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s } = e.element;
        if (void 0 === this.ht) {
            this.ht = new Set;
            for(const t in r)this.ht.add(t);
            return this.render(r);
        }
        this.ht.forEach((t)=>{
            null == r[t] && (this.ht.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = "");
        });
        for(const t in r){
            const e = r[t];
            if (null != e) {
                this.ht.add(t);
                const r = "string" == typeof e && e.endsWith($d16a35d1024078e1$var$n);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $d16a35d1024078e1$var$i : "") : s[t] = e;
            }
        }
        return 0, $1cb21db0eb1a0be5$export$9c068ae9cc5db4e8;
    }
});




var $a670ed82a1e76f75$export$8b3032c22c6f26e6 = /*#__PURE__*/ function(WeatherEntityFeature) {
    WeatherEntityFeature[WeatherEntityFeature["FORECAST_DAILY"] = 1] = "FORECAST_DAILY";
    WeatherEntityFeature[WeatherEntityFeature["FORECAST_HOURLY"] = 2] = "FORECAST_HOURLY";
    WeatherEntityFeature[WeatherEntityFeature["FORECAST_TWICE_DAILY"] = 4] = "FORECAST_TWICE_DAILY";
    return WeatherEntityFeature;
}({});
const $a670ed82a1e76f75$export$8f7ca90fe05ed3ab = new Set([
    "clear-night",
    "cloudy",
    "fog",
    "lightning",
    "lightning-rainy",
    "partlycloudy",
    "pouring",
    "rainy",
    "hail",
    "snowy",
    "snowy-rainy",
    "sunny",
    "windy",
    "windy-variant"
]);
const $a670ed82a1e76f75$var$cloudyStates = new Set([
    "partlycloudy",
    "cloudy",
    "fog",
    "windy",
    "windy-variant",
    "hail",
    "rainy",
    "snowy",
    "snowy-rainy",
    "pouring",
    "lightning",
    "lightning-rainy"
]);
const $a670ed82a1e76f75$var$rainStates = new Set([
    "hail",
    "rainy",
    "pouring"
]);
const $a670ed82a1e76f75$var$snowyStates = new Set([
    "snowy",
    "snowy-rainy"
]);
const $a670ed82a1e76f75$var$lightningStates = new Set([
    "lightning",
    "lightning-rainy"
]);
const $a670ed82a1e76f75$export$a94cf610ac0519b4 = (config, stateObj, measure)=>{
    const lengthUnit = config.unit_system.length || "";
    switch(measure){
        case "visibility":
            return stateObj.attributes.visibility_unit || lengthUnit;
        case "precipitation":
            return stateObj.attributes.precipitation_unit || (lengthUnit === "km" ? "mm" : "in");
        case "pressure":
            return stateObj.attributes.pressure_unit || (lengthUnit === "km" ? "hPa" : "inHg");
        case "apparent_temperature":
        case "dew_point":
        case "temperature":
        case "templow":
            return stateObj.attributes.temperature_unit || config.unit_system.temperature;
        case "wind_speed":
            return stateObj.attributes.wind_speed_unit || `${lengthUnit}/h`;
        case "cloud_coverage":
        case "humidity":
        case "precipitation_probability":
            return "%";
        default:
            return config.unit_system[measure] || "";
    }
};
const $a670ed82a1e76f75$var$getWeatherStateSVG = (state, nightTime)=>(0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${state === "sunny" ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        ` : ""}
  ${state === "clear-night" ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        ` : ""}
  ${state === "partlycloudy" && nightTime ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
          <path
            class="moon"
            transform="scale(0.65 0.65) translate(11 -3)"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        ` : state === "partlycloudy" ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        ` : ""}
  ${$a670ed82a1e76f75$var$cloudyStates.has(state) ? state === "partlycloudy" && nightTime ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
            <g transform="translate(-1 1) scale(1 1)">
              <path
                class="cloud-back"
                d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
              />
              <path
                class="cloud-front"
                d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
              />
            </g>
          ` : (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
            <path
              class="cloud-back"
              d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
            />
            <path
              class="cloud-front"
              d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
            />
          ` : ""}
  ${$a670ed82a1e76f75$var$rainStates.has(state) ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
          <path
            class="rain"
            d="m5.2852 14.734c-0.22401 0.24765-0.57115 0.2988-0.77505 0.11395-0.20391-0.1845-0.18732-0.53481 0.036689-0.78281 0.14817-0.16298 0.59126-0.32914 0.87559-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.065617 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m11.257 14.163c-0.22437 0.24765-0.57115 0.2988-0.77505 0.11395-0.2039-0.1845-0.18768-0.53481 0.03669-0.78281 0.14817-0.16298 0.59126-0.32914 0.8756-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.06562 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m8.432 15.878c-0.15452 0.17039-0.3937 0.20567-0.53446 0.07867-0.14041-0.12735-0.12876-0.36865 0.025753-0.53975 0.10195-0.11218 0.40711-0.22684 0.60325-0.29175 0.085725-0.02858 0.15628 0.03563 0.13652 0.12382-0.045508 0.20108-0.12912 0.51647-0.23107 0.629"
          />
          <path
            class="rain"
            d="m7.9991 14.118c-0.19226 0.21237-0.49001 0.25612-0.66499 0.09737-0.17462-0.15804-0.16051-0.45861 0.03175-0.67098 0.12665-0.14005 0.50729-0.28293 0.75071-0.36336 0.10689-0.03563 0.19473 0.0441 0.17004 0.15346-0.056092 0.25082-0.16051 0.64347-0.28751 0.78352"
          />
        ` : ""}
  ${state === "pouring" ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        ` : ""}
  ${$a670ed82a1e76f75$var$snowyStates.has(state) ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
          <path
            class="snow"
            d="m 8.4319893,15.348341 c 0,0.257881 -0.209197,0.467079 -0.467078,0.467079 -0.258586,0 -0.46743,-0.209198 -0.46743,-0.467079 0,-0.258233 0.208844,-0.467431 0.46743,-0.467431 0.257881,0 0.467078,0.209198 0.467078,0.467431"
          />
          <path
            class="snow"
            d="m 11.263878,14.358553 c 0,0.364067 -0.295275,0.659694 -0.659695,0.659694 -0.364419,0 -0.6596937,-0.295627 -0.6596937,-0.659694 0,-0.364419 0.2952747,-0.659694 0.6596937,-0.659694 0.36442,0 0.659695,0.295275 0.659695,0.659694"
          />
          <path
            class="snow"
            d="m 5.3252173,13.69847 c 0,0.364419 -0.295275,0.660047 -0.659695,0.660047 -0.364067,0 -0.659694,-0.295628 -0.659694,-0.660047 0,-0.364067 0.295627,-0.659694 0.659694,-0.659694 0.36442,0 0.659695,0.295627 0.659695,0.659694"
          />
        ` : ""}
  ${$a670ed82a1e76f75$var$lightningStates.has(state) ? (0, $f156c5f18ecaaf3f$export$7ed1367e7fa1ad68)`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        ` : ""}
  </svg>`;
const $a670ed82a1e76f75$export$e0801f527146069 = (state, element, nightTime)=>{
    const userDefinedIcon = getComputedStyle(element).getPropertyValue(`--weather-icon-${state}`);
    if (userDefinedIcon) return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
      <div
        style="background-size: cover;${(0, $d16a35d1024078e1$export$1e5b4ce2fa884e6a)({
        "background-image": userDefinedIcon
    })}"
      ></div>
    `;
    if ($a670ed82a1e76f75$export$8f7ca90fe05ed3ab.has(state)) return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`${$a670ed82a1e76f75$var$getWeatherStateSVG(state, nightTime)}`;
    return undefined;
};
const $a670ed82a1e76f75$export$ace10bd47409a000 = (hass, entity_id, forecast_type, callback)=>hass.connection.subscribeMessage(callback, {
        type: "weather/subscribe_forecast",
        forecast_type: forecast_type,
        entity_id: entity_id
    });
const $a670ed82a1e76f75$export$6cfda7fa5f551db7 = (stateObj, feature)=>$a670ed82a1e76f75$export$49fb620566936d3e(stateObj.attributes, feature);
const $a670ed82a1e76f75$export$49fb620566936d3e = (attributes, feature)=>// eslint-disable-next-line no-bitwise
    (attributes.supported_features & feature) !== 0;



var $3980b2957099e800$exports = {};
$3980b2957099e800$exports = ":host {\n  display: block;\n}\n\nha-card {\n  color: #fff;\n  background: linear-gradient(#2c3e50 0%, #34495e 50%, #4a6278 100%);\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.card-content {\n  padding: 16px;\n}\n\n.header {\n  text-align: center;\n  padding-bottom: 12px;\n}\n\n.location {\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 4px;\n  display: flex;\n}\n\n.location-name {\n  font-size: 24px;\n  font-weight: 400;\n}\n\n.location ha-icon {\n  --mdc-icon-size: 16px;\n  opacity: .8;\n}\n\n.current-weather {\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n}\n\n.temp-large {\n  margin: 0;\n  font-size: 86px;\n  font-weight: 200;\n  line-height: 1;\n}\n\n.condition-row {\n  align-items: center;\n  gap: 6px;\n  margin-top: 4px;\n  display: flex;\n}\n\n.condition-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.condition-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.condition-text {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.high-low {\n  margin-top: 4px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.alert-section {\n  border-top: 1px solid #fff3;\n  border-bottom: 1px solid #fff3;\n  align-items: center;\n  gap: 8px;\n  margin: 8px 0;\n  padding: 10px 0;\n  display: flex;\n}\n\n.alert-section ha-icon {\n  --mdc-icon-size: 18px;\n  opacity: .9;\n}\n\n.alert-section span {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.section-divider {\n  background: #fff3;\n  height: 1px;\n  margin: 8px 0;\n}\n\n.sun {\n  fill: var(--weather-icon-sun-color, #fdd93c);\n}\n\n.moon {\n  fill: var(--weather-icon-moon-color, #fcf497);\n}\n\n.cloud-back {\n  fill: var(--weather-icon-cloud-back-color, #d4d4d4);\n}\n\n.cloud-front {\n  fill: var(--weather-icon-cloud-front-color, #f9f9f9);\n}\n\n.rain {\n  fill: var(--weather-icon-rain-color, #30b3ff);\n}\n\n.snow {\n  fill: var(--weather-icon-snow-color, #f9f9f9);\n  stroke: var(--weather-icon-snow-stroke-color, #d4d4d4);\n  stroke-width: 1px;\n  paint-order: stroke;\n}\n\n.unavailable {\n  text-align: center;\n  color: var(--secondary-text-color);\n  padding: 16px;\n}\n";


const $bad2896eba83d519$export$9dd6ff9ea0189349 = (0, $b79cab361f081c93$export$dbf350e5966cf602)`
  ${(0, $b79cab361f081c93$export$8d80f9cac07cdb3)((0, (/*@__PURE__*/$parcel$interopDefault($3980b2957099e800$exports))))}
`;






class $0619ed98411ce264$export$38db9737a908e210 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $b79cab361f081c93$export$dbf350e5966cf602)`
    :host {
      display: block;
    }

    .hourly-container {
      display: flex;
      gap: 16px;
      overflow-x: auto;
      padding: 12px 0;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .hourly-container::-webkit-scrollbar {
      display: none;
    }

    .hour-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      min-width: 50px;
    }

    .hour-time {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .hour-icon {
      width: 28px;
      height: 28px;
    }

    .hour-icon svg {
      width: 100%;
      height: 100%;
    }

    .hour-temp {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    /* Weather icon colors */
    .sun {
      fill: var(--weather-icon-sun-color, #fdd93c);
    }
    .moon {
      fill: var(--weather-icon-moon-color, #fcf497);
    }
    .cloud-back {
      fill: var(--weather-icon-cloud-back-color, #d4d4d4);
    }
    .cloud-front {
      fill: var(--weather-icon-cloud-front-color, #f9f9f9);
    }
    .rain {
      fill: var(--weather-icon-rain-color, #30b3ff);
    }
    .snow {
      fill: var(--weather-icon-snow-color, #f9f9f9);
      stroke: var(--weather-icon-snow-stroke-color, #d4d4d4);
      stroke-width: 1;
      paint-order: stroke;
    }
  `;
    }
    render() {
        if (!this.forecast.length) return 0, $f156c5f18ecaaf3f$export$45b790e32b2810ee;
        return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
      <div class="hourly-container">
        ${this.forecast.map((hour, index)=>this._renderHour(hour, index))}
      </div>
    `;
    }
    _renderHour(hour, index) {
        const time = this._formatTime(hour.datetime, index);
        const icon = (0, $a670ed82a1e76f75$export$e0801f527146069)(hour.condition || this.state?.state || "cloudy", this, this._isNightTime(hour.datetime));
        const temp = Math.round(hour.temperature);
        return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
      <div class="hour-item">
        <span class="hour-time">${time}</span>
        <div class="hour-icon">${icon}</div>
        <span class="hour-temp">${temp}°</span>
      </div>
    `;
    }
    _formatTime(datetime, index) {
        if (index === 0) return "Now";
        const date = new Date(datetime);
        const hour = date.getHours();
        const ampm = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        return `${hour12}${ampm}`;
    }
    _isNightTime(datetime) {
        const date = new Date(datetime);
        const hour = date.getHours();
        return hour < 6 || hour >= 20;
    }
    constructor(...args){
        super(...args), this.forecast = [];
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $8fbcd235ba38df66$export$d541bacb2bda4494)({
        attribute: false
    })
], $0619ed98411ce264$export$38db9737a908e210.prototype, "hass", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $8fbcd235ba38df66$export$d541bacb2bda4494)({
        attribute: false
    })
], $0619ed98411ce264$export$38db9737a908e210.prototype, "forecast", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $8fbcd235ba38df66$export$d541bacb2bda4494)({
        attribute: false
    })
], $0619ed98411ce264$export$38db9737a908e210.prototype, "state", void 0);
$0619ed98411ce264$export$38db9737a908e210 = (0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $8e719a98b1b15d5f$export$da64fc29f17f9d0e)("ios-hourly-forecast")
], $0619ed98411ce264$export$38db9737a908e210);






class $c623741b52b7c3fb$export$89805b1b6be728bf extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $b79cab361f081c93$export$dbf350e5966cf602)`
    :host {
      display: block;
    }

    .daily-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;
    }

    .day-row {
      display: grid;
      grid-template-columns: 50px 36px 1fr 40px;
      align-items: center;
      gap: 12px;
      padding: 4px 0;
    }

    .day-name {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .day-icon {
      width: 28px;
      height: 28px;
    }

    .day-icon svg {
      width: 100%;
      height: 100%;
    }

    .temp-bar-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .temp-low {
      font-size: 16px;
      color: var(--secondary-text-color);
      min-width: 32px;
      text-align: right;
    }

    .temp-bar-wrapper {
      flex: 1;
      height: 6px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
      position: relative;
      overflow: hidden;
    }

    .temp-bar {
      position: absolute;
      height: 100%;
      border-radius: 3px;
      background: linear-gradient(90deg, #64b5f6, #4fc3f7, #81c784, #aed581, #ffb74d, #ff8a65);
      background-size: 200% 100%;
    }

    .temp-high {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
      min-width: 32px;
    }

    /* Weather icon colors */
    .sun {
      fill: var(--weather-icon-sun-color, #fdd93c);
    }
    .moon {
      fill: var(--weather-icon-moon-color, #fcf497);
    }
    .cloud-back {
      fill: var(--weather-icon-cloud-back-color, #d4d4d4);
    }
    .cloud-front {
      fill: var(--weather-icon-cloud-front-color, #f9f9f9);
    }
    .rain {
      fill: var(--weather-icon-rain-color, #30b3ff);
    }
    .snow {
      fill: var(--weather-icon-snow-color, #f9f9f9);
      stroke: var(--weather-icon-snow-stroke-color, #d4d4d4);
      stroke-width: 1;
      paint-order: stroke;
    }
  `;
    }
    render() {
        if (!this.forecast.length) return 0, $f156c5f18ecaaf3f$export$45b790e32b2810ee;
        // Calculate min/max across all days for the temp bar scaling
        const temps = this.forecast.flatMap((d)=>[
                d.temperature,
                d.templow ?? d.temperature
            ]);
        const minTemp = Math.min(...temps);
        const maxTemp = Math.max(...temps);
        return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
      <div class="daily-container">
        ${this.forecast.map((day, index)=>this._renderDay(day, index, minTemp, maxTemp))}
      </div>
    `;
    }
    _renderDay(day, index, globalMin, globalMax) {
        const dayName = this._formatDayName(day.datetime, index);
        const icon = (0, $a670ed82a1e76f75$export$e0801f527146069)(day.condition || this.state?.state || "cloudy", this, day.is_daytime === false);
        const high = Math.round(day.temperature);
        const low = Math.round(day.templow ?? day.temperature);
        // Calculate bar position
        const range = globalMax - globalMin || 1;
        const leftPercent = (low - globalMin) / range * 100;
        const widthPercent = (high - low) / range * 100;
        // Color position based on temperature
        const colorPosition = ((low + high) / 2 - globalMin) / range * 100;
        return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
      <div class="day-row">
        <span class="day-name">${dayName}</span>
        <div class="day-icon">${icon}</div>
        <div class="temp-bar-container">
          <span class="temp-low">${low}°</span>
          <div class="temp-bar-wrapper">
            <div
              class="temp-bar"
              style="left: ${leftPercent}%; width: ${Math.max(widthPercent, 10)}%; background-position: ${colorPosition}% 0;"
            ></div>
          </div>
        </div>
        <span class="temp-high">${high}°</span>
      </div>
    `;
    }
    _formatDayName(datetime, index) {
        if (index === 0) return "Today";
        const date = new Date(datetime);
        const days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        return days[date.getDay()];
    }
    constructor(...args){
        super(...args), this.forecast = [];
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $8fbcd235ba38df66$export$d541bacb2bda4494)({
        attribute: false
    })
], $c623741b52b7c3fb$export$89805b1b6be728bf.prototype, "hass", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $8fbcd235ba38df66$export$d541bacb2bda4494)({
        attribute: false
    })
], $c623741b52b7c3fb$export$89805b1b6be728bf.prototype, "forecast", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $8fbcd235ba38df66$export$d541bacb2bda4494)({
        attribute: false
    })
], $c623741b52b7c3fb$export$89805b1b6be728bf.prototype, "state", void 0);
$c623741b52b7c3fb$export$89805b1b6be728bf = (0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $8e719a98b1b15d5f$export$da64fc29f17f9d0e)("ios-daily-forecast")
], $c623741b52b7c3fb$export$89805b1b6be728bf);


class $9682f2ec906a6ba2$export$90d6bd5d00aee9fc extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    setConfig(config) {
        const defaults = {
            type: "custom:ios-weather-card",
            ...config,
            show_location: config.show_location ?? true,
            show_alert: config.show_alert ?? true,
            hourly_forecast: config.hourly_forecast ?? true,
            daily_forecast: config.daily_forecast ?? true,
            num_hourly: config.num_hourly ?? 6,
            num_daily: config.num_daily ?? 5
        };
        this._config = defaults;
        this._entity = defaults.entity;
        if (this._hass) this.hass = this._hass;
    }
    set hass(hass) {
        this._hass = hass;
        this._state = hass.states[this._entity];
        if (this._state) {
            this._status = this._state.state;
            const fn = this._state.attributes.friendly_name;
            this._name = this._config?.name || (fn ? fn : this._entity);
        }
    }
    getGridOptions() {
        return {
            columns: 12,
            rows: 6,
            min_columns: 6,
            min_rows: 4
        };
    }
    static{
        this.styles = (0, $bad2896eba83d519$export$9dd6ff9ea0189349);
    }
    static getStubConfig(hass) {
        const weatherEntity = Object.keys(hass?.states ?? {}).find((entityId)=>entityId.startsWith("weather."));
        return {
            type: "custom:ios-weather-card",
            entity: weatherEntity ?? "weather.home",
            show_location: true,
            show_alert: true,
            hourly_forecast: true,
            daily_forecast: true,
            num_hourly: 6,
            num_daily: 5
        };
    }
    _unsubscribeForecastEvents() {
        Object.values(this._subscriptions).forEach((sub)=>{
            sub?.then((unsub)=>unsub());
        });
        this._subscriptions = {
            hourly: undefined,
            daily: undefined
        };
    }
    async _subscribeForecast(type) {
        if (this._subscriptions[type]) return;
        this._subscriptions[type] = (0, $a670ed82a1e76f75$export$ace10bd47409a000)(this._hass, this._entity, type, (event)=>{
            if (type === "hourly") this._forecastHourlyEvent = event;
            if (type === "daily") this._forecastDailyEvent = event;
        }).catch((e)=>{
            this._subscriptions[type] = undefined;
            throw e;
        });
    }
    async _subscribeForecastEvents() {
        this._unsubscribeForecastEvents();
        const shouldSubscribe = this.isConnected && this._hass && this._config && this._hass.config.components.includes("weather") && this._state;
        if (!shouldSubscribe) return;
        if (this._config.hourly_forecast) this._subscribeForecast("hourly");
        if (this._config.daily_forecast) this._subscribeForecast("daily");
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.hasUpdated && this._config && this._hass) this._subscribeForecastEvents();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._unsubscribeForecastEvents();
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this._config || !this._hass) return;
        if (changedProps.has("_config") || !this._subscriptions.hourly && !this._subscriptions.daily) this._subscribeForecastEvents();
    }
    render() {
        if (!this._config || !this._hass) return 0, $f156c5f18ecaaf3f$export$45b790e32b2810ee;
        if (!this._state) return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
        <hui-warning>
          ${this._name} not found.
        </hui-warning>
      `;
        if (this._status === "unavailable") return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
        <ha-card class="unavailable">
          <p>${this._name} is unavailable.</p>
        </ha-card>
      `;
        const showLocation = this._config.show_location !== false;
        const showAlert = this._config.show_alert !== false;
        const hourlyEnabled = this._config.hourly_forecast !== false;
        const dailyEnabled = this._config.daily_forecast !== false;
        const hourlyForecast = this._forecastHourlyEvent?.forecast ?? [];
        const dailyForecast = this._forecastDailyEvent?.forecast ?? [];
        return (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
      <ha-card>
        <div class="card-content">
          <!-- Header Section -->
          <div class="header">
            ${showLocation ? (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
              <div class="location">
                <span class="location-name">${this._name}</span>
                <ha-icon icon="mdi:map-marker"></ha-icon>
              </div>
            ` : (0, $f156c5f18ecaaf3f$export$45b790e32b2810ee)}

            <div class="current-weather">
              <div class="temp-large">${this._formatTemperature(this._state.attributes.temperature)}</div>
              <div class="condition-row">
                <span class="condition-icon">${this._getConditionIcon()}</span>
                <span class="condition-text">${this._formatCondition()}</span>
              </div>
              <div class="high-low">
                H:${this._formatTemperature(this._getHighTemp())}
                L:${this._formatTemperature(this._getLowTemp())}
              </div>
            </div>
          </div>

          <!-- Alert Section -->
          ${showAlert ? (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
            <div class="alert-section">
              <ha-icon icon="mdi:umbrella"></ha-icon>
              <span>${this._getAlertText()}</span>
            </div>
          ` : (0, $f156c5f18ecaaf3f$export$45b790e32b2810ee)}

          <!-- Hourly Forecast -->
          ${hourlyEnabled && hourlyForecast.length > 0 ? (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
            <div class="section-divider"></div>
            <ios-hourly-forecast
              .hass=${this._hass}
              .forecast=${hourlyForecast.slice(0, this._config.num_hourly || 6)}
              .state=${this._state}
            ></ios-hourly-forecast>
          ` : (0, $f156c5f18ecaaf3f$export$45b790e32b2810ee)}

          <!-- Daily Forecast -->
          ${dailyEnabled && dailyForecast.length > 0 ? (0, $f156c5f18ecaaf3f$export$c0bb0b647f701bb5)`
            <div class="section-divider"></div>
            <ios-daily-forecast
              .hass=${this._hass}
              .forecast=${dailyForecast.slice(0, this._config.num_daily || 5)}
              .state=${this._state}
            ></ios-daily-forecast>
          ` : (0, $f156c5f18ecaaf3f$export$45b790e32b2810ee)}
        </div>
      </ha-card>
    `;
    }
    _formatTemperature(temp) {
        if (temp === undefined || temp === null) return "--";
        return `${Math.round(temp)}\xb0`;
    }
    _formatCondition() {
        if (!this._state) return "";
        const condition = this._state.state;
        if (!condition) return "";
        // Try HA localization
        const localized = this._hass?.localize?.(`component.weather.entity_component._.state.${condition}`);
        if (localized) return localized;
        // Fallback: capitalize
        return condition.replace(/[-_]/g, " ").replace(/\b\w/g, (char)=>char.toUpperCase());
    }
    _getConditionIcon() {
        if (!this._state) return 0, $f156c5f18ecaaf3f$export$45b790e32b2810ee;
        return (0, $a670ed82a1e76f75$export$e0801f527146069)(this._state.state, this, this._isNightTime());
    }
    _isNightTime() {
        const isDaytime = this._state?.attributes?.is_daytime;
        if (typeof isDaytime === "boolean") return !isDaytime;
        const hour = new Date().getHours();
        return hour < 6 || hour >= 20;
    }
    _getHighTemp() {
        const daily = this._forecastDailyEvent?.forecast;
        if (daily && daily.length > 0) return daily[0].temperature;
        return this._state?.attributes?.temperature;
    }
    _getLowTemp() {
        const daily = this._forecastDailyEvent?.forecast;
        if (daily && daily.length > 0) return daily[0].templow ?? daily[0].temperature;
        return undefined;
    }
    _getAlertText() {
        // Check precipitation probability
        const hourly = this._forecastHourlyEvent?.forecast;
        if (hourly && hourly.length > 0) {
            const hasRain = hourly.slice(0, 12).some((h)=>(h.precipitation_probability ?? 0) > 30 || [
                    "rainy",
                    "pouring",
                    "snowy",
                    "snowy-rainy",
                    "hail"
                ].includes(h.condition ?? ""));
            if (hasRain) return "Wet conditions expected";
        }
        const daily = this._forecastDailyEvent?.forecast;
        if (daily && daily.length > 1) {
            const tomorrow = daily[1];
            if ([
                "rainy",
                "pouring",
                "snowy",
                "snowy-rainy",
                "hail"
            ].includes(tomorrow.condition ?? "")) return "Wet tomorrow";
        }
        return this._formatCondition();
    }
    constructor(...args){
        super(...args), this._subscriptions = {
            hourly: undefined,
            daily: undefined
        };
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $d728c145a8b96d94$export$ca000e230c0caa3e)()
], $9682f2ec906a6ba2$export$90d6bd5d00aee9fc.prototype, "_config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $d728c145a8b96d94$export$ca000e230c0caa3e)()
], $9682f2ec906a6ba2$export$90d6bd5d00aee9fc.prototype, "_entity", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $d728c145a8b96d94$export$ca000e230c0caa3e)()
], $9682f2ec906a6ba2$export$90d6bd5d00aee9fc.prototype, "_name", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $d728c145a8b96d94$export$ca000e230c0caa3e)()
], $9682f2ec906a6ba2$export$90d6bd5d00aee9fc.prototype, "_state", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $d728c145a8b96d94$export$ca000e230c0caa3e)()
], $9682f2ec906a6ba2$export$90d6bd5d00aee9fc.prototype, "_status", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $d728c145a8b96d94$export$ca000e230c0caa3e)()
], $9682f2ec906a6ba2$export$90d6bd5d00aee9fc.prototype, "_forecastDailyEvent", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $d728c145a8b96d94$export$ca000e230c0caa3e)()
], $9682f2ec906a6ba2$export$90d6bd5d00aee9fc.prototype, "_forecastHourlyEvent", void 0);


customElements.define("ios-weather-card", (0, $9682f2ec906a6ba2$export$90d6bd5d00aee9fc));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "ios-weather-card",
    name: "iOS Weather Card",
    description: "A Home Assistant card replicating the iOS Weather app design"
});


//# sourceMappingURL=ios-weather-card.js.map
