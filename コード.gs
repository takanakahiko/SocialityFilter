function doGet(e) { //アクセスが来たら実行します
  if(!e.parameter.text) return createContent(e.parameter.callback , {error :'action is required '});
  var text = replace(e.parameter.text);
  return createContent(e.parameter.callback , {response : text});
}

function createContent(callback , returnObject ) { //JSONまたはJSONPの文字列を返します
  if(callback) {
    return ContentService.createTextOutput(callback + '(' + JSON.stringify(returnObject) + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  } else {
    return ContentService.createTextOutput(JSON.stringify( JSON.stringify(returnObject))).setMimeType(ContentService.MimeType.JSON);
  }  
}

function getArrayFromSpreadsheet(spreadsheetId,sheetName) {
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  return sheet.getDataRange().getValues();
}

function replace(text) {
  var id = "13K6fMaL_x1-MueE9z6Cybq4tMk3NS5qdtzwEAJ81T9Q";
  var name = "シート1";
  var data = getArrayFromSpreadsheet(id,name);
  for(var ar in data){ //この繰り返し、あまり良くないと思った
    if(ar == 0) continue;
    text = text.replace(data[ar][1],"にゃーん");
  }
  return text;
}