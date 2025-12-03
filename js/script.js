const person = {
    name: "Rohit Sharma",
    city: "Butwal",
    present: true
};
function donkey() {
    const status = person.present ? "present" : "absent";

    var demo = document.getElementById("name");

    demo.innerHTML = person.name + " lives in " + person.city + " and is " + status + " today";

    demo.style.color = "red";
    demo.style.backgroundColor = "yellow";
    demo.style.padding = "10px";
    demo.style.borderRadius = "10px";
    demo.style.fontSize = "20px";
    demo.style.fontWeight = "bold";
    demo.style.textAlign = "center";
    demo.style.margin = "10px";
    demo.style.border = "1px solid black";
    demo.style.boxShadow = "0 0 10px black";
    demo.style.transition = "all 0.5s ease-in-out";
    demo.style.cursor = "pointer";
    demo.style.userSelect = "none";
}
