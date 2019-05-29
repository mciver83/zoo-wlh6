let id = 1;
let animals = [
  {
    id: id++,
    species: 'gorilla',
    quantity: 100,
    imageUrl: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/2c/d4/b7/shutterstock-550708162.jpg'
  },
  {
    id: id++,
    species: 't-rex',
    quantity: 10,
    imageUrl: 'https://media.gettyimages.com/photos/tyrannosaurus-rex-montage-picture-id544280873?s=612x612'
  }
]

module.exports = {
  read: (req, res) => res.send(animals),
  create: (req, res) => {
    let newAnimal = req.body
    newAnimal.id = id++
    animals.push(newAnimal)

    res.status(200).send(animals)
  },
  update: (req, res) => {
    let { id } = req.params
    let updatedAnimal = req.body
    updatedAnimal.id = id

    let index = animals.findIndex(animal => +animal.id === +id)

    animals.splice(index, 1, updatedAnimal)
    res.send(animals)
  },
  delete: (req, res) => {
    let { id } = req.params
    let index = animals.findIndex(animal => +animal.id === +id)
    animals.splice(index, 1)
    res.send(animals)
  }
}