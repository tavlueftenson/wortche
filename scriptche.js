window.addEventListener('load', (event) => {

  const palavraTemp = sorteiaPalavra().toUpperCase();
  var elts = document.getElementsByClassName('inputs');
  document.getElementById('l11').focus(); 
  Array.from(elts).forEach(function(elt){
    elt.addEventListener("keyup", function(event) {
      var palavraInputada = "";
      var l1, l2, l3, l4, l5;
      // delete letter key START
      console.log(event.keyCode);
      if (((event.keyCode === 8) || (event.keyCode === 37)) && (notFirstRow(elt.id))) {
        elt.previousElementSibling.focus(); 
        document.getElementById(elt.previousElementSibling.id).value = ''; 
        console.log('deletar');
      } 

       // delete leter key END
      if (event.keyCode === 13 || elt.value.length == 1) {
            if (elt.nextElementSibling.id != 'escondido') {
              elt.nextElementSibling.focus()
          } else {
              // checa palavra inputada
              switch (elt.id) {
                case 'l15':
                  l1 = document.getElementById('l11').value.toUpperCase();
                  l2 = document.getElementById('l12').value.toUpperCase();
                  l3 = document.getElementById('l13').value.toUpperCase();
                  l4 = document.getElementById('l14').value.toUpperCase();
                  l5 = document.getElementById('l15').value.toUpperCase();
                  palavraInputada = (l1+l2+l3+l4+l5).toUpperCase();
                  if (palavraNaLista(palavraInputada)) {
                    console.log('palavra na lista');
                    document.getElementById('l11').readOnly = true;  
                    document.getElementById('l12').readOnly = true; 
                    document.getElementById('l13').readOnly = true; 
                    document.getElementById('l14').readOnly = true; 
                    document.getElementById('l15').readOnly = true;
                    if (palavraInputada == palavraTemp) {
                      // acertou a palavra
                      acertouPalavra(palavraTemp);
                    } else {
                      // verificar as letras
                      const arrayResposta = checaLetras(l1,l2,l3,l4,l5, palavraTemp);
                      switch (arrayResposta[0]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l11').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l11').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[1]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l12').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l12').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[2]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l13').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l13').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[3]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l14').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l14').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[4]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l15').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l15').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                    }
                    document.getElementById('l21').focus();                  
                  } else {

                  }
                  break;
                case 'l25': 
                l1 = document.getElementById('l21').value.toUpperCase();
                l2 = document.getElementById('l22').value.toUpperCase();
                l3 = document.getElementById('l23').value.toUpperCase();
                l4 = document.getElementById('l24').value.toUpperCase();
                l5 = document.getElementById('l25').value.toUpperCase();
                palavraInputada = (l1+l2+l3+l4+l5).toUpperCase();
                if (palavraNaLista(palavraInputada)) {
                  console.log('palavra na lista');
                  document.getElementById('l21').readOnly = true;  
                  document.getElementById('l22').readOnly = true; 
                  document.getElementById('l23').readOnly = true; 
                  document.getElementById('l24').readOnly = true; 
                  document.getElementById('l25').readOnly = true;
                  if (palavraInputada == palavraTemp) {
                    // acertou a palavra
                    acertouPalavra(palavraTemp);
                  } else {
                    // verificar as letras
                    const arrayResposta = checaLetras(l1,l2,l3,l4,l5, palavraTemp);
                    switch (arrayResposta[0]) {
                      case 0:
                        break;
                      case 1:
                        document.getElementById('l21').style.color = 'gray';
                        break;
                      case 2:
                        document.getElementById('l21').style.color = 'green';
                        break;
                      default:
                        break;        
                    }
                    switch (arrayResposta[1]) {
                      case 0:
                        break;
                      case 1:
                        document.getElementById('l22').style.color = 'gray';
                        break;
                      case 2:
                        document.getElementById('l22').style.color = 'green';
                        break;
                      default:
                        break;        
                    }
                    switch (arrayResposta[2]) {
                      case 0:
                        break;
                      case 1:
                        document.getElementById('l23').style.color = 'gray';
                        break;
                      case 2:
                        document.getElementById('l23').style.color = 'green';
                        break;
                      default:
                        break;        
                    }
                    switch (arrayResposta[3]) {
                      case 0:
                        break;
                      case 1:
                        document.getElementById('l24').style.color = 'gray';
                        break;
                      case 2:
                        document.getElementById('l24').style.color = 'green';
                        break;
                      default:
                        break;        
                    }
                    switch (arrayResposta[4]) {
                      case 0:
                        break;
                      case 1:
                        document.getElementById('l25').style.color = 'gray';
                        break;
                      case 2:
                        document.getElementById('l25').style.color = 'green';
                        break;
                      default:
                        break;        
                    }
                  }
                  document.getElementById('l31').focus();                  
                } else {

                }
                break;
                case 'l35':
                  l1 = document.getElementById('l31').value.toUpperCase();
                  l2 = document.getElementById('l32').value.toUpperCase();
                  l3 = document.getElementById('l33').value.toUpperCase();
                  l4 = document.getElementById('l34').value.toUpperCase();
                  l5 = document.getElementById('l35').value.toUpperCase();
                  palavraInputada = (l1+l2+l3+l4+l5).toUpperCase();
                  if (palavraNaLista(palavraInputada)) {
                    console.log('palavra na lista');
                    document.getElementById('l31').readOnly = true;  
                    document.getElementById('l32').readOnly = true; 
                    document.getElementById('l33').readOnly = true; 
                    document.getElementById('l34').readOnly = true; 
                    document.getElementById('l35').readOnly = true;
                    if (palavraInputada == palavraTemp) {
                      // acertou a palavra
                      acertouPalavra(palavraTemp);
                    } else {
                      // verificar as letras
                      const arrayResposta = checaLetras(l1,l2,l3,l4,l5, palavraTemp);
                      switch (arrayResposta[0]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l31').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l31').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[1]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l32').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l32').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[2]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l33').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l33').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[3]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l34').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l34').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[4]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l35').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l35').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                    }
                    document.getElementById('l41').focus();                  
                  } else {

                  }
                  break;
                case 'l45':
                  l1 = document.getElementById('l41').value.toUpperCase();
                  l2 = document.getElementById('l42').value.toUpperCase();
                  l3 = document.getElementById('l43').value.toUpperCase();
                  l4 = document.getElementById('l44').value.toUpperCase();
                  l5 = document.getElementById('l45').value.toUpperCase();
                  palavraInputada = (l1+l2+l3+l4+l5).toUpperCase();
                  if (palavraNaLista(palavraInputada)) {
                    console.log('palavra na lista');
                    document.getElementById('l41').readOnly = true;  
                    document.getElementById('l42').readOnly = true; 
                    document.getElementById('l43').readOnly = true; 
                    document.getElementById('l44').readOnly = true; 
                    document.getElementById('l45').readOnly = true;
                    if (palavraInputada == palavraTemp) {
                      // acertou a palavra
                      acertouPalavra(palavraTemp);
                    } else {
                      // verificar as letras
                      const arrayResposta = checaLetras(l1,l2,l3,l4,l5, palavraTemp);
                      switch (arrayResposta[0]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l41').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l41').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[1]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l42').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l42').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[2]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l43').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l43').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[3]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l44').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l44').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[4]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l45').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l45').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                    }
                    document.getElementById('l51').focus();                  
                  } else {

                  }
                  break;
                case 'l55':
                  l1 = document.getElementById('l51').value.toUpperCase();
                  l2 = document.getElementById('l52').value.toUpperCase();
                  l3 = document.getElementById('l53').value.toUpperCase();
                  l4 = document.getElementById('l54').value.toUpperCase();
                  l5 = document.getElementById('l55').value.toUpperCase();
                  palavraInputada = (l1+l2+l3+l4+l5).toUpperCase();
                  if (palavraNaLista(palavraInputada)) {
                    console.log('palavra na lista');
                    document.getElementById('l51').readOnly = true;  
                    document.getElementById('l52').readOnly = true; 
                    document.getElementById('l53').readOnly = true; 
                    document.getElementById('l54').readOnly = true; 
                    document.getElementById('l55').readOnly = true;
                    if (palavraInputada == palavraTemp) {
                      // acertou a palavra
                      acertouPalavra(palavraTemp);
                    } else {
                      // verificar as letras
                      const arrayResposta = checaLetras(l1,l2,l3,l4,l5, palavraTemp);
                      switch (arrayResposta[0]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l51').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l51').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[1]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l52').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l52').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[2]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l53').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l53').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[3]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l54').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l54').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[4]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l55').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l55').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                    }
                    document.getElementById('l61').focus();                  
                  } else {

                  }
                  break;
                case 'l65':
                  l1 = document.getElementById('l61').value.toUpperCase();
                  l2 = document.getElementById('l62').value.toUpperCase();
                  l3 = document.getElementById('l63').value.toUpperCase();
                  l4 = document.getElementById('l64').value.toUpperCase();
                  l5 = document.getElementById('l65').value.toUpperCase();
                  palavraInputada = (l1+l2+l3+l4+l5).toUpperCase();
                  if (palavraNaLista(palavraInputada)) {
                    console.log('palavra na lista');
                    document.getElementById('l61').readOnly = true;  
                    document.getElementById('l62').readOnly = true; 
                    document.getElementById('l63').readOnly = true; 
                    document.getElementById('l64').readOnly = true; 
                    document.getElementById('l65').readOnly = true;
                    if (palavraInputada == palavraTemp) {
                      // acertou a palavra
                      acertouPalavra(palavraTemp);
                    } else {
                      // verificar as letras
                      const arrayResposta = checaLetras(l1,l2,l3,l4,l5, palavraTemp);
                      switch (arrayResposta[0]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l61').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l61').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[1]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l62').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l62').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[2]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l63').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l63').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[3]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l64').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l64').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                      switch (arrayResposta[4]) {
                        case 0:
                          break;
                        case 1:
                          document.getElementById('l65').style.color = 'gray';
                          break;
                        case 2:
                          document.getElementById('l65').style.color = 'green';
                          break;
                        default:
                          break;        
                      }
                    }
                    errouPalavra(palavraTemp);                
                  } else {

                  }
                  break;
                default:
                break;    
              }
          }
        
      } 
    });
  })
  
  
});

