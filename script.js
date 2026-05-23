'use strict';

/* ── 1. TRANSLATIONS ── */
const LANG = {
  sq:{
    n_home:'Ballina',n_gal:'Galeria',n_vid:'Videot',n_ab:'Rreth Meje',n_ig:'Instagram',n_ct:'Kontakti',
    h_eye:'Fotograf — Kaçanik, Kosovë',
    h_tag:'Çdo kornizë — një histori e përjetshme.',
    h_b1:'Shfleto Galerinë',h_b2:'Na Kontaktoni',h_scroll:'Zbulo',
    s1:'Klientë të Lumtur',s2:'Vite Përvojë',s3:'Momente të Fotografuara',
    g_eye:'Galeria e Fotografive',
    g_title:'Ku çdo moment bëhet art i përjetshëm',
    g_sub:'Secila fotografi mban brenda saj një emocion të vërtetë — gëzimin, lotët, buzëqeshjen e fshehtë. Fotografoi nga historia juaj.',
    g_note:'Gjej edhe më shumë punë të mia në Instagram',
    cap1:'Pak nga puna jonë për @nehatbulzaofficial / modele @elsaneziri.',
    cap2:'Momente të bukura nga dasma e këtij qifti të lumtur..',
    cap3:'Një gërshetim perfekt mes elegancës, stilit dhe emocioneve.',
    cap4:'Momente magjike dhe emocione të pastërta.',
    cap5:'Klas, madhështi dhe një dashuri që ndriqon fotografinë.',
    cap6:'Një set fotografishë plot finesë dhe romancë.',
    v_eye:'Punët në Video',v_title:'Kamera që tregon histori',
    v_sub:'Filma dasmore dhe artistike me cilësi kinematografike — çdo kuadër tregon historinë tuaj unike.',
    v1:'Video 1 — Video Reklama për elektroprush - @elektroinstalues_prushi .',v2:'Video 2 — Dasma... Fillimi i një historie të pafundë.',v3:'Video 3 — Video Reklama per Restaurant Beg - @begrestaurant .',
    v_note:'Njësoj si me fotot — gjej edhe më shumë punë të mia në Instagram',
    ab_eye:'Rreth Meje',ab_h:'Pasioni im — Fotografia',
    ab_p1:'Jam Nderim Kurtaj, fotograf dhe kinematograf me bazë në Kaçanik, fshati Doganaj. Specializohem në fotografi dasmorësh, portrete artistike dhe filma dasmorë me cilësi kinematografike.',
    ab_p2:'Besoj se çdo moment ka bukurinë e vet të veçantë — detyra ime është ta ngrij atë përjetësisht, duke ruajtur emocionet dhe detajet që e bëjnë atë moment të paharrueshëm.',
    ab_p3:'Me mbi 12 vite përvojë dhe sy të mprehtë për detaje, sjell çdo vizion të klientit në jetë me profesionalizëm, ngrohtësi dhe dashuri për artin.',
    sk1:'Fotografi Dasmorësh',sk2:'Portrete',sk3:'Film Dasmorësh',sk4:'Fotografi Artistike',sk5:'Editim',sk6:'Kinematografi',
    ig_title:'Shiko punën tonë të fundit',
    ct_eye:'Kontakti',ct_title:'Le të punojmë bashkë',ct_sub:'Rezervoni seancën tuaj sot — dasma, portrete, projekte artistike.',
    ct_ph:'Telefoni',ct_ig:'Hap Instagram ↗',ct_loc:'Vendndodhja',ct_map:'Hap në Maps ↗',
    cf_title:'Dërgoni një mesazh',cf_sub:'Plotësoni formularin dhe ne do t\'ju kontaktojmë sa më shpejt.',
    cf_name:'Emri',cf_surn:'Mbiemri', cf_tel:'Nr. Telefoni', cf_cont:'Email (Opsionale)',cf_msg:'Mesazhi', cf_send:'Dërgoni Mesazhin ↗',
    sp_title:'Si dëshironi ta dërgoni?',sp_wa:'Dërgo me WhatsApp',sp_vb:'Dërgo me Viber',sp_cancel:'Anulo',
    ft_copy:'© 2025 — Të gjitha të drejtat e rezervuara.'
  },
  en:{
    n_home:'Home',n_gal:'Gallery',n_vid:'Videos',n_ab:'About',n_ig:'Instagram',n_ct:'Contact',
    h_eye:'Photographer — Kaçanik, Kosovo',
    h_tag:'Every frame — a timeless story.',
    h_b1:'Browse Gallery',h_b2:'Get in Touch',h_scroll:'Discover',
    s1:'Happy Clients',s2:'Years Experience',s3:'Frozen Moments',
    g_eye:'Photo Gallery',
    g_title:'Where every moment becomes timeless art',
    g_sub:'Each photograph carries a true emotion — joy, tears, a hidden smile. I don\'t just photograph people. Photos from your story.',
    g_note:'Find even more of my work on Instagram',
    cap1:'A glimpse of our work for @nehatbulzaofficial featuring model @elsaneziri.',
    cap2:'Beautiful moments from this happy couple’s wedding day.',
    cap3:'A perfect blend of elegance, style, and emotion.',
    cap4:'Magical moments filled with pure emotion.',
    cap5:'Class, elegance, and a love that lights up every photograph.',
    cap6:'A photo collection filled with sophistication and romance.',
    v_eye:'Video Work',v_title:'A camera that tells stories',
    v_sub:'Wedding and artistic films with cinematic quality — every frame tells your unique story.',
    v1:'Video 1 — Promotional video for Elektroprush - @elektroinstalues_prushi.',v2:'Video 2 — A wedding... the beginning of an endless story.',v3:'Video 3 — Promotional video for Restaurant Beg - @begrestaurant .',
    v_note:'Just like the photos — find even more of my work on Instagram',
    ab_eye:'About Me',ab_h:'My passion — Photography',
    ab_p1:'I am Nderim Kurtaj, a photographer and filmmaker based in Kaçanik, village of Doganaj. I specialise in wedding photography, artistic portraits and wedding films with cinematic quality.',
    ab_p2:'I believe every moment holds its own unique beauty — my task is to freeze it forever, preserving the emotions and details that make that moment unforgettable.',
    ab_p3:'With over 12 years of experience and a sharp eye for detail, I bring every client\'s vision to life with professionalism, warmth and a love of the art.',
    sk1:'Wedding Photography',sk2:'Portraits',sk3:'Wedding Film',sk4:'Artistic Photography',sk5:'Editing',sk6:'Cinematography',
    ig_title:'See our latest work',
    ct_eye:'Contact',ct_title:"Let's work together",ct_sub:'Book your session today — weddings, portraits, artistic projects.',
    ct_ph:'Phone',ct_ig:'Open Instagram ↗',ct_loc:'Location',ct_map:'Open in Maps ↗',
    cf_title:'Send a message',cf_sub:'Fill in the form and we will get back to you as soon as possible.',
    cf_name:'First name',cf_surn:'Last name', cf_tel:'Phone Number',cf_cont:'Email (Optional)',cf_msg:'Message', cf_send:'Send Message ↗',
    sp_title:'How would you like to send it?',sp_wa:'Send via WhatsApp',sp_vb:'Send via Viber',sp_cancel:'Cancel',
    ft_copy:'© 2025 — All rights reserved.'
  }
};


