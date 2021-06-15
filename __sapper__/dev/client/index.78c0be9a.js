import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, h as handle_promise, v as validate_slots, g as globals, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, j as detach_dev, k as claim_space, l as add_location, m as attr_dev, n as insert_dev, o as append_dev, u as update_await_block_branch, p as set_data_dev, q as noop, r as validate_each_argument, w as create_component, x as query_selector_all, y as claim_component, z as mount_component, A as transition_in, B as transition_out, C as destroy_each, D as destroy_component } from './client.51a44691.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var browserPonyfill = createCommonjsModule(function (module, exports) {
var global = typeof self !== 'undefined' ? self : commonjsGlobal;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException;
}
F.prototype = global;
return new F();
})();
(function(self) {

((function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
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
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
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
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
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
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
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

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
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

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
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

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}));
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
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

/* src/components/Footer.svelte generated by Svelte v3.38.2 */

const { console: console_1 } = globals;
const file$1 = "src/components/Footer.svelte";

// (1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         "method": "GET",         "headers": {             "x-rapidapi-key": "3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0",             "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"         }
function create_catch_block_1(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block_1.name,
		type: "catch",
		source: "(1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         \\\"method\\\": \\\"GET\\\",         \\\"headers\\\": {             \\\"x-rapidapi-key\\\": \\\"3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0\\\",             \\\"x-rapidapi-host\\\": \\\"weatherapi-com.p.rapidapi.com\\\"         }",
		ctx
	});

	return block;
}

// (56:12) {:then temp}
function create_then_block_1(ctx) {
	let t_value = /*temp*/ ctx[7].current.temp_c + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block_1.name,
		type: "then",
		source: "(56:12) {:then temp}",
		ctx
	});

	return block;
}

// (55:32)              {:then temp}
function create_pending_block_1(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block_1.name,
		type: "pending",
		source: "(55:32)              {:then temp}",
		ctx
	});

	return block;
}

// (1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         "method": "GET",         "headers": {             "x-rapidapi-key": "3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0",             "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"         }
function create_catch_block(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block.name,
		type: "catch",
		source: "(1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         \\\"method\\\": \\\"GET\\\",         \\\"headers\\\": {             \\\"x-rapidapi-key\\\": \\\"3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0\\\",             \\\"x-rapidapi-host\\\": \\\"weatherapi-com.p.rapidapi.com\\\"         }",
		ctx
	});

	return block;
}

// (66:16) {:then data}
function create_then_block(ctx) {
	let t0;
	let t1_value = /*monthNames*/ ctx[4][new Date(/*data*/ ctx[6].commit.commit.author.date).getMonth()] + "";
	let t1;
	let t2;
	let t3_value = new Date(/*data*/ ctx[6].commit.commit.author.date).getFullYear() + "";
	let t3;

	const block = {
		c: function create() {
			t0 = text("Updated — \n                    ");
			t1 = text(t1_value);
			t2 = space();
			t3 = text(t3_value);
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Updated — \n                    ");
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
		block,
		id: create_then_block.name,
		type: "then",
		source: "(66:16) {:then data}",
		ctx
	});

	return block;
}

// (65:36)                  {:then data}
function create_pending_block(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block.name,
		type: "pending",
		source: "(65:36)                  {:then data}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div4;
	let div0;
	let p0;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let div3;
	let div1;
	let p1;
	let t5;
	let div2;
	let p2;
	let t6;
	let t7;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block_1,
		then: create_then_block_1,
		catch: create_catch_block_1,
		value: 7
	};

	handle_promise(/*temperature*/ ctx[3], info);

	let info_1 = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 6
	};

	handle_promise(/*updatedDate*/ ctx[2], info_1);

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			p0 = element("p");
			t0 = text("Ottawa\n            ");
			info.block.c();
			t1 = text("\n             — ");
			t2 = text(/*time*/ ctx[0]);
			t3 = text(" ET");
			t4 = space();
			div3 = element("div");
			div1 = element("div");
			p1 = element("p");
			info_1.block.c();
			t5 = space();
			div2 = element("div");
			p2 = element("p");
			t6 = text(/*year*/ ctx[1]);
			t7 = text(" ©");
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Ottawa\n            ");
			info.block.l(p0_nodes);
			t1 = claim_text(p0_nodes, "\n             — ");
			t2 = claim_text(p0_nodes, /*time*/ ctx[0]);
			t3 = claim_text(p0_nodes, " ET");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			info_1.block.l(p1_nodes);
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p2 = claim_element(div2_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, /*year*/ ctx[1]);
			t7 = claim_text(p2_nodes, " ©");
			p2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p0, file$1, 52, 8, 1468);
			attr_dev(div0, "class", "w-8/12 px-4 lg:w-3/12 sm:w-4/12");
			add_location(div0, file$1, 51, 4, 1414);
			add_location(p1, file$1, 63, 12, 1767);
			attr_dev(div1, "class", "hidden w-8/12 px-4 sm:block");
			add_location(div1, file$1, 62, 8, 1713);
			add_location(p2, file$1, 73, 12, 2161);
			attr_dev(div2, "class", "flex justify-end w-full px-4 sm:w-4/12");
			add_location(div2, file$1, 72, 8, 2096);
			attr_dev(div3, "class", "flex w-4/12 ml-auto sm:w-9/12");
			add_location(div3, file$1, 61, 4, 1661);
			attr_dev(div4, "class", "flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400");
			add_location(div4, file$1, 50, 0, 1328);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			append_dev(div0, p0);
			append_dev(p0, t0);
			info.block.m(p0, info.anchor = null);
			info.mount = () => p0;
			info.anchor = t1;
			append_dev(p0, t1);
			append_dev(p0, t2);
			append_dev(p0, t3);
			append_dev(div4, t4);
			append_dev(div4, div3);
			append_dev(div3, div1);
			append_dev(div1, p1);
			info_1.block.m(p1, info_1.anchor = null);
			info_1.mount = () => p1;
			info_1.anchor = null;
			append_dev(div3, t5);
			append_dev(div3, div2);
			append_dev(div2, p2);
			append_dev(p2, t6);
			append_dev(p2, t7);
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;
			update_await_block_branch(info, ctx, dirty);
			if (dirty & /*time*/ 1) set_data_dev(t2, /*time*/ ctx[0]);
			update_await_block_branch(info_1, ctx, dirty);
			if (dirty & /*year*/ 2) set_data_dev(t6, /*year*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			info.block.d();
			info.token = null;
			info = null;
			info_1.block.d();
			info_1.token = null;
			info_1 = null;
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Footer", slots, []);
	let updatedDate = browserPonyfill(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`).then(r => r.json());

	let temperature = browserPonyfill(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0",
			"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
		}
	}).then(r => r.json());

	console.log(temperature);

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

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

		$$invalidate(1, year = now.getFullYear());

		// call this function again in 1000ms
		setTimeout(updateClock, 1000);
	}

	updateClock();
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Footer> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		fetch: browserPonyfill,
		updatedDate,
		temperature,
		monthNames,
		time,
		year,
		updateClock
	});

	$$self.$inject_state = $$props => {
		if ("updatedDate" in $$props) $$invalidate(2, updatedDate = $$props.updatedDate);
		if ("temperature" in $$props) $$invalidate(3, temperature = $$props.temperature);
		if ("time" in $$props) $$invalidate(0, time = $$props.time);
		if ("year" in $$props) $$invalidate(1, year = $$props.year);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [time, year, updatedDate, temperature, monthNames];
}

class Footer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Footer",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.38.2 */
const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	return child_ctx;
}

