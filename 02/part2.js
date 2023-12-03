const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  const games = data.split("\r\n").map(i => {
    const game = i.match(/Game (\d*)/)[1]
    const color = [...i.matchAll(/(?<color>\d+ \w+)/g)].map(i => i[0])

    return {
      game,
      color
    }
  })

  const filtredGame = games.map(i => {
    let ok = true
    const max = new Map()
    for(let color of i.color) {
      const [nb, name] = color.split(' ')
      if(!max.get(name)) {
        max.set(name, Number(nb))
      } else if(Number(nb) > max.get(name)) {
        max.set(name, Number(nb))
      }
    }
    const power = [...max.values()].reduce((a, b) => a * b)
    return {...i, power}
  })

  console.log(filtredGame.map(i => i.power).reduce((a, b) => a + b, 0))

})