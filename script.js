 const COLORS = ['#f9c5d1','#b5ead7','#ffd6a5','#c7b2f5','#a8d8f0','#f4ed80','#d4774a','#7ec8a4'];
  const SHAPES = ['2px','50%','0'];
 
  function spawnConfetti(x, y) {
    const count = 22;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
 
      const angle  = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.6;
      const dist   = 60 + Math.random() * 90;
      const dx     = Math.cos(angle) * dist;
      const dy     = Math.sin(angle) * dist - 60;
      const dr     = (Math.random() - 0.5) * 720 + 'deg';
      const color  = COLORS[Math.floor(Math.random() * COLORS.length)];
      const radius = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const size   = 6 + Math.random() * 6;
 
      el.style.cssText = `
        left: ${x}px; top: ${y}px;
        width: ${size}px; height: ${size}px;
        background: ${color};
        border-radius: ${radius};
        --dx: ${dx}px;
        --dy: ${dy}px;
        --dr: ${dr};
      `;
 
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }
  }
 
  document.querySelectorAll('.egg').forEach(egg => {
    egg.addEventListener('click', e => {
      const r = egg.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      spawnConfetti(cx, cy);
    });
  });

  // Pause marquee on hover
  const cardsContainer = document.querySelector('.cards-container');
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (cardsContainer) {
        cardsContainer.style.animationPlayState = 'paused';
      }
    });
    card.addEventListener('mouseleave', () => {
      if (cardsContainer) {
        cardsContainer.style.animationPlayState = 'running';
      }
    });
  });


var to = 'Bibing!';
var gift_url = '';
var gift_image_url = 'https://static.ticketmaster.ph/images/activity/26ph_bts_f389d58f60e5e0aca6fa3ba46faa9d60.jpg';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    var footer = document.querySelector('.footer');
    if (footer) {
      footer.innerText = "We will try to secure a ticket for you bibing!🌸";
    }
  }, false);
  
  
  
  nametag.innerText = to;
}

init();