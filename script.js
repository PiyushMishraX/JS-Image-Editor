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

const filterContainer = document.querySelector(".filters");

// Canvas
const imageCanvas = document.querySelector(".image-canvas");
// inputes image
const imageInput = document.querySelector("#image-input")

// hydrating(creating elements) html with js
function createFilterElement(name, unit="%",value,min,max){

    const div = document.createElement("div")
    div.classList.add("filter")

    const input = document.createElement("input")
    input.type = "range"
    input.min = min
    input.max = max
    input.value = value
    input.id = name

    const p = document.createElement("p")
    p.innerText = name

    div.appendChild(p)
    div.appendChild(input)

    return div // return div so it's value can be used in filterELement
}

// Object.keys(filters) => array with elements in form of strings , converted==> object -> array , elemetnts-> string
// object.keys -> array of keys of the object
// Object.keys(filters).forEach(filter=>{
//     console.log(filter) // print the element name
//     console.log(typeof filter)
//     console.log(filters[filter]) // print filters[name_of_ele] -> if name is "brightness" than prints filters["brightness"] ->  brightness:{ value: 100, min:  0, max:  200,}, }
//      filters[filter] is also an object

// })

// console.log(filters["brightness"]) prints the element 


Object.keys(filters).forEach(key=>{
    // console.log(key, filters[key]) 
    const filterElement = createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max)
    // console.log(filterElement)
    // console.dir(filterElement)

    filterContainer.appendChild(filterElement);
})

// at start value is null and when user selects any image then this event runs  
imageInput.addEventListener("change",(event)=>{
    // console.log("change event fired")
    const file = event.target.files[0]

    // console.log(file)
    // add image ->
    const img = new Image() // create image  using js instead of html
    img.src = URL.createObjectURL(file) // converts user image to url



})