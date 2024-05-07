function skip(id) {
    var paragraph = document.getElementById("information");
    var choice1 = document.getElementById("home1");
    var choice2 = document.getElementById("home2");
    var choice3 = document.getElementById("home3");
    switch(id){
        case 1:
            paragraph.textContent = "土壤水分是影响植物生长和生态系统水循环的关键因素之一，它对于生态系统的稳定性和可持续发展有着重要的影响。因此，准确地监测土壤水分对于实现可持续的农业发展和自然资源管理具有至关重要的作用。而高分辨率土壤水分观测可以提供准确、全面、及时的土壤水分信息，有助于进行精准的灌溉、施肥和水资源管理。与传统土壤水分监测方法相比，高分辨率土壤水分观测技术具有更高的时空分辨率、更广泛的覆盖范围和更快的反演速度，它可以提供更全面的土壤水分信息，为水文、气象、农业等相关领域提供服务。";
            choice1.className = "active";
            choice2.className = "inactive";
            choice3.className = "inactive";
            break;        
        case 2:
            paragraph.textContent = "本平台利用深度神经网络模型反演土壤水数据。深度神经网络并行分布处理能力强, 能够结合多源遥感数据，通过多个层次的非线性变换来提取输入遥感数据的高级特征，从而可以更准确地预测土壤水分含量。同时，它还具有强大的特征学习和提取能力，可以从大规模土壤水分数据中提取复杂的特征，并将其更好地泛化到新的数据集上，从而实现更加优秀的模型预测能力，最终极大地提高产品的精度和准确性。";
            choice1.className = "inactive";
            choice2.className = "active";
            choice3.className = "inactive";
            break;        
        case 3:
            paragraph.textContent = "本平台以Sentinel-1为核心数据，经过数据处理和数据反演等流程最后可得到生产每6-12天一次的100m分辨率的土壤水分产品，其高精度、高分辨率、高实时性的优势，能够为农业生产、林业水利、环境监测等领域提供更加准确的土壤水分数据，促进科技创新和生产发展。";
            choice1.className = "inactive";
            choice2.className = "inactive";
            choice3.className = "active";
            break;
        default:
    }
}
