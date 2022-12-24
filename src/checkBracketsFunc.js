// Дана строка, содержащая скобки трёх видов
// (круглые, квадратные и фигурные) и любые другие символы.
// Посчитайте сколько скобок расставлено корректно а сколько нет.
// Например, в строке ([]{})[] скобки расставлены корректно, а в
// строке ([]] — нет. В первом случае правильно расставлено 8 скобок.
// Во втором случае указаны 2 скобки правильно, и 2 не правильно.

// const func = (str) => {
//   let correct = 0;
//   let incorrect = 0;
//   const br = str.split("");
//   console.log(br);
//   br.map((e) => {
//     if ((e == "(" && e == ")") || (e == "[" && e == "]")) {
//       correct++;
//     }
//     if ((e == "(" && e !== ")") || (e == "[" && e !== "]")) {
//       incorrect++;
//     }
//   });

//   return `правильно расставлено ${correct} скобок, не правильно расставлено  ${incorrect} скобок`;
// };
// // let res = func("([]{})[]");
// let res2 = func("([]");

// console.log(res2);

const func = (str) => {
 
  const stack = []
  
  for (let i = 0; i < str.length; i++) {
    const br = str[i]
    if(br==='(' || br==='{' || br==='[' ){
      stack.push(br)
    }else{
      const last = stack.pop()

      if(!last){
        return false
      }
    }
  }
  if(stack.length)return false
  return true

};
let res = func("({}[])[]");
console.log(res);
