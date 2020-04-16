
// Set声明的变量必须是唯一的独一无二的，可用于去重
{
	let list = new Set();
	list.add(3);
	list.add(5);
	list.add(3);
	console.log(list,"size:",list.size)
}
{
	// Set的特性用于去重,但是不会自动类型转换
	let list = [1,2,3,4,4,5,5];
	list.forEach(item=>{
		if(item>3) return 1;
		console.log("list",item)
	})
	// 数组去重
	let newList = [...new Set(list)];
	// 数组的from方法可以将set结构转为数组
	let newList2 = Array.from(new Set(list));
	console.log("数组去重",newList,newList2)
	// 字符串去重
	let uniqueStr = [...new Set("abcabdf")].join("");
	console.log("字符串去重",uniqueStr)
}
{
	let i;
	[1,2,3,4].forEach(item=>{
		if(item>2) return;
		i = item;
		console.log(item)
	})
	console.log("循环出来的i",i)
}
{
	// Set结构内部判断两个值是否相等使用的算法叫做“Same-value-zero equality”，类似于全等运算符“===”
	let list = new Set();
	let a = NaN;
	let b = NaN;
	list.add(a);
	list.add(b);
	// 根据Set内部的算法，判断NaN是相等，所以最终只会出现一个NaN
	console.log("NaN",list);
	// 两个对象总是不相等的
	let obj1 = {};
	let obj2 = {};
	list.add(obj1);
	list.add(obj2);
	console.log("Object",list);
}
{
	// Set实例的属性和方法
	// 方法 操作方法 和 迭代方法
	let arr = ["add","delete","has","clear"];
	let list = new Set(arr);
	console.log("has:",list.has("add")); // 返回true或者false 鉴定Set结构中是否包含某个数据项
	// 删除某一项值
	// list.delete("add");
	console.log("删除add项后的set结构：",list);
	// 清空set
	// list.clear();
	console.log("清空后的set：",list);
	
	// 迭代方法 keys values entries forEach
	// Set没有键名只有键值 所以keys()和values()迭代出来的结果都是一样的
	
	for (let key of list.keys()) {
		console.log("keys:",key);
	}
	for (let value of list.values()) {
		console.log("values:",value);
	}
	for (let [key,value] of list.entries()) {
		console.log("key:",key,"value:",value);
	}
	// Set默认就是迭代的values() 所以不加也可以
	console.log(Set.prototype[Symbol.iterator]===Set.prototype.values);
	for (let value of list) {
		console.log("list:",value);
	}
	list.forEach((value,key)=>{
		console.log("value:",value,"key:",key);
	})
	// 属性
	console.log("Set构造函数的原型上面的属性constructor属性:",list.constructor);
	console.log("Set构造函数原型对象的size属性，表示成员数量:",list.size);
}
{
	// 对比 判断是否包含某一个建 Object和Set的写法上面的差异
	let obj = {
		name:"kolor",
		age:18
	}
	for (let prop in obj) {
		if(obj[prop]){
			// doSomething
			console.log("对象属性-值",prop,"-",obj[prop]);
		}
	}
	let list = new Set();
	list.add("kolor");
	list.add(18);
	for (let value of list) {
		if(list.has(value)){
			// doSomething
			console.log("Set属性值:",value);
		}
	}
}
{
	// Set的应用 并集 交集 差集
	let list1 = new Set([1,2,3,4,5]);
	let list2 = new Set([1,3,4,6,7,8,2]);
	// 并集
	let union = new Set([...list1,...list2]);
	console.log("并集",union);
	// 交集 difference 
	let intersect1 = new Set([...list1].filter(item=>list2.has(item)));
	let intersect2 = new Set([...list2].filter(item=>list1.has(item)));
	console.log("交集:",intersect1,intersect2);
	console.log(intersect1==intersect2); // false 
	console.log(new Set("1") == new Set("1")); // false
	// 差集
	let difference1 = new Set([...list1].filter(item=>!list2.has(item)));
	let difference2 = new Set([...list2].filter(item=>!list1.has(item)));
	console.log("差集：",difference1,difference2);
}
{
	// 遍历set结构改变结构，没有直接的方法可以改变，可以用其他变通方式
	let list = new Set([1,2,3,4]);
	// 方法一 利用数组的印射方法 map
	// let newList = new Set([...list].map(item=>item*2));
	// 方法2
	let newList = new Set(Array.from(list,item=>item*3));
	console.log("更改结构方法1:",list,newList);
}
{
	/**
	 * WeakSet
	 * 特点：
	 * 	1、成员只能是对象
	 * 	2、没有clear方法，没有size属性，不能遍历成员对象
	 * 	3、成员对象都是弱引用，垃圾回收器不会关注存入WeakSet中的成员对象
	 * 	4、成员对象存在与否，取决于垃圾回收器是否回收对该成员对象的引用
	 * */ 
	let ws = new WeakSet();
	ws.add({name:'kolor'});
	console.log("weakset:",ws);
}
{
	// map 特点就是 key可以是任何数据类型
	let map = new Map();
	let arr = [1,2];
	map.set(arr,["1","2"]);
	console.log("map类型",map,map.get(arr));
}
{
	// 第二种定义方式，接收一个数组作为参数
	let map = new Map([["name","kolor"],["title","程序媛"]]);
	// 上述操作的内部实现
	let maps = new Map();
	let arr = [["name","kolor"],["title","程序媛"]];
	arr.forEach(([key,value])=>{
		maps.set(key,value)
	})
	console.log("map定义：",map);
	console.log("map自定义实现",maps);
	// 上述两个打印结果一模一样
	// map的方法和set结构都是一致的
	console.log("size",map.size);
	console.log("map has:",map.has("name"));
	console.log("delete",map.delete("name"),map);
	console.log("clear:",map.clear(),map);
}
{
	// map的遍历
	let map = new Map([[{name:123},"kolor"],[[1,2,4],"程序媛"]]);
	for (let key of map.keys()) {
		console.log("key",key)
	}
	for (let value of map.values()) {
		console.log("value",value);
	}
	// 直接遍历默认的迭代器是绑定的entries方法
	for (let value of map) {
		console.log("直接遍历value",value);
	}
	for (let [key,value] of map.entries()) {
		console.log("entries",key,value);
	}
	let obj = {
		phone:"18208207457",
		call(){
			console.log("电话号码:",this.phone);
		}
	}
	// forEach第二个参数传入作为第一个函数参数执行块中的this指向
	map.forEach(function(value,key){
		console.log("value",value+this.phone,"key",key);
		this.call();
	},obj)
}
{
	// map转换成为数组 最好的方式基本就是使用扩展运算符 转换未数组之后就可以间接使用数组的map filter等等方法来操作map的成员
	let map = new Map([[{name:123},"kolor"],[[1,2,4],"程序媛"]]);
	let arr = [...map];
	console.log("map转换为arr",arr);
}