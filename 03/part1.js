const fs = require('fs')


fs.readFile('./input.txt', 'utf8' , (err, data) => {

  data = data.split("\r\n").map(i => i.split(''))

  const numbers = []
  for (let x = 0; x < data.length; x++) {
    let cur = ''
    let hasAdjecent = false
    for (let y = 0; y < data[x].length; y++) {
      if(!isNaN(+data[x][y])) {
        cur += data[x][y]
        // bottom
        if(data[x + 1] && data[x + 1][y] != '.' && isNaN(+data[x + 1][y])) {
          hasAdjecent = true
        }
        // top
        if(data[x - 1] && data[x - 1][y] != '.' && isNaN(+data[x - 1][y])) {
          hasAdjecent = true
        }
        // right
        if(data[x][y + 1] && data[x][y + 1] != '.' && isNaN(+data[x][y + 1])) {
          hasAdjecent = true
        }
        // left
        if(data[x][y - 1] && data[x][y - 1] != '.' && isNaN(+data[x][y - 1])) {
          hasAdjecent = true
        }
        // bottom left
        if(data[x + 1] && data[x + 1][y - 1] && data[x + 1][y - 1] != '.' && isNaN(+data[x + 1][y - 1])) {
          hasAdjecent = true
        }
        // bottom right
        if(data[x + 1] && data[x + 1][y + 1] && data[x + 1][y + 1] != '.' && isNaN(+data[x + 1][y + 1])) {
          hasAdjecent = true
        }
        // top left
        if(data[x - 1] && data[x - 1][y - 1] && data[x - 1][y - 1] != '.' && isNaN(+data[x - 1][y - 1])) {
          hasAdjecent = true
        }
        // top right
        if(data[x - 1] && data[x - 1][y + 1] && data[x - 1][y + 1] != '.' && isNaN(+data[x - 1][y + 1])) {
          hasAdjecent = true
        }

        // end of line
        if(!data[x][y + 1]) {
          if(cur && hasAdjecent) {
            numbers.push(+cur)
          }
        }
      } else {
        if(cur && hasAdjecent) {
          numbers.push(+cur)
        }
        cur = ''
        hasAdjecent = false
      }
    }
  }

  console.log(numbers.reduce((a, b) => a + b, 0))
})