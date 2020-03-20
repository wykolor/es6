{
  // ES6表示进制数
  console.log(0b1111011);
  console.log(0o707);
}
{
  // 判断一个数是否是无穷数字
  console.log("15字符串", Number.isFinite("15"));
  console.log(15, Number.isFinite(15));
  console.log("NaN", Number.isFinite(NaN));
  console.log("分母为0", Number.isFinite("" / 0));
}

{
  // 判断一个数是否是整数
  console.log("25", Number.isInteger(25));
  console.log("25.0", Number.isInteger(25.0));
  console.log("25.1", Number.isInteger(25.1));
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  console.log("10", Number.isSafeInteger(10));
  console.log("a", Number.isSafeInteger("a"));
}
{
  // 小数取整
  console.log(Math.trunc(23.45));
  console.log(Math.trunc(4.9));
}
{
  // 判断一个数是正负数还是0
  console.log(Math.sign(-5));
  console.log(Math.sign(0));
  console.log(Math.sign(5));
  console.log(Math.sign("50"));
  console.log(Math.sign("aa"));
}
{
  // 立方根
  console.log(Math.cbrt(-1));
  console.log(Math.cbrt(8));
}
