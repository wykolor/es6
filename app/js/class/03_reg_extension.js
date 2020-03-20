{
  let reg1 = new RegExp("xyz", "i");
  let reg2 = new RegExp(/xyz/i);
  console.log(reg1.test("xyz123"), reg1.flags, reg2.test("xyz123"), reg2.flags);
  let reg3 = new RegExp(/xyz/gi, "i");
  console.log(reg3.flags);
}
{
  let str = "bbb_bb_b";
  let a1 = /b+/g;
  let a2 = /b+/y;
  console.log("one", a1.exec(str), a2.exec(str));
  console.log("two", a1.exec(str), a2.exec(str));
  console.log("three", a1.exec(str), a2.exec(str));
  console.log("four", a1.exec(str), a2.exec(str));
  console.log("five", a1.exec(str), a2.exec(str));
  console.log(a1.sticky, a2.sticky);
}
