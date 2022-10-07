function pwMessage() {
    document.querySelector("#pwNotion").style.display = "block";
}
function isEmpty() {
    if(document.getElementById("id").value == "") {
        document.querySelector("#idNull").style.display = "block";
    } else {
        document.querySelector("#idNull").style.display = "none";
    }
    
    if(document.getElementById("pw").value == "") {
        document.querySelector("#pwNull").style.display = "block";
    } else {document.querySelector("#pwNull").style.display = "none";
    }

    if(document.getElementById("pwCheck").value == "") {
        document.querySelector("#pwCheckNull").style.display = "block";
    } else {
        document.querySelector("#pwCheckNull").style.display = "none";
    }
};
