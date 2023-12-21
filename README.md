# TypeScript Demo

TypeScript 测试项目

## 创建项目

```bash
mkdir mydoc
cd mydoc

npm install -g typescript
# 安装后执行TS脚本
npm install -g ts-node
# 初始化项目
tsc --init
```

## 接口(interface) 的作用
1. 定义对象的形状
接口可以定义对象的结构，包括属性的名称、类型以及方法的签名。通过定义接口，可以确保对象具有所需的属性和方法。
```ts
typescript
Copy code
interface Person {
  name: string;
  age: number;
  greet(): void;
}

const person: Person = {
  name: 'Alice',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};
```

2. 类型检查和静态分析
使用接口可以在编译时进行类型检查，提供更强大的静态类型分析。如果对象不符合接口定义的结构，TypeScript 编译器会发出警告或错误，帮助发现潜在的问题。

3. 提高代码可读性和可维护性
通过接口清晰地定义对象的结构，使代码更易于阅读和理解。当多个部分需要遵循相同的结构时，接口可以提高代码的可维护性和可重用性。

4. 接口的可选属性和只读属性
接口支持可选属性和只读属性的定义。可选属性允许对象中某些属性为可选，而只读属性则确保对象属性只能在创建时被赋值，之后不可修改。
```ts
typescript
Copy code
interface Car {
  brand: string;
  model: string;
  readonly year: number;
  color?: string;
}

const myCar: Car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2023,
  color: 'blue'
};

myCar.year = 2024; // Error: Cannot assign to 'year' because it is a read-only property.
```

5. 实现接口的类
类可以使用 implements 关键字实现接口，确保类中包含了接口中定义的属性和方法。这种方式使得代码更具可扩展性和可预测性。

```ts
typescript
Copy code
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

## 函数
1. 函数重载
2. 可变参数
