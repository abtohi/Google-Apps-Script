function onEdit() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var date = new Date()
  var hari = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"]
  var pasar = ["Kliwon","Legi","Pahing","Pon","Wage"]
  var ac_tgl = 30
  var ac_pas = "Senin Kliwon"
  
  var hr = []
  for(var i=0; i<hari.length; i++)
  {
    n = 0
    for(var j=0; j<5; j++)
    {
      hr.push([hari[i],(i+1)+(n*7)])
      n++
    }    
  }

  var ps = []
  for(var i=0; i<pasar.length; i++)
  {
    n = 0
    for(var j=0; j<7; j++)
    {
      ps.push([pasar[i],(i+1)+(n*5)])
      n++
    }
  }
  
  var hari_loop    = hr.sort(function(a,b){return a[1]-b[1]})
  var pasaran_loop = ps.sort(function(a,b){return a[1]-b[1]})

  var pasaran = []
  for(var i=0; i<35; i++)
  {
    pasaran.push([hari_loop[i][0]+' '+pasaran_loop[i][0]])
  }

  var pas = Array.prototype.concat.apply([],pasaran)

  var now = ss.getRange('B2').getValue()

  ss.getRange('B3').setValue(pas[Math.abs(DateToValue(now).toFixed(0)-ac_tgl)%35])
}


function DateToValue(date) {
  return 25569 + (date.getTime()-date.getTimezoneOffset()*60000)/86400000 ;
}
