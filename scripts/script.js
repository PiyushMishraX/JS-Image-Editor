let filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg",
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px",
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%",
    },
    invert: {
        value: 0,
        min: 0,
        max: 20,
        unit: "%",
    },
}

const filterContainer = document.querySelector(".filters");
const imageCanvas = document.querySelector("#image-canvas");
const imageInput = document.querySelector("#image-input")
const canvasCtx = imageCanvas.getContext("2d")
const resetBtn = document.querySelector("#reset-btn");
const downloadBtn = document.querySelector("#download-btn")
const presetsContainer = document.querySelector(".presets")

let file = null
let image = null

function createFilterElement(name, unit = "%", value, min, max) {

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

    input.addEventListener("input", (event) => {
        filters[name].value = input.value
        applyFilters();
    })

    return div
}

function createFilters(params) {
    Object.keys(filters).forEach(key => {
        const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
        filterContainer.appendChild(filterElement);
    })
}

createFilters();

imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0]
    const imagePlaceholder = document.querySelector(".placeholder")
    imagePlaceholder.style.display = "none"
    imageCanvas.style.display = "block"

    const img = new Image()
    img.src = URL.createObjectURL(file)

    img.onload = () => {
        image = img
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCtx.drawImage(img, 0, 0)
    }
})

function applyFilters() {
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
    `.trim()
    canvasCtx.drawImage(image, 0, 0)
}

resetBtn.addEventListener("click", () => {
    filters = {
        brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        saturation: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        hueRotation: {
            value: 0,
            min: 0,
            max: 360,
            unit: "deg",
        },
        blur: {
            value: 0,
            min: 0,
            max: 20,
            unit: "px",
        },
        grayscale: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%",
        },
        sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%",
        },
        opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%",
        },
        invert: {
            value: 0,
            min: 0,
            max: 20,
            unit: "%",
        },
    }
    applyFilters();
    filterContainer.innerHTML = ""
    createFilters();
})

downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a")
    link.download = "edited-image.png"
    link.href = imageCanvas.toDataURL()
    link.click()
})

const presets = {
    drama: {
        brightness: 90,
        contrast: 150,
        saturation: 60,
        sepia: 10,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        invert: 0,
        opacity: 100
    },
    vintage: {
        brightness: 110,
        contrast: 90,
        saturation: 110,
        sepia: 40,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        invert: 0,
        opacity: 100
    },
    oldSchool: {
        brightness: 105,
        contrast: 130,
        grayscale: 100,
        sepia: 15,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        invert: 0,
        opacity: 100
    },
    noir: {
        brightness: 80,
        contrast: 180,
        grayscale: 100,
        saturation: 0,
        sepia: 0,
        hueRotation: 0,
        blur: 0,
        invert: 0,
        opacity: 100
    },
    summer: {
        brightness: 105,
        contrast: 110,
        saturation: 140,
        hueRotation: -5,
        sepia: 5,
        grayscale: 0,
        blur: 0,
        invert: 0,
        opacity: 100
    },
    dreamy: {
        brightness: 115,
        contrast: 85,
        saturation: 110,
        blur: 1,
        sepia: 10,
        hueRotation: 0,
        grayscale: 0,
        invert: 0,
        opacity: 100
    },
    warmSunset: {
        brightness: 105,
        contrast: 110,
        saturation: 130,
        sepia: 30,
        hueRotation: -10,
        blur: 0,
        grayscale: 0,
        invert: 0,
        opacity: 100
    },
    coolTone: {
        brightness: 100,
        contrast: 105,
        saturation: 80,
        hueRotation: 180,
        sepia: 0,
        grayscale: 5,
        blur: 0,
        invert: 0,
        opacity: 100
    },
    faded: {
        brightness: 110,
        contrast: 80,
        saturation: 85,
        opacity: 90,
        sepia: 10,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        invert: 0
    },
    retroPop: {
        brightness: 110,
        contrast: 140,
        saturation: 180,
        hueRotation: 10,
        sepia: 0,
        grayscale: 0,
        blur: 0,
        invert: 0,
        opacity: 100
    },
    cyberpunk: {
        brightness: 90,
        contrast: 130,
        saturation: 150,
        hueRotation: -30,
        invert: 5,
        sepia: 0,
        grayscale: 0,
        blur: 0,
        opacity: 100
    },
    softGlow: {
        brightness: 115,
        contrast: 95,
        saturation: 110,
        blur: 2,
        opacity: 100,
        sepia: 5,
        hueRotation: 0,
        grayscale: 0,
        invert: 0
    }
};

Object.keys(presets).forEach(presetName => {
    const presetButton = document.createElement("button")
    presetButton.classList.add("btn")
    presetButton.innerText = presetName
    presetsContainer.appendChild(presetButton)

    presetButton.addEventListener("click", () => {
        const preset = presets[presetName]
        Object.keys(preset).forEach(filterName => {
            filters[filterName].value = preset[filterName]
        })
        applyFilters()
        filterContainer.innerHTML = ""
        createFilters()
    })
})