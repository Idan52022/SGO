


function visAlleScore(titel) {

  let tmp = scores.split(/\r?\n/);

  let tmp2 = [];
  for (var i = 0; i < tmp.length; i++) {
    tmp2.push(tmp[i].split(/\t/));
  }

  let table = "<h2>Compare your scoresheets</h2>"
  table += "<ul>";

  for (var i = 0; i < tmp2.length; i++) {

    if (tmp2[i][3] == titel + " ") {
      table += "<li>" + tmp2[i][0] + "\t" + tmp2[i][1] + "\t" + tmp2[i][2] + "\t" + tmp2[i][4] + "%" + "</li>";
    }
  }

  table += "</ul>";

  return table;


}


// console.log(scores);
// console.log(visAlleScore("Transparency"));
