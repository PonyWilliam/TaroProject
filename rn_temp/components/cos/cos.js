!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.COS = t() : e.COS = t();
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: false, exports: {} };return e[r].call(o.exports, o, o.exports, t), o.l = true, o.exports;
    }var n = {};return t.m = e, t.c = n, t.i = function (e) {
      return e;
    }, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: false, enumerable: true, get: r });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "D:\\code\\cos-wx-sdk-v5\\demo\\lib", t(t.s = 5);
  }([function (e, t, n) {
    "use strict";
    function r(e) {
      return encodeURIComponent(e).replace(/!/g, "!").replace(/'/g, "'").replace(/\(/g, "(").replace(/\)/g, ")").replace(/\*/g, "*");
    }function o(e) {
      return u(e, function (e) {
        return "object" == typeof e ? o(e) : e;
      });
    }function i(e, t) {
      return c(t, function (n, r) {
        e[r] = t[r];
      }), e;
    }function a(e) {
      return e instanceof Array;
    }function s(e, t) {
      for (var n = false, r = 0; r < e.length; r++) if (t === e[r]) {
        n = true;break;
      }return n;
    }function c(e, t) {
      for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
    }function u(e, t) {
      var n = a(e) ? [] : {};for (var r in e) e.hasOwnProperty(r) && (n[r] = t(e[r], r));return n;
    }function l(e, t) {
      var n = a(e),
          r = n ? [] : {};for (var o in e) e.hasOwnProperty(o) && t(e[o], o) && (n ? r.push(e[o]) : r[o] = e[o]);return r;
    }var d = n(8),
        f = n(6),
        h = n(10),
        p = n(7),
        m = n(1),
        g = function (e) {
      e = e || {};var t = e.SecretId,
          n = e.SecretKey,
          i = (e.method || e.Method || "get").toLowerCase(),
          a = o(e.Query || e.params || {}),
          s = o(e.Headers || e.headers || {}),
          c = e.Pathname || "/" + (e.Key || "");if (!t) return console.error("missing param SecretId");if (!n) return console.error("missing param SecretKey");var u = function (e) {
        var t = [];for (var n in e) e.hasOwnProperty(n) && t.push(n);return t.sort(function (e, t) {
          return e = e.toLowerCase(), t = t.toLowerCase(), e === t ? 0 : e > t ? 1 : -1;
        });
      },
          l = function (e) {
        var t,
            n,
            o,
            i = [],
            a = u(e);for (t = 0; t < a.length; t++) n = a[t], o = undefined === e[n] || null === e[n] ? "" : "" + e[n], n = n.toLowerCase(), n = r(n), o = r(o) || "", i.push(n + "=" + o);return i.join("&");
      },
          d = Math.round(w(e.SystemClockOffset) / 1e3) - 1,
          h = d,
          p = e.Expires || e.expires;h += undefined === p ? 900 : 1 * p || 0;var m = t,
          g = d + ";" + h,
          y = d + ";" + h,
          C = u(s).join(";").toLowerCase(),
          v = u(a).join(";").toLowerCase(),
          x = f.HmacSHA1(y, n).toString(),
          k = [i, c, l(a), l(s), ""].join("\n"),
          S = ["sha1", g, f.SHA1(k).toString(), ""].join("\n");return ["q-sign-algorithm=sha1", "q-ak=" + m, "q-sign-time=" + g, "q-key-time=" + y, "q-header-list=" + C, "q-url-param-list=" + v, "q-signature=" + f.HmacSHA1(S, x).toString()].join("&");
    },
        y = function () {},
        C = function (e) {
      var t = {};for (var n in e) e.hasOwnProperty(n) && undefined !== e[n] && null !== e[n] && (t[n] = e[n]);return t;
    },
        v = function (e, t) {
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
        x = function (e, t) {
      v(e, function (e) {
        var n = d(e, true);t(null, n);
      });
    },
        k = function (e) {
      var t,
          n,
          r,
          o = "";for (t = 0, n = e.length / 2; t < n; t++) r = parseInt(e[2 * t] + e[2 * t + 1], 16), o += String.fromCharCode(r);return m.btoa(o);
    },
        S = function () {
      var e = function () {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
    },
        A = function (e, t) {
      var n = t.Bucket,
          r = t.Region,
          o = t.Key;if (e.indexOf("Bucket") > -1 || "deleteMultipleObject" === e || "multipartList" === e || "listObjectVersions" === e) {
        if (!n) return "Bucket";if (!r) return "Region";
      } else if (e.indexOf("Object") > -1 || e.indexOf("multipart") > -1 || "sliceUploadFile" === e || "abortUploadTask" === e) {
        if (!n) return "Bucket";if (!r) return "Region";if (!o) return "Key";
      }return false;
    },
        b = function (e, t) {
      if (t = i({}, t), "getAuth" !== e && "getV4Auth" !== e && "getObjectUrl" !== e) {
        var n = t.Headers || {};if (t && "object" == typeof t) {
          !function () {
            for (var e in t) t.hasOwnProperty(e) && e.indexOf("x-cos-") > -1 && (n[e] = t[e]);
          }();var r = { "x-cos-mfa": "MFA", "Content-MD5": "ContentMD5", "Content-Length": "ContentLength", "Content-Type": "ContentType", Expect: "Expect", Expires: "Expires", "Cache-Control": "CacheControl", "Content-Disposition": "ContentDisposition", "Content-Encoding": "ContentEncoding", Range: "Range", "If-Modified-Since": "IfModifiedSince", "If-Unmodified-Since": "IfUnmodifiedSince", "If-Match": "IfMatch", "If-None-Match": "IfNoneMatch", "x-cos-copy-source": "CopySource", "x-cos-copy-source-Range": "CopySourceRange", "x-cos-metadata-directive": "MetadataDirective", "x-cos-copy-source-If-Modified-Since": "CopySourceIfModifiedSince", "x-cos-copy-source-If-Unmodified-Since": "CopySourceIfUnmodifiedSince", "x-cos-copy-source-If-Match": "CopySourceIfMatch", "x-cos-copy-source-If-None-Match": "CopySourceIfNoneMatch", "x-cos-acl": "ACL", "x-cos-grant-read": "GrantRead", "x-cos-grant-write": "GrantWrite", "x-cos-grant-full-control": "GrantFullControl", "x-cos-grant-read-acp": "GrantReadAcp", "x-cos-grant-write-acp": "GrantWriteAcp", "x-cos-storage-class": "StorageClass", "x-cos-server-side-encryption-customer-algorithm": "SSECustomerAlgorithm", "x-cos-server-side-encryption-customer-key": "SSECustomerKey", "x-cos-server-side-encryption-customer-key-MD5": "SSECustomerKeyMD5", "x-cos-server-side-encryption": "ServerSideEncryption", "x-cos-server-side-encryption-cos-kms-key-id": "SSEKMSKeyId", "x-cos-server-side-encryption-context": "SSEContext" };_.each(r, function (e, r) {
            undefined !== t[e] && (n[r] = t[e]);
          }), t.Headers = C(n);
        }
      }return t;
    },
        R = function (e, t) {
      return function (n, r) {
        "function" == typeof n && (r = n, n = {}), n = b(e, n);var o = function (e) {
          return e && e.headers && (e.headers["x-cos-version-id"] && (e.VersionId = e.headers["x-cos-version-id"]), e.headers["x-cos-delete-marker"] && (e.DeleteMarker = e.headers["x-cos-delete-marker"])), e;
        },
            i = function (e, t) {
          r && r(o(e), o(t));
        };if ("getService" !== e && "abortUploadTask" !== e) {
          var a;if (a = A(e, n)) return undefined;if (n.Region) {
            if (n.Region.indexOf("cos.") > -1) return undefined;if (!/^([a-z\d-]+)$/.test(n.Region)) return undefined;this.options.CompatibilityMode || -1 !== n.Region.indexOf("-") || "yfb" === n.Region || "default" === n.Region || console.warn("warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224");
          }if (n.Bucket) {
            if (!/^([a-z\d-]+)-(\d+)$/.test(n.Bucket)) if (n.AppId) n.Bucket = n.Bucket + "-" + n.AppId;else {
              if (!this.options.AppId) return undefined;n.Bucket = n.Bucket + "-" + this.options.AppId;
            }n.AppId && (console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).'), delete n.AppId);
          }
        }var s = t.call(this, n, i);if ("getAuth" === e || "getObjectUrl" === e) return s;
      };
    },
        T = function (e, t) {
      function n() {
        clearTimeout(o), o = 0, r = Date.now();var n,
            i = Math.max(0, Math.round((s - a) / ((r - c) / 1e3) * 100) / 100);n = 0 === s && 0 === e ? 1 : Math.round(s / e * 100) / 100 || 0, c = r, a = s;try {
          t({ loaded: s, total: e, speed: i, percent: n });
        } catch (e) {}
      }if (!t || "function" != typeof t) return y;var r,
          o,
          i = this,
          a = 0,
          s = 0,
          c = Date.now();return function (t, r) {
        if (t && (s = t.loaded, e = t.total), Date.now() - c > i.options.ProgressInterval || r) n();else {
          if (o) return;o = setTimeout(n, i.options.ProgressInterval);
        }
      };
    },
        E = function (e, t, n) {
      var r;if ("string" == typeof t.Body && (t.Body = new Blob([t.Body], { type: "text/plain" })), !t.Body || !(t.Body instanceof Blob || "[object File]" === t.Body.toString() || "[object Blob]" === t.Body.toString())) return undefined;r = t.Body.size, t.ContentLength = r, n(null, r);
    },
        w = function (e) {
      return Date.now() + (e || 0);
    },
        _ = { noop: y, formatParams: b, apiWrapper: R, xml2json: h, json2xml: p, md5: d, clearKey: C, getFileMd5: x, binaryBase64: k, extend: i, isArray: a, isInArray: s, each: c, map: u, filter: l, clone: o, uuid: S, camSafeUrlEncode: r, throttleOnProgress: T, getFileSize: E, getSkewTime: w, getAuth: g, isBrowser: true };_.fileSlice = function (e, t, n) {
      return e.slice ? e.slice(t, n) : e.mozSlice ? e.mozSlice(t, n) : e.webkitSlice ? e.webkitSlice(t, n) : undefined;
    }, _.getFileUUID = function (e, t) {
      return e.name && e.size && e.lastModifiedDate && t ? _.md5([e.name, e.size, e.lastModifiedDate, t].join("::")) : null;
    }, _.getBodyMd5 = function (e, t, n) {
      n = n || y, e && "string" == typeof t ? n(_.md5(t, true)) : n();
    }, e.exports = _;
  }, function (e, t) {
    var n = function (e) {
      e = e || {};var t,
          n = e.Base64,
          r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          o = function (e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e.charAt(n)] = n;return t;
      }(r),
          i = String.fromCharCode,
          a = function (e) {
        if (e.length < 2) {
          var t = e.charCodeAt(0);return t < 128 ? e : t < 2048 ? i(192 | t >>> 6) + i(128 | 63 & t) : i(224 | t >>> 12 & 15) + i(128 | t >>> 6 & 63) + i(128 | 63 & t);
        }var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);return i(240 | t >>> 18 & 7) + i(128 | t >>> 12 & 63) + i(128 | t >>> 6 & 63) + i(128 | 63 & t);
      },
          s = /[�-�][�-�F]|[^\x00-\x7F]/g,
          c = function (e) {
        return e.replace(s, a);
      },
          u = function (e) {
        var t = [0, 2, 1][e.length % 3],
            n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);return [r.charAt(n >>> 18), r.charAt(n >>> 12 & 63), t >= 2 ? "=" : r.charAt(n >>> 6 & 63), t >= 1 ? "=" : r.charAt(63 & n)].join("");
      },
          l = e.btoa ? function (t) {
        return e.btoa(t);
      } : function (e) {
        return e.replace(/[\s\S]{1,3}/g, u);
      },
          d = t ? function (e) {
        return (e.constructor === t.constructor ? e : new t(e)).toString("base64");
      } : function (e) {
        return l(c(e));
      },
          f = function (e, t) {
        return t ? d(String(e)).replace(/[+\/]/g, function (e) {
          return "+" == e ? "-" : "_";
        }).replace(/=/g, "") : d(String(e));
      },
          h = function (e) {
        return f(e, true);
      },
          p = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
          m = function (e) {
        switch (e.length) {case 4:
            var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                n = t - 65536;return i(55296 + (n >>> 10)) + i(56320 + (1023 & n));case 3:
            return i((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));default:
            return i((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));}
      },
          g = function (e) {
        return e.replace(p, m);
      },
          y = function (e) {
        var t = e.length,
            n = t % 4,
            r = (t > 0 ? o[e.charAt(0)] << 18 : 0) | (t > 1 ? o[e.charAt(1)] << 12 : 0) | (t > 2 ? o[e.charAt(2)] << 6 : 0) | (t > 3 ? o[e.charAt(3)] : 0),
            a = [i(r >>> 16), i(r >>> 8 & 255), i(255 & r)];return a.length -= [0, 0, 2, 1][n], a.join("");
      },
          C = e.atob ? function (t) {
        return e.atob(t);
      } : function (e) {
        return e.replace(/[\s\S]{1,4}/g, y);
      },
          v = t ? function (e) {
        return (e.constructor === t.constructor ? e : new t(e, "base64")).toString();
      } : function (e) {
        return g(C(e));
      },
          x = function (e) {
        return v(String(e).replace(/[-_]/g, function (e) {
          return "-" == e ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
      };return { VERSION: "2.1.9", atob: C, btoa: l, fromBase64: x, toBase64: f, utob: c, encode: f, encodeURI: h, btou: g, decode: x, noConflict: function () {
          var t = e.Base64;return e.Base64 = n, t;
        } };
    }();e.exports = n;
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
        var r = e._refresh(e._node);K(e, "length", r.length), n(r, e), e._inc = t;
      }
    }function c() {}function u(e, t) {
      for (var n = e.length; n--;) if (e[n] === t) return n;
    }function l(e, t, n, r) {
      if (r ? t[u(t, r)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;var o = e.ownerDocument;o && (r && C(o, e, r), y(o, e, n));
      }
    }function d(e, t, n) {
      var r = u(t, n);if (!(r >= 0)) throw o(ae, new Error(e.tagName + "@" + n));for (var i = t.length - 1; r < i;) t[r] = t[++r];if (t.length = i, e) {
        var a = e.ownerDocument;a && (C(a, e, n), n.ownerElement = null);
      }
    }function f(e) {
      if (this._features = {}, e) for (var t in e) this._features = e[t];
    }function h() {}function p(e) {
      return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
    }function m(e, t) {
      if (t(e)) return true;if (e = e.firstChild) do {
        if (m(e, t)) return true;
      } while (e = e.nextSibling);
    }function g() {}function y(e, t, n) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
    }function C(e, t, n, r) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
    }function v(e, t, n) {
      if (e && e._inc) {
        e._inc++;var r = t.childNodes;if (n) r[r.length++] = n;else {
          for (var o = t.firstChild, i = 0; o;) r[i++] = o, o = o.nextSibling;r.length = i;
        }
      }
    }function x(e, t) {
      var n = t.previousSibling,
          r = t.nextSibling;return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, v(e.ownerDocument, e), t;
    }function k(e, t, n) {
      var r = t.parentNode;if (r && r.removeChild(t), t.nodeType === te) {
        var o = t.firstChild;if (null == o) return t;var i = t.lastChild;
      } else o = i = t;var a = n ? n.previousSibling : e.lastChild;o.previousSibling = a, i.nextSibling = n, a ? a.nextSibling = o : e.firstChild = o, null == n ? e.lastChild = i : n.previousSibling = i;do {
        o.parentNode = e;
      } while (o !== i && (o = o.nextSibling));return v(e.ownerDocument || e, e), t.nodeType == te && (t.firstChild = t.lastChild = null), t;
    }function S(e, t) {
      var n = t.parentNode;if (n) {
        var r = e.lastChild;n.removeChild(t);var r = e.lastChild;
      }var r = e.lastChild;return t.parentNode = e, t.previousSibling = r, t.nextSibling = null, r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, v(e.ownerDocument, e, t), t;
    }function A() {
      this._nsMap = {};
    }function b() {}function R() {}function T() {}function E() {}function w() {}function _() {}function N() {}function B() {}function D() {}function O() {}function P() {}function I() {}function M(e, t) {
      var n = [],
          r = 9 == this.nodeType ? this.documentElement : this,
          o = r.prefix,
          i = r.namespaceURI;if (i && null == o) {
        var o = r.lookupPrefix(i);if (null == o) var a = [{ namespace: i, prefix: null }];
      }return F(this, n, e, t, a), n.join("");
    }function L(e, t, n) {
      var r = e.prefix || "",
          o = e.namespaceURI;if (!r && !o) return false;if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === o || "http://www.w3.org/2000/xmlns/" == o) return false;for (var i = n.length; i--;) {
        var a = n[i];if (a.prefix == r) return a.namespace != o;
      }return true;
    }function F(e, t, n, r, o) {
      if (r) {
        if (!(e = r(e))) return;if ("string" == typeof e) return undefined;
      }switch (e.nodeType) {case q:
          o || (o = []);var i = (o.length, e.attributes),
              a = i.length,
              s = e.firstChild,
              c = e.tagName;n = z === e.namespaceURI || n, t.push("<", c);for (var u = 0; u < a; u++) {
            var l = i.item(u);"xmlns" == l.prefix ? o.push({ prefix: l.localName, namespace: l.value }) : "xmlns" == l.nodeName && o.push({ prefix: "", namespace: l.value });
          }for (var u = 0; u < a; u++) {
            var l = i.item(u);if (L(l, n, o)) {
              var d = l.prefix || "",
                  f = l.namespaceURI,
                  h = d ? " xmlns:" + d : " xmlns";t.push(h, '="', f, '"'), o.push({ prefix: d, namespace: f });
            }F(l, t, n, r, o);
          }if (L(e, n, o)) {
            var d = e.prefix || "",
                f = e.namespaceURI,
                h = d ? " xmlns:" + d : " xmlns";t.push(h, '="', f, '"'), o.push({ prefix: d, namespace: f });
          }if (s || n && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
            if (t.push(">"), n && /^script$/i.test(c)) for (; s;) s.data ? t.push(s.data) : F(s, t, n, r, o), s = s.nextSibling;else for (; s;) F(s, t, n, r, o), s = s.nextSibling;t.push("</", c, ">");
          } else t.push("/>");return;case J:case te:
          for (var s = e.firstChild; s;) F(s, t, n, r, o), s = s.nextSibling;return;case V:
          return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, p), '"');case X:
          return t.push(e.data.replace(/[<&]/g, p));case $:
          return t.push("<![CDATA[", e.data, "]]>");case Y:
          return t.push("\x3c!--", e.data, "--\x3e");case ee:
          var m = e.publicId,
              g = e.systemId;if (t.push("<!DOCTYPE ", e.name), m) t.push(' PUBLIC "', m), g && "." != g && t.push('" "', g), t.push('">');else if (g && "." != g) t.push(' SYSTEM "', g, '">');else {
            var y = e.internalSubset;y && t.push(" [", y, "]"), t.push(">");
          }return;case Z:
          return t.push("<?", e.target, " ", e.data, "?>");case W:
          return t.push("&", e.nodeName, ";");default:
          t.push("??", e.nodeName);}
    }function U(e, t, n) {
      var r;switch (t.nodeType) {case q:
          r = t.cloneNode(false), r.ownerDocument = e;case te:
          break;case V:
          n = true;}if (r || (r = t.cloneNode(false)), r.ownerDocument = e, r.parentNode = null, n) for (var o = t.firstChild; o;) r.appendChild(U(e, o, n)), o = o.nextSibling;return r;
    }function j(e, t, n) {
      var r = new t.constructor();for (var o in t) {
        var a = t[o];"object" != typeof a && a != r[o] && (r[o] = a);
      }switch (t.childNodes && (r.childNodes = new i()), r.ownerDocument = e, r.nodeType) {case q:
          var s = t.attributes,
              u = r.attributes = new c(),
              l = s.length;u._ownerElement = r;for (var d = 0; d < l; d++) r.setAttributeNode(j(e, s.item(d), true));break;case V:
          n = true;}if (n) for (var f = t.firstChild; f;) r.appendChild(j(e, f, n)), f = f.nextSibling;return r;
    }function K(e, t, n) {
      e[t] = n;
    }function H(e) {
      switch (e.nodeType) {case q:case te:
          var t = [];for (e = e.firstChild; e;) 7 !== e.nodeType && 8 !== e.nodeType && t.push(H(e)), e = e.nextSibling;return t.join("");default:
          return e.nodeValue;}
    }var z = "http://www.w3.org/1999/xhtml",
        G = {},
        q = G.ELEMENT_NODE = 1,
        V = G.ATTRIBUTE_NODE = 2,
        X = G.TEXT_NODE = 3,
        $ = G.CDATA_SECTION_NODE = 4,
        W = G.ENTITY_REFERENCE_NODE = 5,
        Q = G.ENTITY_NODE = 6,
        Z = G.PROCESSING_INSTRUCTION_NODE = 7,
        Y = G.COMMENT_NODE = 8,
        J = G.DOCUMENT_NODE = 9,
        ee = G.DOCUMENT_TYPE_NODE = 10,
        te = G.DOCUMENT_FRAGMENT_NODE = 11,
        ne = G.NOTATION_NODE = 12,
        re = {},
        oe = {},
        ie = (re.INDEX_SIZE_ERR = (oe[1] = "Index size error", 1), re.DOMSTRING_SIZE_ERR = (oe[2] = "DOMString size error", 2), re.HIERARCHY_REQUEST_ERR = (oe[3] = "Hierarchy request error", 3)),
        ae = (re.WRONG_DOCUMENT_ERR = (oe[4] = "Wrong document", 4), re.INVALID_CHARACTER_ERR = (oe[5] = "Invalid character", 5), re.NO_DATA_ALLOWED_ERR = (oe[6] = "No data allowed", 6), re.NO_MODIFICATION_ALLOWED_ERR = (oe[7] = "No modification allowed", 7), re.NOT_FOUND_ERR = (oe[8] = "Not found", 8)),
        se = (re.NOT_SUPPORTED_ERR = (oe[9] = "Not supported", 9), re.INUSE_ATTRIBUTE_ERR = (oe[10] = "Attribute in use", 10));re.INVALID_STATE_ERR = (oe[11] = "Invalid state", 11), re.SYNTAX_ERR = (oe[12] = "Syntax error", 12), re.INVALID_MODIFICATION_ERR = (oe[13] = "Invalid modification", 13), re.NAMESPACE_ERR = (oe[14] = "Invalid namespace", 14), re.INVALID_ACCESS_ERR = (oe[15] = "Invalid access", 15);o.prototype = Error.prototype, n(re, o), i.prototype = { length: 0, item: function (e) {
        return this[e] || null;
      }, toString: function (e, t) {
        for (var n = [], r = 0; r < this.length; r++) F(this[r], n, e, t);return n.join("");
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
        var r = new g();if (r.implementation = this, r.childNodes = new i(), r.doctype = n, n && r.appendChild(n), t) {
          var o = r.createElementNS(e, t);r.appendChild(o);
        }return r;
      }, createDocumentType: function (e, t, n) {
        var r = new _();return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
      } }, h.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function (e, t) {
        return k(this, e, t);
      }, replaceChild: function (e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
      }, removeChild: function (e) {
        return x(this, e);
      }, appendChild: function (e) {
        return this.insertBefore(e, null);
      }, hasChildNodes: function () {
        return null != this.firstChild;
      }, cloneNode: function (e) {
        return j(this.ownerDocument || this, this, e);
      }, normalize: function () {
        for (var e = this.firstChild; e;) {
          var t = e.nextSibling;t && t.nodeType == X && e.nodeType == X ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t);
        }
      }, isSupported: function (e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
      }, hasAttributes: function () {
        return this.attributes.length > 0;
      }, lookupPrefix: function (e) {
        for (var t = this; t;) {
          var n = t._nsMap;if (n) for (var r in n) if (n[r] == e) return r;t = t.nodeType == V ? t.ownerDocument : t.parentNode;
        }return null;
      }, lookupNamespaceURI: function (e) {
        for (var t = this; t;) {
          var n = t._nsMap;if (n && e in n) return n[e];t = t.nodeType == V ? t.ownerDocument : t.parentNode;
        }return null;
      }, isDefaultNamespace: function (e) {
        return null == this.lookupPrefix(e);
      } }, n(G, h), n(G, h.prototype), g.prototype = { nodeName: "#document", nodeType: J, doctype: null, documentElement: null, _inc: 1, insertBefore: function (e, t) {
        if (e.nodeType == te) {
          for (var n = e.firstChild; n;) {
            var r = n.nextSibling;this.insertBefore(n, t), n = r;
          }return e;
        }return null == this.documentElement && e.nodeType == q && (this.documentElement = e), k(this, e, t), e.ownerDocument = this, e;
      }, removeChild: function (e) {
        return this.documentElement == e && (this.documentElement = null), x(this, e);
      }, importNode: function (e, t) {
        return U(this, e, t);
      }, getElementById: function (e) {
        var t = null;return m(this.documentElement, function (n) {
          if (n.nodeType == q && n.getAttribute("id") == e) return t = n, true;
        }), t;
      }, createElement: function (e) {
        var t = new A();return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new i(), (t.attributes = new c())._ownerElement = t, t;
      }, createDocumentFragment: function () {
        var e = new O();return e.ownerDocument = this, e.childNodes = new i(), e;
      }, createTextNode: function (e) {
        var t = new T();return t.ownerDocument = this, t.appendData(e), t;
      }, createComment: function (e) {
        var t = new E();return t.ownerDocument = this, t.appendData(e), t;
      }, createCDATASection: function (e) {
        var t = new w();return t.ownerDocument = this, t.appendData(e), t;
      }, createProcessingInstruction: function (e, t) {
        var n = new P();return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n;
      }, createAttribute: function (e) {
        var t = new b();return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = true, t;
      }, createEntityReference: function (e) {
        var t = new D();return t.ownerDocument = this, t.nodeName = e, t;
      }, createElementNS: function (e, t) {
        var n = new A(),
            r = t.split(":"),
            o = n.attributes = new c();return n.childNodes = new i(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, o._ownerElement = n, n;
      }, createAttributeNS: function (e, t) {
        var n = new b(),
            r = t.split(":");return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = true, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
      } }, r(g, h), A.prototype = { nodeType: q, hasAttribute: function (e) {
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
        return e.nodeType === te ? this.insertBefore(e, null) : S(this, e);
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
          var n = [];return m(t, function (r) {
            r === t || r.nodeType != q || "*" !== e && r.tagName != e || n.push(r);
          }), n;
        });
      }, getElementsByTagNameNS: function (e, t) {
        return new a(this, function (n) {
          var r = [];return m(n, function (o) {
            o === n || o.nodeType !== q || "*" !== e && o.namespaceURI !== e || "*" !== t && o.localName != t || r.push(o);
          }), r;
        });
      } }, g.prototype.getElementsByTagName = A.prototype.getElementsByTagName, g.prototype.getElementsByTagNameNS = A.prototype.getElementsByTagNameNS, r(A, h), b.prototype.nodeType = V, r(b, h), R.prototype = { data: "", substringData: function (e, t) {
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
      } }, r(R, h), T.prototype = { nodeName: "#text", nodeType: X, splitText: function (e) {
        var t = this.data,
            n = t.substring(e);t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;var r = this.ownerDocument.createTextNode(n);return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
      } }, r(T, R), E.prototype = { nodeName: "#comment", nodeType: Y }, r(E, R), w.prototype = { nodeName: "#cdata-section", nodeType: $ }, r(w, R), _.prototype.nodeType = ee, r(_, h), N.prototype.nodeType = ne, r(N, h), B.prototype.nodeType = Q, r(B, h), D.prototype.nodeType = W, r(D, h), O.prototype.nodeName = "#document-fragment", O.prototype.nodeType = te, r(O, h), P.prototype.nodeType = Z, r(P, h), I.prototype.serializeToString = function (e, t, n) {
      return M.call(e, t, n);
    }, h.prototype.toString = M;try {
      Object.defineProperty && (Object.defineProperty(a.prototype, "length", { get: function () {
          return s(this), this.$$length;
        } }), Object.defineProperty(h.prototype, "textContent", { get: function () {
          return H(this);
        }, set: function (e) {
          switch (this.nodeType) {case q:case te:
              for (; this.firstChild;) this.removeChild(this.firstChild);(e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));break;default:
              this.data = e, this.value = e, this.nodeValue = e;}
        } }), K = function (e, t, n) {
        e["$$" + t] = n;
      });
    } catch (e) {}t.DOMImplementation = f, t.XMLSerializer = I;
  }, function (e, t) {
    var n = function (e) {
      var t = {},
          n = function (e) {
        return !t[e] && (t[e] = []), t[e];
      };e.on = function (e, t) {
        n(e).push(t);
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
    "use strict";
    var r = n(0),
        o = n(3),
        i = n(16),
        a = n(15),
        s = n(13),
        c = { SecretId: "", SecretKey: "", XCosSecurityToken: "", ChunkRetryTimes: 2, FileParallelLimit: 3, ChunkParallelLimit: 3, ChunkRetryTimes: 3, ChunkSize: 1048576, SliceSize: 1048576, CopyChunkParallelLimit: 20, CopyChunkSize: 10485760, CopySliceSize: 10485760, MaxPartNumber: 1e4, ProgressInterval: 1e3, UploadQueueSize: 1e4, Domain: "", ServiceDomain: "", Protocol: "", CompatibilityMode: false, ForcePathStyle: false, CorrectClockSkew: true, SystemClockOffset: 0 },
        u = function (e) {
      this.options = r.extend(r.clone(c), e || {}), this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit), this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit), this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes), this.options.ChunkSize = Math.max(1048576, this.options.ChunkSize), this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit), this.options.CopyChunkSize = Math.max(1048576, this.options.CopyChunkSize), this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize), this.options.MaxPartNumber = Math.max(1024, Math.min(1e4, this.options.MaxPartNumber)), this.options.Timeout = Math.max(0, this.options.Timeout), this.options.AppId && console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").'), o.init(this), i.init(this);
    };a.init(u, i), s.init(u, i), u.getAuthorization = r.getAuth, u.version = "0.7.9", e.exports = u;
  }, function (e, t, n) {
    var r = n(4);e.exports = r;
  }, function (e, t) {
    var n = n || function (e, t) {
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
      var e = n,
          t = e.lib,
          r = t.WordArray,
          o = t.Hasher,
          i = [],
          t = e.algo.SHA1 = o.extend({ _doReset: function () {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
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
      var e = n,
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
      var e = n,
          t = e.lib,
          r = t.WordArray,
          o = e.enc;o.Base64 = { stringify: function (e) {
          var t = e.words,
              n = e.sigBytes,
              r = this._map;e.clamp();for (var o = [], i = 0; i < n; i += 3) for (var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255, s = t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255, c = t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, u = a << 16 | s << 8 | c, l = 0; l < 4 && i + .75 * l < n; l++) o.push(r.charAt(u >>> 6 * (3 - l) & 63));var d = r.charAt(64);if (d) for (; o.length % 4;) o.push(d);return o.join("");
        }, parse: function (e) {
          var t = e.length,
              n = this._map,
              o = n.charAt(64);if (o) {
            var i = e.indexOf(o);-1 != i && (t = i);
          }for (var a = [], s = 0, c = 0; c < t; c++) if (c % 4) {
            var u = n.indexOf(e.charAt(c - 1)) << c % 4 * 2,
                l = n.indexOf(e.charAt(c)) >>> 6 - c % 4 * 2;a[s >>> 2] |= (u | l) << 24 - s % 4 * 8, s++;
          }return r.create(a, s);
        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), e.exports = n;
  }, function (e, t) {
    function n(e) {
      return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(o, "");
    }var r = new RegExp("^([^a-zA-Z_À-ÖØ-öø-ÿͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�])|^((x|X)(m|M)(l|L))|([^a-zA-Z_À-ÖØ-öø-ÿͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�-.0-9·̀-ͯ‿⁀])", "g"),
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
            var l = [];for (var d in r) if (r[d] instanceof Array) for (var f in r[d]) l.push(o(d, e(r[d][f], 0, s + 1), null, s + 1, i(r[d][f]).length));else l.push(o(d, e(r[d], 0, s + 1), null, s + 1));return t.prettyPrint && l.length > 0 && l.push("\n"), l.join("");case "function":
            return r();default:
            return t.escape ? n(r) : "" + r;}
      }(e, 0, 0);
    },
        s = function (e) {
      var t = ['<?xml version="1.0" encoding="UTF-8"'];return e && t.push(' standalone="yes"'), t.push("?>"), t.join("");
    },
        c = function (e, t) {
      if (t || (t = { xmlHeader: { standalone: true }, prettyPrint: true, indent: "  " }), "string" == typeof e) try {
        e = JSON.parse(e.toString());
      } catch (e) {
        return false;
      }var n = "",
          r = "";return t && ("object" == typeof t ? (t.xmlHeader && (n = s(!!t.xmlHeader.standalone)), undefined !== t.docType && (r = "<!DOCTYPE " + t.docType + ">")) : n = s()), t = t || {}, [n, t.prettyPrint && r ? "\n" : "", r, a(e, t)].join("").replace(/\n{2,}/g, "\n").replace(/\s+$/g, "");
    };e.exports = c;
  }, function (e, t) {
    var n = function (e) {
      function t(e, t) {
        return e << t | e >>> 32 - t;
      }function n(e, t) {
        var n, r, o, i, a;return o = 2147483648 & e, i = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i;
      }function r(e, t, n) {
        return e & t | ~e & n;
      }function o(e, t, n) {
        return e & n | t & ~n;
      }function i(e, t, n) {
        return e ^ t ^ n;
      }function a(e, t, n) {
        return t ^ (e | ~n);
      }function s(e, o, i, a, s, c, u) {
        return e = n(e, n(n(r(o, i, a), s), u)), n(t(e, c), o);
      }function c(e, r, i, a, s, c, u) {
        return e = n(e, n(n(o(r, i, a), s), u)), n(t(e, c), r);
      }function u(e, r, o, a, s, c, u) {
        return e = n(e, n(n(i(r, o, a), s), u)), n(t(e, c), r);
      }function l(e, r, o, i, s, c, u) {
        return e = n(e, n(n(a(r, o, i), s), u)), n(t(e, c), r);
      }function d(e) {
        var t,
            n,
            r = "",
            o = "";for (n = 0; n <= 3; n++) t = e >>> 8 * n & 255, o = "0" + t.toString(16), r += o.substr(o.length - 2, 2);return r;
      }var f,
          h,
          p,
          m,
          g,
          y,
          C,
          v,
          x,
          k = Array();for (e = function (e) {
        e = e.replace(/\r\n/g, "\n");for (var t = "", n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128));
        }return t;
      }(e), k = function (e) {
        for (var t, n = e.length, r = n + 8, o = (r - r % 64) / 64, i = 16 * (o + 1), a = Array(i - 1), s = 0, c = 0; c < n;) t = (c - c % 4) / 4, s = c % 4 * 8, a[t] = a[t] | e.charCodeAt(c) << s, c++;return t = (c - c % 4) / 4, s = c % 4 * 8, a[t] = a[t] | 128 << s, a[i - 2] = n << 3, a[i - 1] = n >>> 29, a;
      }(e), y = 1732584193, C = 4023233417, v = 2562383102, x = 271733878, f = 0; f < k.length; f += 16) h = y, p = C, m = v, g = x, y = s(y, C, v, x, k[f + 0], 7, 3614090360), x = s(x, y, C, v, k[f + 1], 12, 3905402710), v = s(v, x, y, C, k[f + 2], 17, 606105819), C = s(C, v, x, y, k[f + 3], 22, 3250441966), y = s(y, C, v, x, k[f + 4], 7, 4118548399), x = s(x, y, C, v, k[f + 5], 12, 1200080426), v = s(v, x, y, C, k[f + 6], 17, 2821735955), C = s(C, v, x, y, k[f + 7], 22, 4249261313), y = s(y, C, v, x, k[f + 8], 7, 1770035416), x = s(x, y, C, v, k[f + 9], 12, 2336552879), v = s(v, x, y, C, k[f + 10], 17, 4294925233), C = s(C, v, x, y, k[f + 11], 22, 2304563134), y = s(y, C, v, x, k[f + 12], 7, 1804603682), x = s(x, y, C, v, k[f + 13], 12, 4254626195), v = s(v, x, y, C, k[f + 14], 17, 2792965006), C = s(C, v, x, y, k[f + 15], 22, 1236535329), y = c(y, C, v, x, k[f + 1], 5, 4129170786), x = c(x, y, C, v, k[f + 6], 9, 3225465664), v = c(v, x, y, C, k[f + 11], 14, 643717713), C = c(C, v, x, y, k[f + 0], 20, 3921069994), y = c(y, C, v, x, k[f + 5], 5, 3593408605), x = c(x, y, C, v, k[f + 10], 9, 38016083), v = c(v, x, y, C, k[f + 15], 14, 3634488961), C = c(C, v, x, y, k[f + 4], 20, 3889429448), y = c(y, C, v, x, k[f + 9], 5, 568446438), x = c(x, y, C, v, k[f + 14], 9, 3275163606), v = c(v, x, y, C, k[f + 3], 14, 4107603335), C = c(C, v, x, y, k[f + 8], 20, 1163531501), y = c(y, C, v, x, k[f + 13], 5, 2850285829), x = c(x, y, C, v, k[f + 2], 9, 4243563512), v = c(v, x, y, C, k[f + 7], 14, 1735328473), C = c(C, v, x, y, k[f + 12], 20, 2368359562), y = u(y, C, v, x, k[f + 5], 4, 4294588738), x = u(x, y, C, v, k[f + 8], 11, 2272392833), v = u(v, x, y, C, k[f + 11], 16, 1839030562), C = u(C, v, x, y, k[f + 14], 23, 4259657740), y = u(y, C, v, x, k[f + 1], 4, 2763975236), x = u(x, y, C, v, k[f + 4], 11, 1272893353), v = u(v, x, y, C, k[f + 7], 16, 4139469664), C = u(C, v, x, y, k[f + 10], 23, 3200236656), y = u(y, C, v, x, k[f + 13], 4, 681279174), x = u(x, y, C, v, k[f + 0], 11, 3936430074), v = u(v, x, y, C, k[f + 3], 16, 3572445317), C = u(C, v, x, y, k[f + 6], 23, 76029189), y = u(y, C, v, x, k[f + 9], 4, 3654602809), x = u(x, y, C, v, k[f + 12], 11, 3873151461), v = u(v, x, y, C, k[f + 15], 16, 530742520), C = u(C, v, x, y, k[f + 2], 23, 3299628645), y = l(y, C, v, x, k[f + 0], 6, 4096336452), x = l(x, y, C, v, k[f + 7], 10, 1126891415), v = l(v, x, y, C, k[f + 14], 15, 2878612391), C = l(C, v, x, y, k[f + 5], 21, 4237533241), y = l(y, C, v, x, k[f + 12], 6, 1700485571), x = l(x, y, C, v, k[f + 3], 10, 2399980690), v = l(v, x, y, C, k[f + 10], 15, 4293915773), C = l(C, v, x, y, k[f + 1], 21, 2240044497), y = l(y, C, v, x, k[f + 8], 6, 1873313359), x = l(x, y, C, v, k[f + 15], 10, 4264355552), v = l(v, x, y, C, k[f + 6], 15, 2734768916), C = l(C, v, x, y, k[f + 13], 21, 1309151649), y = l(y, C, v, x, k[f + 4], 6, 4149444226), x = l(x, y, C, v, k[f + 11], 10, 3174756917), v = l(v, x, y, C, k[f + 2], 15, 718787259), C = l(C, v, x, y, k[f + 9], 21, 3951481745), y = n(y, h), C = n(C, p), v = n(v, m), x = n(x, g);return (d(y) + d(C) + d(v) + d(x)).toLowerCase();
    };e.exports = n;
  }, function (e, t) {
    var n = function (e) {
      var t,
          n,
          r,
          o = [],
          i = Object.keys(e);for (t = 0; t < i.length; t++) n = i[t], r = e[n] || "", o.push(n + "=" + encodeURIComponent(r));return o.join("&");
    },
        r = function (e, t) {
      var r,
          o = e.filePath,
          i = e.headers || {},
          a = e.url,
          s = e.method,
          c = e.onProgress,
          u = function (e, n) {
        t(e, { statusCode: n.statusCode, headers: n.header }, n.data);
      };if (o) {
        var l,
            d = a.match(/^(https?:\/\/[^\/]+\/)([^\/]*\/?)(.*)$/);e.pathStyle ? (l = decodeURIComponent(d[3] || ""), a = d[1] + d[2]) : (l = decodeURIComponent(d[2] + d[3] || ""), a = d[1]);var f = { key: l, success_action_status: 200, Signature: i.Authorization },
            h = ["Cache-Control", "Content-Type", "Content-Disposition", "Content-Encoding", "Expires", "x-cos-storage-class", "x-cos-security-token"];for (var p in e.headers) e.headers.hasOwnProperty(p) && (p.indexOf("x-cos-meta-") > -1 || h.indexOf(p) > -1) && (f[p] = e.headers[p]);i["x-cos-acl"] && (f.acl = i["x-cos-acl"]), !f["Content-Type"] && (f["Content-Type"] = "");var m = {};r = wx.uploadFile({ url: a, method: s, name: "file", filePath: o, formData: f, success: function (e) {
            !e.header && (e.header = m), u(null, e);
          }, fail: function (e) {
            u(e.errMsg, e);
          } }), r.onHeadersReceived && r.onHeadersReceived(function (e) {
          m = e.header;
        }), r.onProgressUpdate(function (e) {
          c({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend, progress: e.progress / 100 });
        });
      } else {
        var g = e.qs && n(e.qs) || "";g && (a += (a.indexOf("?") > -1 ? "&" : "?") + g), i["Content-Length"] && delete i["Content-Length"], wx.request({ url: a, method: s, header: i, dataType: "text", data: e.body, success: function (e) {
            u(null, e);
          }, fail: function (e) {
            u(e.errMsg, e);
          } });
      }return r;
    };e.exports = r;
  }, function (e, t, n) {
    var r = n(11).DOMParser,
        o = function (e) {
      "use strict";
      function t(e) {
        var t = e.localName;return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), t;
      }function n(e) {
        return e.prefix;
      }function o(e) {
        return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e;
      }function i(e, t, n, r) {
        for (var o = 0; o < e.length; o++) {
          var i = e[o];if ("string" == typeof i) {
            if (i == r) break;
          } else if (i instanceof RegExp) {
            if (i.test(r)) break;
          } else if ("function" == typeof i && i(t, n, r)) break;
        }return o != e.length;
      }function a(t, n, r) {
        switch (e.arrayAccessForm) {case "property":
            t[n] instanceof Array ? t[n + "_asArray"] = t[n] : t[n + "_asArray"] = [t[n]];}!(t[n] instanceof Array) && e.arrayAccessFormPaths.length > 0 && i(e.arrayAccessFormPaths, t, n, r) && (t[n] = [t[n]]);
      }function s(e) {
        var t = e.split(/[-T:+Z]/g),
            n = new Date(t[0], t[1] - 1, t[2]),
            r = t[5].split(".");if (n.setHours(t[3], t[4], r[0]), r.length > 1 && n.setMilliseconds(r[1]), t[6] && t[7]) {
          var o = 60 * t[6] + Number(t[7]);o = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * o : o), n.setMinutes(n.getMinutes() - o - n.getTimezoneOffset());
        } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));return n;
      }function c(t, n, r) {
        if (e.datetimeAccessFormPaths.length > 0) {
          var o = r.split(".#")[0];return i(e.datetimeAccessFormPaths, t, n, o) ? s(t) : t;
        }return t;
      }function u(t, n, r, o) {
        return !(n == A.ELEMENT_NODE && e.xmlElementsFilter.length > 0) || i(e.xmlElementsFilter, t, r, o);
      }function l(r, o) {
        if (r.nodeType == A.DOCUMENT_NODE) {
          for (var i = new Object(), s = r.childNodes, d = 0; d < s.length; d++) {
            var f = s.item(d);if (f.nodeType == A.ELEMENT_NODE) {
              var h = t(f);i[h] = l(f, h);
            }
          }return i;
        }if (r.nodeType == A.ELEMENT_NODE) {
          var i = new Object();i.__cnt = 0;for (var s = r.childNodes, d = 0; d < s.length; d++) {
            var f = s.item(d),
                h = t(f);if (f.nodeType != A.COMMENT_NODE) {
              var p = o + "." + h;u(i, f.nodeType, h, p) && (i.__cnt++, null == i[h] ? (i[h] = l(f, p), a(i, h, p)) : (null != i[h] && (i[h] instanceof Array || (i[h] = [i[h]], a(i, h, p))), i[h][i[h].length] = l(f, p)));
            }
          }for (var m = 0; m < r.attributes.length; m++) {
            var g = r.attributes.item(m);i.__cnt++, i[e.attributePrefix + g.name] = g.value;
          }var y = n(r);return null != y && "" != y && (i.__cnt++, i.__prefix = y), null != i["#text"] && (i.__text = i["#text"], i.__text instanceof Array && (i.__text = i.__text.join("\n")), e.stripWhitespaces && (i.__text = i.__text.trim()), delete i["#text"], "property" == e.arrayAccessForm && delete i["#text_asArray"], i.__text = c(i.__text, h, o + "." + h)), null != i["#cdata-section"] && (i.__cdata = i["#cdata-section"], delete i["#cdata-section"], "property" == e.arrayAccessForm && delete i["#cdata-section_asArray"]), 0 == i.__cnt && "text" == e.emptyNodeForm ? i = "" : 1 == i.__cnt && null != i.__text ? i = i.__text : 1 != i.__cnt || null == i.__cdata || e.keepCData ? i.__cnt > 1 && null != i.__text && e.skipEmptyTextNodesForObj && (e.stripWhitespaces && "" == i.__text || "" == i.__text.trim()) && delete i.__text : i = i.__cdata, delete i.__cnt, !e.enableToStringFunc || null == i.__text && null == i.__cdata || (i.toString = function () {
            return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "");
          }), i;
        }if (r.nodeType == A.TEXT_NODE || r.nodeType == A.CDATA_SECTION_NODE) return r.nodeValue;
      }function d(t, n, r, i) {
        var a = "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + n;if (null != r) for (var s = 0; s < r.length; s++) {
          var c = r[s],
              u = t[c];e.escapeMode && (u = o(u)), a += " " + c.substr(e.attributePrefix.length) + "=", e.useDoubleQuotes ? a += '"' + u + '"' : a += "'" + u + "'";
        }return a += i ? "/>" : ">";
      }function f(e, t) {
        return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">";
      }function h(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length);
      }function p(t, n) {
        return !!("property" == e.arrayAccessForm && h(n.toString(), "_asArray") || 0 == n.toString().indexOf(e.attributePrefix) || 0 == n.toString().indexOf("__") || t[n] instanceof Function);
      }function m(e) {
        var t = 0;if (e instanceof Object) for (var n in e) p(e, n) || t++;return t;
      }function g(t, n, r) {
        return 0 == e.jsonPropertiesFilter.length || "" == r || i(e.jsonPropertiesFilter, t, n, r);
      }function y(t) {
        var n = [];if (t instanceof Object) for (var r in t) -1 == r.toString().indexOf("__") && 0 == r.toString().indexOf(e.attributePrefix) && n.push(r);return n;
      }function C(t) {
        var n = "";return null != t.__cdata && (n += "<![CDATA[" + t.__cdata + "]]>"), null != t.__text && (e.escapeMode ? n += o(t.__text) : n += t.__text), n;
      }function v(t) {
        var n = "";return t instanceof Object ? n += C(t) : null != t && (e.escapeMode ? n += o(t) : n += t), n;
      }function x(e, t) {
        return "" === e ? t : e + "." + t;
      }function k(e, t, n, r) {
        var o = "";if (0 == e.length) o += d(e, t, n, true);else for (var i = 0; i < e.length; i++) o += d(e[i], t, y(e[i]), false), o += S(e[i], x(r, t)), o += f(e[i], t);return o;
      }function S(e, t) {
        var n = "";if (m(e) > 0) for (var r in e) if (!p(e, r) && ("" == t || g(e, r, x(t, r)))) {
          var o = e[r],
              i = y(o);if (null == o || undefined == o) n += d(o, r, i, true);else if (o instanceof Object) {
            if (o instanceof Array) n += k(o, r, i, t);else if (o instanceof Date) n += d(o, r, i, false), n += o.toISOString(), n += f(o, r);else {
              var a = m(o);a > 0 || null != o.__text || null != o.__cdata ? (n += d(o, r, i, false), n += S(o, x(t, r)), n += f(o, r)) : n += d(o, r, i, true);
            }
          } else n += d(o, r, i, false), n += v(o), n += f(o, r);
        }return n += v(e);
      }e = e || {}, function () {
        undefined === e.escapeMode && (e.escapeMode = true), e.attributePrefix = e.attributePrefix || "_", e.arrayAccessForm = e.arrayAccessForm || "none", e.emptyNodeForm = e.emptyNodeForm || "text", undefined === e.enableToStringFunc && (e.enableToStringFunc = true), e.arrayAccessFormPaths = e.arrayAccessFormPaths || [], undefined === e.skipEmptyTextNodesForObj && (e.skipEmptyTextNodesForObj = true), undefined === e.stripWhitespaces && (e.stripWhitespaces = true), e.datetimeAccessFormPaths = e.datetimeAccessFormPaths || [], undefined === e.useDoubleQuotes && (e.useDoubleQuotes = false), e.xmlElementsFilter = e.xmlElementsFilter || [], e.jsonPropertiesFilter = e.jsonPropertiesFilter || [], undefined === e.keepCData && (e.keepCData = false);
      }();var A = { ELEMENT_NODE: 1, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, COMMENT_NODE: 8, DOCUMENT_NODE: 9 };this.parseXmlString = function (e) {
        if (undefined === e) return null;var t;if (r) {
          var n = new r(),
              o = null;try {
            o = n.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
          } catch (e) {
            o = null;
          }try {
            t = n.parseFromString(e, "text/xml"), null != o && t.getElementsByTagNameNS(o, "parsererror").length > 0 && (t = null);
          } catch (e) {
            t = null;
          }
        } else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e);return t;
      }, this.asArray = function (e) {
        return undefined === e || null == e ? [] : e instanceof Array ? e : [e];
      }, this.toXmlDateTime = function (e) {
        return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null;
      }, this.asDateTime = function (e) {
        return "string" == typeof e ? s(e) : e;
      }, this.xml2json = function (e) {
        return l(e);
      }, this.xml_str2json = function (e) {
        var t = this.parseXmlString(e);return null != t ? this.xml2json(t) : null;
      }, this.json2xml_str = function (e) {
        return S(e, "");
      }, this.json2xml = function (e) {
        var t = this.json2xml_str(e);return this.parseXmlString(t);
      }, this.getVersion = function () {
        return "1.2.0";
      };
    },
        i = function (e) {
      if (!e) return null;var t = new r(),
          n = t.parseFromString(e, "text/xml"),
          i = new o(),
          a = i.xml2json(n);return a.html && a.getElementsByTagName("parsererror").length ? null : a;
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
          d = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };return c && a.setDocumentLocator(c), r.errorHandler = o(s, a, c), r.domBuilder = n.domBuilder || a, /\/x?html?$/.test(t) && (d.nbsp = " ", d.copy = "©", u[""] = "http://www.w3.org/1999/xhtml"), u.xml = u.xml || "http://www.w3.org/XML/1998/namespace", e ? r.parse(e, u, d) : r.errorHandler.error("invalid doc source"), a.doc;
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
    });var l = n(12).XMLReader,
        d = t.DOMImplementation = n(2).DOMImplementation;t.XMLSerializer = n(2).XMLSerializer, t.DOMParser = r;
  }, function (e, t) {
    function n() {}function r(e, t, n, r, u) {
      function h(e) {
        if (e > 65535) {
          e -= 65536;var t = 55296 + (e >> 10),
              n = 56320 + (1023 & e);return String.fromCharCode(t, n);
        }return String.fromCharCode(e);
      }function p(e) {
        var t = e.slice(1, -1);return t in n ? n[t] : "#" === t.charAt(0) ? h(parseInt(t.substr(1).replace("x", "0x"))) : (u.error("entity not found:" + e), e);
      }function m(t) {
        if (t > A) {
          var n = e.substring(A, t).replace(/&#?\w+;/g, p);x && g(A), r.characters(n, 0, t - A), A = t;
        }
      }function g(t, n) {
        for (; t >= C && (n = v.exec(e));) y = n.index, C = y + n[0].length, x.lineNumber++;x.columnNumber = t - y + 1;
      }for (var y = 0, C = 0, v = /.*(?:\r\n?|\n)|.*$/g, x = r.locator, k = [{ currentNSMap: t }], S = {}, A = 0;;) {
        try {
          var b = e.indexOf("<", A);if (b < 0) {
            if (!e.substr(A).match(/^\s*$/)) {
              var R = r.doc,
                  T = R.createTextNode(e.substr(A));R.appendChild(T), r.currentElement = T;
            }return;
          }switch (b > A && m(b), e.charAt(b + 1)) {case "/":
              var E = e.indexOf(">", b + 3),
                  w = e.substring(b + 2, E),
                  _ = k.pop();E < 0 ? (w = e.substring(b + 2).replace(/[\s<].*/, ""), u.error("end tag name: " + w + " is not complete:" + _.tagName), E = b + 1 + w.length) : w.match(/\s</) && (w = w.replace(/[\s<].*/, ""), u.error("end tag name: " + w + " maybe not complete"), E = b + 1 + w.length);var N = _.localNSMap,
                  B = _.tagName == w;if (B || _.tagName && _.tagName.toLowerCase() == w.toLowerCase()) {
                if (r.endElement(_.uri, _.localName, w), N) for (var D in N) r.endPrefixMapping(D);B || u.fatalError("end tag name: " + w + " is not match the current start tagName:" + _.tagName);
              } else k.push(_);E++;break;case "?":
              x && g(b), E = d(e, b, r);break;case "!":
              x && g(b), E = l(e, b, r, u);break;default:
              x && g(b);var O = new f(),
                  P = k[k.length - 1].currentNSMap,
                  E = i(e, b, O, P, p, u),
                  I = O.length;if (!O.closed && c(e, E, O.tagName, S) && (O.closed = true, n.nbsp || u.warning("unclosed xml attribute")), x && I) {
                for (var M = o(x, {}), L = 0; L < I; L++) {
                  var F = O[L];g(F.offset), F.locator = o(x, {});
                }r.locator = M, a(O, r, P) && k.push(O), r.locator = x;
              } else a(O, r, P) && k.push(O);"http://www.w3.org/1999/xhtml" !== O.uri || O.closed ? E++ : E = s(e, E, O.tagName, p, r);}
        } catch (e) {
          u.error("element parse error: " + e), E = -1;
        }E > A ? A = E : m(Math.max(b, A) + 1);
      }
    }function o(e, t) {
      return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
    }function i(e, t, n, r, o, i) {
      for (var a, s, c = ++t, u = C;;) {
        var l = e.charAt(c);switch (l) {case "=":
            if (u === v) a = e.slice(t, c), u = k;else {
              if (u !== x) throw new Error("attribute equal must after attrName");u = k;
            }break;case "'":case '"':
            if (u === k || u === v) {
              if (u === v && (i.warning('attribute value must after "="'), a = e.slice(t, c)), t = c + 1, !((c = e.indexOf(l, t)) > 0)) throw new Error("attribute value no end '" + l + "' match");s = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, s, t - 1), u = A;
            } else {
              if (u != S) throw new Error('attribute value must after "="');s = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, s, t), i.warning('attribute "' + a + '" missed start quot(' + l + ")!!"), t = c + 1, u = A;
            }break;case "/":
            switch (u) {case C:
                n.setTagName(e.slice(t, c));case A:case b:case R:
                u = R, n.closed = true;case S:case v:case x:
                break;default:
                throw new Error("attribute invalid close char('/')");}break;case "":
            return i.error("unexpected end of input"), u == C && n.setTagName(e.slice(t, c)), c;case ">":
            switch (u) {case C:
                n.setTagName(e.slice(t, c));case A:case b:case R:
                break;case S:case v:
                s = e.slice(t, c), "/" === s.slice(-1) && (n.closed = true, s = s.slice(0, -1));case x:
                u === x && (s = a), u == S ? (i.warning('attribute "' + s + '" missed quot(")!!'), n.add(a, s.replace(/&#?\w+;/g, o), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && s.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + s + '" missed value!! "' + s + '" instead!!'), n.add(s, s, t));break;case k:
                throw new Error("attribute value missed!!");}return c;case "":
            l = " ";default:
            if (l <= " ") switch (u) {case C:
                n.setTagName(e.slice(t, c)), u = b;break;case v:
                a = e.slice(t, c), u = x;break;case S:
                var s = e.slice(t, c).replace(/&#?\w+;/g, o);i.warning('attribute "' + s + '" missed quot(")!!'), n.add(a, s, t);case A:
                u = b;} else switch (u) {case x:
                n.tagName;"http://www.w3.org/1999/xhtml" === r[""] && a.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), n.add(a, a, t), t = c, u = v;break;case A:
                i.warning('attribute space is required"' + a + '"!!');case b:
                u = v, t = c;break;case k:
                u = S, t = c;break;case R:
                throw new Error("elements closed character '/' and '>' must be connected to");}}c++;
      }
    }function a(e, t, n) {
      for (var r = e.tagName, o = null, i = e.length; i--;) {
        var a = e[i],
            s = a.qName,
            c = a.value,
            l = s.indexOf(":");if (l > 0) var d = a.prefix = s.slice(0, l),
            f = s.slice(l + 1),
            h = "xmlns" === d && f;else f = s, d = null, h = undefined;a.localName = f, false !== h && (null == o && (o = {}, u(n, n = {})), n[h] = o[h] = c, a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(h, c));
      }for (var i = e.length; i--;) {
        a = e[i];var d = a.prefix;d && ("xml" === d && (a.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== d && (a.uri = n[d || ""]));
      }var l = r.indexOf(":");l > 0 ? (d = e.prefix = r.slice(0, l), f = e.localName = r.slice(l + 1)) : (d = null, f = e.localName = r);var p = e.uri = n[d || ""];if (t.startElement(p, f, r, e), !e.closed) return e.currentNSMap = n, e.localNSMap = o, true;if (t.endElement(p, f, r), o) for (d in o) t.endPrefixMapping(d);
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
          }var i = p(e, t),
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
    }function f(e) {}function h(e, t) {
      return e.__proto__ = t, e;
    }function p(e, t) {
      var n,
          r = [],
          o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (o.lastIndex = t, o.exec(e); n = o.exec(e);) if (r.push(n), n[1]) return r;
    }var m = /[A-Z_a-z\xC0-\xD6\xD8-\xF6ø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�]/,
        g = new RegExp("[\\-\\.0-9" + m.source.slice(1, -1) + "\·\̀-\ͯ\‿-\⁀]"),
        y = new RegExp("^" + m.source + g.source + "*(?::" + m.source + g.source + "*)?$"),
        C = 0,
        v = 1,
        x = 2,
        k = 3,
        S = 4,
        A = 5,
        b = 6,
        R = 7;n.prototype = { parse: function (e, t, n) {
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
      } }, h({}, h.prototype) instanceof h || (h = function (e, t) {
      function n() {}n.prototype = t, n = new n();for (t in e) n[t] = e[t];return n;
    }), t.XMLReader = n;
  }, function (e, t, n) {
    function r(e, t) {
      var n = e.Bucket,
          r = e.Region,
          a = e.Key,
          s = e.UploadId,
          c = e.Level || "task",
          l = e.AsyncLimit,
          d = this,
          f = new u();if (f.on("error", function (e) {
        return t(e);
      }), f.on("get_abort_array", function (i) {
        o.call(d, { Bucket: n, Region: r, Key: a, Headers: e.Headers, AsyncLimit: l, AbortArray: i }, function (e, n) {
          if (e) return t(e);t(null, n);
        });
      }), "bucket" === c) i.call(d, { Bucket: n, Region: r }, function (e, n) {
        if (e) return t(e);f.emit("get_abort_array", n.UploadList || []);
      });else if ("file" === c) {
        if (!a) return t({ error: "abort_upload_task_no_key" });i.call(d, { Bucket: n, Region: r, Key: a }, function (e, n) {
          if (e) return t(e);f.emit("get_abort_array", n.UploadList || []);
        });
      } else {
        if ("task" !== c) return t({ error: "abort_unknown_level" });if (!s) return t({ error: "abort_upload_task_no_id" });if (!a) return t({ error: "abort_upload_task_no_key" });f.emit("get_abort_array", [{ Key: a, UploadId: s }]);
      }
    }function o(e, t) {
      var n = e.Bucket,
          r = e.Region,
          o = e.Key,
          i = e.AbortArray,
          a = e.AsyncLimit || 1,
          s = this,
          u = 0,
          l = new Array(i.length);c.eachLimit(i, a, function (t, i) {
        var a = u;if (o && o !== t.Key) return l[a] = { error: { KeyNotMatch: true } }, undefined;var c = t.UploadId || t.UploadID;s.multipartAbort({ Bucket: n, Region: r, Key: t.Key, Headers: e.Headers, UploadId: c }, function (e, o) {
          var s = { Bucket: n, Region: r, Key: t.Key, UploadId: c };l[a] = { error: e, task: s }, i(null);
        }), u++;
      }, function (e) {
        if (e) return t(e);for (var n = [], r = [], o = 0, i = l.length; o < i; o++) {
          var a = l[o];a.task && (a.error ? r.push(a.task) : n.push(a.task));
        }return t(null, { successList: n, errorList: r });
      });
    }function i(e, t) {
      var n = this,
          r = [],
          o = { Bucket: e.Bucket, Region: e.Region, Prefix: e.Key },
          i = function () {
        n.multipartList(o, function (e, n) {
          if (e) return t(e);r.push.apply(r, n.Upload || []), "true" == n.IsTruncated ? (o.KeyMarker = n.NextKeyMarker, o.UploadIdMarker = n.NextUploadIdMarker, i()) : t(null, { UploadList: r });
        });
      };i();
    }function a(e, t) {
      var n = new u(),
          r = this,
          o = e.Bucket,
          i = e.Region,
          a = e.Key,
          d = e.CopySource,
          f = d.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if (!f) return undefined;var h = f[1],
          p = f[3],
          m = decodeURIComponent(f[4]),
          g = undefined === e.SliceSize ? r.options.CopySliceSize : e.SliceSize;g = Math.max(0, Math.min(g, 5368709120));var y,
          C,
          v = e.ChunkSize || this.options.CopyChunkSize,
          x = this.options.CopyChunkParallelLimit,
          k = 0;n.on("copy_slice_complete", function (e) {
        r.multipartComplete({ Bucket: o, Region: i, Key: a, UploadId: e.UploadId, Parts: e.PartList }, function (e, n) {
          if (e) return C(null, true), t(e);C({ loaded: y, total: y }, true), t(null, n);
        });
      }), n.on("get_copy_data_finish", function (e) {
        c.eachLimit(e.PartList, x, function (t, n) {
          var c = t.PartNumber,
              u = t.CopySourceRange,
              l = t.end - t.start,
              f = 0;s.call(r, { Bucket: o, Region: i, Key: a, CopySource: d, UploadId: e.UploadId, PartNumber: c, CopySourceRange: u, onProgress: function (e) {
              k += e.loaded - f, f = e.loaded, C({ loaded: k, total: y });
            } }, function (e, r) {
            if (e) return n(e);C({ loaded: k, total: y }), k += l - f, t.ETag = r.ETag, n(e || null, r);
          });
        }, function (r) {
          if (r) return C(null, true), t(r);n.emit("copy_slice_complete", e);
        });
      }), n.on("get_file_size_finish", function (s) {
        !function () {
          for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], n = 1048576, o = 0; o < t.length && (n = 1024 * t[o] * 1024, !(y / n <= r.options.MaxPartNumber)); o++);e.ChunkSize = v = Math.max(v, n);for (var i = Math.ceil(y / v), a = [], s = 1; s <= i; s++) {
            var c = (s - 1) * v,
                u = s * v < y ? s * v - 1 : y - 1,
                l = { PartNumber: s, start: c, end: u, CopySourceRange: "bytes=" + c + "-" + u };a.push(l);
          }e.PartList = a;
        }();var c;c = "Replaced" === e.Headers["x-cos-metadata-directive"] ? e.Headers : s, c["x-cos-storage-class"] = e.Headers["x-cos-storage-class"] || s["x-cos-storage-class"], c = l.clearKey(c), r.multipartInit({ Bucket: o, Region: i, Key: a, Headers: c }, function (r, o) {
          if (r) return t(r);e.UploadId = o.UploadId, n.emit("get_copy_data_finish", e);
        });
      }), r.headObject({ Bucket: h, Region: p, Key: m }, function (o, i) {
        if (o) return undefined;if (undefined === (y = e.FileSize = i.headers["content-length"]) || !y) return undefined;if (C = l.throttleOnProgress.call(r, y, e.onProgress), y <= g) e.Headers["x-cos-metadata-directive"] || (e.Headers["x-cos-metadata-directive"] = "Copy"), r.putObjectCopy(e, function (e, n) {
          if (e) return C(null, true), t(e);C({ loaded: y, total: y }, true), t(e, n);
        });else {
          var a = i.headers,
              s = { "Cache-Control": a["cache-control"], "Content-Disposition": a["content-disposition"], "Content-Encoding": a["content-encoding"], "Content-Type": a["content-type"], Expires: a.expires, "x-cos-storage-class": a["x-cos-storage-class"] };l.each(a, function (e, t) {
            0 === t.indexOf("x-cos-meta-") && t.length > "x-cos-meta-".length && (s[t] = e);
          }), n.emit("get_file_size_finish", s);
        }
      });
    }function s(e, t) {
      var n = e.TaskId,
          r = e.Bucket,
          o = e.Region,
          i = e.Key,
          a = e.CopySource,
          s = e.UploadId,
          u = 1 * e.PartNumber,
          l = e.CopySourceRange,
          d = this.options.ChunkRetryTimes + 1,
          f = this;c.retry(d, function (t) {
        f.uploadPartCopy({ TaskId: n, Bucket: r, Region: o, Key: i, CopySource: a, UploadId: s, PartNumber: u, CopySourceRange: l, onProgress: e.onProgress }, function (e, n) {
          t(e || null, n);
        });
      }, function (e, n) {
        return t(e, n);
      });
    }var c = n(14),
        u = n(3).EventProxy,
        l = n(0),
        d = { abortUploadTask: r, sliceCopyFile: a };e.exports.init = function (e, t) {
      l.each(d, function (t, n) {
        e.prototype[n] = l.apiWrapper(n, t);
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
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      "function" == typeof e && (t = e, e = {});var n = this.options.ServiceDomain,
          r = e.AppId || this.options.appId,
          o = e.Region;n ? (n = n.replace(/\{\{AppId\}\}/gi, r || "").replace(/\{\{Region\}\}/gi, o || "").replace(/\{\{.*?\}\}/gi, ""), /^[a-zA-Z]+:\/\//.test(n) || (n = "https://" + n), "/" === n.slice(-1) && (n = n.slice(0, -1))) : n = o ? "https://cos." + o + ".myqcloud.com" : "https://service.cos.myqcloud.com", ee.call(this, { Action: "name/cos:GetService", url: n + "/", method: "GET" }, function (e, n) {
        if (e) return t(e);var r = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Buckets && n.ListAllMyBucketsResult.Buckets.Bucket || [];r = oe.isArray(r) ? r : [r];var o = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Owner || {};t(null, { Buckets: r, Owner: o, statusCode: n.statusCode, headers: n.headers });
      });
    }function o(e, t) {
      ee.call(this, { Action: "name/cos:HeadBucket", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, method: "HEAD" }, function (e, n) {
        t(e, n);
      });
    }function i(e, t) {
      var n = {};n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n.marker = e.Marker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, ee.call(this, { Action: "name/cos:GetBucket", ResourceKey: n.prefix, method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, qs: n }, function (e, n) {
        if (e) return t(e);var r = n.ListBucketResult || {},
            o = r.Contents || [],
            i = r.CommonPrefixes || [];o = oe.isArray(o) ? o : [o], i = oe.isArray(i) ? i : [i];var a = oe.clone(r);oe.extend(a, { Contents: o, CommonPrefixes: i, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function a(e, t) {
      var n = this,
          r = {};r["x-cos-acl"] = e.ACL, r["x-cos-grant-read"] = e.GrantRead, r["x-cos-grant-write"] = e.GrantWrite, r["x-cos-grant-read-acp"] = e.GrantReadAcp, r["x-cos-grant-write-acp"] = e.GrantWriteAcp, r["x-cos-grant-full-control"] = e.GrantFullControl, ee.call(this, { Action: "name/cos:PutBucket", method: "PUT", Bucket: e.Bucket, Region: e.Region, headers: r }, function (r, o) {
        if (r) return t(r);var i = Z({ domain: n.options.Domain, bucket: e.Bucket, region: e.Region, isLocation: true });t(null, { Location: i, statusCode: o.statusCode, headers: o.headers });
      });
    }function s(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucket", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, method: "DELETE" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function c(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketACL", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "acl" }, function (e, n) {
        if (e) return t(e);var r = n.AccessControlPolicy || {},
            o = r.Owner || {},
            i = r.AccessControlList.Grant || [];i = oe.isArray(i) ? i : [i];var a = W(r);n.headers && n.headers["x-cos-acl"] && (a.ACL = n.headers["x-cos-acl"]), a = oe.extend(a, { Owner: o, Grants: i, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function u(e, t) {
      var n = e.Headers,
          r = "";if (e.AccessControlPolicy) {
        var o = oe.clone(e.AccessControlPolicy || {}),
            i = o.Grants || o.Grant;i = oe.isArray(i) ? i : [i], delete o.Grant, delete o.Grants, o.AccessControlList = { Grant: i }, r = oe.json2xml({ AccessControlPolicy: o }), n["Content-Type"] = "application/xml", n["Content-MD5"] = oe.binaryBase64(oe.md5(r));
      }oe.each(n, function (e, t) {
        0 === t.indexOf("x-cos-grant-") && (n[t] = Q(n[t]));
      }), ee.call(this, { Action: "name/cos:PutBucketACL", method: "PUT", Bucket: e.Bucket, Region: e.Region, headers: n, action: "acl", body: r }, function (e, n) {
        if (e) return t(e);t(null, { statusCode: n.statusCode, headers: n.headers });
      });
    }function l(e, t) {
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
    }function d(e, t) {
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
    }function f(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketCORS", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "cors" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function h(e, t) {
      var n = e.Policy,
          r = n;try {
        "string" == typeof n ? n = JSON.parse(r) : r = JSON.stringify(n);
      } catch (e) {
        t({ error: "Policy format error" });
      }var o = e.Headers;o["Content-Type"] = "application/json", o["Content-MD5"] = oe.binaryBase64(oe.md5(r)), ee.call(this, { Action: "name/cos:PutBucketPolicy", method: "PUT", Bucket: e.Bucket, Region: e.Region, action: "policy", body: oe.isBrowser ? r : n, headers: o, json: true }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function p(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketPolicy", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "policy" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function m(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketLocation", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "location" }, function (e, n) {
        if (e) return t(e);t(null, n);
      });
    }function g(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketPolicy", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "policy", rawBody: true }, function (e, n) {
        if (e) return t(e.statusCode && 403 === e.statusCode ? { ErrorStatus: "Access Denied" } : e.statusCode && 405 === e.statusCode ? { ErrorStatus: "Method Not Allowed" } : e.statusCode && 404 === e.statusCode ? { ErrorStatus: "Policy Not Found" } : e);var r = {};try {
          r = JSON.parse(n.body);
        } catch (e) {}t(null, { Policy: r, statusCode: n.statusCode, headers: n.headers });
      });
    }function y(e, t) {
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
    }function C(e, t) {
      var n = e.Tagging || {},
          r = n.TagSet || n.Tags || e.Tags || [];r = oe.clone(oe.isArray(r) ? r : [r]);var o = oe.json2xml({ Tagging: { TagSet: { Tag: r } } }),
          i = e.Headers;i["Content-Type"] = "application/xml", i["Content-MD5"] = oe.binaryBase64(oe.md5(o)), ee.call(this, { Action: "name/cos:PutBucketTagging", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: o, action: "tagging", headers: i }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function v(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketTagging", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "tagging" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function x(e, t) {
      var n = e.LifecycleConfiguration || {},
          r = n.Rules || e.Rules || [];r = oe.clone(r);var o = oe.json2xml({ LifecycleConfiguration: { Rule: r } }),
          i = e.Headers;i["Content-Type"] = "application/xml", i["Content-MD5"] = oe.binaryBase64(oe.md5(o)), ee.call(this, { Action: "name/cos:PutBucketLifecycle", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: o, action: "lifecycle", headers: i }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function k(e, t) {
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
    }function S(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketLifecycle", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "lifecycle" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function A(e, t) {
      if (!e.VersioningConfiguration) return undefined;var n = e.VersioningConfiguration || {},
          r = oe.json2xml({ VersioningConfiguration: n }),
          o = e.Headers;o["Content-Type"] = "application/xml", o["Content-MD5"] = oe.binaryBase64(oe.md5(r)), ee.call(this, { Action: "name/cos:PutBucketVersioning", method: "PUT", Bucket: e.Bucket, Region: e.Region, body: r, action: "versioning", headers: o }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function b(e, t) {
      ee.call(this, { Action: "name/cos:GetBucketVersioning", method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "versioning" }, function (e, n) {
        e || !n.VersioningConfiguration && (n.VersioningConfiguration = {}), t(e, n);
      });
    }function R(e, t) {
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
    }function E(e, t) {
      ee.call(this, { Action: "name/cos:DeleteBucketReplication", method: "DELETE", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, action: "replication" }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, { statusCode: e.statusCode }) : e ? t(e) : undefined;
      });
    }function w(e, t) {
      ee.call(this, { Action: "name/cos:HeadObject", method: "HEAD", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, headers: e.Headers }, function (n, r) {
        if (n) {
          var o = n.statusCode;return e.Headers["If-Modified-Since"] && o && 304 === o ? t(null, { NotModified: true, statusCode: o }) : t(n);
        }if (r.headers) {
          var i = r.headers;r.ETag = i.etag || i.Etag || i.ETag || "";
        }t(null, r);
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
        }var i = {};if (i.Body = r.body, r && r.headers) {
          var a = r.headers;i.ETag = a.etag || a.Etag || a.ETag || "";
        }oe.extend(i, { statusCode: r.statusCode, headers: r.headers }), t(null, i);
      });
    }function B(e, t) {
      var n = this,
          r = e.ContentLength,
          o = oe.throttleOnProgress.call(n, r, e.onProgress);oe.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function (i) {
        i && (e.Headers["Content-MD5"] = oe.binaryBase64(i)), undefined !== e.ContentLength && (e.Headers["Content-Length"] = e.ContentLength), ee.call(n, { Action: "name/cos:PutObject", TaskId: e.TaskId, method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, body: e.Body, onProgress: o }, function (i, a) {
          if (i) return o(null, true), t(i);if (o({ loaded: r, total: r }, true), a && a.headers) {
            var s = a.headers,
                c = s.etag || s.Etag || s.ETag || "",
                u = Z({ ForcePathStyle: n.options.ForcePathStyle, protocol: n.options.Protocol, domain: n.options.Domain, bucket: e.Bucket, region: e.Region, object: e.Key });return u = u.substr(u.indexOf("://") + 3), t(null, { Location: u, ETag: c, statusCode: a.statusCode, headers: s });
          }t(null, a);
        });
      });
    }function D(e, t) {
      var n = this,
          r = {};r["Cache-Control"] = e.CacheControl, r["Content-Disposition"] = e.ContentDisposition, r["Content-Encoding"] = e.ContentEncoding, r["Content-MD5"] = e.ContentMD5, r["Content-Length"] = e.ContentLength, r["Content-Type"] = e.ContentType, r.Expect = e.Expect, r.Expires = e.Expires, r["x-cos-acl"] = e.ACL, r["x-cos-grant-read"] = e.GrantRead, r["x-cos-grant-write"] = e.GrantWrite, r["x-cos-grant-full-control"] = e.GrantFullControl, r["x-cos-storage-class"] = e.StorageClass;var o = e.FilePath;for (var i in e) i.indexOf("x-cos-meta-") > -1 && (r[i] = e[i]);var a = oe.throttleOnProgress.call(n, r["Content-Length"], e.onProgress);ee.call(this, { Action: "name/cos:PostObject", method: "POST", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: r, filePath: o, onProgress: a }, function (r, o) {
        if (a(null, true), r) return t(r);if (o && o.headers) {
          var i = o.headers,
              s = i.etag || i.Etag || i.ETag || "",
              c = Z({ ForcePathStyle: n.options.ForcePathStyle, protocol: n.options.Protocol, domain: n.options.Domain, bucket: e.Bucket, region: e.Region, object: e.Key, isLocation: true });return t(null, { Location: c, statusCode: o.statusCode, headers: i, ETag: s });
        }t(null, o);
      });
    }function O(e, t) {
      ee.call(this, { Action: "name/cos:DeleteObject", method: "DELETE", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, VersionId: e.VersionId }, function (e, n) {
        if (e) {
          var r = e.statusCode;return r && 204 === r ? t(null, { statusCode: r }) : r && 404 === r ? t(null, { BucketNotFound: true, statusCode: r }) : t(e);
        }t(null, { statusCode: n.statusCode, headers: n.headers });
      });
    }function P(e, t) {
      ee.call(this, { Action: "name/cos:GetObjectACL", method: "GET", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, action: "acl" }, function (e, n) {
        if (e) return t(e);var r = n.AccessControlPolicy || {},
            o = r.Owner || {},
            i = r.AccessControlList && r.AccessControlList.Grant || [];i = oe.isArray(i) ? i : [i];var a = W(r);n.headers && n.headers["x-cos-acl"] && (a.ACL = n.headers["x-cos-acl"]), a = oe.extend(a, { Owner: o, Grants: i, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function I(e, t) {
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
      var n = e.CopySource || "",
          r = n.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if (!r) return undefined;var o = r[1],
          i = r[3],
          a = decodeURIComponent(r[4]);ee.call(this, { Scope: [{ action: "name/cos:GetObject", bucket: o, region: i, prefix: a }, { action: "name/cos:PutObject", bucket: e.Bucket, region: e.Region, prefix: e.Key }], method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, headers: e.Headers }, function (e, n) {
        if (e) return t(e);var r = oe.clone(n.CopyObjectResult || {});oe.extend(r, { statusCode: n.statusCode, headers: n.headers }), t(null, r);
      });
    }function F(e, t) {
      var n = e.CopySource || "",
          r = n.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if (!r) return undefined;var o = r[1],
          i = r[3],
          a = decodeURIComponent(r[4]);ee.call(this, { Scope: [{ action: "name/cos:GetObject", bucket: o, region: i, prefix: a }, { action: "name/cos:PutObject", bucket: e.Bucket, region: e.Region, prefix: e.Key }], method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, qs: { partNumber: e.PartNumber, uploadId: e.UploadId }, headers: e.Headers }, function (e, n) {
        if (e) return t(e);var r = oe.clone(n.CopyPartResult || {});oe.extend(r, { statusCode: n.statusCode, headers: n.headers }), t(null, r);
      });
    }function U(e, t) {
      var n = e.Objects || [],
          r = e.Quiet;n = oe.isArray(n) ? n : [n];var o = oe.json2xml({ Delete: { Object: n, Quiet: r || false } }),
          i = e.Headers;i["Content-Type"] = "application/xml", i["Content-MD5"] = oe.binaryBase64(oe.md5(o));var a = oe.map(n, function (t) {
        return { action: "name/cos:DeleteObject", bucket: e.Bucket, region: e.Region, prefix: t.Key };
      });ee.call(this, { Scope: a, method: "POST", Bucket: e.Bucket, Region: e.Region, body: o, action: "delete", headers: i }, function (e, n) {
        if (e) return t(e);var r = n.DeleteResult || {},
            o = r.Deleted || [],
            i = r.Error || [];o = oe.isArray(o) ? o : [o], i = oe.isArray(i) ? i : [i];var a = oe.clone(r);oe.extend(a, { Error: i, Deleted: o, statusCode: n.statusCode, headers: n.headers }), t(null, a);
      });
    }function j(e, t) {
      var n = e.Headers;if (!e.RestoreRequest) return undefined;var r = e.RestoreRequest || {},
          o = oe.json2xml({ RestoreRequest: r });n["Content-Type"] = "application/xml", n["Content-MD5"] = oe.binaryBase64(oe.md5(o)), ee.call(this, { Action: "name/cos:RestoreObject", method: "POST", Bucket: e.Bucket, Region: e.Region, Key: e.Key, VersionId: e.VersionId, body: o, action: "restore", headers: n }, function (e, n) {
        t(e, n);
      });
    }function K(e, t) {
      ee.call(this, { Action: "name/cos:InitiateMultipartUpload", method: "POST", Bucket: e.Bucket, Region: e.Region, Key: e.Key, action: "uploads", headers: e.Headers }, function (e, n) {
        return e ? t(e) : (n = oe.clone(n || {})) && n.InitiateMultipartUploadResult ? t(null, oe.extend(n.InitiateMultipartUploadResult, { statusCode: n.statusCode, headers: n.headers })) : undefined;
      });
    }function H(e, t) {
      var n = this;oe.getFileSize("multipartUpload", e, function () {
        oe.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function (r) {
          r && (e.Headers["Content-MD5"] = oe.binaryBase64(r)), ee.call(n, { Action: "name/cos:UploadPart", TaskId: e.TaskId, method: "PUT", Bucket: e.Bucket, Region: e.Region, Key: e.Key, qs: { partNumber: e.PartNumber, uploadId: e.UploadId }, headers: e.Headers, onProgress: e.onProgress, body: e.Body || null }, function (e, n) {
            if (e) return t(e);if (n && n.headers) {
              var r = n.headers;n.ETag = r.etag || r.Etag || r.ETag || "";
            }t(null, n);
          });
        });
      });
    }function z(e, t) {
      for (var n = this, r = e.UploadId, o = e.Parts, i = 0, a = o.length; i < a; i++) 0 !== o[i].ETag.indexOf('"') && (o[i].ETag = '"' + o[i].ETag + '"');var s = oe.json2xml({ CompleteMultipartUpload: { Part: o } }),
          c = e.Headers;c["Content-Type"] = "application/xml", c["Content-MD5"] = oe.binaryBase64(oe.md5(s)), ee.call(this, { Action: "name/cos:CompleteMultipartUpload", method: "POST", Bucket: e.Bucket, Region: e.Region, Key: e.Key, qs: { uploadId: r }, body: s, headers: c }, function (r, o) {
        if (r) return t(r);var i = Z({ ForcePathStyle: n.options.ForcePathStyle, protocol: n.options.Protocol, domain: n.options.Domain, bucket: e.Bucket, region: e.Region, object: e.Key, isLocation: true }),
            a = o.CompleteMultipartUploadResult || {},
            s = oe.extend(a, { Location: i, statusCode: o.statusCode, headers: o.headers });t(null, s);
      });
    }function G(e, t) {
      var n = {};n.delimiter = e.Delimiter, n["encoding-type"] = e.EncodingType, n.prefix = e.Prefix || "", n["max-uploads"] = e.MaxUploads, n["key-marker"] = e.KeyMarker, n["upload-id-marker"] = e.UploadIdMarker, n = oe.clearKey(n), ee.call(this, { Action: "name/cos:ListMultipartUploads", ResourceKey: n.prefix, method: "GET", Bucket: e.Bucket, Region: e.Region, headers: e.Headers, qs: n, action: "uploads" }, function (e, n) {
        if (e) return t(e);if (n && n.ListMultipartUploadsResult) {
          var r = n.ListMultipartUploadsResult.Upload || [],
              o = n.ListMultipartUploadsResult.CommonPrefixes || [];o = oe.isArray(o) ? o : [o], r = oe.isArray(r) ? r : [r], n.ListMultipartUploadsResult.Upload = r, n.ListMultipartUploadsResult.CommonPrefixes = o;
        }var i = oe.clone(n.ListMultipartUploadsResult || {});oe.extend(i, { statusCode: n.statusCode, headers: n.headers }), t(null, i);
      });
    }function q(e, t) {
      var n = {};n.uploadId = e.UploadId, n["encoding-type"] = e.EncodingType, n["max-parts"] = e.MaxParts, n["part-number-marker"] = e.PartNumberMarker, ee.call(this, { Action: "name/cos:ListParts", method: "GET", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, qs: n }, function (e, n) {
        if (e) return t(e);var r = n.ListPartsResult || {},
            o = r.Part || [];o = oe.isArray(o) ? o : [o], r.Part = o;var i = oe.clone(r);oe.extend(i, { statusCode: n.statusCode, headers: n.headers }), t(null, i);
      });
    }function V(e, t) {
      var n = {};n.uploadId = e.UploadId, ee.call(this, { Action: "name/cos:AbortMultipartUpload", method: "DELETE", Bucket: e.Bucket, Region: e.Region, Key: e.Key, headers: e.Headers, qs: n }, function (e, n) {
        if (e) return t(e);t(null, { statusCode: n.statusCode, headers: n.headers });
      });
    }function X(e) {
      var t = this;return oe.getAuth({ SecretId: e.SecretId || this.options.SecretId || "", SecretKey: e.SecretKey || this.options.SecretKey || "", Method: e.Method, Key: e.Key, Query: e.Query, Headers: e.Headers, Expires: e.Expires, SystemClockOffset: t.options.SystemClockOffset });
    }function $(e, t) {
      var n = this,
          r = Z({ ForcePathStyle: n.options.ForcePathStyle, protocol: e.Protocol || n.options.Protocol, domain: n.options.Domain, bucket: e.Bucket, region: e.Region, object: e.Key });if (undefined !== e.Sign && !e.Sign) return t(null, { Url: r }), r;var o = Y.call(this, { Action: "PUT" === (e.Method || "").toUpperCase() ? "name/cos:PutObject" : "name/cos:GetObject", Bucket: e.Bucket || "", Region: e.Region || "", Method: e.Method || "get", Key: e.Key, Expires: e.Expires }, function (e, n) {
        if (t) {
          if (e) return undefined;var o = r;o += "?" + (n.Authorization.indexOf("q-signature") > -1 ? n.Authorization : "sign=" + encodeURIComponent(n.Authorization)), n.XCosSecurityToken && (o += "&x-cos-security-token=" + n.XCosSecurityToken), n.ClientIP && (o += "&clientIP=" + n.ClientIP), n.ClientUA && (o += "&clientUA=" + n.ClientUA), n.Token && (o += "&token=" + n.Token), setTimeout(function () {
            t(null, { Url: o });
          });
        }
      });return o ? r + "?" + o.Authorization + (o.XCosSecurityToken ? "&x-cos-security-token=" + o.XCosSecurityToken : "") : r;
    }function W(e) {
      var t = { GrantFullControl: [], GrantWrite: [], GrantRead: [], GrantReadAcp: [], GrantWriteAcp: [], ACL: "" },
          n = { FULL_CONTROL: "GrantFullControl", WRITE: "GrantWrite", READ: "GrantRead", READ_ACP: "GrantReadAcp", WRITE_ACP: "GrantWriteAcp" },
          r = e.AccessControlList.Grant;r && (r = oe.isArray(r) ? r : [r]);var o = { READ: 0, WRITE: 0, FULL_CONTROL: 0 };return r.length && oe.each(r, function (r) {
        "qcs::cam::anyone:anyone" === r.Grantee.ID || "http://cam.qcloud.com/groups/global/AllUsers" === r.Grantee.URI ? o[r.Permission] = 1 : r.Grantee.ID !== e.Owner.ID && t[n[r.Permission]].push('id="' + r.Grantee.ID + '"');
      }), o.FULL_CONTROL || o.WRITE && o.READ ? t.ACL = "public-read-write" : o.READ ? t.ACL = "public-read" : t.ACL = "private", oe.each(n, function (e) {
        t[e] = Q(t[e].join(","));
      }), t;
    }function Q(e) {
      var t,
          n,
          r = e.split(","),
          o = {};for (t = 0; t < r.length;) n = r[t].trim(), o[n] ? r.splice(t, 1) : (o[n] = true, r[t] = n, t++);return r.join(",");
    }function Z(e) {
      var t = e.bucket,
          n = t.substr(0, t.lastIndexOf("-")),
          r = t.substr(t.lastIndexOf("-") + 1),
          o = e.domain,
          i = e.region,
          a = e.object;o || (o = ["cn-south", "cn-south-2", "cn-north", "cn-east", "cn-southwest", "sg"].indexOf(i) > -1 ? "{Region}.myqcloud.com" : "cos.{Region}.myqcloud.com", e.ForcePathStyle || (o = "{Bucket}." + o)), o = o.replace(/\{\{AppId\}\}/gi, r).replace(/\{\{Bucket\}\}/gi, n).replace(/\{\{Region\}\}/gi, i).replace(/\{\{.*?\}\}/gi, ""), o = o.replace(/\{AppId\}/gi, r).replace(/\{BucketName\}/gi, n).replace(/\{Bucket\}/gi, t).replace(/\{Region\}/gi, i).replace(/\{.*?\}/gi, ""), /^[a-zA-Z]+:\/\//.test(o) || (o = "https://" + o), "/" === o.slice(-1) && (o = o.slice(0, -1));var s = o;return e.ForcePathStyle && (s += "/" + t), s += "/", a && (s += oe.camSafeUrlEncode(a).replace(///g, "/")), e.isLocation && (s = s.replace(/^https?:\/\//, "")), s;
    }function Y(e, t) {
      var n = oe.clone(e.Headers);delete n["Content-Type"], delete n["Cache-Control"], oe.each(n, function (e, t) {
        "" === e && delete n[t];
      });var r = function (e) {
        var n = false,
            r = e.Authorization;if (r) if (r.indexOf(" ") > -1) n = false;else if (r.indexOf("q-sign-algorithm=") > -1 && r.indexOf("q-ak=") > -1 && r.indexOf("q-sign-time=") > -1 && r.indexOf("q-key-time=") > -1 && r.indexOf("q-url-param-list=") > -1) n = true;else try {
          r = re.atob(r), r.indexOf("a=") > -1 && r.indexOf("k=") > -1 && r.indexOf("t=") > -1 && r.indexOf("r=") > -1 && r.indexOf("b=") > -1 && (n = true);
        } catch (e) {}n ? t && t(null, e) : t && t("authorization error");
      },
          o = this,
          i = e.Bucket || "",
          a = e.Region || "",
          s = "name/cos:PostObject" !== e.Action && e.Key ? e.Key : "";o.options.ForcePathStyle && i && (s = i + "/" + s);var c = "/" + s,
          u = {},
          l = e.Scope;if (!l) {
        var d = e.Action || "",
            f = e.ResourceKey || e.Key || "";l = e.Scope || [{ action: d, bucket: i, region: a, prefix: f }];
      }var h = oe.md5(JSON.stringify(l));o._StsCache = o._StsCache || [], function () {
        var e, t;for (e = o._StsCache.length - 1; e >= 0; e--) {
          t = o._StsCache[e];var n = Math.round(oe.getSkewTime(o.options.SystemClockOffset) / 1e3) + 30;if (t.StartTime && n < t.StartTime || n >= t.ExpiredTime) o._StsCache.splice(e, 1);else if (!t.ScopeLimit || t.ScopeLimit && t.ScopeKey === h) {
            u = t;break;
          }
        }
      }();var p = function () {
        var t = oe.getAuth({ SecretId: u.TmpSecretId, SecretKey: u.TmpSecretKey, Method: e.Method, Pathname: c, Query: e.Query, Headers: n, Expires: e.Expires, SystemClockOffset: o.options.SystemClockOffset }),
            i = { Authorization: t, XCosSecurityToken: u.XCosSecurityToken || "", Token: u.Token || "", ClientIP: u.ClientIP || "", ClientUA: u.ClientUA || "" };r(i);
      };if (u.ExpiredTime && u.ExpiredTime - oe.getSkewTime(o.options.SystemClockOffset) / 1e3 > 60) p();else if (o.options.getAuthorization) o.options.getAuthorization.call(o, { Bucket: i, Region: a, Method: e.Method, Key: s, Pathname: c, Query: e.Query, Headers: n, Scope: l }, function (e) {
        "string" == typeof e && (e = { Authorization: e }), e.TmpSecretId && e.TmpSecretKey && e.XCosSecurityToken && e.ExpiredTime ? (u = e || {}, u.Scope = l, u.ScopeKey = h, o._StsCache.push(u), p()) : r(e);
      });else {
        if (!o.options.getSTS) return function () {
          var t = oe.getAuth({ SecretId: e.SecretId || o.options.SecretId, SecretKey: e.SecretKey || o.options.SecretKey, Method: e.Method, Pathname: c, Query: e.Query, Headers: n, Expires: e.Expires, SystemClockOffset: o.options.SystemClockOffset }),
              i = { Authorization: t, XCosSecurityToken: o.options.XCosSecurityToken };return r(i), i;
        }();o.options.getSTS.call(o, { Bucket: i, Region: a }, function (e) {
          u = e || {}, u.Scope = l, u.ScopeKey = h, u.TmpSecretId = u.SecretId, u.TmpSecretKey = u.SecretKey, o._StsCache.push(u), p();
        });
      }return "";
    }function J(e) {
      var t = false,
          n = false,
          r = e.headers && (e.headers.date || e.headers.Date) || "";try {
        var o = e.error.Code,
            i = e.error.Message;("RequestTimeTooSkewed" === o || "AccessDenied" === o && "Request has expired" === i) && (n = true);
      } catch (e) {}if (e) if (n && r) {
        var a = Date.parse(r);this.options.CorrectClockSkew && Math.abs(oe.getSkewTime(this.options.SystemClockOffset) - a) >= 3e4 && (console.error("error: Local time is too skewed."), this.options.SystemClockOffset = a - Date.now(), t = true);
      } else 5 === Math.round(e.statusCode / 100) && (t = true);return t;
    }function ee(e, t) {
      var n = this;!e.headers && (e.headers = {}), !e.qs && (e.qs = {}), e.VersionId && (e.qs.versionId = e.VersionId), e.qs = oe.clearKey(e.qs), e.headers && (e.headers = oe.clearKey(e.headers)), e.qs && (e.qs = oe.clearKey(e.qs));var r = oe.clone(e.qs);e.action && (r[e.action] = "");var o = function (i) {
        var a = n.options.SystemClockOffset;Y.call(n, { Bucket: e.Bucket || "", Region: e.Region || "", Method: e.method, Key: e.Key, Query: r, Headers: e.headers, Action: e.Action, ResourceKey: e.ResourceKey, Scope: e.Scope }, function (r, s) {
          e.AuthData = s, te.call(n, e, function (r, s) {
            r && i < 2 && (a !== n.options.SystemClockOffset || J.call(n, r)) ? (e.headers && (delete e.headers.Authorization, delete e.headers.token, delete e.headers.clientIP, delete e.headers.clientUA, delete e.headers["x-cos-security-token"]), o(i + 1)) : t(r, s);
          });
        });
      };o(0);
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
            d = e.rawBody;c = c || Z({ ForcePathStyle: n.options.ForcePathStyle, protocol: n.options.Protocol, domain: n.options.Domain, bucket: o, region: i, object: a }), e.action && (c = c + "?" + e.action);var f = { method: s, url: c, headers: e.headers, qs: e.qs, filePath: e.filePath, body: u, json: l };f.headers.Authorization = e.AuthData.Authorization, e.AuthData.Token && (f.headers.token = e.AuthData.Token), e.AuthData.ClientIP && (f.headers.clientIP = e.AuthData.ClientIP), e.AuthData.ClientUA && (f.headers.clientUA = e.AuthData.ClientUA), e.AuthData.XCosSecurityToken && (f.headers["x-cos-security-token"] = e.AuthData.XCosSecurityToken), f.headers && (f.headers = oe.clearKey(f.headers)), f = oe.clearKey(f), e.onProgress && "function" == typeof e.onProgress && (f.onProgress = function (t) {
          if (!r || n._isRunningTask(r)) {
            var o = t ? t.loaded : 0;e.onProgress({ loaded: o, total: t.total });
          }
        }), n.options.ForcePathStyle && (f.pathStyle = n.options.ForcePathStyle);var h = ne(f, function (e, o, i) {
          var a,
              s = function (e, i) {
            if (r && n.off("inner-kill-task", p), !a) {
              a = true;var s = {};o && o.statusCode && (s.statusCode = o.statusCode), o && o.headers && (s.headers = o.headers), e ? (e = oe.extend(e || {}, s), t(e, null)) : (i = oe.extend(i || {}, s), t(null, i));
            }
          };if (e) return undefined;var c;try {
            c = oe.xml2json(i) || {};
          } catch (e) {
            c = i || {};
          }var u = o.statusCode;return 2 !== Math.floor(u / 100) ? undefined : (d && (c = {}, c.body = i), c.Error ? undefined : undefined);
        }),
            p = function (e) {
          e.TaskId === r && (h && h.abort && h.abort(), n.off("inner-kill-task", p));
        };r && n.on("inner-kill-task", p);
      }
    }var ne = n(9),
        re = n(1),
        oe = n(0),
        ie = { getService: r, putBucket: a, getBucket: i, headBucket: o, deleteBucket: s, getBucketAcl: c, putBucketAcl: u, getBucketCors: l, putBucketCors: d, deleteBucketCors: f, getBucketLocation: m, putBucketTagging: C, getBucketTagging: y, deleteBucketTagging: v, getBucketPolicy: g, putBucketPolicy: h, deleteBucketPolicy: p, getBucketLifecycle: k, putBucketLifecycle: x, deleteBucketLifecycle: S, putBucketVersioning: A, getBucketVersioning: b, putBucketReplication: R, getBucketReplication: T, deleteBucketReplication: E, getObject: N, headObject: w, listObjectVersions: _, putObject: B, postObject: D, deleteObject: O, getObjectAcl: P, putObjectAcl: I, optionsObject: M, putObjectCopy: L, deleteMultipleObject: U, restoreObject: j, uploadPartCopy: F, multipartInit: K, multipartUpload: H, multipartComplete: z, multipartList: G, multipartListPart: q, multipartAbort: V, getObjectUrl: $, getAuth: X };e.exports.init = function (e, t) {
      t.transferToTaskMethod(ie, "postObject"), oe.each(ie, function (t, n) {
        e.prototype[n] = oe.apiWrapper(n, t);
      });
    };
  }, function (e, t, n) {
    var r = n(0),
        o = {},
        i = function (e, t) {
      o[t] = e[t], e[t] = function (e, n) {
        e.SkipTask ? o[t].call(this, e, n) : this._addTask(t, e, n);
      };
    },
        a = function (e) {
      var t = [],
          n = {},
          i = 0,
          a = 0,
          s = function (e) {
        var t = { id: e.id, Bucket: e.Bucket, Region: e.Region, Key: e.Key, FilePath: e.FilePath, state: e.state, loaded: e.loaded, size: e.size, speed: e.speed, percent: e.percent, hashPercent: e.hashPercent, error: e.error };return e.FilePath && (t.FilePath = e.FilePath), t;
      },
          c = function () {
        e.emit("list-update", { list: r.map(t, s) });
      },
          u = function () {
        if (t.length > e.options.UploadQueueSize) {
          var n;for (n = 0; n < t.length && t.length > e.options.UploadQueueSize && n < a; n++) t[n] && "waiting" === t[n].state || (t.splice(n, 1), a--);
        }
      },
          l = function () {
        if (a < t.length && i < e.options.FileParallelLimit) {
          var n = t[a];if ("waiting" === n.state) {
            i++, n.state = "checking";var s = r.formatParams(n.api, n.params);o[n.api].call(e, s, function (t, r) {
              e._isRunningTask(n.id) && ("checking" !== n.state && "uploading" !== n.state || (n.state = t ? "error" : "success", t && (n.error = t), i--, c(), l(e), n.callback && n.callback(t, r), "success" === n.state && (n.params && (delete n.params.Body, delete n.params), delete n.callback)), u());
            }), c();
          }a++, l(e);
        }
      },
          d = function (t, r) {
        var o = n[t];if (o) {
          var a = o && "waiting" === o.state,
              s = o && ("checking" === o.state || "uploading" === o.state);if ("canceled" === r && "canceled" !== o.state || "paused" === r && a || "paused" === r && s) {
            if ("paused" === r && o.params.Body && "function" == typeof o.params.Body.pipe) return undefined;o.state = r, e.emit("inner-kill-task", { TaskId: t, toState: r }), c(), s && (i--, l(e)), "canceled" === r && (o.params && (delete o.params.Body, delete o.params), delete o.callback);
          }u();
        }
      };e._addTasks = function (t) {
        r.each(t, function (t) {
          e._addTask(t.api, t.params, t.callback, true);
        }), c();
      }, e._addTask = function (o, i, a, s) {
        i = r.formatParams(o, i);var d = r.uuid();i.TaskId = d, i.TaskReady && i.TaskReady(d);var f = { params: i, callback: a, api: o, index: t.length, id: d, Bucket: i.Bucket, Region: i.Region, Key: i.Key, FilePath: i.FilePath || "", state: "waiting", loaded: 0, size: 0, speed: 0, percent: 0, hashPercent: 0, error: null },
            h = i.onHashProgress;i.onHashProgress = function (t) {
          e._isRunningTask(f.id) && (f.hashPercent = t.percent, h && h(t), c());
        };var p = i.onProgress;return i.onProgress = function (t) {
          e._isRunningTask(f.id) && ("checking" === f.state && (f.state = "uploading"), f.loaded = t.loaded, f.size = t.total, f.speed = t.speed, f.percent = t.percent, p && p(t), c());
        }, function () {
          n[d] = f, t.push(f), f.size = i.FileSize, !s && c(), l(e), u();
        }(), d;
      }, e._isRunningTask = function (e) {
        var t = n[e];return !(!t || "checking" !== t.state && "uploading" !== t.state);
      }, e.getTaskList = function () {
        return r.map(t, s);
      }, e.cancelTask = function (e) {
        d(e, "canceled");
      }, e.pauseTask = function (e) {
        d(e, "paused");
      }, e.restartTask = function (e) {
        var t = n[e];!t || "paused" !== t.state && "error" !== t.state || (t.state = "waiting", c(), a = Math.min(a, t.index), l());
      };
    };e.exports.transferToTaskMethod = i, e.exports.init = a;
  }]);
});