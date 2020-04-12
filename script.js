let contentGrid = document.getElementById('grid');

let imagesJSON = [
  {
    "title": "Garry (Ib Fanart)",
    "illustration": "Garry.png",
    "date": "2020.4.7"
  },
  {
    "title": "Roses",
    "illustration": "redOneColor.png",
    "date": "2020.4.4"
  },
  {
    "title": "too late (Oui Oui Fanart)",
    "illustration": "tooLateOuiOui.png",
    "date":"2020.4.2"
  },
  {
    "title": "May Alter",
    "illustration": "MayAlter.png",
    "date": "2020.3.24"
  },
  {
    "title": "Angel Ganev 'Draw this in your Style' Week 27",
    "illustration": "angeldtiysweek27.png",
    "date": "2020.3.21"
  },
  {
    "title": "Miu Iruma (Danganronpa v3 Fanart)",
    "illustration": "miuIruma.png",
    "date": "2020.3.15"
  },
  {
    "title": "Sage (Valorant Fanart)",
    "illustration": "sage.png",
    "date": "2020.3.12"
  },
  {
    "title": "Destructive Love Concept Art I",
    "illustration": "standardDestructiveLove.png",
    "date": "2020.3.3"
  },
  {
    "title": "Leo Yanagi",
    "illustration": "LeoYanagi.png",
    "date": "2020.2.24"
  },
  {
    "title": "Ayumu Himura",
    "illustration": "AyumuHimura.png",
    "date": "2020.2.24"
  },
  {
    "title": "Scarlett Akiyama",
    "illustration": "ScarlettAkiyama.png",
    "date": "2020.2.24"
  },
  {
    "title": "R.I.P Qinniart",
    "illustration": "qinniFull.png",
    "date": "2020.2.14"
  }
];

function createElement(json){

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('content');

  /// Create HEADLINE h3, set class, set content
  let newContentTitle = document.createElement("H3");
  newContentTitle.classList.add('title');
  newContentTitle.innerHTML = json['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentTitle);

  /// Create HEADLINE h3, set class, set content

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.id = currID;
  // console.log(currID);
  newImage.src = json['illustration'];
  newContentElement.appendChild(newImage);

  let newDate = document.createElement("H4");
  newDate.classList.add('date');
  newDate.innerHTML = json['date'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newDate);

  // let hr = document.createElement("HR")
  // newContentElement.appendChild(hr)

  /// Add the item to the page
  contentGrid.appendChild(newContentElement);
}


for (var i = 0; i < imagesJSON.length; i++) {
  var currID = "image" + (i+1);
  createElement(imagesJSON[i]);
}

function listener(){
  var listenID = "image" + (i+1);
  document.getElementById(listenID).addEventListener("mouseover", function(){
    document.getElementById(listenID).style.height = "auto";
    // console.log(listenID);
  });
  document.getElementById(listenID).addEventListener("mouseout", function(){
    document.getElementById(listenID).style.height = "100px";
    // console.log(listenID);
  });
}

for (var i=0; i < imagesJSON.length; i++){
  listener();
}