function get_each_context_4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i];
	return child_ctx;
}

// (72:4) {#each projects as project}
function create_each_block_4(ctx) {
	let a;
	let div0;
	let p0;
	let t0_value = /*project*/ ctx[20].title + "";
	let t0;
	let t1;
	let div1;
	let p1;
	let t2_value = /*project*/ ctx[20].role + "";
	let t2;
	let t3;
	let div2;
	let p2;
	let t4_value = /*project*/ ctx[20].year + "";
	let t4;
	let t5;
	let a_href_value;

	const block = {
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
			div0 = claim_element(a_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, t0_value);
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			div1 = claim_element(a_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, t2_value);
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(a_nodes);
			div2 = claim_element(a_nodes, "DIV", { class: true });
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
			add_location(p0, file, 74, 7, 2782);
			attr_dev(div0, "class", "w-8/12 px-4 lg:w-3/12 sm:w-4/12");
			add_location(div0, file, 73, 6, 2729);
			add_location(p1, file, 77, 7, 2873);
			attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div1, file, 76, 6, 2824);
			add_location(p2, file, 80, 7, 2964);
			attr_dev(div2, "class", "flex justify-end w-5/12 px-4");
			add_location(div2, file, 79, 6, 2914);
			attr_dev(a, "class", "flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "href", a_href_value = /*project*/ ctx[20].url);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 72, 5, 2547);
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
			if (dirty & /*projects*/ 1 && t0_value !== (t0_value = /*project*/ ctx[20].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*projects*/ 1 && t2_value !== (t2_value = /*project*/ ctx[20].role + "")) set_data_dev(t2, t2_value);
			if (dirty & /*projects*/ 1 && t4_value !== (t4_value = /*project*/ ctx[20].year + "")) set_data_dev(t4, t4_value);

			if (dirty & /*projects*/ 1 && a_href_value !== (a_href_value = /*project*/ ctx[20].url)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_4.name,
		type: "each",
		source: "(72:4) {#each projects as project}",
		ctx
	});

	return block;
}

// (98:4) {#each experiences as experience}
function create_each_block_3(ctx) {
	let a;
	let div0;
	let p0;
	let t0_value = /*experience*/ ctx[17].title + "";
	let t0;
	let t1;
	let div1;
	let p1;
	let t2_value = /*experience*/ ctx[17].role + "";
	let t2;
	let t3;
	let div2;
	let p2;
	let t4_value = /*experience*/ ctx[17].date + "";
	let t4;
	let t5;
	let a_href_value;

	const block = {
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
			div0 = claim_element(a_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, t0_value);
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			div1 = claim_element(a_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, t2_value);
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(a_nodes);
			div2 = claim_element(a_nodes, "DIV", { class: true });
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
			add_location(p0, file, 100, 7, 3661);
			attr_dev(div0, "class", "w-8/12 px-4 lg:w-3/12 sm:w-4/12");
			add_location(div0, file, 99, 6, 3608);
			add_location(p1, file, 103, 7, 3755);
			attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div1, file, 102, 6, 3706);
			add_location(p2, file, 106, 7, 3859);
			attr_dev(div2, "class", "flex justify-end w-8/12 px-4 sm:w-5/12");
			add_location(div2, file, 105, 6, 3799);
			attr_dev(a, "class", "flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "href", a_href_value = /*experience*/ ctx[17].url);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 98, 5, 3423);
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
			if (dirty & /*experiences*/ 2 && t0_value !== (t0_value = /*experience*/ ctx[17].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*experiences*/ 2 && t2_value !== (t2_value = /*experience*/ ctx[17].role + "")) set_data_dev(t2, t2_value);
			if (dirty & /*experiences*/ 2 && t4_value !== (t4_value = /*experience*/ ctx[17].date + "")) set_data_dev(t4, t4_value);

			if (dirty & /*experiences*/ 2 && a_href_value !== (a_href_value = /*experience*/ ctx[17].url)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3.name,
		type: "each",
		source: "(98:4) {#each experiences as experience}",
		ctx
	});

	return block;
}

// (115:5) {#each services as service}
function create_each_block_2(ctx) {
	let p;
	let t_value = /*service*/ ctx[14].title + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "text-gray-600 dark:text-gray-400");
			add_location(p, file, 115, 6, 4090);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*services*/ 8 && t_value !== (t_value = /*service*/ ctx[14].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(115:5) {#each services as service}",
		ctx
	});

	return block;
}

// (121:5) {#each collaborators as collaborator}
function create_each_block_1(ctx) {
	let p;
	let t_value = /*collaborator*/ ctx[11].title + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "text-gray-600 dark:text-gray-400");
			add_location(p, file, 121, 6, 4323);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*collaborators*/ 4 && t_value !== (t_value = /*collaborator*/ ctx[11].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(121:5) {#each collaborators as collaborator}",
		ctx
	});

	return block;
}

