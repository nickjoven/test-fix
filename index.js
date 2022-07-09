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
const header = document.getElementById('test-div')
// NODES
// let input = document.getElementById('') // input field
// let subredditStr = input.value
// realization: get a post, (subreddit, title) and an image (thumbnail or default)
// fetch req
const fetchReddit = (sub) => {
    return fetch(sub) //url
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.warn(error));
}
fetchReddit(testUrl).then(obj => console.log(obj.data.children[0].data.preview.images[0].resolutions[1].url))


fetchReddit(testUrl)

    
