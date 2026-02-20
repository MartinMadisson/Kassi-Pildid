async function getData() { //see ootab andmeid internetist
  const kass = document.querySelector("#kass");
  const response = await fetch('https://api.thecatapi.com/v1/images/search'); //ikka ootab ja on ootel API lehekulg aitab teha
  const data = await response.json(); //fetch saab internetist andmed ja see on ootel, siis saab JSON vormingus andmed kätte
  const object = data[0]; //Kui andmed kaes olid olid andmed arrays ja siis et saada koike sealt katte panin index 0
  const imageUrl = object.url; //vottis URL
  console.log(data[0]); //sai vaatada kas tootas see array data ja index 0 oli olemas

  if (document.querySelector(".Kassipilt")) { //kui on olemas kassipilt siis see eemaldab viimase pildi ja tuleb uus pilt
    document.querySelector(".Kassipilt").remove();
  }

  const image = document.createElement("img"); //teeb uue pildi
  image.className = "Kassipilt"; //panin classinimeks kassipilt siis on arusaadav ja et parast peab ules leidma ja ara kustutada 1 rida uleval
  image.src = imageUrl; //pilt tuleb siit
  kass.appendChild(image);

}

const nupp = document.querySelector("#nupp"); //kui vajutada tuleb uus pilt
nupp.addEventListener("click", getData); //tegin kui kasutaja peab midagi tegema siis tuleks uus pilt ehk otsast peale ulevalt alla

getData();
