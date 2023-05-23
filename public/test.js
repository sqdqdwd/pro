
async function regist() {
    const user=
    {
         fname : document.getElementById("hamada").value,
         lname : document.getElementById("lname").value,
         username: document.getElementById("username").value,
         email : document.getElementById("email").value,
         pass  : document.getElementById("pass").value,
         age : parseInt(document.getElementById("age").value),
    //    gender : document.getElementById("gender").value
     }
    console.log(user);
 const response = await fetch
        (
            'http://localhost:5000/adduser',
        {
        method: 'POST',
          headers: { "Content-Type": "application/json" },
        body:JSON.stringify(user), 
        } 
        )
  

}