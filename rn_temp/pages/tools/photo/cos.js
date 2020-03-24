!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.COS = t() : e.COS = t();
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: false, exports: {} };return e[r].call(o.exports, o, o.exports, t), o.l = true, o.exports;
    }var n = {};return t.m = e, t.c = n, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: false, enumerable: true, get: r });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/dist/", t(t.s = 4);
  }([function (e, t, n) {
    "use strict";
    function r(e) {
      return encodeURIComponent(e).replace(/!/g, "!").replace(/'/g, "'").replace(/\(/g, "(").replace(/\)/g, ")").replace(/\*/g, "*");
    }function o(e) {
      return l(e, function (e) {
        return "object" == typeof e ? o(e) : e;
      });
    }function i(e, t) {
      return u(t, function (n, r) {
        e[r] = t[r];
      }), e;
    }function a(e) {
      return e instanceof Array;
    }function s(e, t) {
      for (var n = false, r = 0; r < e.length; r++) if (t === e[r]) {
        n = true;break;
      }return n;
    }function c(e) {
      return a(e) ? e : [e];
    }function u(e, t) {
      for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
    }function l(e, t) {
      var n = a(e) ? [] : {};for (var r in e) e.hasOwnProperty(r) && (n[r] = t(e[r], r));return n;
    }function d(e, t) {
      var n = a(e),
          r = n ? [] : {};for (var o in e) e.hasOwnProperty(o) && t(e[o], o) && (n ? r.push(e[o]) : r[o] = e[o]);return r;
    }var f = n(6),
        p = n(7),
        h = n(8),
        g = n(11),
        m = function (e) {
      e = e || {};var t,
          n = e.SecretId,
          i = e.SecretKey,
          a = e.KeyTime,
          s = (e.method || e.Method || "get").toLowerCase(),
          c = o(e.Query || e.params || {}),
          u = o(e.Headers || e.headers || {}),
          l = e.Key || "";if (e.UseRawKey ? t = e.Pathname || e.pathname || "/" + l : (t = e.Pathname || e.pathname || l, 0 !== t.indexOf("/") && (t = "/" + t)), !n) return console.error("missing param SecretId");if (!i) return console.error("missing param SecretKey");var d = function (e) {
        var t = [];for (var n in e) e.hasOwnProperty(n) && t.push(n);return t.sort(function (e, t) {
          return e = e.toLowerCase(), t = t.toLowerCase(), e === t ? 0 : e > t ? 1 : -1;
        });
      },
          f = function (e) {
        var t,
            n,
            o,
            i = [],
            a = d(e);for (t = 0; t < a.length; t++) n = a[t], o = undefined === e[n] || null === e[n] ? "" : "" + e[n], n = n.toLowerCase(), n = r(n), o = r(o) || "", i.push(n + "=" + o);return i.join("&");
      },
          h = Math.round(N(e.SystemClockOffset) / 1e3) - 1,
          g = h,
          m = e.Expires || e.expires;g += undefined === m ? 900 : 1 * m || 0;var y = n,
          v = a || h + ";" + g,
          C = a || h + ";" + g,
          b = d(u).join(";").toLowerCase(),
          x = d(c).join(";").toLowerCase(),
          k = p.HmacSHA1(C, i).toString(),
          S = [s, t, f(c), f(u), ""].join("\n"),
          T = ["sha1", v, p.SHA1(S).toString(), ""].join("\n");return ["q-sign-algorithm=sha1", "q-ak=" + y, "q-sign-time=" + v, "q-key-time=" + C, "q-header-list=" + b, "q-url-param-list=" + x, "q-signature=" + p.HmacSHA1(T, k).toString()].join("&");
    },
        y = function () {},
        v = function (e) {
      var t = {};for (var n in e) e.hasOwnProperty(n) && undefined !== e[n] && null !== e[n] && (t[n] = e[n]);return t;
    },
        C = function (e, t) {
      var n,
          r = new FileReader();FileReader.prototype.readAsBinaryString ? (n = FileReader.prototype.readAsBinaryString, r.onload = function () {
        t(this.result);
      }) : FileReader.prototype.readAsArrayBuffer ? n = function (e) {
        var n = "",
            r = new FileReader();r.onload = function (e) {
          for (var o = new Uint8Array(r.result), i = o.byteLength, a = 0; a < i; a++) n += String.fromCharCode(o[a]);t(n);
        }, r.readAsArrayBuffer(e);
      } : console.error("FileReader not support readAsBinaryString"), n.call(r, e);
    },
        b = function () {
      var e = function (e, t) {
        e = e.split("."), t = t.split(".");for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return parseInt(e[n]) > parseInt(t[n]) ? 1 : -1;return 0;
      };return function (t) {
        var n = (t.match(/Chrome\/([.\d]+)/) || [])[1],
            r = (t.match(/QBCore\/([.\d]+)/) || [])[1],
            o = (t.match(/QQBrowser\/([.\d]+)/) || [])[1];return n && e(n, "53.0.2785.116") < 0 && r && e(r, "3.53.991.400") < 0 && o && e(o, "9.0.2524.400") <= 0 || false;
      }(navigator && navigator.userAgent);
    }(),
        x = function (e, t, n, r, o) {
      var i;if (e.slice ? i = e.slice(t, n) : e.mozSlice ? i = e.mozSlice(t, n) : e.webkitSlice && (i = e.webkitSlice(t, n)), r && b) {
        var a = new FileReader();a.onload = function (e) {
          i = null, o(new Blob([a.result]));
        }, a.readAsArrayBuffer(i);
      } else o(i);
    },
        k = function (e, t, n, r) {
      n = n || y, e ? "string" == typeof t ? n(P.md5(t, true)) : Blob && t instanceof Blob ? P.getFileMd5(t, function (e, t) {
        n(t);
      }, r) : n() : n();
    },
        S = function (e, t, n) {
      var r = e.size,
          o = 0,
          i = f.getCtx(),
          a = function (s) {
        if (s >= r) {
          var c = i.digest("hex");return undefined;
        }var u = Math.min(r, s + 1048576);P.fileSlice(e, s, u, false, function (e) {
          C(e, function (t) {
            e = null, i = i.update(t, true), o += t.length, t = null, n && n({ loaded: o, total: r, percent: Math.round(o / r * 1e4) / 1e4 }), a(s + 1048576);
          });
        });
      };a(0);
    },
        T = function (e) {
      var t,
          n,
          r,
          o = "";for (t = 0, n = e.length / 2; t < n; t++) r = parseInt(e[2 * t] + e[2 * t + 1], 16), o += String.fromCharCode(r);return btoa(o);
    },
        w = function () {
      var e = function () {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
    },
        R = function (e, t) {
      var n = t.Bucket,
          r = t.Region,
          o = t.Key;if (e.indexOf("Bucket") > -1 || "deleteMultipleObject" === e || "multipartList" === e || "listObjectVersions" === e) {
        if (!n) return "Bucket";if (!r) return "Region";
      } else if (e.indexOf("Object") > -1 || e.indexOf("multipart") > -1 || "sliceUploadFile" === e || "abortUploadTask" === e) {
        if (!n) return "Bucket";if (!r) return "Region";if (!o) return "Key";
      }return false;
    },
        A = function (e, t) {
      if (t = i({}, t), "getAuth" !== e && "getV4Auth" !== e && "getObjectUrl" !== e) {
        var n = t.Headers || {};if (t && "object" == typeof t) {
          !function () {
            for (var e in t) t.hasOwnProperty(e) && e.indexOf("x-cos-") > -1 && (n[e] = t[e]);
          }();var r = { "x-cos-mfa": "MFA", "Content-MD5": "ContentMD5", "Content-Length": "ContentLength", "Content-Type": "ContentType", Expect: "Expect", Expires: "Expires", "Cache-Control": "CacheControl", "Content-Disposition": "ContentDisposition", "Content-Encoding": "ContentEncoding", Range: "Range", "If-Modified-Since": "IfModifiedSince", "If-Unmodified-Since": "IfUnmodifiedSince", "If-Match": "IfMatch", "If-None-Match": "IfNoneMatch", "x-cos-copy-source": "CopySource", "x-cos-copy-source-Range": "CopySourceRange", "x-cos-metadata-directive": "MetadataDirective", "x-cos-copy-source-If-Modified-Since": "CopySourceIfModifiedSince", "x-cos-copy-source-If-Unmodified-Since": "CopySourceIfUnmodifiedSince", "x-cos-copy-source-If-Match": "CopySourceIfMatch", "x-cos-copy-source-If-None-Match": "CopySourceIfNoneMatch", "x-cos-acl": "ACL", "x-cos-grant-read": "GrantRead", "x-cos-grant-write": "GrantWrite", "x-cos-grant-full-control": "GrantFullControl", "x-cos-grant-read-acp": "GrantReadAcp", "x-cos-grant-write-acp": "GrantWriteAcp", "x-cos-storage-class": "StorageClass", "x-cos-server-side-encryption-customer-algorithm": "SSECustomerAlgorithm", "x-cos-server-side-encryption-customer-key": "SSECustomerKey", "x-cos-server-side-encryption-customer-key-MD5": "SSECustomerKeyMD5", "x-cos-server-side-encryption": "ServerSideEncryption", "x-cos-server-side-encryption-cos-kms-key-id": "SSEKMSKeyId", "x-cos-server-side-encryption-context": "SSEContext" };P.each(r, function (e, r) {
            undefined !== t[e] && (n[r] = t[e]);
          }), t.Headers = v(n);
        }
      }return t;
    },
        E = function (e, t) {
      return function (n, r) {
        "function" == typeof n && (r = n, n = {}), n = A(e, n);var o = function (e) {
          return e && e.headers && (e.headers["x-cos-version-id"] && (e.VersionId = e.headers["x-cos-version-id"]), e.headers["x-cos-delete-marker"] && (e.DeleteMarker = e.headers["x-cos-delete-marker"])), e;
        },
            i = function (e, t) {
          r && r(o(e), o(t));
        };if ("getService" !== e && "abortUploadTask" !== e) {
          var a;if (a = R(e, n)) return undefined;if (n.Region) {
            if (n.Region.indexOf("cos.") > -1) return undefined;if (!/^([a-z\d-]+)$/.test(n.Region)) return undefined;this.options.CompatibilityMode || -1 !== n.Region.indexOf("-") || "yfb" === n.Region || "default" === n.Region || console.warn("warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224");
          }if (n.Bucket) {
            if (!/^([a-z\d-]+)-(\d+)$/.test(n.Bucket)) if (n.AppId) n.Bucket = n.Bucket + "-" + n.AppId;else {
              if (!this.options.AppId) return undefined;n.Bucket = n.Bucket + "-" + this.options.AppId;
            }n.AppId && (console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).'), delete n.AppId);
          }!this.options.UseRawKey && n.Key && "/" === n.Key.substr(0, 1) && (n.Key = n.Key.substr(1));
        }var s = t.call(this, n, i);if ("getAuth" === e || "getObjectUrl" === e) return s;
      };
    },
        B = function (e, t) {
      function n() {
        if (o = 0, t && "function" == typeof t) {
          r = Date.now();var n,
              i = Math.max(0, Math.round((s - a) / ((r - c) / 1e3) * 100) / 100);n = 0 === s && 0 === e ? 1 : Math.round(s / e * 100) / 100 || 0, c = r, a = s;try {
            t({ loaded: s, total: e, speed: i, percent: n });
          } catch (e) {}
        }
      }var r,
          o,
          i = this,
          a = 0,
          s = 0,
          c = Date.now();return function (t, r) {
        if (t && (s = t.loaded, e = t.total), r) clearTimeout(o), n();else {
          if (o) return;o = setTimeout(n, i.options.ProgressInterval);
        }
      };
    },
        _ = function (e, t, n) {
      var r;if ("string" == typeof t.Body && (t.Body = new Blob([t.Body], { type: "text/plain" })), !t.Body || !(t.Body instanceof Blob || "[object File]" === t.Body.toString() || "[object Blob]" === t.Body.toString())) return undefined;r = t.Body.size, t.ContentLength = r, n(null, r);
    },
        N = function (e) {
      return Date.now() + (e || 0);
    },
        P = { noop: y, formatParams: A, apiWrapper: E, xml2json: h, json2xml: g, md5: f, clearKey: v, fileSlice: x, getBodyMd5: k, getFileMd5: S, binaryBase64: T, extend: i, isArray: a, isInArray: s, makeArray: c, each: u, map: l, filter: d, clone: o, uuid: w, camSafeUrlEncode: r, throttleOnProgress: B, getFileSize: _, getSkewTime: N, getAuth: m, isBrowser: true };e.exports = P;
  }, function (e, t) {
    function n(e, t) {
      for (var n in e) t[n] = e[n];
    }function r(e, t) {
      function r() {}var o = e.prototype;if (Object.create) {
        var i = Object.create(t.prototype);o.__proto__ = i;
      }o instanceof t || (r.prototype = t.prototype, r = new r(), n(o, r), e.prototype = o = r), o.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), o.constructor = e);
    }function o(e, t) {
      if (t instanceof Error) var n = t;else n = this, Error.call(this, oe[e]), this.message = oe[e], Error.captureStackTrace && Error.captureStackTrace(this, o);return n.code = e, t && (this.message = this.message + ": " + t), n;
    }function i() {}function a(e, t) {
      this._node = e, this._refresh = t, s(this);
    }function s(e) {
      var t = e._node._inc || e._node.ownerDocument._inc;if (e._inc != t) {
        var r = e._refresh(e._node);F(e, "length", r.length), n(r, e), e._inc = t;
      }
    }function c() {}function u(e, t) {
      for (var n = e.length; n--;) if (e[n] === t) return n;
    }function l(e, t, n, r) {
      if (r ? t[u(t, r)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;var o = e.ownerDocument;o && (r && v(o, e, r), y(o, e, n));
      }
    }function d(e, t, n) {
      var r = u(t, n);if (!(r >= 0)) throw o(ae, new Error(e.tagName + "@" + n));for (var i = t.length - 1; r < i;) t[r] = t[++r];if (t.length = i, e) {
        var a = e.ownerDocument;a && (v(a, e, n), n.ownerElement = null);
      }
    }function f(e) {
      if (this._features = {}, e) for (var t in e) this._features = e[t];
    }function p() {}function h(e) {
      return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
    }function g(e, t) {
      if (t(e)) return true;if (e = e.firstChild) do {
        if (g(e, t)) return true;
      } while (e = e.nextSibling);
    }function m() {}function y(e, t, n) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
    }function v(e, t, n, r) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
    }function C(e, t, n) {
      if (e && e._inc) {
        e._inc++;var r = t.childNodes;if (n) r[r.length++] = n;else {
          for (var o = t.firstChild, i = 0; o;) r[i++] = o, o = o.nextSibling;r.length = i;
        }
      }
    }function b(e, t) {
      var n = t.previousSibling,
          r = t.nextSibling;return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, C(e.ownerDocument, e), t;
    }function x(e, t, n) {
      var r = t.parentNode;if (r && r.removeChild(t), t.nodeType === te) {
        var o = t.firstChild;if (null == o) return t;var i = t.lastChild;
      } else o = i = t;var a = n ? n.previousSibling : e.lastChild;o.previousSibling = a, i.nextSibling = n, a ? a.nextSibling = o : e.firstChild = o, null == n ? e.lastChild = i : n.previousSibling = i;do {
        o.parentNode = e;
      } while (o !== i && (o = o.nextSibling));return C(e.ownerDocument || e, e), t.nodeType == te && (t.firstChild = t.lastChild = null), t;
    }function k(e, t) {
      var n = t.parentNode;if (n) {
        var r = e.lastChild;n.removeChild(t);var r = e.lastChild;
      }var r = e.lastChild;return t.parentNode = e, t.previousSibling = r, t.nextSibling = null, r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, C(e.ownerDocument, e, t), t;
    }function S() {
      this._nsMap = {};
    }function T() {}function w() {}function R() {}function A() {}function E() {}function B() {}function _() {}function N() {}function P() {}function I() {}function D() {}function O() {}function M(e, t) {
      var n = [],
          r = 9 == this.nodeType ? this.documentElement : this,
          o = r.prefix,
          i = r.namespaceURI;if (i && null == o) {
        var o = r.lookupPrefix(i);if (null == o) var a = [{ namespace: i, prefix: null }];
      }return U(this, n, e, t, a), n.join("");
    }function L(e, t, n) {
      var r = e.prefix || "",
          o = e.namespaceURI;if (!r && !o) return false;if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === o || "http://www.w3.org/2000/xmlns/" == o) return false;for (var i = n.length; i--;) {
        var a = n[i];if (a.prefix == r) return a.namespace != o;
      }return true;
    }function U(e, t, n, r, o) {
      if (r) {
        if (!(e = r(e))) return;if ("string" == typeof e) return undefined;
      }switch (e.nodeType) {case G:
          o || (o = []);var i = (o.length, e.attributes),
              a = i.length,
              s = e.firstChild,
              c = e.tagName;n = z === e.namespaceURI || n, t.push("<", c);for (var u = 0; u < a; u++) {
            var l = i.item(u);"xmlns" == l.prefix ? o.push({ prefix: l.localName, namespace: l.value }) : "xmlns" == l.nodeName && o.push({ prefix: "", namespace: l.value });
          }for (var u = 0; u < a; u++) {
            var l = i.item(u);if (L(l, n, o)) {
              var d = l.prefix || "",
                  f = l.namespaceURI,
                  p = d ? " xmlns:" + d : " xmlns";t.push(p, '="', f, '"'), o.push({ prefix: d, namespace: f });
            }U(l, t, n, r, o);
          }if (L(e, n, o)) {
            var d = e.prefix || "",
                f = e.namespaceURI,
                p = d ? " xmlns:" + d : " xmlns";t.push(p, '="', f, '"'), o.push({ prefix: d, namespace: f });
          }if (s || n && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
            if (t.push(">"), n && /^script$/i.test(c)) for (; s;) s.data ? t.push(s.data) : U(s, t, n, r, o), s = s.nextSibling;else for (; s;) U(s, t, n, r, o), s = s.nextSibling;t.push("</", c, ">");
          } else t.push("/>");return;case Z:case te:
          for (var s = e.firstChild; s;) U(s, t, n, r, o), s = s.nextSibling;return;case W:
          return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, h), '"');case V:
          return t.push(e.data.replace(/[<&]/g, h));case X:
          return t.push("<![CDATA[", e.data, "]]>");case Y:
          return t.push("\x3c!--", e.data, "--\x3e");case ee:
          var g = e.publicId,
              m = e.systemId;if (t.push("<!DOCTYPE ", e.name), g) t.push(' PUBLIC "', g), m && "." != m && t.push('" "', m), t.push('">');else if (m && "." != m) t.push(' SYSTEM "', m, '">');else {
            var y = e.internalSubset;y && t.push(" [", y, "]"), t.push(">");
          }return;case J:
          return t.push("<?", e.target, " ", e.data, "?>");case $:
          return t.push("&", e.nodeName, ";");default:
          t.push("??", e.nodeName);}
    }function j(e, t, n) {
      var r;switch (t.nodeType) {case G:
          r = t.cloneNode(false), r.ownerDocument = e;case te:
          break;case W:
          n = true;}if (r || (r = t.cloneNode(false)), r.ownerDocument = e, r.parentNode = null, n) for (var o = t.firstChild; o;) r.appendChild(j(e, o, n)), o = o.nextSibling;return r;
    }function H(e, t, n) {
      var r = new t.constructor();for (var o in t) {
        var a = t[o];"object" != typeof a && a != r[o] && (r[o] = a);
      }switch (t.childNodes && (r.childNodes = new i()), r.ownerDocument = e, r.nodeType) {case G:
          var s = t.attributes,
              u = r.attributes = new c(),
              l = s.length;u._ownerElement = r;for (var d = 0; d < l; d++) r.setAttributeNode(H(e, s.item(d), true));break;case W:
          n = true;}if (n) for (var f = t.firstChild; f;) r.appendChild(H(e, f, n)), f = f.nextSibling;return r;
    }function F(e, t, n) {
      e[t] = n;
    }function K(e) {
      switch (e.nodeType) {case G:case te:
          var t = [];for (e = e.firstChild; e;) 7 !== e.nodeType && 8 !== e.nodeType && t.push(K(e)), e = e.nextSibling;return t.join("");default:
          return e.nodeValue;}
    }var z = "http://www.w3.org/1999/xhtml",
        q = {},
        G = q.ELEMENT_NODE = 1,
        W = q.ATTRIBUTE_NODE = 2,
        V = q.TEXT_NODE = 3,
        X = q.CDATA_SECTION_NODE = 4,
        $ = q.ENTITY_REFERENCE_NODE = 5,
        Q = q.ENTITY_NODE = 6,
        J = q.PROCESSING_INSTRUCTION_NODE = 7,
        Y = q.COMMENT_NODE = 8,
        Z = q.DOCUMENT_NODE = 9,
        ee = q.DOCUMENT_TYPE_NODE = 10,
        te = q.DOCUMENT_FRAGMENT_NODE = 11,
        ne = q.NOTATION_NODE = 12,
        re = {},
        oe = {},
        ie = (re.INDEX_SIZE_ERR = (oe[1] = "Index size error", 1), re.DOMSTRING_SIZE_ERR = (oe[2] = "DOMString size error", 2), re.HIERARCHY_REQUEST_ERR = (oe[3] = "Hierarchy request error", 3)),
        ae = (re.WRONG_DOCUMENT_ERR = (oe[4] = "Wrong document", 4), re.INVALID_CHARACTER_ERR = (oe[5] = "Invalid character", 5), re.NO_DATA_ALLOWED_ERR = (oe[6] = "No data allowed", 6), re.NO_MODIFICATION_ALLOWED_ERR = (oe[7] = "No modification allowed", 7), re.NOT_FOUND_ERR = (oe[8] = "Not found", 8)),
        se = (re.NOT_SUPPORTED_ERR = (oe[9] = "Not supported", 9), re.INUSE_ATTRIBUTE_ERR = (oe[10] = "Attribute in use", 10));re.INVALID_STATE_ERR = (oe[11] = "Invalid state", 11), re.SYNTAX_ERR = (oe[12] = "Syntax error", 12), re.INVALID_MODIFICATION_ERR = (oe[13] = "Invalid modification", 13), re.NAMESPACE_ERR = (oe[14] = "Invalid namespace", 14), re.INVALID_ACCESS_ERR = (oe[15] = "Invalid access", 15);o.prototype = Error.prototype, n(re, o), i.prototype = { length: 0, item: function (e) {
        return this[e] || null;
      }, toString: function (e, t) {
        for (var n = [], r = 0; r < this.length; r++) U(this[r], n, e, t);return n.join("");
      } }, a.prototype.item = function (e) {
      return s(this), this[e];
    }, r(a, i), c.prototype = { length: 0, item: i.prototype.item, getNamedItem: function (e) {
        for (var t = this.length; t--;) {
          var n = this[t];if (n.nodeName == e) return n;
        }
      }, setNamedItem: function (e) {
        var t = e.ownerElement;if (t && t != this._ownerElement) throw new o(se);var n = this.getNamedItem(e.nodeName);return l(this._ownerElement, this, e, n), n;
      }, setNamedItemNS: function (e) {
        var t,
            n = e.ownerElement;if (n && n != this._ownerElement) throw new o(se);return t = this.getNamedItemNS(e.namespaceURI, e.localName), l(this._ownerElement, this, e, t), t;
      }, removeNamedItem: function (e) {
        var t = this.getNamedItem(e);return d(this._ownerElement, this, t), t;
      }, removeNamedItemNS: function (e, t) {
        var n = this.getNamedItemNS(e, t);return d(this._ownerElement, this, n), n;
      }, getNamedItemNS: function (e, t) {
        for (var n = this.length; n--;) {
          var r = this[n];if (r.localName == t && r.namespaceURI == e) return r;
        }return null;
      } }, f.prototype = { hasFeature: function (e, t) {
        var n = this._features[e.toLowerCase()];return !(!n || t && !(t in n));
      }, createDocument: function (e, t, n) {
        var r = new m();if (r.implementation = this, r.childNodes = new i(), r.doctype = n, n && r.appendChild(n), t) {
          var o = r.createElementNS(e, t);r.appendChild(o);
        }return r;
      }, createDocumentType: function (e, t, n) {
        var r = new B();return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
      } }, p.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function (e, t) {
        return x(this, e, t);
      }, replaceChild: function (e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
      }, removeChild: function (e) {
        return b(this, e);
      }, appendChild: function (e) {
        return this.insertBefore(e, null);
      }, hasChildNodes: function () {
        return null != this.firstChild;
      }, cloneNode: function (e) {
        return H(this.ownerDocument || this, this, e);
      }, normalize: function () {
        for (var e = this.firstChild; e;) {
          var t = e.nextSibling;t && t.nodeType == V && e.nodeType == V ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t);
        }
      }, isSupported: function (e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
      }, hasAttributes: function () {
        return this.attributes.length > 0;
      }, lookupPrefix: function (e) {
        for (var t = this; t;) {
          var n = t._nsMap;if (n) for (var r in n) if (n[r] == e) return r;t = t.nodeType == W ? t.ownerDocument : t.parentNode;
        }return null;
      }, lookupNamespaceURI: function (e) {
        for (var t = this; t;) {
          var n = t._nsMap;if (n && e in n) return n[e];t = t.nodeType == W ? t.ownerDocument : t.parentNode;
        }return null;
      }, isDefaultNamespace: function (e) {
        return null == this.lookupPrefix(e);
      } }, n(q, p), n(q, p.prototype), m.prototype = { nodeName: "#document", nodeType: Z, doctype: null, documentElement: null, _inc: 1, insertBefore: function (e, t) {
        if (e.nodeType == te) {
          for (var n = e.firstChild; n;) {
            var r = n.nextSibling;this.insertBefore(n, t), n = r;
          }return e;
        }return null == this.documentElement && e.nodeType == G && (this.documentElement = e), x(this, e, t), e.ownerDocument = this, e;
      }, removeChild: function (e) {
        return this.documentElement == e && (this.documentElement = null), b(this, e);
      }, importNode: function (e, t) {
        return j(this, e, t);
      }, getElementById: function (e) {
        var t = null;return g(this.documentElement, function (n) {
          if (n.nodeType == G && n.getAttribute("id") == e) return t = n, true;
        }), t;
      }, createElement: function (e) {
        var t = new S();return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new i(), (t.attributes = new c())._ownerElement = t, t;
      }, createDocumentFragment: function () {
        var e = new I();return e.ownerDocument = this, e.childNodes = new i(), e;
      }, createTextNode: function (e) {
        var t = new R();return t.ownerDocument = this, t.appendData(e), t;
      }, createComment: function (e) {
        var t = new A();return t.ownerDocument = this, t.appendData(e), t;
      }, createCDATASection: function (e) {
        var t = new E();return t.ownerDocument = this, t.appendData(e), t;
      }, createProcessingInstruction: function (e, t) {
        var n = new D();return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n;
      }, createAttribute: function (e) {
        var t = new T();return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = true, t;
      }, createEntityReference: function (e) {
        var t = new P();return t.ownerDocument = this, t.nodeName = e, t;
      }, createElementNS: function (e, t) {
        var n = new S(),
            r = t.split(":"),
            o = n.attributes = new c();return n.childNodes = new i(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, o._ownerElement = n, n;
      }, createAttributeNS: function (e, t) {
        var n = new T(),
            r = t.split(":");return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = true, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
      } }, r(m, p), S.prototype = { nodeType: G, hasAttribute: function (e) {
        return null != this.getAttributeNode(e);
      }, getAttribute: function (e) {
        var t = this.getAttributeNode(e);return t && t.value || "";
      }, getAttributeNode: function (e) {
        return this.attributes.getNamedItem(e);
      }, setAttribute: function (e, t) {
        var n = this.ownerDocument.createAttribute(e);n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
      }, removeAttribute: function (e) {
        var t = this.getAttributeNode(e);t && this.removeAttributeNode(t);
      }, appendChild: function (e) {
        return e.nodeType === te ? this.insertBefore(e, null) : k(this, e);
      }, setAttributeNode: function (e) {
        return this.attributes.setNamedItem(e);
      }, setAttributeNodeNS: function (e) {
        return this.attributes.setNamedItemNS(e);
      }, removeAttributeNode: function (e) {
        return this.attributes.removeNamedItem(e.nodeName);
      }, removeAttributeNS: function (e, t) {
        var n = this.getAttributeNodeNS(e, t);n && this.removeAttributeNode(n);
      }, hasAttributeNS: function (e, t) {
        return null != this.getAttributeNodeNS(e, t);
      }, getAttributeNS: function (e, t) {
        var n = this.getAttributeNodeNS(e, t);return n && n.value || "";
      }, setAttributeNS: function (e, t, n) {
        var r = this.ownerDocument.createAttributeNS(e, t);r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
      }, getAttributeNodeNS: function (e, t) {
        return this.attributes.getNamedItemNS(e, t);
      }, getElementsByTagName: function (e) {
        return new a(this, function (t) {
          var n = [];return g(t, function (r) {
            r === t || r.nodeType != G || "*" !== e && r.tagName != e || n.push(r);
          }), n;
        });
      }, getElementsByTagNameNS: function (e, t) {
        return new a(this, function (n) {
          var r = [];return g(n, function (o) {
            o === n || o.nodeType !== G || "*" !== e && o.namespaceURI !== e || "*" !== t && o.localName != t || r.push(o);
          }), r;
        });
      } }, m.prototype.getElementsByTagName = S.prototype.getElementsByTagName, m.prototype.getElementsByTagNameNS = S.prototype.getElementsByTagNameNS, r(S, p), T.prototype.nodeType = W, r(T, p), w.prototype = { data: "", substringData: function (e, t) {
        return this.data.substring(e, e + t);
      }, appendData: function (e) {
        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
      }, insertData: function (e, t) {
        this.replaceData(e, 0, t);
      }, appendChild: function (e) {
        throw new Error(oe[ie]);
      }, deleteData: function (e, t) {
        this.replaceData(e, t, "");
      }, replaceData: function (e, t, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, this.length = n.length;
      } }, r(w, p), R.prototype = { nodeName: "#text", nodeType: V, splitText: function (e) {
        var t = this.data,
            n = t.substring(e);t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;var r = this.ownerDocument.createTextNode(n);return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
      } }, r(R, w), A.prototype = { nodeName: "#comment", nodeType: Y }, r(A, w), E.prototype = { nodeName: "#cdata-section", nodeType: X }, r(E, w), B.prototype.nodeType = ee, r(B, p), _.prototype.nodeType = ne, r(_, p), N.prototype.nodeType = Q, r(N, p), P.prototype.nodeType = $, r(P, p), I.prototype.nodeName = "#document-fragment", I.prototype.nodeType = te, r(I, p), D.prototype.nodeType = J, r(D, p), O.prototype.serializeToString = function (e, t, n) {
      return M.call(e, t, n);
    }, p.prototype.toString = M;try {
      Object.defineProperty && (Object.defineProperty(a.prototype, "length", { get: function () {
          return s(this), this.$$length;
        } }), Object.defineProperty(p.prototype, "textContent", { get: function () {
          return K(this);
        }, set: function (e) {
          switch (this.nodeType) {case G:case te:
              for (; this.firstChild;) this.removeChild(this.firstChild);(e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));break;default:
              this.data = e, this.value = e, this.nodeValue = e;}
        } }), F = function (e, t, n) {
        e["$$" + t] = n;
      });
    } catch (e) {}t.DOMImplementation = f, t.XMLSerializer = O;
  }, function (e, t) {
    var n = function (e) {
      var t = {},
          n = function (e) {
        return !t[e] && (t[e] = []), t[e];
      };e.on = function (e, t) {
        "task-list-update" === e && console.warn('warning: Event "' + e + '" has been deprecated. Please use "list-update" instead.'), n(e).push(t);
      }, e.off = function (e, t) {
        for (var r = n(e), o = r.length - 1; o >= 0; o--) t === r[o] && r.splice(o, 1);
      }, e.emit = function (e, t) {
        for (var r = n(e).map(function (e) {
          return e;
        }), o = 0; o < r.length; o++) r[o](t);
      };
    },
        r = function () {
      n(this);
    };e.exports.init = n, e.exports.EventProxy = r;
  }, function (e, t, n) {
    var r,
        o,
        i = n(0),
        a = "cos_sdk_upload_cache",
        s = function () {
      if (!r) {
        r = JSON.parse(localStorage.getItem(a) || "[]") || [];for (var e = false, t = Math.round(Date.now() / 1e3), n = r.length - 1; n >= 0; n--) {
          var o = r[n][2];(!o || o + 2592e3 < t) && (r.splice(n, 1), e = true);
        }e && localStorage.setItem(a, JSON.stringify(r));
      }
    },
        c = function () {
      o || (o = setTimeout(function () {
        localStorage.setItem(a, JSON.stringify(r)), o = null;
      }, 400));
    },
        u = { using: {}, setUsing: function (e) {
        u.using[e] = true;
      }, removeUsing: function (e) {
        delete u.using[e];
      }, getFileId: function (e, t, n, r) {
        return e.name && e.size && e.lastModifiedDate && t ? i.md5([e.name, e.size, e.lastModifiedDate, t, n, r].join("::")) : null;
      }, getUploadIdList: function (e) {
        if (!e) return null;s();for (var t = [], n = 0; n < r.length; n++) r[n][0] === e && t.push(r[n][1]);return t.length ? t : null;
      }, saveUploadId: function (e, t, n) {
        if (s(), e) {
          for (var o = r.length - 1; o >= 0; o--) {
            var i = r[o];i[0] === e && i[1] === t && r.splice(o, 1);
          }r.unshift([e, t, Math.round(Date.now() / 1e3)]), r.length > n && r.splice(n), c();
        }
      }, removeUploadId: function (e) {
        s(), delete u.using[e];for (var t = r.length - 1; t >= 0; t--) r[t][1] === e && r.splice(t, 1);c();
      } };e.exports = u;
  }, function (e, t, n) {
    var r = n(5);e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        o = n(2),
        i = n(12),
        a = n(13),
        s = n(15),
        c = { AppId: "", SecretId: "", SecretKey: "", XCosSecurityToken: "", ChunkRetryTimes: 2, FileParallelLimit: 3, ChunkParallelLimit: 3, ChunkSize: 1048576, SliceSize: 1048576, CopyChunkParallelLimit: 20, CopyChunkSize: 10485760, CopySliceSize: 10485760, MaxPartNumber: 1e4, ProgressInterval: 1e3, UploadQueueSize: 1e4, Domain: "", ServiceDomain: "", Protocol: "", CompatibilityMode: false, ForcePathStyle: false, UseRawKey: false, Timeout: 0, CorrectClockSkew: true, SystemClockOffset: 0, UploadCheckContentMd5: false, UploadAddMetaMd5: false, UploadIdCacheLimit: 50 },
        u = function (e) {
      this.options = r.extend(r.clone(c), e || {}), this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit), this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit), this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes), this.options.ChunkSize = Math.max(1048576, this.options.ChunkSize), this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit), this.options.CopyChunkSize = Math.max(1048576, this.options.CopyChunkSize), this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize), this.options.MaxPartNumber = Math.max(1024, Math.min(1e4, this.options.MaxPartNumber)), this.options.Timeout = Math.max(0, this.options.Timeout), this.options.AppId && console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").'), o.init(this), i.init(this);
    };a.init(u, i), s.init(u, i), u.getAuthorization = r.getAuth, u.version = "0.5.23", e.exports = u;
  }, function (e, t) {
    function n(e, t) {
      var n = e[0],
          r = e[1],
          c = e[2],
          u = e[3];n = o(n, r, c, u, t[0], 7, -680876936), u = o(u, n, r, c, t[1], 12, -389564586), c = o(c, u, n, r, t[2], 17, 606105819), r = o(r, c, u, n, t[3], 22, -1044525330), n = o(n, r, c, u, t[4], 7, -176418897), u = o(u, n, r, c, t[5], 12, 1200080426), c = o(c, u, n, r, t[6], 17, -1473231341), r = o(r, c, u, n, t[7], 22, -45705983), n = o(n, r, c, u, t[8], 7, 1770035416), u = o(u, n, r, c, t[9], 12, -1958414417), c = o(c, u, n, r, t[10], 17, -42063), r = o(r, c, u, n, t[11], 22, -1990404162), n = o(n, r, c, u, t[12], 7, 1804603682), u = o(u, n, r, c, t[13], 12, -40341101), c = o(c, u, n, r, t[14], 17, -1502002290), r = o(r, c, u, n, t[15], 22, 1236535329), n = i(n, r, c, u, t[1], 5, -165796510), u = i(u, n, r, c, t[6], 9, -1069501632), c = i(c, u, n, r, t[11], 14, 643717713), r = i(r, c, u, n, t[0], 20, -373897302), n = i(n, r, c, u, t[5], 5, -701558691), u = i(u, n, r, c, t[10], 9, 38016083), c = i(c, u, n, r, t[15], 14, -660478335), r = i(r, c, u, n, t[4], 20, -405537848), n = i(n, r, c, u, t[9], 5, 568446438), u = i(u, n, r, c, t[14], 9, -1019803690), c = i(c, u, n, r, t[3], 14, -187363961), r = i(r, c, u, n, t[8], 20, 1163531501), n = i(n, r, c, u, t[13], 5, -1444681467), u = i(u, n, r, c, t[2], 9, -51403784), c = i(c, u, n, r, t[7], 14, 1735328473), r = i(r, c, u, n, t[12], 20, -1926607734), n = a(n, r, c, u, t[5], 4, -378558), u = a(u, n, r, c, t[8], 11, -2022574463), c = a(c, u, n, r, t[11], 16, 1839030562), r = a(r, c, u, n, t[14], 23, -35309556), n = a(n, r, c, u, t[1], 4, -1530992060), u = a(u, n, r, c, t[4], 11, 1272893353), c = a(c, u, n, r, t[7], 16, -155497632), r = a(r, c, u, n, t[10], 23, -1094730640), n = a(n, r, c, u, t[13], 4, 681279174), u = a(u, n, r, c, t[0], 11, -358537222), c = a(c, u, n, r, t[3], 16, -722521979), r = a(r, c, u, n, t[6], 23, 76029189), n = a(n, r, c, u, t[9], 4, -640364487), u = a(u, n, r, c, t[12], 11, -421815835), c = a(c, u, n, r, t[15], 16, 530742520), r = a(r, c, u, n, t[2], 23, -995338651), n = s(n, r, c, u, t[0], 6, -198630844), u = s(u, n, r, c, t[7], 10, 1126891415), c = s(c, u, n, r, t[14], 15, -1416354905), r = s(r, c, u, n, t[5], 21, -57434055), n = s(n, r, c, u, t[12], 6, 1700485571), u = s(u, n, r, c, t[3], 10, -1894986606), c = s(c, u, n, r, t[10], 15, -1051523), r = s(r, c, u, n, t[1], 21, -2054922799), n = s(n, r, c, u, t[8], 6, 1873313359), u = s(u, n, r, c, t[15], 10, -30611744), c = s(c, u, n, r, t[6], 15, -1560198380), r = s(r, c, u, n, t[13], 21, 1309151649), n = s(n, r, c, u, t[4], 6, -145523070), u = s(u, n, r, c, t[11], 10, -1120210379), c = s(c, u, n, r, t[2], 15, 718787259), r = s(r, c, u, n, t[9], 21, -343485551), e[0] = y(n, e[0]), e[1] = y(r, e[1]), e[2] = y(c, e[2]), e[3] = y(u, e[3]);
    }function r(e, t, n, r, o, i) {
      return t = y(y(t, e), y(r, i)), y(t << o | t >>> 32 - o, n);
    }function o(e, t, n, o, i, a, s) {
      return r(t & n | ~t & o, e, t, i, a, s);
    }function i(e, t, n, o, i, a, s) {
      return r(t & o | n & ~o, e, t, i, a, s);
    }function a(e, t, n, o, i, a, s) {
      return r(t ^ n ^ o, e, t, i, a, s);
    }function s(e, t, n, o, i, a, s) {
      return r(n ^ (t | ~o), e, t, i, a, s);
    }function c(e) {
      var t,
          r = e.length,
          o = [1732584193, -271733879, -1732584194, 271733878];for (t = 64; t <= e.length; t += 64) n(o, l(e.substring(t - 64, t)));e = e.substring(t - 64);var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (t = 0; t < e.length; t++) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (n(o, i), t = 0; t < 16; t++) i[t] = 0;return i[14] = 8 * r, n(o, i), o;
    }function u() {
      var e = {};return e.state = [1732584193, -271733879, -1732584194, 271733878], e.tail = "", e.size = 0, e.update = function (t, r) {
        r || (t = p(t)), e.size += t.length, t = e.tail + t;var o,
            i = e.state;for (o = 64; o <= t.length; o += 64) n(i, l(t.substring(o - 64, o)));return e.tail = t.substring(o - 64), e;
      }, e.digest = function (t) {
        var r,
            o = e.size,
            i = e.state,
            a = e.tail,
            s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (r = 0; r < a.length; r++) s[r >> 2] |= a.charCodeAt(r) << (r % 4 << 3);if (s[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (n(i, s), r = 0; r < 16; r++) s[r] = 0;return s[14] = 8 * o, n(i, s), "hex" === t ? f(i) : "base64" === t ? g(f(i)) : i;
      }, e;
    }function l(e) {
      var t,
          n = [];for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);return n;
    }function d(e) {
      for (var t = "", n = 0; n < 4; n++) t += m[e >> 8 * n + 4 & 15] + m[e >> 8 * n & 15];return t;
    }function f(e) {
      for (var t = 0; t < e.length; t++) e[t] = d(e[t]);return e.join("");
    }function p(e) {
      e = e.replace(/\r\n/g, "\n");for (var t = "", n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128));
      }return t;
    }function h(e, t) {
      return t || (e = p(e)), f(c(e));
    }var g = function (e) {
      var t,
          n,
          r,
          o = "";for (t = 0, n = e.length / 2; t < n; t++) r = parseInt(e[2 * t] + e[2 * t + 1], 16), o += String.fromCharCode(r);return btoa(o);
    },
        m = "0123456789abcdef".split(""),
        y = function (e, t) {
      return e + t & 4294967295;
    };"5d41402abc4b2a76b9719d911017c592" != h("hello") && (y = function (e, t) {
      var n = (65535 & e) + (65535 & t);return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
    }), h.getCtx = u, e.exports = h;
  }, function (e, t, n) {
    var r = r || function (e, t) {
      var n = {},
          r = n.lib = {},
          o = function () {},
          i = r.Base = { extend: function (e) {
          o.prototype = this;var t = new o();return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function () {
            t.$super.init.apply(this, arguments);
          }), t.init.prototype = t, t.$super = this, t;
        }, create: function () {
          var e = this.extend();return e.init.apply(e, arguments), e;
        }, init: function () {}, mixIn: function (e) {
          for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);e.hasOwnProperty("toString") && (this.toString = e.toString);
        }, clone: function () {
          return this.init.prototype.extend(this);
        } },
          a = r.WordArray = i.extend({ init: function (e, t) {
          e = this.words = e || [], this.sigBytes = undefined != t ? t : 4 * e.length;
        }, toString: function (e) {
          return (e || c).stringify(this);
        }, concat: function (e) {
          var t = this.words,
              n = e.words,
              r = this.sigBytes;if (e = e.sigBytes, this.clamp(), r % 4) for (var o = 0; o < e; o++) t[r + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (r + o) % 4 * 8;else if (65535 < n.length) for (o = 0; o < e; o += 4) t[r + o >>> 2] = n[o >>> 2];else t.push.apply(t, n);return this.sigBytes += e, this;
        }, clamp: function () {
          var t = this.words,
              n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
        }, clone: function () {
          var e = i.clone.call(this);return e.words = this.words.slice(0), e;
        }, random: function (t) {
          for (var n = [], r = 0; r < t; r += 4) n.push(4294967296 * e.random() | 0);return new a.init(n, t);
        } }),
          s = n.enc = {},
          c = s.Hex = { stringify: function (e) {
          var t = e.words;e = e.sigBytes;for (var n = [], r = 0; r < e; r++) {
            var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
          }return n.join("");
        }, parse: function (e) {
          for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;return new a.init(n, t / 2);
        } },
          u = s.Latin1 = { stringify: function (e) {
          var t = e.words;e = e.sigBytes;for (var n = [], r = 0; r < e; r++) n.push(String.fromCharCode(t[r >>> 2] >>> 24 - r % 4 * 8 & 255));return n.join("");
        }, parse: function (e) {
          for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;return new a.init(n, t);
        } },
          l = s.Utf8 = { stringify: function (e) {
          try {
            return decodeURIComponent(escape(u.stringify(e)));
          } catch (e) {
            throw Error("Malformed UTF-8 data");
          }
        }, parse: function (e) {
          return u.parse(unescape(encodeURIComponent(e)));
        } },
          d = r.BufferedBlockAlgorithm = i.extend({ reset: function () {
          this._data = new a.init(), this._nDataBytes = 0;
        }, _append: function (e) {
          "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
        }, _process: function (t) {
          var n = this._data,
              r = n.words,
              o = n.sigBytes,
              i = this.blockSize,
              s = o / (4 * i),
              s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0);if (t = s * i, o = e.min(4 * t, o), t) {
            for (var c = 0; c < t; c += i) this._doProcessBlock(r, c);c = r.splice(0, t), n.sigBytes -= o;
          }return new a.init(c, o);
        }, clone: function () {
          var e = i.clone.call(this);return e._data = this._data.clone(), e;
        }, _minBufferSize: 0 });r.Hasher = d.extend({ cfg: i.extend(), init: function (e) {
          this.cfg = this.cfg.extend(e), this.reset();
        }, reset: function () {
          d.reset.call(this), this._doReset();
        }, update: function (e) {
          return this._append(e), this._process(), this;
        }, finalize: function (e) {
          return e && this._append(e), this._doFinalize();
        }, blockSize: 16, _createHelper: function (e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        }, _createHmacHelper: function (e) {
          return function (t, n) {
            return new f.HMAC.init(e, n).finalize(t);
          };
        } });var f = n.algo = {};return n;
    }(Math);!function () {
      var e = r,
          t = e.lib,
          n = t.WordArray,
          o = t.Hasher,
          i = [],
          t = e.algo.SHA1 = o.extend({ _doReset: function () {
          this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        }, _doProcessBlock: function (e, t) {
          for (var n = this._hash.words, r = n[0], o = n[1], a = n[2], s = n[3], c = n[4], u = 0; 80 > u; u++) {
            if (16 > u) i[u] = 0 | e[t + u];else {
              var l = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];i[u] = l << 1 | l >>> 31;
            }l = (r << 5 | r >>> 27) + c + i[u], l = 20 > u ? l + (1518500249 + (o & a | ~o & s)) : 40 > u ? l + (1859775393 + (o ^ a ^ s)) : 60 > u ? l + ((o & a | o & s | a & s) - 1894007588) : l + ((o ^ a ^ s) - 899497514), c = s, s = a, a = o << 30 | o >>> 2, o = r, r = l;
          }n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0;
        }, _doFinalize: function () {
          var e = this._data,
              t = e.words,
              n = 8 * this._nDataBytes,
              r = 8 * e.sigBytes;return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
        }, clone: function () {
          var e = o.clone.call(this);return e._hash = this._hash.clone(), e;
        } });e.SHA1 = o._createHelper(t), e.HmacSHA1 = o._createHmacHelper(t);
    }(), function () {
      var e = r,
          t = e.enc.Utf8;e.algo.HMAC = e.lib.Base.extend({ init: function (e, n) {
          e = this._hasher = new e.init(), "string" == typeof n && (n = t.parse(n));var r = e.blockSize,
              o = 4 * r;n.sigBytes > o && (n = e.finalize(n)), n.clamp();for (var i = this._oKey = n.clone(), a = this._iKey = n.clone(), s = i.words, c = a.words, u = 0; u < r; u++) s[u] ^= 1549556828, c[u] ^= 909522486;i.sigBytes = a.sigBytes = o, this.reset();
        }, reset: function () {
          var e = this._hasher;e.reset(), e.update(this._iKey);
        }, update: function (e) {
          return this._hasher.update(e), this;
        }, finalize: function (e) {
          var t = this._hasher;return e = t.finalize(e), t.reset(), t.finalize(this._oKey.clone().concat(e));
        } });
    }(), function () {
      var e = r,
          t = e.lib,
          n = t.WordArray,
          o = e.enc;o.Base64 = { stringify: function (e) {
          var t = e.words,
              n = e.sigBytes,
              r = this._map;e.clamp();for (var o = [], i = 0; i < n; i += 3) for (var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255, s = t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255, c = t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, u = a << 16 | s << 8 | c, l = 0; l < 4 && i + .75 * l < n; l++) o.push(r.charAt(u >>> 6 * (3 - l) & 63));var d = r.charAt(64);if (d) for (; o.length % 4;) o.push(d);return o.join("");
        }, parse: function (e) {
          var t = e.length,
              r = this._map,
              o = r.charAt(64);if (o) {
            var i = e.indexOf(o);-1 != i && (t = i);
          }for (var a = [], s = 0, c = 0; c < t; c++) if (c % 4) {
            var u = r.indexOf(e.charAt(c - 1)) << c % 4 * 2,
                l = r.indexOf(e.charAt(c)) >>> 6 - c % 4 * 2;a[s >>> 2] |= (u | l) << 24 - s % 4 * 8, s++;
          }return n.create(a, s);
        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), e.exports = r;
  }, function (e, t, n) {
    var r = n(9).DOMParser,
        o = function () {
      this.version = "1.3.5";var e = { mergeCDATA: true, normalize: true, stripElemPrefix: true },
          t = new RegExp(/(?!xmlns)^.*:/);new RegExp(/^\s+|\s+$/g);return this.grokType = function (e) {
        return (/^\s*$/.test(e) ? null : /^(?:true|false)$/i.test(e) ? "true" === e.toLowerCase() : isFinite(e) ? parseFloat(e) : e
        );
      }, this.parseString = function (e, t) {
        if (e) {
          var n = this.stringToXML(e);return n.getElementsByTagName("parsererror").length ? null : this.parseXML(n, t);
        }return null;
      }, this.parseXML = function (n, r) {
        for (var i in r) e[i] = r[i];var a = {},
            s = 0,
            c = "";if (n.childNodes.length) for (var u, l, d, f = 0; f < n.childNodes.length; f++) u = n.childNodes.item(f), 4 === u.nodeType ? e.mergeCDATA && (c += u.nodeValue) : 3 === u.nodeType ? c += u.nodeValue : 1 === u.nodeType && (0 === s && (a = {}), l = e.stripElemPrefix ? u.nodeName.replace(t, "") : u.nodeName, d = o.parseXML(u), a.hasOwnProperty(l) ? (a[l].constructor !== Array && (a[l] = [a[l]]), a[l].push(d)) : (a[l] = d, s++));return Object.keys(a).length || (a = c || ""), a;
      }, this.xmlToString = function (e) {
        try {
          return e.xml ? e.xml : new XMLSerializer().serializeToString(e);
        } catch (e) {
          return null;
        }
      }, this.stringToXML = function (e) {
        try {
          var t = null;if (window.DOMParser) {
            return t = new r().parseFromString(e, "text/xml");
          }return t = new ActiveXObject("Microsoft.XMLDOM"), t.async = false, t.loadXML(e), t;
        } catch (e) {
          return null;
        }
      }, this;
    }.call({}),
        i = function (e) {
      return o.parseString(e);
    };e.exports = i;
  }, function (e, t, n) {
    function r(e) {
      this.options = e || { locator: {} };
    }function o(e, t, n) {
      function r(t) {
        var r = e[t];!r && a && (r = 2 == e.length ? function (n) {
          e(t, n);
        } : e), o[t] = r && function (e) {
          r("[xmldom " + t + "]\t" + e + s(n));
        } || function () {};
      }if (!e) {
        if (t instanceof i) return t;e = t;
      }var o = {},
          a = e instanceof Function;return n = n || {}, r("warning"), r("error"), r("fatalError"), o;
    }function i() {
      this.cdata = false;
    }function a(e, t) {
      t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
    }function s(e) {
      if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
    }function c(e, t, n) {
      return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
    }function u(e, t) {
      e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
    }r.prototype.parseFromString = function (e, t) {
      var n = this.options,
          r = new l(),
          a = n.domBuilder || new i(),
          s = n.errorHandler,
          c = n.locator,
          u = n.xmlns || {},
          d = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };return c && a.setDocumentLocator(c), r.errorHandler = o(s, a, c), r.domBuilder = n.domBuilder || a, /\/x?html?$/.test(t) && (d.nbsp = "\xa0", d.copy = "\xa9", u[""] = "http://www.w3.org/1999/xhtml"), u.xml = u.xml || "http://www.w3.org/XML/1998/namespace", e ? r.parse(e, u, d) : r.errorHandler.error("invalid doc source"), a.doc;
    }, i.prototype = { startDocument: function () {
        this.doc = new d().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
      }, startElement: function (e, t, n, r) {
        var o = this.doc,
            i = o.createElementNS(e, n || t),
            s = r.length;u(this, i), this.currentElement = i, this.locator && a(this.locator, i);for (var c = 0; c < s; c++) {
          var e = r.getURI(c),
              l = r.getValue(c),
              n = r.getQName(c),
              d = o.createAttributeNS(e, n);this.locator && a(r.getLocator(c), d), d.value = d.nodeValue = l, i.setAttributeNode(d);
        }
      }, endElement: function (e, t, n) {
        var r = this.currentElement;r.tagName;this.currentElement = r.parentNode;
      }, startPrefixMapping: function (e, t) {}, endPrefixMapping: function (e) {}, processingInstruction: function (e, t) {
        var n = this.doc.createProcessingInstruction(e, t);this.locator && a(this.locator, n), u(this, n);
      }, ignorableWhitespace: function (e, t, n) {}, characters: function (e, t, n) {
        if (e = c.apply(this, arguments)) {
          if (this.cdata) var r = this.doc.createCDATASection(e);else var r = this.doc.createTextNode(e);this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), this.locator && a(this.locator, r);
        }
      }, skippedEntity: function (e) {}, endDocument: function () {
        this.doc.normalize();
      }, setDocumentLocator: function (e) {
        (this.locator = e) && (e.lineNumber = 0);
      }, comment: function (e, t, n) {
        e = c.apply(this, arguments);var r = this.doc.createComment(e);this.locator && a(this.locator, r), u(this, r);
      }, startCDATA: function () {
        this.cdata = true;
      }, endCDATA: function () {
        this.cdata = false;
      }, startDTD: function (e, t, n) {
        var r = this.doc.implementation;if (r && r.createDocumentType) {
          var o = r.createDocumentType(e, t, n);this.locator && a(this.locator, o), u(this, o);
        }
      }, warning: function (e) {
        console.warn("[xmldom warning]\t" + e, s(this.locator));
      }, error: function (e) {
        console.error("[xmldom error]\t" + e, s(this.locator));
      }, fatalError: function (e) {
        throw console.error("[xmldom fatalError]\t" + e, s(this.locator)), e;
      } }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
      i.prototype[e] = function () {
        return null;
      };
    });var l = n(10).XMLReader,
        d = t.DOMImplementation = n(1).DOMImplementation;t.XMLSerializer = n(1).XMLSerializer, t.DOMParser = r;
  }, function (e, t) {
    function n() {}function r(e, t, n, r, u) {
      function p(e) {
        if (e > 65535) {
          e -= 65536;var t = 55296 + (e >> 10),
              n = 56320 + (1023 & e);return String.fromCharCode(t, n);
        }return String.fromCharCode(e);
      }function h(e) {
        var t = e.slice(1, -1);return t in n ? n[t] : "#" === t.charAt(0) ? p(parseInt(t.substr(1).replace("x", "0x"))) : (u.error("entity not found:" + e), e);
      }function g(t) {
        if (t > S) {
          var n = e.substring(S, t).replace(/&#?\w+;/g, h);b && m(S), r.characters(n, 0, t - S), S = t;
        }
      }function m(t, n) {
        for (; t >= v && (n = C.exec(e));) y = n.index, v = y + n[0].length, b.lineNumber++;b.columnNumber = t - y + 1;
      }for (var y = 0, v = 0, C = /.*(?:\r\n?|\n)|.*$/g, b = r.locator, x = [{ currentNSMap: t }], k = {}, S = 0;;) {
        try {
          var T = e.indexOf("<", S);if (T < 0) {
            if (!e.substr(S).match(/^\s*$/)) {
              var w = r.doc,
                  R = w.createTextNode(e.substr(S));w.appendChild(R), r.currentElement = R;
            }return;
          }switch (T > S && g(T), e.charAt(T + 1)) {case "/":
              var A = e.indexOf(">", T + 3),
                  E = e.substring(T + 2, A),
                  B = x.pop();A < 0 ? (E = e.substring(T + 2).replace(/[\s<].*/, ""), u.error("end tag name: " + E + " is not complete:" + B.tagName), A = T + 1 + E.length) : E.match(/\s</) && (E = E.replace(/[\s<].*/, ""), u.error("end tag name: " + E + " maybe not complete"), A = T + 1 + E.length);var _ = B.localNSMap,
                  N = B.tagName == E;if (N || B.tagName && B.tagName.toLowerCase() == E.toLowerCase()) {
                if (r.endElement(B.uri, B.localName, E), _) for (var P in _) r.endPrefixMapping(P);N || u.fatalError("end tag name: " + E + " is not match the current start tagName:" + B.tagName);
              } else x.push(B);A++;break;case "?":
              b && m(T), A = d(e, T, r);break;case "!":
              b && m(T), A = l(e, T, r, u);break;default:
              b && m(T);var I = new f(),
                  D = x[x.length - 1].currentNSMap,
                  A = i(e, T, I, D, h, u),
                  O = I.length;if (!I.closed && c(e, A, I.tagName, k) && (I.closed = true, n.nbsp || u.warning("unclosed xml attribute")), b && O) {
                for (var M = o(b, {}), L = 0; L < O; L++) {
                  var U = I[L];m(U.offset), U.locator = o(b, {});
                }r.locator = M, a(I, r, D) && x.push(I), r.locator = b;
              } else a(I, r, D) && x.push(I);"http://www.w3.org/1999/xhtml" !== I.uri || I.closed ? A++ : A = s(e, A, I.tagName, h, r);}
        } catch (e) {
          u.error("element parse error: " + e), A = -1;
        }A > S ? S = A : g(Math.max(T, S) + 1);
      }
    }function o(e, t) {
      return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
    }function i(e, t, n, r, o, i) {
      for (var a, s, c = ++t, u = v;;) {
        var l = e.charAt(c);switch (l) {case "=":
            if (u === C) a = e.slice(t, c), u = x;else {
              if (u !== b) throw new Error("attribute equal must after attrName");u = x;
            }break;case "'":case '"':
            if (u === x || u === C) {
              if (u === C && (i.warning('attribute value must after "="'), a = e.slice(t, c)), t = c + 1, !((c = e.indexOf(l, t)) > 0)) throw new Error("attribute value no end '" + l + "' match");s = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, s, t - 1), u = S;
            } else {
              if (u != k) throw new Error('attribute value must after "="');s = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, s, t), i.warning('attribute "' + a + '" missed start quot(' + l + ")!!"), t = c + 1, u = S;
            }break;case "/":
            switch (u) {case v:
                n.setTagName(e.slice(t, c));case S:case T:case w:
                u = w, n.closed = true;case k:case C:case b:
                break;default:
                throw new Error("attribute invalid close char('/')");}break;case "":
            return i.error("unexpected end of input"), u == v && n.setTagName(e.slice(t, c)), c;case ">":
            switch (u) {case v:
                n.setTagName(e.slice(t, c));case S:case T:case w:
                break;case k:case C:
                s = e.slice(t, c), "/" === s.slice(-1) && (n.closed = true, s = s.slice(0, -1));case b:
                u === b && (s = a), u == k ? (i.warning('attribute "' + s + '" missed quot(")!!'), n.add(a, s.replace(/&#?\w+;/g, o), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && s.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + s + '" missed value!! "' + s + '" instead!!'), n.add(s, s, t));break;case x:
                throw new Error("attribute value missed!!");}return c;case "\x80":
            l = " ";default:
            if (l <= " ") switch (u) {case v:
                n.setTagName(e.slice(t, c)), u = T;break;case C:
                a = e.slice(t, c), u = b;break;case k:
                var s = e.slice(t, c).replace(/&#?\w+;/g, o);i.warning('attribute "' + s + '" missed quot(")!!'), n.add(a, s, t);case S:
                u = T;} else switch (u) {case b:
                n.tagName;"http://www.w3.org/1999/xhtml" === r[""] && a.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), n.add(a, a, t), t = c, u = C;break;case S:
                i.warning('attribute space is required"' + a + '"!!');case T:
                u = C, t = c;break;case x:
                u = k, t = c;break;case w:
                throw new Error("elements closed character '/' and '>' must be connected to");}}c++;
      }
    }function a(e, t, n) {
      for (var r = e.tagName, o = null, i = e.length; i--;) {
        var a = e[i],
            s = a.qName,
            c = a.value,
            l = s.indexOf(":");if (l > 0) var d = a.prefix = s.slice(0, l),
            f = s.slice(l + 1),
            p = "xmlns" === d && f;else f = s, d = null, p = undefined;a.localName = f, false !== p && (null == o && (o = {}, u(n, n = {})), n[p] = o[p] = c, a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(p, c));
      }for (var i = e.length; i--;) {
        a = e[i];var d = a.prefix;d && ("xml" === d && (a.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== d && (a.uri = n[d || ""]));
      }var l = r.indexOf(":");l > 0 ? (d = e.prefix = r.slice(0, l), f = e.localName = r.slice(l + 1)) : (d = null, f = e.localName = r);var h = e.uri = n[d || ""];if (t.startElement(h, f, r, e), !e.closed) return e.currentNSMap = n, e.localNSMap = o, true;if (t.endElement(h, f, r), o) for (d in o) t.endPrefixMapping(d);
    }function s(e, t, n, r, o) {
      if (/^(?:script|textarea)$/i.test(n)) {
        var i = e.indexOf("</" + n + ">", t),
            a = e.substring(t + 1, i);if (/[&<]/.test(a)) return (/^script$/i.test(n) ? (o.characters(a, 0, a.length), i) : (a = a.replace(/&#?\w+;/g, r), o.characters(a, 0, a.length), i)
        );
      }return t + 1;
    }function c(e, t, n, r) {
      var o = r[n];return null == o && (o = e.lastIndexOf("</" + n + ">"), o < t && (o = e.lastIndexOf("</" + n)), r[n] = o), o < t;
    }function u(e, t) {
      for (var n in e) t[n] = e[n];
    }function l(e, t, n, r) {
      switch (e.charAt(t + 2)) {case "-":
          if ("-" === e.charAt(t + 3)) {
            var o = e.indexOf("--\x3e", t + 4);return o > t ? (n.comment(e, t + 4, o - t - 4), o + 3) : (r.error("Unclosed comment"), -1);
          }return -1;default:
          if ("CDATA[" == e.substr(t + 3, 6)) {
            var o = e.indexOf("]]>", t + 9);return n.startCDATA(), n.characters(e, t + 9, o - t - 9), n.endCDATA(), o + 3;
          }var i = h(e, t),
              a = i.length;if (a > 1 && /!doctype/i.test(i[0][0])) {
            var s = i[1][0],
                c = a > 3 && /^public$/i.test(i[2][0]) && i[3][0],
                u = a > 4 && i[4][0],
                l = i[a - 1];return n.startDTD(s, c && c.replace(/^(['"])(.*?)\1$/, "$2"), u && u.replace(/^(['"])(.*?)\1$/, "$2")), n.endDTD(), l.index + l[0].length;
          }}return -1;
    }function d(e, t, n) {
      var r = e.indexOf("?>", t);if (r) {
        var o = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (o) {
          o[0].length;return n.processingInstruction(o[1], o[2]), r + 2;
        }return -1;
      }return -1;
    }function f(e) {}function p(e, t) {
      return e.__proto__ = t, e;
    }function h(e, t) {
      var n,
          r = [],
          o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (o.lastIndex = t, o.exec(e); n = o.exec(e);) if (r.push(n), n[1]) return r;
    }var g = /[A-Z_a-z\xC0-\xD6\xD8-\xF6ø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�]/,
        m = new RegExp("[\\-\\.0-9" + g.source.slice(1, -1) + "\·\̀-\ͯ\‿-\⁀]"),
        y = new RegExp("^" + g.source + m.source + "*(?::" + g.source + m.source + "*)?$"),
        v = 0,
        C = 1,
        b = 2,
        x = 3,
        k = 4,
        S = 5,
        T = 6,
        w = 7;n.prototype = { parse: function (e, t, n) {
        var o = this.domBuilder;o.startDocument(), u(t, t = {}), r(e, t, n, o, this.errorHandler), o.endDocument();
      } }, f.prototype = { setTagName: function (e) {
        if (!y.test(e)) throw new Error("invalid tagName:" + e);this.tagName = e;
      }, add: function (e, t, n) {
        if (!y.test(e)) throw new Error("invalid attribute:" + e);this[this.length++] = { qName: e, value: t, offset: n };
      }, length: 0, getLocalName: function (e) {
        return this[e].localName;
      }, getLocator: function (e) {
        return this[e].locator;
      }, getQName: function (e) {
        return this[e].qName;
      }, getURI: function (e) {
        return this[e].uri;
      }, getValue: function (e) {
        return this[e].value;
      } }, p({}, p.prototype) instanceof p || (p = function (e, t) {
      function n() {}n.prototype = t, n = new n();for (t in e) n[t] = e[t];return n;
    }), t.XMLReader = n;
  }, function (e, t) {
    function n(e) {
      return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(o, "");
    }var r = new RegExp("^([^a-zA-Z_\xc0-\xd6\xd8-\xf6\xf8-\xffͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�])|^((x|X)(m|M)(l|L))|([^a-zA-Z_\xc0-\xd6\xd8-\xf6\xf8-\xffͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�-.0-9\xb7̀-ͯ‿⁀])", "g"),
        o = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-퟿-﷏﷠-�]/gm,
        i = function (e) {
      var t = [];if (e instanceof Object) for (var n in e) e.hasOwnProperty(n) && t.push(n);return t;
    },
        a = function (e, t) {
      var o = function (e, n, o, i, a) {
        var s = undefined !== t.indent ? t.indent : "\t",
            c = t.prettyPrint ? "\n" + new Array(i).join(s) : "";t.removeIllegalNameCharacters && (e = e.replace(r, "_"));var u = [c, "<", e, o || ""];return n && n.length > 0 ? (u.push(">"), u.push(n), a && u.push(c), u.push("</"), u.push(e), u.push(">")) : u.push("/>"), u.join("");
      };return function e(r, a, s) {
        var c = typeof r;switch ((Array.isArray ? Array.isArray(r) : r instanceof Array) ? c = "array" : r instanceof Date && (c = "date"), c) {case "array":
            var u = [];return r.map(function (t) {
              u.push(e(t, 1, s + 1));
            }), t.prettyPrint && u.push("\n"), u.join("");case "date":
            return r.toJSON ? r.toJSON() : r + "";case "object":
            var l = [];for (var d in r) if (r.hasOwnProperty(d)) if (r[d] instanceof Array) for (var f = 0; f < r[d].length; f++) r[d].hasOwnProperty(f) && l.push(o(d, e(r[d][f], 0, s + 1), null, s + 1, i(r[d][f]).length));else l.push(o(d, e(r[d], 0, s + 1), null, s + 1));return t.prettyPrint && l.length > 0 && l.push("\n"), l.join("");case "function":
            return r();default:
            return t.escape ? n(r) : "" + r;}
      }(e, 0, 0);
    },
        s = function (e) {
      var t = ['<?xml version="1.0" encoding="UTF-8"'];return e && t.push(' standalone="yes"'), t.push("?>"), t.join("");
    };e.exports = function (e, t) {
      if (t || (t = { xmlHeader: { standalone: true }, prettyPrint: true, indent: "  ", escape: true }), "string" == typeof e) try {
        e = JSON.parse(e.toString());
      } catch (e) {
        return false;
      }var n = "",
          r = "";return t && ("object" == typeof t ? (t.xmlHeader && (n = s(!!t.xmlHeader.standalone)), undefined !== t.docType && (r = "<!DOCTYPE " + t.docType + ">")) : n = s()), t = t || {}, [n, t.prettyPrint && r ? "\n" : "", r, a(e, t)].join("").replace(/\n{2,}/g, "\n").replace(/\s+$/g, "");
    };
  }, function (e, t, n) {
    var r = n(3),
        o = n(0),
        i = {},
        a = function (e, t) {
      i[t] = e[t], e[t] = function (e, n) {
        e.SkipTask ? i[t].call(this, e, n) : this._addTask(t, e, n);
      };
    },
        s = function (e) {
      var t = [],
          n = {},
          a = 0,
          s = 0,
          c = function (e) {
        var t = { id: e.id, Bucket: e.Bucket, Region: e.Region, Key: e.Key, FilePath: e.FilePath, state: e.state, loaded: e.loaded, size: e.size, speed: e.speed, percent: e.percent, hashPercent: e.hashPercent, error: e.error };return e.FilePath && (t.FilePath = e.FilePath), e._custom && (t._custom = e._custom), t;
      },
          u = function () {
        var n,
            r = function () {
          n = 0, e.emit("task-list-update", { list: o.map(t, c) }), e.emit("list-update", { list: o.map(t, c) });
        };return function () {
          n || (n = setTimeout(r));
        };
      }(),
          l = function () {
        if (!(t.length <= e.options.UploadQueueSize)) {
          for (var r = 0; r < s && r < t.length && t.length > e.options.UploadQueueSize;) {
            var o = "waiting" === t[r].state || "checking" === t[r].state || "uploading" === t[r].state;t[r] && o ? r++ : (n[t[r].id] && delete n[t[r].id], t.splice(r, 1), s--);
          }u();
        }
      },
          d = function () {
        if (!(a >= e.options.FileParallelLimit)) {
          for (; t[s] && "waiting" !== t[s].state;) s++;if (!(s >= t.length)) {
            var n = t[s];s++, a++, n.state = "checking", n.params.onTaskStart && n.params.onTaskStart(c(n)), !n.params.UploadData && (n.params.UploadData = {});var r = o.formatParams(n.api, n.params);i[n.api].call(e, r, function (t, r) {
              e._isRunningTask(n.id) && ("checking" !== n.state && "uploading" !== n.state || (n.state = t ? "error" : "success", t && (n.error = t), a--, u(), d(), n.callback && n.callback(t, r), "success" === n.state && (n.params && (delete n.params.UploadData, delete n.params.Body, delete n.params), delete n.callback)), l());
            }), u(), setTimeout(d);
          }
        }
      },
          f = function (t, o) {
        var i = n[t];if (i) {
          var s = i && "waiting" === i.state,
              c = i && ("checking" === i.state || "uploading" === i.state);if ("canceled" === o && "canceled" !== i.state || "paused" === o && s || "paused" === o && c) {
            if ("paused" === o && i.params.Body && "function" == typeof i.params.Body.pipe) return undefined;i.state = o, e.emit("inner-kill-task", { TaskId: t, toState: o });try {
              var f = i && i.params && i.params.UploadData.UploadId;
            } catch (e) {}"canceled" === o && f && r.removeUsing(f), u(), c && (a--, d()), "canceled" === o && (i.params && (delete i.params.UploadData, delete i.params.Body, delete i.params), delete i.callback);
          }l();
        }
      };e._addTasks = function (t) {
        o.each(t, function (t) {
          e._addTask(t.api, t.params, t.callback, true);
        }), u();
      };var p = true;e._addTask = function (r, i, a, s) {
        i = o.formatParams(r, i);var c = o.uuid();i.TaskId = c, i.onTaskReady && i.onTaskReady(c), i.TaskReady && (i.TaskReady(c), p && console.warn('warning: Param "TaskReady" has been deprecated. Please use "onTaskReady" instead.'), p = false);var f = { params: i, callback: a, api: r, index: t.length, id: c, Bucket: i.Bucket, Region: i.Region, Key: i.Key, FilePath: i.FilePath || "", state: "waiting", loaded: 0, size: 0, speed: 0, percent: 0, hashPercent: 0, error: null, _custom: i._custom },
            h = i.onHashProgress;i.onHashProgress = function (t) {
          e._isRunningTask(f.id) && (f.hashPercent = t.percent, h && h(t), u());
        };var g = i.onProgress;return i.onProgress = function (t) {
          e._isRunningTask(f.id) && ("checking" === f.state && (f.state = "uploading"), f.loaded = t.loaded, f.speed = t.speed, f.percent = t.percent, g && g(t), u());
        }, o.getFileSize(r, i, function (e, r) {
          if (e) return undefined;n[c] = f, t.push(f), f.size = r, !s && u(), d(), l();
        }), c;
      }, e._isRunningTask = function (e) {
        var t = n[e];return !(!t || "checking" !== t.state && "uploading" !== t.state);
      }, e.getTaskList = function () {
        return o.map(t, c);
      }, e.cancelTask = function (e) {
        f(e, "canceled");
      }, e.pauseTask = function (e) {
        f(e, "paused");
      }, e.restartTask = function (e) {
        var t = n[e];!t || "paused" !== t.state && "error" !== t.state || (t.state = "waiting", u(), s = Math.min(s, t.index), d());
      }, e.isUploadRunning = function () {
        return a || s < t.length;
      };
    };e.exports.transferToTaskMethod = a, e.exports.init = s;
  }, function (e, t, n) {
    function r(e, t) {
      ee.call(this, { Action: "name/cos:HeadBucket", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, method: "HEAD" }, function (e, n) {
        t(e, n);
      });
    }function o(e, t) {
      var n = {};n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n.marker = e.Marker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, ee.call(this, { Action: "name/cos:GetBucket", ResourceKey: n.prefix, method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, qs: n }, function (e, n) {
        if (e) return t(e);var r = n.ListBucketResult || {},
            o = r.Contents || [],
            i = r.CommonPrefixes || [];o = oe.isArray(o) ? o : [o], i = oe.isArray(i) ? i : [i];var a = oe.clone(r);oe.extend(a, { Contents: o, CommonPrefixes: i, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function i(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucket", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, method: "DELETE" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function a(e, t) {
      var n = e.Headers,
          r = "";if (e.AccessControlPolicy) {
        var o = oe.clone(e.AccessControlPolicy || {}),
            i = o.Grants || o.Grant;i = oe.isArray(i) ? i : [i], delete o.Grant, delete o.Grants, o.AccessControlList = { Grant: i }, r = oe.json2xml({ AccessControlPolicy: o }), n["Content-Type"] = "application/xml", n["Content-MD5"] = oe.binaryBase64(oe.md5(r));
      }oe.each(n, function (e, t) {
        0 === t.indexOf("x-cos-grant-") && (n[t] = Q(n[t]));
      }), ee.call(this, { Action: "name/cos:PutBucketACL", method: "PUT", Bucket: e.Bucket, Region: e.Region, headers: n, action: "acl", body: r }, function (e, n) {
        if (e) return t(e);t(null, { statusCode: n.statusCode, headers: n.headers });
      });
    }function s(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketACL", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "acl" }, function (e, n) {
        if (e) return t(e);var r = n.AccessControlPolicy || {},
            o = r.Owner || {},
            i = r.AccessControlList.Grant || [];i = oe.isArray(i) ? i : [i];var a = $(r);n.headers && n.headers["x-cos-acl"] && (a.ACL = n.headers["x-cos-acl"]), a = oe.extend(a, { Owner: o, Grants: i, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function c(e, t) {
      var n = e.CORSConfiguration || {},
          r = n.CORSRules || e.CORSRules || [];r = oe.clone(oe.isArray(r) ? r : [r]), oe.each(r, function (e) {
        oe.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (t, n) {
          var r = t + "s",
              o = e[r] || e[t] || [];delete e[r], e[t] = oe.isArray(o) ? o : [o];
        });
      });var o = oe.json2xml({ CORSConfiguration: { CORSRule: r } }),
          i = e.Headers;i["Content-Type"] = "application/xml", i["Content-MD5"] = oe.binaryBase64(oe.md5(o)), ee.call(this, { Action: "name/cos:PutBucketCORS", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: o, action: "cors", headers: i }, function (e, n) {
        if (e) return t(e);t(null, { statusCode: n.statusCode, headers: n.headers });
      });
    }function u(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketCORS", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "cors" }, function (e, n) {
        if (e) {
          if (404 === e.statusCode && e.error && "NoSuchCORSConfiguration" === e.error.Code) {
            var r = { CORSRules: [], statusCode: e.statusCode };e.headers && (r.headers = e.headers), t(null, r);
          } else t(e);
        } else {
          var o = n.CORSConfiguration || {},
              i = o.CORSRules || o.CORSRule || [];i = oe.clone(oe.isArray(i) ? i : [i]), oe.each(i, function (e) {
            oe.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (t, n) {
              var r = t + "s",
                  o = e[r] || e[t] || [];delete e[t], e[r] = oe.isArray(o) ? o : [o];
            });
          }), t(null, { CORSRules: i, statusCode: n.statusCode, headers: n.headers });
        }
      });
    }function l(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketCORS", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "cors" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function d(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketLocation", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "location" }, function (e, n) {
        if (e) return t(e);t(null, n);
      });
    }function f(e, t) {
      var n = e.Policy,
          r = n;try {
        "string" == typeof n ? n = JSON.parse(r) : r = JSON.stringify(n);
      } catch (e) {
        t({ error: "Policy format error" });
      }var o = e.Headers;o["Content-Type"] = "application/json", o["Content-MD5"] = oe.binaryBase64(oe.md5(r)), ee.call(this, { Action: "name/cos:PutBucketPolicy", method: "PUT", Bucket: e.Bucket, Region: e.Region, action: "policy", body: oe.isBrowser ? r : n, headers: o, json: true }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function p(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketPolicy", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "policy", rawBody: true }, function (e, n) {
        if (e) return t(e.statusCode && 403 === e.statusCode ? { ErrorStatus: "Access Denied" } : e.statusCode && 405 === e.statusCode ? { ErrorStatus: "Method Not Allowed" } : e.statusCode && 404 === e.statusCode ? { ErrorStatus: "Policy Not Found" } : e);var r = {};try {
          r = JSON.parse(n.body);
        } catch (e) {}t(null, { Policy: r, statusCode: n.statusCode, headers: n.headers });
      });
    }function h(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketPolicy", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "policy" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function g(e, t) {
      var n = e.Tagging || {},
          r = n.TagSet || n.Tags || e.Tags || [];r = oe.clone(oe.isArray(r) ? r : [r]);var o = oe.json2xml({ Tagging: { TagSet: { Tag: r } } }),
          i = e.Headers;i["Content-Type"] = "application/xml", i["Content-MD5"] = oe.binaryBase64(oe.md5(o)), ee.call(this, { Action: "name/cos:PutBucketTagging", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: o, action: "tagging", headers: i }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function m(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketTagging", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "tagging" }, function (e, n) {
        if (e) {
          if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "NoSuchTagSet" !== e.error.Code) t(e);else {
            var r = { Tags: [], statusCode: e.statusCode };e.headers && (r.headers = e.headers), t(null, r);
          }
        } else {
          var o = [];try {
            o = n.Tagging.TagSet.Tag || [];
          } catch (e) {}o = oe.clone(oe.isArray(o) ? o : [o]), t(null, { Tags: o, statusCode: n.statusCode, headers: n.headers });
        }
      });
    }function y(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketTagging", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "tagging" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function v(e, t) {
      var n = e.LifecycleConfiguration || {},
          r = n.Rules || e.Rules || [];r = oe.clone(r);var o = oe.json2xml({ LifecycleConfiguration: { Rule: r } }),
          i = e.Headers;i["Content-Type"] = "application/xml", i["Content-MD5"] = oe.binaryBase64(oe.md5(o)), ee.call(this, { Action: "name/cos:PutBucketLifecycle", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: o, action: "lifecycle", headers: i }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function C(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketLifecycle", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "lifecycle" }, function (e, n) {
        if (e) {
          if (404 === e.statusCode && e.error && "NoSuchLifecycleConfiguration" === e.error.Code) {
            var r = { Rules: [], statusCode: e.statusCode };e.headers && (r.headers = e.headers), t(null, r);
          } else t(e);
        } else {
          var o = [];try {
            o = n.LifecycleConfiguration.Rule || [];
          } catch (e) {}o = oe.clone(oe.isArray(o) ? o : [o]), t(null, { Rules: o, statusCode: n.statusCode, headers: n.headers });
        }
      });
    }function b(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketLifecycle", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "lifecycle" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function x(e, t) {
      if (!e.VersioningConfiguration) return undefined;var n = e.VersioningConfiguration || {},
          r = oe.json2xml({ VersioningConfiguration: n }),
          o = e.Headers;o["Content-Type"] = "application/xml", o["Content-MD5"] = oe.binaryBase64(oe.md5(r)), ee.call(this, { Action: "name/cos:PutBucketVersioning", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: r, action: "versioning", headers: o }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function k(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketVersioning", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "versioning" }, function (e, n) {
        e || !n.VersioningConfiguration && (n.VersioningConfiguration = {}), t(e, n);
      });
    }function S(e, t) {
      var n = oe.clone(e.ReplicationConfiguration),
          r = oe.json2xml({ ReplicationConfiguration: n });r = r.replace(/<(\/?)Rules>/gi, "<$1Rule>"), r = r.replace(/<(\/?)Tags>/gi, "<$1Tag>");var o = e.Headers;o["Content-Type"] = "application/xml", o["Content-MD5"] = oe.binaryBase64(oe.md5(r)), ee.call(this, { Action: "name/cos:PutBucketReplication", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: r, action: "replication", headers: o }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function T(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketReplication", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "replication" }, function (e, n) {
        if (e) {
          if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "ReplicationConfigurationnotFoundError" !== e.error.Code) t(e);else {
            var r = { ReplicationConfiguration: { Rules: [] }, statusCode: e.statusCode };e.headers && (r.headers = e.headers), t(null, r);
          }
        } else e || !n.ReplicationConfiguration && (n.ReplicationConfiguration = {}), n.ReplicationConfiguration.Rule && (n.ReplicationConfiguration.Rules = n.ReplicationConfiguration.Rule, delete n.ReplicationConfiguration.Rule), t(e, n);
      });
    }function w(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketReplication", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "replication" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function R(e, t) {
      if (!e.WebsiteConfiguration) return undefined;var n = oe.clone(e.WebsiteConfiguration || {}),
          r = n.RoutingRules || n.RoutingRule || [];r = oe.isArray(r) ? r : [r], delete n.RoutingRule, delete n.RoutingRules, r.length > 0 && (n.RoutingRules = { RoutingRule: r });var o = oe.json2xml({ WebsiteConfiguration: n }),
          i = e.Headers;i["Content-Type"] = "application/xml", i["Content-MD5"] = oe.binaryBase64(oe.md5(o)), ee.call(this, { Action: "name/cos:PutBucketWebsite", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: o, action: "website", headers: i }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function A(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketWebsite", method: "GET", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, action: "website" }, function (e, n) {
        if (e) {
          if (404 === e.statusCode && "NoSuchWebsiteConfiguration" === e.error.Code) {
            var r = { WebsiteConfiguration: {}, statusCode: e.statusCode };e.headers && (r.headers = e.headers), t(null, r);
          } else t(e);
        } else {
          var o = n.WebsiteConfiguration || {};if (o.RoutingRules) {
            var i = oe.clone(o.RoutingRules.RoutingRule || []);i = oe.makeArray(i), o.RoutingRules = i;
          }t(null, { WebsiteConfiguration: o, statusCode: n.statusCode, headers: n.headers });
        }
      });
    }function E(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketWebsite", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "website" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function B(e, t) {
      ee.call(this, { Action: "name/cos:HeadObject", method: "HEAD", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, headers: e.Headers }, function (n, r) {
        if (n) {
          var o = n.statusCode;return e.Headers["If-Modified-Since"] && o && 304 === o ? t(null, { NotModified: true, statusCode: o }) : t(n);
        }r.headers && r.headers.etag && (r.ETag = r.headers && r.headers.etag), t(null, r);
      });
    }function _(e, t) {
      var n = {};n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n["key-marker"] = e.KeyMarker, n["version-id-marker"] = e.VersionIdMarker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, ee.call(this, { Action: "name/cos:GetBucketObjectVersions", ResourceKey: n.prefix, method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, qs: n, action: "versions" }, function (e, n) {
        if (e) return t(e);var r = n.ListVersionsResult || {},
            o = r.DeleteMarker || [];o = oe.isArray(o) ? o : [o];var i = r.Version || [];i = oe.isArray(i) ? i : [i];var a = oe.clone(r);delete a.DeleteMarker, delete a.Version, oe.extend(a, { DeleteMarkers: o, Versions: i, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function N(e, t) {
      var n = {};n["response-content-type"] = e.ResponseContentType, n["response-content-language"] = e.ResponseContentLanguage, n["response-expires"] = e.ResponseExpires, n["response-cache-control"] = e.ResponseCacheControl, n["response-content-disposition"] = e.ResponseContentDisposition, n["response-content-encoding"] = e.ResponseContentEncoding, ee.call(this, { Action: "name/cos:GetObject", method: "GET", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, headers: e.Headers, qs: n, rawBody: true }, function (n, r) {
        if (n) {
          var o = n.statusCode;return e.Headers["If-Modified-Since"] && o && 304 === o ? t(null, { NotModified: true }) : t(n);
        }var i = {};i.Body = r.body, r.headers && r.headers.etag && (i.ETag = r.headers && r.headers.etag), oe.extend(i, { statusCode: r.statusCode, headers: r.headers }), t(null, i);
      });
    }function P(e, t) {
      var n = this,
          r = e.ContentLength,
          o = oe.throttleOnProgress.call(n, r, e.onProgress),
          i = e.Headers;!i["Cache-Control"] && (i["Cache-Control"] = "");var a = i["Content-Type"] || e.Body && e.Body.type;!i["Content-Type"] && a && (i["Content-Type"] = a);var s = e.UploadAddMetaMd5 || n.options.UploadAddMetaMd5 || n.options.UploadCheckContentMd5;oe.getBodyMd5(s, e.Body, function (i) {
        i && (n.options.UploadCheckContentMd5 && (e.Headers["Content-MD5"] = oe.binaryBase64(i)), (e.UploadAddMetaMd5 || n.options.UploadAddMetaMd5) && (e.Headers["x-cos-meta-md5"] = i)), undefined !== e.ContentLength && (e.Headers["Content-Length"] = e.ContentLength), o(null, true), ee.call(n, { Action: "name/cos:PutObject", TaskId: e.TaskId, method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, body: e.Body, onProgress: o }, function (i, a) {
          if (i) return o(null, true), t(i);if (o({ loaded: r, total: r }, true), a) {
            var s = J({ ForcePathStyle: n.options.ForcePathStyle, protocol: n.options.Protocol, domain: n.options.Domain, bucket: e.Bucket, region: e.Region, object: e.Key });s = s.substr(s.indexOf("://") + 3);var c = { Location: s, statusCode: a.statusCode, headers: a.headers };return a.headers && a.headers.etag && (c.ETag = a.headers.etag), t(null, c);
          }t(null, a);
        });
      }, e.onHashProgress);
    }function I(e, t) {
      ee.call(this, { Action: "name/cos:DeleteObject", method: "DELETE", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, VersionId: e.VersionId }, function (e, n) {
        if (e) {
          var r = e.statusCode;return r && 204 === r ? t(null, { statusCode: r }) : r && 404 === r ? t(null, { BucketNotFound: true, statusCode: r }) : t(e);
        }t(null, { statusCode: n.statusCode, headers: n.headers });
      });
    }function D(e, t) {
      ee.call(this, { Action: "name/cos:GetObjectACL", method: "GET", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, action: "acl" }, function (e, n) {
        if (e) return t(e);var r = n.AccessControlPolicy || {},
            o = r.Owner || {},
            i = r.AccessControlList && r.AccessControlList.Grant || [];i = oe.isArray(i) ? i : [i];var a = $(r);n.headers && n.headers["x-cos-acl"] && (a.ACL = n.headers["x-cos-acl"]), a = oe.extend(a, { Owner: o, Grants: i, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function O(e, t) {
      var n = e.Headers,
          r = "";if (e.AccessControlPolicy) {
        var o = oe.clone(e.AccessControlPolicy || {}),
            i = o.Grants || o.Grant;i = oe.isArray(i) ? i : [i], delete o.Grant, delete o.Grants, o.AccessControlList = { Grant: i }, r = oe.json2xml({ AccessControlPolicy: o }), n["Content-Type"] = "application/xml", n["Content-MD5"] = oe.binaryBase64(oe.md5(r));
      }oe.each(n, function (e, t) {
        0 === t.indexOf("x-cos-grant-") && (n[t] = Q(n[t]));
      }), ee.call(this, { Action: "name/cos:PutObjectACL", method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, action: "acl", headers: n, body: r }, function (e, n) {
        if (e) return t(e);t(null, { statusCode: n.statusCode, headers: n.headers });
      });
    }function M(e, t) {
      var n = e.Headers;n.Origin = e.Origin, n["Access-Control-Request-Method"] = e.AccessControlRequestMethod, n["Access-Control-Request-Headers"] = e.AccessControlRequestHeaders, ee.call(this, { Action: "name/cos:OptionsObject", method: "OPTIONS", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: n }, function (e, n) {
        if (e) return e.statusCode && 403 === e.statusCode ? t(null, { OptionsForbidden: true, statusCode: e.statusCode }) : t(e);var r = n.headers || {};t(null, { AccessControlAllowOrigin: r["access-control-allow-origin"], AccessControlAllowMethods: r["access-control-allow-methods"], AccessControlAllowHeaders: r["access-control-allow-headers"], AccessControlExposeHeaders: r["access-control-expose-headers"], AccessControlMaxAge: r["access-control-max-age"], statusCode: n.statusCode, headers: n.headers });
      });
    }function L(e, t) {
      var n = e.Headers;!n["Cache-Control"] && (n["Cache-Control"] = "");var r = e.CopySource || "",
          o = r.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if (!o) return undefined;var i = o[1],
          a = o[3],
          s = decodeURIComponent(o[4]);ee.call(this, { Scope: [{ action: "name/cos:GetObject", bucket: i, region: a, prefix: s }, { action: "name/cos:PutObject", bucket: e.Bucket, region: e.Region, prefix: e.Key }], method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, headers: e.Headers }, function (e, n) {
        if (e) return t(e);var r = oe.clone(n.CopyObjectResult || {});oe.extend(r, { statusCode: n.statusCode, headers: n.headers }), t(null, r);
      });
    }function U(e, t) {
      var n = e.CopySource || "",
          r = n.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if (!r) return undefined;var o = r[1],
          i = r[3],
          a = decodeURIComponent(r[4]);ee.call(this, { Scope: [{ action: "name/cos:GetObject", bucket: o, region: i, prefix: a }, { action: "name/cos:PutObject", bucket: e.Bucket, region: e.Region, prefix: e.Key }], method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, qs: { partNumber: e.PartNumber, uploadId: e.UploadId }, headers: e.Headers }, function (e, n) {
        if (e) return t(e);var r = oe.clone(n.CopyPartResult || {});oe.extend(r, { statusCode: n.statusCode, headers: n.headers }), t(null, r);
      });
    }function j(e, t) {
      var n = e.Objects || [],
          r = e.Quiet;n = oe.isArray(n) ? n : [n];var o = oe.json2xml({ Delete: { Object: n, Quiet: r || false } }),
          i = e.Headers;i["Content-Type"] = "application/xml", i["Content-MD5"] = oe.binaryBase64(oe.md5(o));var a = oe.map(n, function (t) {
        return { action: "name/cos:DeleteObject", bucket: e.Bucket, region: e.Region, prefix: t.Key };
      });ee.call(this, { Scope: a, method: "POST", Bucket: e.Bucket, Region: e.Region, body: o, action: "delete", headers: i }, function (e, n) {
        if (e) return t(e);var r = n.DeleteResult || {},
            o = r.Deleted || [],
            i = r.Error || [];o = oe.isArray(o) ? o : [o], i = oe.isArray(i) ? i : [i];var a = oe.clone(r);oe.extend(a, { Error: i, Deleted: o, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function H(e, t) {
      var n = e.Headers;if (!e.RestoreRequest) return undefined;var r = e.RestoreRequest || {},
          o = oe.json2xml({ RestoreRequest: r });n["Content-Type"] = "application/xml", n["Content-MD5"] = oe.binaryBase64(oe.md5(o)), ee.call(this, { Action: "name/cos:RestoreObject", method: "POST", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, body: o, action: "restore", headers: n }, function (e, n) {
        t(e, n);
      });
    }function F(e, t) {
      var n = this,
          r = e.Headers;!r["Cache-Control"] && (r["Cache-Control"] = ""), oe.getBodyMd5(e.Body && (e.UploadAddMetaMd5 || n.options.UploadAddMetaMd5), e.Body, function (r) {
        r && (e.Headers["x-cos-meta-md5"] = r), ee.call(n, { Action: "name/cos:InitiateMultipartUpload", method: "POST", Bucket: e.Bucket, Region: e.Region, Key: e.Key, action: "uploads", headers: e.Headers }, function (e, n) {
          return e ? t(e) : (n = oe.clone(n || {})) && n.InitiateMultipartUploadResult ? t(null, oe.extend(n.InitiateMultipartUploadResult, { statusCode: n.statusCode, headers: n.headers })) : undefined;
        });
      }, e.onHashProgress);
    }function K(e, t) {
      var n = this;oe.getFileSize("multipartUpload", e, function () {
        oe.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function (r) {
          r && (e.Headers["Content-MD5"] = oe.binaryBase64(r)), ee.call(n, { Action: "name/cos:UploadPart", TaskId: e.TaskId, method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, qs: { partNumber: e.PartNumber, uploadId: e.UploadId }, headers: e.Headers, onProgress: e.onProgress, body: e.Body || null }, function (e, n) {
            if (e) return t(e);n.headers = n.headers || {}, t(null, { ETag: n.headers.etag || "", statusCode: n.statusCode, headers: n.headers });
          });
        });
      });
    }function z(e, t) {
      for (var n = this, r = e.UploadId, o = e.Parts, i = 0, a = o.length; i < a; i++) 0 !== o[i].ETag.indexOf('"') && (o[i].ETag = '"' + o[i].ETag + '"');var s = oe.json2xml({ CompleteMultipartUpload: { Part: o } }),
          c = e.Headers;c["Content-Type"] = "application/xml", c["Content-MD5"] = oe.binaryBase64(oe.md5(s)), ee.call(this, { Action: "name/cos:CompleteMultipartUpload", method: "POST", Bucket: e.Bucket, Region: e.Region, Key: e.Key, qs: { uploadId: r }, body: s, headers: c }, function (r, o) {
        if (r) return t(r);var i = J({ ForcePathStyle: n.options.ForcePathStyle, protocol: n.options.Protocol, domain: n.options.Domain, bucket: e.Bucket, region: e.Region, object: e.Key, isLocation: true }),
            a = o.CompleteMultipartUploadResult || {},
            s = oe.extend(a, { Location: i, statusCode: o.statusCode, headers: o.headers });t(null, s);
      });
    }function q(e, t) {
      var n = {};n.delimiter = e.Delimiter, n["encoding-type"] = e.EncodingType, n.prefix = e.Prefix || "", n["max-uploads"] = e.MaxUploads, n["key-marker"] = e.KeyMarker, n["upload-id-marker"] = e.UploadIdMarker, n = oe.clearKey(n), ee.call(this, { Action: "name/cos:ListMultipartUploads", ResourceKey: n.prefix, method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, qs: n, action: "uploads" }, function (e, n) {
        if (e) return t(e);if (n && n.ListMultipartUploadsResult) {
          var r = n.ListMultipartUploadsResult.Upload || [],
              o = n.ListMultipartUploadsResult.CommonPrefixes || [];o = oe.isArray(o) ? o : [o], r = oe.isArray(r) ? r : [r], n.ListMultipartUploadsResult.Upload = r, n.ListMultipartUploadsResult.CommonPrefixes = o;
        }var i = oe.clone(n.ListMultipartUploadsResult || {});oe.extend(i, { statusCode: n.statusCode, headers: n.headers }), t(null, i);
      });
    }function G(e, t) {
      var n = {};n.uploadId = e.UploadId, n["encoding-type"] = e.EncodingType, n["max-parts"] = e.MaxParts, n["part-number-marker"] = e.PartNumberMarker, ee.call(this, { Action: "name/cos:ListParts", method: "GET", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, qs: n }, function (e, n) {
        if (e) return t(e);var r = n.ListPartsResult || {},
            o = r.Part || [];o = oe.isArray(o) ? o : [o], r.Part = o;var i = oe.clone(r);oe.extend(i, { statusCode: n.statusCode, headers: n.headers }), t(null, i);
      });
    }function W(e, t) {
      var n = {};n.uploadId = e.UploadId, ee.call(this, { Action: "name/cos:AbortMultipartUpload", method: "DELETE", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, qs: n }, function (e, n) {
        if (e) return t(e);t(null, { statusCode: n.statusCode, headers: n.headers });
      });
    }function V(e) {
      var t = this;return oe.getAuth({ SecretId: e.SecretId || this.options.SecretId || "", SecretKey: e.SecretKey || this.options.SecretKey || "", Method: e.Method, Key: e.Key, Query: e.Query, Headers: e.Headers, Expires: e.Expires, UseRawKey: t.options.UseRawKey, SystemClockOffset: t.options.SystemClockOffset });
    }function X(e, t) {
      var n = this,
          r = J({ ForcePathStyle: n.options.ForcePathStyle, protocol: e.Protocol || n.options.Protocol, domain: n.options.Domain, bucket: e.Bucket, region: e.Region, object: e.Key });if (undefined !== e.Sign && !e.Sign) return t(null, { Url: r }), r;var o = Y.call(this, { Action: "PUT" === (e.Method || "").toUpperCase() ? "name/cos:PutObject" : "name/cos:GetObject", Bucket: e.Bucket || "", Region: e.Region || "", Method: e.Method || "get", Key: e.Key, Expires: e.Expires }, function (e, n) {
        if (t) {
          if (e) return undefined;var o = r;o += "?" + (n.Authorization.indexOf("q-signature") > -1 ? n.Authorization : "sign=" + encodeURIComponent(n.Authorization)), n.XCosSecurityToken && (o += "&x-cos-security-token=" + n.XCosSecurityToken), n.ClientIP && (o += "&clientIP=" + n.ClientIP), n.ClientUA && (o += "&clientUA=" + n.ClientUA), n.Token && (o += "&token=" + n.Token), setTimeout(function () {
            t(null, { Url: o });
          });
        }
      });return o ? r + "?" + o.Authorization + (o.XCosSecurityToken ? "&x-cos-security-token=" + o.XCosSecurityToken : "") : r;
    }function $(e) {
      var t = { GrantFullControl: [], GrantWrite: [], GrantRead: [], GrantReadAcp: [], GrantWriteAcp: [], ACL: "" },
          n = { FULL_CONTROL: "GrantFullControl", WRITE: "GrantWrite", READ: "GrantRead", READ_ACP: "GrantReadAcp", WRITE_ACP: "GrantWriteAcp" },
          r = e.AccessControlList.Grant;r && (r = oe.isArray(r) ? r : [r]);var o = { READ: 0, WRITE: 0, FULL_CONTROL: 0 };return r && r.length && oe.each(r, function (r) {
        "qcs::cam::anyone:anyone" === r.Grantee.ID || "http://cam.qcloud.com/groups/global/AllUsers" === r.Grantee.URI ? o[r.Permission] = 1 : r.Grantee.ID !== e.Owner.ID && t[n[r.Permission]].push('id="' + r.Grantee.ID + '"');
      }), o.FULL_CONTROL || o.WRITE && o.READ ? t.ACL = "public-read-write" : o.READ ? t.ACL = "public-read" : t.ACL = "private", oe.each(n, function (e) {
        t[e] = Q(t[e].join(","));
      }), t;
    }function Q(e) {
      var t,
          n,
          r = e.split(","),
          o = {};for (t = 0; t < r.length;) n = r[t].trim(), o[n] ? r.splice(t, 1) : (o[n] = true, r[t] = n, t++);return r.join(",");
    }function J(e) {
      var t = e.bucket,
          n = t.substr(0, t.lastIndexOf("-")),
          r = t.substr(t.lastIndexOf("-") + 1),
          o = e.domain,
          i = e.region,
          a = e.object,
          s = e.protocol || (oe.isBrowser && "http:" === location.protocol ? "http:" : "https:");o || (o = ["cn-south", "cn-south-2", "cn-north", "cn-east", "cn-southwest", "sg"].indexOf(i) > -1 ? "{Region}.myqcloud.com" : "cos.{Region}.myqcloud.com", e.ForcePathStyle || (o = "{Bucket}." + o)), o = o.replace(/\{\{AppId\}\}/gi, r).replace(/\{\{Bucket\}\}/gi, n).replace(/\{\{Region\}\}/gi, i).replace(/\{\{.*?\}\}/gi, ""), o = o.replace(/\{AppId\}/gi, r).replace(/\{BucketName\}/gi, n).replace(/\{Bucket\}/gi, t).replace(/\{Region\}/gi, i).replace(/\{.*?\}/gi, ""), /^[a-zA-Z]+:\/\//.test(o) || (o = s + "//" + o), "/" === o.slice(-1) && (o = o.slice(0, -1));var c = o;return e.ForcePathStyle && (c += "/" + t), c += "/", a && (c += oe.camSafeUrlEncode(a).replace(///g, "/")), e.isLocation && (c = c.replace(/^https?:\/\//, "")), c;
    }function Y(e, t) {
      var n = oe.clone(e.Headers);delete n["Content-Type"], delete n["Cache-Control"], oe.each(n, function (e, t) {
        "" === e && delete n[t];
      });var r = function (e) {
        var n = false,
            r = e.Authorization;if (r) if (r.indexOf(" ") > -1) n = false;else if (r.indexOf("q-sign-algorithm=") > -1 && r.indexOf("q-ak=") > -1 && r.indexOf("q-sign-time=") > -1 && r.indexOf("q-key-time=") > -1 && r.indexOf("q-url-param-list=") > -1) n = true;else try {
          r = atob(r), r.indexOf("a=") > -1 && r.indexOf("k=") > -1 && r.indexOf("t=") > -1 && r.indexOf("r=") > -1 && r.indexOf("b=") > -1 && (n = true);
        } catch (e) {}n ? t && t(null, e) : t && t("authorization error");
      },
          o = this,
          i = e.Bucket || "",
          a = e.Region || "",
          s = e.Key || "";o.options.ForcePathStyle && i && (s = i + "/" + s);var c = "/" + s,
          u = {},
          l = e.Scope;if (!l) {
        var d = e.Action || "",
            f = e.ResourceKey || e.Key || "";l = e.Scope || [{ action: d, bucket: i, region: a, prefix: f }];
      }var p = oe.md5(JSON.stringify(l));o._StsCache = o._StsCache || [], function () {
        var e, t;for (e = o._StsCache.length - 1; e >= 0; e--) {
          t = o._StsCache[e];var n = Math.round(oe.getSkewTime(o.options.SystemClockOffset) / 1e3) + 30;if (t.StartTime && n < t.StartTime || n >= t.ExpiredTime) o._StsCache.splice(e, 1);else if (!t.ScopeLimit || t.ScopeLimit && t.ScopeKey === p) {
            u = t;break;
          }
        }
      }();var h = function () {
        var t = u.StartTime && u.ExpiredTime ? u.StartTime + ";" + u.ExpiredTime : "",
            i = oe.getAuth({ SecretId: u.TmpSecretId, SecretKey: u.TmpSecretKey, Method: e.Method, Pathname: c, Query: e.Query, Headers: n, Expires: e.Expires, UseRawKey: o.options.UseRawKey, SystemClockOffset: o.options.SystemClockOffset, KeyTime: t }),
            a = { Authorization: i, XCosSecurityToken: u.XCosSecurityToken || "", Token: u.Token || "", ClientIP: u.ClientIP || "", ClientUA: u.ClientUA || "" };r(a);
      };if (u.ExpiredTime && u.ExpiredTime - oe.getSkewTime(o.options.SystemClockOffset) / 1e3 > 60) h();else if (o.options.getAuthorization) o.options.getAuthorization.call(o, { Bucket: i, Region: a, Method: e.Method, Key: s, Pathname: c, Query: e.Query, Headers: n, Scope: l }, function (e) {
        "string" == typeof e && (e = { Authorization: e }), e.TmpSecretId && e.TmpSecretKey && e.XCosSecurityToken && e.ExpiredTime ? (u = e || {}, u.Scope = l, u.ScopeKey = p, o._StsCache.push(u), h()) : r(e);
      });else {
        if (!o.options.getSTS) return function () {
          var t = oe.getAuth({ SecretId: e.SecretId || o.options.SecretId, SecretKey: e.SecretKey || o.options.SecretKey, Method: e.Method, Pathname: c, Query: e.Query, Headers: n, Expires: e.Expires, UseRawKey: o.options.UseRawKey, SystemClockOffset: o.options.SystemClockOffset }),
              i = { Authorization: t, XCosSecurityToken: o.options.XCosSecurityToken };return r(i), i;
        }();o.options.getSTS.call(o, { Bucket: i, Region: a }, function (e) {
          u = e || {}, u.Scope = l, u.ScopeKey = p, u.TmpSecretId = u.SecretId, u.TmpSecretKey = u.SecretKey, o._StsCache.push(u), h();
        });
      }return "";
    }function Z(e) {
      var t = false,
          n = false,
          r = e.headers && (e.headers.date || e.headers.Date) || e.error && e.error.ServerTime;try {
        var o = e.error.Code,
            i = e.error.Message;("RequestTimeTooSkewed" === o || "AccessDenied" === o && "Request has expired" === i) && (n = true);
      } catch (e) {}if (e) if (n && r) {
        var a = Date.parse(r);this.options.CorrectClockSkew && Math.abs(oe.getSkewTime(this.options.SystemClockOffset) - a) >= 3e4 && (console.error("error: Local time is too skewed."), this.options.SystemClockOffset = a - Date.now(), t = true);
      } else 5 === Math.round(e.statusCode / 100) && (t = true);return t;
    }function ee(e, t) {
      var n = this;!e.headers && (e.headers = {}), !e.qs && (e.qs = {}), e.VersionId && (e.qs.versionId = e.VersionId), e.qs = oe.clearKey(e.qs), e.headers && (e.headers = oe.clearKey(e.headers)), e.qs && (e.qs = oe.clearKey(e.qs));var r = oe.clone(e.qs);e.action && (r[e.action] = "");var o = function (i) {
        var a = n.options.SystemClockOffset;Y.call(n, { Bucket: e.Bucket || "", Region: e.Region || "", Method: e.method, Key: e.Key, Query: r, Headers: e.headers, Action: e.Action, ResourceKey: e.ResourceKey, Scope: e.Scope }, function (r, s) {
          if (r) return undefined;e.AuthData = s, te.call(n, e, function (r, s) {
            r && i < 2 && (a !== n.options.SystemClockOffset || Z.call(n, r)) ? (e.headers && (delete e.headers.Authorization, delete e.headers.token, delete e.headers.clientIP, delete e.headers.clientUA, delete e.headers["x-cos-security-token"]), o(i + 1)) : t(r, s);
          });
        });
      };o(1);
    }function te(e, t) {
      var n = this,
          r = e.TaskId;if (!r || n._isRunningTask(r)) {
        var o = e.Bucket,
            i = e.Region,
            a = e.Key,
            s = e.method || "GET",
            c = e.url,
            u = e.body,
            l = e.json,
            d = e.rawBody;c = c || J({ ForcePathStyle: n.options.ForcePathStyle, protocol: n.options.Protocol, domain: n.options.Domain, bucket: o, region: i, object: a }), e.action && (c = c + "?" + e.action);var f = { method: s, url: c, headers: e.headers, qs: e.qs, body: u, json: l };if (f.headers.Authorization = e.AuthData.Authorization, e.AuthData.Token && (f.headers.token = e.AuthData.Token), e.AuthData.ClientIP && (f.headers.clientIP = e.AuthData.ClientIP), e.AuthData.ClientUA && (f.headers.clientUA = e.AuthData.ClientUA), e.AuthData.XCosSecurityToken && (f.headers["x-cos-security-token"] = e.AuthData.XCosSecurityToken), f.headers && (f.headers = oe.clearKey(f.headers)), f = oe.clearKey(f), e.onProgress && "function" == typeof e.onProgress) {
          var p = u && (u.size || u.length) || 0;f.onProgress = function (t) {
            if (!r || n._isRunningTask(r)) {
              var o = t ? t.loaded : 0;e.onProgress({ loaded: o, total: p });
            }
          };
        }this.options.Timeout && (f.timeout = this.options.Timeout), n.emit("before-send", f);var h = re(f, function (e, o, i) {
          if ("abort" !== e) {
            var a,
                s = function (e, i) {
              if (r && n.off("inner-kill-task", g), !a) {
                a = true;var s = {};o && o.statusCode && (s.statusCode = o.statusCode), o && o.headers && (s.headers = o.headers), e ? (e = oe.extend(e || {}, s), t(e, null)) : (i = oe.extend(i || {}, s), t(null, i)), h = null;
              }
            };if (e) return undefined;var c;if (d) c = {}, c.body = i;else try {
              c = i && i.indexOf("<") > -1 && i.indexOf(">") > -1 && oe.xml2json(i) || {};
            } catch (e) {
              c = i || {};
            }var u = o.statusCode;return 2 === Math.floor(u / 100) ? c.Error ? undefined : undefined : undefined;
          }
        }),
            g = function (e) {
          e.TaskId === r && (h && h.abort && h.abort(), n.off("inner-kill-task", g));
        };r && n.on("inner-kill-task", g);
      }
    }function ne(e, t, n) {
      oe.each(["Cors", "Acl"], function (r) {
        if (e.slice(-r.length) === r) {
          var o = e.slice(0, -r.length) + r.toUpperCase(),
              i = oe.apiWrapper(e, t),
              a = false;n[o] = function () {
            !a && console.warn("warning: cos." + o + " has been deprecated. Please Use cos." + e + " instead."), a = true, i.apply(this, arguments);
          };
        }
      });
    }var re = n(14),
        oe = n(0),
        ie = { headBucket: r, getBucket: o, deleteBucket: i, putBucketAcl: a, getBucketAcl: s, putBucketCors: c, getBucketCors: u, deleteBucketCors: l, getBucketLocation: d, getBucketPolicy: p, putBucketPolicy: f, deleteBucketPolicy: h, putBucketTagging: g, getBucketTagging: m, deleteBucketTagging: y, putBucketLifecycle: v, getBucketLifecycle: C, deleteBucketLifecycle: b, putBucketVersioning: x, getBucketVersioning: k, putBucketReplication: S, getBucketReplication: T, deleteBucketReplication: w, putBucketWebsite: R, getBucketWebsite: A, deleteBucketWebsite: E, getObject: N, headObject: B, listObjectVersions: _, putObject: P, deleteObject: I, getObjectAcl: D, putObjectAcl: O, optionsObject: M, putObjectCopy: L, deleteMultipleObject: j, restoreObject: H, uploadPartCopy: U, multipartInit: F, multipartUpload: K, multipartComplete: z, multipartList: q, multipartListPart: G, multipartAbort: W, getObjectUrl: X, getAuth: V };e.exports.init = function (e, t) {
      t.transferToTaskMethod(ie, "putObject"), oe.each(ie, function (t, n) {
        e.prototype[n] = oe.apiWrapper(n, t), ne(n, t, e.prototype);
      });
    };
  }, function (e, t) {
    var n = function () {
      function e(e) {
        var t = e.length,
            n = E.type(e);return "function" !== n && !E.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
      }function t(e) {
        var t = L[e] = {};return E.each(e.match(M) || [], function (e, n) {
          t[n] = true;
        }), t;
      }function n() {
        D.addEventListener ? (D.removeEventListener("DOMContentLoaded", r, false), window.removeEventListener("load", r, false)) : (D.detachEvent("onreadystatechange", r), window.detachEvent("onload", r));
      }function r() {
        (D.addEventListener || "load" === event.type || "complete" === D.readyState) && (n(), E.ready());
      }function o(e, t, n) {
        if (undefined === n && 1 === e.nodeType) {
          var r = "data-" + t.replace(F, "-$1").toLowerCase();if ("string" == typeof (n = e.getAttribute(r))) {
            try {
              n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : H.test(n) ? E.parseJSON(n) : n);
            } catch (e) {}E.data(e, t, n);
          } else n = undefined;
        }return n;
      }function i(e) {
        var t;for (t in e) if (("data" !== t || !E.isEmptyObject(e[t])) && "toJSON" !== t) return false;return true;
      }function a(e, t, n, r) {
        if (E.acceptData(e)) {
          var o,
              i,
              a = E.expando,
              s = e.nodeType,
              c = s ? E.cache : e,
              u = s ? e[a] : e[a] && a;if (u && c[u] && (r || c[u].data) || undefined !== n || "string" != typeof t) return u || (u = s ? e[a] = v.pop() || E.guid++ : a), c[u] || (c[u] = s ? {} : { toJSON: E.noop }), "object" != typeof t && "function" != typeof t || (r ? c[u] = E.extend(c[u], t) : c[u].data = E.extend(c[u].data, t)), i = c[u], r || (i.data || (i.data = {}), i = i.data), undefined !== n && (i[E.camelCase(t)] = n), "string" == typeof t ? null == (o = i[t]) && (o = i[E.camelCase(t)]) : o = i, o;
        }
      }function s(e, t, n) {
        if (E.acceptData(e)) {
          var r,
              o,
              a = e.nodeType,
              s = a ? E.cache : e,
              c = a ? e[E.expando] : E.expando;if (s[c]) {
            if (t && (r = n ? s[c] : s[c].data)) {
              E.isArray(t) ? t = t.concat(E.map(t, E.camelCase)) : t in r ? t = [t] : (t = E.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;for (; o--;) delete r[t[o]];if (n ? !i(r) : !E.isEmptyObject(r)) return;
            }(n || (delete s[c].data, i(s[c]))) && (a ? E.cleanData([e], true) : R.deleteExpando || s != s.window ? delete s[c] : s[c] = null);
          }
        }
      }function c() {
        return true;
      }function u() {
        return false;
      }function l(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");var r,
              o = 0,
              i = t.toLowerCase().match(M) || [];if (E.isFunction(n)) for (; r = i[o++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
      }function d(e, t, n, r) {
        function o(s) {
          var c;return i[s] = true, E.each(e[s] || [], function (e, s) {
            var u = s(t, n, r);return "string" != typeof u || a || i[u] ? a ? !(c = u) : undefined : (t.dataTypes.unshift(u), o(u), false);
          }), c;
        }var i = {},
            a = e === ae;return o(t.dataTypes[0]) || !i["*"] && o("*");
      }function f(e, t) {
        var n,
            r,
            o = E.ajaxSettings.flatOptions || {};for (r in t) undefined !== t[r] && ((o[r] ? e : n || (n = {}))[r] = t[r]);return n && E.extend(true, e, n), e;
      }function p(e, t, n) {
        for (var r, o, i, a, s = e.contents, c = e.dataTypes; "*" === c[0];) c.shift(), undefined === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));if (o) for (a in s) if (s[a] && s[a].test(o)) {
          c.unshift(a);break;
        }if (c[0] in n) i = c[0];else {
          for (a in n) {
            if (!c[0] || e.converters[a + " " + c[0]]) {
              i = a;break;
            }r || (r = a);
          }i = i || r;
        }if (i) return i !== c[0] && c.unshift(i), n[i];
      }function h(e, t, n, r) {
        var o,
            i,
            a,
            s,
            c,
            u = {},
            l = e.dataTypes.slice();if (l[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];for (i = l.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = l.shift()) if ("*" === i) i = c;else if ("*" !== c && c !== i) {
          if (!(a = u[c + " " + i] || u["* " + i])) for (o in u) if (s = o.split(" "), s[1] === i && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
            true === a ? a = u[o] : true !== u[o] && (i = s[0], l.unshift(s[1]));break;
          }if (true !== a) if (a && e.throws) t = a(t);else try {
            t = a(t);
          } catch (e) {
            return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + i };
          }
        }return { state: "success", data: t };
      }function g(e, t, n, r) {
        var o;if (E.isArray(t)) E.each(t, function (t, o) {
          n || ue.test(e) ? r(e, o) : g(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r);
        });else if (n || "object" !== E.type(t)) r(e, t);else for (o in t) g(e + "[" + o + "]", t[o], n, r);
      }function m() {
        try {
          return new window.XMLHttpRequest();
        } catch (e) {}
      }function y() {
        try {
          return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }var v = [],
          C = v.slice,
          b = v.concat,
          x = v.push,
          k = v.indexOf,
          S = {},
          T = S.toString,
          w = S.hasOwnProperty,
          R = {},
          A = "1.11.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-deprecated,-event-alias,-wrap",
          E = function (e, t) {
        return new E.fn.init(e, t);
      },
          B = /^[\s﻿\xA0]+|[\s﻿\xA0]+$/g,
          _ = /^-ms-/,
          N = /-([\da-z])/gi,
          P = function (e, t) {
        return t.toUpperCase();
      };E.fn = E.prototype = { jquery: A, constructor: E, selector: "", length: 0, toArray: function () {
          return C.call(this);
        }, get: function (e) {
          return null != e ? e < 0 ? this[e + this.length] : this[e] : C.call(this);
        }, pushStack: function (e) {
          var t = E.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
        }, each: function (e, t) {
          return E.each(this, e, t);
        }, map: function (e) {
          return this.pushStack(E.map(this, function (t, n) {
            return e.call(t, n, t);
          }));
        }, slice: function () {
          return this.pushStack(C.apply(this, arguments));
        }, first: function () {
          return this.eq(0);
        }, last: function () {
          return this.eq(-1);
        }, eq: function (e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        }, end: function () {
          return this.prevObject || this.constructor(null);
        }, push: x, sort: v.sort, splice: v.splice }, E.extend = E.fn.extend = function () {
        var e,
            t,
            n,
            r,
            o,
            i,
            a = arguments[0] || {},
            s = 1,
            c = arguments.length,
            u = false;for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || E.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++) if (null != (o = arguments[s])) for (r in o) e = a[r], n = o[r], a !== n && (u && n && (E.isPlainObject(n) || (t = E.isArray(n))) ? (t ? (t = false, i = e && E.isArray(e) ? e : []) : i = e && E.isPlainObject(e) ? e : {}, a[r] = E.extend(u, i, n)) : undefined !== n && (a[r] = n));return a;
      }, E.extend({ expando: "jQuery" + (A + Math.random()).replace(/\D/g, ""), isReady: true, error: function (e) {
          throw new Error(e);
        }, noop: function () {}, isFunction: function (e) {
          return "function" === E.type(e);
        }, isArray: Array.isArray || function (e) {
          return "array" === E.type(e);
        }, isWindow: function (e) {
          return null != e && e == e.window;
        }, isNumeric: function (e) {
          return !E.isArray(e) && e - parseFloat(e) >= 0;
        }, isEmptyObject: function (e) {
          var t;for (t in e) return false;return true;
        }, isPlainObject: function (e) {
          var t;if (!e || "object" !== E.type(e) || e.nodeType || E.isWindow(e)) return false;try {
            if (e.constructor && !w.call(e, "constructor") && !w.call(e.constructor.prototype, "isPrototypeOf")) return false;
          } catch (e) {
            return false;
          }if (R.ownLast) for (t in e) return w.call(e, t);for (t in e);return undefined === t || w.call(e, t);
        }, type: function (e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? S[T.call(e)] || "object" : typeof e;
        }, globalEval: function (e) {
          e && E.trim(e) && (window.execScript || function (e) {
            window.eval.call(window, e);
          })(e);
        }, camelCase: function (e) {
          return e.replace(_, "ms-").replace(N, P);
        }, nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }, each: function (t, n, r) {
          var o = 0,
              i = t.length,
              a = e(t);if (r) {
            if (a) for (; o < i && false !== n.apply(t[o], r); o++);else for (o in t) if (false === n.apply(t[o], r)) break;
          } else if (a) for (; o < i && false !== n.call(t[o], o, t[o]); o++);else for (o in t) if (false === n.call(t[o], o, t[o])) break;return t;
        }, trim: function (e) {
          return null == e ? "" : (e + "").replace(B, "");
        }, makeArray: function (t, n) {
          var r = n || [];return null != t && (e(Object(t)) ? E.merge(r, "string" == typeof t ? [t] : t) : x.call(r, t)), r;
        }, inArray: function (e, t, n) {
          var r;if (t) {
            if (k) return k.call(t, e, n);for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n;
          }return -1;
        }, merge: function (e, t) {
          for (var n = +t.length, r = 0, o = e.length; r < n;) e[o++] = t[r++];if (n !== n) for (; undefined !== t[r];) e[o++] = t[r++];return e.length = o, e;
        }, grep: function (e, t, n) {
          for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);return r;
        }, map: function (t, n, r) {
          var o,
              i = 0,
              a = t.length,
              s = e(t),
              c = [];if (s) for (; i < a; i++) null != (o = n(t[i], i, r)) && c.push(o);else for (i in t) null != (o = n(t[i], i, r)) && c.push(o);return b.apply([], c);
        }, guid: 1, proxy: function (e, t) {
          var n, r, o;if ("string" == typeof t && (o = e[t], t = e, e = o), E.isFunction(e)) return n = C.call(arguments, 2), r = function () {
            return e.apply(t || this, n.concat(C.call(arguments)));
          }, r.guid = e.guid = e.guid || E.guid++, r;
        }, now: function () {
          return +new Date();
        }, support: R }), E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        S["[object " + t + "]"] = t.toLowerCase();
      });var I,
          D = window.document,
          O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(E.fn.init = function (e, t) {
        var n, r;if (!e) return this;if ("string" == typeof e) {
          if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : O.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || I).find(e) : this.constructor(t).find(e);if (n[1]) {
            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : D, true)), rsingleTag.test(n[1]) && E.isPlainObject(t)) for (n in t) E.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);return this;
          }if ((r = D.getElementById(n[2])) && r.parentNode) {
            if (r.id !== n[2]) return I.find(e);this.length = 1, this[0] = r;
          }return this.context = D, this.selector = e, this;
        }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : E.isFunction(e) ? undefined !== I.ready ? I.ready(e) : e(E) : (undefined !== e.selector && (this.selector = e.selector, this.context = e.context), E.makeArray(e, this));
      }).prototype = E.fn, I = E(D);var M = /\S+/g,
          L = {};E.Callbacks = function (e) {
        e = "string" == typeof e ? L[e] || t(e) : E.extend({}, e);var n,
            r,
            o,
            i,
            a,
            s,
            c = [],
            u = !e.once && [],
            l = function (t) {
          for (r = e.memory && t, o = true, a = s || 0, s = 0, i = c.length, n = true; c && a < i; a++) if (false === c[a].apply(t[0], t[1]) && e.stopOnFalse) {
            r = false;break;
          }n = false, c && (u ? u.length && l(u.shift()) : r ? c = [] : d.disable());
        },
            d = { add: function () {
            if (c) {
              var t = c.length;!function t(n) {
                E.each(n, function (n, r) {
                  var o = E.type(r);"function" === o ? e.unique && d.has(r) || c.push(r) : r && r.length && "string" !== o && t(r);
                });
              }(arguments), n ? i = c.length : r && (s = t, l(r));
            }return this;
          }, remove: function () {
            return c && E.each(arguments, function (e, t) {
              for (var r; (r = E.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (r <= i && i--, r <= a && a--);
            }), this;
          }, has: function (e) {
            return e ? E.inArray(e, c) > -1 : !(!c || !c.length);
          }, empty: function () {
            return c = [], i = 0, this;
          }, disable: function () {
            return c = u = r = undefined, this;
          }, disabled: function () {
            return !c;
          }, lock: function () {
            return u = undefined, r || d.disable(), this;
          }, locked: function () {
            return !u;
          }, fireWith: function (e, t) {
            return !c || o && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : l(t)), this;
          }, fire: function () {
            return d.fireWith(this, arguments), this;
          }, fired: function () {
            return !!o;
          } };return d;
      }, E.extend({ Deferred: function (e) {
          var t = [["resolve", "done", E.Callbacks("once memory"), "resolved"], ["reject", "fail", E.Callbacks("once memory"), "rejected"], ["notify", "progress", E.Callbacks("memory")]],
              n = "pending",
              r = { state: function () {
              return n;
            }, always: function () {
              return o.done(arguments).fail(arguments), this;
            }, then: function () {
              var e = arguments;return E.Deferred(function (n) {
                E.each(t, function (t, i) {
                  var a = E.isFunction(e[t]) && e[t];o[i[1]](function () {
                    var e = a && a.apply(this, arguments);e && E.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            }, promise: function (e) {
              return null != e ? E.extend(e, r) : r;
            } },
              o = {};return r.pipe = r.then, E.each(t, function (e, i) {
            var a = i[2],
                s = i[3];r[i[1]] = a.add, s && a.add(function () {
              n = s;
            }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
              return o[i[0] + "With"](this === o ? r : this, arguments), this;
            }, o[i[0] + "With"] = a.fireWith;
          }), r.promise(o), e && e.call(o, o), o;
        }, when: function (e) {
          var t,
              n,
              r,
              o = 0,
              i = C.call(arguments),
              a = i.length,
              s = 1 !== a || e && E.isFunction(e.promise) ? a : 0,
              c = 1 === s ? e : E.Deferred(),
              u = function (e, n, r) {
            return function (o) {
              n[e] = this, r[e] = arguments.length > 1 ? C.call(arguments) : o, r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r);
            };
          };if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) i[o] && E.isFunction(i[o].promise) ? i[o].promise().done(u(o, r, i)).fail(c.reject).progress(u(o, n, t)) : --s;return s || c.resolveWith(r, i), c.promise();
        } });var U;E.fn.ready = function (e) {
        return E.ready.promise().done(e), this;
      }, E.extend({ isReady: false, readyWait: 1, holdReady: function (e) {
          e ? E.readyWait++ : E.ready(true);
        }, ready: function (e) {
          if (true === e ? ! --E.readyWait : !E.isReady) {
            if (!D.body) return setTimeout(E.ready);E.isReady = true, true !== e && --E.readyWait > 0 || (U.resolveWith(D, [E]), E.fn.triggerHandler && (E(D).triggerHandler("ready"), E(D).off("ready")));
          }
        } }), E.ready.promise = function (e) {
        if (!U) if (U = E.Deferred(), "complete" === D.readyState) setTimeout(E.ready);else if (D.addEventListener) D.addEventListener("DOMContentLoaded", r, false), window.addEventListener("load", r, false);else {
          D.attachEvent("onreadystatechange", r), window.attachEvent("onload", r);var t = false;try {
            t = null == window.frameElement && D.documentElement;
          } catch (e) {}t && t.doScroll && function e() {
            if (!E.isReady) {
              try {
                t.doScroll("left");
              } catch (t) {
                return setTimeout(e, 50);
              }n(), E.ready();
            }
          }();
        }return U.promise(e);
      };var j;for (j in E(R)) break;R.ownLast = "0" !== j, R.inlineBlockNeedsLayout = false, E(function () {
        var e, t, n, r;(n = D.getElementsByTagName("body")[0]) && n.style && (t = D.createElement("div"), r = D.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), undefined !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", R.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r));
      }), function () {
        var e = D.createElement("div");if (null == R.deleteExpando) {
          R.deleteExpando = true;try {
            delete e.test;
          } catch (e) {
            R.deleteExpando = false;
          }
        }e = null;
      }(), E.acceptData = function (e) {
        var t = E.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;return (1 === n || 9 === n) && (!t || true !== t && e.getAttribute("classid") === t);
      };var H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          F = /([A-Z])/g;E.extend({ cache: {}, noData: { "applet ": true, "embed ": true, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (e) {
          return !!(e = e.nodeType ? E.cache[e[E.expando]] : e[E.expando]) && !i(e);
        }, data: function (e, t, n) {
          return a(e, t, n);
        }, removeData: function (e, t) {
          return s(e, t);
        }, _data: function (e, t, n) {
          return a(e, t, n, true);
        }, _removeData: function (e, t) {
          return s(e, t, true);
        } }), E.fn.extend({ data: function (e, t) {
          var n,
              r,
              i,
              a = this[0],
              s = a && a.attributes;if (undefined === e) {
            if (this.length && (i = E.data(a), 1 === a.nodeType && !E._data(a, "parsedAttrs"))) {
              for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = E.camelCase(r.slice(5)), o(a, r, i[r])));E._data(a, "parsedAttrs", true);
            }return i;
          }return "object" == typeof e ? this.each(function () {
            E.data(this, e);
          }) : arguments.length > 1 ? this.each(function () {
            E.data(this, e, t);
          }) : a ? o(a, e, E.data(a, e)) : undefined;
        }, removeData: function (e) {
          return this.each(function () {
            E.removeData(this, e);
          });
        } }), E.extend({ queue: function (e, t, n) {
          var r;if (e) return t = (t || "fx") + "queue", r = E._data(e, t), n && (!r || E.isArray(n) ? r = E._data(e, t, E.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function (e, t) {
          t = t || "fx";var n = E.queue(e, t),
              r = n.length,
              o = n.shift(),
              i = E._queueHooks(e, t),
              a = function () {
            E.dequeue(e, t);
          };"inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire();
        }, _queueHooks: function (e, t) {
          var n = t + "queueHooks";return E._data(e, n) || E._data(e, n, { empty: E.Callbacks("once memory").add(function () {
              E._removeData(e, t + "queue"), E._removeData(e, n);
            }) });
        } }), E.fn.extend({ queue: function (e, t) {
          var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : undefined === t ? this : this.each(function () {
            var n = E.queue(this, e, t);E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
          });
        }, dequeue: function (e) {
          return this.each(function () {
            E.dequeue(this, e);
          });
        }, clearQueue: function (e) {
          return this.queue(e || "fx", []);
        }, promise: function (e, t) {
          var n,
              r = 1,
              o = E.Deferred(),
              i = this,
              a = this.length,
              s = function () {
            --r || o.resolveWith(i, [i]);
          };for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;) (n = E._data(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));return s(), o.promise(t);
        } }), E.event = { global: {}, add: function (e, t, n, r, o) {
          var i,
              a,
              s,
              c,
              u,
              l,
              d,
              f,
              p,
              h,
              g,
              m = E._data(e);if (m) {
            for (n.handler && (c = n, n = c.handler, o = c.selector), n.guid || (n.guid = E.guid++), (a = m.events) || (a = m.events = {}), (l = m.handle) || (l = m.handle = function (e) {
              return undefined === E || e && E.event.triggered === e.type ? undefined : E.event.dispatch.apply(l.elem, arguments);
            }, l.elem = e), t = (t || "").match(M) || [""], s = t.length; s--;) i = W.exec(t[s]) || [], p = g = i[1], h = (i[2] || "").split(".").sort(), p && (u = E.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = E.event.special[p] || {}, d = E.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && E.expr.match.needsContext.test(o), namespace: h.join(".") }, c), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && false !== u.setup.call(e, r, h, l) || (e.addEventListener ? e.addEventListener(p, l, false) : e.attachEvent && e.attachEvent("on" + p, l))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), E.event.global[p] = true);e = null;
          }
        }, remove: function (e, t, n, r, o) {
          var i,
              a,
              s,
              c,
              u,
              l,
              d,
              f,
              p,
              h,
              g,
              m = E.hasData(e) && E._data(e);if (m && (l = m.events)) {
            for (t = (t || "").match(M) || [""], u = t.length; u--;) if (s = W.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
              for (d = E.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = i = f.length; i--;) a = f[i], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(i, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));c && !f.length && (d.teardown && false !== d.teardown.call(e, h, m.handle) || E.removeEvent(e, p, m.handle), delete l[p]);
            } else for (p in l) E.event.remove(e, p + t[u], n, r, true);E.isEmptyObject(l) && (delete m.handle, E._removeData(e, "events"));
          }
        }, trigger: function (e, t, n, r) {
          var o,
              i,
              a,
              s,
              c,
              u,
              l,
              d = [n || D],
              f = w.call(e, "type") ? e.type : e,
              p = w.call(e, "namespace") ? e.namespace.split(".") : [];if (a = u = n = n || D, 3 !== n.nodeType && 8 !== n.nodeType && !G.test(f + E.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), i = f.indexOf(":") < 0 && "on" + f, e = e[E.expando] ? e : new E.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[f] || {}, r || !c.trigger || false !== c.trigger.apply(n, t))) {
            if (!r && !c.noBubble && !E.isWindow(n)) {
              for (s = c.delegateType || f, G.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;u === (n.ownerDocument || D) && d.push(u.defaultView || u.parentWindow || window);
            }for (l = 0; (a = d[l++]) && !e.isPropagationStopped();) e.type = l > 1 ? s : c.bindType || f, o = (E._data(a, "events") || {})[e.type] && E._data(a, "handle"), o && o.apply(a, t), (o = i && a[i]) && o.apply && E.acceptData(a) && (e.result = o.apply(a, t), false === e.result && e.preventDefault());if (e.type = f, !r && !e.isDefaultPrevented() && (!c._default || false === c._default.apply(d.pop(), t)) && E.acceptData(n) && i && n[f] && !E.isWindow(n)) {
              u = n[i], u && (n[i] = null), E.event.triggered = f;try {
                n[f]();
              } catch (e) {}E.event.triggered = undefined, u && (n[i] = u);
            }return e.result;
          }
        }, dispatch: function (e) {
          e = E.event.fix(e);var t,
              n,
              r,
              o,
              i,
              a = [],
              s = C.call(arguments),
              c = (E._data(this, "events") || {})[e.type] || [],
              u = E.event.special[e.type] || {};if (s[0] = e, e.delegateTarget = this, !u.preDispatch || false !== u.preDispatch.call(this, e)) {
            for (a = E.event.handlers.call(this, e, c), t = 0; (o = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, undefined !== (n = ((E.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && false === (e.result = n) && (e.preventDefault(), e.stopPropagation()));return u.postDispatch && u.postDispatch.call(this, e), e.result;
          }
        }, handlers: function (e, t) {
          var n,
              r,
              o,
              i,
              a = [],
              s = t.delegateCount,
              c = e.target;if (s && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (true !== c.disabled || "click" !== e.type)) {
            for (o = [], i = 0; i < s; i++) r = t[i], n = r.selector + " ", undefined === o[n] && (o[n] = r.needsContext ? E(n, this).index(c) >= 0 : E.find(n, this, null, [c]).length), o[n] && o.push(r);o.length && a.push({ elem: c, handlers: o });
          }return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
        }, fix: function (e) {
          if (e[E.expando]) return e;var t,
              n,
              r,
              o = e.type,
              i = e,
              a = this.fixHooks[o];for (a || (this.fixHooks[o] = a = q.test(o) ? this.mouseHooks : z.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new E.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];return e.target || (e.target = i.srcElement || D), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e;
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) {
            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
          } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, t) {
            var n,
                r,
                o,
                i = t.button,
                a = t.fromElement;return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || D, o = r.documentElement, n = r.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || undefined === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e;
          } }, special: { load: { noBubble: true }, focus: { trigger: function () {
              if (this !== safeActiveElement() && this.focus) try {
                return this.focus(), false;
              } catch (e) {}
            }, delegateType: "focusin" }, blur: { trigger: function () {
              if (this === safeActiveElement() && this.blur) return this.blur(), false;
            }, delegateType: "focusout" }, click: { trigger: function () {
              if (E.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), false;
            }, _default: function (e) {
              return E.nodeName(e.target, "a");
            } }, beforeunload: { postDispatch: function (e) {
              undefined !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            } } }, simulate: function (e, t, n, r) {
          var o = E.extend(new E.Event(), n, { type: e, isSimulated: true, originalEvent: {} });r ? E.event.trigger(o, null, t) : E.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault();
        } }, E.removeEvent = D.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, false);
      } : function (e, t, n) {
        var r = "on" + t;e.detachEvent && (undefined === e[r] && (e[r] = null), e.detachEvent(r, n));
      }, E.Event = function (e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || undefined === e.defaultPrevented && false === e.returnValue ? c : u) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || E.now(), this[E.expando] = true;
      };var K = /^(?:input|select|textarea)$/i,
          z = /^key/,
          q = /^(?:mouse|pointer|contextmenu)|click/,
          G = /^(?:focusinfocus|focusoutblur)$/,
          W = /^([^.]*)(?:\.(.+)|)$/;E.Event.prototype = { isDefaultPrevented: u, isPropagationStopped: u, isImmediatePropagationStopped: u, preventDefault: function () {
          var e = this.originalEvent;this.isDefaultPrevented = c, e && (e.preventDefault ? e.preventDefault() : e.returnValue = false);
        }, stopPropagation: function () {
          var e = this.originalEvent;this.isPropagationStopped = c, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = true);
        }, stopImmediatePropagation: function () {
          var e = this.originalEvent;this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
        } }, R.submitBubbles || (E.event.special.submit = { setup: function () {
          if (E.nodeName(this, "form")) return false;E.event.add(this, "click._submit keypress._submit", function (e) {
            var t = e.target,
                n = E.nodeName(t, "input") || E.nodeName(t, "button") ? t.form : undefined;n && !E._data(n, "submitBubbles") && (E.event.add(n, "submit._submit", function (e) {
              e._submit_bubble = true;
            }), E._data(n, "submitBubbles", true));
          });
        }, postDispatch: function (e) {
          e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && E.event.simulate("submit", this.parentNode, e, true));
        }, teardown: function () {
          if (E.nodeName(this, "form")) return false;E.event.remove(this, "._submit");
        } }), R.changeBubbles || (E.event.special.change = { setup: function () {
          if (K.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (E.event.add(this, "propertychange._change", function (e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = true);
          }), E.event.add(this, "click._change", function (e) {
            this._just_changed && !e.isTrigger && (this._just_changed = false), E.event.simulate("change", this, e, true);
          })), false;E.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;K.test(t.nodeName) && !E._data(t, "changeBubbles") && (E.event.add(t, "change._change", function (e) {
              !this.parentNode || e.isSimulated || e.isTrigger || E.event.simulate("change", this.parentNode, e, true);
            }), E._data(t, "changeBubbles", true));
          });
        }, handle: function (e) {
          var t = e.target;if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments);
        }, teardown: function () {
          return E.event.remove(this, "._change"), !K.test(this.nodeName);
        } }), R.focusinBubbles || E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          E.event.simulate(t, e.target, E.event.fix(e), true);
        };E.event.special[t] = { setup: function () {
            var r = this.ownerDocument || this,
                o = E._data(r, t);o || r.addEventListener(e, n, true), E._data(r, t, (o || 0) + 1);
          }, teardown: function () {
            var r = this.ownerDocument || this,
                o = E._data(r, t) - 1;o ? E._data(r, t, o) : (r.removeEventListener(e, n, true), E._removeData(r, t));
          } };
      }), E.fn.extend({ on: function (e, t, n, r, o) {
          var i, a;if ("object" == typeof e) {
            "string" != typeof t && (n = n || t, t = undefined);for (i in e) this.on(i, t, n, e[i], o);return this;
          }if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), false === r) r = u;else if (!r) return this;return 1 === o && (a = r, r = function (e) {
            return E().off(e), a.apply(this, arguments);
          }, r.guid = a.guid || (a.guid = E.guid++)), this.each(function () {
            E.event.add(this, e, r, n, t);
          });
        }, one: function (e, t, n, r) {
          return this.on(e, t, n, r, 1);
        }, off: function (e, t, n) {
          var r, o;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == typeof e) {
            for (o in e) this.off(o, t, e[o]);return this;
          }return false !== t && "function" != typeof t || (n = t, t = undefined), false === n && (n = u), this.each(function () {
            E.event.remove(this, e, n, t);
          });
        }, trigger: function (e, t) {
          return this.each(function () {
            E.event.trigger(e, t, this);
          });
        }, triggerHandler: function (e, t) {
          var n = this[0];if (n) return E.event.trigger(e, t, n, true);
        } }), E.fn.delay = function (e, t) {
        return e = E.fx ? E.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
          var r = setTimeout(t, e);n.stop = function () {
            clearTimeout(r);
          };
        });
      };var V = E.now(),
          X = /\?/,
          $ = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\%u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;E.parseJSON = function (e) {
        if (window.JSON && window.JSON.parse) return window.JSON.parse(e + "");var t,
            n = null,
            r = E.trim(e + "");return r && !E.trim(r.replace($, function (e, r, o, i) {
          return t && r && (n = 0), 0 === n ? e : (t = o || r, n += !i - !o, "");
        })) ? Function("return " + r)() : E.error("Invalid JSON: " + e);
      }, E.parseXML = function (e) {
        var t, n;if (!e || "string" != typeof e) return null;try {
          window.DOMParser ? (n = new DOMParser(), t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e));
        } catch (e) {
          t = undefined;
        }return t && t.documentElement && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t;
      };var Q,
          J,
          Y = /#.*$/,
          Z = /([?&])_=[^&]*/,
          ee = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
          te = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          ne = /^(?:GET|HEAD)$/,
          re = /^\/\//,
          oe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
          ie = {},
          ae = {},
          se = "*/".concat("*");try {
        J = location.href;
      } catch (e) {
        J = D.createElement("a"), J.href = "", J = J.href;
      }Q = oe.exec(J.toLowerCase()) || [], E.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: J, type: "GET", isLocal: te.test(Q[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": se, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": E.parseJSON, "text xml": E.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function (e, t) {
          return t ? f(f(e, E.ajaxSettings), t) : f(E.ajaxSettings, e);
        }, ajaxPrefilter: l(ie), ajaxTransport: l(ae), ajax: function (e, t) {
          function n(e, t, n, r) {
            var o,
                l,
                d,
                b,
                x,
                S = t;2 !== k && (k = 2, s && clearTimeout(s), u = undefined, a = r || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, n && (b = p(f, T, n)), b = h(f, b, T, o), o ? (f.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (E.lastModified[i] = x), (x = T.getResponseHeader("etag")) && (E.etag[i] = x)), 204 === e || "HEAD" === f.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, l = b.data, d = b.error, o = !d)) : (d = S, !e && S || (S = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || S) + "", o ? y.resolveWith(g, [l, S, T]) : y.rejectWith(g, [T, S, d]), T.statusCode(C), C = undefined, c && m.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? l : d]), v.fireWith(g, [T, S]), c && (m.trigger("ajaxComplete", [T, f]), --E.active || E.event.trigger("ajaxStop")));
          }"object" == typeof e && (t = e, e = undefined), t = t || {};var r,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              f = E.ajaxSetup({}, t),
              g = f.context || f,
              m = f.context && (g.nodeType || g.jquery) ? E(g) : E.event,
              y = E.Deferred(),
              v = E.Callbacks("once memory"),
              C = f.statusCode || {},
              b = {},
              x = {},
              k = 0,
              S = "canceled",
              T = { readyState: 0, getResponseHeader: function (e) {
              var t;if (2 === k) {
                if (!l) for (l = {}; t = ee.exec(a);) l[t[1].toLowerCase()] = t[2];t = l[e.toLowerCase()];
              }return null == t ? null : t;
            }, getAllResponseHeaders: function () {
              return 2 === k ? a : null;
            }, setRequestHeader: function (e, t) {
              var n = e.toLowerCase();return k || (e = x[n] = x[n] || e, b[e] = t), this;
            }, overrideMimeType: function (e) {
              return k || (f.mimeType = e), this;
            }, statusCode: function (e) {
              var t;if (e) if (k < 2) for (t in e) C[t] = [C[t], e[t]];else T.always(e[T.status]);return this;
            }, abort: function (e) {
              var t = e || S;return u && u.abort(t), n(0, t), this;
            } };if (y.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || J) + "").replace(Y, "").replace(re, Q[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = E.trim(f.dataType || "*").toLowerCase().match(M) || [""], null == f.crossDomain && (r = oe.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Q[1] && r[2] === Q[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Q[3] || ("http:" === Q[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), d(ie, f, t, T), 2 === k) return T;c = f.global, c && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ne.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (X.test(i) ? "&" : "?") + f.data, delete f.data), false === f.cache && (f.url = Z.test(i) ? i.replace(Z, "$1_=" + V++) : i + (X.test(i) ? "&" : "?") + "_=" + V++)), f.ifModified && (E.lastModified[i] && T.setRequestHeader("If-Modified-Since", E.lastModified[i]), E.etag[i] && T.setRequestHeader("If-None-Match", E.etag[i])), (f.data && f.hasContent && false !== f.contentType || t.contentType) && T.setRequestHeader("Content-Type", f.contentType);for (o in f.headers) T.setRequestHeader(o, f.headers[o]);if (f.beforeSend && (false === f.beforeSend.call(g, T, f) || 2 === k)) return T.abort();S = "abort";for (o in { success: 1, error: 1, complete: 1 }) T[o](f[o]);if (u = d(ae, f, t, T)) {
            T.readyState = 1, c && m.trigger("ajaxSend", [T, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
              T.abort("timeout");
            }, f.timeout));try {
              k = 1, u.send(b, n);
            } catch (e) {
              if (!(k < 2)) throw e;n(-1, e);
            }
          } else n(-1, "No Transport");return T;
        }, getJSON: function (e, t, n) {
          return E.get(e, t, n, "json");
        }, getScript: function (e, t) {
          return E.get(e, undefined, t, "script");
        } }), E.each(["get", "post"], function (e, t) {
        E[t] = function (e, n, r, o) {
          return E.isFunction(n) && (o = o || r, r = n, n = undefined), E.ajax({ url: e, type: t, dataType: o, data: n, success: r });
        };
      }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        E.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), E._evalUrl = function (e) {
        return E.ajax({ url: e, type: "GET", dataType: "script", async: false, global: false, throws: true });
      };var ce = / /g,
          ue = /\[\]$/,
          le = /\r?\n/g,
          de = /^(?:submit|button|image|reset|file)$/i,
          fe = /^(?:input|select|textarea|keygen)/i;E.param = function (e, t) {
        var n,
            r = [],
            o = function (e, t) {
          t = E.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };if (undefined === t && (t = E.ajaxSettings && E.ajaxSettings.traditional), E.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
          o(this.name, this.value);
        });else for (n in e) g(n, e[n], t, o);return r.join("&").replace(ce, "+");
      }, E.fn.extend({ serialize: function () {
          return E.param(this.serializeArray());
        }, serializeArray: function () {
          return this.map(function () {
            var e = E.prop(this, "elements");return e ? E.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;return this.name && !E(this).is(":disabled") && fe.test(this.nodeName) && !de.test(e) && (this.checked || !rcheckableType.test(e));
          }).map(function (e, t) {
            var n = E(this).val();return null == n ? null : E.isArray(n) ? E.map(n, function (e) {
              return { name: t.name, value: e.replace(le, "\r\n") };
            }) : { name: t.name, value: n.replace(le, "\r\n") };
          }).get();
        } }), E.ajaxSettings.xhr = undefined !== window.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && m() || y();
      } : m;var pe = 0,
          he = {},
          ge = E.ajaxSettings.xhr();window.ActiveXObject && E(window).on("unload", function () {
        for (var e in he) he[e](undefined, true);
      }), R.cors = !!ge && "withCredentials" in ge, ge = R.ajax = !!ge, ge && E.ajaxTransport(function (e) {
        if (!e.crossDomain || R.cors) {
          var t;return { send: function (n, r) {
              var o,
                  i = e.xhr(),
                  a = ++pe;if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) i[o] = e.xhrFields[o];e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");for (o in n) undefined !== n[o] && i.setRequestHeader(o, n[o] + "");i.upload && e.progress && (i.upload.onprogress = e.progress), i.send(e.hasContent && (e.body || e.data) || null), t = function (n, o) {
                var s, c, u;if (t && (o || 4 === i.readyState)) if (delete he[a], t = undefined, i.onreadystatechange = E.noop, o) 4 !== i.readyState && i.abort();else {
                  u = {}, s = i.status, "string" == typeof i.responseText && (u.text = i.responseText);try {
                    c = i.statusText;
                  } catch (e) {
                    c = "";
                  }s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404;
                }u && r(s, c, u, i.getAllResponseHeaders());
              }, e.async ? 4 === i.readyState ? setTimeout(t) : i.onreadystatechange = he[a] = t : t();
            }, abort: function () {
              t && t(undefined, true);
            } };
        }
      }), E.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) {
            return E.globalEval(e), e;
          } } }), E.ajaxPrefilter("script", function (e) {
        undefined === e.cache && (e.cache = false), e.crossDomain && (e.type = "GET", e.global = false);
      }), E.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t,
              n = D.head || E("head")[0] || D.documentElement;return { send: function (r, o) {
              t = D.createElement("script"), t.async = true, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"));
              }, n.insertBefore(t, n.firstChild);
            }, abort: function () {
              t && t.onload(undefined, true);
            } };
        }
      });var me = [],
          ye = /(=)\?(?=&|$)|\?\?/;return E.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
          var e = me.pop() || E.expando + "_" + V++;return this[e] = true, e;
        } }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
            o,
            i,
            a = false !== e.jsonp && (ye.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ye.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = E.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ye, "$1" + r) : false !== e.jsonp && (e.url += (X.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
          return i || E.error(r + " was not called"), i[0];
        }, e.dataTypes[0] = "json", o = window[r], window[r] = function () {
          i = arguments;
        }, n.always(function () {
          window[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, me.push(r)), i && E.isFunction(o) && o(i[0]), i = o = undefined;
        }), "script";
      }), E.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = false), t = t || D;var r = rsingleTag.exec(e),
            o = !n && [];return r ? [t.createElement(r[1])] : (r = E.buildFragment([e], t, o), o && o.length && E(o).remove(), E.merge([], r.childNodes));
      }, E;
    }(),
        r = function (e) {
      switch (typeof e) {case "string":
          return e;case "boolean":
          return e ? "true" : "false";case "number":
          return isFinite(e) ? e : "";default:
          return "";}
    },
        o = function (e, t, n, o) {
      return t = t || "&", n = n || "=", null === e && (e = undefined), "object" == typeof e ? Object.keys(e).map(function (o) {
        var i = encodeURIComponent(r(o)) + n;return Array.isArray(e[o]) ? e[o].map(function (e) {
          return i + encodeURIComponent(r(e));
        }).join(t) : i + encodeURIComponent(r(e[o]));
      }).filter(Boolean).join(t) : o ? encodeURIComponent(r(o)) + n + encodeURIComponent(r(e)) : "";
    },
        i = function (e, t) {
      if (e = n.extend(true, { headers: {}, qs: {} }, e), e.type = e.method, delete e.method, e.onProgress && (e.progress = e.onProgress, delete e.onProgress), e.qs) {
        var r = o(e.qs);r && (e.url += (-1 === e.url.indexOf("?") ? "?" : "&") + r), delete e.qs;
      }if (e.json && (e.data = e.body, delete e.json, delete e.body, !e.headers && (e.headers = {}), e.headers["Content-Type"] = "application/json"), e.body && (e.body instanceof Blob || "[object File]" === e.body.toString() || "[object Blob]" === e.body.toString() || (e.data = e.body, delete e.body)), e.headers) {
        var i = e.headers;delete e.headers, e.beforeSend = function (e) {
          for (var t in i) i.hasOwnProperty(t) && "content-length" !== t.toLowerCase() && "user-agent" !== t.toLowerCase() && "origin" !== t.toLowerCase() && "host" !== t.toLowerCase() && e.setRequestHeader(t, i[t]);
        };
      }var a = function (e) {
        var t = {};return e.getAllResponseHeaders().trim().split("\n").forEach(function (e) {
          if (e) {
            var n = e.indexOf(":"),
                r = e.substr(0, n).trim().toLowerCase(),
                o = e.substr(n + 1).trim();t[r] = o;
          }
        }), { statusCode: e.status, statusMessage: e.statusText, headers: t };
      };return e.success = function (e, n, r) {
        t(null, a(r), e);
      }, e.error = function (e) {
        e.responseText ? t(null, a(e), e.responseText) : t(e.statusText, a(e), e.responseText);
      }, e.dataType = "text", n.ajax(e);
    };e.exports = i;
  }, function (e, t, n) {
    function r(e, t) {
      var n,
          r,
          i = this,
          a = new y(),
          c = e.TaskId,
          l = e.Bucket,
          d = e.Region,
          f = e.Key,
          p = e.Body,
          h = e.ChunkSize || e.SliceSize || i.options.ChunkSize,
          m = e.AsyncLimit,
          C = e.StorageClass || "Standard",
          b = e.ServerSideEncryption,
          x = e.onHashProgress;a.on("error", function (e) {
        if (i._isRunningTask(c)) return t(e);
      }), a.on("upload_complete", function (e) {
        t(null, e);
      }), a.on("upload_slice_complete", function (e) {
        u.call(i, { Bucket: l, Region: d, Key: f, UploadId: e.UploadId, SliceList: e.SliceList }, function (t, o) {
          if (i._isRunningTask(c)) {
            if (g.removeUsing(e.UploadId), t) return r(null, true), a.emit("error", t);g.removeUploadId(e.UploadId), r({ loaded: n, total: n }, true), a.emit("upload_complete", o);
          }
        });
      }), a.on("get_upload_data_finish", function (t) {
        var o = g.getFileId(p, e.ChunkSize, l, f);o && g.saveUploadId(o, t.UploadId, i.options.UploadIdCacheLimit), g.setUsing(t.UploadId), r(null, true), s.call(i, { TaskId: c, Bucket: l, Region: d, Key: f, Body: p, FileSize: n, SliceSize: h, AsyncLimit: m, ServerSideEncryption: b, UploadData: t, onProgress: r }, function (e, t) {
          if (i._isRunningTask(c)) return e ? (r(null, true), a.emit("error", e)) : undefined;
        });
      }), a.on("get_file_size_finish", function () {
        if (r = v.throttleOnProgress.call(i, n, e.onProgress), e.UploadData.UploadId) a.emit("get_upload_data_finish", e.UploadData);else {
          var t = v.extend({ TaskId: c, Bucket: l, Region: d, Key: f, Headers: e.Headers, StorageClass: C, Body: p, FileSize: n, SliceSize: h, onHashProgress: x }, e);o.call(i, t, function (t, n) {
            if (i._isRunningTask(c)) {
              if (t) return a.emit("error", t);e.UploadData.UploadId = n.UploadId, e.UploadData.PartList = n.PartList, a.emit("get_upload_data_finish", e.UploadData);
            }
          });
        }
      }), n = e.ContentLength, delete e.ContentLength, !e.Headers && (e.Headers = {}), v.each(e.Headers, function (t, n) {
        "content-length" === n.toLowerCase() && delete e.Headers[n];
      }), function () {
        for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], r = 1048576, o = 0; o < t.length && (r = 1024 * t[o] * 1024, !(n / r <= i.options.MaxPartNumber)); o++);e.ChunkSize = e.SliceSize = h = Math.max(h, r);
      }(), 0 === n ? (e.Body = "", e.ContentLength = 0, e.SkipTask = true, i.putObject(e, function (e, n) {
        if (e) return t(e);t(null, n);
      })) : a.emit("get_file_size_finish");
    }function o(e, t) {
      var n = e.TaskId,
          r = e.Bucket,
          o = e.Region,
          s = e.Key,
          c = e.StorageClass,
          u = this,
          l = {},
          d = e.FileSize,
          f = e.SliceSize,
          p = Math.ceil(d / f),
          h = 0,
          C = 0,
          b = v.throttleOnProgress.call(u, d, e.onHashProgress),
          x = function (t, n) {
        var r = f * (t - 1),
            o = Math.min(r + f, d),
            i = o - r;l[t] ? n(null, { PartNumber: t, ETag: l[t], Size: i }) : v.fileSlice(e.Body, r, o, false, function (e) {
          v.getFileMd5(e, function (e, r) {
            if (e) return n(e);var o = '"' + r + '"';l[t] = o, h += 1, C += i, n(e, { PartNumber: t, ETag: o, Size: i }), b({ loaded: C, total: d });
          });
        });
      },
          k = function (e, t) {
        var n = e.length;if (0 === n) return t(null, true);if (n > p) return t(null, false);if (n > 1) {
          if (Math.max(e[0].Size, e[1].Size) !== f) return t(null, false);
        }var r = function (o) {
          if (o < n) {
            var i = e[o];x(i.PartNumber, function (e, n) {
              n && n.ETag === i.ETag && n.Size === i.Size ? r(o + 1) : t(null, false);
            });
          } else t(null, true);
        };r(0);
      },
          S = new y();S.on("error", function (e) {
        if (u._isRunningTask(n)) return t(e);
      }), S.on("upload_id_available", function (e) {
        var n = {},
            r = [];v.each(e.PartList, function (e) {
          n[e.PartNumber] = e;
        });for (var o = 1; o <= p; o++) {
          var i = n[o];i ? (i.PartNumber = o, i.Uploaded = true) : i = { PartNumber: o, ETag: null, Uploaded: false }, r.push(i);
        }e.PartList = r, t(null, e);
      }), S.on("no_available_upload_id", function () {
        if (u._isRunningTask(n)) {
          var i = v.extend({ Bucket: r, Region: o, Key: s, Headers: v.clone(e.Headers), StorageClass: c, Body: e.Body }, e),
              a = e.Headers["Content-Type"] || e.Body && e.Body.type;a && (i.Headers["Content-Type"] = a), u.multipartInit(i, function (e, r) {
            if (u._isRunningTask(n)) {
              if (e) return S.emit("error", e);var o = r.UploadId;if (!o) return t({ Message: "no upload id" });S.emit("upload_id_available", { UploadId: o, PartList: [] });
            }
          });
        }
      }), S.on("has_and_check_upload_id", function (e) {
        e = e.reverse(), m.eachLimit(e, 1, function (e, t) {
          if (u._isRunningTask(n)) return g.using[e] ? undefined : undefined;
        }, function (e) {
          u._isRunningTask(n) && (b(null, true), e && e.UploadId ? S.emit("upload_id_available", e) : S.emit("no_available_upload_id"));
        });
      }), S.on("seek_local_avail_upload_id", function (t) {
        var i = g.getFileId(e.Body, e.ChunkSize, r, s),
            c = g.getUploadIdList(i);if (!i || !c) return undefined;var l = function (e) {
          if (e >= c.length) return undefined;var i = c[e];return v.isInArray(t, i) ? g.using[i] ? undefined : undefined : (g.removeUploadId(i), undefined);
        };l(0);
      }), S.on("get_remote_upload_id_list", function (t) {
        i.call(u, { Bucket: r, Region: o, Key: s }, function (t, o) {
          if (u._isRunningTask(n)) {
            if (t) return S.emit("error", t);var i = v.filter(o.UploadList, function (e) {
              return e.Key === s && (!c || e.StorageClass.toUpperCase() === c.toUpperCase());
            }).reverse().map(function (e) {
              return e.UploadId || e.UploadID;
            });if (i.length) S.emit("seek_local_avail_upload_id", i);else {
              var a,
                  l = g.getFileId(e.Body, e.ChunkSize, r, s);l && (a = g.getUploadIdList(l)) && v.each(a, function (e) {
                g.removeUploadId(e);
              }), S.emit("no_available_upload_id");
            }
          }
        });
      }), S.emit("get_remote_upload_id_list");
    }function i(e, t) {
      var n = this,
          r = [],
          o = { Bucket: e.Bucket, Region: e.Region, Prefix: e.Key },
          i = function () {
        n.multipartList(o, function (e, n) {
          if (e) return t(e);r.push.apply(r, n.Upload || []), "true" === n.IsTruncated ? (o.KeyMarker = n.NextKeyMarker, o.UploadIdMarker = n.NextUploadIdMarker, i()) : t(null, { UploadList: r });
        });
      };i();
    }function a(e, t) {
      var n = this,
          r = [],
          o = { Bucket: e.Bucket, Region: e.Region, Key: e.Key, UploadId: e.UploadId },
          i = function () {
        n.multipartListPart(o, function (e, n) {
          if (e) return t(e);r.push.apply(r, n.Part || []), "true" === n.IsTruncated ? (o.PartNumberMarker = n.NextPartNumberMarker, i()) : t(null, { PartList: r });
        });
      };i();
    }function s(e, t) {
      var n = this,
          r = e.TaskId,
          o = e.Bucket,
          i = e.Region,
          a = e.Key,
          s = e.UploadData,
          u = e.FileSize,
          l = e.SliceSize,
          d = Math.min(e.AsyncLimit || n.options.ChunkParallelLimit || 1, 256),
          f = e.Body,
          p = Math.ceil(u / l),
          h = 0,
          g = e.ServerSideEncryption,
          y = v.filter(s.PartList, function (e) {
        return e.Uploaded && (h += e.PartNumber >= p ? u % l || l : l), !e.Uploaded;
      }),
          C = e.onProgress;m.eachLimit(y, d, function (e, t) {
        if (n._isRunningTask(r)) {
          var d = e.PartNumber,
              p = Math.min(u, e.PartNumber * l) - (e.PartNumber - 1) * l,
              m = 0;c.call(n, { TaskId: r, Bucket: o, Region: i, Key: a, SliceSize: l, FileSize: u, PartNumber: d, ServerSideEncryption: g, Body: f, UploadData: s, onProgress: function (e) {
              h += e.loaded - m, m = e.loaded, C({ loaded: h, total: u });
            } }, function (o, i) {
            n._isRunningTask(r) && (!v.isBrowser || o || i.ETag || (o = 'get ETag error, please add "ETag" to CORS ExposeHeader setting.'), o ? h -= m : (h += p - m, e.ETag = i.ETag), t(o || null, i));
          });
        }
      }, function (e) {
        if (n._isRunningTask(r)) return e ? t(e) : undefined;
      });
    }function c(e, t) {
      var n = this,
          r = e.TaskId,
          o = e.Bucket,
          i = e.Region,
          a = e.Key,
          s = e.FileSize,
          c = e.Body,
          u = 1 * e.PartNumber,
          l = e.SliceSize,
          d = e.ServerSideEncryption,
          f = e.UploadData,
          p = n.options.ChunkRetryTimes + 1,
          h = l * (u - 1),
          g = l,
          y = h + l;y > s && (y = s, g = y - h);var C = f.PartList[u - 1];m.retry(p, function (t) {
        n._isRunningTask(r) && v.fileSlice(c, h, y, true, function (s) {
          n.multipartUpload({ TaskId: r, Bucket: o, Region: i, Key: a, ContentLength: g, PartNumber: u, UploadId: f.UploadId, ServerSideEncryption: d, Body: s, onProgress: e.onProgress }, function (e, o) {
            if (n._isRunningTask(r)) return e ? t(e) : (C.Uploaded = true, t(null, o));
          });
        });
      }, function (e, o) {
        if (n._isRunningTask(r)) return t(e, o);
      });
    }function u(e, t) {
      var n = e.Bucket,
          r = e.Region,
          o = e.Key,
          i = e.UploadId,
          a = e.SliceList,
          s = this,
          c = this.options.ChunkRetryTimes + 1,
          u = a.map(function (e) {
        return { PartNumber: e.PartNumber, ETag: e.ETag };
      });m.retry(c, function (e) {
        s.multipartComplete({ Bucket: n, Region: r, Key: o, UploadId: i, Parts: u }, e);
      }, function (e, n) {
        t(e, n);
      });
    }function l(e, t) {
      var n = e.Bucket,
          r = e.Region,
          o = e.Key,
          a = e.UploadId,
          s = e.Level || "task",
          c = e.AsyncLimit,
          u = this,
          l = new y();if (l.on("error", function (e) {
        return t(e);
      }), l.on("get_abort_array", function (i) {
        d.call(u, { Bucket: n, Region: r, Key: o, Headers: e.Headers, AsyncLimit: c, AbortArray: i }, function (e, n) {
          if (e) return t(e);t(null, n);
        });
      }), "bucket" === s) i.call(u, { Bucket: n, Region: r }, function (e, n) {
        if (e) return t(e);l.emit("get_abort_array", n.UploadList || []);
      });else if ("file" === s) {
        if (!o) return t({ error: "abort_upload_task_no_key" });i.call(u, { Bucket: n, Region: r, Key: o }, function (e, n) {
          if (e) return t(e);l.emit("get_abort_array", n.UploadList || []);
        });
      } else {
        if ("task" !== s) return t({ error: "abort_unknown_level" });if (!a) return t({ error: "abort_upload_task_no_id" });if (!o) return t({ error: "abort_upload_task_no_key" });l.emit("get_abort_array", [{ Key: o, UploadId: a }]);
      }
    }function d(e, t) {
      var n = e.Bucket,
          r = e.Region,
          o = e.Key,
          i = e.AbortArray,
          a = e.AsyncLimit || 1,
          s = this,
          c = 0,
          u = new Array(i.length);m.eachLimit(i, a, function (t, i) {
        var a = c;if (o && o !== t.Key) return u[a] = { error: { KeyNotMatch: true } }, undefined;var l = t.UploadId || t.UploadID;s.multipartAbort({ Bucket: n, Region: r, Key: t.Key, Headers: e.Headers, UploadId: l }, function (e, o) {
          var s = { Bucket: n, Region: r, Key: t.Key, UploadId: l };u[a] = { error: e, task: s }, i(null);
        }), c++;
      }, function (e) {
        if (e) return t(e);for (var n = [], r = [], o = 0, i = u.length; o < i; o++) {
          var a = u[o];a.task && (a.error ? r.push(a.task) : n.push(a.task));
        }return t(null, { successList: n, errorList: r });
      });
    }function f(e, t) {
      var n = this,
          r = undefined === e.SliceSize ? n.options.SliceSize : e.SliceSize,
          o = 0,
          i = 0,
          a = v.throttleOnProgress.call(n, i, e.onProgress),
          s = e.files.length,
          c = e.onFileFinish,
          u = Array(s),
          l = function (e, n, r) {
        a(null, true), c && c(e, n, r), u[r.Index] = { options: r, error: e, data: n }, --s <= 0 && t && t(null, { files: u });
      },
          d = [];v.each(e.files, function (e, t) {
        !function () {
          var n = e.Body,
              s = n.size || n.length || 0,
              c = { Index: t, TaskId: "" };o += s, v.each(e, function (e, t) {
            "object" != typeof e && "function" != typeof e && (c[t] = e);
          });var u = e.onTaskReady,
              f = function (e) {
            c.TaskId = e, u && u(e);
          };e.onTaskReady = f;var p = 0,
              h = e.onProgress,
              g = function (e) {
            i = i - p + e.loaded, p = e.loaded, h && h(e), a({ loaded: i, total: o });
          };e.onProgress = g;var m = e.onFileFinish,
              y = function (e, t) {
            m && m(e, t), l && l(e, t, c);
          },
              C = s >= r ? "sliceUploadFile" : "putObject";d.push({ api: C, params: e, callback: y });
        }();
      }), n._addTasks(d);
    }function p(e, t) {
      var n = new y(),
          r = this,
          o = e.Bucket,
          i = e.Region,
          a = e.Key,
          s = e.CopySource,
          c = s.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if (!c) return undefined;var u = c[1],
          l = c[3],
          d = decodeURIComponent(c[4]),
          f = undefined === e.CopySliceSize ? r.options.CopySliceSize : e.CopySliceSize;f = Math.max(0, f);var p,
          g,
          C = e.CopyChunkSize || this.options.CopyChunkSize,
          b = this.options.CopyChunkParallelLimit,
          x = 0;n.on("copy_slice_complete", function (e) {
        r.multipartComplete({ Bucket: o, Region: i, Key: a, UploadId: e.UploadId, Parts: e.PartList }, function (e, n) {
          if (e) return g(null, true), t(e);g({ loaded: p, total: p }, true), t(null, n);
        });
      }), n.on("get_copy_data_finish", function (e) {
        m.eachLimit(e.PartList, b, function (t, n) {
          var c = t.PartNumber,
              u = t.CopySourceRange,
              l = t.end - t.start,
              d = 0;h.call(r, { Bucket: o, Region: i, Key: a, CopySource: s, UploadId: e.UploadId, PartNumber: c, CopySourceRange: u, onProgress: function (e) {
              x += e.loaded - d, d = e.loaded, g({ loaded: x, total: p });
            } }, function (e, r) {
            if (e) return n(e);g({ loaded: x, total: p }), x += l - d, t.ETag = r.ETag, n(e || null, r);
          });
        }, function (r) {
          if (r) return g(null, true), t(r);n.emit("copy_slice_complete", e);
        });
      }), n.on("get_file_size_finish", function (s) {
        !function () {
          for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], n = 1048576, o = 0; o < t.length && (n = 1024 * t[o] * 1024, !(p / n <= r.options.MaxPartNumber)); o++);e.ChunkSize = C = Math.max(C, n);for (var i = Math.ceil(p / C), a = [], s = 1; s <= i; s++) {
            var c = (s - 1) * C,
                u = s * C < p ? s * C - 1 : p - 1,
                l = { PartNumber: s, start: c, end: u, CopySourceRange: "bytes=" + c + "-" + u };a.push(l);
          }e.PartList = a;
        }();var c;if (c = "Replaced" === e.Headers["x-cos-metadata-directive"] ? e.Headers : s, c["x-cos-storage-class"] = e.Headers["x-cos-storage-class"] || s["x-cos-storage-class"], c = v.clearKey(c), "ARCHIVE" === s["x-cos-storage-class"]) {
          var u = s["x-cos-restore"];if (!u || 'ongoing-request="true"' === u) return undefined;
        }delete c["x-cos-copy-source"], delete c["x-cos-metadata-directive"], delete c["x-cos-copy-source-If-Modified-Since"], delete c["x-cos-copy-source-If-Unmodified-Since"], delete c["x-cos-copy-source-If-Match"], delete c["x-cos-copy-source-If-None-Match"], r.multipartInit({ Bucket: o, Region: i, Key: a, Headers: c }, function (r, o) {
          if (r) return t(r);e.UploadId = o.UploadId, n.emit("get_copy_data_finish", e);
        });
      }), r.headObject({ Bucket: u, Region: l, Key: d }, function (o, i) {
        if (o) return undefined;if (undefined === (p = e.FileSize = i.headers["content-length"]) || !p) return undefined;if (g = v.throttleOnProgress.call(r, p, e.onProgress), p <= f) e.Headers["x-cos-metadata-directive"] || (e.Headers["x-cos-metadata-directive"] = "Copy"), r.putObjectCopy(e, function (e, n) {
          if (e) return g(null, true), t(e);g({ loaded: p, total: p }, true), t(e, n);
        });else {
          var a = i.headers,
              s = { "Cache-Control": a["cache-control"], "Content-Disposition": a["content-disposition"], "Content-Encoding": a["content-encoding"], "Content-Type": a["content-type"], Expires: a.expires, "x-cos-storage-class": a["x-cos-storage-class"] };v.each(a, function (e, t) {
            0 === t.indexOf("x-cos-meta-") && t.length > "x-cos-meta-".length && (s[t] = e);
          }), n.emit("get_file_size_finish", s);
        }
      });
    }function h(e, t) {
      var n = e.TaskId,
          r = e.Bucket,
          o = e.Region,
          i = e.Key,
          a = e.CopySource,
          s = e.UploadId,
          c = 1 * e.PartNumber,
          u = e.CopySourceRange,
          l = this.options.ChunkRetryTimes + 1,
          d = this;m.retry(l, function (t) {
        d.uploadPartCopy({ TaskId: n, Bucket: r, Region: o, Key: i, CopySource: a, UploadId: s, PartNumber: c, CopySourceRange: u, onProgress: e.onProgress }, function (e, n) {
          t(e || null, n);
        });
      }, function (e, n) {
        return t(e, n);
      });
    }var g = n(3),
        m = n(16),
        y = n(2).EventProxy,
        v = n(0),
        C = { sliceUploadFile: r, abortUploadTask: l, uploadFiles: f, sliceCopyFile: p };e.exports.init = function (e, t) {
      t.transferToTaskMethod(C, "sliceUploadFile"), v.each(C, function (t, n) {
        e.prototype[n] = v.apiWrapper(n, t);
      });
    };
  }, function (e, t) {
    var n = function (e, t, n, r) {
      if (r = r || function () {}, !e.length || t <= 0) return r();var o = 0,
          i = 0,
          a = 0;!function s() {
        if (o >= e.length) return r();for (; a < t && i < e.length;) i += 1, a += 1, n(e[i - 1], function (t) {
          t ? (r(t), r = function () {}) : (o += 1, a -= 1, o >= e.length ? r() : s());
        });
      }();
    },
        r = function (e, t, n) {
      var r = function (o) {
        t(function (t, i) {
          t && o < e ? r(o + 1) : n(t, i);
        });
      };e < 1 ? n() : r(1);
    },
        o = { eachLimit: n, retry: r };e.exports = o;
  }]);
});