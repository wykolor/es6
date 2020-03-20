{
    let arr = Array.of(3, 4, 5, 4);
    console.log(arr);
    let empty = Array.of();
    console.log(empty);

} {
    let p = document.querySelectorAll("p");
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        console.log(item.textContent)
    })
    console.log(Array.from([1, 2, 3], item=>item*2))
    
}