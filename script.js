const increase=document.querySelector('#increaments').addEventListener('click',findIncrement);
// const answer=document.querySelector('h1');
const decrease=document.querySelector('#decreaments').addEventListener('click',findDcrement);
let count=0
// answer.innerHTML=count
function findIncrement(){
    const answer=document.querySelector('h1');
  if(count>=0){
   count++
  }
  answer.innerHTML=count
}

function findDcrement(){
    const answer=document.querySelector('h1');
    if(count>0){
      count--
    }
    answer.innerHTML=count
  }
