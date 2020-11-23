

function showConfirmation(){
    var noTelp = document.getElementById("no-telp").value;
    var nom = document.getElementById("nominal-isi").value;
    if(noTelp == ""){
        alert("Silahkan isi nomor telepon!")
        document.getElementById("no-telp").focus();
    }
    else if(isNaN(noTelp)){
        //console.log("noTelp")
        alert("Nomor tidak ada")
        document.getElementById("no-telp").focus();
    }
    else{
        showVerification();
    }
}

function showVerification(){
    var noTelp = document.getElementById("no-telp").value;
    var nom = document.getElementById("nominal-isi").value;
    var verifItems = document.getElementsByClassName("verif");

    for(var i=0; i < verifItems.length; i++){
        verifItems[i].style.display = "block";
    }

    var pos = 0;
    for(var i=0; i<nom.length; i++){
        if(nom.charAt(i) == "-"){
            pos = i;
        }
    }

    document.getElementById("verif-no").innerHTML = noTelp;
    document.getElementById("nominal").innerHTML = nom.substring(0, pos);
    document.getElementById("harga").innerHTML = nom.substring(pos + 1, nom.length);
}

function verificationSucceeded(){
    var verifItems = document.getElementsByClassName("verif");

    for(var i=0; i < verifItems.length; i++){
        verifItems[i].style.display = "none";
    }

    alert("Pembelian berhasil dilakukan!")
    document.getElementById("no-telp").value = ""
}

function goBack(){
    var verifItems = document.getElementsByClassName("verif");

    for(var i=0; i < verifItems.length; i++){
        verifItems[i].style.display = "none";
    }
}