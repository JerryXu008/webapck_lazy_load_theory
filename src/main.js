console.log("这是main页面");
import(/* webpackChunkName: "foo" */"./foo").then(res => {
    console.log("动态导入foo")
    console.log(res);
    console.log(res.sum(1,10))
});
  