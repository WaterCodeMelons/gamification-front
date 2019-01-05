'use strict';
var precacheConfig = [
    ['./Montserrat-Bold.3b370dc7.ttf', '88932dadc42e1bba93b21a76de60ef7a'],
    ['./Montserrat-Bold.475ff8d9.ttf', '88932dadc42e1bba93b21a76de60ef7a'],
    ['./Poppins-Bold.49fc9170.ttf', '7940efc40d8e3b477e16cc41b0287139'],
    ['./Poppins-Bold.605612a6.ttf', '7940efc40d8e3b477e16cc41b0287139'],
    ['./Poppins-Medium.1e683724.ttf', 'a4e11dda40531debd374e4c8b1dcc7f4'],
    ['./Poppins-Medium.5458a692.ttf', 'a4e11dda40531debd374e4c8b1dcc7f4'],
    ['./Poppins-Regular.15376e57.ttf', '731a28a413d642522667a2de8681ff35'],
    ['./Poppins-Regular.9185e764.ttf', '731a28a413d642522667a2de8681ff35'],
    ['./fontawesome-webfont.152c194f.ttf', 'b06871f281fee6b241d60582ae9369b9'],
    ['./fontawesome-webfont.4a2277d0.eot', '674f50d287a8c48dc19ba404d20fe713'],
    ['./fontawesome-webfont.4e039e70.woff', 'fee66e712a8a08eef5805a46892932ad'],
    ['./fontawesome-webfont.80db1567.eot', '674f50d287a8c48dc19ba404d20fe713'],
    ['./fontawesome-webfont.9ab71dbb.svg', '912ec66d7572ff821749319396470bde'],
    [
      './fontawesome-webfont.9fb3877d.woff2',
      'af7ae505a9eed503f8b8e6982036873e',
    ],
    ['./fontawesome-webfont.a9acc805.svg', '912ec66d7572ff821749319396470bde'],
    ['./fontawesome-webfont.c3cf7ef2.woff', 'fee66e712a8a08eef5805a46892932ad'],
    [
      './fontawesome-webfont.cda54bb3.woff2',
      'af7ae505a9eed503f8b8e6982036873e',
    ],
    ['./fontawesome-webfont.cf80d36a.ttf', 'b06871f281fee6b241d60582ae9369b9'],
    ['./img-01.29db317c.png', '3c46da047502b3e55ef505fec3f5ade5'],
    ['./img-01.efdc2aeb.png', '3c46da047502b3e55ef505fec3f5ade5'],
    ['./index.html', 'd084b1c8aca92c49047cabc6d7b4feea'],
    ['./service-worker.js', '5733b956560c1ea654356390b92fc1be'],
    ['./src.62c16509.css', '199cc4614c42fa8e14994fc963e91bb4'],
    ['./src.62c16509.js', '0aa5ea29c3301754e578f0bce1aed590'],
    ['./src.95121e66.js', '232347a3a43434fb6f458ed83dd07564'],
    ['./src.a91588a4.css', '7c98b5a224f3a72dddb75d997bf59493'],
    ['./src.b0ce6175.css', '597f63d8c5609d00dc5acd6c383618ae'],
    ['./src.b0ce6175.js', 'a4586f2b428adb4f5a66419efc3be7ce'],
    ['./src.f82619f5.js', '21eb71feb404a43d0170277ab141c250'],
  ],
  cacheName =
    'sw-precache-v3-gamification-' +
    (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var a = new URL(e);
    return '/' === a.pathname.slice(-1) && (a.pathname += t), a.toString();
  },
  cleanResponse = function(e) {
    return e.redirected
      ? ('body' in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
          return new Response(t, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText,
          });
        })
      : Promise.resolve(e);
  },
  createCacheKey = function(e, t, a, n) {
    var r = new URL(e);
    return (
      (n && r.pathname.match(n)) ||
        (r.search +=
          (r.search ? '&' : '') +
          encodeURIComponent(t) +
          '=' +
          encodeURIComponent(a)),
      r.toString()
    );
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0;
    var a = new URL(t).pathname;
    return e.some(function(e) {
      return a.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, t) {
    var a = new URL(e);
    return (
      (a.hash = ''),
      (a.search = a.search
        .slice(1)
        .split('&')
        .map(function(e) {
          return e.split('=');
        })
        .filter(function(e) {
          return t.every(function(t) {
            return !t.test(e[0]);
          });
        })
        .map(function(e) {
          return e.join('=');
        })
        .join('&')),
      a.toString()
    );
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var t = e[0],
        a = e[1],
        n = new URL(t, self.location),
        r = createCacheKey(n, hashParamName, a, /\.\w{8}\./);
      return [n.toString(), r];
    }),
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(e) {
        return setOfCachedUrls(e).then(function(t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(a) {
              if (!t.has(a)) {
                var n = new Request(a, { credentials: 'same-origin' });
                return fetch(n).then(function(t) {
                  if (!t.ok)
                    throw new Error(
                      'Request for ' +
                        a +
                        ' returned a response with status ' +
                        t.status,
                    );
                  return cleanResponse(t).then(function(t) {
                    return e.put(a, t);
                  });
                });
              }
            }),
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      }),
  );
}),
  self.addEventListener('activate', function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(e) {
          return e.keys().then(function(a) {
            return Promise.all(
              a.map(function(a) {
                if (!t.has(a.url)) return e.delete(a);
              }),
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        }),
    );
  }),
  self.addEventListener('fetch', function(e) {
    if ('GET' === e.request.method) {
      var t,
        a = stripIgnoredUrlParameters(
          e.request.url,
          ignoreUrlParametersMatching,
        );
      (t = urlsToCacheKeys.has(a)) ||
        ((a = addDirectoryIndex(a, 'index.html')),
        (t = urlsToCacheKeys.has(a)));
      !t &&
        'navigate' === e.request.mode &&
        isPathWhitelisted(['^(?!\\/__).*'], e.request.url) &&
        ((a = new URL('./index.html', self.location).toString()),
        (t = urlsToCacheKeys.has(a))),
        t &&
          e.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(a)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    'The cached response that was expected is missing.',
                  );
                });
              })
              .catch(function(t) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    e.request.url,
                    t,
                  ),
                  fetch(e.request)
                );
              }),
          );
    }
  });
