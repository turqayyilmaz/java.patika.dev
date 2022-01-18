function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
   
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " +date.toLocaleDateString("tr-tr", { weekday: 'long' });
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
let firstNameSurName;
while(true)
{
    firstNameSurName=prompt("Lütfen Adınızı girin");

    if(Boolean(firstNameSurName))
        break;
    
}

let myName=document.querySelector("#myName");
myName.innerHTML=firstNameSurName;
showTime();


function Question(hobby) {
    console.log(arguments)
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type2) {
          console.log(name + " are you interested in " + type2 + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs");
  
  function vovels(str)
  {
    const VOVELS = "aeiou";
    let vovels=[],unvovels=[];

    for(let i=0;i<str.length;i++)
    {
      if(VOVELS.includes(str[i]))
      {
        vovels.push(str[i]);
      }
      else{
        unvovels.push(str[i]);
      }
    }

    let arr=vovels.concat(unvovels);
    for(let i=0;i<arr.length;i++)
    {
      console.log(arr[i]);
    }
  }


  vovels("javascriptloops")