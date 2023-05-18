function solution(num, n) {
    var answer = 0;
    var sum = num % n;
    
    if (sum == 0) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}