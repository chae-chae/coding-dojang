/*
https://codingdojang.com/scode/416

아마존 면접문제

다음과 같은 형태의 배열을

[a1,a2,a3...,an,b1,b2...bn]

다음과 같은 형태로 바꾸시오

[a1,b1,a2,b2.....an,bn]
*/
let list = ['a1','a2','a3','a4','a5','b1','b2','b3','b4','b5'];

function solution(list){
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  let l1 = list.slice(0, list.length/2);
  let l2 = list.slice(list.length/2);
  return zip(l1, l2).flat(2);
}
