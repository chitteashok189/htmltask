function f1(str){
    var nstr="";
    for(var i=str.length-1;i>=0;i--){
        nstr+=str[i];
    }
    if(str==nstr){
        console.log("The String is palindrome");
    }
    else{
        console.log("The String is not a palindrome");
    }
}
f1("kik");