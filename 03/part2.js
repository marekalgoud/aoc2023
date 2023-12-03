const fs = require('fs')


fs.readFile('./input.txt', 'utf8' , (err, data) => {

  data = data.split("\r\n").map(i => i.split(''))

  const numbers = []
  for (let x = 0; x < data.length; x++) {

    for (let y = 0; y < data[x].length; y++) {
      if(data[x][y] == '*') {
        
      }
    }
  }

  console.log(numbers.reduce((a, b) => a + b, 0))
})