function validForm(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var numericRegex = /^[0-9]+$/;
    if(!numericRegex.test(username)){
        alert("账号包含非法字符！");
        return false;
    }
    if(username.length < 6 || password.length < 6||username.length > 30||password.length >30){
        alert("账号或密码格式不正确!");
        return false;
    }
    if((username === "2101080139" && password === "123456")
        ||(username === "2101080132" && password === "123456")
        ||(username === "2101080123" && password === "123456")
        ||(username === "2101080124" && password === "123456")
        ||(username === "2201080108" && password === "123456")
    ){
        // alert("登录成功！");
        window.location.href = "html/home.html";
        return false;
    }
    else{
        alert("账号或密码错误！");
        return false;
    }
} 