const person = {
    name: "Rohit Sharma",
    city: "Butwal",
    present: true
};
function donkey() {
    const status = person.present ? "present" : "absent";
    document.getElementById("name").innerHTML = person.name + " lives in " + person.city + " and is " + status + " today";
}