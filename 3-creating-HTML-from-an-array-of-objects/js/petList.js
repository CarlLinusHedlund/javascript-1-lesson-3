const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class
const container = document.querySelector (".pet-container");
console.log(container)
// Create a html variable to hold our html in it when we use the loop


let html = "";

for(let i = 0; i < pets.length; i++){
console.log(pets[i])
    let theType = "";
    if(pets[i].type){ 
            theType = pets[i].type;
    }else {
        theType = "unknown type";
    };


html = html + `
<div>
    <h4>${theType}</h4>
    <p>${pets[i].age}</p>
    <p>${pets[i].friendly ? "yes it is friendly" : "no it is not friendly"}</p> 
</div>
`;
console.log(html)
};
container.innerHTML = html;


// Loop over the array
// change the innerHTML