/* ── 2. LANGUAGE ── */
let lang = (function(){try{return localStorage.getItem('nk_lang')||'sq'}catch(e){return 'sq'}})();

function applyLang(l){
  lang=l;
  var D=LANG[l];
  document.querySelectorAll('[data-key]').forEach(function(el){
    var k=el.getAttribute('data-key');
    if(D[k]===undefined) return;
    /* Gallery note & video note: re-inject IG branded link */
    if(k==='g_note'||k==='v_note'){
      el.innerHTML=D[k]+'&nbsp;<a class="ig-link" href="https://www.instagram.com/nderim.kurtaj" target="_blank" rel="noopener">Instagram</a>';
      return;
    }
    el.textContent=D[k];
  });
  document.getElementById('lang-lbl').textContent=l==='sq'?'ENG':'SHQ';
  document.documentElement.lang=l==='sq'?'sq':'en';
  try{localStorage.setItem('nk_lang',l)}catch(e){}
}
document.getElementById('lang-btn').addEventListener('click',function(){applyLang(lang==='sq'?'en':'sq')});

/* ── 3. THEME ── */
var theme=(function(){try{return localStorage.getItem('nk_theme')||'dark'}catch(e){return 'dark'}})();
function setTheme(t){
  theme=t;
  document.documentElement.setAttribute('data-theme',t);
  document.getElementById('theme-ico').textContent=t==='dark'?'☀':'☾';
  try{localStorage.setItem('nk_theme',t)}catch(e){}
}
document.getElementById('theme-btn').addEventListener('click',function(){setTheme(theme==='dark'?'light':'dark')});

