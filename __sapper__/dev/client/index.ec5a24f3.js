import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, h as handle_promise, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, j as claim_space, k as add_location, l as attr_dev, m as insert_dev, n as append_dev, u as update_await_block_branch, o as set_data_dev, p as noop, q as validate_each_argument, r as create_component, w as query_selector_all, x as claim_component, y as mount_component, z as transition_in, A as transition_out, B as destroy_each, C as destroy_component } from './client.aa497de3.js';

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
const file$1 = "src/components/Footer.svelte";

// (1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         "method": "GET",         "headers": {             "x-rapidapi-key": 'f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4',             "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"         }
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
		source: "(1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         \\\"method\\\": \\\"GET\\\",         \\\"headers\\\": {             \\\"x-rapidapi-key\\\": 'f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4',             \\\"x-rapidapi-host\\\": \\\"weatherapi-com.p.rapidapi.com\\\"         }",
		ctx
	});

	return block;
}

// (53:42) {Math.round(temp.current.temp_c)}
function create_then_block_1(ctx) {
	let t0_value = Math.round(/*temp*/ ctx[7].current.temp_c) + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			t0 = text(t0_value);
			t1 = text("??C");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, t0_value);
			t1 = claim_text(nodes, "??C");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block_1.name,
		type: "then",
		source: "(53:42) {Math.round(temp.current.temp_c)}",
		ctx
	});

	return block;
}

// (1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         "method": "GET",         "headers": {             "x-rapidapi-key": 'f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4',             "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"         }
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
		source: "(1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         \\\"method\\\": \\\"GET\\\",         \\\"headers\\\": {             \\\"x-rapidapi-key\\\": 'f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4',             \\\"x-rapidapi-host\\\": \\\"weatherapi-com.p.rapidapi.com\\\"         }",
		ctx
	});

	return block;
}

// (1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         "method": "GET",         "headers": {             "x-rapidapi-key": 'f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4',             "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"         }
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
		source: "(1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         \\\"method\\\": \\\"GET\\\",         \\\"headers\\\": {             \\\"x-rapidapi-key\\\": 'f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4',             \\\"x-rapidapi-host\\\": \\\"weatherapi-com.p.rapidapi.com\\\"         }",
		ctx
	});

	return block;
}

// (58:42)                  Updated ???                  {monthNames[new Date(data.commit.commit.author.date).getMonth()]}
function create_then_block(ctx) {
	let t0;
	let t1_value = /*monthNames*/ ctx[3][new Date(/*data*/ ctx[6].commit.commit.author.date).getMonth()] + "";
	let t1;
	let t2;
	let t3_value = new Date(/*data*/ ctx[6].commit.commit.author.date).getFullYear() + "";
	let t3;

	const block = {
		c: function create() {
			t0 = text("Updated ??? \n                ");
			t1 = text(t1_value);
			t2 = space();
			t3 = text(t3_value);
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Updated ??? \n                ");
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
		source: "(58:42)                  Updated ???                  {monthNames[new Date(data.commit.commit.author.date).getMonth()]}",
		ctx
	});

	return block;
}

// (1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         "method": "GET",         "headers": {             "x-rapidapi-key": 'f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4',             "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"         }
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
		source: "(1:0) <script>     import fetch from 'cross-fetch';      let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {         \\\"method\\\": \\\"GET\\\",         \\\"headers\\\": {             \\\"x-rapidapi-key\\\": 'f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4',             \\\"x-rapidapi-host\\\": \\\"weatherapi-com.p.rapidapi.com\\\"         }",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div2;
	let div0;
	let p0;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let div1;
	let p1;
	let t5;

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

	handle_promise(/*temperature*/ ctx[2], info);

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

	handle_promise(/*updatedDate*/ ctx[1], info_1);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			p0 = element("p");
			t0 = text("Gatineau\n            ");
			info.block.c();
			t1 = text(", ");
			t2 = text(/*time*/ ctx[0]);
			t3 = text(" ET");
			t4 = space();
			div1 = element("div");
			p1 = element("p");
			info_1.block.c();
			t5 = text(" ??");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Gatineau\n            ");
			info.block.l(p0_nodes);
			t1 = claim_text(p0_nodes, ", ");
			t2 = claim_text(p0_nodes, /*time*/ ctx[0]);
			t3 = claim_text(p0_nodes, " ET");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			info_1.block.l(p1_nodes);
			t5 = claim_text(p1_nodes, " ??");
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p0, file$1, 50, 8, 1357);
			attr_dev(div0, "class", "w-1/2 px-4");
			add_location(div0, file$1, 49, 4, 1324);
			add_location(p1, file$1, 56, 8, 1565);
			attr_dev(div1, "class", "flex justify-end w-1/2 px-4 ml-auto");
			add_location(div1, file$1, 55, 4, 1507);
			attr_dev(div2, "class", "flex mt-auto text-gray-600 dark:text-gray-400");
			add_location(div2, file$1, 48, 0, 1260);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, p0);
			append_dev(p0, t0);
			info.block.m(p0, info.anchor = null);
			info.mount = () => p0;
			info.anchor = t1;
			append_dev(p0, t1);
			append_dev(p0, t2);
			append_dev(p0, t3);
			append_dev(div2, t4);
			append_dev(div2, div1);
			append_dev(div1, p1);
			info_1.block.m(p1, info_1.anchor = null);
			info_1.mount = () => p1;
			info_1.anchor = t5;
			append_dev(p1, t5);
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;
			update_await_block_branch(info, ctx, dirty);
			if (dirty & /*time*/ 1) set_data_dev(t2, /*time*/ ctx[0]);
			update_await_block_branch(info_1, ctx, dirty);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
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
			"x-rapidapi-key": "f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4",
			"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
		}
	}).then(r => r.json());

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
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

		year = now.getFullYear();

		// call this function again in 1000ms
		setTimeout(updateClock, 1000);
	}

	updateClock();
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
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
		if ("updatedDate" in $$props) $$invalidate(1, updatedDate = $$props.updatedDate);
		if ("temperature" in $$props) $$invalidate(2, temperature = $$props.temperature);
		if ("time" in $$props) $$invalidate(0, time = $$props.time);
		if ("year" in $$props) year = $$props.year;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [time, updatedDate, temperature, monthNames];
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

