'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cebf6cbef4f3e6b914be90803cec3bd5",
"index.html": "32cc7987942538204a70b861a86bfbc0",
"/": "32cc7987942538204a70b861a86bfbc0",
"main.dart.js": "dd6bca1fabd8b2c181ec56383f2cc03f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b2e430d92c9142be1b9c541f8bee2ea5",
"assets/AssetManifest.json": "72db283515813f2880fc74003b781359",
"assets/NOTICES": "97009e14d9067aedd5b194770ecc1ffd",
"assets/loading.svg": "146ea56925a64a463df610354d09423c",
"assets/FontManifest.json": "5cb410acd8f11a25fbb8bbc84050d399",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/math_keyboard/fonts/CustomKeyIcons.ttf": "b0bace3f25c2bd05862680e5ad4c6b54",
"assets/packages/flutter_inappwebview_quill/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview_quill/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter_quill/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/donations-circle.svg": "2eebc562daaa28498b691276af871603",
"assets/assets/svg/active-circle.svg": "9ac0a677642f2e4faa3054245f46cd8f",
"assets/assets/svg/profile-edit.svg": "2da7079e59f76e8b4eea5faec4662298",
"assets/assets/svg/user.svg": "974f0011c2d336a204d8675f7d411087",
"assets/assets/svg/event-circle.svg": "cb2cda2c9f05213f2b7d4c4c8b137261",
"assets/assets/svg/message-circle.svg": "c257a457a3c92d07b4d3af9df724f0b3",
"assets/assets/svg/rewards-circle.svg": "71676292723c5b44a882ab174cc12048",
"assets/assets/svg/rewards.svg": "58ff38d71d166bab492d8f0f2598e137",
"assets/assets/svg/following.svg": "502a9b5ee676cb6ac877283a53e5481b",
"assets/assets/svg/completed-circle.svg": "b63969d72f8f1ec4080f526da32f1e6c",
"assets/assets/svg/ambulance.svg": "0c8d7bd714ded9f9b450700104dc7564",
"assets/assets/svg/support-ticket.svg": "dd4bf3f68b9c608e40a31d0875364122",
"assets/assets/svg/logout-circle.svg": "2eb1a2a35f6cf519dcf960baca056b7f",
"assets/assets/svg/dashboard.svg": "b707e119b85d495253e173e28f0e8728",
"assets/assets/svg/event.svg": "6d04a0dbadd1a37eca8ed41f33ff6804",
"assets/assets/svg/pending-circle.svg": "f564bdb0b5c9050af28325ef3343d3e4",
"assets/assets/svg/category.svg": "3390eba53464c5694d467d1f9bf262f9",
"assets/assets/svg/campaign-circle.svg": "a2e9c413ce5e0ecc0365339597e369a4",
"assets/assets/svg/email.svg": "879c52481e26c590f67ab68dca0e0c5e",
"assets/assets/svg/pregnancy.svg": "4717b76eab7f045374de716de524cf88",
"assets/assets/svg/search-icon.svg": "d48449a311445e5ef50016d15213eb73",
"assets/assets/svg/loading.svg": "5d0ea2d2fcd2e7589958df2aece3eeab",
"assets/assets/svg/donations.svg": "a15ee5fca9feffa7ded093e931af2f74",
"assets/assets/svg/bill.svg": "72436620c6f99479aad77c34c624bf07",
"assets/assets/svg/home-icon.svg": "b5b6daa1e8582b4bc931f634471fc211",
"assets/assets/svg/saved-icon.svg": "e6b43f41ef4d85310e72de6676e7b260",
"assets/assets/svg/orders-icon.svg": "31758017a43c28c39bab95a640dc4440",
"assets/assets/svg/icons/Transfer.svg": "afc6001cc5d53124ffac78b68ad0ecbe",
"assets/assets/svg/icons/Search.svg": "c7155466276712980bdf822025286c58",
"assets/assets/svg/icons/Reply.svg": "378c21add4d4219e7969f647a2ea15be",
"assets/assets/svg/icons/Markup%2520filled.svg": "40d059b79ceb381a4fff5cf4f94d7717",
"assets/assets/svg/icons/Reply%2520all.svg": "cbeaee2532b1f864de2a7fb44c3da9dd",
"assets/assets/svg/icons/Inbox.svg": "a4777c9e21a6fbd3802c164237a59b0e",
"assets/assets/svg/icons/File.svg": "6ebd5cba586daf5f6a8cd2ae69974d01",
"assets/assets/svg/icons/Markup.svg": "2a0f37b8f81e85e200239f26c8295718",
"assets/assets/svg/icons/Download.svg": "0605a445a2241a5f4d8039cbe62deb65",
"assets/assets/svg/icons/Plus.svg": "db9e94598d5272bad2ed4d0095d3feb5",
"assets/assets/svg/icons/Paperclip.svg": "d7e7dec5e3b15d70d1cc543902e3e3b8",
"assets/assets/svg/icons/Angle%2520down.svg": "a0e3ff9e10cbd5a20fd4b3af570bb403",
"assets/assets/svg/icons/Send.svg": "f29a3dd14ca59dec3c9cd1fe18cb8b4b",
"assets/assets/svg/icons/Printer.svg": "4984ba164d6a117030f2066d5aa59e1f",
"assets/assets/svg/icons/Trash.svg": "4a2cbcd29c9e345be576fc644b154810",
"assets/assets/svg/icons/More%2520vertical.svg": "23720f8fc4d7e46f590006947dd30b42",
"assets/assets/svg/icons/Edit.svg": "b4342990aa20448ca5c23e421217b76a",
"assets/assets/svg/icons/Angle%2520right.svg": "aae36377adfd82ebde3949fdcfd7d383",
"assets/assets/svg/icons/Sort.svg": "d3cfa59524245d5533c0ab4a5fc9d443",
"assets/assets/svg/settings-icon.svg": "988f37ccfd75401b3bd6c94af41de894",
"assets/assets/svg/receipt-circle.svg": "6d8ee524804a2ed616fd05a077ab54c4",
"assets/assets/svg/exit.svg": "904504848adbb3d850486b3a0527b93f",
"assets/assets/svg/clock.svg": "3c87211d6da3fd1b3a2c1eff8504c451",
"assets/assets/svg/phone.svg": "66aa9563433420e5619e5593516fc701",
"assets/assets/svg/location.svg": "1b3873b200ead2c2c9b18aae5e9d9ad9",
"assets/assets/svg/donation-circle.svg": "c7d740c2e91de5831118def497adbf56",
"assets/assets/svg/filter.svg": "858d93fbc521f80b5092c7a9db63b609",
"assets/assets/svg/calendar.svg": "a03dca8fbb409049a03c818010904d9b",
"assets/assets/svg/logo.svg": "a35b6bbe96153e1a9fec2554241f9ab6",
"assets/assets/svg/lock-circle.svg": "65281f5497d6d71d5501404b88463985",
"assets/assets/svg/password.svg": "ab34c1dc21fb39ba7541a4ebaad9a2dd",
"assets/assets/svg/saved-fill-icon.svg": "1a68da4ef58173bee89004719e976f05",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/icon.png": "5343c7eeaa1a8f657603de14310cdc73",
"assets/assets/images/Mount%2520Carmel%2520School.pdf": "4798b0cedae929541573e2692289674f",
"assets/assets/images/pre.png": "1c429ec39a463904c3778e65a78fe5f4",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/pr.jpeg": "b7e6a19b64c130630b37d7afc9eb5f0e",
"assets/assets/images/placeholder.png": "e5606cfb23f3f319d2213f9cd969d9a7",
"assets/assets/images/avatar.png": "5a021ab95b4d2a0c8e7511c40ca7bb2f",
"assets/assets/images/amb.png": "d3b380d03a9cfc406fa041e686b8282d",
"assets/assets/images/watter.jpeg": "7d4b7f8ed8603bfd78b9e8f55ce81ff1",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/logo.png": "72681915fe7818f4cafff94c97afd2d6",
"assets/assets/images/bg1.png": "f03f3982c54a83a583c4a100baf0f099",
"assets/assets/images/pe.jpeg": "e595f06f70ab25347c18b3d95f54eb51",
"assets/assets/images/bg2.png": "f3bd6f1479a16fdb83726fd9865249c8",
"assets/assets/images/icon.jpeg": "da57a6264a74e26ff3c83ef5e9af4ea8",
"assets/assets/images/p.png": "e595f06f70ab25347c18b3d95f54eb51",
"assets/assets/cfg/configurations.json": "4a5dff6ceb408946b2c8da834cbbb99c",
"assets/assets/img/loading_trend.gif": "c384f9d8e6b08bd717ab2c2780408a4f",
"assets/assets/img/china.png": "00d7b6d94371a8a31bcfa9f64fd2b8b1",
"assets/assets/img/wallet.png": "fff6b43bb4043cec2d9fb52631d33db0",
"assets/assets/img/razorpay.png": "95a422973abee92e56cf101550a7f0f9",
"assets/assets/img/my_marker.png": "b3d6188ebbd399b07457c8cd8207700e",
"assets/assets/img/paypal2.png": "fa5a91f938df57cc1e29865730d8a34f",
"assets/assets/img/brazil.png": "3fc8860c56a93364c00c45ea5c18aa73",
"assets/assets/img/visa.png": "dc180f4332981aa7aad5385b88e23f76",
"assets/assets/img/loading.gif": "3f899a790ab677acd5762723b7743334",
"assets/assets/img/placeholder.png": "0f0b0dfbcb2621c2b9ef43aa9af07170",
"assets/assets/img/canada.png": "a4122561940e7324ca621f6f9d75050a",
"assets/assets/img/germany.png": "cc23f204eaadf5d54d2e131228fec9c0",
"assets/assets/img/logo.png": "05fdd41437ce3be64495049b4f356ce9",
"assets/assets/img/united-arab-emirates.png": "0fd33949c93f53bf0c187a8563ac0f85",
"assets/assets/img/pay_pickup.png": "83211f71556036ba32de5bbf983ce93e",
"assets/assets/img/spain.png": "fed7d0ce876bc8161c3b8658475c425f",
"assets/assets/img/apple_pay.png": "df9f08e443f1aa25c713177a1f3a3b36",
"assets/assets/img/loading_card.gif": "223b6df3c3bc3ac611e2bc29b00166a5",
"assets/assets/img/france.png": "78e9f99bc3c993c9c83615d0f3d028c4",
"assets/assets/img/italy.png": "cc79b1867397b8aec17dccce31e6fbef",
"assets/assets/img/cash.png": "9349ca548e2ae942cdaf08e023706d7a",
"assets/assets/img/visacard.png": "4383c95d3b7c43343b1a6a1cf8cd4b2b",
"assets/assets/img/netherlands.png": "67a6d9209d262d0a9c35196d44f5c6eb",
"assets/assets/img/mastercard.png": "fec056c30fa325712d541018e91b20e4",
"assets/assets/img/paypal.png": "dc57a6fb1bc9c03ea0125e1c12dead9a",
"assets/assets/img/united-states-of-america.png": "e499f1fbaeb06cf2b9f6ddfd4de672b5",
"assets/assets/img/marker.png": "30413dde6df4663c202f6d57337d59d6",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/email.png": "d17d56bb1a1f46887d2c17d8d1e06384",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/lock.png": "69ba5e719e4448bac5435dfa2cec8f67",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/user.png": "302cf315afef1767d6934029c5e88922",
"assets/assets/icons/search.png": "f4e7871bac0d8e4b27364f12c9d8eb00",
"assets/assets/icons/email-grey.png": "ffa8f5f48fe9cfadb95d5c85757eb5b0",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/filter.png": "b8c1b6caa52b59bcf755a5bac79f5a44",
"assets/assets/icons/location.png": "18be00f8a31e962f5e583e7ae2573a75",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/google.png": "c9d828c802284e6d71fe9bbd5044ddce",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/facebook.png": "726686e1f5c7636d3194fbfbd34bf133",
"assets/assets/icons/email-circle.png": "4428b90cd587c869e0f7a6fc7d9f6ef2",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/fonts/ProductSans-Light.ttf": "5ea2ab343da06f7eb96ea959895665ea",
"assets/assets/fonts/ProductSans-Medium.ttf": "9c51beb79b8ab173abd924ce39178f0b",
"assets/assets/fonts/ProductSans-Bold.ttf": "a19a7b108b2e3961fc855c6ea5a6546f",
"assets/assets/fonts/ProductSans-Black.ttf": "909eeb19f58cc8c0bc45422f2745cc8a",
"assets/assets/fonts/ProductSans-Thin.ttf": "3c36b2574c62d41428b496b7512e952d",
"assets/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
