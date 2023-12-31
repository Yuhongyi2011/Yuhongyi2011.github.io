console.log('user check loggin button');
let adjoj = ['[{"id":1,"name":"admin","password":"044802"}]','[{"id":1,"name":"SXC","password":"HT00001"}]']
function login(){
    
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("password").value;
    console.log('serversql is loading')
    let inputvalue = [
        {
            id: 1,
            name: user,
            password: pwd
            
        },
    ];
    const JSONuserid = JSON.stringify(inputvalue)
    console.log(JSONuserid)
    if (adjoj.includes(JSONuserid)){
        alert('ok')
        console.log("rego to cloddisk")
        window.location.href = "./clouddisk.html";

    }
    else
    {
        alert("密码或用户名错误。");
    }
}
function enroll() {
    console.log('enroll is loading')
    let tempuser = document.getElementById("tempuser").value;
    let temppwd = document.getElementById("temppassword").value;
    let tempinputvalue = [
        {
            id: 1,
            name: tempuser,
            password: temppwd
            
        },
    ];
    const tempJSONuserid = JSON.stringify(tempinputvalue);
    console.log(tempJSONuserid);
    adjoj.push(tempJSONuserid);
    alert('注册成功');
    window.location.href = "./login.html";
}