// (74:5) {#each projects as project}
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
			add_location(p0, file, 76, 8, 2872);
			attr_dev(div0, "class", "w-8/12 px-4 lg:w-5/12 sm:w-4/12");
			add_location(div0, file, 75, 7, 2818);
			add_location(p1, file, 79, 8, 2966);
			attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div1, file, 78, 7, 2916);
			add_location(p2, file, 82, 8, 3060);
			attr_dev(div2, "class", "flex justify-end w-5/12 px-4");
			add_location(div2, file, 81, 7, 3009);
			attr_dev(a, "class", "flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "href", a_href_value = /*project*/ ctx[20].url);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 74, 6, 2635);
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
		source: "(74:5) {#each projects as project}",
		ctx
	});

	return block;
}

// (103:5) {#each experiences as experience}
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
			add_location(p0, file, 105, 8, 3915);
			attr_dev(div0, "class", "w-8/12 px-4 lg:w-5/12 sm:w-4/12");
			add_location(div0, file, 104, 7, 3861);
			add_location(p1, file, 108, 8, 4012);
			attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div1, file, 107, 7, 3962);
			add_location(p2, file, 111, 8, 4119);
			attr_dev(div2, "class", "flex justify-end w-8/12 px-4 sm:w-5/12");
			add_location(div2, file, 110, 7, 4058);
			attr_dev(a, "class", "flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "href", a_href_value = /*experience*/ ctx[17].url);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 103, 6, 3675);
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
		source: "(103:5) {#each experiences as experience}",
		ctx
	});

	return block;
}

// (122:5) {#each services as service}
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
			add_location(p, file, 122, 6, 4501);
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
		source: "(122:5) {#each services as service}",
		ctx
	});

	return block;
}

// (128:5) {#each collaborators as collaborator}
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
			add_location(p, file, 128, 6, 4734);
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
		source: "(128:5) {#each collaborators as collaborator}",
		ctx
	});

	return block;
}

