import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, h as handle_promise, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, j as claim_space, k as add_location, l as attr_dev, m as insert_dev, n as append_dev, o as set_data_dev, u as update_await_block_branch, p as noop, q as validate_each_argument, r as onMount, w as create_component, x as query_selector_all, y as claim_component, z as mount_component, A as transition_in, B as transition_out, C as destroy_each, D as destroy_component, E as globals } from './client.22ed8e1c.js';

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

// (1:0) <script>     import fetch from 'cross-fetch';      let promise = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   var time = '';  var year = '';   function updateClock() {   var now = new Date(), // current date    hour = now.getHours(),    minutes = now.getMinutes(),    sep = ':',    ampm = 'am';      if (hour >= 12) {     hour -= 12;     ampm = 'pm';   }
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
		source: "(1:0) <script>     import fetch from 'cross-fetch';      let promise = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)     .then(r => r.json());      const monthNames = [\\\"January\\\", \\\"February\\\", \\\"March\\\", \\\"April\\\", \\\"May\\\", \\\"June\\\", \\\"July\\\", \\\"August\\\", \\\"September\\\", \\\"October\\\", \\\"November\\\", \\\"December\\\"];   var time = '';  var year = '';   function updateClock() {   var now = new Date(), // current date    hour = now.getHours(),    minutes = now.getMinutes(),    sep = ':',    ampm = 'am';      if (hour >= 12) {     hour -= 12;     ampm = 'pm';   }",
		ctx
	});

	return block;
}

// (49:16) {:then data}
function create_then_block(ctx) {
	let t0;
	let t1_value = /*monthNames*/ ctx[3][new Date(/*data*/ ctx[5].commit.commit.author.date).getMonth()] + "";
	let t1;
	let t2;
	let t3_value = new Date(/*data*/ ctx[5].commit.commit.author.date).getFullYear() + "";
	let t3;

	const block = {
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
		block,
		id: create_then_block.name,
		type: "then",
		source: "(49:16) {:then data}",
		ctx
	});

	return block;
}

