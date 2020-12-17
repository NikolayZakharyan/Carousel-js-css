const imgs = document.getElementsByClassName('carousel-img');
let totalImg = imgs.length;
let correctPosition = 0;

let prev = document.querySelector('.prev-div');
let next = document.querySelector('.next-div');
const smallImags = document.getElementsByClassName('small-img');
const smallDiv = document.querySelector('.carousel-small');

const input = document.getElementById('inputUrl');
const btnInput = document.getElementById('inputBtn');

prev.addEventListener('click', () => {
  console.log('prev');

  if (correctPosition == 0) {
    correctPosition = totalImg;
  }
  correctPosition--;
  chngePosition(correctPosition);
});

next.addEventListener('click', () => {
  console.log('next');

  if (correctPosition == totalImg - 1) {
    correctPosition = -1;
  }
  correctPosition++;
  chngePosition(correctPosition);
});

function chngePosition(position) {
  for (let i = 0; i < totalImg; i++) {
    imgs[i].classList.remove('vissible');
    imgs[i].classList.remove('correct-big-img');

    smallImags[i].classList.remove('correct-samall-img');
  }

  imgs[position].classList.add('vissible');
  imgs[position].classList.add('correct-big-img');

  imgs[position].classList.add('vissible');

  smallImags[position].classList.add('correct-samall-img');
}

smallDiv.addEventListener('click', (e) => {
  if ([...smallImags].indexOf(e.target.parentElement) != -1) {
    correctPosition = [...smallImags].indexOf(e.target.parentElement);

    chngePosition(correctPosition);
  }
});

// ============ ADD URL

let imgUrl = `(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`;

btnInput.addEventListener('click', () => {
  let userInput = input.value;

  if (userInput.match(imgUrl)) {
    let div = document.createElement('div');
    div.className = 'carousel-img hidden';
    let img = document.createElement('img');
    img.src = userInput;

    console.log(img);
    div.append(img);

    console.log(div);

    document.querySelector('.carousel-img-conteiner').append(div);
  }
});

// https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg

{
  /* <div class="carousel-img hidden vissible">
<img src="./img/1.jpg" alt="" />
</div> */
}
