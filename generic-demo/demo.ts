/*
 * 范型
 */

/*
 * 循环的使用
 */
// forEatch
function join<T>(args: Array<T>): string {
    let r: string = ""
    args.forEach(i => {
        r = `${r} ${i}`
    })
    return r
}

console.log(join<string>(["hello", "good"]))

// for
function join2<T>(args: Array<T>): string {
    let r: string = ""
    for (let i = 0; i < args.length; i++) {
        r = r + " " + String(args[i])
    }
    return r
}

console.log(join2<string>(["hello", "good"]))

// for..of
function join3<T>(args: Array<T>): string {
    let r: string = ""
    for (let i of args) {
        r = `${r} ${i}`
    }
    return r
}

console.log(join3(["hello", "good"]))


/*
 * 范型类型约束
 */

interface Lengthwise {
    length: number
}

function doubleLength<T extends Lengthwise>(arg: T): number {
    let r = arg.length * 2
    return r
}

console.log(doubleLength([10, 20, 30]))
console.log(doubleLength(['one', 'two', 'three', 'four']))

/*
 * 范型类
 */

class Something<T> {
    private value: T
    constructor(value: T) {
        this.value = value
    }

    getValue(): T {
        return this.value
    }
}

let s = new Something("phone")
console.log(s.getValue())


/*
 * 范型接口
 */

interface Whoer<T> {
    value: T,
    getValue(): T
}

class NumHolder implements Whoer<number> {
    value: number;

    constructor(value: number) {
        this.value = value
    }
    getValue(): number {
        return this.value
    }
}

let nh: Whoer<number> = new NumHolder(100)
// let nh  = new NumHolder(100)
console.log(nh.getValue())