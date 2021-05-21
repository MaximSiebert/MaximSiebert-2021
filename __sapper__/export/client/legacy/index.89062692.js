import { c as createCommonjsModule, a as commonjsGlobal, _ as _inherits, b as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, g as dispatch_dev, S as SvelteComponentDev, h as handle_promise, v as validate_slots, j as element, t as text, k as space, l as claim_element, m as children, n as claim_text, o as detach_dev, p as claim_space, q as add_location, r as attr_dev, u as insert_dev, w as append_dev, x as _slicedToArray, y as set_data_dev, z as update_await_block_branch, A as noop, B as regenerator, C as _createClass, D as validate_each_argument, E as create_component, F as query_selector_all, G as claim_component, H as mount_component, I as transition_in, J as transition_out, K as destroy_each, L as destroy_component, M as onMount, N as globals } from './client.37fafef7.js';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var browserPonyfill = createCommonjsModule(function (module, exports) {
  var global = typeof self !== 'undefined' ? self : commonjsGlobal;

  var __self__ = function () {
    function F() {
      this.fetch = false;
      this.DOMException = global.DOMException;
    }

    F.prototype = global;
    return new F();
  }();

  (function (self) {
    (function (exports) {
      var support = {
        searchParams: 'URLSearchParams' in self,
        iterable: 'Symbol' in self && 'iterator' in Symbol,
        blob: 'FileReader' in self && 'Blob' in self && function () {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: 'FormData' in self,
        arrayBuffer: 'ArrayBuffer' in self
      };

      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }

      if (support.arrayBuffer) {
        var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

        var isArrayBufferView = ArrayBuffer.isView || function (obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }

      function normalizeName(name) {
        if (typeof name !== 'string') {
          name = String(name);
        }

        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
          throw new TypeError('Invalid character in header field name');
        }

        return name.toLowerCase();
      }

      function normalizeValue(value) {
        if (typeof value !== 'string') {
          value = String(value);
        }

        return value;
      } // Build a destructive iterator for the value list


      function iteratorFor(items) {
        var iterator = {
          next: function next() {
            var value = items.shift();
            return {
              done: value === undefined,
              value: value
            };
          }
        };

        if (support.iterable) {
          iterator[Symbol.iterator] = function () {
            return iterator;
          };
        }

        return iterator;
      }

      function Headers(headers) {
        this.map = {};

        if (headers instanceof Headers) {
          headers.forEach(function (value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function (header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function (name) {
            this.append(name, headers[name]);
          }, this);
        }
      }

      Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ', ' + value : value;
      };

      Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)];
      };

      Headers.prototype.get = function (name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };

      Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };

      Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };

      Headers.prototype.forEach = function (callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };

      Headers.prototype.keys = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };

      Headers.prototype.values = function () {
        var items = [];
        this.forEach(function (value) {
          items.push(value);
        });
        return iteratorFor(items);
      };

      Headers.prototype.entries = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };

      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }

      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError('Already read'));
        }

        body.bodyUsed = true;
      }

      function fileReaderReady(reader) {
        return new Promise(function (resolve, reject) {
          reader.onload = function () {
            resolve(reader.result);
          };

          reader.onerror = function () {
            reject(reader.error);
          };
        });
      }

      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }

      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }

      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);

        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }

        return chars.join('');
      }

      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }

      function Body() {
        this.bodyUsed = false;

        this._initBody = function (body) {
          this._bodyInit = body;

          if (!body) {
            this._bodyText = '';
          } else if (typeof body === 'string') {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }

          if (!this.headers.get('content-type')) {
            if (typeof body === 'string') {
              this.headers.set('content-type', 'text/plain;charset=UTF-8');
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set('content-type', this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
          }
        };

        if (support.blob) {
          this.blob = function () {
            var rejected = consumed(this);

            if (rejected) {
              return rejected;
            }

            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error('could not read FormData body as blob');
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };

          this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }

        this.text = function () {
          var rejected = consumed(this);

          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text');
          } else {
            return Promise.resolve(this._bodyText);
          }
        };

        if (support.formData) {
          this.formData = function () {
            return this.text().then(decode);
          };
        }

        this.json = function () {
          return this.text().then(JSON.parse);
        };

        return this;
      } // HTTP methods whose capitalization should be normalized


      var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }

      function Request(input, options) {
        options = options || {};
        var body = options.body;

        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError('Already read');
          }

          this.url = input.url;
          this.credentials = input.credentials;

          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }

          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;

          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }

        this.credentials = options.credentials || this.credentials || 'same-origin';

        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }

        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;

        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
          throw new TypeError('Body not allowed for GET or HEAD requests');
        }

        this._initBody(body);
      }

      Request.prototype.clone = function () {
        return new Request(this, {
          body: this._bodyInit
        });
      };

      function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
          if (bytes) {
            var split = bytes.split('=');
            var name = split.shift().replace(/\+/g, ' ');
            var value = split.join('=').replace(/\+/g, ' ');
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }

      function parseHeaders(rawHeaders) {
        var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
        // https://tools.ietf.org/html/rfc7230#section-3.2

        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
          var parts = line.split(':');
          var key = parts.shift().trim();

          if (key) {
            var value = parts.join(':').trim();
            headers.append(key, value);
          }
        });
        return headers;
      }

      Body.call(Request.prototype);

      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }

        this.type = 'default';
        this.status = options.status === undefined ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = 'statusText' in options ? options.statusText : 'OK';
        this.headers = new Headers(options.headers);
        this.url = options.url || '';

        this._initBody(bodyInit);
      }

      Body.call(Response.prototype);

      Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };

      Response.error = function () {
        var response = new Response(null, {
          status: 0,
          statusText: ''
        });
        response.type = 'error';
        return response;
      };

      var redirectStatuses = [301, 302, 303, 307, 308];

      Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError('Invalid status code');
        }

        return new Response(null, {
          status: status,
          headers: {
            location: url
          }
        });
      };

      exports.DOMException = self.DOMException;

      try {
        new exports.DOMException();
      } catch (err) {
        exports.DOMException = function (message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };

        exports.DOMException.prototype = Object.create(Error.prototype);
        exports.DOMException.prototype.constructor = exports.DOMException;
      }

      function fetch(input, init) {
        return new Promise(function (resolve, reject) {
          var request = new Request(input, init);

          if (request.signal && request.signal.aborted) {
            return reject(new exports.DOMException('Aborted', 'AbortError'));
          }

          var xhr = new XMLHttpRequest();

          function abortXhr() {
            xhr.abort();
          }

          xhr.onload = function () {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || '')
            };
            options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
            var body = 'response' in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
          };

          xhr.onerror = function () {
            reject(new TypeError('Network request failed'));
          };

          xhr.ontimeout = function () {
            reject(new TypeError('Network request failed'));
          };

          xhr.onabort = function () {
            reject(new exports.DOMException('Aborted', 'AbortError'));
          };

          xhr.open(request.method, request.url, true);

          if (request.credentials === 'include') {
            xhr.withCredentials = true;
          } else if (request.credentials === 'omit') {
            xhr.withCredentials = false;
          }

          if ('responseType' in xhr && support.blob) {
            xhr.responseType = 'blob';
          }

          request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
          });

          if (request.signal) {
            request.signal.addEventListener('abort', abortXhr);

            xhr.onreadystatechange = function () {
              // DONE (success or failure)
              if (xhr.readyState === 4) {
                request.signal.removeEventListener('abort', abortXhr);
              }
            };
          }

          xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
        });
      }

      fetch.polyfill = true;

      if (!self.fetch) {
        self.fetch = fetch;
        self.Headers = Headers;
        self.Request = Request;
        self.Response = Response;
      }

      exports.Headers = Headers;
      exports.Request = Request;
      exports.Response = Response;
      exports.fetch = fetch;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      return exports;
    })({});
  })(__self__);

  __self__.fetch.ponyfill = true; // Remove "polyfill" property added by whatwg-fetch

  delete __self__.fetch.polyfill; // Choose between native implementation (global) or custom implementation (__self__)
  // var ctx = global.fetch ? global : __self__;

  var ctx = __self__; // this line disable service worker support temporarily

  exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'

  exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.

  exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'

  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
});

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/Footer.svelte"; // (1:0) <script>     import fetch from 'cross-fetch';      let promise = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   var time = '';  var year = '';   function updateClock() {   var now = new Date(), // current date    hour = now.getHours(),    minutes = now.getMinutes(),    sep = ':',    ampm = 'am';      if (hour >= 12) {     hour -= 12;     ampm = 'pm';   }

