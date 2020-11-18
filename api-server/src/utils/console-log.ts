import color from 'ansi-colors' ;





function log(type : string,text : any){


    let date = new Date() ;
    if(type == 'INFO'){

        console.log(color.blue('[INFO] '),color.cyan(date.toISOString()),text)

    }
    else if(type == 'WARNING'){

        console.log(color.yellow('[WARNING] '),color.cyan(date.toISOString()),text)

    } else if(type == 'ERROR'){

        console.log(color.red('[ERROR] '),color.cyan(date.toISOString()),text)

    } else {
       
        console.log(color.green(`[${type}] `),color.cyan(date.toISOString()),text)
 
   } 

}

export default log ;