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
            if (spaceValue == 0 ){

                ///////////////////////////////////
                ///              *A           /////
                ///////////////////////////////////
                if (space == "#fA"){
                    if (eAValue === 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#eA"){
                    if (dAValue === 0 && fAValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#dA"){
                    if (cAValue === 0 && eAValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#cA"){
                    if (bAValue === 0 && dAValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#bA"){
                    if (aAValue === 0 && cAValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#aA" ){
                    if ( bAValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }

                /////////////////////////////////////////////
                ///                *B                    ////
                /////////////////////////////////////////////
                if (space == "#fB"){
                    if (eBValue === 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#eB"){
                    if (dBValue === 0 && fBValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#dB"){
                    if (cBValue === 0 && eBValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#cB"){
                    if (bBValue === 0 && dBValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#bB"){
                    if (aBValue === 0 && cBValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#aB" ){
                    if ( bBValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }


                /////////////////////////////////////////////
                ///                 *C                ///////
                /////////////////////////////////////////////
                if (space == "#fC"){
                    if (eCValue === 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#eC"){
                    if (dCValue === 0 && fCValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#dC"){
                    if (cCValue === 0 && eCValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#cC"){
                    if (bCValue === 0 && dCValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#bC"){
                    if (aCValue === 0 && cCValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#aC" ){
                    if ( bCValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }



                /////////////////////////////////////////////
                ///                 *D                   ////
                /////////////////////////////////////////////
                if (space == "#fD"){
                    if (eDValue === 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#eD"){
                    if (dDValue === 0 && fDValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#dD"){
                    if (cDValue === 0 && eDValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#cD"){
                    if (bDValue === 0 && dDValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#bD"){
                    if (aDValue === 0 && cDValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#aD" ){
                    if ( bDValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }


                /////////////////////////////////////////////
                ///                *E                    ////
                /////////////////////////////////////////////
                if (space == "#fE"){
                    if (eEValue === 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#eE"){
                    if (dEValue === 0 && fEValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#dE"){
                    if (cEValue === 0 && eEValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#cE"){
                    if (bEValue === 0 && dEValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#bE"){
                    if (aEValue === 0 && cEValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#aE" ){
                    if ( bEValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }


                /////////////////////////////////////////////
                ///                 *F                   ////
                /////////////////////////////////////////////
                if (space == "#fF"){
                    if (eFValue === 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#eF"){
                    if (dFValue === 0 && fFValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#dF"){
                    if (cFValue === 0 && eFValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#cF"){
                    if (bFValue === 0 && dFValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#bF"){
                    if (aFValue === 0 && cFValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#aF" ){
                    if ( bFValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }



                /////////////////////////////////////////////
                //////              *G                 /////
                /////////////////////////////////////////////
                if (space == "#fG"){
                    if (eGValue === 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#eG"){
                    if (dGValue === 0 && fGValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#dG"){
                    if (cGValue === 0 && eGValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#cG"){
                    if (bGValue === 0 && dGValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#bG"){
                    if (aGValue === 0 && cGValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }
                else if (space == "#aG" ){
                    if ( bGValue !== 0){
                        return true;
                    }
                    else
                    return false;
                }







            }

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
                if( viableSpace("#aA", aAValue) ){
                    evaluate("#aA", aAValue);
                    aAValue = setSpaceValue(aAValue);
                }
        });

        //#aB is clicked  
        $("#aB").click(function(){
                if( viableSpace("#aB", aBValue) ){
                    evaluate("#aB", aBValue);
                    aBValue = setSpaceValue(aBValue);
                }
        });  

        //#aC is clicked
        $("#aC").click(function(){
                if( viableSpace("#aC", aCValue) ){
                    evaluate("#aC", aCValue);
                    aCValue = setSpaceValue(aCValue);
                }
        });

        //#aD is clicked  
        $("#aD").click(function(){
                if( viableSpace("#aD", aDValue) ){
                    evaluate("#aD", aDValue);
                    aDValue = setSpaceValue(aDValue);
                }
        });


        //#aE is clicked  
        $("#aE").click(function(){
                if( viableSpace("#aE", aEValue) ){
                    evaluate("#aE", aEValue);
                    aEValue = setSpaceValue(aEValue);
                }
        });


        //#aF is clicked  
        $("#aF").click(function(){
                if( viableSpace("#aF", aFValue) ){
                    evaluate("#aF", aFValue);
                    aFValue = setSpaceValue(aFValue);
                }
        });


        //#aG is clicked  
        $("#aG").click(function(){
                if( viableSpace("#aG", aGValue) ){
                    evaluate("#aG", aGValue);
                    aGValue = setSpaceValue(aGValue);
                }
        });




        //#bA is clicked  
        $("#bA").click(function(){
                if( viableSpace("#bA", bAValue) ){
                    evaluate("#bA", bAValue);
                    bAValue = setSpaceValue(bAValue);
                }
        });

        //#bB is clicked  
        $("#bB").click(function(){
                if( viableSpace("#bB", bBValue) ){
                    evaluate("#bB", bBValue);
                    bBValue = setSpaceValue(bBValue);
                }
        });  

        //#aC is clicked
        $("#bC").click(function(){
                if( viableSpace("#bC", bCValue) ){
                    evaluate("#bC", bCValue);
                    bCValue = setSpaceValue(bCValue);
                }
        });

        //#bD is clicked  
        $("#bD").click(function(){
                if( viableSpace("#bD", bDValue) ){
                    evaluate("#bD", bDValue);
                    bDValue = setSpaceValue(bDValue);
                }
        });


        //#bE is clicked  
        $("#bE").click(function(){
                if( viableSpace("#bE", bEValue) ){
                    evaluate("#bE", bEValue);
                    bEValue = setSpaceValue(bEValue);
                }
        });


        //#bF is clicked  
        $("#bF").click(function(){
                if( viableSpace("#bF", bFValue) ){
                    evaluate("#bF", bFValue);
                    bFValue = setSpaceValue(bFValue);
                }
        });


        //#bG is clicked  
        $("#bG").click(function(){
                if( viableSpace("#bG", bGValue) ){
                    evaluate("#bG", bGValue);
                    bGValue = setSpaceValue(bGValue);
                }
        });



        //#cA is clicked  
        $("#cA").click(function(){
                if( viableSpace("#cA", cAValue) ){
                    evaluate("#cA", cAValue);
                    cAValue = setSpaceValue(cAValue);
                }
        });

        //#cB is clicked  
        $("#cB").click(function(){
                if( viableSpace("#cB", cBValue) ){
                    evaluate("#cB", cBValue);
                    cBValue = setSpaceValue(cBValue);
                }
        });  

        //#aC is clicked
        $("#cC").click(function(){
                if( viableSpace("#cC", cCValue) ){
                    evaluate("#cC", cCValue);
                    cCValue = setSpaceValue(cCValue);
                }
        });

        //#cD is clicked  
        $("#cD").click(function(){
                if( viableSpace("#cD", cDValue) ){
                    evaluate("#cD", cDValue);
                    cDValue = setSpaceValue(cDValue);
                }
        });


        //#cE is clicked  
        $("#cE").click(function(){
                if( viableSpace("#cE", cEValue) ){
                    evaluate("#cE", cEValue);
                    cEValue = setSpaceValue(cEValue);
                }
        });


        //#cF is clicked  
        $("#cF").click(function(){
                if( viableSpace("#cF", cFValue) ){
                    evaluate("#cF", cFValue);
                    cFValue = setSpaceValue(cFValue);
                }
        });


        //#cG is clicked  
        $("#cG").click(function(){
                if( viableSpace("#cG", cGValue) ){
                    evaluate("#cG", cGValue);
                    cGValue = setSpaceValue(cGValue);
                }
        });



        //#dA is clicked  
        $("#dA").click(function(){
                if( viableSpace("#dA", dAValue) ){
                    evaluate("#dA", dAValue);
                    dAValue = setSpaceValue(dAValue);
                }
        });

        //#dB is clicked  
        $("#dB").click(function(){
                if( viableSpace("#dB", dBValue) ){
                    evaluate("#dB", dBValue);
                    dBValue = setSpaceValue(dBValue);
                }
        });  

        //#aC is clicked
        $("#dC").click(function(){
                if( viableSpace("#dC", dCValue) ){
                    evaluate("#dC", dCValue);
                    dCValue = setSpaceValue(dCValue);
                }
        });

        //#dD is clicked  
        $("#dD").click(function(){
                if( viableSpace("#dD", dDValue) ){
                    evaluate("#dD", dDValue);
                    dDValue = setSpaceValue(dDValue);
                }
        });


        //#dE is clicked  
        $("#dE").click(function(){
                if( viableSpace("#dE", dEValue) ){
                    evaluate("#dE", dEValue);
                    dEValue = setSpaceValue(dEValue);
                }
        });


        //#dF is clicked  
        $("#dF").click(function(){
                if( viableSpace("#dF", dFValue) ){
                    evaluate("#dF", dFValue);
                    dFValue = setSpaceValue(dFValue);
                }
        });


        //#dG is clicked  
        $("#dG").click(function(){
                if( viableSpace("#dG", dGValue) ){
                    evaluate("#dG", dGValue);
                    dGValue = setSpaceValue(dGValue);
                }
        });




        //#eA is clicked  
        $("#eA").click(function(){
                if( viableSpace("#eA", eAValue) ){
                    evaluate("#eA", eAValue);
                    eAValue = setSpaceValue(eAValue);
                }
        });

        //#eB is clicked  
        $("#eB").click(function(){
                if( viableSpace("#eB", eBValue) ){
                    evaluate("#eB", eBValue);
                    eBValue = setSpaceValue(eBValue);
                }
        });  

        //#aC is clicked
        $("#eC").click(function(){
                if( viableSpace("#eC", eCValue) ){
                    evaluate("#eC", eCValue);
                    eCValue = setSpaceValue(eCValue);
                }
        });

        //#eD is clicked  
        $("#eD").click(function(){
                if( viableSpace("#eD", eDValue) ){
                    evaluate("#eD", eDValue);
                    eDValue = setSpaceValue(eDValue);
                }
        });


        //#eE is clicked  
        $("#eE").click(function(){
                if( viableSpace("#eE", eEValue) ){
                    evaluate("#eE", eEValue);
                    eEValue = setSpaceValue(eEValue);
                }
        });


        //#eF is clicked  
        $("#eF").click(function(){
                if( viableSpace("#eF", eFValue) ){
                    evaluate("#eF", eFValue);
                    eFValue = setSpaceValue(eFValue);
                }
        });


        //#eG is clicked  
        $("#eG").click(function(){
                if( viableSpace("#eG", eGValue) ){
                    evaluate("#eG", eGValue);
                    eGValue = setSpaceValue(eGValue);
                }
        });



        //#fA is clicked  
        $("#fA").click(function(){
                if( viableSpace("#fA", fAValue) ){
                    evaluate("#fA", fAValue);
                    fAValue = setSpaceValue(fAValue);
                }
        });

        //#fB is clicked  
        $("#fB").click(function(){
                if( viableSpace("#fB", fBValue) ){
                    evaluate("#fB", fBValue);
                    fBValue = setSpaceValue(fBValue);
                }
        });  

        //#aC is clicked
        $("#fC").click(function(){
                if( viableSpace("#fC", fCValue) ){
                    evaluate("#fC", fCValue);
                    fCValue = setSpaceValue(fCValue);
                }
        });

        //#fD is clicked  
        $("#fD").click(function(){
                if( viableSpace("#fD", fDValue) ){
                    evaluate("#fD", fDValue);
                    fDValue = setSpaceValue(fDValue);
                }
        });


        //#fE is clicked  
        $("#fE").click(function(){
                if( viableSpace("#fE", fEValue) ){
                    evaluate("#fE", fEValue);
                    fEValue = setSpaceValue(fEValue);
                }
        });


        //#fF is clicked  
        $("#fF").click(function(){
                if( viableSpace("#fF", fFValue) ){
                    evaluate("#fF", fFValue);
                    fFValue = setSpaceValue(fFValue);
                }
        });


        //#fG is clicked  
        $("#fG").click(function(){
                if( viableSpace("#fG", fGValue) ){
                    evaluate("#fG", fGValue);
                    fGValue = setSpaceValue(fGValue);
                }
        });




});  //  The end of Document.ready function
