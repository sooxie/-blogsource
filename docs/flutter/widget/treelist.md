


相关类

- ListTreeView

- TreeNode
- TreeNodeItem
- NodeData

- TreeViewController 
- NodeController


每个TreeNode对应一个NodeController , TreeNode拥有TreeNodeItem ,TreeNode拥有TreeNodeItem的item为NodeData(包含了节点的数据)
ListTreeView 拥有 TreeViewController
TreeViewController 控制 NodeController


获取数据的关键函数 

  dynamic dataForTreeNode(TreeNodeItem nodeItem);



  1、先获取listview数量， 调用 treeController.numberOfVisibleChild ,初始化_rootController:NodeController


2、点击展开调用 

rootController 旧的节点树是否可以重用 

