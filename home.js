var turn = 1;

//space Values
var aAValue = 0;
var aBValue = 0;
var aCValue = 0;
var aDValue = 0;
var aEValue = 0;
var aFValue = 0;
var aGValue = 0;

var bAValue = 0;
var bBValue = 0;
var bCValue = 0;
var bDValue = 0;
var bEValue = 0;
var bFValue = 0;
var bGValue = 0;

var cAValue = 0;
var cBValue = 0;
var cCValue = 0;
var cDValue = 0;
var cEValue = 0;
var cFValue = 0;
var cGValue = 0;

var dAValue = 0;
var dBValue = 0;
var dCValue = 0;
var dDValue = 0;
var dEValue = 0;
var dFValue = 0;
var dGValue = 0;

var eAValue = 0;
var eBValue = 0;
var eCValue = 0;
var eDValue = 0;
var eEValue = 0;
var eFValue = 0;
var eGValue = 0;

var fAValue = 0;
var fBValue = 0;
var fCValue = 0;
var fDValue = 0;
var fEValue = 0;
var fFValue = 0;
var fGValue = 0;


$(Document).ready(function(){

        var viableSpace = function(space, spaceValue){
        var colunm = space.charAt(1);
        console.log(colunm);
        };


        var setSpaceValue = function(spaceValue){
        var returnValue = 1;
        if (spaceValue == 0){

        turn == 1 ? returnValue = 2 : returnValue = 1 ;
        return returnValue;
        }
        else if (spaceValue == 1){
        return 1;
        }
        else if (spaceValue == 2){
        return 2;
        }
        };

        var evaluate = function(space, spaceValue){

            if(spaceValue == 0){

                if (turn == 1){

                    $(space).css('background-color', 'rgb(250,10,10)');
                    turn = 2 ;

                }

                else {

                    $(space).css('background-color', 'rgb(10,10,10)');
                    turn = 1;

                }
            }

        };

        $("#onePlayer").click(function(){
                $("#startMenu").css('display', 'none');
                });

        //#aA is clicked  
        $("#aA").click(function(){
                var aA = "#aA"
                evaluate("#aA", aAValue);
                aAValue = setSpaceValue(aAValue);
                viableSpace(aA, aAvalue);
                console.log(aAValue);
                });

        //#aB is clicked  
        $("#aB").click(function(){
                evaluate("#aB", aBValue);
                aBValue = setSpaceValue(aBValue);
                console.log(aBValue);
                });  

        //#aC is clicked
        $("#aC").click(function(){
                evaluate("#aC", aCValue);
                aCValue = setSpaceValue(aCValue);
                console.log(aCValue);
                });


});  //  The end of Document.ready function
