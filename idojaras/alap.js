fetch("https://api.open-meteo.com/v1/forecast?latitude=47.53&longitude=21.62&hourly=temperature_2m")
.then(x => x.json())
.then(y => Megjelenit(y));
var sz = "";
function Megjelenit(y)
{
    console.log(y)
    var ido = "";
    for (let i = 0; i < y.hourly.time.length; i++) {
        
        sz+="<tr>"
        sz+="<td>"
        sz+=y.hourly.time[i]
        sz+="</td>"
        sz+="<td>"
        sz+=y.hourly.temperature_2m[i]
        sz+="°C</td>"
        sz+="</tr>"
        
        
    }
    
      
     
    document.getElementById("tablazat").innerHTML=sz;
    //----
    var data = [
        {
          x: y.hourly.time,
          y: y.hourly.temperature_2m,
          type: 'bar'
        }
      ];
      Plotly.newPlot('myDiv', data);
//----------------------------------


var maxtombido=[]
var maxtombhom=[]
for (let i = 13; i < y.hourly.time.length; i=i+24) {
    maxtombido.push(y.hourly.time[i])
    maxtombhom.push(y.hourly.temperature_2m[i])
}
var maxtombido2 = []
maxtombido2 = maxtombido.map((elem) =>{

    //console.log(elem)
    var elvalaszt = elem.split('T')
    return elvalaszt[0]
})

var data2 = [
    {
      x: maxtombido2,
      y: maxtombhom,
      type: 'bar'
    }
  ];
  Plotly.newPlot('maximum', data2);


  //----------------------------

var mintombido=[]
var mintombhom=[]

var mintombido2=[]

for (let i = 3; i < y.hourly.time.length; i+=24) {
    mintombido.push(y.hourly.time[i])
    mintombhom.push(y.hourly.temperature_2m[i])
}
mintombido2 = mintombido.map((elem) =>{

    //console.log(elem)
    var elvalaszt = elem.split('T')
    return elvalaszt[0]
})

var data3 = [
    {
      x: mintombido2,
      y: mintombhom,
      type: 'bar'
    }
  ];
  Plotly.newPlot('minimum', data3);


  //----------------------
  var Max = {
    x: maxtombido2,
    y: maxtombhom,
    name: 'Max hőmérséklet',
    type: 'bar'
  };
  
  var Min = {
      x: mintombido2,
      y: mintombhom,
      name: 'Min hőmérséklet',
    type: 'bar',
    marker:{
        color:'green'
    }
  };
  
  var data4 = [Max, Min];
  
  var layout = {barmode: 'group'};
  
  Plotly.newPlot('minimax', data4, layout);
}
