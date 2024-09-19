function correctDate(date)
{
    return date<10 ? "0"+date : date;
}


function sale(){
    let saleDate = new Date(2024,8,30);
    let currentDate = new Date();
    let date = saleDate -currentDate;
    let day = Math.floor(date/(24*60*60*1000));
    let hours = Math.floor((date%(24*60*60*1000))/(60*60*1000));
    let minutes = Math.floor((date%(60*60*1000))/(60*1000));
    let seconds = Math.floor((date%(60*1000))/1000);
    let timerValue = document.getElementsByClassName("period");
    timerValue[0].innerHTML=correctDate(day) + ":";
    timerValue[1].innerHTML=correctDate(hours) + ":";
    timerValue[2].innerHTML=correctDate(minutes) + ":";
    timerValue[3].innerHTML=correctDate(seconds);
    if(date<=0){
        timerValue[0].innerHTML='00' + ":";
        timerValue[1].innerHTML='00' + ":";
        timerValue[2].innerHTML='00' + ":";
        timerValue[3].innerHTML='00';
    }
}
sale();
setInterval(()=>{
    sale()
},1000);
