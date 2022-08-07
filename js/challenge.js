// //Creating variables to use in the counter functions
// const counterDisplay = document.getElementById('counter');
// const counterMinus = document.getElementById('minus');
// const counterPlus = document.getElementById('plus');
// const clickLike = document.getElementById('heart');
// const makeList = document.querySelector('.likes');
// const likeButton = document.getElementById('heart');

// let count = parseInt(counterDisplay.textContent);

// //Creating function that will start at 0, and start counting up by 1 upon loading/refreshing the page

// let intervalID = setInterval(myCallback, 1000);

// function myCallback() {
//     //console.log(counterDisplayBegin.textContent);
//     counterDisplay.innerHTML = count++;
//     //console.log(count);  
// }

// //This is the code for the function for the increment up button
//     counterPlus.addEventListener("click",() => {
//         counterDisplay.innerHTML = count++;
//         console.log(count);
//     })

// //This is the code for the function for the increment down button
// counterMinus.addEventListener("click",() => {
//     counterDisplay.innerHTML = count--;
//     console.log(count);
// })    

// let currentCount = 0
// //This is the code to click likes and record the number of likes.
// // const incrementCounter = () => {
// //     const likeElement = document.createElement("li");
// //     //const oldCountValue = count;
// //     //console.log(oldCountValue);
// //     makeList.appendChild(likeElement);
// //     //currentCount++;

// //     likeElement.textContent = `${count} has been clicked ${currentCount} times.`
// //     //if (numberOfLikes.includes(count))
// // };
// // const numberOfClicks = [];
// // const numberOfLikes = [];
// const arrayOfObjects = [];
// const arrayOfNumbers = [];



// const incrementCounter = () => {
   
//     for (value of arrayOfObjects) {
//         arrayOfNumbers.push(value.number);
//     };

//     if (arrayOfNumbers.includes(count)) {
//         const valueMatch = arrayOfObjects.find((object) => object.number === count);
//         valueMatch.likes++;
//         const likedElement = document.getElementById(`${count}`);
//         likedElement.textContent = `${count} has been clicked ${valueMatch.likes} times.`
//     } else {arrayOfObjects.push({number: count, likes: 1});
//     const likeElement = document.createElement('li'); 
//      likeElement.setAttribute('id', count);
//     likeElement.textContent = `${count} has been clicked 1 times.`
//         makeList.appendChild(likeElement);
//         console.log(likeElement);
// }
// console.log(arrayOfNumbers);
// console.log(arrayOfObjects);
// }

// clickLike.addEventListener("click",incrementCounter);











//This should cancel the counter.  How do I pause the functionality on all of the buttons?
function stopTimer() {
    counterDisplayBegin.addEventListener('click',() => {
        clearInterval(intervalID);
    })
    //Do I need to add a setTimeout or clearTimeout here?
}

"use strict";function _toConsumableArray(a) {
    if(Array.isArray(a)){
      for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];
      return c
    }
    return Array.from(a)}
  var playing=!0,
    timer=function(){
      return setInterval(function(){
        var a=document.getElementById("counter"),b=parseInt(a.innerText);
        a.innerText=b+1           },1e3)
    },
    interval=timer(),
    minus=document.getElementById("minus"),
    plus=document.getElementById("plus"),
    heart=document.getElementById("heart"),
    pause=document.getElementById("pause"),
    commentForm=document.getElementsByTagName("form")[0];
  minus.addEventListener("click",function(){
    var a=document.getElementById("counter"),b=parseInt(a.innerText);
    a.innerText=b-1}),plus.addEventListener("click",function(){
    var a=document.getElementById("counter"),
        b=parseInt(a.innerText);
    a.innerText=b+1
  }),
    heart.addEventListener("click",function(){
    var a=document.getElementById("counter"),b=parseInt(a.innerText),c=document.querySelector(".likes"),d=void 0;
      if([].concat(_toConsumableArray(c.children)).map(function(a){
        return parseInt(a.dataset.num)
      }).includes(b)){
        d=document.querySelector('[data-num="'+b+'"]');var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)
    }),
    pause.addEventListener("click",function(){
      playing?(playing=!1,clearInterval(interval),this.innerText="resume"):    
      (playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})
    }),
    commentForm.addEventListener("submit",function(a){a.preventDefault();
     var b=this.children[0],c=b.value;b.value="";
    var d=document.querySelector(".comments"),e=document.createElement("p");
        e.innerText=c,d.appendChild(e)});