exibirProjetos()

function exibirProjetos(){
  let projetos = []
  let eventos = []
  let htmlCode = ""

  projetos.push({"projeto":"Conversor de Temperatura", "evento":"Imersão Dev", "url":"https://codepen.io/andrew_malandrin/pen/ZEaddVp", "img":"./img/conversortemperatura.JPG"})
  projetos.push({"projeto":"Super Trunfo - Folclore Nacional Raro", "evento":"Imersão Dev", "url":"https://codepen.io/andrew_malandrin/pen/JjMXXjd", "img":"./img/supertrunfo.jpg"})
  projetos.push({"projeto":"Pelada Pro ⚽", "evento":"Imersão Dev", "url":"https://codepen.io/andrew_malandrin/pen/BaJopay", "img":"./img/peladapro.JPG"})
  projetos.push({"projeto":"Aluraflix", "evento":"Imersão Dev", "url":"https://codepen.io/andrew_malandrin/pen/GRyJmMe", "img":"./img/aluraflix.JPG"})
  projetos.push({"projeto":"Soccer Badges", "evento":"Imersão Dev", "url":"https://codepen.io/andrew_malandrin/pen/JjMoMJb", "img":"./img/soccerbadges.JPG"})
  projetos.push({"projeto":"Calculadora de Média Simples", "evento":"Imersão Dev", "url":"https://codepen.io/andrew_malandrin/pen/podmYjo", "img":"./img/calculadoramedia.JPG"})
  projetos.push({"projeto":"Adivinhe o Número", "evento":"Imersão Dev", "url":"https://codepen.io/andrew_malandrin/pen/RwjXezp", "img":"./img/mentalista.JPG"})
  projetos.push({"projeto":"Guia Dev", "evento":"7 Days of Code", "url":"https://codepen.io/andrew_malandrin/pen/QWadGzq", "img":"./img/guiadev.JPG"})
  projetos.push({"projeto":"Advinhe o Número 2.0", "evento":"7 Days of Code", "url":"", "img":"./img/mentalista2.JPG"})
  projetos.push({"projeto":"Lista de Compras", "evento":"7 Days of Code", "url":"https://codepen.io/andrew_malandrin/pen/ZEvKByL", "img":"./img/listacompras.JPG"})
  projetos.push({"projeto":"Calculadora simples", "evento":"7 Days of Code", "url":"https://codepen.io/andrew_malandrin/pen/VwybGYj", "img":"./img/calculadora.JPG"})
  projetos.push({"projeto":"Modelo de Portfolio", "evento":"Curso - Bootstrap", "url":"https://github.com/andrewmalandrin/aula_bootstrap", "img":"./img/modeloportfolio.JPG"})

  //projetos.push({"projeto":"", "evento":"", "url":"", "img":""})

  for(let i in projetos){
    if(!eventos.includes(projetos[i].evento)){
      eventos.push(projetos[i].evento)
    }
  }

  for(let i in eventos){
    htmlCode += `<h4 class="text-secondary titulo-evento">${eventos[i]}</h4><br>`
    htmlCode += `<div class="scrolling-wrapper">`
    for(let j in projetos){
     
      if(projetos[j].evento === eventos[i]){
        htmlCode += `<div class="card">`
        htmlCode += `<a href="${projetos[j].url}" class="text-white" target="_blank">`
        htmlCode += `<img class="card-img-top" src="${projetos[j].img}" alt="Card image cap">`
        htmlCode += `<div class="card-body">`
        htmlCode += `<p class="card-title">${projetos[j].projeto}</p>`
        htmlCode += `</div>`
        htmlCode += `</a>`  
        htmlCode += `</div>`
      }
      
    }  
    htmlCode += `</div>`
  }

  document.getElementById("area-projetos").innerHTML = htmlCode
  
}
