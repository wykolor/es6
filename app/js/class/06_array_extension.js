{
  let arr = Array.of(3, 4, 5, 4);
  console.log(arr);
  let empty = Array.of();
  console.log(empty);
}
{
  let p = document.querySelectorAll("p");
  let pArr = Array.from(p);
  pArr.forEach(function(item) {
    console.log(item.textContent);
  });
  console.log(Array.from([1, 2, 3], item => item * 2));
}

{
  console.log([1, 2, undefined].fill("7"));
  console.log([1, 2, undefined, 3, 4, 5, 6, 7].fill("7", 2, 5));
}

{
  for (let index of ["a", "b", "c"].keys()) {
    console.log("index:", index);
  }
  for (let value of ["a", "b", "c"].values()) {
    console.log("value:", value);
  }
  for (let [index, value] of ["a", "b", "c"].entries()) {
    console.log("index-value:", index, value);
  }
}
{
  console.log([1, 2, 3, 4, 5].find(item => item > 3));
  console.log([1, 2, 3, 4, 5].findIndex(item => item > 3));
  console.log([1, 2, NaN].includes(1));
  console.log([1, 2, NaN].includes(NaN)); // 可以找到NaN
}
