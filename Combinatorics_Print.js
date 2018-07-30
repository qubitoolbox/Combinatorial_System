//WORK IN PROGRESS
//TOTAL OF 72 SYSTEMS

/*
CREDITS TO ILIYA BLUSKOK - WHO WROTE BOOK
I AM CONVERTING BOOK VERSION TO JS CODE.


This is a combinatorics system based in
the book of Iliya Bluskok.

Book Name: Combinatorial Systems with
Guaranteed wins for PICK-5 Lotteries.
*/

//PROVIDE A LIST OF AVAILABLE OPTIONS TO USER
//JUST TESING CODE
//LOTTO 1 OR NO

user_input = prompt('Which game would you like to play? ');


function lot_sys_1(){
    
    
    //System #1 guarantees 4-Win if 4 of the numbers drawn are in your set of 6 numbers.
    
    //ADVISE THE USER THAT THIS SYSTEM USES 6 NUMBERS
    alert('YOU ARE REQUIRED TO ENTER 6 DIGITS');
    
    //PROMPT THE USER FOR VALUES AND CONVERT TO INTEGER
    _0 = parseInt(prompt());
    _1 = parseInt(prompt());
    _2 = parseInt(prompt());
    _3 = parseInt(prompt());
    _4 = parseInt(prompt());
    _5 = parseInt(prompt());

    //CREATE ARRAY THAT STORES VALUES USER ENTERS
    var user = [_0, _1, _2, _3, _4, _5];
    
    //BEGIN TABLE OF ARRAYS FOR COMBINATORIC VALUES
    var array = [user[0], user[1], user[2], user[3], user[4]];
    var array1 = [user[0], user[1], user[2], user[3], user[5]];
    var array2 = [user[0], user[1], user[2], user[4], user[5]];
    var array3 = [user[0], user[1], user[3], user[4], user[5]];
    var array4 = [user[0], user[2], user[3], user[4], user[5]];
    
    //PRINT VALUES FOR USER ALREADY CONVERTED AS COMBINATORICS
    document.write(array + "</br>");
    document.write(array1 + "</br>");
    document.write(array2 + "</br>");
    document.write(array3 + "</br>");
    document.write(array4 + "</br>");
    
}

function lot_sys_2(){
    
    //System #2 guarantees 4-Win if 4 of the numbers drawn are in your set of 7 numbers.
    
    //ADVISE THE USER THAT THIS SYSTEM USES 9 NUMBERS
    alert('YOU ARE REQUIRED TO ENTER 7 DIGITS');
    
    //PROMPT THE USER FOR VALUES AND CONVERT TO INTEGER
    _0 = parseInt(prompt("Enter 1st value: "));
    _1 = parseInt(prompt("Enter 2nd value: "));
    _2 = parseInt(prompt("Enter 3rd value: "));
    _3 = parseInt(prompt("Enter 4th value: "));
    _4 = parseInt(prompt("Enter 5th value: "));
    _5 = parseInt(prompt("Enter 6th value: "));
    _6 = parseInt(prompt("Enter 7th value: "));

    //CREATE ARRAY THAT STORES VALUES USER ENTERS
    var user = [_0, _1, _2, _3, _4, _5, _6];
    
    //BEGIN TABLE OF ARRAYS FOR COMBINATORIC VALUES
    var array = [user[0], user[1], user[2], user[3], user[4]];
    var array1 = [user[0], user[1], user[2], user[5], user[6]];
    var array2 = [user[0], user[1], user[3], user[5], user[6]];
    var array3 = [user[0], user[1], user[4], user[5], user[6]];
    var array4 = [user[0], user[2], user[3], user[4], user[5]];
    var array5 = [user[0], user[2], user[3], user[4], user[6]];
    var array6 = [user[1], user[2], user[3], user[4], user[5]];
    var array7 = [user[1], user[2], user[3], user[4], user[6]];
    var array8 = [user[2], user[3], user[4], user[5], user[6]];
    
    //PRINT VALUES FOR USER ALREADY CONVERTED AS COMBINATORICS
    document.write(array + "</br>");
    document.write(array1 + "</br>");
    document.write(array2 + "</br>");
    document.write(array3 + "</br>");
    document.write(array4 + "</br>");
    document.write(array5 + "</br>");
    document.write(array6 + "</br>");
    document.write(array7 + "</br>");
    document.write(array8 + "</br>");
}

