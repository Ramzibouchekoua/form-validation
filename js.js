let password = document.getElementById("password")
let name = document.getElementById("name")
let email = document.getElementById("email")
let comment = document.getElementById("comment")
let adress = document.getElementById("adress")
let info = document.getElementById("info")
info.addEventListener("submit", (e) => {
    e.preventDefault();
    empty(password, email, name, adress);
    vpassword(password)
    vemail(email)
})
function empty(password, email, name, adress) {
    
    if (password.value == "") {
        return alert("password is empty")
    }
    if (email.value == "") {
        return alert("email is empty")
    }
    if (name.value == "") {
        return alert("name is empty")
    }
    if (adress.value == "") {
        return alert("adress is empty")
    }

}
function vpassword(password) {
    if(password.value<8){
         alert (" password must be at least 8 charachter")
         password.focus()
         return false}
    chart = /[0-9]/
    if (!chart.test(password.value)) {
        alert("there s no number in your password !try again")
        password.focus()
        return false
    }
        chart = /[A-Z]/
        if (!chart.test(password.value)) {
            alert("there s no uppercase in your password !try again")
            password.focus()
            return false
        }
        
            chart = /[a-z]/
            if (!chart.test(password.value)) {
                alert("there s no lowercase in your password !try again")
                password.focus()
                return false
            }
        }
        function vemail(email){
             chart= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (!chart.test(email.value)) {
                alert("please write valid email")
                email.focus()
                return false
            }
   }