// (47:32)                                   {:then data}
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
		source: "(47:32)                                   {:then data}",
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
	let div3;
	let div1;
	let p1;
	let t4;
	let div2;
	let p2;
	let t5;
	let t6;
	let t7;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 5
	};

	handle_promise(/*promise*/ ctx[2], info);

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			p0 = element("p");
			t0 = text("Ottawa – ");
			t1 = text(/*time*/ ctx[0]);
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
			t0 = claim_text(p0_nodes, "Ottawa – ");
			t1 = claim_text(p0_nodes, /*time*/ ctx[0]);
			t2 = claim_text(p0_nodes, " ET");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			info.block.l(p1_nodes);
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p2 = claim_element(div2_nodes, "P", {});
			var p2_nodes = children(p2);
			t5 = claim_text(p2_nodes, "2011 – ");
			t6 = claim_text(p2_nodes, /*year*/ ctx[1]);
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
			info.mount = () => p1;
			info.anchor = null;
			append_dev(div3, t4);
			append_dev(div3, div2);
			append_dev(div2, p2);
			append_dev(p2, t5);
			append_dev(p2, t6);
			append_dev(p2, t7);
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;
			if (dirty & /*time*/ 1) set_data_dev(t1, /*time*/ ctx[0]);
			update_await_block_branch(info, ctx, dirty);
			if (dirty & /*year*/ 2) set_data_dev(t6, /*year*/ ctx[1]);
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
	let promise = browserPonyfill(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`).then(r => r.json());

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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		fetch: browserPonyfill,
		promise,
		monthNames,
		time,
		year,
		updateClock
	});

	$$self.$inject_state = $$props => {
		if ("promise" in $$props) $$invalidate(2, promise = $$props.promise);
		if ("time" in $$props) $$invalidate(0, time = $$props.time);
		if ("year" in $$props) $$invalidate(1, year = $$props.year);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [time, year, promise, monthNames];
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

const { document: document_1 } = globals;
const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	return child_ctx;
}

function get_each_context_4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

// (110:3) {#each projects as project}
function create_each_block_4(ctx) {
	let a;
	let div0;
	let p0;
	let t0_value = /*project*/ ctx[18].title + "";
	let t0;
	let t1;
	let div1;
	let p1;
	let t2_value = /*project*/ ctx[18].role + "";
	let t2;
	let t3;
	let div2;
	let p2;
	let t4_value = /*project*/ ctx[18].year + "";
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
			add_location(p0, file, 112, 6, 4224);
			attr_dev(div0, "class", "w-8/12 px-4 sm:w-4/12");
			add_location(div0, file, 111, 5, 4182);
			add_location(p1, file, 115, 6, 4312);
			attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div1, file, 114, 5, 4264);
			add_location(p2, file, 118, 6, 4400);
			attr_dev(div2, "class", "flex justify-end w-4/12 px-4");
			add_location(div2, file, 117, 5, 4351);
			attr_dev(a, "class", "flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "href", a_href_value = /*project*/ ctx[18].url);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 110, 4, 4001);
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
			if (dirty & /*projects*/ 1 && t0_value !== (t0_value = /*project*/ ctx[18].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*projects*/ 1 && t2_value !== (t2_value = /*project*/ ctx[18].role + "")) set_data_dev(t2, t2_value);
			if (dirty & /*projects*/ 1 && t4_value !== (t4_value = /*project*/ ctx[18].year + "")) set_data_dev(t4, t4_value);

			if (dirty & /*projects*/ 1 && a_href_value !== (a_href_value = /*project*/ ctx[18].url)) {
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
		source: "(110:3) {#each projects as project}",
		ctx
	});

	return block;
}

// (140:3) {#each experiences as experience}
function create_each_block_3(ctx) {
	let a;
	let div0;
	let p0;
	let t0_value = /*experience*/ ctx[15].title + "";
	let t0;
	let t1;
	let div1;
	let p1;
	let t2_value = /*experience*/ ctx[15].role + "";
	let t2;
	let t3;
	let div2;
	let p2;
	let t4_value = /*experience*/ ctx[15].date + "";
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
			add_location(p0, file, 142, 6, 5146);
			attr_dev(div0, "class", "w-4/12 px-4");
			add_location(div0, file, 141, 5, 5114);
			add_location(p1, file, 145, 6, 5237);
			attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div1, file, 144, 5, 5189);
			add_location(p2, file, 148, 6, 5338);
			attr_dev(div2, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
			add_location(div2, file, 147, 5, 5279);
			attr_dev(a, "class", "flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "href", a_href_value = /*experience*/ ctx[15].url);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 140, 4, 4930);
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
			if (dirty & /*experiences*/ 2 && t0_value !== (t0_value = /*experience*/ ctx[15].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*experiences*/ 2 && t2_value !== (t2_value = /*experience*/ ctx[15].role + "")) set_data_dev(t2, t2_value);
			if (dirty & /*experiences*/ 2 && t4_value !== (t4_value = /*experience*/ ctx[15].date + "")) set_data_dev(t4, t4_value);

			if (dirty & /*experiences*/ 2 && a_href_value !== (a_href_value = /*experience*/ ctx[15].url)) {
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
		source: "(140:3) {#each experiences as experience}",
		ctx
	});

	return block;
}

// (158:3) {#each services as service}
function create_each_block_2(ctx) {
	let p;
	let t_value = /*service*/ ctx[12].title + "";
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
			add_location(p, file, 158, 4, 5588);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*services*/ 8 && t_value !== (t_value = /*service*/ ctx[12].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(158:3) {#each services as service}",
		ctx
	});

	return block;
}

// (164:3) {#each collaborators as collaborator}
function create_each_block_1(ctx) {
	let p;
	let t_value = /*collaborator*/ ctx[9].title + "";
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
			add_location(p, file, 164, 4, 5809);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*collaborators*/ 4 && t_value !== (t_value = /*collaborator*/ ctx[9].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(164:3) {#each collaborators as collaborator}",
		ctx
	});

	return block;
}

// (170:3) {#each links as link}
function create_each_block(ctx) {
	let p;
	let a;
	let t_value = /*link*/ ctx[6].title + "";
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
			attr_dev(a, "href", a_href_value = /*link*/ ctx[6].url);
			attr_dev(a, "class", "text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 170, 7, 6006);
			add_location(p, file, 170, 4, 6003);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*links*/ 16 && t_value !== (t_value = /*link*/ ctx[6].title + "")) set_data_dev(t, t_value);

			if (dirty & /*links*/ 16 && a_href_value !== (a_href_value = /*link*/ ctx[6].url)) {
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
		source: "(170:3) {#each links as link}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div0;
	let t1;
	let div18;
	let a;
	let t2;
	let header0;
	let div2;
	let h1;
	let t3;
	let t4;
	let div1;
	let t5;
	let div6;
	let div3;
	let p0;
	let t6;
	let t7;
	let div4;
	let p1;
	let t8;
	let t9;
	let div5;
	let p2;
	let t10;
	let t11;
	let section0;
	let div8;
	let div7;
	let t12;
	let div9;
	let t13;
	let header1;
	let div13;
	let div10;
	let p3;
	let t14;
	let t15;
	let div11;
	let p4;
	let t16;
	let t17;
	let div12;
	let p5;
	let t18;
	let t19;
	let section1;
	let div14;
	let t20;
	let section2;
	let div15;
	let p6;
	let t21;
	let t22;
	let t23;
	let div16;
	let p7;
	let t24;
	let t25;
	let t26;
	let div17;
	let p8;
	let t27;
	let t28;
	let t29;
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

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].c();
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

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].c();
			}

			t20 = space();
			section2 = element("section");
			div15 = element("div");
			p6 = element("p");
			t21 = text("Services");
			t22 = space();

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t23 = space();
			div16 = element("div");
			p7 = element("p");
			t24 = text("Selected Clients");
			t25 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t26 = space();
			div17 = element("div");
			p8 = element("p");
			t27 = text("Links");
			t28 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t29 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1e6j3ni\"]", document_1.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { id: true, class: true });
			children(div0).forEach(detach_dev);
			t1 = claim_space(nodes);
			div18 = claim_element(nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			a = claim_element(div18_nodes, "A", { href: true, class: true });
			children(a).forEach(detach_dev);
			t2 = claim_space(div18_nodes);
			header0 = claim_element(div18_nodes, "HEADER", { class: true });
			var header0_nodes = children(header0);
			div2 = claim_element(header0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h1 = claim_element(div2_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, "Maxim Siebert");
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(header0_nodes);
			div6 = claim_element(header0_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			p0 = claim_element(div3_nodes, "P", {});
			var p0_nodes = children(p0);
			t6 = claim_text(p0_nodes, "Project");
			p0_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t7 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			p1 = claim_element(div4_nodes, "P", {});
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "Role");
			p1_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t9 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p2 = claim_element(div5_nodes, "P", {});
			var p2_nodes = children(p2);
			t10 = claim_text(p2_nodes, "Year");
			p2_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			header0_nodes.forEach(detach_dev);
			t11 = claim_space(div18_nodes);
			section0 = claim_element(div18_nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			div8 = claim_element(section0_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t12 = claim_space(section0_nodes);
			div9 = claim_element(section0_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].l(div9_nodes);
			}

			div9_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t13 = claim_space(div18_nodes);
			header1 = claim_element(div18_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			div13 = claim_element(header1_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div10 = claim_element(div13_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p3 = claim_element(div10_nodes, "P", {});
			var p3_nodes = children(p3);
			t14 = claim_text(p3_nodes, "Experience");
			p3_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			t15 = claim_space(div13_nodes);
			div11 = claim_element(div13_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			p4 = claim_element(div11_nodes, "P", {});
			var p4_nodes = children(p4);
			t16 = claim_text(p4_nodes, "Title");
			p4_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			t17 = claim_space(div13_nodes);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			p5 = claim_element(div12_nodes, "P", {});
			var p5_nodes = children(p5);
			t18 = claim_text(p5_nodes, "Year");
			p5_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t19 = claim_space(div18_nodes);
			section1 = claim_element(div18_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			div14 = claim_element(section1_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].l(div14_nodes);
			}

			div14_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t20 = claim_space(div18_nodes);
			section2 = claim_element(div18_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			div15 = claim_element(section2_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			p6 = claim_element(div15_nodes, "P", { class: true });
			var p6_nodes = children(p6);
			t21 = claim_text(p6_nodes, "Services");
			p6_nodes.forEach(detach_dev);
			t22 = claim_space(div15_nodes);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].l(div15_nodes);
			}

			div15_nodes.forEach(detach_dev);
			t23 = claim_space(section2_nodes);
			div16 = claim_element(section2_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			p7 = claim_element(div16_nodes, "P", { class: true });
			var p7_nodes = children(p7);
			t24 = claim_text(p7_nodes, "Selected Clients");
			p7_nodes.forEach(detach_dev);
			t25 = claim_space(div16_nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div16_nodes);
			}

			div16_nodes.forEach(detach_dev);
			t26 = claim_space(section2_nodes);
			div17 = claim_element(section2_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			p8 = claim_element(div17_nodes, "P", { class: true });
			var p8_nodes = children(p8);
			t27 = claim_text(p8_nodes, "Links");
			p8_nodes.forEach(detach_dev);
			t28 = claim_space(div17_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div17_nodes);
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
			add_location(div7, file, 106, 3, 3863);
			attr_dev(div8, "class", "hidden w-4/12 px-4 text-base tracking-tight text-black lg:w-3/12 dark:text-white md:block");
			add_location(div8, file, 105, 2, 3756);
			attr_dev(div9, "class", "w-full ml-auto md:w-8/12");
			add_location(div9, file, 108, 2, 3927);
			attr_dev(section0, "class", "flex flex-wrap mb-5 sm:mb-8 md:mb-12");
			add_location(section0, file, 104, 1, 3699);
			add_location(p3, file, 127, 4, 4590);
			attr_dev(div10, "class", "w-4/12 px-4");
			add_location(div10, file, 126, 3, 4560);
			add_location(p4, file, 130, 4, 4667);
			attr_dev(div11, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div11, file, 129, 3, 4621);
			add_location(p5, file, 133, 4, 4750);
			attr_dev(div12, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
			add_location(div12, file, 132, 3, 4693);
			attr_dev(div13, "class", "flex w-full ml-auto md:w-8/12");
			add_location(div13, file, 125, 2, 4513);
			attr_dev(header1, "class", "flex mb-1 sm:mb-2");
			add_location(header1, file, 124, 1, 4476);
			attr_dev(div14, "class", "w-full ml-auto md:w-8/12");
			add_location(div14, file, 138, 2, 4850);
			attr_dev(section1, "class", "flex flex-wrap mb-5 sm:mb-8 md:mb-12");
			add_location(section1, file, 137, 1, 4793);
			attr_dev(p6, "class", "mb-1 sm:mb-2");
			add_location(p6, file, 156, 3, 5516);
			attr_dev(div15, "class", "w-8/12 px-4 sm:w-4/12");
			add_location(div15, file, 155, 2, 5477);
			attr_dev(p7, "class", "mb-1 sm:mb-2");
			add_location(p7, file, 162, 3, 5719);
			attr_dev(div16, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div16, file, 161, 2, 5674);
			attr_dev(p8, "class", "mb-1 sm:mb-2");
			add_location(p8, file, 168, 3, 5940);
			attr_dev(div17, "class", "w-4/12 px-4 text-right");
			add_location(div17, file, 167, 2, 5900);
			attr_dev(section2, "class", "flex flex-wrap w-full ml-auto md:w-8/12");
			add_location(section2, file, 154, 1, 5417);
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
			div1.innerHTML = /*description*/ ctx[5];
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
			div7.innerHTML = /*description*/ ctx[5];
			append_dev(section0, t12);
			append_dev(section0, div9);

			for (let i = 0; i < each_blocks_4.length; i += 1) {
				each_blocks_4[i].m(div9, null);
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

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].m(div14, null);
			}

			append_dev(div18, t20);
			append_dev(div18, section2);
			append_dev(section2, div15);
			append_dev(div15, p6);
			append_dev(p6, t21);
			append_dev(div15, t22);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(div15, null);
			}

			append_dev(section2, t23);
			append_dev(section2, div16);
			append_dev(div16, p7);
			append_dev(p7, t24);
			append_dev(div16, t25);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div16, null);
			}

			append_dev(section2, t26);
			append_dev(section2, div17);
			append_dev(div17, p8);
			append_dev(p8, t27);
			append_dev(div17, t28);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div17, null);
			}

			append_dev(div18, t29);
			mount_component(footer, div18, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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
						each_blocks_4[i].m(div9, null);
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
						each_blocks_3[i].m(div14, null);
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
						each_blocks_2[i].m(div15, null);
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
						each_blocks_1[i].m(div16, null);
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
						each_blocks[i].m(div17, null);
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
	let description = "is a French Canadian designer & developer. He's currently a Principal Designer at <a href=\"https://peggy.com/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Peggy</a> and freelances through his studio, <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Blunt</a>. This site lists most of the work he's done over the years. If you'd like to discuss new commissions or collaborate with Maxim, email him at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:underline\">maxim@hey.com</a>.";

	onMount(() => {
		const cursor = document.getElementById("cursor");

		// Custom cursor
		document.addEventListener("mousemove", function (e) {
			let mouseX = e.pageX;
			let mouseY = e.pageY;
			cursor.style.left = mouseX + "px";
			cursor.style.top = mouseY + "px";
		});

		// Add dots when clicking links
		[].forEach.call(document.getElementsByTagName("a"), function (e) {
			e.addEventListener("click", function (e) {
				let mouseX = e.pageX;
				let mouseY = e.pageY;
				let div = document.createElement("div");
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
		});

		// Remove dots on window resize
		window.addEventListener("resize", function () {
			document.querySelectorAll(".dot").forEach(e => e.remove());
		});
	});

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
		onMount,
		Footer,
		projects,
		experiences,
		collaborators,
		services,
		links,
		description
	});

	$$self.$inject_state = $$props => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzEzZjUzY2IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXItcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzO1xudmFyIF9fc2VsZl9fID0gKGZ1bmN0aW9uICgpIHtcbmZ1bmN0aW9uIEYoKSB7XG50aGlzLmZldGNoID0gZmFsc2U7XG50aGlzLkRPTUV4Y2VwdGlvbiA9IGdsb2JhbC5ET01FeGNlcHRpb25cbn1cbkYucHJvdG90eXBlID0gZ2xvYmFsO1xucmV0dXJuIG5ldyBGKCk7XG59KSgpO1xuKGZ1bmN0aW9uKHNlbGYpIHtcblxudmFyIGlycmVsZXZhbnQgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjpcbiAgICAgICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmXG4gICAgICAnQmxvYicgaW4gc2VsZiAmJlxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ldyBCbG9iKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRGF0YVZpZXcob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF07XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgICAgQXJyYXlCdWZmZXIuaXNWaWV3IHx8XG4gICAgICBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge307XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdO1xuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSArICcsICcgKyB2YWx1ZSA6IHZhbHVlO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV07XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpdGVtcy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keTtcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKTtcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ107XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5O1xuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybDtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFscztcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2Q7XG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlO1xuICAgICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWw7XG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdDtcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnc2FtZS1vcmlnaW4nO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbDtcbiAgICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsO1xuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsO1xuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KTtcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHlcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpO1xuICAgICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIFJlcGxhY2UgaW5zdGFuY2VzIG9mIFxcclxcbiBhbmQgXFxuIGZvbGxvd2VkIGJ5IGF0IGxlYXN0IG9uZSBzcGFjZSBvciBob3Jpem9udGFsIHRhYiB3aXRoIGEgc3BhY2VcbiAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICAgIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpO1xuICAgIHByZVByb2Nlc3NlZEhlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKTtcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXM7XG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMDtcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSyc7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnO1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KTtcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpO1xuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH07XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KTtcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJztcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfTtcblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF07XG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfTtcblxuICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IHNlbGYuRE9NRXhjZXB0aW9uO1xuICB0cnkge1xuICAgIG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdmFyIGVycm9yID0gRXJyb3IobWVzc2FnZSk7XG4gICAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgfTtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gZXhwb3J0cy5ET01FeGNlcHRpb247XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaChpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgICB9XG5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpO1xuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbCkge1xuICAgICAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKTtcblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KTtcbiAgICB9KVxuICB9XG5cbiAgZmV0Y2gucG9seWZpbGwgPSB0cnVlO1xuXG4gIGlmICghc2VsZi5mZXRjaCkge1xuICAgIHNlbGYuZmV0Y2ggPSBmZXRjaDtcbiAgICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzO1xuICAgIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gICAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICB9XG5cbiAgZXhwb3J0cy5IZWFkZXJzID0gSGVhZGVycztcbiAgZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgZXhwb3J0cy5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICBleHBvcnRzLmZldGNoID0gZmV0Y2g7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuICByZXR1cm4gZXhwb3J0cztcblxufSh7fSkpO1xufSkoX19zZWxmX18pO1xuX19zZWxmX18uZmV0Y2gucG9ueWZpbGwgPSB0cnVlO1xuLy8gUmVtb3ZlIFwicG9seWZpbGxcIiBwcm9wZXJ0eSBhZGRlZCBieSB3aGF0d2ctZmV0Y2hcbmRlbGV0ZSBfX3NlbGZfXy5mZXRjaC5wb2x5ZmlsbDtcbi8vIENob29zZSBiZXR3ZWVuIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiAoZ2xvYmFsKSBvciBjdXN0b20gaW1wbGVtZW50YXRpb24gKF9fc2VsZl9fKVxuLy8gdmFyIGN0eCA9IGdsb2JhbC5mZXRjaCA/IGdsb2JhbCA6IF9fc2VsZl9fO1xudmFyIGN0eCA9IF9fc2VsZl9fOyAvLyB0aGlzIGxpbmUgZGlzYWJsZSBzZXJ2aWNlIHdvcmtlciBzdXBwb3J0IHRlbXBvcmFyaWx5XG5leHBvcnRzID0gY3R4LmZldGNoIC8vIFRvIGVuYWJsZTogaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5kZWZhdWx0ID0gY3R4LmZldGNoIC8vIEZvciBUeXBlU2NyaXB0IGNvbnN1bWVycyB3aXRob3V0IGVzTW9kdWxlSW50ZXJvcC5cbmV4cG9ydHMuZmV0Y2ggPSBjdHguZmV0Y2ggLy8gVG8gZW5hYmxlOiBpbXBvcnQge2ZldGNofSBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuSGVhZGVycyA9IGN0eC5IZWFkZXJzXG5leHBvcnRzLlJlcXVlc3QgPSBjdHguUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IGN0eC5SZXNwb25zZVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzXG4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCc7XG5cbiAgICBsZXQgcHJvbWlzZSA9IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL01heGltU2llYmVydC9NYXhpbVNpZWJlcnQtMjAyMS9icmFuY2hlcy9naC1wYWdlc2ApXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG5cbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG5cblx0dmFyIHRpbWUgPSAnJztcblx0dmFyIHllYXIgPSAnJztcblxuXHRmdW5jdGlvbiB1cGRhdGVDbG9jaygpIHtcblx0XHR2YXIgbm93ID0gbmV3IERhdGUoKSwgLy8gY3VycmVudCBkYXRlXG5cdFx0XHRob3VyID0gbm93LmdldEhvdXJzKCksXG5cdFx0XHRtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKSxcblx0XHRcdHNlcCA9ICc6Jyxcblx0XHRcdGFtcG0gPSAnYW0nO1xuXHRcdFxuXHRcdGlmIChob3VyID49IDEyKSB7XG5cdFx0XHRcdGhvdXIgLT0gMTI7XG5cdFx0XHRcdGFtcG0gPSAncG0nO1xuXHRcdH1cblx0XHRcdFx0XG5cdFx0bWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/ICcwJyArIG1pbnV0ZXMgOiBtaW51dGVzO1xuXHRcdGhvdXIgPSBob3VyICUgMTI7XG5cdFx0aG91ciA9IGhvdXIgPyBob3VyIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuXG5cdFx0Ly8gc2V0IHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IHdpdGggdGhlIElEIHRpbWUgdG8gdGhlIGZvcm1hdHRlZCBzdHJpbmdcblx0XHR0aW1lID0gaG91ciArIHNlcCArIG1pbnV0ZXMgKyAnICcgKyBhbXBtO1xuXHRcdHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcblxuXHRcdC8vIGNhbGwgdGhpcyBmdW5jdGlvbiBhZ2FpbiBpbiAxMDAwbXNcblx0XHRzZXRUaW1lb3V0KHVwZGF0ZUNsb2NrLCAxMDAwKTtcblxuXHR9XG5cblx0dXBkYXRlQ2xvY2soKTtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiZmxleCBwdC01IG10LWF1dG8gdGV4dC1ncmF5LTYwMCBzbTpwdC04IG1kOnB0LTEyIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3LTgvMTIgcHgtNCBzbTp3LTMvMTJcIj5cbiAgICAgICAgPHA+T3R0YXdhIOKAkyB7dGltZX0gRVQ8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggdy00LzEyIG1sLWF1dG8gc206dy04LzEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gdy04LzEyIHB4LTQgc206YmxvY2tcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHsjYXdhaXQgcHJvbWlzZX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7OnRoZW4gZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlZCDigJMgXG4gICAgICAgICAgICAgICAgICAgIHttb250aE5hbWVzW25ldyBEYXRlKGRhdGEuY29tbWl0LmNvbW1pdC5hdXRob3IuZGF0ZSkuZ2V0TW9udGgoKV19XG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShkYXRhLmNvbW1pdC5jb21taXQuYXV0aG9yLmRhdGUpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICAgICAgey9hd2FpdH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHctZnVsbCBweC00IHNtOnctNC8xMlwiPlxuICAgICAgICAgICAgPHA+MjAxMSDigJMge3llYXJ9IMKpPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcblx0XHRjb25zdCBnZXRQcm9qZWN0cyA9IGF3YWl0IHRoaXMuZmV0Y2goYGNvbnRlbnQvcHJvamVjdHMuanNvbmApO1xuXHRcdGNvbnN0IHByb2plY3RzID0gYXdhaXQgZ2V0UHJvamVjdHMuanNvbigpO1xuXG5cdFx0Y29uc3QgZ2V0RXhwZXJpZW5jZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBjb250ZW50L2V4cGVyaWVuY2VzLmpzb25gKTtcblx0XHRjb25zdCBleHBlcmllbmNlcyA9IGF3YWl0IGdldEV4cGVyaWVuY2VzLmpzb24oKTtcblxuXHRcdGNvbnN0IGdldENvbGxhYm9yYXRvcnMgPSBhd2FpdCB0aGlzLmZldGNoKGBjb250ZW50L2NvbGxhYm9yYXRvcnMuanNvbmApO1xuXHRcdGNvbnN0IGNvbGxhYm9yYXRvcnMgPSBhd2FpdCBnZXRDb2xsYWJvcmF0b3JzLmpzb24oKTtcblxuXHRcdGNvbnN0IGdldFNlcnZpY2VzID0gYXdhaXQgdGhpcy5mZXRjaChgY29udGVudC9zZXJ2aWNlcy5qc29uYCk7XG5cdFx0Y29uc3Qgc2VydmljZXMgPSBhd2FpdCBnZXRTZXJ2aWNlcy5qc29uKCk7XG5cblx0XHRjb25zdCBnZXRMaW5rcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGNvbnRlbnQvbGlua3MuanNvbmApO1xuXHRcdGNvbnN0IGxpbmtzID0gYXdhaXQgZ2V0TGlua3MuanNvbigpO1xuXG5cdFx0cmV0dXJuIHtwcm9qZWN0cywgZXhwZXJpZW5jZXMsIGNvbGxhYm9yYXRvcnMsIHNlcnZpY2VzLCBsaW5rc31cblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLnN2ZWx0ZSc7XG5cdFxuXHRleHBvcnQgbGV0IHByb2plY3RzO1xuXHRleHBvcnQgbGV0IGV4cGVyaWVuY2VzO1xuXHRleHBvcnQgbGV0IGNvbGxhYm9yYXRvcnM7XG5cdGV4cG9ydCBsZXQgc2VydmljZXM7XG5cdGV4cG9ydCBsZXQgbGlua3M7XG5cblx0bGV0IGRlc2NyaXB0aW9uID0gXCJpcyBhIEZyZW5jaCBDYW5hZGlhbiBkZXNpZ25lciAmIGRldmVsb3Blci4gSGUncyBjdXJyZW50bHkgYSBQcmluY2lwYWwgRGVzaWduZXIgYXQgPGEgaHJlZj1cXFwiaHR0cHM6Ly9wZWdneS5jb20vXFxcIiBjbGFzcz1cXFwiaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub3JlZmVycmVyIG5vb3BlbmVyXFxcIj5QZWdneTwvYT4gYW5kIGZyZWVsYW5jZXMgdGhyb3VnaCBoaXMgc3R1ZGlvLCA8YSBocmVmPVxcXCJodHRwczovL2JsdW50LmFmL1xcXCIgY2xhc3M9XFxcImhvdmVyOnRleHQtYmxhY2sgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9yZWZlcnJlciBub29wZW5lclxcXCI+Qmx1bnQ8L2E+LiBUaGlzIHNpdGUgbGlzdHMgbW9zdCBvZiB0aGUgd29yayBoZSdzIGRvbmUgb3ZlciB0aGUgeWVhcnMuIElmIHlvdSdkIGxpa2UgdG8gZGlzY3VzcyBuZXcgY29tbWlzc2lvbnMgb3IgY29sbGFib3JhdGUgd2l0aCBNYXhpbSwgZW1haWwgaGltIGF0IDxhIGhyZWY9XFxcIm1haWx0bzptYXhpbUBoZXkuY29tXFxcIiBjbGFzcz1cXFwiaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXFxcIj5tYXhpbUBoZXkuY29tPC9hPi5cIlxuXG5cdG9uTW91bnQoKCkgPT4ge1xuXG5cdFx0Y29uc3QgY3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJzb3JcIilcblxuXHRcdC8vIEN1c3RvbSBjdXJzb3Jcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRsZXQgbW91c2VYID0gZS5wYWdlWDtcblx0XHRcdGxldCBtb3VzZVkgPSBlLnBhZ2VZO1xuXG5cdFx0XHRjdXJzb3Iuc3R5bGUubGVmdCA9IG1vdXNlWCArIFwicHhcIlxuXHRcdFx0Y3Vyc29yLnN0eWxlLnRvcCA9IG1vdXNlWSArIFwicHhcIlxuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIGRvdHMgd2hlbiBjbGlja2luZyBsaW5rc1xuXHRcdFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIiksIGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdGxldCBtb3VzZVggPSBlLnBhZ2VYO1xuXHRcdFx0XHRsZXQgbW91c2VZID0gZS5wYWdlWTtcblxuXHRcdFx0XHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0ZGl2LmNsYXNzTmFtZSA9IFwiZG90XCI7XG5cdFx0XHRcdGRpdi5zdHlsZS5sZWZ0ID0gbW91c2VYICsgXCJweFwiO1xuXHRcdFx0XHRkaXYuc3R5bGUudG9wID0gbW91c2VZICsgXCJweFwiO1xuXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKXtcblx0XHRcdFx0Y3Vyc29yLnN0eWxlLndpZHRoID0gXCIwLjc1cmVtXCI7XG5cdFx0XHRcdGN1cnNvci5zdHlsZS5oZWlnaHQgPSBcIjAuNzVyZW1cIjtcblx0XHRcdH0pO1xuXG5cdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGN1cnNvci5zdHlsZS53aWR0aCA9IFwiMC41cmVtXCI7XG5cdFx0XHRcdGN1cnNvci5zdHlsZS5oZWlnaHQgPSBcIjAuNXJlbVwiO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQvLyBSZW1vdmUgZG90cyBvbiB3aW5kb3cgcmVzaXplXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG90XCIpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcblx0XHR9KTtcblx0fSk7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TWF4aW0gU2llYmVydCDigJMgRGVzaWduZXIgJiBEZXZlbG9wZXI8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBpZD1cImN1cnNvclwiIGNsYXNzPVwiYWJzb2x1dGUgdy0yIGgtMiBkdXJhdGlvbi0xMDAgZWFzZS1pbi1vdXQgYmctYmxhY2sgcm91bmRlZC1mdWxsIHBvaW50ZXItZXZlbnRzLW5vbmUgZGFyazpiZy13aGl0ZSAtdG9wLTEwIC1sZWZ0LTEwXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gcHktNSB0ZXh0LXhzIHRleHQtYmxhY2sgYmctZ3JheS0xMDAgbGc6cHgtNCBkYXJrOmJnLWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxuXHQ8YSBocmVmPVwiL1wiIGNsYXNzPVwic2VsZi1zdGFydCBpbmxpbmUtYmxvY2sgcHgtNCBtYi01IGxvYWRlclwiPjwvYT5cblx0PGhlYWRlciBjbGFzcz1cImZsZXggZmxleC13cmFwIG1iLTEgc206bWItMlwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcHgtNCBtYi01IHNtOm1iLTggbGc6dy0zLzEyIG1kOnctNC8xMiBtZDptYi0wXCI+XG5cdFx0XHQ8aDEgY2xhc3M9XCJpbmxpbmUtYmxvY2sgbWItMSBzbTptYi0yIG1kOm1iLTBcIj5NYXhpbSBTaWViZXJ0PC9oMT5cblx0XHRcdDxkaXYgY2xhc3M9XCJibG9jayB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBtZDpoaWRkZW5cIj5cblx0XHRcdFx0e0BodG1sIGRlc2NyaXB0aW9ufVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImZsZXggdy1mdWxsIG1sLWF1dG8gbWQ6dy04LzEyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidy00LzEyIHB4LTRcIj5cblx0XHRcdFx0PHA+UHJvamVjdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHQ8cD5Sb2xlPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCB3LTgvMTIgcHgtNCBzbTp3LTQvMTJcIj5cblx0XHRcdFx0PHA+WWVhcjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2hlYWRlcj5cblx0PHNlY3Rpb24gY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBtYi01IHNtOm1iLTggbWQ6bWItMTJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiaGlkZGVuIHctNC8xMiBweC00IHRleHQtYmFzZSB0cmFja2luZy10aWdodCB0ZXh0LWJsYWNrIGxnOnctMy8xMiBkYXJrOnRleHQtd2hpdGUgbWQ6YmxvY2tcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJsZWFkaW5nLXRpZ2h0XCI+e0BodG1sIGRlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWwtYXV0byBtZDp3LTgvMTJcIj5cblx0XHRcdHsjZWFjaCBwcm9qZWN0cyBhcyBwcm9qZWN0fVxuXHRcdFx0XHQ8YSBjbGFzcz1cImZsZXggbWwtYXV0byB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIiBocmVmPVwie3Byb2plY3QudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy04LzEyIHB4LTQgc206dy00LzEyXCI+XG5cdFx0XHRcdFx0XHQ8cD57cHJvamVjdC50aXRsZX08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHRcdFx0PHA+e3Byb2plY3Qucm9sZX08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgdy00LzEyIHB4LTRcIj5cblx0XHRcdFx0XHRcdDxwPntwcm9qZWN0LnllYXJ9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC9kaXY+XG5cdDwvc2VjdGlvbj5cblx0PGhlYWRlciBjbGFzcz1cImZsZXggbWItMSBzbTptYi0yXCI+XG5cdFx0PGRpdiBjbGFzcz1cImZsZXggdy1mdWxsIG1sLWF1dG8gbWQ6dy04LzEyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidy00LzEyIHB4LTRcIj5cblx0XHRcdFx0PHA+RXhwZXJpZW5jZTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHQ8cD5UaXRsZTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgdy04LzEyIHB4LTQgc206dy00LzEyXCI+XG5cdFx0XHRcdDxwPlllYXI8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9oZWFkZXI+XG5cdDxzZWN0aW9uIGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgbWItNSBzbTptYi04IG1kOm1iLTEyXCI+XG5cdFx0PGRpdiBjbGFzcz1cInctZnVsbCBtbC1hdXRvIG1kOnctOC8xMlwiPlxuXHRcdFx0eyNlYWNoIGV4cGVyaWVuY2VzIGFzIGV4cGVyaWVuY2V9XG5cdFx0XHRcdDxhIGNsYXNzPVwiZmxleCBtbC1hdXRvIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwIGhvdmVyOnVuZGVybGluZSBob3Zlcjp0ZXh0LWJsYWNrIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiIGhyZWY9XCJ7ZXhwZXJpZW5jZS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTQvMTIgcHgtNFwiPlxuXHRcdFx0XHRcdFx0PHA+e2V4cGVyaWVuY2UudGl0bGV9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoaWRkZW4gdy00LzEyIHB4LTQgc206YmxvY2tcIj5cblx0XHRcdFx0XHRcdDxwPntleHBlcmllbmNlLnJvbGV9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHctOC8xMiBweC00IHNtOnctNC8xMlwiPlxuXHRcdFx0XHRcdFx0PHA+e2V4cGVyaWVuY2UuZGF0ZX08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYT5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L2Rpdj5cblx0PC9zZWN0aW9uPlxuXHQ8c2VjdGlvbiBjbGFzcz1cImZsZXggZmxleC13cmFwIHctZnVsbCBtbC1hdXRvIG1kOnctOC8xMlwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ3LTgvMTIgcHgtNCBzbTp3LTQvMTJcIj5cblx0XHRcdDxwIGNsYXNzPVwibWItMSBzbTptYi0yXCI+U2VydmljZXM8L3A+XG5cdFx0XHR7I2VhY2ggc2VydmljZXMgYXMgc2VydmljZX1cblx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPntzZXJ2aWNlLnRpdGxlfTwvcD5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiaGlkZGVuIHctNC8xMiBweC00IHNtOmJsb2NrXCI+XG5cdFx0XHQ8cCBjbGFzcz1cIm1iLTEgc206bWItMlwiPlNlbGVjdGVkIENsaWVudHM8L3A+XG5cdFx0XHR7I2VhY2ggY29sbGFib3JhdG9ycyBhcyBjb2xsYWJvcmF0b3J9XG5cdFx0XHRcdDxwIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIj57Y29sbGFib3JhdG9yLnRpdGxlfTwvcD5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwidy00LzEyIHB4LTQgdGV4dC1yaWdodFwiPlxuXHRcdFx0PHAgY2xhc3M9XCJtYi0xIHNtOm1iLTJcIj5MaW5rczwvcD5cblx0XHRcdHsjZWFjaCBsaW5rcyBhcyBsaW5rfVxuXHRcdFx0XHQ8cD48YSBocmVmPVwie2xpbmsudXJsfVwiIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDAgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOnRleHQtYmxhY2sgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCIgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj57bGluay50aXRsZX08L2E+PC9wPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG5cdDxGb290ZXIgLz5cbjwvZGl2PiJdLCJuYW1lcyI6WyJ0aGlzIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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