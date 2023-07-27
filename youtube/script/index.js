var search_icon = document.getElementById('search-icon')
var search_input = document.getElementById('search')
var side_bar = document.querySelector('.side-bar')
var button = document.getElementById('button')
var img_search_img = document.querySelector('.img-search-img')
var clear_icon = document.getElementById('clear')

// Search Bar 

search_input.addEventListener('focus', () => {
    search_icon.style.display = 'block'
    img_search_img.style.border = '1px solid #1c62b9'
    img_search_img.style.box_shadow = 'inset 0 1px 2px rgba(0,0,0,0.3)'
})

search_input.addEventListener('blur', () => {
    search_icon.style.display = 'none'
    img_search_img.style.border = '1px solid rgb(63, 63, 63)'
})




//

// Side bar

button.addEventListener('click', () => {
    if (side_bar.style.display === 'none') {
        side_bar.style.display = 'flex'
    } else {
        side_bar.style.display = 'none'
    }
})

//     border: 1px solid #1c62b9;
//     box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
//     margin-left: 0px;
//     padding: 2px 4px 2px 48px;