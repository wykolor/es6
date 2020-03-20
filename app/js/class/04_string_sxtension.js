{
  let str = "\\u(20bb7)abc";
  for (let code of str) {
    console.log("code=", code);
  }
}

{
  let str = "string";
  console.log("includes:", str.includes("r"));
  console.log("str:", str.startsWith("str"));
  console.log("end:", str.endsWith("ng"));
  let newstr = str.repeat(2);
  console.log(newstr);
}

{
  let name = "kolor";
  let info = "she is a girl";
  let long = `I'm ${name} ,${info}`;
  console.log(long);
}
{
  console.log("1".padStart(2, '0'));
  console.log("1".padEnd(3, '0'));
}
