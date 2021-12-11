function solution(n) {
    var str1 = '수';
    var str2 = '박';
    var answer = '';
     
    for (var i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            answer += str2;
        } else  {
            answer += str1;
        }       
    }  
    
    return answer;
}