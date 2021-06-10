window.onload = async () => {
  const elProd = document.getElementById("container_prod_new");

  function getPrecoAvista(num) {
    num *= 0.91;
    num = (num + "").split(".")[0];

    while (num % 10 !== 0) num++;
    return num;
  }

  const data = (await getData()) || [];
  elProd.innerHTML = data
    .map(
      ({ name, image, product_condition: pc, price }) => `
            <div class="item">
                <div class="container-img-item">
                    <img src="${image}" alt="prod" class="img-item" />
                </div> 

                <div class="text-info">
                    <p>${name}</p>
                </div>

                <div class="container-btn-info">
                    <button class="btn-info">${pc}<span>@ </span> EM ÓPTIMO</button>
                </div>

                <div class="info-2">
                <h2 class="h-preco">R$ ${formatNumber(
                  getPrecoAvista(price)
                )},00 á vista</h2>
                <h3>
                <img class="img-card" src="./img/card.svg">10x de R$ ${formatNumber(
                  price / 10
                )},00<br>(R$ ${formatNumber(price)},00)</h3>
            </div>
            <div class="closer">
                <div class="container-ver">
                    <button class="btn-ver">Ver Produto</button>
                </div>
                <div>
                    <button class="btn-add">
                    <img class="img-card t" src="./img/sacola.svg"> Adicionar na Sacola
                    </button>
                </div>
            </div>
            </div>
  `
    )
    .join(" ");
};

function changeState(next = true) {
  const el = document.getElementById("container_prod");
  if (next) el.scrollLeft += 250 * 3;
  else el.scrollLeft -= 250 * 3;
}
