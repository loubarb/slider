function Slider(slider) {
  let current;
  let prev;
  let next;
  const slides = slider.querySelector('.slides')
  const previousButton = slider.querySelector('.goToPrev')
  const nextButton = slider.querySelector('.goToNext')
  

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild
    prev = current.previousElementSibling || slides.lastElementChild
    next = current.nextElementSibling || slides.firstElementChild
  }

  function applyClasses() {
    current.classList.add('current')
    prev.classList.add('prev')
    next.classList.add('next')
  }

  function move(direction) {
    const classesToRemove = ['prev', 'current', 'next']
    prev.classList.remove(...classesToRemove)
    current.classList.remove(...classesToRemove)
    next.classList.remove(...classesToRemove)

    if (direction === 'back') {
      [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current]
    } else {
      [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild]
    }
    applyClasses()
  }


  startSlider()
  applyClasses()

  previousButton.addEventListener('click', () => move('back'))
  nextButton.addEventListener('click', () => move('forward'))
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      move('forward')
    } else if (e.key === 'ArrowLeft') {
      move('back')
    }
  })

}

const mySlider = Slider(document.querySelector('.slider'))
const dogSlider = Slider(document.querySelector('.dog-slider'))