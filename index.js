


// ------------------------------1--------------------------

// let input = document.querySelector(".slider__input")
// let image = document.querySelector(".slider__image")



// input.addEventListener( "input" ,  _.debounce((event) => {

// if(event.target.value > 50 ) {
    
//      image.style.marginLeft = "100px"
//      image.style.marginRight = "0px"

// } else if (event.target.value < 50) {
//     image.style.marginRight = "100px" ;
//     image.style.marginLeft = "0px" ;
// }


// } , 500))




// -----------------------------2-------------------------------

let box = document.querySelector("#box")


box.addEventListener ("mouseenter" , _.debounce((event) =>{
box.style.marginTop = "100px"

} , 100
))

box.addEventListener("mouseleave" , _.debounce((event) =>{
   
    box.style.marginTop = "0px"
} , 100

))


