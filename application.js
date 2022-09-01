
// function incrementValue(){
//     const inputtxt = document.getElementById("inputtext").value;
//     if(inputtxt == ""){
//         alert("Please Enter Your City Name.")
//     }
//     else{
//         let item = parseInt (document.getElementById("valueadd").value);
//         item = item +1
//         document.getElementById("valueadd").value = item;
//         document.getElementById("inputtext").value = "";   
//     }
// }


function incrementValue(){
    const apiKey = 'c1df8e9bc924ac36f435ab141f7c226d'
    const cityName = document.getElementById("inputtext").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => getData(data))
    
    function getData(temp){
        const countryName = temp.name;
        console.log(countryName)
        document.getElementById("cityShow").innerText = countryName;
    }

}