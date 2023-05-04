---
title: Java基础开发
sidebarDepth: 2
---

## 新建项目

1. 打开IEDA编辑器
2. 选择对应的文件夹
3. 创建Java项目
4. 选择要使用的JDK
5. function main

<p>一些操作步骤如图所示</p>
<hr/>
<img src="/image/Java/Use/java1.png">
<hr/>
<img src="/image/Java/Use/java2.png">
<hr/>
<img src="/image/Java/Use/java3.png">
<hr/>
<img src="/image/Java/Use/java4.png">
<hr/>
<img src="/image/Java/Use/java5.png">
<br/>

## Java的数据类型

<p>Java的标准数据类型可以分为两类：<b>原始数据类型</b>和<b>引用数据类型</b></p>

### **1.原始数据类型**

Java的原始数据类型有八种：

- **byte**（字节）：在任何一种Java程序中， byte数据类型都是8位、有符号的，以二进制补码表示的整数。一个byte的范围是从 -128 到 127。

  示例代码：

  ```java
  byte b = 10;
  ```

- **short**（短整型）：在Java编程语言中， short数据类型是16位、有符号的，以二进制补码表示的整数。一个short的范围是从 -32768 到 32767。

  示例代码：

  ```java
  short s = 100;
  ```

- **int**（整型）：在Java编程语言中， int数据类型是32位的，带符号的二进制整数。int表示范围从-2^31到2^31-1。

  示例代码：

  ```java
  int i = 1024;
  ```

- **long**（长整型）：在Java编程语言中， long数据类型是64位、有符号的二进制整数。long的范围从-2的63次方到2的63次方-1。

  示例代码：

  ```java
  long l = 123456789L;
  ```

- **float**（单精度）：在Java编程语言中， float数据类型是单精度、32位、符合IEEE 754标准的浮点数。它在存储和运算时需要4个字节。

  示例代码：

  ```java
  float f = 3.14f;
  ```

- **double**（双精度）：在Java编程语言中， double数据类型是双精度、64位、符合IEEE 754标准的浮点数。double类型的默认值为0.0d。

  示例代码：

  ```java
  double d = 3.1415926;
  ```

- **boolean**（布尔型）：Java语言中， boolean数据类型表示一位的信息，取值只有true和false。默认值是false。

  示例代码：

  ```java
  boolean b = true;
  ```

- **char**（字符型）：在Java编程语言中， char数据类型用于表示一个字符，用单引号（'）表示。char类型的大小是16位，取值范围是0到65535。

  示例代码：

  ```java
  char c = 'A';
  ```

### **2.引用数据类型**

除了以上的八种基本数据类型外，Java还有引用数据类型。以下是常用的几种引用数据类型：

- String（字符串）：在Java编程语言中， String类用于表示字符串。String类中的内容都是不可变的。String对象一旦创建，就不能被修改，直到该对象被垃圾回收。

  示例代码：

  ```java
  String str = "Hello, World!";
  ```

- 数组（Array）：在Java编程语言中， 数组是一种将同种数据类型的多个元素存储在一个变量中的数据结构。数组中每个元素的类型都相同，每个元素的位置由一个非负整数索引来标识。

  示例代码：

  ```java
  int[] arr = {1, 2, 3, 4, 5};
  ```

- 类（Class）：在Java编程语言中， 类是一种具有属性和方法的用户自定义数据类型。它是对真实世界中的实体或概念的抽象，也是创建对象的模板。

  示例代码：

  ```java
  class Person {
      String name;
      int age;
      void showInfo() {
        System.out.println("姓名：" + name + " 年龄：" + age);
      }
  }
  Person person = new Person();
  person.name = "张三";
  person.age = 18;
  person.showInfo();
  ```

## 变量使用
### 整数类型
```java
package Variable;

import java.math.BigDecimal;

/**
 * 整数类型的使用类
 */
public class DataTypeDemo {
    public static void main(String[] args) {

        /*
         * int 类型
         * 4字节
         * -2147483648～2147483647
         */
        int a = 100;
        System.out.println(5 / 2);  // 2    截断小数点

        int number = 2147483647;
        int result = number + 1;
        System.out.println(result);   // -2147483648  溢出

        /*
         * long [长整数的直接量需要在后缀加L]
         * 8字节
         * 900万万亿～
         */
        long b = 100000000L;
        long c = 1000000000 * 2 * 10L;  //20亿  没溢出
        //long d = 1000000000 * 3 * 10L;  //30亿溢出   常数相乘大于int最大值溢出
        //长整数类型在进行运算时建议在最前面加上L

        /*
         * double [后缀可以加D]
         * 8字节
         *
         */
        double e = 3.14;

        double f = 3.0;
        double g = 2.9;
        System.out.println(f - g); //0.10000000000000009

        double h = 6.0;
        double i = 4.9;
        System.out.println(h - i); //1.0999999999999996

        double j = 6.0;
        double k = 1.9;
        System.out.println(j - k); //4.1

        /*
         * boolean
         * false OR true
         */

        boolean l = true;

        boolean m = false;
    }
}

```

### 字符类型
```java
package Variable;

import java.math.BigDecimal;

/**
 * 字符类型的使用类
 */
public class DataTypeDemo {
    public static void main(String[] args) {

        /*
         * char
         * 1个
         */
        char a = 'b';  //字符只能用单引号存储，且要使用单引号
        char c = '\'';  //无法存储特殊字符，需要转义
    }
}
```
## 类型转换
### 1. 自动类型转换
<p>将小的类型装载到大的类型中的过程</p>


### 2. 强制类型转换
<p>将大的类型装载到小类型中的过程</p>










