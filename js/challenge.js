//Creating variables to use in the counter functions
const counterDisplay = document.getElementById('counter');
const counterMinus = document.getElementById('minus');
const counterPlus = document.getElementById('plus');
const clickLike = document.getElementById('heart');
const makeList = document.querySelector('.likes');
const likeButton = document.getElementById('heart');

let count = parseInt(counterDisplay.textContent);

//Creating function that will start at 0, and start counting up by 1 upon loading/refreshing the page

let intervalID = setInterval(myCallback, 1000);

function myCallback() {
    //console.log(counterDisplayBegin.textContent);
    counterDisplay.innerHTML = count++;
    //console.log(count);  
}

//This is the code for the function for the increment up button
    counterPlus.addEventListener("click",() => {
        counterDisplay.innerHTML = count++;
        console.log(count);
    })

//This is the code for the function for the increment down button
counterMinus.addEventListener("click",() => {
    counterDisplay.innerHTML = count--;
    console.log(count);
})    

let currentCount = 0
//This is the code to click likes and record the number of likes.
const incrementCounter = () => {
    const likeElement = document.createElement("li");
    //const oldCountValue = count;
    //console.log(oldCountValue);
    makeList.appendChild(likeElement);
    currentCount++;
    likeElement.textContent = `${count} has been clicked ${currentCount} times.`
    
};
clickLike.addEventListener("click",incrementCounter) 








//This should cancel the counter.  How do I pause the functionality on all of the buttons?
function stopTimer() {
    counterDisplayBegin.addEventListener('click',() => {
        clearInterval(intervalID);
    })
    //Do I need to add a setTimeout or clearTimeout here?
}

