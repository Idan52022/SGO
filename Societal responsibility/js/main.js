function genererEtSpørgsmål(index, spørgsmål, k) {
  let skabelon = `


<form>

<p>${spørgsmål}</p>

<div class="form-check">
  <input class="form-check-input" type="radio" id="ja${index}" name="spm${index}" value="ja">
  <label class="form-check-label" for="spm${index}">
    Yes
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" id="nej${index}" name="spm${index}" value="nej">
  <label class="form-check-label" for="spm${index}">
    No
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" id="vedikke${index}" name="spm${index}" value="vedikke">
  <label class="radio control-label">
    Not applicable
  </label>
</div>

</form>

`;
  return skabelon;
}


function genererKategori() {
  let html = "";
  let kategori = data[categoryCounter];
  let titel = kategori.titel;
  console.log(titel);

  html += "<h2>" + titel + "</h2>";
  let spørgsmål = kategori.spørgsmål;

  let i = 0;
  for (var j = 0; j < spørgsmål.length; j++) {
    let info = spørgsmål[j].info;
    html += "<div><p class='lead'>" + info + "</p></div>";

    let underspørgsmål = spørgsmål[j].underspørgsmål;
    for (var k = 0; k < underspørgsmål.length; k++) {
      html += genererEtSpørgsmål(i, underspørgsmål[k], k);
      i++;
    }

  }
  // html += "<hr>";
  html += "<br>";
  return html;
}

function indsendSvar() {

  let tmp = `
  <h2>Your result</h2>
  <ul>
  `;

  let radios;
  let ja = 0;
  let nej = 0;
  let vedikke = 0;
  let svarMangler;
  let antalIkkeBesvaret = 0;

  let kategori = data[categoryCounter];
  let spørgsmål = kategori.spørgsmål;
  console.log(data[categoryCounter].titel);

  let i = 0;
  for (var j = 0; j < spørgsmål.length; j++) {
    let underspørgsmål = spørgsmål[j].underspørgsmål;
    for (var k = 0; k < underspørgsmål.length; k++) {
      radios = document.getElementsByName('spm' + i);

      svarMangler = true;
      for (var l = 0; l < radios.length; l++) {
        if (radios[l].checked) {
          svarMangler = false;
          let v = radios[l].value;
          if (v == "ja") {
            ja++;
          }
          else if (v == "nej") {
            nej++;
          }
          else if (v == "vedikke") {
            vedikke++;
          }
        }
      }
      if (svarMangler) {
        antalIkkeBesvaret++;
      }
      i++;

    }
  }
  // console.log("Der er blevet svaret: ", ja, nej, vedikke, antalIkkeBesvaret);

  if (antalIkkeBesvaret == 0) {
    tmp += "<li> Societal responsibility: " + Math.round(ja / (ja + nej) * 100) + " % </li>"
    tmp += "</ul>";
    // tmp += visAlleScore(kategori.titel);
    tmp += "<button type='button' class='btn btn-secondary btn-lg' onclick='generateOverview()' id='knap2'>Start over</button>";
    // tmp += "<a href='#' class='link-primary' onClick='generateOverview()'>Start over</a>";



    // let indhold = document.getElementById("indhold");
    // indhold.style.display = "none";

    // let knap = document.getElementById("knap");
    // knap.style.display = "none";

    let knap2 = document.getElementById("knap2");
    knap2.style.display = "none";
    document.getElementById("status").style.display = "block";
    document.getElementById("status").innerHTML = tmp;
  }

  else {
    alert("Please answer all questions! You are missing " + antalIkkeBesvaret + ".");
  }
}

function nyQuiz(obj) {
  showNothing();
  categoryCounter = parseInt(obj.getAttribute("name"));
  html = genererKategori();

  document.getElementById("indhold").innerHTML = html;
  document.getElementById("indhold").style.display = "block";
  document.getElementById("knap").style.display = "block";
  document.getElementById("knap2").style.display = "block";

}

function showNothing() {
  document.getElementById("status").style.display = "none";
  document.getElementById("indhold").style.display = "none";
  document.getElementById("knap").style.display = "none";
  document.getElementById("knap2").style.display = "none";
  document.getElementById("oversigt").style.display = "none";
}

function generateOverview() {
  let tmp = "<h2> </h2>";
  tmp += "<p>The tool does not save your answers and resets when closing this tab.</p>" 
  tmp += "<p>If you want to save your score, please make a screenshot or click Print in your browser after calculating your score.</p>" 
  tmp += "<p>Click on the link below to answer all indicators for this dimension.</p>";

  tmp += "<ul>";
  for (var i = 0; i < data.length; i++) {
    tmp += "<li><a href='#' onClick='nyQuiz(this)' name='" + i + "'>" + data[i].titel + "</a></li>";

  }
  tmp += "</ul>";
  showNothing();
  html = tmp;
  document.getElementById("oversigt").style.display = "block";
  document.getElementById("oversigt").innerHTML = html;
}

let categoryCounter = 0;
let html = "";

generateOverview();
