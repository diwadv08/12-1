// document.write(`<h2>${new Date().getFullYear()}</h2>`)
// document.write(`<h2>${new Date().getMonth()}</h2>`)
// document.write(`<h2>${new Date().getDate()}</h2>`)
// document.write(`<h2>${new Date().getDay()}</h2>`)
// document.write(`<h2>${new Date().getHours()}</h2>`)
// document.write(`<h2>${new Date().getMinutes()}</h2>`)
// document.write(`<h2>${new Date().getSeconds()}</h2>`)


var B=1;
var date=new Date().getDate();
var days=['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
var count=days.length;







switch(B){
    case 0:
        alert(date+', '+days[0]);
        break;
    case 1:
        alert(date+', '+days[1]);
        break;
    case 2:
        alert(date+', '+days[2]);
        break;
    case 3:
        alert(date+', '+days[3]);
        break;
    case 4:
        alert(date+', '+days[4]);
        break;
    case 5:
        alert(date+', '+days[5]);
        break;
    case 6:
        alert(date+', '+days[6]);
        break;
    default:
        alert('Not a day');
        break;
}


