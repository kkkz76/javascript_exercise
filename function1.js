const sumNumber = function(x){
    function sums(y){
        return x+y;
    }
    return sums;
}

const sumThree_ = sumNumber(3);

console.log(sumThree_(10));
