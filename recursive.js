const evenNum = function(a){

        if(a<2){
            return;
        }
   
        if(a%2==0){
            console.log(a);
        }
        evenNum(a-1);
}
evenNum(13);