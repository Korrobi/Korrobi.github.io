var szavak=
[
    "kecske","alma","körte","köret","kék","piros","egy","kettő","három"
]
var kitalalando = "";

function gamestart()
{
    kiirtbetuk=0;
    hibakszama=0;
    kitalalando="";
    gomb.style.visibility = "hidden";
    var sz = "";
    //alert("A játék elindult")
    var veletlen = Math.floor(Math.random()*szavak.length)
    //for (const elem of szavak) sz += elem + " "
    //sz+= szavak[veletlen]
    //alert(szavak[veletlen])
    kitalalando = szavak[veletlen]
    for (let i = 0; i < kitalalando.length; i++)
    {
        sz+='<div id='+i+' class = "kitalalos" s>'
        //sz+="*"
        sz+="</div>"
    }
    
    document.getElementById("keret").innerHTML = sz;
    document.getElementById("akasztas").src = 0+".png"
}


let hibakszama = 0;
let kiirtbetuk = 0;
var kesz = false;
function megjelenit(event)
{
    //alert(document.getElementById(adat))
    let leutottbetu= event.key
    let db = 0;
    
    for (let i = 0; i < kitalalando.length; i++)
    {
        if (leutottbetu == kitalalando[i])
        {
            document.getElementById(i).innerHTML=kitalalando[i]
            
            db++;
            kiirtbetuk++
            if (kiirtbetuk==kitalalando.length)
            {
                document.getElementById("akasztas").src="win.png"
                document.getElementById("keret").innerHTML = "";
                gomb.style.visibility="visible"
                hibakszama=-9999999
                
            }
        }
        
    }
    if (db==0)
    {
        hibakszama++;
        console.log(hibakszama)
        if (hibakszama<8) {
            document.getElementById("akasztas").src=hibakszama+".png"
        }
        if (hibakszama >= 8)
        {
            document.getElementById("keret").innerHTML = "YOU LOSE";
            document.getElementById("akasztas").src=8+".png"
            gomb.style.visibility="visible"
        }
        if (hibakszama<0) {
            document.getElementById("akasztas").src="win.png"
            document.getElementById("keret").innerHTML = "";
            gomb.style.visibility="visible"
            }
    }
    
}
