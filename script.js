let details=document.createElement("div")
details.setAttribute("id","list")
details.innerHTML='<ul id=list><li id=list1><li id=list2><li id=list3><li id=list4><li id=list5><li id=list6></li></li></li></li></li></li></ul>'
document.getElementById("sub").appendChild(details)


async function getData() {
let data = await fetch(`https://animechan.vercel.app/api/random`)  
let data1 = await data.json()
// console.log(data1[0].Character)
console.log(data1)
let Anime = data1.anime
let Character = data1.character
let Quote= data1.quote
// let carbohydrates= data1[0].Carbohydrate
// let cholestrol= data1[0].Cholesterol

document.getElementById("list1").innerHTML=`Anime : ${Anime}`
document.getElementById("list2").innerHTML=`Character : ${Character}`
document.getElementById("list3").innerHTML=`Quote : ${Quote}`
// document.getElementById("list4").innerHTML=`Calories : ${calories}`
// document.getElementById("list5").innerHTML=`Carbohydrates : ${carbohydrates}`
// document.getElementById("list6").innerText=`Calories : ${cholestrol}`
//let availability = data1.Availability 
   
}
getData()
