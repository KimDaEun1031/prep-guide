function solution(seoul) {
    var x = 0;
    for (var i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            x = i;
            break;
        }
    }  
    
    var answer = "김서방은 " + x + "에 있다";
    return answer;
}