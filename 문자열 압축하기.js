/*
https://codingdojang.com/scode/465
문자열을 입력받아서, 같은 문자가 연속적으로 반복되는 경우에 그 반복 횟수를 표시하여 문자열을 압축하기.

입력 예시: aaabbcccccca

출력 예시: a3b2c6a1
*/

function solution(s){
  let res = s[0];
  let cnt = 0;
  
  for(let str of s){
      if(str == res.slice(-1)){
          cnt++;
      } else {
          res += cnt + str;
          cnt = 1;
      }
  }
  res += cnt;
  return res;
}
