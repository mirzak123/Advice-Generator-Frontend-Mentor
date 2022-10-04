const advice_url = "https://api.adviceslip.com/advice"
const advice_text = document.querySelector('.advice-text');
const advice_num = document.querySelector('.advice-num');
const advice_btn = document.querySelector('.advice__btn-wrapper')

async function getRandomAdvice (url) {
    const response = await fetch(url);
    const advice_obj = await response.json();
    const id = advice_obj.slip.id;
    const advice = advice_obj.slip.advice;
    setAdvice(id, advice);
}

function setAdvice (id, advice) {
    advice_text.textContent = advice;
    advice_num.textContent = `#${id}`;
}

getRandomAdvice(advice_url);

advice_btn.addEventListener('click', () => { getRandomAdvice(advice_url) });