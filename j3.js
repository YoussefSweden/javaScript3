function DaysToNextChristmas()
{
var dateToDay=new Date ();
var dateChristmas = new Date("12/24/2021");
var diff_ms = dateChristmas.getTime() - dateToDay.getTime();
var diff_Days =  diff_ms / (1000 * 3600 * 24);

document.getElementById("result").innerHTML = Math.round(diff_Days) + " days to christmas";
}