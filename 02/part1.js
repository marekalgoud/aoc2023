const fs = require('fs')

const max = new Map()
max.set('red', 12)
max.set('green', 13)
max.set('blue', 14)


fs.readFile('./input.txt', 'utf8' , (err, data) => {
  const games = data.split("\r\n").map(i => {
    const game = i.match(/Game (\d*)/)[1]
    const color = [...i.matchAll(/(?<color>\d+ \w+)/g)].map(i => i[0])

    return {
      game,
      color
    }
  })

  const filtredGame = games.filter(i => {
    let ok = true
    for(let color of i.color) {
      const [nb, name] = color.split(' ')
      if(Number(nb) > max.get(name)) {
        ok = false
      }
    }
    return ok
  })

  console.log(filtredGame.map(i => +i.game).reduce((a, b) => a + b, 0))

})