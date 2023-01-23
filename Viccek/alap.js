var tomb=
[
"Mi a legfőbb oka a válásnak? -A házasság!",
"Mit mond a félénk sünlány az első randiján?  -Ne hozz avarba!",
"Miért ejtette le a kisfiú a fagyiját? -Mert elütötte a villamos",
"Miaz? Feldobod zöld, leesik ugat? -Mindegy, csak kutyára essen!",
"Mi az? Reggel ugat este úszik? -Az anyós műfogsora."
]
var kepek=
[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
]

function vicc()
{

    var veletlen = Math.floor(Math.random() * tomb.length);
    //console.log(veletlen)
    //alert(tomb[veletlen])
    
    document.getElementById("vicchelye").innerHTML=tomb[veletlen]
    document.getElementById("vicceskep").src=kepek[veletlen]
}
vicc()