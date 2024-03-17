var inputele = document.getElementById("msgcontent")
var addele = document.getElementById("addbtn")
var msgboxele = document.getElementById("msgbox")


addele.onclick = function () {
    var inputValue = inputele.value;
    if (inputValue != "") {
        msgboxele.innerHTML = inputValue;
        inputele.value = "";
    } else {
        alert("Please enter any value")
    }
}