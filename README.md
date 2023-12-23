# mydoc

vue动画

## 创建项目

1. 创建mydoc项目
   
   ```bash
   npm create vite@latest mydoc
   ```

2. 安装vue-router, vuex模块
   
   ```bash
   npm install vue-router@next vuex@next
   ```

## CSS 属性

1. transition
   
   ```css
   transition: <property> <duration> <timing-function> <delay>;
   ```
   
   * transition-property: width,height,background-color;                                 # property 指定需要过渡的属性
   
   * transition-duration: 1s;                                                                                    # duration 过渡持续时间 
   
   * transition-timing-function: ease | linear | ease-in | ease-out | steps(); #  过渡的缓动函数
   
   * transition-delay: 1s;                                                                                          # delay 过渡延迟时间 
     
     * transition-timing-function 是 CSS 过渡属性之一，它用于定义过渡期间动画的速度变化曲线。这个属性可以通过指定不同的取值来控制过渡的加速度和减速度，从而产生不同的动画效果。以下是 transition-timing-function 可以使用的取值：
       
       ```css
       ease：默认值。开始时慢速，然后加速，然后减速结束。
       linear：匀速，没有加速或减速。
       ease-in：开始时慢速，然后逐渐加速。
       ease-out：开始时快速，然后逐渐减速。
       ease-in-out：开始和结束时慢速，中间加速。
       ```

2. transform

```css
transform: none|transform-functions;
```

可取值

| none                                                                      | 定义不进行转换。                   | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_rotate&p=22) |
| ------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------- |
| matrix(*n*,*n*,*n*,*n*,*n*,*n*)                                           | 定义 2D 转换，使用六个值的矩阵。         | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_matrix)      |
| matrix3d(*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |                                                                         |
| translate(*x*,*y*)                                                        | 定义 2D 转换。                  | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_translate)   |
| translate3d(*x*,*y*,*z*)                                                  | 定义 3D 转换。                  |                                                                         |
| translateX(*x*)                                                           | 定义转换，只是用 X 轴的值。            | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_translatex)  |
| translateY(*y*)                                                           | 定义转换，只是用 Y 轴的值。            | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_translatey)  |
| translateZ(*z*)                                                           | 定义 3D 转换，只是用 Z 轴的值。        |                                                                         |
| scale(*x*,*y*)                                                            | 定义 2D 缩放转换。                | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_scale)       |
| scale3d(*x*,*y*,*z*)                                                      | 定义 3D 缩放转换。                |                                                                         |
| scaleX(*x*)                                                               | 通过设置 X 轴的值来定义缩放转换。         | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_scalex)      |
| scaleY(*y*)                                                               | 通过设置 Y 轴的值来定义缩放转换。         | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_scaley)      |
| scaleZ(*z*)                                                               | 通过设置 Z 轴的值来定义 3D 缩放转换。     |                                                                         |
| rotate(*angle*)                                                           | 定义 2D 旋转，在参数中规定角度。         | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_rotate)      |
| rotate3d(*x*,*y*,*z*,*angle*)                                             | 定义 3D 旋转。                  |                                                                         |
| rotateX(*angle*)                                                          | 定义沿着 X 轴的 3D 旋转。           | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_rotatex)     |
| rotateY(*angle*)                                                          | 定义沿着 Y 轴的 3D 旋转。           | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_rotatey)     |
| rotateZ(*angle*)                                                          | 定义沿着 Z 轴的 3D 旋转。           | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_rotatez)     |
| skew(*x-angle*,*y-angle*)                                                 | 定义沿着 X 和 Y 轴的 2D 倾斜转换。     | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_skew)        |
| skewX(*angle*)                                                            | 定义沿着 X 轴的 2D 倾斜转换。         | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_skewx)       |
| skewY(*angle*)                                                            | 定义沿着 Y 轴的 2D 倾斜转换。         | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_transform_skewy)       |
| perspective(*n*)                                                          | 为 3D 转换元素定义透视视图。           | 测试                                                                      |

3. opacity

```css
opacity: 0.0 - 1.0 
```

* 0: 完全透明， 
* 1: 完全不透明

## Vue Transform

<img src="./public/transition-classes.png" title="" alt="transition-classes" width="554">

transition classes

1. `v-enter-from`: Starting state for enter. Added before the element is inserted, removed one frame after the element is inserted.

2. `v-enter-active`: Active state for enter. Applied during the entire entering phase. Added before the element is inserted, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.

3. `v-enter-to`: Ending state for enter. Added one frame after the element is inserted (at the same time `v-enter-from` is removed), removed when the transition/animation finishes.

4. `v-leave-from`: Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.

5. `v-leave-active`: Active state for leave. Applied during the entire leaving phase. Added immediately when a leaving transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.

6. `v-leave-to`: Ending state for leave. Added one frame after a leaving transition is triggered (at the same time `v-leave-from` is removed), removed when the transition/animation finishes.
