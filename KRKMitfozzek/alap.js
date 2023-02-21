let prevIndex = -1

function RandomKaja() {
    let name = document.getElementById("name")
    let picture = document.getElementById("picture")
    let cal = document.getElementById("cal")
    let time = document.getElementById("time")
    let link = document.getElementById("link")

    let rIndex = Math.floor(Math.random() * 10)
    while (rIndex == prevIndex) {
        rIndex = Math.floor(Math.random() * 10)
    }

    prevIndex = rIndex
    let food = foodJson[rIndex]

    name.innerHTML = food.name
    picture.src = food.img
    cal.innerHTML = food.cal + " kcal - "
    time.innerHTML = food.time + " perc"
    link.href = food.source
}

foodJson = {
    0: {
        "name": "Gyors Amerikai Palacsinta",
        "img": "pic/gyors-amerikai-palacsinta.webp",
        "time": 7,
        "cal": 323,
        "source": "https://www.nosalty.hu/recept/gyors-amerikai-palacsinta"
    },

    1: {
        "name": "Frankfurti leves",
        "img": "pic/frankfurti-leves.webp",
        "time": 50,
        "cal": 165,
        "source": "https://www.nosalty.hu/recept/frankfurti-leves-egyszeruen"
    },

    2: {
        "name": "A Brassói",
        "img": "pic/brassoi.webp",
        "time": 120,
        "cal": 852,
        "source": "https://www.nosalty.hu/recept/a-brassoi"
    },

    3: {
        "name": "Csöröge fánk",
        "img": "pic/csorogefank.webp",
        "time": 45,
        "cal": 831,
        "source": "https://www.nosalty.hu/recept/nagymama-csorogefankja"
    },

    4: {
        
        "name": "Fűszeres sütőtökkrémleves",
        "img": "pic/fuszeres-sutotokkremleves.webp",
        "time": 30,
        "cal": 249,
        "source": "https://www.nosalty.hu/recept/fuszeres-sutotokkremleves"
    },

    5: {
        "name": "Laskaleves",
        "img": "pic/laska-leves.webp",
        "time": 40,
        "cal": 360,
        "source": "https://www.nosalty.hu/recept/laska-leves"
    },

    6: {
        "name": "Dirty Rice",
        "img": "pic/dirty-rice.webp",
        "time": 95,
        "cal": 485,
        "source": "https://www.nosalty.hu/recept/dirty-rice-piszkos-rizs-amerikai-rizsetel"
    },

    7: {
        "name": "Csirkefalatkák joghurtos bundában",
        "img": "pic/csirkefalatkak-joghurtos-bundaban.webp",
        "time": 35,
        "cal": 485,
        "source": "https://www.nosalty.hu/recept/csirkefalatkak-joghurtos-bundaban"
    },

    8: {
        "name": "Rusztikus almás palacsinta",
        "img": "pic/rusztikus-almas-palacsinta.webp",
        "time": 30,
        "cal": 660,
        "source": "https://www.nosalty.hu/recept/rusztikus-almas-palacsinta"
    },

    9: {
        "name": "Sültpaprikás tarhonya",
        "img": "pic/sultpaprikas-tarhonya.webp",
        "time": 55,
        "cal": 442,
        "source": "https://www.nosalty.hu/recept/sultpaprikas-tarhonya"
    }
}