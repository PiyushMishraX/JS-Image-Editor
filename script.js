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


let filters = {
    brightness:{
        value: 100,
        min:  0,
        max:  200,
        unit: "%"
    }, 
    contrast: {
        value: 100,
        min:  0,
        max:  200,
        unit: "%",
    } ,
    // exposure: { // it is changed using browser and css and canvas see exposure as nother brightness and their is no exposure sepearelty in that
    //     value: 100,
    //     min:  0,
    //     max:  200,
    //     unit: "%",
    // } ,
    saturation: {
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
    blur: {
        value: 0,
        min:  0,
        max:  20,
        unit: "px",
    },
    grayscale: {
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
const imageCanvas = document.querySelector("#image-canvas");
// inputes image
const imageInput = document.querySelector("#image-input")

// canvas context -> what is happening in canvas used for change deletion eidting in canvas etc
const canvasCtx = imageCanvas.getContext("2d") // can use 3d but for now using 2d

// reset-Btn
const resetBtn = document.querySelector("#reset-btn");

// download
const downloadBtn = document.querySelector("#download-btn")

let file =null
let image = null

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

    // event listner for filter
    input.addEventListener("input",(event)=>{
        // console.log(input.value);
        // console.log(filters);

        // add iput change in filters elements
        // console.log(name)
        // console.log(filters[name])

        filters[name].value = input.value // change value with slider , on filters object
        console.log(name, filters[name].value)

        // apply filters
        applyFilters();

    })

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

function createFilters(params) {    
    Object.keys(filters).forEach(key=>{
        // console.log(key, filters[key]) 
        const filterElement = createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max)
        // console.log(filterElement)
        // console.dir(filterElement)
    
        filterContainer.appendChild(filterElement);
    })
}

createFilters();

// at start value is null and when user selects any image then this event runs  
imageInput.addEventListener("change",(event)=>{
    // console.log("change event fired")
    const file = event.target.files[0]
    // remove placeholder image
    const imagePlaceholder = document.querySelector(".placeholder")
    imagePlaceholder.style.display = "none"
    imageCanvas.style.display = "block"

    // console.log(file)
    // add image ->
    const img = new Image() // create image  using js instead of html
    img.src = URL.createObjectURL(file) // converts user image to url

    //only when image is loaded then this callback runs to show image on canvas
    img.onload = ()=>{
        image = img

        // method  fix - bigger canvas
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        // problem if image is too big such as 4k images breaks ui - so w give max height and width ot canvas ( gave in css)

        canvasCtx.drawImage(img, 0, 0)  // image is big but canvas is small // it fits as much as it can

    }

})


//  we have to redraw image after filter applying

// temperory to see effects
// function applyBlur() {
//     // canvasCtx.filter = `blur(500px)`
//     // canvasCtx.filter = `blur(5px)`  
//     canvasCtx.filter = `brightness(1750%)`
//     canvasCtx.drawImage(image, 0, 0)  // reload image with changes
// }

function applyFilters(){

    // the filters names in canvas filter should match cdn documentation not your names in filters
//    canvasCtx.filter = `
//    brightness(${filters.brightness.value}${filters.brightness.unit}) 
//    contrast(${filters.contrast.value}${filters.contrast.unit}) 
//    exposure(${filters.exposure.value}${filters.exposure.unit}) 
//    saturation(${filters.saturation.value}${filters.saturation.unit}) 
//    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit}) 
//    blur(${filters.blur.value}${filters.blur.unit}) 
//    grayscale(${filters.grayscale.value}${filters.grayscale.unit}) 
//    sepia(${filters.sepia.value}${filters.sepia.unit}) 
//    opacity(${filters.opacity.value}${filters.opacity.unit}) 
//    invert(${filters.invert.value}${filters.invert.unit}) 
//    ` 


// opacity not working because canvas create new image on top of old one so the opacityis chnaging but can not be seen bcz original img is below it already
// drawImage draws new image on top eveytime it is called
// so we have to clear the canas first using clear RECT
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);;
   canvasCtx.filter = `
   brightness(${filters.brightness.value}${filters.brightness.unit})
   contrast(${filters.contrast.value}${filters.contrast.unit}) 
   saturate(${filters.saturation.value}${filters.saturation.unit}) 
   hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit}) 
   blur(${filters.blur.value}${filters.blur.unit}) 
   grayscale(${filters.grayscale.value}${filters.grayscale.unit}) 
   sepia(${filters.sepia.value}${filters.sepia.unit}) 
   opacity(${filters.opacity.value}${filters.opacity.unit})
   invert(${filters.invert.value}${filters.invert.unit}) 
    `.trim() // new any extra space / new line 
   canvasCtx.drawImage(image, 0, 0)
}

resetBtn.addEventListener("click",()=>{
    filters = {
    brightness:{
        value: 100,
        min:  0,
        max:  200,
        unit: "%"
    }, 
    contrast: {
        value: 100,
        min:  0,
        max:  200,
        unit: "%",
    } ,
    // exposure: { // it is changed using browser and css and canvas see exposure as nother brightness and their is no exposure sepearelty in that
    //     value: 100,
    //     min:  0,
    //     max:  200,
    //     unit: "%",
    // } ,
    saturation: {
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
    blur: {
        value: 0,
        min:  0,
        max:  20,
        unit: "px",
    },
    grayscale: {
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
    applyFilters();

    filterContainer.innerHTML =""
    createFilters(); // reset the inputfields to originasls

})

downloadBtn.addEventListener("click", ()=>{
    const link = document.createElement("a") // browser mai chize sirf a tag se hi download hoti hai to use banaya link naam se
    link.download = "edited-image.png" // a tag ke download attribute ki value set kari "edited-image.png" // to a tag ko pata bhi chal jata hai ki link open nahi karna hai , download karna hai
    link.href = imageCanvas.toDataURL() //
    link.click()
})