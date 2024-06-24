/*
https://codingdojang.com/scode/393
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
*/

function solution(num){
  return Array(num).fill(0).map((v, i) => i).toString().split("").filter(v => v === "8").length;
}

function solution2(num){
  let str = "";
  for(let i = 1; i<=num; i++){
      str += i;
  }
  let len = str.length;
  let cnt = 0;
  for(let i = 0; i<len; i++){
      str[i] === "8" ? cnt++: 0;
  }
  return cnt;
}
