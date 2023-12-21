/*
 * 1. 可变参数
 * 2. 可选参数
 * 3. 参数默认值
 * 4. 函数重载
 */

// 1. 可变参数
function addNum(...nums: number[]): number {
    let sum: number = 0
    nums.forEach((n) => sum += n)
    return sum
}

console.log(addNum(10, 20, 30))

// 2. 可选参数
// 可选参数必须位于必须参数后面
// @gender 设置了默认值 
// @email 为可选参数
function userInfo(name: string, age: number, gender = true, email?: string): { [key: string]: any } {
    return {
        name,
        age,
        gender
    }
}

let u = userInfo("Jack", 20)
console.log(u)

// 3. 函数重载
// 当函数参数个数或类型不同时，可以使用相同的函数名定义多个函数，调用时会根据参数个数或类型调用不同的函数
function reverse(arg: string): string;
function reverse(arg: number): number;
function reverse(arg: number | string): number | string | void {
    if (typeof arg == 'number') {
        return Number(arg.toString().split('').reverse().join(''));
    } else if (typeof arg == 'string') {
        return arg.split('').reverse().join('')
    }
}

console.log(reverse("abcde"))
console.log(reverse(12345))