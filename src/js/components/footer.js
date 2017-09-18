Vue.component('yqcfooter', function(resolve, reject) {
  // 可以请求一个html文件，既然存放模板还是html文件存放比较好
  $.get("/yiqicha/footer").then(function(res) {
    resolve({
      template: res,
    })
  })
});
