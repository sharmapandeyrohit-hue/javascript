const person = {
    name: "Rohit Sharma",
    city: "Butwal",
    present: true
};
function donkey() {
    console.log(person);
    document.getElementById("name").innerHTML = person.name + " lives in " + person.city + " and is " + person.present;
}