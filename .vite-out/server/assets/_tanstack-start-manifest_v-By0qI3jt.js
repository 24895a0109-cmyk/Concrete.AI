//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/home/project/src/routes/__root.tsx",
		children: ["/", "/app"],
		css: ["/assets/index-BriuWl0e.css"],
		preloads: ["/assets/index-DDj2PTqj.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-DDj2PTqj.js"
		} }]
	},
	"/": {
		filePath: "/home/project/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-BxNKkzSN.js",
			"/assets/trending-up-BxdBN_o4.js",
			"/assets/chevron-right-A47HNwd9.js",
			"/assets/sparkles-CCA6Q5zj.js"
		]
	},
	"/app": {
		filePath: "/home/project/src/routes/app.tsx",
		children: ["/app/"],
		preloads: [
			"/assets/app-C05lVcym.js",
			"/assets/trending-up-BxdBN_o4.js",
			"/assets/layout-dashboard-8syL0EdX.js",
			"/assets/sparkles-CCA6Q5zj.js"
		]
	},
	"/app/": {
		filePath: "/home/project/src/routes/app/index.tsx",
		children: void 0,
		preloads: ["/assets/app-D7C2QW4W.js", "/assets/chevron-right-A47HNwd9.js"]
	}
} });
//#endregion
export { tsrStartManifest };
