const person = {
    name: "Rohit Sharma",
    city: "Butwal",
    present: true
};
function donkey() {


    var demo = document.getElementsByClassName("name");
    person.name = "Rohit Pandey";
    person.city = "Dumkibas";
    person.present = false;
    var status = person.present ? "present" : "absent";
    delete person.name;
    delete person.city;
    delete person.present;
    for (var i = 0; i < demo.length; i++) {

        demo[i].innerHTML = person.name + " lives in " + person.city + " and is " + status + " today";
        demo[i].style.color = "red";
        demo[i].style.backgroundColor = "yellow";
        demo[i].style.padding = "10px";
        demo[i].style.borderRadius = "10px";
        demo[i].style.fontSize = "20px";
        demo[i].style.fontWeight = "bold";
        demo[i].style.textAlign = "center";
        demo[i].style.margin = "10px";
        demo[i].style.border = "1px solid black";
        demo[i].style.boxShadow = "0 0 10px black";
        demo[i].style.transition = "all 0.5s ease-in-out";
        demo[i].style.cursor = "pointer";
        demo[i].style.userSelect = "none";
    }
}
