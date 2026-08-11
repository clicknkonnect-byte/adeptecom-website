(function(){
  'use strict';
  var head=document.querySelector('.head');
  var onScroll=function(){ if(head) head.classList.toggle('scrolled', window.scrollY>12); };
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var burger=document.querySelector('.burger');
  if(burger&&head){
    burger.addEventListener('click',function(){
      var open=head.classList.toggle('open');
      burger.classList.toggle('open',open);
      burger.setAttribute('aria-expanded',open?'true':'false');
    });
    head.querySelectorAll('.nav-links a').forEach(function(a){
      a.addEventListener('click',function(){head.classList.remove('open');burger.classList.remove('open');});
    });
  }

  var reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window&&reveals.length){
    var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target);}});},{threshold:.14,rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(function(el){ro.observe(el);});
  }else{reveals.forEach(function(el){el.classList.add('in');});}

  var counters=document.querySelectorAll('[data-count]');
  var run=function(el){
    var t=parseFloat(el.getAttribute('data-count')),d=(el.getAttribute('data-decimals')||'0')|0,
        pre=el.getAttribute('data-prefix')||'',suf=el.getAttribute('data-suffix')||'',
        dur=1500,s=performance.now();
    var tick=function(now){var p=Math.min((now-s)/dur,1),e=1-Math.pow(1-p,3),v=t*e;
      el.textContent=pre+v.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d})+suf;
      if(p<1)requestAnimationFrame(tick);
      else el.textContent=pre+t.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d})+suf;};
    requestAnimationFrame(tick);
  };
  if('IntersectionObserver'in window&&counters.length){
    var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);co.unobserve(e.target);}});},{threshold:.5});
    counters.forEach(function(el){co.observe(el);});
  }else{counters.forEach(function(el){el.textContent=(el.getAttribute('data-prefix')||'')+el.getAttribute('data-count')+(el.getAttribute('data-suffix')||'');});}

  var p=new URLSearchParams(location.search);
  if(p.get('sent')==='1'){var ok=document.getElementById('okmsg');if(ok){ok.style.display='block';ok.scrollIntoView({behavior:'smooth',block:'center'});}}
  if(p.get('error')==='1'){var er=document.getElementById('errmsg');if(er){er.style.display='block';}}

  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();

  // rotating headline word
  var rw=document.querySelector('.rot-word');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(rw&&!reduce){
    var words=(rw.getAttribute('data-rotate')||'').split(',').map(function(s){return s.trim();}).filter(Boolean);
    if(words.length>1){
      var i=0;
      setInterval(function(){
        rw.style.opacity='0'; rw.style.transform='translateY(-.42em)';
        setTimeout(function(){
          i=(i+1)%words.length; rw.textContent=words[i];
          rw.style.transform='translateY(.42em)';
          requestAnimationFrame(function(){ rw.style.opacity='1'; rw.style.transform='translateY(0)'; });
        },380);
      },2300);
    }
  }

  // scroll-driven services slideshow
  var swap=document.getElementById('services');
  var track=document.getElementById('swapTrack');
  if(swap&&track&&swap.classList.contains('swap')&&!reduce){
    var cards=[].slice.call(swap.querySelectorAll('.swap-card'));
    var dots=[].slice.call(swap.querySelectorAll('.swap-dot'));
    var numEl=document.getElementById('swapNum');
    if(cards.length>1){
      swap.style.setProperty('--n',cards.length);
      swap.classList.add('ready');
      var cur=-1;
      var setActive=function(i){
        if(i===cur)return; cur=i;
        for(var k=0;k<cards.length;k++){cards[k].classList.toggle('is-active',k===i);}
        for(var d=0;d<dots.length;d++){dots[d].classList.toggle('on',d===i);}
        if(numEl)numEl.textContent=('0'+(i+1)).slice(-2);
      };
      var onSwap=function(){
        var r=track.getBoundingClientRect();
        var total=track.offsetHeight-window.innerHeight;
        if(total<=0){setActive(0);return;}
        var p=(-r.top)/total; if(p<0)p=0; if(p>1)p=1;
        var idx=Math.floor(p*cards.length-1e-6); if(idx<0)idx=0; if(idx>cards.length-1)idx=cards.length-1;
        setActive(idx);
      };
      dots.forEach(function(dot){
        dot.addEventListener('click',function(){
          var i=parseInt(dot.getAttribute('data-i'),10)||0;
          var total=track.offsetHeight-window.innerHeight;
          var y=track.offsetTop+(total*(i+0.5)/cards.length);
          window.scrollTo({top:y,behavior:'smooth'});
        });
      });
      window.addEventListener('scroll',onSwap,{passive:true});
      window.addEventListener('resize',onSwap,{passive:true});
      setActive(0); onSwap();
    }
  }

  // reviews carousel
  var rev=document.querySelector('.reviews');
  if(rev){
    var rtrack=document.getElementById('revTrack');
    var rcards=[].slice.call(rev.querySelectorAll('.rev-card'));
    var rprev=rev.querySelector('.rev-prev'),rnext=rev.querySelector('.rev-next');
    var rdots=document.getElementById('revDots');
    if(rtrack&&rcards.length){
      var ri=0,rtimer=null;
      var vis=function(){var w=window.innerWidth;return w>=900?3:(w>=600?2:1);};
      var maxi=function(){return Math.max(0,rcards.length-vis());};
      var stepw=function(){return rcards[0].getBoundingClientRect().width+20;};
      var draw=function(){
        if(ri>maxi())ri=maxi(); if(ri<0)ri=0;
        rtrack.style.transform='translateX('+(-ri*stepw())+'px)';
        if(rdots){var kids=rdots.children;for(var k=0;k<kids.length;k++){kids[k].classList.toggle('on',k===ri);}}
      };
      var dots=function(){
        if(!rdots)return; rdots.innerHTML=''; var n=maxi()+1;
        for(var i=0;i<n;i++){(function(i){var b=document.createElement('button');b.type='button';
          b.className='rev-dot'+(i===ri?' on':'');b.setAttribute('aria-label','Go to review group '+(i+1));
          b.addEventListener('click',function(){ri=i;draw();restart();});rdots.appendChild(b);})(i);}
      };
      var go=function(d){ri+=d; if(ri>maxi())ri=0; if(ri<0)ri=maxi(); draw();};
      var restart=function(){ if(rtimer)clearInterval(rtimer); if(!reduce)rtimer=setInterval(function(){go(1);},4200); };
      if(rprev)rprev.addEventListener('click',function(){go(-1);restart();});
      if(rnext)rnext.addEventListener('click',function(){go(1);restart();});
      window.addEventListener('resize',function(){dots();draw();},{passive:true});
      dots(); draw(); restart();
    }
  }

  // trailing cursor dot
  var dot=document.querySelector('.cursor-dot');
  var finePointer=window.matchMedia&&window.matchMedia('(pointer:fine)').matches;
  if(dot&&finePointer&&!reduce){
    var mx=window.innerWidth/2,my=window.innerHeight/2,dxp=mx,dyp=my,shown=false;
    window.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;
      if(!shown){shown=true;dot.classList.add('show');}},{passive:true});
    document.addEventListener('mouseleave',function(){dot.classList.remove('show');shown=false;});
    var hoverables='a,button,summary,input,textarea,select,.dcard,.feat,.plan,.res';
    document.addEventListener('mouseover',function(e){if(e.target.closest&&e.target.closest(hoverables))dot.classList.add('big');},{passive:true});
    document.addEventListener('mouseout',function(e){if(e.target.closest&&e.target.closest(hoverables))dot.classList.remove('big');},{passive:true});
    (function loop(){dxp+=(mx-dxp)*0.18;dyp+=(my-dyp)*0.18;
      dot.style.transform='translate('+dxp+'px,'+dyp+'px)';requestAnimationFrame(loop);})();
  }
})();
