var search_icon = document.getElementById('search-icon')
var search_bar = document.getElementById('search')
var side_bar = document.getElementsByClassName('side-bar')
var button = document.getElementById('button')

// Search Bar 

search_bar.addEventListener('focus', () => {
    search_icon.style.display = 'block'
})

search_bar.addEventListener('blur', () => {
    search_icon.style.display = 'none'
})

//

// Side bar

button.addEventListener('click', () => {
    if (side_bar.style.display == 'block') {
        side_bar.style.display = 'none'
    } else {
        side_bar.style.display = 'block' 
    }
})