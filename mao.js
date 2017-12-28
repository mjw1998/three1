var newstr = '410323199807154544';
function gitFen(){
    var one = newstr.slice(0,10)
    var two = newstr.slice(10,14)
    var three = newstr.slice(14,18)
    var str = ''
    var str1 = ''
    for(var i=0;i<two.length;i++){
        str += '<b>'+two[i]+'</b>'
    }
    for(var i=0;i<three.length;i++){
        str1 += '*'
    }
    document.write(one + str + str1)
}
gitFen()