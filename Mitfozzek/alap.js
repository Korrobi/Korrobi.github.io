let prevIndex = -1

function RandomFood() {
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
        "name": "Olaszos brokkolileves",
        "img": "pic/olaszos-brokkolileves.webp",
        "time": 30,
        "cal": 559,
        "source": "https://www.nosalty.hu/recept/olaszos-brokkolileves"
    },

    1: {
        "name": "Gombás borjútokány",
        "img": "pic/gombas-borju-tokany.webp",
        "time": 50,
        "cal": 359,
        "source": "https://www.nosalty.hu/recept/gombas-borju-tokany"
    },

    2: {
        "name": "Fűszeres sütőtökkrémleves",
        "img": "pic/fuszeres-sutotokkremleves.webp",
        "time": 30,
        "cal": 249,
        "source": "https://www.nosalty.hu/recept/fuszeres-sutotokkremleves"
    },

    3: {
        "name": "Zöldborsós pörkölt rizzsel",
        "img": "pic/zoldborsos-porkolt-rizzsel.webp",
        "time": 100,
        "cal": 521,
        "source": "https://www.nosalty.hu/recept/zoldborsos-porkolt-rizzsel"
    },

    4: {
        "name": "A Brassói",
        "img": "pic/a-brassoi.webp",
        "time": 120,
        "cal": 852,
        "source": "https://www.nosalty.hu/recept/a-brassoi"
    },

    5: {
        "name": "Laskaleves",
        "img": "pic/laska-leves.webp",
        "time": 40,
        "cal": 360,
        "source": "https://www.nosalty.hu/recept/laska-leves"
    },

    6: {
        "name": "Dirty Rice, avagy a piszkos rizs",
        "img": "pic/dirty-rice-piszkos-rizs-amerikai-rizsetel.webp",
        "time": 95,
        "cal": 485,
        "source": "https://www.nosalty.hu/recept/dirty-rice-piszkos-rizs-amerikai-rizsetel"
    },

    7: {
        "name": "A legtunkolósabb sertéspörkölt",
        "img": "pic/sertesporkolt-porkolt-magyar-konyha.webp",
        "time": 105,
        "cal": 525,
        "source": "https://www.nosalty.hu/recept/sertesporkolt-porkolt-magyar-konyha"
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
