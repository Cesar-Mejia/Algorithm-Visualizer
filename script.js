import {
  navBtnsSetup,
  generateArrayBtnSetup,
  speedBtnsSetup,
  generateBars,
  sortArrayBtnSetup,
  changeColor,
  pause
} from './functions.js'

import { bubbleSort } from './algorithms.js'

let globalValues = {
  currentSelection: 'bubble-sort-btn',
  speedMode: 'fast',
  sortingWindow: document.getElementById('sorting-window'),
  sortArrayBtn: document.getElementById('sort-array-btn'),
  generateArrayBtn: document.getElementById('generate-array-btn'),
  generateArrayClicked: false,
  navBtnsSetup: navBtnsSetup,
  generateBars: generateBars,
  generateArrayBtnSetup: generateArrayBtnSetup,
  sortArrayBtnSetup: sortArrayBtnSetup,
  speedBtnsSetup: speedBtnsSetup,
  bubbleSort: bubbleSort,
  changeColor: changeColor,
  pause: pause
}

const init = (values) => {
  values.navBtnsSetup(values)
  values.generateBars(values)
  values.generateArrayBtnSetup(values)
  values.sortArrayBtnSetup(values)
  values.speedBtnsSetup(values)
}

document.body.onload = init(globalValues)

// ----------------------------------------------------------------------- //
