# 单链表


## 定义
```c
typedef int ElemType

typedef struct node{
  ElemType data;
  struct node *link;
}LNode, LinkList;
```
## 创建链表

```c
//创建长度为n的单链表
ListLink create(int n) {
  //p为新创建节点 ，r指向链表尾部 ，list指向链表头部
  LinkList p,r = NULL, list = NULL;
  for(int i = 0; i < n; i++) {
    ElemType a;
    read(a);

    //存储分配函数，生成LinkList类型的链结点，同时讲改链结点的地址赋值给p
    p = (LinkList)malloc(sizeof(LNode));
    p->data = a;
    p->link = NULL; //将新结点链接在链表尾部 

    if(list == NULL) {
      list = p;
    }else {
      r->link = p;
    }
      r = p;
  }
}

//对a赋值
void read(int &a) {
  a = rand()%30;
}
```

## 链表长度
```c
//非递归
int length(LinkList list) {
  LinkList p = list;
  int n = 0;
  while(p != NULL) {
    p = p->link;
    n++;
  }
  return n;
}
//递归
int length(LinkList list) {
  if(list != NULL) {
    return 1 + length(list->link);
  }
  return 0;
}
```
## 头插法
- 时间复杂度O(1) 
```c
//引用
void insertLink(LinkList &list, ElemType item) {
  //创建新节点
  LinkList p = (LinkList)malloc(sizeof(LNode));
  p->data = item; //将item送新结点数据域 
  p->link = list; //将list送新结点指针域
  list = p;       //修改指针list的指向 
}

//二级指针
void insertLink(LinkList *list, ElemType item) {
  LinkList p = (LinkList)malloc(soizof(LNode));
  p->data = item;
  p->link = *list;
  *list = p;
}

```

## 尾插法
- 时间复杂度O(n) 
```c
void insert(LinkList list, ElemType item) {
  LinkList p,r;
  r = list;
  //r指针指向链表尾部
  while(r->link != NULL) {
    r = r->link;
  }
  p = (LinkList)malloc(sizeof(LNode));
  p->data = item;
  p->link = NULL;
  r->link = p;  //插入尾部
}
```

## 插入q节点后
- 时间复杂度O(1)
```c
void insert(LinkList &list, LinkList q, ElemType item) {

  LinkList p = (LinkList)malloc(sizeof(LNode));
  p->data = item;
  if(list == NULL) {
    list = p;
    p->link = NULL;
  }else {
    p->link = q->link;
    q->link = p;
  }

}
```
## 插入第i个节点后
- 时间复杂度O(n)
```c
////在线性链表中第i(i>0)个结点后面插入一个数据信息为item的新结点,时间复杂度O(n)
int insert(LinkList &list, int i, ElemType item) {
  LinkList q = list;
  //q移动i-1次，指向第i个节点
  int j = 1;
  while(j < i && q != NULL) {
    q = q->link;
    j++;
  }
  if(j != i || q == NULL) {
    printf("链表中不存在第i个链结点");
    return -1;
  }

  LinkList p = (LinkList)malloc(sizeof(LNode));
  p->data = item;
  p->link = q->link;
  q->link = p;
  return 1;
}
```

## 非递减插入
按值有序，假设非递减的链表中，插入一个信息为item的节点
- 1、为新插入的数据申请一个新的链节点p
- 2、从链表的第1个节点开始顺序查找插入位置，查找过程中需要保存当前链节点的直接前驱节点r的位置，以便在插入新的链节点时使用
  
```c
void insert(LinkList &list, ElemType item) {
  LinkList p,q,r = NULL;  //直接前驱节点r
  //创建新节点
  p = (LinkList)malloc(sizeof(LNode));
  p->data = item;
  //检查是否为空或者和第一个节点比较
  if(list == NULL || item < list->data) {
    p->link = list;
    list = p;
  }else {
    q = list;
    while(q != NULL && q->data <= item) {
      r = q;  //r为q的直接前驱
      q = q->link;
    }
    p->link = q;
    r->link = p;
  }
}

//利用线性链表对数组进行排序

void linkSort(ElemType A[], int n) {
  LinkList p, list = NULL;
  int i;
  for(i = 0; i < n; i++) {
    //非递减插入
    insert(list, A[i]);
  }
  p = list;
  i = 0;
  while(p != NULL) {
    A[i++] = p->data;
    p = p->link;
  }
}

```

## 销毁链表
```c
void deleteList(LinkLisk &list) {
  LinkList p = list;
  while(p != NULL) {
    list = p->link;  //保存下一个链节点位置
    free(p);         //删除并释放当前节点
    p = list;        //下一个链节点成为当前节点
  }
}
```

## 删除q节点
```c
void deleteList(LinkLisk &list, LinkList q) {
  LinkList r;
  if(q == list) {
    list = q->link;   //删除链表中的第1个节点，释放被删除链结点空间
    free(q);
  }else {
    r = list;
    while(r->link != q && r->link != NULL) {
      r = r->link;    //移向下一个链结点, 寻找q的直接前驱
    }
    if(r->link != NULL) {
      r->link = q->link;
      free(q);
    }

  }
}
```
