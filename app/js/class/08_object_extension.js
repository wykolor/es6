/**
 * 对象扩展
 *      简洁表示法  属性表达式
 *      扩展运算符  Object新增方法
 * */
{
  let o = 1;
  let k = 2;
  let es5 = {
    o: o,
    k: k
  };
  let es6 = {
    o,
    k
  };
  console.log(es5, es6);
  let es5_method = {
    hello: function() {
      console.log("hello");
    }
  };
  let es6_method = {
    hello() {
      console.log("hello");
    }
  };
  console.log(es5_method.hello(), es6_method.hello());
}
{
  // 属性表达式
  let name = "kolor";
  let obj1 = {
    age: "18",
    kolor: "123"
  };
  let obj2 = {
    [name]: "123",
    age: "12"
  };
  console.log(obj1, obj2);
}

{
  // 判断全等
  console.log(Object.is("124", "124"), Object.is([], []));

  // 浅拷贝
  let obj1 = {
    name: "kolor"
  };
  let obj2 = {
    age: 18
  };
  let obj3 = Object.assign(obj1, obj2);
  console.log(obj3);
  obj3.name = "小于";
  console.log(obj1, obj2, obj3, obj3 === obj1);
}

{
  // 扩展运算符
  let { a, b, c } = { a: "aaa", b: "bbb", e: "eee", d: "ddd", c: "ccc" };
  console.log(a, b, c);
  let obj1 = {
    a: "aaa",
    b: "bbb"
  };
  let obj2 = {
    ...obj1
  };
  console.log(obj2);
}
