# 缓冲对象 

绘制3D物体时一般都是在每帧绘制时将相关数据（如顶点坐标、纹理坐标、法向量、光源位置等）送入渲染管线。对于很多在多次渲染时相关**数据不变**的物体而言，产生了很多不必要的I/O开销，降低了性能。而这种问题通过恰当使用不同的缓冲区对象，可以很好地优化。

## 顶点缓冲区
将绘制物体的顶点数据保存在内存中，在调用glDrawArrays或者glDrawElements等绘制方法前需要调用相应的方法将数据送入显存，I/O开销大，性能不够好。若采用顶点缓冲区对象存放顶点数据，则不需要在每次绘制前都将顶点数据复制进显存，而是在初始化顶点缓冲区对象时一次性将顶点数据送入显存，每次绘制时直接使用显存中的数据，可以大大提高渲染性能。

- 顶点数组对象：Vertex Array Object，VAO
- 顶点缓冲对象：Vertex Buffer Object，VBO
- 索引缓冲对象：Element Buffer Object，EBO或Index Buffer Object，IBO

## 顶点缓冲对象VBO
顶点缓冲对象：用于管理顶点缓冲内存,VBO对象有一个独一无二的缓冲ID

## 顶点数组对象VAO
顶点数组对象：对应的类型为GL_ARRAY_BUFFER，一般用于存放待绘制物体的顶点相关数据，如顶点坐标、纹理坐标、法向量等。

## 索引缓冲对象（元素数组缓冲区）EBO
元素数组缓冲区对象对应的类型为GL_ELEMENT_ARRAY_BUFFER，一般用于存放图元的组装索引数据，在使用索引法进行绘制时使用。


括创建缓冲区的方法glGenBuffers、绑定缓冲区的方法glBindBuffer、向缓冲区送入数据的方法glBufferData和glBufferSubData、删除缓冲区的方法glDeleteBuffers以及查询指定缓冲区相关信息的方法glGetBufferParameteriv等，这些方法都可以通过GLES30类调用

## 相关方法
#### 1、glGenBuffers方法 void glGenBuffers(GLsizei n,GLuint * buffers)
参数1：需要创建的缓冲区数量n
参数二：用于存放创建的n个缓冲区编号
```c
 unsigned int VBO;
 glGenBuffers(1, &VBO);
```
#### 2、glBindBuffer方法 glBindBuffer(GL_ARRAY_BUFFER, VBO)
用于绑定当前缓冲区对象，绑定相应的缓冲类型,第一次调用glBindBuffer方法绑定缓冲区对象时，缓冲区对象以默认状态分配；如果分配成功，则分配的对象绑定为当前缓冲区对象
- 参数1：绑定的缓冲区类型
- 参数2：绑定的对象
```c
glBindBuffer(GL_ARRAY_BUFFER, VBO);
```

#### 3、glBufferData方法 glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW)
glBufferData方法一般用于向指定缓冲中送入数据，也可以用于对指定缓冲进行相关的存储空间初始化

- 参数1：缓冲区类型
- 参数2：缓冲区大小
- 参数3：缓冲区数据
- 参数4：缓冲区大小
- 参数5：显卡如何管理给定的数据,如
GL_STATIC_DRAW ：数据不会或几乎不会改变。
GL_DYNAMIC_DRAW：数据会被改变很多。
GL_STREAM_DRAW ：数据每次绘制时都会改变。

```c
glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW)
```

#### 4、glDeleteBuffers方法
用于删除指定的缓冲区对象

- 参数1：删除缓冲区数量
- 参数2：缓冲对象编号
```
glDeleteBuffers(1, &VBO);
```

