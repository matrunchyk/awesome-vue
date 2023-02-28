/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c6d19f7e0832a4b17684441e08b7e62"
  },
  {
    "url": "assets/css/0.styles.b5ca89be.css",
    "revision": "660866d5be8d119659a303b9e781c0ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.95c9e1cf.js",
    "revision": "42ce4f13c1cb9d8a8228b99d80d7b4fb"
  },
  {
    "url": "assets/js/11.a5b6741e.js",
    "revision": "1e6b655c1215a370104d28793248a1eb"
  },
  {
    "url": "assets/js/12.b3e3aec2.js",
    "revision": "6397f01c3305316ad4d11531559fbc6e"
  },
  {
    "url": "assets/js/13.3fcd2811.js",
    "revision": "2c988edc3374ed544527dd520cb8e273"
  },
  {
    "url": "assets/js/14.2e8fb967.js",
    "revision": "66fb750ead4b280a85c9c29bdd05f0c7"
  },
  {
    "url": "assets/js/15.aaeab3c8.js",
    "revision": "c3892e7470fbb016fc82be6e3155edd7"
  },
  {
    "url": "assets/js/16.2b77acb8.js",
    "revision": "91525bf12f63c1a7e5eab631acbe94c8"
  },
  {
    "url": "assets/js/17.e4f5d5cf.js",
    "revision": "4165ecb2bfa6385903a403913e3037f5"
  },
  {
    "url": "assets/js/18.f658a0e3.js",
    "revision": "df69065d23102e40b77d77ea38bfc8ef"
  },
  {
    "url": "assets/js/19.937247ad.js",
    "revision": "86d745e154796f6179dc07eb78a80454"
  },
  {
    "url": "assets/js/20.8d68deef.js",
    "revision": "6915a97ed7a082ba1692b49510a1d3ab"
  },
  {
    "url": "assets/js/21.17dfcfb3.js",
    "revision": "3550a8113d15c79ea7c08b7d9c192d3c"
  },
  {
    "url": "assets/js/22.1bf2eebc.js",
    "revision": "11a9d74e69abcd0cda8e378a1ad84558"
  },
  {
    "url": "assets/js/23.b93a96f1.js",
    "revision": "d12628cc5606933313f2f01c36799482"
  },
  {
    "url": "assets/js/24.48b9ec7e.js",
    "revision": "3ea80ed4b3ea83f7edd4356aa80a341a"
  },
  {
    "url": "assets/js/25.ceea0259.js",
    "revision": "2d386970f00c1dd655d73c89c1ec33e8"
  },
  {
    "url": "assets/js/26.b0cf7b42.js",
    "revision": "1a4be020f7ef1be1e6777c0f4352d1d6"
  },
  {
    "url": "assets/js/27.235cd8d6.js",
    "revision": "361f25b6b5715b850adc0693667877ae"
  },
  {
    "url": "assets/js/28.ea62bb15.js",
    "revision": "6b7ea33e7104fd06ba1cc145750a0c6b"
  },
  {
    "url": "assets/js/29.17d41227.js",
    "revision": "f114df4d827c137822b0b9240fce8b2f"
  },
  {
    "url": "assets/js/3.b0820f77.js",
    "revision": "a3440e9d8cf514a5d4fa53883b32239b"
  },
  {
    "url": "assets/js/30.006bc379.js",
    "revision": "549ac6ae4a39132b8919720282426e0a"
  },
  {
    "url": "assets/js/31.5bfdab1c.js",
    "revision": "858f675009bc92eed62a6d604bc9330a"
  },
  {
    "url": "assets/js/32.5d938467.js",
    "revision": "99cb690704bb6da7afb6f7b8eb003523"
  },
  {
    "url": "assets/js/33.52e16269.js",
    "revision": "8d269155dec0a82820a0001752aa9875"
  },
  {
    "url": "assets/js/34.6317c690.js",
    "revision": "23035ecff52910a01c913f223de9b0a8"
  },
  {
    "url": "assets/js/35.c1c2dd4e.js",
    "revision": "ba661e4c3bb45ca1541c65c6f62bc5b8"
  },
  {
    "url": "assets/js/36.8e4113c5.js",
    "revision": "f9dd46ddf355989d068921e4f10accf3"
  },
  {
    "url": "assets/js/37.7c04b8ee.js",
    "revision": "ccd617e9ad8c0d04dc4779d3db735e0e"
  },
  {
    "url": "assets/js/38.fb9b5501.js",
    "revision": "fa23317d0055fdc9dedb254d471f1843"
  },
  {
    "url": "assets/js/39.94d9bd09.js",
    "revision": "72605174dd4d40eea4627b1ad5c9b844"
  },
  {
    "url": "assets/js/4.034d115a.js",
    "revision": "bec180c654a4fe45cde536078c1bd3b3"
  },
  {
    "url": "assets/js/40.f3d10063.js",
    "revision": "08b3e17d9af2b3ba06d5ecc32339a3a3"
  },
  {
    "url": "assets/js/41.a86e165e.js",
    "revision": "993cf86a30552e02b74a3c4d97f68853"
  },
  {
    "url": "assets/js/5.38c071ec.js",
    "revision": "987ea56314016160a5432eebd5d4c7b3"
  },
  {
    "url": "assets/js/6.150542a8.js",
    "revision": "ddf9e8020b7c1f1e25353b147f8469e4"
  },
  {
    "url": "assets/js/7.457ce9cb.js",
    "revision": "b296eeae4a4c79e41375788336183466"
  },
  {
    "url": "assets/js/8.86b8fce7.js",
    "revision": "d330b7ff6d23cd1237904f88daeb0b82"
  },
  {
    "url": "assets/js/9.e3986978.js",
    "revision": "722cf6286555589fb81c6ee88782eb4d"
  },
  {
    "url": "assets/js/app.033d7cae.js",
    "revision": "f56108fe1cddad46f10c559cbb26b71a"
  },
  {
    "url": "assets/js/vendors~docsearch.008c7241.js",
    "revision": "1b77e25d42f79fc9f6aaa72ef7b833b3"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "8bfe51aff5ae4a8ccf69f37999779489"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "577162b6e66e5dcd6886b8beb1b5024e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "cf5c22d7dbcdcdc3bdfd1092a0c59bba"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "64f852734378eaba79aee98c05f7b33e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d53132ba0706e48b1f046f937a47eff4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c52df17a7f4cc1e838e756d80a0e5e43"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "eac69e655336133e54dd59427df6e8fd"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d506d840dd86e7b297ea57370a400278"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "57077726a96bac79e8369fd9eb1624a7"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "be85f249c00e8fab46117cf808f12606"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "779cd0d2892f5fd3a8c93f6f951698cb"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "0d631c01f15ac6ab68407d4d1cf2d8d5"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "d3bb5389c36e28a9d65dddeae1bf2af9"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f958a0e5135a8ffde0bcbb692d818768"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "ba1821f4b1cedcf3a909cdc6a01c48a6"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "73824611beb963894a13bf7af96c4d01"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4c517db5164d3373f182867fbeccf689"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "50133fdd4b809b9baa01c417a4684104"
  },
  {
    "url": "resources/books.html",
    "revision": "2dda2a0f237f97b4e14db14832786ab7"
  },
  {
    "url": "resources/community.html",
    "revision": "afc7588b3bccc4f5a491838b82196734"
  },
  {
    "url": "resources/conferences.html",
    "revision": "021b9ef34ed391c73f6feb7192b6d236"
  },
  {
    "url": "resources/courses.html",
    "revision": "e92663ccda8712936ebf4239b324560d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "7ed6068a49235f33bdd462effad4eff3"
  },
  {
    "url": "resources/examples.html",
    "revision": "bc979f2e6260ebabcef91f81630401a5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "21419dbf2d76faec57f7d171d75fc082"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "62e7185e4b289d72e646968363bf9f88"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b7455dceb8f0cc25cb8ea52178f0d801"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6333666358957ab567e47ef5ac5ecfec"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "381159be5035f70158cc7567d59c171e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8642cdc5589ff4578f0f8750afc5b1a1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c1147fa66a275a42ad7c1ae305392ce3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
