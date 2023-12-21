/*
 * 接口的作用
 * 参考文档： https://ts.xcatliu.com/basics/type-of-object-interfaces.html
*/

/// 定义对象的形状，包括属性和方法
interface Person {
    name: string;
    age: number;
    gender?: boolean;       // 可选属性
    [propName: string]: any // 任意属性
    readonly id: number;    // 只读属性
    greet(): void
}

const person: Person = {
    id: 10,
    name: "Jack",
    age: 20,
    greet() {
        console.log("Hello world")
    }
}

/// 实现接口类
interface Shape {
    getArea(): number
}

// 创建类
class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius
    }
    getArea(): number {
        return 2 * this.radius * Math.PI
    }
}

// 类的实例化
const circle = new Circle(2);
console.log(circle.getArea())