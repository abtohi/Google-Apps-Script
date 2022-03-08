function transfer()
{
  var ss = SpreadsheetApp.openById('Input your gsheet token here')
  var wb = ss.getSheetByName('Input sheet name here')
  var data = wb.getRange('input range').getValues()
  //Set your data to the destination
  var dest = SpreadsheetApp.openById('Input your gsheet token here')
  var wb_dest =  ss.getSheetByName('Input sheet name here')
                 wb_dest.getRange(row,column,nrow,ncol).setValues(data)
}
