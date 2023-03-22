export function determineX(x:number): number{
    if(x<0){
        return(x);
    }
        else if(x == 0){
            return(0);
       }
          else{
            return((x*2)-(2*x));
             }
};

