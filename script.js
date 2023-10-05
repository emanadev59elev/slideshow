/*document.addEventListener('click', (e) => {

  if (e.target.className == 'comeca') {

    //Dentro deste evento criamos uma função anónima e adicionamos uma variável 'i' que responde por cada passo dado pelo nosso loop

    let i = 1; //Esta variável terá inicialmente o valor de 1

    /*
    Aproveitando a função para pegar também nossa imagem...
    */
/*
    let img = document.querySelector('img');

    const intervalo = setInterval(
      () => { //o intervalo deve ser colocado dentro de uma variável nova

        //esta variável chama uma função anónima que faz o nosso loop dar um passo
        //console.log(i++);

        //A cada passo a imagem será alterada aumentado um valor no nome de sua src...
        img.src = 'img//img' + i++ + '.jpg';

        //se os passos (i) for maior que dez, o loop para
        if (i > 11) {

          //o intervalo é limpo aqui  
          clearInterval(intervalo)
          img.src = '/img/Nature.JPG';

        }
        //isso acontece de 10 em 10s
      }, 1000);




  } else {

    alert('Deves apertar no botão <<começar>>... você clicou no elemento com a tag: ' + e.target.tagName);

  }

})*/

let modal = document.querySelector('dialog');
let entrada_img = document.querySelector('dialog .entrada_img');
let entrada_audio = document.querySelector('dialog .entrada_audio');
let folha = document.querySelector('.folha');
let info = document.querySelectorAll('.info');

let soundName = document.querySelectorAll('dialog ul li');

let sound = new Audio();

soundName.forEach(function(soundName) {

  soundName.style.color = 'orangered';

  soundName.onclick = (e) => {

    let soundSource = e.target.id;

    sound.src = soundSource;

    alert('Você escolheu "' + soundName.textContent + '" como música de fundo!');


    soundName.style.fontWeight = 'bolder';
    soundName.style.color = 'aliceblue';

  }

})

let tocarMusica = (e) => {
  e.play();
}


let url = [];
let imgNum = 0;
let imgPreview = document.querySelector('.img');


document.addEventListener('click', (e) => {

  let classe = e.target.className;

  switch (classe) {
    case 'Btn_criar':
      modal.showModal();
      break;
    case 'fechar':
      modal.close();
      break;

  }

  //Preparando para receber imagem

  if (entrada_img.files && entrada_img.files[0] && classe == 'add') {


    //Se sim...
    // b) Leia a imagem selecionada...
    let reader = new FileReader();
    reader.onload = function(e) {

      url.push(`url(${e.target.result})`);

      imgNum += 1;

      info.forEach(function(info) {
        info.textContent = 'Há ' + imgNum + ' imagens no slide';
      })


      for (var i = 0; i < url.length; i++) {
        imgPreview.style.backgroundImage = url[i];

      }

      // d) Apagar registro do ficheiro...
    }

    // e) considere o valor do input como um dado de URL...
    reader.readAsDataURL(entrada_img.files[0]);

    //Se não foi selecionado nenhum valor no input type='file'...
  }



  if (classe == 'Btn_comecar') {

    let x = 0;
    sound.play();

    let slideAnim = setInterval(
      () => {

        folha.style.backgroundImage = url[x];

        x += 1;

        if (x > imgNum) {
          entrada_img.value = '';
          imgNum = 0;

          info.forEach(function(info) {
            info.textContent = 'A sua apresentação de slides terminou!';


            folha.style.backgroundImage = 'url(/img/InShot_20231004_235226175.jpg)';



          })
        }

      }, 3000)

  }



  if (entrada_img.value == '' && classe == 'fechar') {

    // f) Apresente o seguinte alerta...
    alert('Você não selecionou nenhuma imagem...');
  }


});


/**************/
let list = document.querySelector('ul').addEventListener('click', (e) => {
  
  let cls = e.target.className;

  let actualizarNav = document.querySelectorAll('ul li');
  actualizarNav.forEach(function(actualizarNav) {
    actualizarNav.classList.remove('liHover');
    document.querySelector('section').style.background = '#000';
  })

  let liHover = document.querySelector('ul .' + cls).classList.add('liHover');

  let actualizarMenu = document.querySelectorAll('section div');
  actualizarMenu.forEach(function(actualizarMenu) {
    actualizarMenu.hidden = true;
  })

  let clickedItem = document.querySelector('section .' + cls).hidden = false;
  
  document.querySelector('section').style.background = '#202020';

})