function create_catch_block(ctx) {
  var block = {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_catch_block.name,
    type: "catch",
    source: "(1:0) <script>     import fetch from 'cross-fetch';      let promise = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      const monthNames = [\\\"January\\\", \\\"February\\\", \\\"March\\\", \\\"April\\\", \\\"May\\\", \\\"June\\\", \\\"July\\\", \\\"August\\\", \\\"September\\\", \\\"October\\\", \\\"November\\\", \\\"December\\\"];   var time = '';  var year = '';   function updateClock() {   var now = new Date(), // current date    hour = now.getHours(),    minutes = now.getMinutes(),    sep = ':',    ampm = 'am';      if (hour >= 12) {     hour -= 12;     ampm = 'pm';   }",
    ctx: ctx
  });
  return block;
} // (49:16) {:then data}


function create_then_block(ctx) {
  var t0;
  var t1_value =
  /*monthNames*/
  ctx[3][new Date(
  /*data*/
  ctx[5].commit.commit.author.date).getMonth()] + "";
  var t1;
  var t2;
  var t3_value = new Date(
  /*data*/
  ctx[5].commit.commit.author.date).getFullYear() + "";
  var t3;
  var block = {
    c: function create() {
      t0 = text("Updated – \n                    ");
      t1 = text(t1_value);
      t2 = space();
      t3 = text(t3_value);
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Updated – \n                    ");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_space(nodes);
      t3 = claim_text(nodes, t3_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, t2, anchor);
      insert_dev(target, t3, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(t3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_then_block.name,
    type: "then",
    source: "(49:16) {:then data}",
    ctx: ctx
  });
  return block;
} // (47:32)                                   {:then data}


function create_pending_block(ctx) {
  var block = {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_pending_block.name,
    type: "pending",
    source: "(47:32)                                   {:then data}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var div4;
  var div0;
  var p0;
  var t0;
  var t1;
  var t2;
  var t3;
  var div3;
  var div1;
  var p1;
  var t4;
  var div2;
  var p2;
  var t5;
  var t6;
  var t7;
  var info = {
    ctx: ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 5
  };
  handle_promise(/*promise*/
  ctx[2], info);
  var block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      p0 = element("p");
      t0 = text("Ottawa – ");
      t1 = text(
      /*time*/
      ctx[0]);
      t2 = text(" ET");
      t3 = space();
      div3 = element("div");
      div1 = element("div");
      p1 = element("p");
      info.block.c();
      t4 = space();
      div2 = element("div");
      p2 = element("p");
      t5 = text("2011 – ");
      t6 = text(
      /*year*/
      ctx[1]);
      t7 = text(" ©");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Ottawa – ");
      t1 = claim_text(p0_nodes,
      /*time*/
      ctx[0]);
      t2 = claim_text(p0_nodes, " ET");
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      info.block.l(p1_nodes);
      p1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t5 = claim_text(p2_nodes, "2011 – ");
      t6 = claim_text(p2_nodes,
      /*year*/
      ctx[1]);
      t7 = claim_text(p2_nodes, " ©");
      p2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file$1, 41, 8, 1094);
      attr_dev(div0, "class", "w-8/12 px-4 sm:w-3/12");
      add_location(div0, file$1, 40, 4, 1050);
      add_location(p1, file$1, 45, 12, 1241);
      attr_dev(div1, "class", "hidden w-8/12 px-4 sm:block");
      add_location(div1, file$1, 44, 8, 1187);
      add_location(p2, file$1, 56, 12, 1648);
      attr_dev(div2, "class", "flex justify-end w-full px-4 sm:w-4/12");
      add_location(div2, file$1, 55, 8, 1583);
      attr_dev(div3, "class", "flex w-4/12 ml-auto sm:w-8/12");
      add_location(div3, file$1, 43, 4, 1135);
      attr_dev(div4, "class", "flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400");
      add_location(div4, file$1, 39, 0, 964);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div0);
      append_dev(div0, p0);
      append_dev(p0, t0);
      append_dev(p0, t1);
      append_dev(p0, t2);
      append_dev(div4, t3);
      append_dev(div4, div3);
      append_dev(div3, div1);
      append_dev(div1, p1);
      info.block.m(p1, info.anchor = null);

      info.mount = function () {
        return p1;
      };

      info.anchor = null;
      append_dev(div3, t4);
      append_dev(div3, div2);
      append_dev(div2, p2);
      append_dev(p2, t5);
      append_dev(p2, t6);
      append_dev(p2, t7);
    },
    p: function update(new_ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      ctx = new_ctx;
      if (dirty &
      /*time*/
      1) set_data_dev(t1,
      /*time*/
      ctx[0]);
      update_await_block_branch(info, ctx, dirty);
      if (dirty &
      /*year*/
      2) set_data_dev(t6,
      /*year*/
      ctx[1]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Footer", slots, []);
  var promise = browserPonyfill("https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages").then(function (r) {
    return r.json();
  });
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var time = "";
  var year = "";

  function updateClock() {
    var now = new Date(),
        hour = now.getHours(),
        minutes = now.getMinutes(),
        sep = ":",
        ampm = "am"; // current date

    if (hour >= 12) {
      hour -= 12;
      ampm = "pm";
    }

    minutes = minutes < 10 ? "0" + minutes : minutes;
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    // set the content of the element with the ID time to the formatted string

    $$invalidate(0, time = hour + sep + minutes + " " + ampm);
    $$invalidate(1, year = now.getFullYear()); // call this function again in 1000ms

    setTimeout(updateClock, 1000);
  }

  updateClock();
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Footer> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      fetch: browserPonyfill,
      promise: promise,
      monthNames: monthNames,
      time: time,
      year: year,
      updateClock: updateClock
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("promise" in $$props) $$invalidate(2, promise = $$props.promise);
    if ("time" in $$props) $$invalidate(0, time = $$props.time);
    if ("year" in $$props) $$invalidate(1, year = $$props.year);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [time, year, promise, monthNames];
}

var Footer = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Footer, _SvelteComponentDev);

  var _super = _createSuper$1(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Footer",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Footer;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var document_1 = globals.document;
var file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}

function get_each_context_4(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
} // (110:3) {#each projects as project}


function create_each_block_4(ctx) {
  var a;
  var div0;
  var p0;
  var t0_value =
  /*project*/
  ctx[18].title + "";
  var t0;
  var t1;
  var div1;
  var p1;
  var t2_value =
  /*project*/
  ctx[18].role + "";
  var t2;
  var t3;
  var div2;
  var p2;
  var t4_value =
  /*project*/
  ctx[18].year + "";
  var t4;
  var t5;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      div0 = element("div");
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      p1 = element("p");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      p2 = element("p");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      div0 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, t0_value);
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(a_nodes);
      div1 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, t2_value);
      p1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(a_nodes);
      div2 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, t4_value);
      p2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 112, 6, 4235);
      attr_dev(div0, "class", "w-8/12 px-4 sm:w-4/12");
      add_location(div0, file, 111, 5, 4193);
      add_location(p1, file, 115, 6, 4323);
      attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div1, file, 114, 5, 4275);
      add_location(p2, file, 118, 6, 4411);
      attr_dev(div2, "class", "flex justify-end w-4/12 px-4");
      add_location(div2, file, 117, 5, 4362);
      attr_dev(a, "class", "flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
      attr_dev(a, "href", a_href_value =
      /*project*/
      ctx[18].url);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer noopener");
      add_location(a, file, 110, 4, 4012);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, div0);
      append_dev(div0, p0);
      append_dev(p0, t0);
      append_dev(a, t1);
      append_dev(a, div1);
      append_dev(div1, p1);
      append_dev(p1, t2);
      append_dev(a, t3);
      append_dev(a, div2);
      append_dev(div2, p2);
      append_dev(p2, t4);
      append_dev(a, t5);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*projects*/
      1 && t0_value !== (t0_value =
      /*project*/
      ctx[18].title + "")) set_data_dev(t0, t0_value);
      if (dirty &
      /*projects*/
      1 && t2_value !== (t2_value =
      /*project*/
      ctx[18].role + "")) set_data_dev(t2, t2_value);
      if (dirty &
      /*projects*/
      1 && t4_value !== (t4_value =
      /*project*/
      ctx[18].year + "")) set_data_dev(t4, t4_value);

      if (dirty &
      /*projects*/
      1 && a_href_value !== (a_href_value =
      /*project*/
      ctx[18].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_4.name,
    type: "each",
    source: "(110:3) {#each projects as project}",
    ctx: ctx
  });
  return block;
} // (140:3) {#each experiences as experience}


