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
}
