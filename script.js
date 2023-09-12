//  TO ACCESS INPUT BOX AND IN JAVASCRIPT, LETS GET IT BY:

let display = document.getElementById('inp');

//  TO ACCESS {ALL THE BUTTONS} AND IN JAVASCRIPT, LETS GET IT BY:
//  QUERY SELECTOR ALL [ WHICH'LL GIVE ALL AT ONCE:

let saaraybutton = document.querySelectorAll('button');

//  LETS MAKE A VARIABLE EQUALS TO EMPTY, WHICH WE SHOW IN DISPLAY [INPUT BOX]

let result = "";

// ARRAY.FROM  ==> The Array.from() method returns an array from any object with a length property. The Array.from() method returns an array from any iterable object.

// SO IN SHORT, ARRAY.FROM SAARAY BUTTONS KA ARRAY BANAKR DE DYGA.

let list = Array.from(saaraybutton);


// The forEach() method calls a function for each element in an array.
// EXAMPLE:
// let fruits = ["mango", "apple","banana"]
// fruits.forEach(phal)

// function phal(item){
//     console.log(item)
// }

// FOR EACH METHOD REQUIRES A FUNCTION IN ITS PAREMETER,  e,g: FOREACH(FUNCTION)

// list.forEach(calcu)                                
// function calcu(){
//     addEventListener('click', (e)=>{
//         if(e.target.innerHTML == "="){
//             result = "99"
//             display.value = result
//         }
//     })
// }



list.forEach(answer =>{
    answer.addEventListener('click' ,(e)=> {
        c = e.target.innerHTML;
        if (c == "="){
            final = eval(result)                       // result variable m evaluated answer aajayga
            display.value = final                      // jo k final variable m stored hai...
        }
        else if( c == "AC"){
            result =""
            display.value = result;
        }                                               //let text = ("hello world")
        else if( c == "Del"){                           //let ans = text.substring(0,4) [OUTPUT = hell]
            result = result.substring(0, result.length-1)
            display.value = result;
        }
        else{

            result += c;
            display.value = result
        }

    })
})