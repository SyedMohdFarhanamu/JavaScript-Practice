// Throttling In JavaScript
let counter = 0
const loggerFunc = () => {
    // call an API and Get Data
    console.count("Throttled Function...", counter++);
}
  
const throttle = (fn, limit) => {
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;
      if(flag){
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
          flag=true;
        }, limit);
      }
    }
}
  
const betterLoggerFunction = throttle(loggerFunc, 1000);
  
// document.getElementById("click").addEventListener("click",betterLoggerFunction);