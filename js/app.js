//this is a function that is being used to make the burger nav function
const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
    })
    nav.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
    })
}
navSlide();




//The line below is selecting the sections with the class name of 'your-active-class'
var menu = document.querySelectorAll('.your-active-class')

//I am using a for loop here to loop through the selected sections that were placed in a variable called menu
for (var i = 0; i < menu.length; i++) {
    //this line is creating the li element
    let newLi = document.createElement('li')
    //the items in the menu variable are objects themselves
    //therefore I had to select them based off the id key
    newLi.setAttribute('id', `#${menu[i].id}`)
    //this line creates the anchor element
    let newA = document.createElement('a')
    newA.href = `#${menu[i].id}`
    newA.textContent = menu[i].id
    //here I am now appending my new Li with their anchors in my nav
    document.querySelector('.nav-links').appendChild(newLi).appendChild(newA)
}



//EVENT LISTENER SCROLL

var sections = document.querySelectorAll('.your-active-class')

//Here I created a function that will be used to track the scrolls and the section it scrolls through
const changeSectionState = () => {
  let index = sections.length;
  console.log('lengths', index)

  while(--index && window.scrollY + 50 < sections[index].offsetTop){
  }
  
  sections.forEach((section) => section.classList.remove('active'));
  sections[index].classList.add('active');
}

changeSectionState();
window.addEventListener('scroll', changeSectionState);


