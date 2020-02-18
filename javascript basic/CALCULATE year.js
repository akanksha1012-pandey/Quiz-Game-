function calculateAge(day, month, year){
    var today = new Date();
   var curr_date = today.getUTCDate();
   var curr_month = today.getUTCMonth()+1;
   var curr_year = today.getFullYear();
   var age = curr_year - year;
   if (curr_month > month){
    return age;
   } else {
    if(curr_date >= day){
    return age;
   } else {
    age--;
    return age;
};
};
};
var myage = calculateAge(10,12,1991);
alert(myage);

