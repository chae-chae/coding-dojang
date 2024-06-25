/*
https://codingdojang.com/scode/408
1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.
*/

function solution(S){
  let ss = s.slice(1);
  return S.map((v, i) => [v, ss[i]]).sort((a, b) => (a[1]-a[0]) - (b[1]-b[0]))[0];
}

function solution2(S){
  let pair = [];
  for(let i = 0; i<S.length; i++){
      for(let j = i+1; j<S.length; j++){
          let dist = Math.abs(S[j] - S[i]);
          pair.push([[S[i],S[j]], dist]);
      }
  }
  pair.sort((a, b) => a[1] - b[1]);
  let answer = pair[0][0];
  return answer;
}
