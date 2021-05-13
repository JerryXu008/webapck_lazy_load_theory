console.log("这是main页面");



import(/* webpackChunkName: "foo" */"./foo").then(res => {
    console.log("动态导入foo")
    console.log(res.sum(1,10))
});
  
import(/* webpackChunkName: "foo2" */"./foo2").then(res => {
    console.log("动态导入foo2")
    console.log(res.sub(1,10))
});

   