/* ── 4. HAMBURGER ── */
var ham=document.getElementById('ham'), mob=document.getElementById('mob-menu');
ham.addEventListener('click',function(){
  var open=mob.classList.toggle('open');
  ham.setAttribute('aria-expanded',open);
});
window.closeMob=function(){mob.classList.remove('open');ham.setAttribute('aria-expanded','false')};
document.addEventListener('click',function(e){
  if(!ham.contains(e.target)&&!mob.contains(e.target)) closeMob();
});

/* ── 5. NAV SCROLL SHADOW + ACTIVE LINK ── */
var navEl=document.getElementById('nav');
var secs=Array.from(document.querySelectorAll('section[id]'));
var navAs=document.querySelectorAll('.nav-links a, .mob-menu a');
window.addEventListener('scroll',function(){
  navEl.classList.toggle('scrolled',window.scrollY>10);
  var cur=secs[0].id;
  secs.forEach(function(s){if(window.scrollY>=s.offsetTop-100)cur=s.id});
  navAs.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+cur)});
},{passive:true});

/* Smooth scroll only on anchor clicks */
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var target=document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      var top=target.getBoundingClientRect().top+window.scrollY-68;
      window.scrollTo({top:top,behavior:'smooth'});
    }
  });
});

/* ── 6. SLIDERS ── */
var S={};
function initSliders(){
  document.querySelectorAll('.slider-card').forEach(function(card){
    var f=+card.dataset.frame;
    var slides=card.querySelectorAll('.slide');
    var total=slides.length;
    S[f]={cur:0,total:total};
    var dc=card.querySelector('.sdots');
    slides.forEach(function(_,i){
      var d=document.createElement('button');
      d.className='dot'+(i===0?' active':'');
      d.setAttribute('aria-label','Slide '+(i+1));
      d.addEventListener('click',function(){go(f,i)});
      dc.appendChild(d);
    });
  });
}
window.mv=function(f,dir){
  var s=S[f];if(!s)return;
  go(f,(s.cur+dir+s.total)%s.total);
};
function go(f,n){
  var s=S[f];if(!s)return;
  var card=document.querySelector('.slider-card[data-frame="'+f+'"]');
  var slides=card.querySelectorAll('.slide');
  var dots=card.querySelectorAll('.dot');
  slides[s.cur].classList.remove('active');
  if(dots[s.cur]) dots[s.cur].classList.remove('active');
  s.cur=n;
  slides[s.cur].classList.add('active');
  if(dots[s.cur]) dots[s.cur].classList.add('active');
}
/* Keyboard arrows */
document.addEventListener('keydown',function(e){
  var h=document.querySelector('.slider-card:hover');
  if(!h)return;
  var f=+h.dataset.frame;
  if(e.key==='ArrowLeft')mv(f,-1);
  if(e.key==='ArrowRight')mv(f,1);
});
/* Touch swipe */
document.querySelectorAll('.slider-card').forEach(function(card){
  var sx=0, f=+card.dataset.frame;
  card.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  card.addEventListener('touchend',function(e){
    var d=sx-e.changedTouches[0].clientX;
    if(Math.abs(d)>40) mv(f,d>0?1:-1);
  });
});

