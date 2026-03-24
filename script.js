// const filters = {
//     brightness: 100,
//     constrast: 100,
//     exposure: 100,
//     stauration: 100,
//     hueRotation: 0,
//     blut: 0,
//     grayScale: 0,
//     sepia: 0,
//     opacity: 100,
//     invert: 0,
// }


const filters = {
    brightness:{
        value: 100,
        min:  0,
        max:  200,
    }, 
    constrast: {
        value: 100,
        min:  0,
        max:  200,
        unit: "%",
    } ,
    exposure: {
        value: 100,
        min:  0,
        max:  200,
        unit: "%",
    } ,
    stauration: {
        value: 100,
        min:  0,
        max:  200,
        unit: "%",
    } ,
    hueRotation: {
        value: 0,
        min:  0,
        max:  360,
        unit: "deg",
    } ,
    blut: {
        value: 0,
        min:  0,
        max:  20,
        unit: "px",
    },
    grayScale: {
        value: 0,
        min:  0,
        max:  100,
        unit: "%",
    },
    sepia: {
        value: 0,
        min:  0,
        max:  100,
        unit: "%",
    },
    opacity: {
        value: 100,
        min:  0,
        max:  100,
        unit: "%",
    },
    invert: {
        value: 0,
        min:  0,
        max:  20,
        unit: "%",
    },
}

// hydrating(creating elements) html with js
function createFilterElement(name, unit="%",min,max){

    const div = document.createElement("div")
    div.classList.add("filter")

    const input = document.createElement("input")
    input.type = "range"
    input.min = max
    input.value = value
    input.id = name

    const p = document.createElement("p")
    p.innerText = name

    div.appendChild(p)
    div.appendChild(input)

}

// Object.keys(filters) => array with elements in form of strings , converted==> object -> array , elemetnts-> string

Object.keys(filters)=(filter=>{
    console.log(filters[filter]){
        
    }
})