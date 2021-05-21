let convertFahrToCelsius = (f) => {
    if(typeof f == 'number') {
        let celsius = ((f - 32) * (5/9));
        console.log(celsius);
        return(celsius) = celsius.toFixed(4);
    }
    else if (typeof f == 'object') {
        if(Array.isArray(f)) {
            console.log('this is an array');

            return `${f} is not a valid number but an array`
        } else {
            console.log('this is an object');
            output = `${JSON.stringify(f)} is not a valid number but a ${typeof f}`
            return output
        }
    }

    else if (typeof f == 'string') {
        console.log('')
        let fnumber = Number(f);

        console.log(fnumber);
        console.log(typeof fnumber)

        if(isNaN(fnumber)) {
            console.log("this is not a number")
            return (`${f} is not a valid number but a ${typeof f}.`)
        } else {
            let celsius = ((fnumber - 32) * (5/9));
            console.log(celsius +" c");
            return (celsius)
        }
    } else {
        console.log('failure')
    }
}

/**conversion code ends**/
/** different code**/

function checkYuGiOh(num) {
    const array = [];
    const newArray = [];

    if ( ) {
        for (i = 1; i <= num; i++) {
            array.push(i)
        }
        for ( ) {
            if( ) {
                var str = "";

                if(array[i] % 2 === 0) {
                    str += ("yu")
                }

                if(array[i] % 3 === 0) {
                    str += ("gi")
                    newArray.push(str)
                }

                if(array[i] % 5 === 0) {
                    str += ("oh")
                    newArray.push(str)
                } else {
                    console.log (`Invalid Parameter: ${JSON.stringify(num)}`)
                    return "fizzbuzz is meh";
                }

                console.log(newArray)
                return(newArray)
            }
        }
    }
    
}