/* ── 7. VIDEO MODAL ── */
var vmodal=document.getElementById('vmodal');
var vplayer=document.getElementById('vplayer');
var vsrc=document.getElementById('vsrc');
var vtitle=document.getElementById('vtitle');
window.openVid=function(src,title){
  vsrc.src=src; vtitle.textContent=title;
  vplayer.load(); vmodal.classList.add('open');
  document.body.style.overflow='hidden';
};
function closeVid(){
  vmodal.classList.remove('open');
  vplayer.pause(); vplayer.currentTime=0;
  document.body.style.overflow='';
}
document.getElementById('vclose').addEventListener('click',closeVid);
vmodal.addEventListener('click',function(e){if(e.target===vmodal)closeVid()});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    if(vmodal.classList.contains('open')) closeVid();
    if(sendPopup.classList.contains('open')) closeSendPopup();
  }
});

/* ── 8. CONTACT FORM + SEND POPUP ── */
var sendPopup=document.getElementById('send-popup');
var spPreview=document.getElementById('sp-preview');
var pendingMsg='';

function buildMessage(){
  var name=(document.getElementById('cf-name').value||'').trim();
  var surname=(document.getElementById('cf-surname').value||'').trim();
  var phone=(document.getElementById('cf-phone').value||'').trim();
  var contact=(document.getElementById('cf-contact').value||'').trim();
  var msg=(document.getElementById('cf-msg').value||'').trim();
  if(!name&&!msg){
    alert(lang==='sq'?'Ju lutem plotësoni të paktën emrin dhe mesazhin.':'Please fill in at least your name and message.');
    return null;
  }
  var full=[];
  if(name||surname) full.push('Emri: '+(name+' '+surname).trim());
  if(phone)         full.push('Telefoni: '+phone);
  if(contact)       full.push('Email: '+contact);
  if(msg)           full.push('Mesazhi: '+msg);
  return full.join('\n');
}

document.getElementById('cf-send-btn').addEventListener('click',function(){
  var txt=buildMessage();
  if(!txt) return;
  pendingMsg=txt;
  /* Show preview line */
  var name=(document.getElementById('cf-name').value||'').trim();
  var d=LANG[lang];
  spPreview.textContent=(lang==='sq'
    ?'Zgjidhni platformën për të dërguar mesazhin tuaj'+(name?' nga '+name:'')+'.'
    :'Choose a platform to send your message'+(name?' from '+name:'')+'.');
  sendPopup.classList.add('open');
  document.body.style.overflow='hidden';
});

function closeSendPopup(){
  sendPopup.classList.remove('open');
  document.body.style.overflow='';
}

document.getElementById('sp-wa-btn').addEventListener('click',function(){
  var encoded=encodeURIComponent(pendingMsg);
  window.open('https://wa.me/38349598899?text='+encoded,'_blank');
  closeSendPopup();
});
document.getElementById('sp-vb-btn').addEventListener('click',function(){
  var encoded=encodeURIComponent(pendingMsg);
  /* Viber deep link */
  window.open('viber://chat?number=%2B38349598899&text='+encoded,'_blank');
  closeSendPopup();
});
document.getElementById('sp-cancel-btn').addEventListener('click',closeSendPopup);
sendPopup.addEventListener('click',function(e){if(e.target===sendPopup)closeSendPopup()});

