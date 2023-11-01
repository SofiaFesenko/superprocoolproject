let studentsInfo = [
  {
    image: './img/slider/em.jpg',
    name: 'Ілон Маск',
    description: 'молодець'
  },
  {
    image: './img/slider/stj.jpg',
    name: 'Стів Джобс',
    description: 'так тримати'
  },
  {
    image: './img/slider/dab.jpg',
    name: 'Девід Башуцкі',
    description: 'красавчік'
  },
  {
    image: './img/slider/big.jpg',
    name: 'Білл Гейтс',
    description: 'лігенда'
  }
]

let photoIndex = 0

let studentPhoto = document.querySelector('.main__OT-wraper-photo')
let studentName = document.querySelector('.main__OT-name')
let studentWork = document.querySelector('.main__OT-description')

let arrowLeft = document.querySelector('.main__OT-wraper-arrow--left')
let arrowRight = document.querySelector('.main__OT-wraper-arrow--right')


function showPhotos() {
  studentPhoto.src = studentsInfo[photoIndex].image
  studentName.textContent = studentsInfo[photoIndex].name
  studentWork.textContent = studentsInfo[photoIndex].description
}

function next() {
  photoIndex++
  if (photoIndex > 3) {
      photoIndex = 0
  }
  showPhotos()
}

function back() {
  photoIndex--
  if (photoIndex < 0) {
      photoIndex = 3
  }
  showPhotos()
}

showPhotos()

arrowRight.addEventListener('click', next)
arrowLeft.addEventListener('click', back)

document.addEventListener('keydown', (event) => {
  if (event.code == 'ArrowRight') {
      next()
  } else if (event.code == 'ArrowLeft') {
      back()
  }
})