// FUNCOES

function sorteiaPalavra() {
  const tamanhoLista = palavras.length;
  const posicaoMaxima = tamanhoLista - 1;
  const numeroSorteado = Math.floor(Math.random()*posicaoMaxima)
  return palavras[numeroSorteado];
}

function palavraNaLista(palavra) {
  var naLista = false
  palavras.forEach(word=>{
    if (palavra === word.toUpperCase()) {
      naLista = true;
    } 
  })
  return naLista;
}

function checaLetras(l1,l2,l3,l4,l5, palavraSorteada) {
  var arrayLetras = [0,0,0,0,0];
  Array.from(palavraSorteada).forEach((letra,indexLetra)=>{
      if (letra === l1)  {
        if (indexLetra===0) {
          arrayLetras[0] = 2;
        } else {
          arrayLetras[0] = 1;
        } 
      } 
      if (letra === l2)  {
        if (indexLetra===1) {
          arrayLetras[1] = 2;
        } else {
          arrayLetras[1] = 1;
        } 
      }
      if (letra === l3)  {
        if (indexLetra===2) {
          arrayLetras[2] = 2;
        } else {
          arrayLetras[2] = 1;
        } 
      }
      if (letra === l4)  {
        if (indexLetra===3) {
          arrayLetras[3] = 2;
        } else {
          arrayLetras[3] = 1;
        } 
      }
      if (letra === l5)  {
        if (indexLetra===4) {
          arrayLetras[4] = 2;
        } else {
          arrayLetras[4] = 1;
        } 
      }
  })
  return arrayLetras;
}

