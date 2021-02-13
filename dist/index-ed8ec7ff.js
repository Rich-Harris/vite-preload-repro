let scriptRel;
const seen = {};
const __vitePreload = function preload(baseModule, deps) {
  if (!deps) {
    return baseModule();
  }
  if (scriptRel === void 0) {
    const relList = document.createElement("link").relList;
    scriptRel = relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
  }
  return Promise.all(deps.map((dep) => {
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res) => {
        link.addEventListener("load", res);
      });
    }
  })).then(() => baseModule());
};
__vitePreload(() => import("./foo-5368ca0f.js"), true ? ["/foo-5368ca0f.js","/foo-0a0d0fb0.css"] : void 0).then((foo) => {
  foo.hello();
});
