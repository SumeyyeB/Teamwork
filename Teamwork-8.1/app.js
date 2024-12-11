const ekranaBastir = (pokemon) => {
  console.log(pokemon);
  pokemon.forEach((veri) => {
    document.getElementById("section").innerHTML+=`
    <div style="margin:1rem; padding:1rem; borderRadius:10px background-color:teal;">
    <h3> ${veri.name}</h3>
    <img src = ${veri.images.small}/>
    </div>

    `
  });
};

const getData = async () => {
  const res = await fetch("https://api.pokemontcg.io/v2/cards");
  const data = await res.json();

//   console.log(data.data);

  ekranaBastir(data.data);
};

getData();

