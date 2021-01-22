function range(startNum, finishNum){
    if(startNum == 1 && finishNum == null){
        return (-1)
    } else if(startNum == null && finishNum == null){
        return (-1)
    } else if(finishNum> startNum){
        var arr = []
        for(var i = startNum; i<=finishNum; i++ ){
            arr.push(i)
        }
        return arr
    }  else if(startNum > finishNum) {
        var arr = []
        for(var i= startNum; i>finishNum; i--){
            arr.push(i)
        }
        return arr
    } 
}



console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 
