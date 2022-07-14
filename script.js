let containerOfBoxes = document.querySelector('.container')
let boxElements = document.querySelectorAll('.box')

containerOfBoxes.addEventListener('click', function (event) {
  // console.log(event)
  if (!event.target.classList.contains('clicked')) {
    let clone = event.target.cloneNode()
    document.querySelector('.container').appendChild(clone)
    event.target.classList.add('clicked')
  }
})

//  else if (event.target.classList.contains('container')) {
//   event.preventDefault()
// }