function acertouPalavra(palavraTemp) {
 // document.getElementById("mensagemFim").style.display = "inline";
 document.getElementById("titulo").innerText = "ACERTOU!";
 mostraPalavra(palavraTemp); 
 allReadOnly();
}

function errouPalavra(palavraTemp) {
 // document.getElementById("mensagemFim").style.display = "inline";
 document.getElementById("titulo").innerText = "ERROU!";
 mostraPalavra(palavraTemp);  
 allReadOnly();
}

function mostraPalavra(palavraTemp) {
  document.getElementById('l11').value= "";  
  document.getElementById('l12').value= ""; 
  document.getElementById('l13').value= ""; 
  document.getElementById('l14').value= ""; 
  document.getElementById('l15').value= "";
  document.getElementById('l21').value= "";  
  document.getElementById('l22').value= ""; 
  document.getElementById('l23').value= ""; 
  document.getElementById('l24').value= ""; 
  document.getElementById('l25').value= "";
  document.getElementById('l31').value= palavraTemp[0];  
  document.getElementById('l32').value= palavraTemp[1];  
  document.getElementById('l33').value= palavraTemp[2];  
  document.getElementById('l34').value= palavraTemp[3];  
  document.getElementById('l35').value= palavraTemp[4];  
  document.getElementById('l31').style.color = 'black';
  document.getElementById('l32').style.color = 'black';
  document.getElementById('l33').style.color = 'black';
  document.getElementById('l34').style.color = 'black';
  document.getElementById('l35').style.color = 'black';
  document.getElementById('l41').value= "";  
  document.getElementById('l42').value= ""; 
  document.getElementById('l43').value= ""; 
  document.getElementById('l44').value= ""; 
  document.getElementById('l45').value= "";
  document.getElementById('l51').value= "";  
  document.getElementById('l52').value= ""; 
  document.getElementById('l53').value= ""; 
  document.getElementById('l54').value= ""; 
  document.getElementById('l55').value= "";
  document.getElementById('l61').value= "";  
  document.getElementById('l62').value= ""; 
  document.getElementById('l63').value= ""; 
  document.getElementById('l64').value= ""; 
  document.getElementById('l65').value= "";
}