/* ── 9. SCROLL REVEAL ── */
var ro=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('vis');ro.unobserve(e.target)}
  });
},{threshold:.08});
document.querySelectorAll('.rv').forEach(function(el,i){
  el.style.transitionDelay=(i%4)*70+'ms';
  ro.observe(el);
});

/* ── 10. INIT ── */
setTheme(theme);
applyLang(lang);
initSliders();

/* ── 11. HERO VERTICAL PHOTO STRIPS ── */
(function(){
  var TOTAL = 29;
  var IMG_H = 134; /* image height + gap in px — must match CSS (126px img + 8px gap) */
  var SPEED_PX_PER_SEC = 38; /* comfortable pace, ~38px/s */

  /* Build the image path array [Foto1.png … Foto30.png] */
  var allPhotos = [];
  for(var i = 1; i <= TOTAL; i++){
    allPhotos.push('Fotot_Slider/Foto' + i + '.PNG');
  }

  /* Shuffle helper — Fisher-Yates */
  function shuffle(arr){
    var a = arr.slice();
    for(var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function buildTrack(trackEl, photos){
    /* We need at least enough images to fill the container height × 3
       so the seamless loop is invisible. Repeat the list if necessary. */
    trackEl.innerHTML = '';
    /* Duplicate the list enough times — 3 copies is always sufficient */
    var extended = photos.concat(photos).concat(photos);
    extended.forEach(function(src){
      var img = document.createElement('img');
      img.src = src;
      img.className = 'strip-img';
      img.alt = '';
      img.draggable = false;
      trackEl.appendChild(img);
    });
    return extended.length * IMG_H; /* total height of one full pass (3 copies) */
  }

  /* Two different shuffled orders for visual variety */
  var photosLeft  = shuffle(allPhotos);
  var photosRight = shuffle(allPhotos);

  var trackL = document.getElementById('track-left');
  var trackR = document.getElementById('track-right');
  if(!trackL || !trackR) return;

  var totalHeightL = buildTrack(trackL, photosLeft);
  var totalHeightR = buildTrack(trackR, photosRight);

  /* One-copy height = TOTAL * IMG_H */
  var oneCopyH = TOTAL * IMG_H;

  /* Starting offsets:
     Left  strip starts at 0 → moves DOWN (translateY increases toward 0 from negative)
     Right strip starts at -oneCopyH → moves UP (translateY decreases) */
  var posL = 0;       /* left: start at top of 2nd copy, move +ve (down) */
  var posR = -oneCopyH; /* right: start mid-way, move -ve (up) */

  /* Init transforms */
  trackL.style.transform = 'translateY(-' + oneCopyH + 'px)';
  trackR.style.transform = 'translateY(' + (-oneCopyH) + 'px)';

  /* We use a raw offset variable per strip */
  /* Left scrolls downward (+), so translateY goes from -oneCopyH toward 0, then wraps */
  var offsetL = 0;  /* extra pixels moved downward since last wrap */
  var offsetR = 0;  /* extra pixels moved upward since last wrap */

  var lastTime = null;

  function animate(ts){
    if(lastTime === null) lastTime = ts;
    var dt = (ts - lastTime) / 1000; /* seconds */
    lastTime = ts;
    if(dt > 0.1) dt = 0.1; /* clamp large gaps (tab switch, etc.) */

    var delta = SPEED_PX_PER_SEC * dt;

    /* LEFT — scrolls downward: translateY from -oneCopyH → 0, then reset to -oneCopyH */
    offsetL += delta;
    if(offsetL >= oneCopyH) offsetL -= oneCopyH;
    trackL.style.transform = 'translateY(' + (-oneCopyH + offsetL) + 'px)';

    /* RIGHT — scrolls upward: translateY from -oneCopyH → -2*oneCopyH, then reset */
    offsetR += delta;
    if(offsetR >= oneCopyH) offsetR -= oneCopyH;
    trackR.style.transform = 'translateY(' + (-oneCopyH - offsetR) + 'px)';

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();