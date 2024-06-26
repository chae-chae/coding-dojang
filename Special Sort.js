/*
https://codingdojang.com/scode/414
출처 : http://www.careercup.com/question?id=5201559730257920

구글 전화면접 문제

n개의 정수를 가진 배열이 있다. 이 배열은 양의정수와 음의 정수를 모두 가지고 있다. 이제 당신은 이 배열을 좀 특별한 방법으로 정렬해야 한다.

정렬이 되고 난 후, 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

예. -1 1 3 -2 2 ans: -1 -2 1 3 2.
*/

function solution(nums){
  return [...nums.filter(v => v < 0), ...nums.filter(v => v >=0)];
}

function solution2(nums){
    let answer = "";
    let m = [];
    let p = [];
    nums.forEach(v => v < 0 ? m.push(v) : p.push(v));
    answer = m.join(" ") + " " + p.join(" ");
    return answer;
}