// (127:5) {#each links as link}
function create_each_block(ctx) {
	let p;
	let a;
	let t_value = /*link*/ ctx[8].title + "";
	let t;
	let a_href_value;

	const block = {
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
			attr_dev(a, "href", a_href_value = /*link*/ ctx[8].url);
			attr_dev(a, "class", "text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 127, 9, 4532);
			add_location(p, file, 127, 6, 4529);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*links*/ 16 && t_value !== (t_value = /*link*/ ctx[8].title + "")) set_data_dev(t, t_value);

			if (dirty & /*links*/ 16 && a_href_value !== (a_href_value = /*link*/ ctx[8].url)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(127:5) {#each links as link}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let meta;
	let t0;
	let div13;
	let div12;
	let header0;
	let a;
	let t1;
	let t2;
	let h1;
	let t3;
	let t4;
	let p0;
	let t5;
	let t6;
	let p1;
	let t7;
	let t8;
	let t9;
	let div11;
	let div0;
	let t10;
	let div4;
	let div1;
	let p2;
	let t11;
	let t12;
	let div2;
	let p3;
	let t13;
	let t14;
	let div3;
	let p4;
	let t15;
	let t16;
	let section0;
	let t17;
	let header1;
	let div5;
	let p5;
	let t18;
	let t19;
	let div6;
	let p6;
	let t20;
	let t21;
	let div7;
	let p7;
	let t22;
	let t23;
	let section1;
	let t24;
	let section2;
	let div8;
	let p8;
	let t25;
	let t26;
	let t27;
	let div9;
	let p9;
	let t28;
	let t29;
	let t30;
	let div10;
	let p10;
	let t31;
	let t32;
	let t33;
	let footer;
	let current;
	let each_value_4 = /*projects*/ ctx[0];
	validate_each_argument(each_value_4);
	let each_blocks_4 = [];

	for (let i = 0; i < each_value_4.length; i += 1) {
		each_blocks_4[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
	}

	let each_value_3 = /*experiences*/ ctx[1];
	validate_each_argument(each_value_3);
	let each_blocks_3 = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks_3[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	let each_value_2 = /*services*/ ctx[3];
	validate_each_argument(each_value_2);
	let each_blocks_2 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value_1 = /*collaborators*/ ctx[2];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*links*/ ctx[4];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	footer = new Footer({ $$inline: true });

	const block = {
		c: function create() {
			meta = element("meta");
			t0 = space();
			div13 = element("div");
			div12 = element("div");
			header0 = element("header");
			a = element("a");
			t1 = text("Back home");
			t2 = space();
			h1 = element("h1");
			t3 = text("Maxim Siebert");
			t4 = space();
			p0 = element("p");
			t5 = text("Designer + Developer");
			t6 = space();
			p1 = element("p");
			t7 = text("2011–");
			t8 = text(/*year*/ ctx[5]);
			t9 = space();
			div11 = element("div");
			div0 = element("div");
			t10 = space();
			div4 = element("div");
			div1 = element("div");
			p2 = element("p");
			t11 = text("Project");
			t12 = space();
			div2 = element("div");
			p3 = element("p");
			t13 = text("Role");
			t14 = space();
			div3 = element("div");
			p4 = element("p");
			t15 = text("Year");
			t16 = space();
			section0 = element("section");

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].c();
			}

			t17 = space();
			header1 = element("header");
			div5 = element("div");
			p5 = element("p");
			t18 = text("Experience");
			t19 = space();
			div6 = element("div");
			p6 = element("p");
			t20 = text("Title");
			t21 = space();
			div7 = element("div");
			p7 = element("p");
			t22 = text("Year");
			t23 = space();
			section1 = element("section");

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].c();
			}

			t24 = space();
			section2 = element("section");
			div8 = element("div");
			p8 = element("p");
			t25 = text("Services");
			t26 = space();

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t27 = space();
			div9 = element("div");
			p9 = element("p");
			t28 = text("Selected Clients");
			t29 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t30 = space();
			div10 = element("div");
			p10 = element("p");
			t31 = text("Links");
			t32 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t33 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-x374ds\"]", document.head);
			meta = claim_element(head_nodes, "META", { name: true, content: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div13 = claim_element(nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			header0 = claim_element(div12_nodes, "HEADER", { class: true });
			var header0_nodes = children(header0);
			a = claim_element(header0_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, "Back home");
			a_nodes.forEach(detach_dev);
			t2 = claim_space(header0_nodes);
			h1 = claim_element(header0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, "Maxim Siebert");
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(header0_nodes);
			p0 = claim_element(header0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t5 = claim_text(p0_nodes, "Designer + Developer");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(header0_nodes);
			p1 = claim_element(header0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "2011–");
			t8 = claim_text(p1_nodes, /*year*/ ctx[5]);
			p1_nodes.forEach(detach_dev);
			header0_nodes.forEach(detach_dev);
			t9 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div0 = claim_element(div11_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			t10 = claim_space(div11_nodes);
			div4 = claim_element(div11_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t11 = claim_text(p2_nodes, "Project");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t12 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p3 = claim_element(div2_nodes, "P", {});
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "Role");
			p3_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t14 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			p4 = claim_element(div3_nodes, "P", {});
			var p4_nodes = children(p4);
			t15 = claim_text(p4_nodes, "Year");
			p4_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t16 = claim_space(div11_nodes);
			section0 = claim_element(div11_nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].l(section0_nodes);
			}

			section0_nodes.forEach(detach_dev);
			t17 = claim_space(div11_nodes);
			header1 = claim_element(div11_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			div5 = claim_element(header1_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p5 = claim_element(div5_nodes, "P", {});
			var p5_nodes = children(p5);
			t18 = claim_text(p5_nodes, "Experience");
			p5_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t19 = claim_space(header1_nodes);
			div6 = claim_element(header1_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			p6 = claim_element(div6_nodes, "P", {});
			var p6_nodes = children(p6);
			t20 = claim_text(p6_nodes, "Title");
			p6_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t21 = claim_space(header1_nodes);
			div7 = claim_element(header1_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			p7 = claim_element(div7_nodes, "P", {});
			var p7_nodes = children(p7);
			t22 = claim_text(p7_nodes, "Year");
			p7_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t23 = claim_space(div11_nodes);
			section1 = claim_element(div11_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].l(section1_nodes);
			}

			section1_nodes.forEach(detach_dev);
			t24 = claim_space(div11_nodes);
			section2 = claim_element(div11_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			div8 = claim_element(section2_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			p8 = claim_element(div8_nodes, "P", { class: true });
			var p8_nodes = children(p8);
			t25 = claim_text(p8_nodes, "Services");
			p8_nodes.forEach(detach_dev);
			t26 = claim_space(div8_nodes);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].l(div8_nodes);
			}

			div8_nodes.forEach(detach_dev);
			t27 = claim_space(section2_nodes);
			div9 = claim_element(section2_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			p9 = claim_element(div9_nodes, "P", { class: true });
			var p9_nodes = children(p9);
			t28 = claim_text(p9_nodes, "Selected Clients");
			p9_nodes.forEach(detach_dev);
			t29 = claim_space(div9_nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div9_nodes);
			}

			div9_nodes.forEach(detach_dev);
			t30 = claim_space(section2_nodes);
			div10 = claim_element(section2_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p10 = claim_element(div10_nodes, "P", { class: true });
			var p10_nodes = children(p10);
			t31 = claim_text(p10_nodes, "Links");
			p10_nodes.forEach(detach_dev);
			t32 = claim_space(div10_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div10_nodes);
			}

			div10_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			t33 = claim_space(div13_nodes);
			claim_component(footer.$$.fragment, div13_nodes);
			div13_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Maxim Siebert — Designer + Developer";
			attr_dev(meta, "name", "description");
			attr_dev(meta, "content", "A French-Canadian designer and developer specialized in web and product design.");
			add_location(meta, file, 44, 1, 1360);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "self-start inline-block mb-4 loader");
			add_location(a, file, 50, 3, 1716);
			attr_dev(h1, "class", "mb-1 sm:mb-2");
			add_location(h1, file, 51, 3, 1789);
			attr_dev(p0, "class", "text-gray-600 dark:text-gray-400");
			add_location(p0, file, 52, 3, 1836);
			attr_dev(p1, "class", "text-gray-600 dark:text-gray-400");
			add_location(p1, file, 53, 3, 1908);
			attr_dev(header0, "class", "w-full px-4 mb-8 md:w-3/12 md:mb-0 md:sticky top-4");
			add_location(header0, file, 49, 2, 1645);
			attr_dev(div0, "class", "w-full px-4 mb-8 text-base leading-snug text-black dark:text-white lg:w-5/12 md:w-8/12 md:block md:mb-12");
			add_location(div0, file, 56, 3, 2032);
			add_location(p2, file, 61, 5, 2265);
			attr_dev(div1, "class", "w-4/12 px-4 lg:w-3/12");
			add_location(div1, file, 60, 4, 2224);
			add_location(p3, file, 64, 5, 2342);
			attr_dev(div2, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div2, file, 63, 4, 2295);
			add_location(p4, file, 67, 5, 2427);
			attr_dev(div3, "class", "flex justify-end w-8/12 px-4 sm:w-5/12");
			add_location(div3, file, 66, 4, 2369);
			attr_dev(div4, "class", "flex mb-1 sm:mb-2");
			add_location(div4, file, 59, 3, 2188);
			attr_dev(section0, "class", "w-full mb-5 sm:mb-8 md:mb-12");
			add_location(section0, file, 70, 3, 2463);
			add_location(p5, file, 87, 5, 3128);
			attr_dev(div5, "class", "w-8/12 px-4 lg:w-3/12 sm:w-4/12");
			add_location(div5, file, 86, 4, 3077);
			add_location(p6, file, 90, 5, 3208);
			attr_dev(div6, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div6, file, 89, 4, 3161);
			add_location(p7, file, 93, 5, 3294);
			attr_dev(div7, "class", "flex justify-end w-8/12 px-4 sm:w-5/12");
			add_location(div7, file, 92, 4, 3236);
			attr_dev(header1, "class", "flex mb-1 sm:mb-2");
			add_location(header1, file, 85, 3, 3038);
			attr_dev(section1, "class", "w-full mb-5 sm:mb-8 md:mb-12");
			add_location(section1, file, 96, 3, 3333);
			attr_dev(p8, "class", "mb-1 sm:mb-2");
			add_location(p8, file, 113, 5, 4014);
			attr_dev(div8, "class", "w-8/12 px-4 lg:w-3/12 sm:w-4/12");
			add_location(div8, file, 112, 4, 3963);
			attr_dev(p9, "class", "mb-1 sm:mb-2");
			add_location(p9, file, 119, 5, 4229);
			attr_dev(div9, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div9, file, 118, 4, 4182);
			attr_dev(p10, "class", "mb-1 sm:mb-2");
			add_location(p10, file, 125, 5, 4462);
			attr_dev(div10, "class", "w-5/12 px-4 text-right");
			add_location(div10, file, 124, 4, 4420);
			attr_dev(section2, "class", "flex");
			add_location(section2, file, 111, 3, 3936);
			attr_dev(div11, "class", "w-full ml-auto md:w-9/12 md:mt-7");
			add_location(div11, file, 55, 2, 1982);
			attr_dev(div12, "class", "flex flex-wrap items-start");
			add_location(div12, file, 48, 1, 1602);
			attr_dev(div13, "class", "flex flex-col min-h-screen py-4 text-xs text-black bg-gray-100 dark:bg-black dark:text-white");
			add_location(div13, file, 47, 0, 1494);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta);
			insert_dev(target, t0, anchor);
			insert_dev(target, div13, anchor);
			append_dev(div13, div12);
			append_dev(div12, header0);
			append_dev(header0, a);
			append_dev(a, t1);
			append_dev(header0, t2);
			append_dev(header0, h1);
			append_dev(h1, t3);
			append_dev(header0, t4);
			append_dev(header0, p0);
			append_dev(p0, t5);
			append_dev(header0, t6);
			append_dev(header0, p1);
			append_dev(p1, t7);
			append_dev(p1, t8);
			append_dev(div12, t9);
			append_dev(div12, div11);
			append_dev(div11, div0);
			div0.innerHTML = /*description*/ ctx[6];
			append_dev(div11, t10);
			append_dev(div11, div4);
			append_dev(div4, div1);
			append_dev(div1, p2);
			append_dev(p2, t11);
			append_dev(div4, t12);
			append_dev(div4, div2);
			append_dev(div2, p3);
			append_dev(p3, t13);
			append_dev(div4, t14);
			append_dev(div4, div3);
			append_dev(div3, p4);
			append_dev(p4, t15);
			append_dev(div11, t16);
			append_dev(div11, section0);

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].m(section0, null);
			}

			append_dev(div11, t17);
			append_dev(div11, header1);
			append_dev(header1, div5);
			append_dev(div5, p5);
			append_dev(p5, t18);
			append_dev(header1, t19);
			append_dev(header1, div6);
			append_dev(div6, p6);
			append_dev(p6, t20);
			append_dev(header1, t21);
			append_dev(header1, div7);
			append_dev(div7, p7);
			append_dev(p7, t22);
			append_dev(div11, t23);
			append_dev(div11, section1);

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].m(section1, null);
			}

			append_dev(div11, t24);
			append_dev(div11, section2);
			append_dev(section2, div8);
			append_dev(div8, p8);
			append_dev(p8, t25);
			append_dev(div8, t26);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(div8, null);
			}

			append_dev(section2, t27);
			append_dev(section2, div9);
			append_dev(div9, p9);
			append_dev(p9, t28);
			append_dev(div9, t29);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div9, null);
			}

			append_dev(section2, t30);
			append_dev(section2, div10);
			append_dev(div10, p10);
			append_dev(p10, t31);
			append_dev(div10, t32);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div10, null);
			}

			append_dev(div13, t33);
			mount_component(footer, div13, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*year*/ 32) set_data_dev(t8, /*year*/ ctx[5]);

			if (dirty & /*projects*/ 1) {
				each_value_4 = /*projects*/ ctx[0];
				validate_each_argument(each_value_4);
				let i;

				for (i = 0; i < each_value_4.length; i += 1) {
					const child_ctx = get_each_context_4(ctx, each_value_4, i);

					if (each_blocks_4[i]) {
						each_blocks_4[i].p(child_ctx, dirty);
					} else {
						each_blocks_4[i] = create_each_block_4(child_ctx);
						each_blocks_4[i].c();
						each_blocks_4[i].m(section0, null);
					}
				}

				for (; i < each_blocks_4.length; i += 1) {
					each_blocks_4[i].d(1);
				}

				each_blocks_4.length = each_value_4.length;
			}

			if (dirty & /*experiences*/ 2) {
				each_value_3 = /*experiences*/ ctx[1];
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks_3[i]) {
						each_blocks_3[i].p(child_ctx, dirty);
					} else {
						each_blocks_3[i] = create_each_block_3(child_ctx);
						each_blocks_3[i].c();
						each_blocks_3[i].m(section1, null);
					}
				}

				for (; i < each_blocks_3.length; i += 1) {
					each_blocks_3[i].d(1);
				}

				each_blocks_3.length = each_value_3.length;
			}

			if (dirty & /*services*/ 8) {
				each_value_2 = /*services*/ ctx[3];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_2[i]) {
						each_blocks_2[i].p(child_ctx, dirty);
					} else {
						each_blocks_2[i] = create_each_block_2(child_ctx);
						each_blocks_2[i].c();
						each_blocks_2[i].m(div8, null);
					}
				}

				for (; i < each_blocks_2.length; i += 1) {
					each_blocks_2[i].d(1);
				}

				each_blocks_2.length = each_value_2.length;
			}

			if (dirty & /*collaborators*/ 4) {
				each_value_1 = /*collaborators*/ ctx[2];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div9, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*links*/ 16) {
				each_value = /*links*/ ctx[4];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div10, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
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
			detach_dev(meta);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div13);
			destroy_each(each_blocks_4, detaching);
			destroy_each(each_blocks_3, detaching);
			destroy_each(each_blocks_2, detaching);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			destroy_component(footer);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload() {
	const getProjects = await this.fetch(`content/projects.json`);
	const projects = await getProjects.json();
	const getExperiences = await this.fetch(`content/experiences.json`);
	const experiences = await getExperiences.json();
	const getCollaborators = await this.fetch(`content/collaborators.json`);
	const collaborators = await getCollaborators.json();
	const getServices = await this.fetch(`content/services.json`);
	const services = await getServices.json();
	const getLinks = await this.fetch(`content/links.json`);
	const links = await getLinks.json();

	return {
		projects,
		experiences,
		collaborators,
		services,
		links
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let { projects } = $$props;
	let { experiences } = $$props;
	let { collaborators } = $$props;
	let { services } = $$props;
	let { links } = $$props;
	let description = "A French-Canadian designer and developer specialized in web and product design. If you'd like to collaborate with Maxim, email him at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:underline\">maxim@hey.com</a>.";
	var year = "";

	function updateClock() {
		var now = new Date();
		$$invalidate(5, year = now.getFullYear());
	}

	updateClock();
	const writable_props = ["projects", "experiences", "collaborators", "services", "links"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("projects" in $$props) $$invalidate(0, projects = $$props.projects);
		if ("experiences" in $$props) $$invalidate(1, experiences = $$props.experiences);
		if ("collaborators" in $$props) $$invalidate(2, collaborators = $$props.collaborators);
		if ("services" in $$props) $$invalidate(3, services = $$props.services);
		if ("links" in $$props) $$invalidate(4, links = $$props.links);
	};

	$$self.$capture_state = () => ({
		preload,
		Footer,
		projects,
		experiences,
		collaborators,
		services,
		links,
		description,
		year,
		updateClock
	});

	$$self.$inject_state = $$props => {
		if ("projects" in $$props) $$invalidate(0, projects = $$props.projects);
		if ("experiences" in $$props) $$invalidate(1, experiences = $$props.experiences);
		if ("collaborators" in $$props) $$invalidate(2, collaborators = $$props.collaborators);
		if ("services" in $$props) $$invalidate(3, services = $$props.services);
		if ("links" in $$props) $$invalidate(4, links = $$props.links);
		if ("description" in $$props) $$invalidate(6, description = $$props.description);
		if ("year" in $$props) $$invalidate(5, year = $$props.year);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [projects, experiences, collaborators, services, links, year, description];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			projects: 0,
			experiences: 1,
			collaborators: 2,
			services: 3,
			links: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*projects*/ ctx[0] === undefined && !("projects" in props)) {
			console.warn("<Routes> was created without expected prop 'projects'");
		}

		if (/*experiences*/ ctx[1] === undefined && !("experiences" in props)) {
			console.warn("<Routes> was created without expected prop 'experiences'");
		}

		if (/*collaborators*/ ctx[2] === undefined && !("collaborators" in props)) {
			console.warn("<Routes> was created without expected prop 'collaborators'");
		}

		if (/*services*/ ctx[3] === undefined && !("services" in props)) {
			console.warn("<Routes> was created without expected prop 'services'");
		}

		if (/*links*/ ctx[4] === undefined && !("links" in props)) {
			console.warn("<Routes> was created without expected prop 'links'");
		}
	}

	get projects() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projects(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get experiences() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set experiences(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get collaborators() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set collaborators(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get services() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set services(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get links() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set links(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzhjMGJlOWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXItcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzO1xudmFyIF9fc2VsZl9fID0gKGZ1bmN0aW9uICgpIHtcbmZ1bmN0aW9uIEYoKSB7XG50aGlzLmZldGNoID0gZmFsc2U7XG50aGlzLkRPTUV4Y2VwdGlvbiA9IGdsb2JhbC5ET01FeGNlcHRpb25cbn1cbkYucHJvdG90eXBlID0gZ2xvYmFsO1xucmV0dXJuIG5ldyBGKCk7XG59KSgpO1xuKGZ1bmN0aW9uKHNlbGYpIHtcblxudmFyIGlycmVsZXZhbnQgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjpcbiAgICAgICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmXG4gICAgICAnQmxvYicgaW4gc2VsZiAmJlxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ldyBCbG9iKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRGF0YVZpZXcob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF07XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgICAgQXJyYXlCdWZmZXIuaXNWaWV3IHx8XG4gICAgICBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge307XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdO1xuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSArICcsICcgKyB2YWx1ZSA6IHZhbHVlO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV07XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpdGVtcy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keTtcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKTtcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ107XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5O1xuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybDtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFscztcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2Q7XG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlO1xuICAgICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWw7XG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdDtcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnc2FtZS1vcmlnaW4nO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbDtcbiAgICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsO1xuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsO1xuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KTtcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHlcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpO1xuICAgICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIFJlcGxhY2UgaW5zdGFuY2VzIG9mIFxcclxcbiBhbmQgXFxuIGZvbGxvd2VkIGJ5IGF0IGxlYXN0IG9uZSBzcGFjZSBvciBob3Jpem9udGFsIHRhYiB3aXRoIGEgc3BhY2VcbiAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICAgIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpO1xuICAgIHByZVByb2Nlc3NlZEhlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKTtcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXM7XG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMDtcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSyc7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnO1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KTtcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpO1xuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH07XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KTtcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJztcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfTtcblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF07XG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfTtcblxuICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IHNlbGYuRE9NRXhjZXB0aW9uO1xuICB0cnkge1xuICAgIG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdmFyIGVycm9yID0gRXJyb3IobWVzc2FnZSk7XG4gICAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgfTtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gZXhwb3J0cy5ET01FeGNlcHRpb247XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaChpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgICB9XG5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpO1xuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbCkge1xuICAgICAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKTtcblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KTtcbiAgICB9KVxuICB9XG5cbiAgZmV0Y2gucG9seWZpbGwgPSB0cnVlO1xuXG4gIGlmICghc2VsZi5mZXRjaCkge1xuICAgIHNlbGYuZmV0Y2ggPSBmZXRjaDtcbiAgICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzO1xuICAgIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gICAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICB9XG5cbiAgZXhwb3J0cy5IZWFkZXJzID0gSGVhZGVycztcbiAgZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgZXhwb3J0cy5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICBleHBvcnRzLmZldGNoID0gZmV0Y2g7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuICByZXR1cm4gZXhwb3J0cztcblxufSh7fSkpO1xufSkoX19zZWxmX18pO1xuX19zZWxmX18uZmV0Y2gucG9ueWZpbGwgPSB0cnVlO1xuLy8gUmVtb3ZlIFwicG9seWZpbGxcIiBwcm9wZXJ0eSBhZGRlZCBieSB3aGF0d2ctZmV0Y2hcbmRlbGV0ZSBfX3NlbGZfXy5mZXRjaC5wb2x5ZmlsbDtcbi8vIENob29zZSBiZXR3ZWVuIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiAoZ2xvYmFsKSBvciBjdXN0b20gaW1wbGVtZW50YXRpb24gKF9fc2VsZl9fKVxuLy8gdmFyIGN0eCA9IGdsb2JhbC5mZXRjaCA/IGdsb2JhbCA6IF9fc2VsZl9fO1xudmFyIGN0eCA9IF9fc2VsZl9fOyAvLyB0aGlzIGxpbmUgZGlzYWJsZSBzZXJ2aWNlIHdvcmtlciBzdXBwb3J0IHRlbXBvcmFyaWx5XG5leHBvcnRzID0gY3R4LmZldGNoIC8vIFRvIGVuYWJsZTogaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5kZWZhdWx0ID0gY3R4LmZldGNoIC8vIEZvciBUeXBlU2NyaXB0IGNvbnN1bWVycyB3aXRob3V0IGVzTW9kdWxlSW50ZXJvcC5cbmV4cG9ydHMuZmV0Y2ggPSBjdHguZmV0Y2ggLy8gVG8gZW5hYmxlOiBpbXBvcnQge2ZldGNofSBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuSGVhZGVycyA9IGN0eC5IZWFkZXJzXG5leHBvcnRzLlJlcXVlc3QgPSBjdHguUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IGN0eC5SZXNwb25zZVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzXG4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCc7XG5cbiAgICBsZXQgdXBkYXRlZERhdGUgPSBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9NYXhpbVNpZWJlcnQvTWF4aW1TaWViZXJ0LTIwMjEvYnJhbmNoZXMvZ2gtcGFnZXNgKVxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuXG4gICAgbGV0IHRlbXBlcmF0dXJlID0gZmV0Y2goYGh0dHBzOi8vd2VhdGhlcmFwaS1jb20ucC5yYXBpZGFwaS5jb20vY3VycmVudC5qc29uP3E9T3R0YXdhYCwge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcIjNhZGZkMGYxMDVtc2hkMzdmNjcyY2IyYTZlZjZwMWNjNDA0anNuM2M5M2FkNzkwNmUwXCIsXG4gICAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcIndlYXRoZXJhcGktY29tLnAucmFwaWRhcGkuY29tXCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG5cbiAgICBjb25zb2xlLmxvZyh0ZW1wZXJhdHVyZSlcblxuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcblxuXHR2YXIgdGltZSA9ICcnO1xuXHR2YXIgeWVhciA9ICcnO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUNsb2NrKCkge1xuXHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpLCAvLyBjdXJyZW50IGRhdGVcblx0XHRcdGhvdXIgPSBub3cuZ2V0SG91cnMoKSxcblx0XHRcdG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLFxuXHRcdFx0c2VwID0gJzonLFxuXHRcdFx0YW1wbSA9ICdhbSc7XG5cdFx0XG5cdFx0aWYgKGhvdXIgPj0gMTIpIHtcblx0XHRcdFx0aG91ciAtPSAxMjtcblx0XHRcdFx0YW1wbSA9ICdwbSc7XG5cdFx0fVxuXHRcdFx0XHRcblx0XHRtaW51dGVzID0gbWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG5cdFx0aG91ciA9IGhvdXIgJSAxMjtcblx0XHRob3VyID0gaG91ciA/IGhvdXIgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cblx0XHQvLyBzZXQgdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgd2l0aCB0aGUgSUQgdGltZSB0byB0aGUgZm9ybWF0dGVkIHN0cmluZ1xuXHRcdHRpbWUgPSBob3VyICsgc2VwICsgbWludXRlcyArICcgJyArIGFtcG07XG5cdFx0eWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuXG5cdFx0Ly8gY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluIGluIDEwMDBtc1xuXHRcdHNldFRpbWVvdXQodXBkYXRlQ2xvY2ssIDEwMDApO1xuXG5cdH1cblxuXHR1cGRhdGVDbG9jaygpO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJmbGV4IHB0LTUgbXQtYXV0byB0ZXh0LWdyYXktNjAwIHNtOnB0LTggbWQ6cHQtMTIgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgPGRpdiBjbGFzcz1cInctOC8xMiBweC00IGxnOnctMy8xMiBzbTp3LTQvMTJcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBPdHRhd2FcbiAgICAgICAgICAgIHsjYXdhaXQgdGVtcGVyYXR1cmV9XG4gICAgICAgICAgICB7OnRoZW4gdGVtcH1cbiAgICAgICAgICAgICAgICB7dGVtcC5jdXJyZW50LnRlbXBfY31cbiAgICAgICAgICAgIHsvYXdhaXR9XG4gICAgICAgICAgICAg4oCUIHt0aW1lfSBFVFxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggdy00LzEyIG1sLWF1dG8gc206dy05LzEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gdy04LzEyIHB4LTQgc206YmxvY2tcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHsjYXdhaXQgdXBkYXRlZERhdGV9XG4gICAgICAgICAgICAgICAgezp0aGVuIGRhdGF9XG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZWQg4oCUIFxuICAgICAgICAgICAgICAgICAgICB7bW9udGhOYW1lc1tuZXcgRGF0ZShkYXRhLmNvbW1pdC5jb21taXQuYXV0aG9yLmRhdGUpLmdldE1vbnRoKCldfVxuICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoZGF0YS5jb21taXQuY29tbWl0LmF1dGhvci5kYXRlKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICAgICAgICAgIHsvYXdhaXR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCB3LWZ1bGwgcHgtNCBzbTp3LTQvMTJcIj5cbiAgICAgICAgICAgIDxwPnt5ZWFyfSDCqTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG5cdFx0Y29uc3QgZ2V0UHJvamVjdHMgPSBhd2FpdCB0aGlzLmZldGNoKGBjb250ZW50L3Byb2plY3RzLmpzb25gKTtcblx0XHRjb25zdCBwcm9qZWN0cyA9IGF3YWl0IGdldFByb2plY3RzLmpzb24oKTtcblxuXHRcdGNvbnN0IGdldEV4cGVyaWVuY2VzID0gYXdhaXQgdGhpcy5mZXRjaChgY29udGVudC9leHBlcmllbmNlcy5qc29uYCk7XG5cdFx0Y29uc3QgZXhwZXJpZW5jZXMgPSBhd2FpdCBnZXRFeHBlcmllbmNlcy5qc29uKCk7XG5cblx0XHRjb25zdCBnZXRDb2xsYWJvcmF0b3JzID0gYXdhaXQgdGhpcy5mZXRjaChgY29udGVudC9jb2xsYWJvcmF0b3JzLmpzb25gKTtcblx0XHRjb25zdCBjb2xsYWJvcmF0b3JzID0gYXdhaXQgZ2V0Q29sbGFib3JhdG9ycy5qc29uKCk7XG5cblx0XHRjb25zdCBnZXRTZXJ2aWNlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGNvbnRlbnQvc2VydmljZXMuanNvbmApO1xuXHRcdGNvbnN0IHNlcnZpY2VzID0gYXdhaXQgZ2V0U2VydmljZXMuanNvbigpO1xuXG5cdFx0Y29uc3QgZ2V0TGlua3MgPSBhd2FpdCB0aGlzLmZldGNoKGBjb250ZW50L2xpbmtzLmpzb25gKTtcblx0XHRjb25zdCBsaW5rcyA9IGF3YWl0IGdldExpbmtzLmpzb24oKTtcblxuXHRcdHJldHVybiB7cHJvamVjdHMsIGV4cGVyaWVuY2VzLCBjb2xsYWJvcmF0b3JzLCBzZXJ2aWNlcywgbGlua3N9XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLnN2ZWx0ZSc7XG5cdFxuXHRleHBvcnQgbGV0IHByb2plY3RzO1xuXHRleHBvcnQgbGV0IGV4cGVyaWVuY2VzO1xuXHRleHBvcnQgbGV0IGNvbGxhYm9yYXRvcnM7XG5cdGV4cG9ydCBsZXQgc2VydmljZXM7XG5cdGV4cG9ydCBsZXQgbGlua3M7XG5cblx0bGV0IGRlc2NyaXB0aW9uID0gXCJBIEZyZW5jaC1DYW5hZGlhbiBkZXNpZ25lciBhbmQgZGV2ZWxvcGVyIHNwZWNpYWxpemVkIGluIHdlYiBhbmQgcHJvZHVjdCBkZXNpZ24uIElmIHlvdSdkIGxpa2UgdG8gY29sbGFib3JhdGUgd2l0aCBNYXhpbSwgZW1haWwgaGltIGF0IDxhIGhyZWY9XFxcIm1haWx0bzptYXhpbUBoZXkuY29tXFxcIiBjbGFzcz1cXFwiaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXFxcIj5tYXhpbUBoZXkuY29tPC9hPi5cIlxuXG5cdHZhciB5ZWFyID0gJyc7XG5cblx0ZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG5cdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0eWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuXHR9XG5cblx0dXBkYXRlQ2xvY2soKTtcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5NYXhpbSBTaWViZXJ0IOKAlCBEZXNpZ25lciArIERldmVsb3BlcjwvdGl0bGU+XG5cdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIEZyZW5jaC1DYW5hZGlhbiBkZXNpZ25lciBhbmQgZGV2ZWxvcGVyIHNwZWNpYWxpemVkIGluIHdlYiBhbmQgcHJvZHVjdCBkZXNpZ24uXCIgLz5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBweS00IHRleHQteHMgdGV4dC1ibGFjayBiZy1ncmF5LTEwMCBkYXJrOmJnLWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxuXHQ8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnRcIj5cblx0XHQ8aGVhZGVyIGNsYXNzPVwidy1mdWxsIHB4LTQgbWItOCBtZDp3LTMvMTIgbWQ6bWItMCBtZDpzdGlja3kgdG9wLTRcIj5cblx0XHRcdDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJzZWxmLXN0YXJ0IGlubGluZS1ibG9jayBtYi00IGxvYWRlclwiPkJhY2sgaG9tZTwvYT5cblx0XHRcdDxoMSBjbGFzcz1cIm1iLTEgc206bWItMlwiPk1heGltIFNpZWJlcnQ8L2gxPlxuXHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPkRlc2lnbmVyICsgRGV2ZWxvcGVyPC9wPlxuXHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPjIwMTHigJN7eWVhcn08L3A+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PGRpdiBjbGFzcz1cInctZnVsbCBtbC1hdXRvIG1kOnctOS8xMiBtZDptdC03XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidy1mdWxsIHB4LTQgbWItOCB0ZXh0LWJhc2UgbGVhZGluZy1zbnVnIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIGxnOnctNS8xMiBtZDp3LTgvMTIgbWQ6YmxvY2sgbWQ6bWItMTJcIj5cblx0XHRcdFx0e0BodG1sIGRlc2NyaXB0aW9ufVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBtYi0xIHNtOm1iLTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInctNC8xMiBweC00IGxnOnctMy8xMlwiPlxuXHRcdFx0XHRcdDxwPlByb2plY3Q8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGlkZGVuIHctNC8xMiBweC00IHNtOmJsb2NrXCI+XG5cdFx0XHRcdFx0PHA+Um9sZTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHctOC8xMiBweC00IHNtOnctNS8xMlwiPlxuXHRcdFx0XHRcdDxwPlllYXI8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cInctZnVsbCBtYi01IHNtOm1iLTggbWQ6bWItMTJcIj5cblx0XHRcdFx0eyNlYWNoIHByb2plY3RzIGFzIHByb2plY3R9XG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJmbGV4IG1sLWF1dG8gdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDAgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOnRleHQtYmxhY2sgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCIgaHJlZj1cIntwcm9qZWN0LnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy04LzEyIHB4LTQgbGc6dy0zLzEyIHNtOnctNC8xMlwiPlxuXHRcdFx0XHRcdFx0XHQ8cD57cHJvamVjdC50aXRsZX08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoaWRkZW4gdy00LzEyIHB4LTQgc206YmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0PHA+e3Byb2plY3Qucm9sZX08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHctNS8xMiBweC00XCI+XG5cdFx0XHRcdFx0XHRcdDxwPntwcm9qZWN0LnllYXJ9PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHR7L2VhY2h9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8aGVhZGVyIGNsYXNzPVwiZmxleCBtYi0xIHNtOm1iLTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInctOC8xMiBweC00IGxnOnctMy8xMiBzbTp3LTQvMTJcIj5cblx0XHRcdFx0XHQ8cD5FeHBlcmllbmNlPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHRcdDxwPlRpdGxlPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgdy04LzEyIHB4LTQgc206dy01LzEyXCI+XG5cdFx0XHRcdFx0PHA+WWVhcjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzPVwidy1mdWxsIG1iLTUgc206bWItOCBtZDptYi0xMlwiPlxuXHRcdFx0XHR7I2VhY2ggZXhwZXJpZW5jZXMgYXMgZXhwZXJpZW5jZX1cblx0XHRcdFx0XHQ8YSBjbGFzcz1cImZsZXggbWwtYXV0byB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIiBocmVmPVwie2V4cGVyaWVuY2UudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTgvMTIgcHgtNCBsZzp3LTMvMTIgc206dy00LzEyXCI+XG5cdFx0XHRcdFx0XHRcdDxwPntleHBlcmllbmNlLnRpdGxlfTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHQ8cD57ZXhwZXJpZW5jZS5yb2xlfTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgdy04LzEyIHB4LTQgc206dy01LzEyXCI+XG5cdFx0XHRcdFx0XHRcdDxwPntleHBlcmllbmNlLmRhdGV9PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHR7L2VhY2h9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImZsZXhcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInctOC8xMiBweC00IGxnOnctMy8xMiBzbTp3LTQvMTJcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cIm1iLTEgc206bWItMlwiPlNlcnZpY2VzPC9wPlxuXHRcdFx0XHRcdHsjZWFjaCBzZXJ2aWNlcyBhcyBzZXJ2aWNlfVxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPntzZXJ2aWNlLnRpdGxlfTwvcD5cblx0XHRcdFx0XHR7L2VhY2h9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGlkZGVuIHctNC8xMiBweC00IHNtOmJsb2NrXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJtYi0xIHNtOm1iLTJcIj5TZWxlY3RlZCBDbGllbnRzPC9wPlxuXHRcdFx0XHRcdHsjZWFjaCBjb2xsYWJvcmF0b3JzIGFzIGNvbGxhYm9yYXRvcn1cblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIj57Y29sbGFib3JhdG9yLnRpdGxlfTwvcD5cblx0XHRcdFx0XHR7L2VhY2h9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy01LzEyIHB4LTQgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwibWItMSBzbTptYi0yXCI+TGlua3M8L3A+XG5cdFx0XHRcdFx0eyNlYWNoIGxpbmtzIGFzIGxpbmt9XG5cdFx0XHRcdFx0XHQ8cD48YSBocmVmPVwie2xpbmsudXJsfVwiIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDAgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOnRleHQtYmxhY2sgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCIgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj57bGluay50aXRsZX08L2E+PC9wPlxuXHRcdFx0XHRcdHsvZWFjaH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8Rm9vdGVyIC8+XG48L2Rpdj4iXSwibmFtZXMiOlsidGhpcyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxNQUFNLEdBQUcsT0FBTyxJQUFJLEtBQUssV0FBVyxHQUFHLElBQUksR0FBR0EsY0FBSSxDQUFDO0FBQ3ZELElBQUksUUFBUSxHQUFHLENBQUMsWUFBWTtBQUM1QixTQUFTLENBQUMsR0FBRztBQUNiLElB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
