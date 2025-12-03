const person = {
    name: "Rohit Sharma",
    city: "Butwal",
    present: true
};
function donkey() {
    const status = person.present ? "present" : "absent";

    var demo = document.getElementsByClassName("name");

    demo[2].innerHTML = person.name + " lives in " + person.city + " and is " + status + " today";
    demo[2].style.color = "red";
    demo[2].style.backgroundColor = "yellow";
    demo[2].style.padding = "10px";
    demo[2].style.borderRadius = "10px";
    demo[2].style.fontSize = "20px";
    demo[2].style.fontWeight = "bold";
    demo[2].style.textAlign = "center";
    demo[2].style.margin = "10px";
    demo[2].style.border = "1px solid black";
    demo[2].style.boxShadow = "0 0 10px black";
    demo[2].style.transition = "all 0.5s ease-in-out";
    demo[2].style.cursor = "pointer";
    demo[2].style.userSelect = "none";
    demo[2].style.outline = "none";

}
