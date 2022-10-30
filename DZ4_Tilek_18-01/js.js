var xmlhttp = new XMLHttpRequest();
var theUrl = "/json-handler";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({ "email": "tilek@gmail.com", "response": { "name": "Tilek" } }));