// (134:5) {#each links as link}
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
			add_location(a, file, 134, 9, 4943);
			add_location(p, file, 134, 6, 4940);
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
		source: "(134:5) {#each links as link}",
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
	let hr0;
	let t11;
	let section1;
	let div4;
	let div1;
	let p2;
	let t12;
	let t13;
	let div2;
	let p3;
	let t14;
	let t15;
	let div3;
	let p4;
	let t16;
	let t17;
	let section0;
	let t18;
	let hr1;
	let t19;
	let section3;
	let header1;
	let div5;
	let p5;
	let t20;
	let t21;
	let div6;
	let p6;
	let t22;
	let t23;
	let div7;
	let p7;
	let t24;
	let t25;
	let section2;
	let t26;
	let hr2;
	let t27;
	let section4;
	let div8;
	let p8;
	let t28;
	let t29;
	let t30;
	let div9;
	let p9;
	let t31;
	let t32;
	let t33;
	let div10;
	let p10;
	let t34;
	let t35;
	let t36;
	let hr3;
	let t37;
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
			t7 = text("2011???");
			t8 = text(/*year*/ ctx[5]);
			t9 = space();
			div11 = element("div");
			div0 = element("div");
			t10 = space();
			hr0 = element("hr");
			t11 = space();
			section1 = element("section");
			div4 = element("div");
			div1 = element("div");
			p2 = element("p");
			t12 = text("Project");
			t13 = space();
			div2 = element("div");
			p3 = element("p");
			t14 = text("Role");
			t15 = space();
			div3 = element("div");
			p4 = element("p");
			t16 = text("Year");
			t17 = space();
			section0 = element("section");

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].c();
			}

			t18 = space();
			hr1 = element("hr");
			t19 = space();
			section3 = element("section");
			header1 = element("header");
			div5 = element("div");
			p5 = element("p");
			t20 = text("Experience");
			t21 = space();
			div6 = element("div");
			p6 = element("p");
			t22 = text("Title");
			t23 = space();
			div7 = element("div");
			p7 = element("p");
			t24 = text("Year");
			t25 = space();
			section2 = element("section");

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].c();
			}

			t26 = space();
			hr2 = element("hr");
			t27 = space();
			section4 = element("section");
			div8 = element("div");
			p8 = element("p");
			t28 = text("Services");
			t29 = space();

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t30 = space();
			div9 = element("div");
			p9 = element("p");
			t31 = text("Selected Clients");
			t32 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t33 = space();
			div10 = element("div");
			p10 = element("p");
			t34 = text("Links");
			t35 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t36 = space();
			hr3 = element("hr");
			t37 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-c4bbcl\"]", document.head);
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
			h1 = claim_element(header0_nodes, "H1", {});
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
			t7 = claim_text(p1_nodes, "2011???");
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
			hr0 = claim_element(div11_nodes, "HR", { class: true });
			t11 = claim_space(div11_nodes);
			section1 = claim_element(div11_nodes, "SECTION", {});
			var section1_nodes = children(section1);
			div4 = claim_element(section1_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t12 = claim_text(p2_nodes, "Project");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t13 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p3 = claim_element(div2_nodes, "P", {});
			var p3_nodes = children(p3);
			t14 = claim_text(p3_nodes, "Role");
			p3_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t15 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			p4 = claim_element(div3_nodes, "P", {});
			var p4_nodes = children(p4);
			t16 = claim_text(p4_nodes, "Year");
			p4_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t17 = claim_space(section1_nodes);
			section0 = claim_element(section1_nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].l(section0_nodes);
			}

			section0_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t18 = claim_space(div11_nodes);
			hr1 = claim_element(div11_nodes, "HR", { class: true });
			t19 = claim_space(div11_nodes);
			section3 = claim_element(div11_nodes, "SECTION", {});
			var section3_nodes = children(section3);
			header1 = claim_element(section3_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			div5 = claim_element(header1_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p5 = claim_element(div5_nodes, "P", {});
			var p5_nodes = children(p5);
			t20 = claim_text(p5_nodes, "Experience");
			p5_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t21 = claim_space(header1_nodes);
			div6 = claim_element(header1_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			p6 = claim_element(div6_nodes, "P", {});
			var p6_nodes = children(p6);
			t22 = claim_text(p6_nodes, "Title");
			p6_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t23 = claim_space(header1_nodes);
			div7 = claim_element(header1_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			p7 = claim_element(div7_nodes, "P", {});
			var p7_nodes = children(p7);
			t24 = claim_text(p7_nodes, "Year");
			p7_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t25 = claim_space(section3_nodes);
			section2 = claim_element(section3_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].l(section2_nodes);
			}

			section2_nodes.forEach(detach_dev);
			section3_nodes.forEach(detach_dev);
			t26 = claim_space(div11_nodes);
			hr2 = claim_element(div11_nodes, "HR", { class: true });
			t27 = claim_space(div11_nodes);
			section4 = claim_element(div11_nodes, "SECTION", { class: true });
			var section4_nodes = children(section4);
			div8 = claim_element(section4_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			p8 = claim_element(div8_nodes, "P", { class: true });
			var p8_nodes = children(p8);
			t28 = claim_text(p8_nodes, "Services");
			p8_nodes.forEach(detach_dev);
			t29 = claim_space(div8_nodes);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].l(div8_nodes);
			}

			div8_nodes.forEach(detach_dev);
			t30 = claim_space(section4_nodes);
			div9 = claim_element(section4_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			p9 = claim_element(div9_nodes, "P", { class: true });
			var p9_nodes = children(p9);
			t31 = claim_text(p9_nodes, "Selected Clients");
			p9_nodes.forEach(detach_dev);
			t32 = claim_space(div9_nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div9_nodes);
			}

			div9_nodes.forEach(detach_dev);
			t33 = claim_space(section4_nodes);
			div10 = claim_element(section4_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p10 = claim_element(div10_nodes, "P", { class: true });
			var p10_nodes = children(p10);
			t34 = claim_text(p10_nodes, "Links");
			p10_nodes.forEach(detach_dev);
			t35 = claim_space(div10_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div10_nodes);
			}

			div10_nodes.forEach(detach_dev);
			section4_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			t36 = claim_space(div12_nodes);
			hr3 = claim_element(div12_nodes, "HR", { class: true });
			t37 = claim_space(div12_nodes);
			claim_component(footer.$$.fragment, div12_nodes);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Maxim Siebert ??? Designer + Developer";
			attr_dev(meta, "name", "description");
			attr_dev(meta, "content", "A French Canadian designer and developer specialized in web and product design.");
			add_location(meta, file, 44, 1, 1375);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "self-start inline-block mb-4 loader");
			add_location(a, file, 50, 3, 1728);
			add_location(h1, file, 51, 3, 1801);
			attr_dev(p0, "class", "text-gray-600 dark:text-gray-400");
			add_location(p0, file, 52, 3, 1827);
			attr_dev(p1, "class", "text-gray-600 dark:text-gray-400");
			add_location(p1, file, 53, 3, 1899);
			attr_dev(header0, "class", "w-full px-4 mb-8 md:mb-10 top-4");
			add_location(header0, file, 49, 2, 1676);
			attr_dev(div0, "class", "w-full px-4 text-base leading-snug text-black md:text-lg dark:text-white md:block");
			add_location(div0, file, 56, 3, 2005);
			attr_dev(hr0, "class", "mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12");
			add_location(hr0, file, 59, 3, 2138);
			add_location(p2, file, 63, 6, 2364);
			attr_dev(div1, "class", "w-4/12 px-4 lg:w-5/12");
			add_location(div1, file, 62, 5, 2322);
			add_location(p3, file, 66, 6, 2444);
			attr_dev(div2, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div2, file, 65, 5, 2396);
			add_location(p4, file, 69, 6, 2532);
			attr_dev(div3, "class", "flex justify-end w-8/12 px-4 sm:w-5/12");
			add_location(div3, file, 68, 5, 2473);
			attr_dev(div4, "class", "flex mb-1 sm:mb-2");
			add_location(div4, file, 61, 4, 2285);
			attr_dev(section0, "class", "w-full");
			add_location(section0, file, 72, 4, 2571);
			add_location(section1, file, 60, 3, 2271);
			attr_dev(hr1, "class", "mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12");
			add_location(hr1, file, 88, 3, 3152);
			add_location(p5, file, 92, 6, 3391);
			attr_dev(div5, "class", "w-8/12 px-4 lg:w-5/12 sm:w-4/12");
			add_location(div5, file, 91, 5, 3339);
			add_location(p6, file, 95, 6, 3474);
			attr_dev(div6, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div6, file, 94, 5, 3426);
			add_location(p7, file, 98, 6, 3563);
			attr_dev(div7, "class", "flex justify-end w-8/12 px-4 sm:w-5/12");
			add_location(div7, file, 97, 5, 3504);
			attr_dev(header1, "class", "flex mb-1 sm:mb-2");
			add_location(header1, file, 90, 4, 3299);
			attr_dev(section2, "class", "w-full");
			add_location(section2, file, 101, 4, 3605);
			add_location(section3, file, 89, 3, 3285);
			attr_dev(hr2, "class", "mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12");
			add_location(hr2, file, 117, 3, 4214);
			attr_dev(p8, "class", "mb-1 sm:mb-2");
			add_location(p8, file, 120, 5, 4425);
			attr_dev(div8, "class", "w-8/12 px-4 lg:w-5/12 sm:w-4/12");
			add_location(div8, file, 119, 4, 4374);
			attr_dev(p9, "class", "mb-1 sm:mb-2");
			add_location(p9, file, 126, 5, 4640);
			attr_dev(div9, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div9, file, 125, 4, 4593);
			attr_dev(p10, "class", "mb-1 sm:mb-2");
			add_location(p10, file, 132, 5, 4873);
			attr_dev(div10, "class", "w-5/12 px-4 text-right");
			add_location(div10, file, 131, 4, 4831);
			attr_dev(section4, "class", "flex");
			add_location(section4, file, 118, 3, 4347);
			attr_dev(div11, "class", "w-full ml-auto");
			add_location(div11, file, 55, 2, 1973);
			attr_dev(hr3, "class", "mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12");
			add_location(hr3, file, 139, 2, 5173);
			attr_dev(div12, "class", "w-full max-w-2xl mx-auto");
			add_location(div12, file, 48, 1, 1635);
			attr_dev(div13, "class", "flex flex-col min-h-screen py-4 text-xs text-black bg-gray-100 lg:py-24 md:py-14 dark:bg-black dark:text-white");
			add_location(div13, file, 47, 0, 1509);
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
			append_dev(div11, hr0);
			append_dev(div11, t11);
			append_dev(div11, section1);
			append_dev(section1, div4);
			append_dev(div4, div1);
			append_dev(div1, p2);
			append_dev(p2, t12);
			append_dev(div4, t13);
			append_dev(div4, div2);
			append_dev(div2, p3);
			append_dev(p3, t14);
			append_dev(div4, t15);
			append_dev(div4, div3);
			append_dev(div3, p4);
			append_dev(p4, t16);
			append_dev(section1, t17);
			append_dev(section1, section0);

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].m(section0, null);
			}

			append_dev(div11, t18);
			append_dev(div11, hr1);
			append_dev(div11, t19);
			append_dev(div11, section3);
			append_dev(section3, header1);
			append_dev(header1, div5);
			append_dev(div5, p5);
			append_dev(p5, t20);
			append_dev(header1, t21);
			append_dev(header1, div6);
			append_dev(div6, p6);
			append_dev(p6, t22);
			append_dev(header1, t23);
			append_dev(header1, div7);
			append_dev(div7, p7);
			append_dev(p7, t24);
			append_dev(section3, t25);
			append_dev(section3, section2);

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].m(section2, null);
			}

			append_dev(div11, t26);
			append_dev(div11, hr2);
			append_dev(div11, t27);
			append_dev(div11, section4);
			append_dev(section4, div8);
			append_dev(div8, p8);
			append_dev(p8, t28);
			append_dev(div8, t29);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(div8, null);
			}

			append_dev(section4, t30);
			append_dev(section4, div9);
			append_dev(div9, p9);
			append_dev(p9, t31);
			append_dev(div9, t32);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div9, null);
			}

			append_dev(section4, t33);
			append_dev(section4, div10);
			append_dev(div10, p10);
			append_dev(p10, t34);
			append_dev(div10, t35);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div10, null);
			}

			append_dev(div12, t36);
			append_dev(div12, hr3);
			append_dev(div12, t37);
			mount_component(footer, div12, null);
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
						each_blocks_3[i].m(section2, null);
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
	let description = "I'm a French Canadian designer and developer specialized in web and product design. If you'd like to collaborate, email me at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:border-transparent border-b pb-1\">maxim@hey.com</a>.";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWM1YTI0ZjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXItcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzO1xudmFyIF9fc2VsZl9fID0gKGZ1bmN0aW9uICgpIHtcbmZ1bmN0aW9uIEYoKSB7XG50aGlzLmZldGNoID0gZmFsc2U7XG50aGlzLkRPTUV4Y2VwdGlvbiA9IGdsb2JhbC5ET01FeGNlcHRpb25cbn1cbkYucHJvdG90eXBlID0gZ2xvYmFsO1xucmV0dXJuIG5ldyBGKCk7XG59KSgpO1xuKGZ1bmN0aW9uKHNlbGYpIHtcblxudmFyIGlycmVsZXZhbnQgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjpcbiAgICAgICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmXG4gICAgICAnQmxvYicgaW4gc2VsZiAmJlxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ldyBCbG9iKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRGF0YVZpZXcob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF07XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgICAgQXJyYXlCdWZmZXIuaXNWaWV3IHx8XG4gICAgICBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge307XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdO1xuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSArICcsICcgKyB2YWx1ZSA6IHZhbHVlO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV07XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpdGVtcy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keTtcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKTtcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ107XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5O1xuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybDtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFscztcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2Q7XG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlO1xuICAgICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWw7XG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdDtcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnc2FtZS1vcmlnaW4nO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbDtcbiAgICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsO1xuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsO1xuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KTtcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHlcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpO1xuICAgICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIFJlcGxhY2UgaW5zdGFuY2VzIG9mIFxcclxcbiBhbmQgXFxuIGZvbGxvd2VkIGJ5IGF0IGxlYXN0IG9uZSBzcGFjZSBvciBob3Jpem9udGFsIHRhYiB3aXRoIGEgc3BhY2VcbiAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICAgIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpO1xuICAgIHByZVByb2Nlc3NlZEhlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKTtcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXM7XG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMDtcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSyc7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnO1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KTtcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpO1xuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH07XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KTtcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJztcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfTtcblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF07XG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfTtcblxuICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IHNlbGYuRE9NRXhjZXB0aW9uO1xuICB0cnkge1xuICAgIG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdmFyIGVycm9yID0gRXJyb3IobWVzc2FnZSk7XG4gICAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgfTtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gZXhwb3J0cy5ET01FeGNlcHRpb247XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaChpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgICB9XG5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpO1xuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbCkge1xuICAgICAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKTtcblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KTtcbiAgICB9KVxuICB9XG5cbiAgZmV0Y2gucG9seWZpbGwgPSB0cnVlO1xuXG4gIGlmICghc2VsZi5mZXRjaCkge1xuICAgIHNlbGYuZmV0Y2ggPSBmZXRjaDtcbiAgICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzO1xuICAgIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gICAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICB9XG5cbiAgZXhwb3J0cy5IZWFkZXJzID0gSGVhZGVycztcbiAgZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgZXhwb3J0cy5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICBleHBvcnRzLmZldGNoID0gZmV0Y2g7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuICByZXR1cm4gZXhwb3J0cztcblxufSh7fSkpO1xufSkoX19zZWxmX18pO1xuX19zZWxmX18uZmV0Y2gucG9ueWZpbGwgPSB0cnVlO1xuLy8gUmVtb3ZlIFwicG9seWZpbGxcIiBwcm9wZXJ0eSBhZGRlZCBieSB3aGF0d2ctZmV0Y2hcbmRlbGV0ZSBfX3NlbGZfXy5mZXRjaC5wb2x5ZmlsbDtcbi8vIENob29zZSBiZXR3ZWVuIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiAoZ2xvYmFsKSBvciBjdXN0b20gaW1wbGVtZW50YXRpb24gKF9fc2VsZl9fKVxuLy8gdmFyIGN0eCA9IGdsb2JhbC5mZXRjaCA/IGdsb2JhbCA6IF9fc2VsZl9fO1xudmFyIGN0eCA9IF9fc2VsZl9fOyAvLyB0aGlzIGxpbmUgZGlzYWJsZSBzZXJ2aWNlIHdvcmtlciBzdXBwb3J0IHRlbXBvcmFyaWx5XG5leHBvcnRzID0gY3R4LmZldGNoIC8vIFRvIGVuYWJsZTogaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5kZWZhdWx0ID0gY3R4LmZldGNoIC8vIEZvciBUeXBlU2NyaXB0IGNvbnN1bWVycyB3aXRob3V0IGVzTW9kdWxlSW50ZXJvcC5cbmV4cG9ydHMuZmV0Y2ggPSBjdHguZmV0Y2ggLy8gVG8gZW5hYmxlOiBpbXBvcnQge2ZldGNofSBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuSGVhZGVycyA9IGN0eC5IZWFkZXJzXG5leHBvcnRzLlJlcXVlc3QgPSBjdHguUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IGN0eC5SZXNwb25zZVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzXG4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCc7XG5cbiAgICBsZXQgdXBkYXRlZERhdGUgPSBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9NYXhpbVNpZWJlcnQvTWF4aW1TaWViZXJ0LTIwMjEvYnJhbmNoZXMvZ2gtcGFnZXNgKVxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuXG4gICAgbGV0IHRlbXBlcmF0dXJlID0gZmV0Y2goYGh0dHBzOi8vd2VhdGhlcmFwaS1jb20ucC5yYXBpZGFwaS5jb20vY3VycmVudC5qc29uP3E9T3R0YXdhYCwge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBwcm9jZXNzLmVudi5TVkVMVEVfQVBQX1JBUElEX0FQSV9LRVksXG4gICAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcIndlYXRoZXJhcGktY29tLnAucmFwaWRhcGkuY29tXCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG5cbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xuXG5cdHZhciB0aW1lID0gJyc7XG5cdHZhciB5ZWFyID0gJyc7XG5cblx0ZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG5cdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCksIC8vIGN1cnJlbnQgZGF0ZVxuXHRcdFx0aG91ciA9IG5vdy5nZXRIb3VycygpLFxuXHRcdFx0bWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCksXG5cdFx0XHRzZXAgPSAnOicsXG5cdFx0XHRhbXBtID0gJ2FtJztcblx0XHRcblx0XHRpZiAoaG91ciA+PSAxMikge1xuXHRcdFx0XHRob3VyIC09IDEyO1xuXHRcdFx0XHRhbXBtID0gJ3BtJztcblx0XHR9XG5cdFx0XHRcdFxuXHRcdG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcztcblx0XHRob3VyID0gaG91ciAlIDEyO1xuXHRcdGhvdXIgPSBob3VyID8gaG91ciA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcblxuXHRcdC8vIHNldCB0aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCB3aXRoIHRoZSBJRCB0aW1lIHRvIHRoZSBmb3JtYXR0ZWQgc3RyaW5nXG5cdFx0dGltZSA9IGhvdXIgKyBzZXAgKyBtaW51dGVzICsgJyAnICsgYW1wbTtcblx0XHR5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG5cblx0XHQvLyBjYWxsIHRoaXMgZnVuY3Rpb24gYWdhaW4gaW4gMTAwMG1zXG5cdFx0c2V0VGltZW91dCh1cGRhdGVDbG9jaywgMTAwMCk7XG5cblx0fVxuXG5cdHVwZGF0ZUNsb2NrKCk7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cImZsZXggbXQtYXV0byB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBweC00XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgR2F0aW5lYXVcbiAgICAgICAgICAgIHsjYXdhaXQgdGVtcGVyYXR1cmUgdGhlbiB0ZW1wfXtNYXRoLnJvdW5kKHRlbXAuY3VycmVudC50ZW1wX2MpfcKwQ3svYXdhaXR9LCB7dGltZX0gRVRcbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHctMS8yIHB4LTQgbWwtYXV0b1wiPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIHsjYXdhaXQgdXBkYXRlZERhdGUgdGhlbiBkYXRhfVxuICAgICAgICAgICAgICAgIFVwZGF0ZWQg4oCTIFxuICAgICAgICAgICAgICAgIHttb250aE5hbWVzW25ldyBEYXRlKGRhdGEuY29tbWl0LmNvbW1pdC5hdXRob3IuZGF0ZSkuZ2V0TW9udGgoKV19XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKGRhdGEuY29tbWl0LmNvbW1pdC5hdXRob3IuZGF0ZSkuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgICAgIHsvYXdhaXR9IMKpXG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIiwiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKCkge1xuXHRcdGNvbnN0IGdldFByb2plY3RzID0gYXdhaXQgdGhpcy5mZXRjaChgY29udGVudC9wcm9qZWN0cy5qc29uYCk7XG5cdFx0Y29uc3QgcHJvamVjdHMgPSBhd2FpdCBnZXRQcm9qZWN0cy5qc29uKCk7XG5cblx0XHRjb25zdCBnZXRFeHBlcmllbmNlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGNvbnRlbnQvZXhwZXJpZW5jZXMuanNvbmApO1xuXHRcdGNvbnN0IGV4cGVyaWVuY2VzID0gYXdhaXQgZ2V0RXhwZXJpZW5jZXMuanNvbigpO1xuXG5cdFx0Y29uc3QgZ2V0Q29sbGFib3JhdG9ycyA9IGF3YWl0IHRoaXMuZmV0Y2goYGNvbnRlbnQvY29sbGFib3JhdG9ycy5qc29uYCk7XG5cdFx0Y29uc3QgY29sbGFib3JhdG9ycyA9IGF3YWl0IGdldENvbGxhYm9yYXRvcnMuanNvbigpO1xuXG5cdFx0Y29uc3QgZ2V0U2VydmljZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBjb250ZW50L3NlcnZpY2VzLmpzb25gKTtcblx0XHRjb25zdCBzZXJ2aWNlcyA9IGF3YWl0IGdldFNlcnZpY2VzLmpzb24oKTtcblxuXHRcdGNvbnN0IGdldExpbmtzID0gYXdhaXQgdGhpcy5mZXRjaChgY29udGVudC9saW5rcy5qc29uYCk7XG5cdFx0Y29uc3QgbGlua3MgPSBhd2FpdCBnZXRMaW5rcy5qc29uKCk7XG5cblx0XHRyZXR1cm4ge3Byb2plY3RzLCBleHBlcmllbmNlcywgY29sbGFib3JhdG9ycywgc2VydmljZXMsIGxpbmtzfVxuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5zdmVsdGUnO1xuXHRcblx0ZXhwb3J0IGxldCBwcm9qZWN0cztcblx0ZXhwb3J0IGxldCBleHBlcmllbmNlcztcblx0ZXhwb3J0IGxldCBjb2xsYWJvcmF0b3JzO1xuXHRleHBvcnQgbGV0IHNlcnZpY2VzO1xuXHRleHBvcnQgbGV0IGxpbmtzO1xuXG5cdGxldCBkZXNjcmlwdGlvbiA9IFwiSSdtIGEgRnJlbmNoIENhbmFkaWFuIGRlc2lnbmVyIGFuZCBkZXZlbG9wZXIgc3BlY2lhbGl6ZWQgaW4gd2ViIGFuZCBwcm9kdWN0IGRlc2lnbi4gSWYgeW91J2QgbGlrZSB0byBjb2xsYWJvcmF0ZSwgZW1haWwgbWUgYXQgPGEgaHJlZj1cXFwibWFpbHRvOm1heGltQGhleS5jb21cXFwiIGNsYXNzPVxcXCJob3Zlcjp0ZXh0LWJsYWNrIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgYm9yZGVyLWIgcGItMVxcXCI+bWF4aW1AaGV5LmNvbTwvYT4uXCJcblxuXHR2YXIgeWVhciA9ICcnO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUNsb2NrKCkge1xuXHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcblx0fVxuXG5cdHVwZGF0ZUNsb2NrKCk7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TWF4aW0gU2llYmVydCDigJQgRGVzaWduZXIgKyBEZXZlbG9wZXI8L3RpdGxlPlxuXHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBGcmVuY2ggQ2FuYWRpYW4gZGVzaWduZXIgYW5kIGRldmVsb3BlciBzcGVjaWFsaXplZCBpbiB3ZWIgYW5kIHByb2R1Y3QgZGVzaWduLlwiIC8+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gcHktNCB0ZXh0LXhzIHRleHQtYmxhY2sgYmctZ3JheS0xMDAgbGc6cHktMjQgbWQ6cHktMTQgZGFyazpiZy1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cblx0PGRpdiBjbGFzcz1cInctZnVsbCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuXHRcdDxoZWFkZXIgY2xhc3M9XCJ3LWZ1bGwgcHgtNCBtYi04IG1kOm1iLTEwIHRvcC00XCI+XG5cdFx0XHQ8YSBocmVmPVwiL1wiIGNsYXNzPVwic2VsZi1zdGFydCBpbmxpbmUtYmxvY2sgbWItNCBsb2FkZXJcIj5CYWNrIGhvbWU8L2E+XG5cdFx0XHQ8aDE+TWF4aW0gU2llYmVydDwvaDE+XG5cdFx0XHQ8cCBjbGFzcz1cInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+RGVzaWduZXIgKyBEZXZlbG9wZXI8L3A+XG5cdFx0XHQ8cCBjbGFzcz1cInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+MjAxMeKAk3t5ZWFyfTwvcD5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8ZGl2IGNsYXNzPVwidy1mdWxsIG1sLWF1dG9cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcHgtNCB0ZXh0LWJhc2UgbGVhZGluZy1zbnVnIHRleHQtYmxhY2sgbWQ6dGV4dC1sZyBkYXJrOnRleHQtd2hpdGUgbWQ6YmxvY2tcIj5cblx0XHRcdFx0e0BodG1sIGRlc2NyaXB0aW9ufVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aHIgY2xhc3M9XCJteC00IG15LTggYm9yZGVyLXQgYm9yZGVyLWdyYXktNDAwIGJvcmRlci1vcGFjaXR5LTUwIGJvcmRlci1kYXNoZWQgZGFyazpib3JkZXItd2hpdGUgZGFyazpib3JkZXItb3BhY2l0eS0yMCBtZDpteS0xMlwiPlxuXHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IG1iLTEgc206bWItMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTQvMTIgcHgtNCBsZzp3LTUvMTJcIj5cblx0XHRcdFx0XHRcdDxwPlByb2plY3Q8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHRcdFx0PHA+Um9sZTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCB3LTgvMTIgcHgtNCBzbTp3LTUvMTJcIj5cblx0XHRcdFx0XHRcdDxwPlllYXI8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cInctZnVsbFwiPlxuXHRcdFx0XHRcdHsjZWFjaCBwcm9qZWN0cyBhcyBwcm9qZWN0fVxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJmbGV4IG1sLWF1dG8gdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDAgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOnRleHQtYmxhY2sgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCIgaHJlZj1cIntwcm9qZWN0LnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTgvMTIgcHgtNCBsZzp3LTUvMTIgc206dy00LzEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+e3Byb2plY3QudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPntwcm9qZWN0LnJvbGV9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgdy01LzEyIHB4LTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD57cHJvamVjdC55ZWFyfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0ey9lYWNofVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8aHIgY2xhc3M9XCJteC00IG15LTggYm9yZGVyLXQgYm9yZGVyLWdyYXktNDAwIGJvcmRlci1vcGFjaXR5LTUwIGJvcmRlci1kYXNoZWQgZGFyazpib3JkZXItd2hpdGUgZGFyazpib3JkZXItb3BhY2l0eS0yMCBtZDpteS0xMlwiPlxuXHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdDxoZWFkZXIgY2xhc3M9XCJmbGV4IG1iLTEgc206bWItMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTgvMTIgcHgtNCBsZzp3LTUvMTIgc206dy00LzEyXCI+XG5cdFx0XHRcdFx0XHQ8cD5FeHBlcmllbmNlPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoaWRkZW4gdy00LzEyIHB4LTQgc206YmxvY2tcIj5cblx0XHRcdFx0XHRcdDxwPlRpdGxlPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHctOC8xMiBweC00IHNtOnctNS8xMlwiPlxuXHRcdFx0XHRcdFx0PHA+WWVhcjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwidy1mdWxsXCI+XG5cdFx0XHRcdFx0eyNlYWNoIGV4cGVyaWVuY2VzIGFzIGV4cGVyaWVuY2V9XG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cImZsZXggbWwtYXV0byB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIiBocmVmPVwie2V4cGVyaWVuY2UudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctOC8xMiBweC00IGxnOnctNS8xMiBzbTp3LTQvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD57ZXhwZXJpZW5jZS50aXRsZX08L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGlkZGVuIHctNC8xMiBweC00IHNtOmJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+e2V4cGVyaWVuY2Uucm9sZX08L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCB3LTgvMTIgcHgtNCBzbTp3LTUvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD57ZXhwZXJpZW5jZS5kYXRlfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0ey9lYWNofVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8aHIgY2xhc3M9XCJteC00IG15LTggYm9yZGVyLXQgYm9yZGVyLWdyYXktNDAwIGJvcmRlci1vcGFjaXR5LTUwIGJvcmRlci1kYXNoZWQgZGFyazpib3JkZXItd2hpdGUgZGFyazpib3JkZXItb3BhY2l0eS0yMCBtZDpteS0xMlwiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJmbGV4XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTgvMTIgcHgtNCBsZzp3LTUvMTIgc206dy00LzEyXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJtYi0xIHNtOm1iLTJcIj5TZXJ2aWNlczwvcD5cblx0XHRcdFx0XHR7I2VhY2ggc2VydmljZXMgYXMgc2VydmljZX1cblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIj57c2VydmljZS50aXRsZX08L3A+XG5cdFx0XHRcdFx0ey9lYWNofVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwibWItMSBzbTptYi0yXCI+U2VsZWN0ZWQgQ2xpZW50czwvcD5cblx0XHRcdFx0XHR7I2VhY2ggY29sbGFib3JhdG9ycyBhcyBjb2xsYWJvcmF0b3J9XG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+e2NvbGxhYm9yYXRvci50aXRsZX08L3A+XG5cdFx0XHRcdFx0ey9lYWNofVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInctNS8xMiBweC00IHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cIm1iLTEgc206bWItMlwiPkxpbmtzPC9wPlxuXHRcdFx0XHRcdHsjZWFjaCBsaW5rcyBhcyBsaW5rfVxuXHRcdFx0XHRcdFx0PHA+PGEgaHJlZj1cIntsaW5rLnVybH1cIiBjbGFzcz1cInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwIGhvdmVyOnVuZGVybGluZSBob3Zlcjp0ZXh0LWJsYWNrIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+e2xpbmsudGl0bGV9PC9hPjwvcD5cblx0XHRcdFx0XHR7L2VhY2h9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvZGl2PlxuXHRcdDxociBjbGFzcz1cIm14LTQgbXktOCBib3JkZXItdCBib3JkZXItZ3JheS00MDAgYm9yZGVyLW9wYWNpdHktNTAgYm9yZGVyLWRhc2hlZCBkYXJrOmJvcmRlci13aGl0ZSBkYXJrOmJvcmRlci1vcGFjaXR5LTIwIG1kOm15LTEyXCI+XG5cdFx0PEZvb3RlciAvPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbInRoaXMiLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksTUFBTSxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUdBLGNBQUksQ0FBQztBQUN2RCxJQUFJLFFBQVEsR0FBRyxDQUFDLFlBQVk7QUFDNUIsU0FBUyxDQUFDLEdBQUc7QUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxhQUFZO0FBQ3ZDLENBQUM7QUFDRCxDQUFDLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUNyQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDZixDQUFDLEdBQUcsQ0FBQztBQUNMLENBQUMsU0FBUyxJQUFJLEVBQUU7QUFDaEI7RUFDa0IsVUFBVSxPQUFPLEVBQUU7QUFDckM7QUFDQSxFQUFFLElBQUksT0FBTyxHQUFHO0FBQ2hCLElBQUksWUFBWSxFQUFFLGlCQUFpQixJQUFJLElBQUk7QUFDM0MsSUFBSSxRQUFRLEVBQUUsUUFBUSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksTUFBTTtBQUN0RCxJQUFJLElBQUk7QUFDUixNQUFNLFlBQVksSUFBSSxJQUFJO0FBQzFCLE1BQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsTUFBTSxDQUFDLFdBQVc7QUFDbEIsUUFBUSxJQUFJO0FBQ1osVUFBVSxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3JCLFVBQVUsT0FBTyxJQUFJO0FBQ3JCLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNwQixVQUFVLE9BQU8sS0FBSztBQUN0QixTQUFTO0FBQ1QsT0FBTyxHQUFHO0FBQ1YsSUFBSSxRQUFRLEVBQUUsVUFBVSxJQUFJLElBQUk7QUFDaEMsSUFBSSxXQUFXLEVBQUUsYUFBYSxJQUFJLElBQUk7QUFDdEMsR0FBRyxD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
