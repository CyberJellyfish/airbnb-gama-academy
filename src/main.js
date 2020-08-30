// API externa utilizada para a requisição:
const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

fetch(API_URL)
  .then((response) => response.text())
  .then((result) => {
    // Fetch do resultado da requisição e parseamento em JSON, 
    const data = JSON.parse(result);
    data.map((element) => {
      // Desestruturação do objeto 
      const {photo, property_type, name, price} = element;         

      //Seleção da #row
      const row = document.getElementById("row");

      // Criação da coluna usando "col-md-4" do Bootstrap
      const div = document.createElement("div");
      div.className = "col-md-4";

      // Criação do card usando "card mb-4 box-shadow" do Bootstrap
      const card = document.createElement("div");
      card.className = "card mb-4 box-shadow";
      
      // Inserção das imagens a partir da API
      const image = document.createElement("img");
      image.className = "card-img-top";
      image.src = photo;
            
      // Criação de div para acomodar o conteúdo. Uso da classe "card-body" do Bootstrap.
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      // Card de texto usando a classe "card-text" do Bootstrap
      const cardText = document.createElement("div");
      cardText.className = "card-text";

      // Listagem do nome, tipo de imóvel e preço
      const propertyType = document.createElement("p");
      propertyType.className = "property-type";
      propertyType.innerHTML = property_type;

      const propertyName = document.createElement("p");
      propertyName.className = "property-name";
      propertyName.innerHTML = name;

      const propertyPrice = document.createElement("p");
      propertyPrice.className = "property-price";
      propertyPrice.innerHTML = `Total de R$ ${price}.`;
      ;

//Apensamento conforme a ordem das estruturas.
      row.appendChild(div);
        div.appendChild(card);
          card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardText);
                cardText.appendChild(propertyType);
                cardText.appendChild(propertyName);
                cardText.appendChild(propertyPrice);
      
    });
  });
