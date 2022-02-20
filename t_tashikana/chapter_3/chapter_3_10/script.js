'use strict';

let todo = ['デザインカンプ作成', 'データ整理', '勉強申込み', '牛乳買う'];
todo.push('歯医者に行く');

// console.log(todo[4]);

// for(let item of todo){
//   console.log(item);
// }

for(let item of todo){
  const li = `<li>${item}</li>`;
  // console.log(li);
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}