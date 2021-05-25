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

convertFahrToCelsius(0)
convertFahrToCelsius("0") 
convertFahrToCelsius([1,2,3]) 
convertFahrToCelsius({temp: 0}) 

/**conversion code ends**/
/** different code**/


let checkYuGiOh = (n) => {
    const array = [];
    const newArray = [];

   if (typeof n == 'number') {
       for(i=1; i<=n; i++) {
           array.push(i)
       }

       for(i in array) {
          if(array[i] % 2 == 0 || array[i] % 3 == 0 || array[i] % 5 == 0) {
              var str = " ";

              if(array[i] % 2 === 0 && array[i] % 3 === 0) {
                  str += ("yu-gi")
              }
              else if(array[i] % 3 == 0 && array[i] % 5 == 0) {
                  str += ("gi-oh")
              }
              else if(array[i] % 2 == 0 && array[i] % 5 == 0) {
                  str +=("yu-oh")
              }


            
             else if(array[i] % 2 === 0) {
                  str += ("yu")
              }
             else if(array[i]% 3 === 0) {
                  str += ("gi");
              }
             else if(array[i]% 5 === 0) {
                  str +=("oh");
              }
              newArray.push(str);
            }else {
              newArray.push(array[i])
          }
    
          } 
       } else {
       console.log (`Invalid Parameter : ${JSON.stringify(n)}`)
       return "fizbuzz is meh";
   }

   console.log(newArray)
   return(newArray)
}


//Testing The Function
checkYuGiOh(10);
checkYuGiOh(5);
checkYuGiOh("fizzbuzz is meh")
