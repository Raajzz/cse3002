const fruits = [
    {
        name: "Apple",
        color: "Red"
    }, 
    {
        name: "Guava",
        color: "Green"
    },
    {
        name: "Orange", 
        color: "Orange"
    },
    {
        name: "Grape", 
        color: "Purple"
    },
    {
        name: "Kiwi",
        color: "Brown"
    }
]

let toggleValue = true;

fruits.forEach(({name})=>{
    document.getElementsByClassName("fruit-name")[0].innerHTML += `<li>${name}</li>`;
})

const showNameAndColors = () => {
    if(toggleValue){
        fruits.forEach(({name, color})=>{
            document.getElementsByClassName("name-and-colors")[0].innerHTML += `<li>${name} - <span style="color: ${color}">${color}</span></li>`;
        })
    } else {
        document.getElementsByClassName("name-and-colors")[0].innerHTML = "";
    }
    toggleValue = !toggleValue;
}