function learningSkip(id) {
    var paragraph = document.getElementById("machineInformation");
    var choice1 = document.getElementById("learning1");
    var choice2 = document.getElementById("learning2");
    var choice3 = document.getElementById("learning3"); 
    var learnMore = document.getElementById("ML");
    switch(id){
        case 1:
            paragraph.textContent = "RF是（Random Forest）是一种集成学习方法，属于决策树的一种扩展。它通过构建多个决策树，并对其进行组合来进行分类或回归任务。RF由多个决策树组成，每个决策树都是基学习器。这些决策树相互独立地训练，各自基于随机抽样得到的训练数据和特征进行学习。RF可以通过分析每个特征在决策树中的使用情况来评估特征的拟合性、重要性。";
            choice1.className = "active";
            choice2.className = "inactive";
            choice3.className = "inactive";
            learnMore.setAttribute("href","https://www.ibm.com/topics/random-forest");
            break;        
        case 2:
            paragraph.textContent = "SVR（支持向量回归）是一种机器学习方法，用于解决回归问题。它是支持向量机（SVM）的回归版本，主要用于预测连续型的输出变量。首先，将输入特征和对应的输出值组成训练数据集，然后使用核函数将输入特征映射到高维空间中。SVR的目标是找到一个最优的超平面，使得在ε-管道内部的数据点与真实值的差异尽可能小，并且边界外部的数据点尽可能远离超平面。这可以通过最小化损失函数来实现，损失函数衡量了模型对于训练数据的拟合程度和边界的宽度，从而找到最终的回归函数。";
            choice1.className = "inactive";
            choice2.className = "active";
            choice3.className = "inactive";
            learnMore.setAttribute("href","https://link.springer.com/chapter/10.1007/978-1-4302-5990-9_4"); 
            break;        
        case 3:
            paragraph.textContent = "RBF（Radial Basis Function）网络是一种人工神经网络（ANN），通常用于解决分类和回归问题。首先，选择合适的径向基函数（如高斯函数）作为激活函数，并确定网络的结构，包括输入层、隐含层和输出层的节点数。根据训练数据的分布或者使用聚类算法（如K均值聚类）来选择一组中心点。对于每个输入样本，计算其与每个中心点之间的距离，并将距离作为径向基函数的输入。使用已标记的训练数据，通过最小化损失函数（如均方误差）来学习网络中径向基函数的权重。在隐含层中，径向基函数的输出值将被加权组合，并传递到输出层。通过反复迭代训练过程，调整径向基函数的中心点和权重，以使网络的预测结果与真实标签尽可能接近。";
            choice1.className = "inactive";
            choice2.className = "inactive";
            choice3.className = "active";
            learnMore.setAttribute("href"," https://link.springer.com/referenceworkentry/10.1007/978-3-540-70529-1_306"); 
            break;
        default:
    }
}
