// Immediately Invoked Function Expressions (IIFE)
   //NORMAL WRITING FUNCTION
    function coffee(){
    console.log(`DB CONNECTED`)
    }
    coffee();
  // IIFE WAY:
    (function coffee(){
       console.log(`DB CONNECTED`);
    })() ;
   // This function lets immediate execution also sometimes global scope creates a problem which is handled in this .

   //IIFE ARROW CODE: 
   ( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
   })('Ekasu') ; //parameter given value

   //TO END THE IIFE FUNCTION WE HAVE TO PUT A SEMICOLON IN LAST 