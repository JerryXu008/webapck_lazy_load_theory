(() => { // webpackBootstrap
	var __webpack_modules__ = ({});
	/************************************************************************/
	// The module cache
	var __webpack_module_cache__ = {};

	// The require function
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		if (__webpack_module_cache__[moduleId]) {
			return __webpack_module_cache__[moduleId].exports;
		}
		// Create a new module (and put it into the cache)
		var module = __webpack_module_cache__[moduleId] = {
			// no module.id needed
			// no module.loaded needed
			exports: {}
		};

		// Execute the module function
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

		// Return the exports of the module
		return module.exports;
	}

	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = __webpack_modules__;

	/************************************************************************/
	/* webpack/runtime/define property getters */
	(() => {
		// define getter functions for harmony exports
		__webpack_require__.d = (exports, definition) => {
			for (var key in definition) {
				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					//把所有的key和value都放到export中(这里是用代理的方式)
					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
				}
			}
		};
	})();

	/* webpack/runtime/ensure chunk */
	(() => {
		__webpack_require__.f = {};
		// This file contains only the entry chunk.
		// The chunk loading function for additional chunks
		__webpack_require__.e = (chunkId) => {

			const chunkKeyFunctionArr = Object.keys(__webpack_require__.f);//[j]
			
			let promiseArr = chunkKeyFunctionArr.reduce((promises, key) => {
				// 传入promises的地址到__webpack_require__.f，方法内部会把新创建的promise加入到promises
				__webpack_require__.f[key](chunkId, promises);
				
				 
				//循环执行完毕，最终的promises会作为返回值传递给promiseArr
				return promises;
			}, [])
            //Promise.all 的特点是 加入到里面的所有promise全部执行完毕(resolve或reject)之后，才会执行then
			return Promise.all(promiseArr);


		};
	})();

	/* webpack/runtime/get javascript chunk filename */
	(() => {
		// This function allow to reference async chunks
		__webpack_require__.u = (chunkId) => {
			// return url for filenames based on template
			return "" + chunkId + ".chunk.js";
		};
	})();

	/* webpack/runtime/global */
	(() => {
		__webpack_require__.g = (function () {
			if (typeof globalThis === 'object') return globalThis;
			try {
				return this || new Function('return this')();
			} catch (e) {
				if (typeof window === 'object') return window;
			}
		})();
	})();

	/* webpack/runtime/hasOwnProperty shorthand */
	(() => {
		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
	})();

	/* webpack/runtime/load script */
	(() => {
		var inProgress = {};
		var dataWebpackPrefix = "webpack_devserver:";
		// loadScript function to load a script via script tag
		__webpack_require__.l = (url, done, key, chunkId) => {
			
			if (inProgress[url]) { inProgress[url].push(done); return; }
			var script, needAttach;
			if (key !== undefined) {
				var scripts = document.getElementsByTagName("script");
				for (var i = 0; i < scripts.length; i++) {
					var s = scripts[i];
					if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
				}
			}
			if (!script) {
				
				needAttach = true;
				script = document.createElement('script');

				script.charset = 'utf-8';
				script.timeout = 120;
				if (__webpack_require__.nc) {
					script.setAttribute("nonce", __webpack_require__.nc);
				}
				script.setAttribute("data-webpack", dataWebpackPrefix + key);
				script.src = url;
				
			}
			inProgress[url] = [done];
			
			var onScriptComplete = (prev, event) => {
				console.log("脚本加载完毕")
				//console.log("看看这里2",window.promise)
				// avoid mem leaks in IE.
				script.onerror = script.onload = null;
				clearTimeout(timeout);
				var doneFns = inProgress[url];
				delete inProgress[url];
				script.parentNode && script.parentNode.removeChild(script);
				doneFns && doneFns.forEach((fn) => (fn(event)));
				if (prev) return prev(event);
			}
				;
				
			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
			script.onerror = onScriptComplete.bind(null, script.onerror);
			script.onload = onScriptComplete.bind(null, script.onload);
			console.log("开始插入脚本")
			needAttach && document.head.appendChild(script);
			console.log("插入脚本完毕")
			 
			
		};
	})();

	/* webpack/runtime/make namespace object */
	(() => {
		// define __esModule on exports
		__webpack_require__.r = (exports) => {
			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();

	/* webpack/runtime/publicPath */
	(() => {
		var scriptUrl;
		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
		var document = __webpack_require__.g.document;
		if (!scriptUrl && document) {
			if (document.currentScript)
				scriptUrl = document.currentScript.src
			if (!scriptUrl) {
				var scripts = document.getElementsByTagName("script");
				if (scripts.length) scriptUrl = scripts[scripts.length - 1].src
			}
		}
		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
		__webpack_require__.p = scriptUrl;
	})();

	/* webpack/runtime/jsonp chunk loading */
	(() => {
		// no baseURI

		// object to store loaded and loading chunks
		// undefined = chunk not loaded, null = chunk preloaded/prefetched
		// Promise = chunk loading, 0 = chunk loaded
		var installedChunks = {
			"main": 0
		};

        //chunkId:foo
		__webpack_require__.f.j = (chunkId, promises) => {
			 
			// JSONP chunk loading for javascript
			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;

			
			if (installedChunkData !== 0) { // 0 means "already installed".

				//  这是缓存，可以不管
				// a Promise means "currently loading".
				if (installedChunkData) {
					promises.push(installedChunkData[2]);
					
				}
				else {
					if (true) { 
						//  为chunks建立一个promise
						var promise = new Promise((resolve, reject) => {
							installedChunkData = installedChunks[chunkId] = [resolve, reject];
						});
						//window.promise = promise
						
						//把新建的promise放到 promises数组中
						promises.push(installedChunkData[2] = promise);

						// start chunk loading
						//获取chunk模块的url地址，用于动态在html中插入script标签
						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
 
						var error = new Error();
						
						//url加载加载完毕之后，开始执行的方法
						var loadingEnded = (event) => {
                            //console.log("看看这里4",window.promise)
							if (__webpack_require__.o(installedChunks, chunkId)) {

								installedChunkData = installedChunks[chunkId];
								if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
								if (installedChunkData) {
									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
									var realSrc = event && event.target && event.target.src;
									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
									error.name = 'ChunkLoadError';
									error.type = errorType;
									error.request = realSrc;
									installedChunkData[1](error);
								}
							}
						};
						//动态插入chunk模块的script标签
						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
						 
					} else installedChunks[chunkId] = 0;
				}
			}
		};


		// install a JSONP callback for chunk loading
		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
			console.log("加载脚本push",parentChunkLoadingFunction,data)
			
			var [chunkIds, moreModules, runtime] = data;
			// add "moreModules" to the modules object,
			// then flag all "chunkIds" as loaded and fire callback
			var moduleId, chunkId, i = 0, resolves = [];
			for (; i < chunkIds.length; i++) {
				chunkId = chunkIds[i];
				if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
					resolves.push(installedChunks[chunkId][0]);
				}
				console.log("resolves:",resolves)
				installedChunks[chunkId] = 0;
			}
			for (moduleId in moreModules) {
				if (__webpack_require__.o(moreModules, moduleId)) {
					//把新加载的模块存入__webpack_modules__，供其他模块调用
					__webpack_require__.m[moduleId] = moreModules[moduleId];
				}
			}
			if (runtime) runtime(__webpack_require__);
			//执行以前的push动作，传统的数组push
			if (parentChunkLoadingFunction){
				parentChunkLoadingFunction(data);
			} 
			while (resolves.length) {
				resolves.shift()();//执行resolve，此时会把promise的pending状态变为resolve
			}

		}

		var chunkLoadingGlobal = self["webpackChunkwebpack_devserver"] = self["webpackChunkwebpack_devserver"] || [];
		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
		// 这里很关键，重写了chunkLoadingGlobal的push方法，并把以前的push方法作为新push方法的第一个参数
		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

		// no deferred startup
	}) ();



	/************************************************************************/
	var __webpack_exports__ = {};
	/*!*********************!*\
	  !*** ./src/main.js ***!
	  \*********************/
	console.log("这是main页面");

	__webpack_require__.e("foo") //组装promise.all
	//等promise.all内部的所有promise执行resolev或者reject，会执行then
	//回调函数为__webpack_require__，并把"./src/foo.js"作为第一个参数，其实就是去调用key为"./src/foo.js"的模块
	.then(__webpack_require__.bind(__webpack_require__, "./src/foo.js"))
	.then(function (res) {
		console.log("动态导入foo");
		console.log(res);
		console.log(res.sum(1, 10));
	});
})()
	;
//# sourceMappingURL=main.bundle.js.map