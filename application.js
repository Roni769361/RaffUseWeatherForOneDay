

function incrementValue(){
    const inputtxt = document.getElementById("inputtext").value;
    if(inputtxt == ""){
        alert("Please Enter Your City Name.")
    }
    else{
        let item = parseInt (document.getElementById("valueadd").value);
        item = item +1
        document.getElementById("valueadd").value = item;
        document.getElementById("inputtext").value = "";   
    }
}


    fetch('https://randomuser.me/api/?results=5000')
        .then(res => res.json())
        .then(data = console.log(data))
