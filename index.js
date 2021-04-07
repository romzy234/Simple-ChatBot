const prompt = require('prompt-sync')({sigint: true});
console.log('Starting Chat Bot ;-0')
console.log('\b write \'Exit\'  to close')
// const word = 'Hello Cyril Ogoh \n How Are You ?'

// const cy = word.split(" ");
// console.log(`${cy}`);

// const name2 = prompt('What is your name?   ');
// const name = name2.split(" ");
// console.log(`Hey there ${[name]}`);
var greet = [
    [
        ['greeting', 'prompt', 'start'],
        ['hey', 'hi', 'hello', 'excuse', 'knock', 'you', 'bot'], 
        ['hey you', 'hello there', 'yes', 'am a bot'],
        'prompt',
        [0]
    ],
    [
        ['well-begin','BOT-res', 'response', 'question'],
        ['how', 'are', 'you', 'good', 'night', 'day', 'going', 'is','today', 'afternoon', 'morning','sir','wassup','sup', '\?'],
        ['i am fine', 'yes am good', 'it was fine', 'it\'s going fine', 'am good you',  'good afternoon to you too', 'good morning to you too', 'good day to you sir'],
        'response',
        [1]
    ],
    [
        ['User-Res', 'response', 'question'],
        ['am', 'you', 'good', 'okay', 'find', 'great', 'well', 'sad', 'anrgy', 'mad', 'hungry','know','cool', 'thank', 'don\'t', 'dont'],
        ['so what can i do for you ?', 'am good too and that\'s great \n so what can i do for you ?', 'okay great so what can i do for you ?', 'am sad sometime sorry, So what can i do for you ?', 'am mad sometime sorry, So what can i do for you ?', 'am angry sometime sorry, So what can i do for you ?','am hungry sometime sorry, So what can i do for you ?',  'and Am fine too, SO what can I do for you ?', 'I dont know too, what can i do for you ?',  'good afternoon to you too', 'good morning to you too', 'good day to you sir'],
        'response to task',
        [2]
    ]
]


// Function 1 -- find the most repeated value in an array 
const sortHighest = ( arr )=>{
   // const arr = [0,1,1,0,3,2,1,0,0,4]
    // var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]
// copied fro stackoverflow 
const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
// console.log(arr);
// console.info([...map.keys()])
// console.info([...map.values()])
// my code now -- just letting you know 
const compare = [...map.entries()]
var x = 0
var y = 0
compare.forEach(element => {
   // console.log(element[1])
    if(element[1]> x){
        x = element[1]
        y = element[0]
    }
});
return y
// console.log(y)
// console.log([...map.entries()])
// console.log(typeof [...map.entries()])
}
// sortHighest();


// function two.......
const compareArr = (arr1, arr2)=>{
   // this convert  array arr1 to a set removing duplicated charater and reduce unecssary looping 
   let arr1S = new Set(arr1);
   // convert the set back to an array
   const Barr1 = Array.from(arr1S);
    // the value to be added and return ;-)
    var check = 0
    // for looop to go through a word from the user input and compare with the apporate gist 
   for(let index = 0; index < Barr1.length; index++) {
       const element = Barr1[index];
       for( j = 0; j < arr2.length; j++){
            if(element == arr2[j]){
                check++;
            }
       }  
   }
   return check;
}

// compareArr();


const bot = ()=>{
    // Collect input
    const input = prompt('User :  ').toLowerCase();
    // array to collet output
    const cal = [];
   
    // to check if input is empty
    if(input == "Exit" || input == "exit" || input == "EXIT" || input == "bye" || input == "Bye" || input == " bye" || input == "x" || input == "X" ){
        // terminate = true
        console.log(' Bot : Bye Gee ')
    }else{
    if(input !== "" && input !== " "){
      
        // print users respones 
        console.log('user : ' + input)
        // converting the string to an array 
        const arr = input.split(" ");
        // looping through the whole string to form a word
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
           // console.log(element)
           // looping through all the query in the bow array
            for(i = 0; i< greet.length; i++){
                // the lenght of the query dictionary
                const check = greet[i][1].length;
                // looping the through the query dictionary
                for(m = 0; m < check; m++){
                    // conditional statment ==> checking if the word appear in the query dictionary then index it.
                    if(element == greet[i][1][m]){
                        // console.log(greet[i][1][m])
                        // pushing it to the array for calulation 

                        /**Schema 
                         * index using the array last-child which is a number
                         * word is the word being ilerated 
                         * group is the array title or so 
                        */
                        cal.push({
                            index : greet[i][4],
                            word : element,
                            group : greet[i][3] 
                        })
                    }
                    
                }
               // console.log(check)
            }
            
        }
        // to check if the array is empty 
        if(cal == ''){
            console.log('\n Bot : Sorry I Dont Understand You \n Bot : Can You Rephase It \n Bot : Or Check Your Spelling ')
            console.log('To exit write X');
            console.log('\n so ???');

            bot();
        }else{
            // Working with the compiled 

            // to find the highest character then use it to response 
            const highest = []
            //lopping through  data or cal array
            for(x = 0; x< cal.length; x++){
                // console.log((cal[x].index))
                const  index = cal[x].index
                // push the index for sorting 
                highest.push(Number(index));
            }
            // useHighest to select a Response array and sort  
            const useHighest = sortHighest(highest)// 0 - ...
            // An array for handling the function 2
            let position = []; 
            let arrFinal = greet[0][2]
            for(c = 0; c < greet.length; c++){
                if(greet[c][4] == useHighest){
                    const readArray = greet[c][2];
                    arrFinal = readArray;
                    for(b = 0; b < readArray.length; b++){
                        const sliptA = readArray[b].split(" ")
                        //function 2
                       position.push(compareArr(arr, sliptA));
                    }
                }
            }
            // to find the position of the application 
            // console.log(position)
            // to find the seleted arr 
            const selected = Math.max(...position)
            // console.log(selected);
            if(selected == 0){
                // Selected something random or pick a random values 
              const value =   Math.floor(Math.random() * arrFinal.length)
                console.log('\n Bot : ' +  arrFinal[value] + '\n')
                bot();
            }
            else{
                const positionArr = position.indexOf(selected);
                console.log('\n Bot : ' +  arrFinal[positionArr] + '\n')
                bot();
            }

        }
    } 
    else{
        console.log('\n Bot : Type in something ')
    } 
}
}

// Starting Application 
bot()