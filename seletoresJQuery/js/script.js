$(document).ready(function () {
  // Selecionar todas as tags h2 e colocar um background verde nos elementos selecionados.
  $("h2").css({ backgroundColor: "green" });

  // Selecionar o pai da classe buttons e colocar um background vermelho no elemento selecionado.
  $(".buttons").css({ backgroundColor: "red" }).parent();

  // Selecionar os elementos filhos da classe module e colocar como background da cor azul.
  $(".module").children().css({ backgroundColor: "blue" });

  // Selecionar o item da lista de índice 2 da classe module utilizando a função eq() e colocar como background a cor verde.
  $(".module").find("li").eq(2).css({ backgroundColor: "green" });

  // Selecionar o primeiro elemento da lista myList e colocar como background a cor Amarelo.
  $("#myList li").first().css({ backgroundColor: "yellow" });

  // Selecionar o último elemento da lista slideshow e colocar como background a cor preta.
  $("#slideshow li").last().css({ backgroundColor: "black" });

  // Verifique se o primeiro elemento filho de Search é um form. Se for, exiba um alert na tela com a mensagem “O elemento form é filho de Search. Caso não seja, exiba um alert na tela com a mensagem “O elemento form não é filho de Search.
  if ($("#search").children().first().is("form")) {
    alert("O elemento form é filho de Search");
  } else {
    alert("O elemento form não é filho de Search.");
  }

  //Selecionar todas as listas não ordenadas, exceto a de id slideshow e colocar como background a cor azul.
  $("ul").not("#slideshow").css({ backgroundColor: "blue" });

  //Selecionar todos os itens de lista que possuam um parágrafo nele e colocar como background a cor rosa.
  $("li").has("p").css({ backgroundColor: "pink" });

  //Alterar o conteúdo da tag que possui a classe myListItem para “Este é um novo item de lista”
  $("#myListItem").text("Este é um novo item de lista");

  //Selecionar o próximo elemento após o elemento de classe selected e colocar um background cinza nele.
  $(".selected").next().css({ backgroundColor: "grey" });

  //Selecionar o elemento anterior ao elemento de classe input_text e colocar um background cinza nele.
  $(".input_text").prev().css({ backgroundColor: "grey" });

  //Selecionar todos os irmãos do elemento que possui o id listItem_2 e colocar um background verde nele.
  $("#listItem_2").siblings().css({ backgroundColor: "green" });

  //Selecionar todos os elementos que possuam um atributo src e colocar um background amarelo nele.
  $("[src]").css("backgroundColor", "yellow");

  //Selecionar dentro do elemento de id header e dentro do id nav, o elemento que contenha a classe selected. (Utilizando um seletor que contenha esse caminho)
  $("#header, #nav").find9(".selected")

  //Selecionar todos os elementos que possui o atributo type="text”.
  $("[type='text']")

  //Selecionar todos os elementos que possuam o atributo value
  $("[value]")

  //  Selecionar todos os elementos que possuam o atributo type diferente de submit e colocar um background vermelho nele.
  $("[type]").not("[type='submit']").css("backgroundColor", "red");

  // Selecionar todos os elementos que possuam o atributo href que inicia com a palavra blog e colocar um background verde nele.
  $("[href ^= 'blog']").css("backgroundColor", "green");

  // Selecionar todos os elementos que possuam o atributo value que terminam com a letra a e colocar um background vermelho nele.
  $("[value $= 'a']").css("backgroundColor", "red");

  // Selecionar todos os elementos que possuam o atributo href que contenham a palavra html e colocar um background cinza nele.
  $("[href *= 'html']").css("backgroundColor", "grey");
});
