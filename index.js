// INITIAL JS GOALS:
// query API
// fetch data
// get displayable information
// put displayable info on the page
// LATER JS GOALS
// populate card on screen based on user input
// allow change of filter
// random button
// toggle NSFW
// GLOBAL VARIABLES
const testUrl = 'https://www.reddit.com/r/all/top.json?limit=5&t=day'
const baseUrl = 'https://www.reddit.com/r/'
const topFilter = '/top.json?limit=5&t=day' // 10 year by def
const div = document.getElementById('random-images')

// NODES
// let input = document.getElementById('') // input field
// let subredditStr = input.value
// realization: get a post, (subreddit, title) and an image (thumbnail or default)
// fetch req

let thisUrl = ''
const fetchReddit = (sub) => {
    return fetch(sub) //url
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.warn(error));
}
fetchReddit(testUrl).then((obj) => {
    let me = obj.data.children[0].data.preview.images[0].resolutions[1].url
    getImage(me)
})


thisUrl = fetchReddit(testUrl)

const getImage = (url) => {
    const img = document.createElement('img')
    img.src = url
    div.append(img)
}
// GOALS:
// create a function that will
// add an img element to the div id="random-images" with the source w/e the fuck is on line 29

// the function should take an argument fetchReddit(testUrl)


getImage