var date = {
        all: "x", 
        string: "x", 
        year: "x", 
        month: "x",
        day: "x",
        hour: "x",
        min: "x",
        sec: "x"
    }; 

    date.all = new Date(Date(0));
    date.year = (date.all.getFullYear()).toString().slice(2,4);

    if ((date.all.getMonth()).toString().length == 1 && date.all.getMonth() != 9) {
        date.month =  "0" +  ((date.all.getMonth() + 1).toString());
        }else if (date.all.getMonth() == 9) {
        date.month = ((date.all.getMonth() + 1).toString());
        } else {
        date.month = (date.all.getMonth()).toString();
        };
        
    if ((date.all.getDate()).toString().length == 1) {
        date.day =  "0" +  ((date.all.getDate() + 1).toString());
        } else {
        date.day = (date.all.getDate()).toString();
        };
    
    if ((date.all.getHours()).toString().length == 1) {
        date.hour =  "0" +  ((date.all.getHours()).toString());
        } else {
        date.hour = (date.all.getHours()).toString();
        };
        
    if ((date.all.getMinutes()).toString().length == 1) {
        date.min =  "0" +  ((date.all.getMinutes()).toString());
        } else {
        date.min = (date.all.getMinutes()).toString();
        };

    if ((date.all.getSeconds()).toString().length == 1) {
        date.sec =  "0" +  ((date.all.getSeconds()).toString());
        } else {
        date.sec = (date.all.getSeconds()).toString();
        };
   
    date.all = date.day + "." + date.month + "." + date.year + " " + date.hour + ":" +  date.min + ":"+ date.sec;    
if ( controllerBox.effect("Reload Time")("Checkbox") == true) {

[date.all]


} else {

[date.all]

};