function allReadOnly() {
  document.getElementById('l11').readOnly = true;  
  document.getElementById('l12').readOnly = true; 
  document.getElementById('l13').readOnly = true; 
  document.getElementById('l14').readOnly = true; 
  document.getElementById('l15').readOnly = true;
  document.getElementById('l21').readOnly = true;  
  document.getElementById('l22').readOnly = true; 
  document.getElementById('l23').readOnly = true; 
  document.getElementById('l24').readOnly = true; 
  document.getElementById('l25').readOnly = true;
  document.getElementById('l31').readOnly = true;  
  document.getElementById('l32').readOnly = true; 
  document.getElementById('l33').readOnly = true; 
  document.getElementById('l34').readOnly = true; 
  document.getElementById('l35').readOnly = true;
  document.getElementById('l41').readOnly = true;  
  document.getElementById('l42').readOnly = true; 
  document.getElementById('l43').readOnly = true; 
  document.getElementById('l44').readOnly = true; 
  document.getElementById('l45').readOnly = true;
  document.getElementById('l51').readOnly = true;  
  document.getElementById('l52').readOnly = true; 
  document.getElementById('l53').readOnly = true; 
  document.getElementById('l54').readOnly = true; 
  document.getElementById('l55').readOnly = true;
  document.getElementById('l61').readOnly = true;  
  document.getElementById('l62').readOnly = true; 
  document.getElementById('l63').readOnly = true; 
  document.getElementById('l64').readOnly = true; 
  document.getElementById('l65').readOnly = true;
}

function notFirstRow(position) {
  if ((position === 'l11') || (position === 'l21') || (position === 'l31') || (position === 'l41') || (position === 'l51') || (position === 'l61')) {
    return false;
  } else {
    return true;
  }
}

// LISTA DE PALAVRAS

var palavras = ["afude",
"baita",                
"banda",
"bomba",
"bruxa",
"bruxo",
"bucha",
"buena",                
"bueno",
"bugio",
"bugre",                
"butia",
"cacho",
"canga",
"capao",
"carao",                
"capaz",
"cauna",
"chapa", 
"chiar",               
"china",
"chiru",
"chula",
"chulo",
"clavo",                
"cusco",
"dicha",                
"facho",
"faixa",
"flete",                
"funda",
"guria",
"guapa",
"guapo",
"hasta",
"indio",                
"jirau",
"labia",
"legua",
"lomba",
"lonca",
"mamao",  
"maula",                
"merca",
"mossa",                
"pampa",
"pealo", 
"pelar",                
"pelea",
"pingo",
"potro",
"profe",
"pucha",
"quera",
"refri",
"relho",
"rengo",
"sanga",
"selin",
"sorro",                
"super",
"taipa",
"taita", 
"tanso",
"talho",
"taura",
"tento",
"tirao", 
"tombo",               
"trago", 
"trava",               
"tripa",
"trova",
"truco",
"tunda",                
"varar",
"varou",
"varei",
"vazio",
"xucro",
"zaino",
"zarro",
"zarro",
"zunir"];
