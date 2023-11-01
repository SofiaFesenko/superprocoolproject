const scientists = [ 
    { 
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1 
    },
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
]


let resultWindows = document.querySelectorAll('.main__S-wraper-item-name')
let buttonsS = document.querySelectorAll('.main__S-wraper-btn')

let resultWindowsIndex = 0

let ageArr = []
let obj = {}
for (let i of scientists) {
    ageArr.push({name: obj.name = i.name + " " + i.surname, age: obj.age = i.dead - i.born})

    ageArr.sort(function(a, b) {
        return a.age - b.age;
    });
}


function resetText() {
    for (let i of resultWindows) {
        i.textContent = ""
        resultWindowsIndex = 0
    }
}




buttonsS[0].addEventListener('click', () => {
    resetText()
    for (let i of scientists) {
        if (i.born >= 1801 ) {
            resultWindows[resultWindowsIndex].innerHTML = `${i.name} ${i.surname}`
            resultWindowsIndex++
        }
    }
})

buttonsS[1].addEventListener('click', () => {
    resetText()
    scientists.sort((a, b) => a.name.localeCompare(b.name));
    for (let i of scientists) {
        resultWindows[resultWindowsIndex].innerHTML = `${i.name} ${i.surname}`
        resultWindowsIndex++
    }
})

buttonsS[2].addEventListener('click', () => {
    resetText()
    for (let i of ageArr) {
        resultWindows[resultWindowsIndex].innerHTML = `${i.name}`
        resultWindowsIndex++
    }
})

buttonsS[3].addEventListener('click', () => {
    resetText()
    let maxBorn = 0;
    let name = ''
    for (let i of scientists) {
        maxBorn = Math.max(maxBorn, i.born)
        if (i.born == maxBorn) {
            name = i.name + ' ' + i.surname
        }
    }
    resultWindows[resultWindowsIndex].innerHTML = `${name}`
})

buttonsS[4].addEventListener('click', () => {
    resetText()
    for (let i of scientists) {
        if (i.surname == 'Einstein') {
            resultWindows[resultWindowsIndex].innerHTML = `${i.born}`
        }
    }
})

buttonsS[5].addEventListener('click', () => {
    resetText()
    for (let i of scientists) {
        if (i.surname.slice(0, 1) == 'C') {
            resultWindows[resultWindowsIndex].innerHTML = `${i.name} ${i.surname}`
            resultWindowsIndex++
        } 
    }
})

buttonsS[6].addEventListener('click', () => {
    resetText()
    for (let i of scientists) {
        if (i.name.slice(0, 1) != 'A') {
            resultWindows[resultWindowsIndex].innerHTML = `${i.name} ${i.surname}`
            resultWindowsIndex++
        } 
    }
})

buttonsS[7].addEventListener('click', () => {
    resetText()
    let maxLive = 0
    let minLive = Infinity
    let maxname = ''
    let minname = ''
    for (let i of ageArr) {
        maxLive = Math.max(maxLive, i.age)
        minLive = Math.min(minLive, i.age)
        if (i.age == maxLive) {
            maxname = i.name
        }
        if (i.age == minLive) {
            minname = i.name
        }
    }
    resultWindows[0].innerHTML = `найдовше: ${maxname}`
    resultWindows[1].innerHTML = `найменше: ${minname}`
})

buttonsS[8].addEventListener('click', () => {
    resetText()
    for (let i of scientists) {
        if (i.name.slice(0, 1) == i.surname.slice(0, 1)) {
            resultWindows[resultWindowsIndex].innerHTML = `${i.name} ${i.surname}`
            resultWindowsIndex++
        } 
    }
})