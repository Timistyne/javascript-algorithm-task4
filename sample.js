//this is the code that convert fahrenheit to celsius
function convertFahrToCelsius (F) {
    
    var celsius = ((F-32) * 5/9).toFixed(4);

    if (Number(F)){
        console.log(celsius);
    }  else {
        console.log( F.value + " is not a valid number but a/an " + typeof F);
    }
}
convertFahrToCelsius ('78');



function checkYuGiOh(n) {
    const numbers = [];

    for (let i = 1; i <= n; i++) {
        const numbers = [Number(i)]
        if(i % 2 === 0) {
            console.log('yu');
        } else if (i % 3 === 0) {
            console.log('gi');
        } else if(i % 5 === 0) {
            console.log('oh');
        }

        if (i % 2 === 0 && i % 3 === 0) {
            console.log('yu-gi');
        } else if (i % 2 === 0 && i % 5 === 0) {
            console.log('yu-oh');
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('gi-oh');
        } else if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            console.log('yu-gi-oh');
        } else {
            console.log(i);
            
        } 
        
    }

}

checkYuGiOh("13");