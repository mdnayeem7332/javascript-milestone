//feetToMile
//1 mile = 5280 feet.
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(79200);
console.log(result)


//woodCalculator
// 1 chair = 1 wood
// 1 table = 3 wood
// 1 bed = 5 wood
function woodCalculator(chair, table, bed) {
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var totalWoodNumber = chair + bed + table;
    return totalWoodNumber;
}
var result = woodCalculator(14,10,10)
console.log(result);


//brickCalculator
function brickCalculator(floor){
    if(floor > 0 && floor < 11){
        var bricksInFeet = 15*1000 ;
        var bricksInSection = floor * bricksInFeet ;
        return "total "+bricksInSection;
    }
    else if(floor > 10 && floor <21){
        var fristRange = 150000;
        var bricksInFeet = 12*1000;
        var nthFloor = floor - 10;
        var bricksInSection = (nthFloor * bricksInFeet) + fristRange;
        return "total "+bricksInSection;
    }
    else if(floor >= 21){
        var secondRange = 270000;
        var bricksInFeet = 10*1000 ;
        var nthFloor = floor - 20 ;
        var bricksInSection = (nthFloor * bricksInFeet) + secondRange;
        return "total " +bricksInSection;
    }
    else{
        return "number of floor is invalid"
    }
}
let totalBricks = brickCalculator(50);
console.log(totalBricks);


//tinyFriend
//find out the smallest name from array
function tinyFriend(friendList) {
    var smallest = friendList[0];
    for (i = 0; i < friendList.length; i++) {
        var individualElement  = friendList[i];
        var lengthIndividualElement = friendList[i].length;
        if(lengthIndividualElement < smallest.length ){
            smallest = individualElement;
        }
    }
    return smallest
}
var smallestName = ['nayeem-nur', 'nayeem', 'nurollah', 'ahmad', 'ahmad-nayeem', 'nurollah-nayeem', 'md-nym',]
console.log(tinyFriend(smallestName))
