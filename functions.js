export const navBtnsSetup = (values) => {
  let currentSelectedBtn = document.getElementById(values.currentSelection)
  let selectedBtnColor = 'rgb(150, 185, 208)'
  let originalBtnColor = '#D0E5FA'
  currentSelectedBtn.style.backgroundColor = selectedBtnColor

  let navBtns = document.getElementsByClassName('nav-btn')
  navBtns[0].disabled = true

  let changeColors = (e) => {
    for (let i = 0; i < navBtns.length; i++) {
      if (navBtns[i].style.backgroundColor === selectedBtnColor) {
        navBtns[i].style.backgroundColor = originalBtnColor
      }
      e.target.style.backgroundColor = selectedBtnColor

      navBtns[i].disabled = false
    }
    e.target.disabled = true
    values.currentSelection = e.target.id // ------ Sets new globalValues.currentSelection
  }

  for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener('click', (e) => changeColors(e)) // Sets nav button event listeners
  }
}

// -------------------------------------------------------------------------------------------------- //

export const generateArrayBtnSetup = (values) => {
  const deleteBars = ({ sortingWindow }) => {
    const removeChildren = (parent) => {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild)
      }
    }

    removeChildren(sortingWindow)
  }

  const generateArrayClickHandler = (values) => {
    values.generateArrayClicked = true
    deleteBars(values)
    values.generateBars(values)
  }

  const generateArrayBtn = document.getElementById('generate-array-btn')
  generateArrayBtn.addEventListener('click', () => generateArrayClickHandler(values))
}

// -------------------------------------------------------------------------------------------------- //

export const sortArrayBtnSetup = (values) => {
  const activateSortingAlgo = (values) => {
    switch (values.currentSelection) {
      case 'bubble-sort-btn':
        values.bubbleSort(values)
        break
      case 'selection-sort-btn':
        console.log('Selection sort was activated!')
        break
      case 'insertion-sort-btn':
        console.log('Insertion sort was activated!')
        break
      case 'merge-sort-btn':
        console.log('Merge sort was activated!')
        break
      case 'quick-sort-btn':
        console.log('Quick sort was activated!')
        break
      case 'radix-sort-btn':
        console.log('Radix sort was activated!')
        break
    }
  }

  values.sortArrayBtn.addEventListener('click', () => activateSortingAlgo(values))
}

// -------------------------------------------------------------------------------------------------- //

export const generateBars = ({ sortingWindow }) => {
  const generateRandomArray = (size) => {
    let array = []
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 100))
    }
    return array
  }

  let randomArray = generateRandomArray(68)

  randomArray.forEach((number) => {
    let bar = document.createElement('div')
    sortingWindow.appendChild(bar)
    bar.setAttribute('class', 'bar')
    bar.style.height = `${number * 4}px`
    if (bar.style.height === '0px') {
      bar.style.boxShadow = 'none'
    }
  })
}

// -------------------------------------------------------------------------------------------------- //

export const changeColor = (elements, indx, color) => {
  if (color === 'gray') {
    elements[indx].style.backgroundColor = '#C8C8C8'
  }
  if (color === 'orange') {
    elements[indx].style.backgroundColor = '#F28C28'
  }
  if (color === 'ivory') {
    elements[indx].style.backgroundColor = 'ivory'
  }
  if (color === 'purple') {
    elements[indx].style.backgroundColor = '#8565c4'
  }
}

// -------------------------------------------------------------------------------------------------- //

export const pause = (values) => {
  let delay
  if (values.speedMode === 'fast') delay = '0'
  if (values.speedMode === 'medium') delay = '225'
  if (values.speedMode === 'slow') delay = '600'

  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay)
  })
}

// -------------------------------------------------------------------------------------------------- //

export const speedBtnsSetup = (values) => {
  let speedBtns = document.getElementsByClassName('speed-btn')

  for (let i = 0; i < speedBtns.length; i++) {
    speedBtns[i].addEventListener('click', (e) => {
      values.speedMode = e.target.id
    })
  }
}
