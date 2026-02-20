async function getData() { 
  const kass = document.querySelector("#kass");
  const response = await fetch('https://api.thecatapi.com/v1/images/search'); //ikka ootab ja on ootel API lehekulg aitab teha
  const data = await response.json(); //fetch saab internetist andmed ja see on ootel, siis saab JSON vormingus andmed kätte
  const object = data[0]; //Kui andmed kaes olid olid andmed arrays ja siis et saada koike sealt katte panin index 0
  const imageUrl = object.url; //vottis URL
  console.log(data[0]); 

  if (document.querySelector(".Kassipilt")) { 
    document.querySelector(".Kassipilt").remove();
  }

  const image = document.createElement("img"); 
  image.className = "Kassipilt";
  image.src = imageUrl;
  kass.appendChild(image);

}

const nupp = document.querySelector("#nupp"); 
nupp.addEventListener("click", getData);

getData();
