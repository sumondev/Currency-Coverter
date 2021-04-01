



function convert(param1){
    var factor;
    f = document.getElementById('from').value
    t = document.getElementById('to').value

    if(f == t){
        factor = 1
    }
    else if(f == 'EUR' && t == 'USD'){
        factor = 1.25;
    }
    else if(f == 'USD' && t == 'EUR'){
        factor = 1/1.25;
    }
    else if(f == 'EUR' && t == 'BDT'){
        factor =104.06;
    }
    else if(f == 'BDT' && t == 'EUR'){
        factor = 1/104.06;
    }
    else if(f == 'EUR' && t == 'RUPI'){
        factor =79.08;
    }
    else if(f == 'RUPI' && t == 'EUR'){
        factor = 1/79.08;
    }
    else if(f == 'USD' && t == 'BDT'){
        factor =83.35;
    }
    else if(f == 'BDT' && t == 'USD'){
        factor = 1/83.35;
    }
else if(f == 'USD' && t == 'RUPI'){
        factor =63.95;
    }
    else if(f == 'RUPI' && t == 'USD'){
        factor = 1/63.95;
    }
else if(f == 'BDT' && t == 'RUPI'){
        factor =0.77;
    }
    else if(f == 'RUPI' && t == 'BDT'){
        factor = 1/.77;
    }



   // this part is use for from -->> TO 

    if(param1 == "C"){
        document.getElementById('secondinput').value = document.getElementById('firstinput').value * factor        
    }


    // this part is use for to -->> from . but i think this is not need for this assignment ...  coding by sumon ..... 

   /* if(param1 == "F"){
        document.getElementById('firstinput').value = document.getElementById('secondinput').value * factor
    }
*/
}
          
