function resultSkip(id) {
    var paragraph = document.getElementById("information");
    var choice1 = document.getElementById("result1");
    var choice2 = document.getElementById("result2");
    var choice3 = document.getElementById("result3");
    var imagEle = document.getElementById("resultGra");
    switch(id){
        case 1:
            paragraph.textContent = "基于RF的拟合结果图:";
            choice1.className = "active";
            choice2.className = "inactive";
            choice3.className = "inactive";
            imagEle.setAttribute("src","../img/RF.png");
            imagEle.setAttribute("alt","基于RF的拟合结果图");
            imagEle.setAttribute("width","800px");
            imagEle.setAttribute("height","267px");
            break;        
        case 2:
            paragraph.textContent = "基于SVR的拟合结果图:";
            choice1.className = "inactive";
            choice2.className = "active";
            choice3.className = "inactive";
            imagEle.setAttribute("src","../img/SVR.png");
            imagEle.setAttribute("alt","基于SVR的拟合结果图");
            imagEle.setAttribute("width","800px");
            imagEle.setAttribute("height","267px");
            break;        
        case 3:
            paragraph.textContent = "基于RBF的拟合结果图:";
            choice1.className = "inactive";
            choice2.className = "inactive";
            choice3.className = "active";
            imagEle.setAttribute("src","../img/ANN.png");
            imagEle.setAttribute("alt","基于RBF的拟合结果图");
            imagEle.setAttribute("width","800px");
            imagEle.setAttribute("height","267px");
            break;
        default:
    }
}