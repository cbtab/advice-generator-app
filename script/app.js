// Fetch API //

async function getAPI(){
    try {
        const adviceFetch = await fetch("https://api.adviceslip.com/advice");
        const adviceJSON = await adviceFetch.json();
        return adviceJSON;
    } catch (error){
        console.log(error);
    }
}

//Random Advice

async function randomAdvice(){
    try {
        const getAdvice = await getAPI();
        const getAdviceId = getAdvice.slip.id;
        const getAdviceText = getAdvice.slip.advice;
        const adviceID = document.getElementsByClassName("advice-number");
        const adviceTEXT = document.getElementsByClassName("advice-text");
        
        adviceID[0].innerHTML = `Advice #${getAdviceId}`;
        adviceTEXT[0].innerHTML = `"${getAdviceText}"`;   
    } catch (error){
        console.log(error)
    }
}

randomAdvice()

//Dice

const button = document.getElementById("dice");
button.addEventListener('click', () => {
  location.reload();
});