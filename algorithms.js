export const bubbleSort = async (values) => {
  values.sortArrayBtn.disabled = true
  values.generateArrayClicked = false
  let bars = values.sortingWindow.children
  let noSwaps

  for (let i = bars.length - 1; i > 0; i--) {
    noSwaps = true

    for (let j = 0; j < i; j++) {
      if (values.generateArrayClicked == true) {
        console.log('click detected!')
        values.sortArrayBtn.disabled = false
        return
      }

      values.changeColor(bars, j, 'orange')
      values.changeColor(bars, j + 1, 'purple')
      await values.pause(values)

      let val1 = parseInt(bars[j].style.height, 10)
      let val2 = parseInt(bars[j + 1].style.height, 10)

      if (val1 > val2) {
        values.sortingWindow.insertBefore(bars[j + 1], bars[j])
        await values.pause(values)
        noSwaps = false
      }

      values.changeColor(bars, j, 'ivory')
      values.changeColor(bars, j + 1, 'ivory')
      if (j === i - 1) values.changeColor(bars, i, 'gray')
    }

    if (noSwaps) {
      for (let k = i - 1; k >= 0; k--) {
        values.changeColor(bars, k, 'gray')
        await values.pause(values)
      }
      break
    }
  }
  values.sortArrayBtn.disabled = false
}

// --------------------------------------------------------------------------------------- //
