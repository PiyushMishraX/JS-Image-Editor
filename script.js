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
        
    } ,
    exposure: {
        value: 100,
        min:  0,
        max:  200,
        
    } ,
    stauration: {
        value: 100,
        min:  0,
        max:  200,
        
    } ,
    hueRotation: {
        value: 0,
        min:  0,
        max:  360,
        deg",
    } ,
    blut: {
        value: 0,
        min:  0,
        max:  20,
        px",
    },
    grayScale: {
        value: 0,
        min:  0,
        max:  100,
        
    },
    sepia: {
        value: 0,
        min:  0,
        max:  100,
        
    },
    opacity: {
        value: 100,
        min:  0,
        max:  100,
        
    },
    invert: {
        value: 0,
        min:  0,
        max:  20,
        
    },
}

// hydrating(creating elements) html with js
function createFilterElement[name, unit="%",min,max ]{ }