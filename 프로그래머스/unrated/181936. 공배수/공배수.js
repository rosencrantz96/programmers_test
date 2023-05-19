function solution(number, n, m) {
    var answer = 0;
    var i = number % n;
    var j = number % m;
    
    if (i == 0 && j == 0) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}