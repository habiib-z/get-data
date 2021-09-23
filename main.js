fetch("https://fakestoreapi.com/products").then((res) => {
  res.json().then((resp) => {
    for (product in resp) {
      let article = document.createElement("section");
      article.className = "container_item";
      let name = document.createElement("h5");
      name.className = "text_item";
      name.appendChild(document.createTextNode(resp[product].title));
      let img = document.createElement("img");
      img.className = "image_item";
      img.setAttribute("src", resp[product].image);
      let icon_button = document.createElement('button');
      icon_button.className = "btn btn-danger";
      let icon = document.createElement('i');
      icon.className = "bi bi-cart-plus";
      let price = document.createElement('p');
      price.appendChild(document.createTextNode(resp[product].price));
      icon_button.appendChild(icon);
      article.appendChild(img);
      article.appendChild(name);
      article.appendChild(price);
      article.appendChild(icon_button);
      let con = document.querySelector("#container");
      con.appendChild(article);
      document.querySelector(".spinner-border").style.display = "none";
    }
  });
});