function create_each_block_3(ctx) {
  var a;
  var div0;
  var p0;
  var t0_value =
  /*experience*/
  ctx[15].title + "";
  var t0;
  var t1;
  var div1;
  var p1;
  var t2_value =
  /*experience*/
  ctx[15].role + "";
  var t2;
  var t3;
  var div2;
  var p2;
  var t4_value =
  /*experience*/
  ctx[15].date + "";
  var t4;
  var t5;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      div0 = element("div");
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      p1 = element("p");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      p2 = element("p");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      div0 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, t0_value);
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(a_nodes);
      div1 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, t2_value);
      p1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(a_nodes);
      div2 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, t4_value);
      p2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 142, 6, 5157);
      attr_dev(div0, "class", "w-4/12 px-4");
      add_location(div0, file, 141, 5, 5125);
      add_location(p1, file, 145, 6, 5248);
      attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div1, file, 144, 5, 5200);
      add_location(p2, file, 148, 6, 5349);
      attr_dev(div2, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
      add_location(div2, file, 147, 5, 5290);
      attr_dev(a, "class", "flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
      attr_dev(a, "href", a_href_value =
      /*experience*/
      ctx[15].url);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer noopener");
      add_location(a, file, 140, 4, 4941);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, div0);
      append_dev(div0, p0);
      append_dev(p0, t0);
      append_dev(a, t1);
      append_dev(a, div1);
      append_dev(div1, p1);
      append_dev(p1, t2);
      append_dev(a, t3);
      append_dev(a, div2);
      append_dev(div2, p2);
      append_dev(p2, t4);
      append_dev(a, t5);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*experiences*/
      2 && t0_value !== (t0_value =
      /*experience*/
      ctx[15].title + "")) set_data_dev(t0, t0_value);
      if (dirty &
      /*experiences*/
      2 && t2_value !== (t2_value =
      /*experience*/
      ctx[15].role + "")) set_data_dev(t2, t2_value);
      if (dirty &
      /*experiences*/
      2 && t4_value !== (t4_value =
      /*experience*/
      ctx[15].date + "")) set_data_dev(t4, t4_value);

      if (dirty &
      /*experiences*/
      2 && a_href_value !== (a_href_value =
      /*experience*/
      ctx[15].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_3.name,
    type: "each",
    source: "(140:3) {#each experiences as experience}",
    ctx: ctx
  });
  return block;
} // (158:3) {#each services as service}


