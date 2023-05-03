

function OpenMenu(rayon) {
    var bakuText = "<h3>Baku</h3>Baku city of winds and fireland ";
    var sumqayitText = "<h3>Sumqayit</h3>20 yanvar manatdan MANATDAN";
    var salyanText = "<h3>Salyan</h3>Ureyim istedi yazdim";
    var ekran = document.getElementById("ekran");
  
    if (rayon == "Baku") {
      ekran.innerHTML = bakuText;
      ekran.classList.add("d-block");
    } else if (rayon == "Sumqayit") {
      ekran.innerHTML = sumqayitText;
      ekran.classList.add("d-block");
    } else if (rayon == "Salyan") {
      ekran.innerHTML = salyanText;
      ekran.classList.add("d-block");
    }
  }
  