function lot_sys_3(){
    
    //System #3 guarantees 4-Win if 4 of the numbers drawn are in your set of 8 numbers.
    
    //ADVISE THE USER THAT THIS SYSTEM USES 8 NUMBERS
    alert('YOU ARE REQUIRED TO ENTER 8 DIGITS');
    
    //PROMPT THE USER FOR VALUES AND CONVERT TO INTEGER
    _0 = parseInt(prompt());
    _1 = parseInt(prompt());
    _2 = parseInt(prompt());
    _3 = parseInt(prompt());
    _4 = parseInt(prompt());
    _5 = parseInt(prompt());
    _6 = parseInt(prompt());
    _7 = parseInt(prompt());

    //CREATE ARRAY THAT STORES VALUES USER ENTERS
    var user = [_0, _1, _2, _3, _4, _5, _6, _7];
    
    //BEGIN TABLE OF ARRAYS FOR COMBINATORIC VALUES
    var array = [user[0], user[1], user[2], user[3], user[4]];
    var array1 = [user[0], user[1], user[2], user[3], user[7]];
    var array2 = [user[0], user[1], user[2], user[4], user[5]];
    var array3 = [user[0], user[1], user[2], user[4], user[6]];
    var array4 = [user[0], user[2], user[2], user[5], user[7]];
    var array5 = [user[0], user[1], user[3], user[5], user[6]];
    var array6 = [user[0], user[1], user[4], user[6], user[7]];
    var array7 = [user[0], user[2], user[3], user[4], user[7]];
    var array8 = [user[0], user[2], user[3], user[5], user[7]];
    var array9 = [user[0], user[2], user[3], user[6], user[7]];
    var array10 = [user[0], user[2], user[4], user[5], user[7]];
    var array11 = [user[0], user[2], user[5], user[6], user[7]];
    var array12 = [user[0], user[3], user[4], user[5], user[6]];
    var array13 = [user[1], user[2], user[3], user[5], user[6]];
    var array14 = [user[1], user[2], user[4], user[6], user[7]];
    var array15 = [user[1], user[3], user[4], user[5], user[7]];
    var array16 = [user[1], user[3], user[4], user[6], user[7]];
    var array17 = [user[1], user[4], user[5], user[6], user[7]];
    var array18 = [user[2], user[3], user[4], user[5], user[6]];
    var array19 = [user[2], user[3], user[5], user[6], user[7]];
    
    //PRINT VALUES FOR USER ALREADY CONVERTED AS COMBINATORICS
    document.write(array + "</br>");
    document.write(array1 + "</br>");
    document.write(array2 + "</br>");
    document.write(array3 + "</br>");
    document.write(array4 + "</br>");
    document.write(array5 + "</br>");
    document.write(array6 + "</br>");
    document.write(array7 + "</br>");
    document.write(array8 + "</br>");
    document.write(array9 + "</br>");
    document.write(array10 + "</br>");
    document.write(array11 + "</br>");
    document.write(array12 + "</br>");
    document.write(array13 + "</br>");
    document.write(array14 + "</br>");
    document.write(array15 + "</br>");
    document.write(array16 + "</br>");
    document.write(array17 + "</br>");
    document.write(array18 + "</br>");
    document.write(array19 + "</br>");
}

// START SYSTEM BASED ON USERS REQUEST (CURRENTLY ONLY THREE SYSTEMS)
switch(user_input){
    case "lotto 1":
        lot_sys_1();
        break;
    case "lotto 2":
        lot_sys_2();
        break;
    case "lotto 3":
        lot_sys_3();
        break;
}