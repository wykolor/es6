/**
 * 函数扩展
 *      参数默认值  rest参数    扩展运算符
 *      箭头函数    this绑定    尾调用
 * */
{
  function test(x, y = "world") {
    console.log("默认值：", x, y);
  }
  test("hello");
  test("hello", "kolor");
}
{
  let x = "hello";
  function test(x, y = x) {
    console.log("作用域", x, y); // kolor kolor
  }
  test("kolor");
}
{
  function test(...args) {
    for (const value of args) {
      console.log("参数", value);
    }
    //   展开运算符
    console.log(...args);
  }
  test(1, 2, 3, 4, "a", "b");
}
{
  // 箭头函数
  let sum = item => (item += 4);
  console.log("和", sum(6));
}
{
  // 尾调用
  function test(x) {
    console.log("尾调用", x);
  }
  function test2(x) {
    return test(x);
  }
  test2(4);
}
