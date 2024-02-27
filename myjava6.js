

let div=document.querySelector('.main');

div.addEventListener('click',function(x){
  let target=x.target;
  target.classList.toggle('acco2');
  let div1=target.nextElementSibling; 
  if(div1.style.maxHeight){
        div1.style.maxHeight=null;
       
      }else{
        
        div1.style.maxHeight = `${div1.scrollHeight}px`;
       
      }
})
