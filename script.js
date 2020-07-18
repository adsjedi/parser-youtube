function main() {
  var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1TIMyV3yG5tgBDcy5VYVji94q5iuFXrRfCclGFxQkr-E/edit";
  var ss = SpreadsheetApp.openByUrl(spreadsheetUrl);
  var kwSheet = ss.getSheetByName('Слова');
  var resSheet = ss.getSheetByName('Площадки');
  var lastRow = kwSheet.getLastRow();
  resSheet.clear();
  var range = kwSheet.getRange(1, 1, lastRow+1, 1);
  var values = range.getValues();
  var placements = [];
  for(var i = 0; values.length - 1 > i; i++) {
  var query = values[i][0];
var results = YouTube.Search.list('id,snippet', {q: query, maxResults: 75, type: 'channel'});
  for (var j in results.items) {
 var item = results.items[j];
  placements.push(['youtube.com/channel/'+item.id.channelId,item.snippet.title]);
   }
  }
 resSheet.getRange(1, 1, placements.length, 2).setValues(placements);
}
