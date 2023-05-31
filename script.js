const quoteGenerator = document.querySelectorAll('.quote-generator')

const fetchAPI = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => {
        const adviceId = document.getElementById('advice-id')
        const advice = document.getElementById('advice')
        
        advice.innerText=data.slip.advice
        adviceId.innerText='Advice #'+ data.slip.id
    })
    .catch(err => console.error(err))
}


quoteGenerator.forEach(button=>{
    button.addEventListener('click',()=>{
        fetchAPI()
    })
})


fetchAPI()
