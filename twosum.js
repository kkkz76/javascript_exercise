// Using nested loop is easy but I try to write with single loop Xd.I hope it works flawlessly. 
function twoSum( numArray, target ){
    console.log(numArray,target);
    let a=0;
    let firstNumber = numArray[a];
    let compareIndex =a+1;
    let counter =0;
    while(firstNumber + numArray[compareIndex] != target){
        counter++;
        compareIndex++;
        if(counter == numArray.length-((numArray.indexOf(firstNumber))+1)){
            a++;
            firstNumber = numArray[a];
            compareIndex=a+1;
            counter=0;}
        if( 1 == numArray.length-((numArray.indexOf(firstNumber))+1) && firstNumber + numArray[compareIndex] != target ){
            console.log("No data found");
            return;}}
console.log(numArray.indexOf(firstNumber), compareIndex)}
twoSum([3, -7,-2, 11,6,23], -9)
twoSum([3,2,4,6], 9)
twoSum([3,2,4,6], 10)
twoSum([4,4],8)
twoSum([3,2,1],3)

