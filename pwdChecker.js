/*

function usernameCheck(user) {
  if(user.includes("$")){
    return {
      valid: false,
      reason: "You can't include a dollar sign!!"
    }
  }
}

var validity = usernameCheck("$CashMoney$");
if(validity.valid === false){
  console.log(validity.reason);
}

function one(){};
function two() {};
function three(){};

function main() {
  var checkLength = usernameLength("asdasdasdsa");
  var checkSymbols =


}

*/


//username length check//

//var uLength = usernameLength("ee");
// uLength = {
//      valid: false,
//      reason: "asdasdsa"

//}

//uLength.valid === false
//uLength.stupidShit -> 420
//uLength.reason -> "You do not" etc

function usernameLength(user) {
    if(user.length<6){
      return{
        valid:false,
        reason: "You do not have enough characters.",
        stupidShit: 420
      }
    } else{
      return {
        valid: true
      }
    }
}

//password length checker

function passwordLength(pwd) {
    if(pwd.length<6){
      return{
        valid:false,
        reason: "You do not have enough characters."
      }
    } else{
      return {
        valid: true
      }
    }
}

//same username and password checker


function sameChecker(user, pwd) {
    if(user===pwd){
      return{
        valid:false,
        reason: "Your username and password are the same."
      }
    } else{
      return {
        valid: true
      }
    }
}

//username symbol checker

function usernameSymbol(user) {
    if(user.includes("!")||user.includes("$")||user.includes("#")){
      return{
        valid:false,
        reason: "Your username contains a banned symbol."
      }
    } else{
      return {
        valid: true
      }
    }
}

//password symbol checker
function passwordSymbol(pwd) {
    if(!pwd.includes("!")&&!pwd.includes("$")&&!pwd.includes("#")){
      return{
        valid:false,
        reason: "Your password needs a special symbol: !, $, or #."
      }
    } else{
      return {
        valid: true
      }
    }
}

//password "password" checker
function passwordSame(pwd) {
    if(pwd==="password"){
      return{
        valid:false,
        reason: 'Your password cannot be "password"!'
      }
    } else{
      return {
        valid: true
      }
    }
}

function main() {
  //We want to get the username and password from the user
  //Then run it through each of our functions
  //If there are any invalid things, notify the user
  //If not, only notify them at the end that everything went ok

  var u = prompt("please enter username.")
  var p = prompt("please enter password.")

  var uLength = usernameLength(u);
  var uSymbol = usernameSymbol(u);
  var pLength = passwordLength(p);
  var pSymbol = passwordSymbol(p);
  var pSame = passwordSame(p);
  var sChecker = sameChecker(u, p);

  var allGood = true;

  if(uLength.valid===false){
    console.log(uLength.reason)
    allGood=false;
  }
  if(uSymbol.valid===false){
    console.log(uSymbol.reason)
    allGood=false;
  }
  if(pLength.valid===false){
    console.log(pLength.reason)
    allGood=false;
  }
  if(pSymbol.valid===false){
    console.log(pSymbol.reason)
    allGood=false;
  }
  if(pSame.valid===false){
    console.log(pSame.reason)
    allGood=false;
  }
  if(sChecker.valid===false){
    console.log(sChecker.reason)
    allGood=false;
  }
  if(allGood===true){
    alert("Your username and password look great!")
  }
}

main();
