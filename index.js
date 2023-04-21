const joke = document.querySelector('.joke');
const showJokeBTN = document.querySelector('#show-joke')

function fetchChuckNorris() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            joke.textContent = data.value;
        })
        .catch(error => console.error(error));
}


showJokeBTN.addEventListener('click', () => {
    showJokeBTN.textContent = 'Show Another One!';
    fetchChuckNorris();
})