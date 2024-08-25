// Debouncing In JavaScript
let counter = 0
const getData = () => {
    // call an API and Get Data
    console.log("Fetching Data ...",counter++)
}

// Only call getData() when the time b/w the two key press event is is greater than 300ms

const debounce = function(fn, d){
    let timer
    return function(){
        let context = this,
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, d);
    }
}

const betterFunction = debounce(getData, 500)