function create_each_block_2(ctx) {
  var p;
  var t_value =
  /*service*/
  ctx[12].title + "";
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-gray-600 dark:text-gray-400");
      add_location(p, file, 158, 4, 5599);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*services*/
      8 && t_value !== (t_value =
      /*service*/
      ctx[12].title + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(158:3) {#each services as service}",
    ctx: ctx
  });
  return block;
} // (164:3) {#each collaborators as collaborator}


function create_each_block_1(ctx) {
  var p;
  var t_value =
  /*collaborator*/
  ctx[9].title + "";
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-gray-600 dark:text-gray-400");
      add_location(p, file, 164, 4, 5820);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*collaborators*/
      4 && t_value !== (t_value =
      /*collaborator*/
      ctx[9].title + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(164:3) {#each collaborators as collaborator}",
    ctx: ctx
  });
  return block;
} // (170:3) {#each links as link}


function create_each_block(ctx) {
  var p;
  var a;
  var t_value =
  /*link*/
  ctx[6].title + "";
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      p = element("p");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      a = claim_element(p_nodes, "A", {
        href: true,
        class: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", a_href_value =
      /*link*/
      ctx[6].url);
      attr_dev(a, "class", "text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer noopener");
      add_location(a, file, 170, 7, 6017);
      add_location(p, file, 170, 4, 6014);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, a);
      append_dev(a, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*links*/
      16 && t_value !== (t_value =
      /*link*/
      ctx[6].title + "")) set_data_dev(t, t_value);

      if (dirty &
      /*links*/
      16 && a_href_value !== (a_href_value =
      /*link*/
      ctx[6].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(170:3) {#each links as link}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var div0;
  var t1;
  var div18;
  var a;
  var t2;
  var header0;
  var div2;
  var h1;
  var t3;
  var t4;
  var div1;
  var t5;
  var div6;
  var div3;
  var p0;
  var t6;
  var t7;
  var div4;
  var p1;
  var t8;
  var t9;
  var div5;
  var p2;
  var t10;
  var t11;
  var section0;
  var div8;
  var div7;
  var t12;
  var div9;
  var t13;
  var header1;
  var div13;
  var div10;
  var p3;
  var t14;
  var t15;
  var div11;
  var p4;
  var t16;
  var t17;
  var div12;
  var p5;
  var t18;
  var t19;
  var section1;
  var div14;
  var t20;
  var section2;
  var div15;
  var p6;
  var t21;
  var t22;
  var t23;
  var div16;
  var p7;
  var t24;
  var t25;
  var t26;
  var div17;
  var p8;
  var t27;
  var t28;
  var t29;
  var footer;
  var current;
  var each_value_4 =
  /*projects*/
  ctx[0];
  validate_each_argument(each_value_4);
  var each_blocks_4 = [];

  for (var i = 0; i < each_value_4.length; i += 1) {
    each_blocks_4[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }

  var each_value_3 =
  /*experiences*/
  ctx[1];
  validate_each_argument(each_value_3);
  var each_blocks_3 = [];

  for (var _i = 0; _i < each_value_3.length; _i += 1) {
    each_blocks_3[_i] = create_each_block_3(get_each_context_3(ctx, each_value_3, _i));
  }

  var each_value_2 =
  /*services*/
  ctx[3];
  validate_each_argument(each_value_2);
  var each_blocks_2 = [];

  for (var _i2 = 0; _i2 < each_value_2.length; _i2 += 1) {
    each_blocks_2[_i2] = create_each_block_2(get_each_context_2(ctx, each_value_2, _i2));
  }

  var each_value_1 =
  /*collaborators*/
  ctx[2];
  validate_each_argument(each_value_1);
  var each_blocks_1 = [];

  for (var _i3 = 0; _i3 < each_value_1.length; _i3 += 1) {
    each_blocks_1[_i3] = create_each_block_1(get_each_context_1(ctx, each_value_1, _i3));
  }

  var each_value =
  /*links*/
  ctx[4];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
    each_blocks[_i4] = create_each_block(get_each_context(ctx, each_value, _i4));
  }

  footer = new Footer({
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      div0 = element("div");
      t1 = space();
      div18 = element("div");
      a = element("a");
      t2 = space();
      header0 = element("header");
      div2 = element("div");
      h1 = element("h1");
      t3 = text("Maxim Siebert");
      t4 = space();
      div1 = element("div");
      t5 = space();
      div6 = element("div");
      div3 = element("div");
      p0 = element("p");
      t6 = text("Project");
      t7 = space();
      div4 = element("div");
      p1 = element("p");
      t8 = text("Role");
      t9 = space();
      div5 = element("div");
      p2 = element("p");
      t10 = text("Year");
      t11 = space();
      section0 = element("section");
      div8 = element("div");
      div7 = element("div");
      t12 = space();
      div9 = element("div");

      for (var _i5 = 0; _i5 < each_blocks_4.length; _i5 += 1) {
        each_blocks_4[_i5].c();
      }

      t13 = space();
      header1 = element("header");
      div13 = element("div");
      div10 = element("div");
      p3 = element("p");
      t14 = text("Experience");
      t15 = space();
      div11 = element("div");
      p4 = element("p");
      t16 = text("Title");
      t17 = space();
      div12 = element("div");
      p5 = element("p");
      t18 = text("Year");
      t19 = space();
      section1 = element("section");
      div14 = element("div");

      for (var _i6 = 0; _i6 < each_blocks_3.length; _i6 += 1) {
        each_blocks_3[_i6].c();
      }

      t20 = space();
      section2 = element("section");
      div15 = element("div");
      p6 = element("p");
      t21 = text("Services");
      t22 = space();

      for (var _i7 = 0; _i7 < each_blocks_2.length; _i7 += 1) {
        each_blocks_2[_i7].c();
      }

      t23 = space();
      div16 = element("div");
      p7 = element("p");
      t24 = text("Selected Clients");
      t25 = space();

      for (var _i8 = 0; _i8 < each_blocks_1.length; _i8 += 1) {
        each_blocks_1[_i8].c();
      }

      t26 = space();
      div17 = element("div");
      p8 = element("p");
      t27 = text("Links");
      t28 = space();

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].c();
      }

      t29 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1e6j3ni\"]", document_1.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      children(div0).forEach(detach_dev);
      t1 = claim_space(nodes);
      div18 = claim_element(nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      a = claim_element(div18_nodes, "A", {
        href: true,
        class: true
      });
      children(a).forEach(detach_dev);
      t2 = claim_space(div18_nodes);
      header0 = claim_element(div18_nodes, "HEADER", {
        class: true
      });
      var header0_nodes = children(header0);
      div2 = claim_element(header0_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h1 = claim_element(div2_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t3 = claim_text(h1_nodes, "Maxim Siebert");
      h1_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(header0_nodes);
      div6 = claim_element(header0_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div3 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p0 = claim_element(div3_nodes, "P", {});
      var p0_nodes = children(p0);
      t6 = claim_text(p0_nodes, "Project");
      p0_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      p1 = claim_element(div4_nodes, "P", {});
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "Role");
      p1_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t9 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      p2 = claim_element(div5_nodes, "P", {});
      var p2_nodes = children(p2);
      t10 = claim_text(p2_nodes, "Year");
      p2_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      header0_nodes.forEach(detach_dev);
      t11 = claim_space(div18_nodes);
      section0 = claim_element(div18_nodes, "SECTION", {
        class: true
      });
      var section0_nodes = children(section0);
      div8 = claim_element(section0_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t12 = claim_space(section0_nodes);
      div9 = claim_element(section0_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);

      for (var _i10 = 0; _i10 < each_blocks_4.length; _i10 += 1) {
        each_blocks_4[_i10].l(div9_nodes);
      }

      div9_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t13 = claim_space(div18_nodes);
      header1 = claim_element(div18_nodes, "HEADER", {
        class: true
      });
      var header1_nodes = children(header1);
      div13 = claim_element(header1_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      div10 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      p3 = claim_element(div10_nodes, "P", {});
      var p3_nodes = children(p3);
      t14 = claim_text(p3_nodes, "Experience");
      p3_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      t15 = claim_space(div13_nodes);
      div11 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      p4 = claim_element(div11_nodes, "P", {});
      var p4_nodes = children(p4);
      t16 = claim_text(p4_nodes, "Title");
      p4_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t17 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      p5 = claim_element(div12_nodes, "P", {});
      var p5_nodes = children(p5);
      t18 = claim_text(p5_nodes, "Year");
      p5_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      header1_nodes.forEach(detach_dev);
      t19 = claim_space(div18_nodes);
      section1 = claim_element(div18_nodes, "SECTION", {
        class: true
      });
      var section1_nodes = children(section1);
      div14 = claim_element(section1_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);

      for (var _i11 = 0; _i11 < each_blocks_3.length; _i11 += 1) {
        each_blocks_3[_i11].l(div14_nodes);
      }

      div14_nodes.forEach(detach_dev);
      section1_nodes.forEach(detach_dev);
      t20 = claim_space(div18_nodes);
      section2 = claim_element(div18_nodes, "SECTION", {
        class: true
      });
      var section2_nodes = children(section2);
      div15 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      p6 = claim_element(div15_nodes, "P", {
        class: true
      });
      var p6_nodes = children(p6);
      t21 = claim_text(p6_nodes, "Services");
      p6_nodes.forEach(detach_dev);
      t22 = claim_space(div15_nodes);

      for (var _i12 = 0; _i12 < each_blocks_2.length; _i12 += 1) {
        each_blocks_2[_i12].l(div15_nodes);
      }

      div15_nodes.forEach(detach_dev);
      t23 = claim_space(section2_nodes);
      div16 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      p7 = claim_element(div16_nodes, "P", {
        class: true
      });
      var p7_nodes = children(p7);
      t24 = claim_text(p7_nodes, "Selected Clients");
      p7_nodes.forEach(detach_dev);
      t25 = claim_space(div16_nodes);

      for (var _i13 = 0; _i13 < each_blocks_1.length; _i13 += 1) {
        each_blocks_1[_i13].l(div16_nodes);
      }

      div16_nodes.forEach(detach_dev);
      t26 = claim_space(section2_nodes);
      div17 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      p8 = claim_element(div17_nodes, "P", {
        class: true
      });
      var p8_nodes = children(p8);
      t27 = claim_text(p8_nodes, "Links");
      p8_nodes.forEach(detach_dev);
      t28 = claim_space(div17_nodes);

      for (var _i14 = 0; _i14 < each_blocks.length; _i14 += 1) {
        each_blocks[_i14].l(div17_nodes);
      }

      div17_nodes.forEach(detach_dev);
      section2_nodes.forEach(detach_dev);
      t29 = claim_space(div18_nodes);
      claim_component(footer.$$.fragment, div18_nodes);
      div18_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document_1.title = "Maxim Siebert – Designer & Developer";
      attr_dev(div0, "id", "cursor");
      attr_dev(div0, "class", "absolute w-2 h-2 duration-100 ease-in-out bg-black rounded-full pointer-events-none dark:bg-white -top-10 -left-10");
      add_location(div0, file, 82, 0, 2800);
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "self-start inline-block px-4 mb-5 loader");
      add_location(a, file, 84, 1, 3063);
      attr_dev(h1, "class", "inline-block mb-1 sm:mb-2 md:mb-0");
      add_location(h1, file, 87, 3, 3247);
      attr_dev(div1, "class", "block text-gray-600 dark:text-gray-400 md:hidden");
      add_location(div1, file, 88, 3, 3315);
      attr_dev(div2, "class", "w-full px-4 mb-5 sm:mb-8 lg:w-3/12 md:w-4/12 md:mb-0");
      add_location(div2, file, 86, 2, 3177);
      add_location(p0, file, 94, 4, 3500);
      attr_dev(div3, "class", "w-4/12 px-4");
      add_location(div3, file, 93, 3, 3470);
      add_location(p1, file, 97, 4, 3574);
      attr_dev(div4, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div4, file, 96, 3, 3528);
      add_location(p2, file, 100, 4, 3656);
      attr_dev(div5, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
      add_location(div5, file, 99, 3, 3599);
      attr_dev(div6, "class", "flex w-full ml-auto md:w-8/12");
      add_location(div6, file, 92, 2, 3423);
      attr_dev(header0, "class", "flex flex-wrap mb-1 sm:mb-2");
      add_location(header0, file, 85, 1, 3130);
      attr_dev(div7, "class", "leading-tight");
      add_location(div7, file, 106, 3, 3874);
      attr_dev(div8, "class", "hidden w-4/12 px-4 text-base tracking-tight text-black lg:text-lg lg:w-3/12 dark:text-white md:block");
      add_location(div8, file, 105, 2, 3756);
      attr_dev(div9, "class", "w-full ml-auto md:w-8/12");
      add_location(div9, file, 108, 2, 3938);
      attr_dev(section0, "class", "flex flex-wrap mb-5 sm:mb-8 md:mb-12");
      add_location(section0, file, 104, 1, 3699);
      add_location(p3, file, 127, 4, 4601);
      attr_dev(div10, "class", "w-4/12 px-4");
      add_location(div10, file, 126, 3, 4571);
      add_location(p4, file, 130, 4, 4678);
      attr_dev(div11, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div11, file, 129, 3, 4632);
      add_location(p5, file, 133, 4, 4761);
      attr_dev(div12, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
      add_location(div12, file, 132, 3, 4704);
      attr_dev(div13, "class", "flex w-full ml-auto md:w-8/12");
      add_location(div13, file, 125, 2, 4524);
      attr_dev(header1, "class", "flex mb-1 sm:mb-2");
      add_location(header1, file, 124, 1, 4487);
      attr_dev(div14, "class", "w-full ml-auto md:w-8/12");
      add_location(div14, file, 138, 2, 4861);
      attr_dev(section1, "class", "flex flex-wrap mb-5 sm:mb-8 md:mb-12");
      add_location(section1, file, 137, 1, 4804);
      attr_dev(p6, "class", "mb-1 sm:mb-2");
      add_location(p6, file, 156, 3, 5527);
      attr_dev(div15, "class", "w-8/12 px-4 sm:w-4/12");
      add_location(div15, file, 155, 2, 5488);
      attr_dev(p7, "class", "mb-1 sm:mb-2");
      add_location(p7, file, 162, 3, 5730);
      attr_dev(div16, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div16, file, 161, 2, 5685);
      attr_dev(p8, "class", "mb-1 sm:mb-2");
      add_location(p8, file, 168, 3, 5951);
      attr_dev(div17, "class", "w-4/12 px-4 text-right");
      add_location(div17, file, 167, 2, 5911);
      attr_dev(section2, "class", "flex flex-wrap w-full ml-auto md:w-8/12");
      add_location(section2, file, 154, 1, 5428);
      attr_dev(div18, "class", "flex flex-col min-h-screen py-5 text-xs text-black bg-gray-100 lg:px-4 dark:bg-black dark:text-white");
      add_location(div18, file, 83, 0, 2947);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, div18, anchor);
      append_dev(div18, a);
      append_dev(div18, t2);
      append_dev(div18, header0);
      append_dev(header0, div2);
      append_dev(div2, h1);
      append_dev(h1, t3);
      append_dev(div2, t4);
      append_dev(div2, div1);
      div1.innerHTML =
      /*description*/
      ctx[5];
      append_dev(header0, t5);
      append_dev(header0, div6);
      append_dev(div6, div3);
      append_dev(div3, p0);
      append_dev(p0, t6);
      append_dev(div6, t7);
      append_dev(div6, div4);
      append_dev(div4, p1);
      append_dev(p1, t8);
      append_dev(div6, t9);
      append_dev(div6, div5);
      append_dev(div5, p2);
      append_dev(p2, t10);
      append_dev(div18, t11);
      append_dev(div18, section0);
      append_dev(section0, div8);
      append_dev(div8, div7);
      div7.innerHTML =
      /*description*/
      ctx[5];
      append_dev(section0, t12);
      append_dev(section0, div9);

      for (var _i15 = 0; _i15 < each_blocks_4.length; _i15 += 1) {
        each_blocks_4[_i15].m(div9, null);
      }

      append_dev(div18, t13);
      append_dev(div18, header1);
      append_dev(header1, div13);
      append_dev(div13, div10);
      append_dev(div10, p3);
      append_dev(p3, t14);
      append_dev(div13, t15);
      append_dev(div13, div11);
      append_dev(div11, p4);
      append_dev(p4, t16);
      append_dev(div13, t17);
      append_dev(div13, div12);
      append_dev(div12, p5);
      append_dev(p5, t18);
      append_dev(div18, t19);
      append_dev(div18, section1);
      append_dev(section1, div14);

      for (var _i16 = 0; _i16 < each_blocks_3.length; _i16 += 1) {
        each_blocks_3[_i16].m(div14, null);
      }

      append_dev(div18, t20);
      append_dev(div18, section2);
      append_dev(section2, div15);
      append_dev(div15, p6);
      append_dev(p6, t21);
      append_dev(div15, t22);

      for (var _i17 = 0; _i17 < each_blocks_2.length; _i17 += 1) {
        each_blocks_2[_i17].m(div15, null);
      }

      append_dev(section2, t23);
      append_dev(section2, div16);
      append_dev(div16, p7);
      append_dev(p7, t24);
      append_dev(div16, t25);

      for (var _i18 = 0; _i18 < each_blocks_1.length; _i18 += 1) {
        each_blocks_1[_i18].m(div16, null);
      }

      append_dev(section2, t26);
      append_dev(section2, div17);
      append_dev(div17, p8);
      append_dev(p8, t27);
      append_dev(div17, t28);

      for (var _i19 = 0; _i19 < each_blocks.length; _i19 += 1) {
        each_blocks[_i19].m(div17, null);
      }

      append_dev(div18, t29);
      mount_component(footer, div18, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*projects*/
      1) {
        each_value_4 =
        /*projects*/
        ctx[0];
        validate_each_argument(each_value_4);

        var _i20;

        for (_i20 = 0; _i20 < each_value_4.length; _i20 += 1) {
          var child_ctx = get_each_context_4(ctx, each_value_4, _i20);

          if (each_blocks_4[_i20]) {
            each_blocks_4[_i20].p(child_ctx, dirty);
          } else {
            each_blocks_4[_i20] = create_each_block_4(child_ctx);

            each_blocks_4[_i20].c();

            each_blocks_4[_i20].m(div9, null);
          }
        }

        for (; _i20 < each_blocks_4.length; _i20 += 1) {
          each_blocks_4[_i20].d(1);
        }

        each_blocks_4.length = each_value_4.length;
      }

      if (dirty &
      /*experiences*/
      2) {
        each_value_3 =
        /*experiences*/
        ctx[1];
        validate_each_argument(each_value_3);

        var _i21;

        for (_i21 = 0; _i21 < each_value_3.length; _i21 += 1) {
          var _child_ctx = get_each_context_3(ctx, each_value_3, _i21);

          if (each_blocks_3[_i21]) {
            each_blocks_3[_i21].p(_child_ctx, dirty);
          } else {
            each_blocks_3[_i21] = create_each_block_3(_child_ctx);

            each_blocks_3[_i21].c();

            each_blocks_3[_i21].m(div14, null);
          }
        }

        for (; _i21 < each_blocks_3.length; _i21 += 1) {
          each_blocks_3[_i21].d(1);
        }

        each_blocks_3.length = each_value_3.length;
      }

      if (dirty &
      /*services*/
      8) {
        each_value_2 =
        /*services*/
        ctx[3];
        validate_each_argument(each_value_2);

        var _i22;

        for (_i22 = 0; _i22 < each_value_2.length; _i22 += 1) {
          var _child_ctx2 = get_each_context_2(ctx, each_value_2, _i22);

          if (each_blocks_2[_i22]) {
            each_blocks_2[_i22].p(_child_ctx2, dirty);
          } else {
            each_blocks_2[_i22] = create_each_block_2(_child_ctx2);

            each_blocks_2[_i22].c();

            each_blocks_2[_i22].m(div15, null);
          }
        }

        for (; _i22 < each_blocks_2.length; _i22 += 1) {
          each_blocks_2[_i22].d(1);
        }

        each_blocks_2.length = each_value_2.length;
      }

      if (dirty &
      /*collaborators*/
      4) {
        each_value_1 =
        /*collaborators*/
        ctx[2];
        validate_each_argument(each_value_1);

        var _i23;

        for (_i23 = 0; _i23 < each_value_1.length; _i23 += 1) {
          var _child_ctx3 = get_each_context_1(ctx, each_value_1, _i23);

          if (each_blocks_1[_i23]) {
            each_blocks_1[_i23].p(_child_ctx3, dirty);
          } else {
            each_blocks_1[_i23] = create_each_block_1(_child_ctx3);

            each_blocks_1[_i23].c();

            each_blocks_1[_i23].m(div16, null);
          }
        }

        for (; _i23 < each_blocks_1.length; _i23 += 1) {
          each_blocks_1[_i23].d(1);
        }

        each_blocks_1.length = each_value_1.length;
      }

      if (dirty &
      /*links*/
      16) {
        each_value =
        /*links*/
        ctx[4];
        validate_each_argument(each_value);

        var _i24;

        for (_i24 = 0; _i24 < each_value.length; _i24 += 1) {
          var _child_ctx4 = get_each_context(ctx, each_value, _i24);

          if (each_blocks[_i24]) {
            each_blocks[_i24].p(_child_ctx4, dirty);
          } else {
            each_blocks[_i24] = create_each_block(_child_ctx4);

            each_blocks[_i24].c();

            each_blocks[_i24].m(div17, null);
          }
        }

        for (; _i24 < each_blocks.length; _i24 += 1) {
          each_blocks[_i24].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(div18);
      destroy_each(each_blocks_4, detaching);
      destroy_each(each_blocks_3, detaching);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      destroy_component(footer);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload() {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var getProjects, projects, getExperiences, experiences, getCollaborators, collaborators, getServices, services, getLinks, links;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.fetch("content/projects.json");

          case 2:
            getProjects = _context.sent;
            _context.next = 5;
            return getProjects.json();

          case 5:
            projects = _context.sent;
            _context.next = 8;
            return this.fetch("content/experiences.json");

          case 8:
            getExperiences = _context.sent;
            _context.next = 11;
            return getExperiences.json();

          case 11:
            experiences = _context.sent;
            _context.next = 14;
            return this.fetch("content/collaborators.json");

          case 14:
            getCollaborators = _context.sent;
            _context.next = 17;
            return getCollaborators.json();

          case 17:
            collaborators = _context.sent;
            _context.next = 20;
            return this.fetch("content/services.json");

          case 20:
            getServices = _context.sent;
            _context.next = 23;
            return getServices.json();

          case 23:
            services = _context.sent;
            _context.next = 26;
            return this.fetch("content/links.json");

          case 26:
            getLinks = _context.sent;
            _context.next = 29;
            return getLinks.json();

          case 29:
            links = _context.sent;
            return _context.abrupt("return", {
              projects: projects,
              experiences: experiences,
              collaborators: collaborators,
              services: services,
              links: links
            });

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Routes", slots, []);
  var projects = $$props.projects;
  var experiences = $$props.experiences;
  var collaborators = $$props.collaborators;
  var services = $$props.services;
  var links = $$props.links;
  var description = "is a French Canadian designer & developer. He's currently a Principal Designer at <a href=\"https://peggy.com/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Peggy</a> and freelances through his studio, <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Blunt</a>. This site lists most of the work he's done over the years. If you'd like to discuss new commissions or collaborate with Maxim, email him at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:underline\">maxim@hey.com</a>.";
  onMount(function () {
    var cursor = document.getElementById("cursor"); // Custom cursor

    document.addEventListener("mousemove", function (e) {
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    }); // Add dots when clicking links

    [].forEach.call(document.getElementsByTagName("a"), function (e) {
      e.addEventListener("click", function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var div = document.createElement("div");
        div.className = "dot";
        div.style.left = mouseX + "px";
        div.style.top = mouseY + "px";
        document.body.appendChild(div);
      });
      e.addEventListener("mouseover", function () {
        cursor.style.width = "0.75rem";
        cursor.style.height = "0.75rem";
      });
      e.addEventListener("mouseleave", function () {
        cursor.style.width = "0.5rem";
        cursor.style.height = "0.5rem";
      });
    }); // Remove dots on window resize

    window.addEventListener("resize", function () {
      document.querySelectorAll(".dot").forEach(function (e) {
        return e.remove();
      });
    });
  });
  var writable_props = ["projects", "experiences", "collaborators", "services", "links"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("projects" in $$props) $$invalidate(0, projects = $$props.projects);
    if ("experiences" in $$props) $$invalidate(1, experiences = $$props.experiences);
    if ("collaborators" in $$props) $$invalidate(2, collaborators = $$props.collaborators);
    if ("services" in $$props) $$invalidate(3, services = $$props.services);
    if ("links" in $$props) $$invalidate(4, links = $$props.links);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      onMount: onMount,
      Footer: Footer,
      projects: projects,
      experiences: experiences,
      collaborators: collaborators,
      services: services,
      links: links,
      description: description
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("projects" in $$props) $$invalidate(0, projects = $$props.projects);
    if ("experiences" in $$props) $$invalidate(1, experiences = $$props.experiences);
    if ("collaborators" in $$props) $$invalidate(2, collaborators = $$props.collaborators);
    if ("services" in $$props) $$invalidate(3, services = $$props.services);
    if ("links" in $$props) $$invalidate(4, links = $$props.links);
    if ("description" in $$props) $$invalidate(5, description = $$props.description);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [projects, experiences, collaborators, services, links, description];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      projects: 0,
      experiences: 1,
      collaborators: 2,
      services: 3,
      links: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*projects*/
    ctx[0] === undefined && !("projects" in props)) {
      console.warn("<Routes> was created without expected prop 'projects'");
    }

    if (
    /*experiences*/
    ctx[1] === undefined && !("experiences" in props)) {
      console.warn("<Routes> was created without expected prop 'experiences'");
    }

    if (
    /*collaborators*/
    ctx[2] === undefined && !("collaborators" in props)) {
      console.warn("<Routes> was created without expected prop 'collaborators'");
    }

    if (
    /*services*/
    ctx[3] === undefined && !("services" in props)) {
      console.warn("<Routes> was created without expected prop 'services'");
    }

    if (
    /*links*/
    ctx[4] === undefined && !("links" in props)) {
      console.warn("<Routes> was created without expected prop 'links'");
    }

    return _this;
  }

  _createClass(Routes, [{
    key: "projects",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "experiences",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "collaborators",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "services",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "links",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Routes;
}(SvelteComponentDev);

export default Routes;
export { preload };
