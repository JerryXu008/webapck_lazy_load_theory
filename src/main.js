console.log("这是main页面");



// import(/* webpackChunkName: "foo" */"./foo").then(res => {
//     console.log("动态导入foo")
//     console.log(res.sum(1,10))
// });
  
// import(/* webpackChunkName: "foo2" */"./foo2").then(res => {
//     console.log("动态导入foo2")
//     console.log(res.sub(1,10))
// });

   
    /* webpackPrefetch: true */

const button = document.createElement("button");
button.innerHTML = "加载元素";
button.addEventListener("click", () => {
  // prefetch -> 魔法注释(magic comments)
    
    /* webpackPreload: true */
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: 'element' */
    "./element"
  ).then(({default: element}) => {
    document.body.appendChild(element);
  })
});
document.body.appendChild(button);
