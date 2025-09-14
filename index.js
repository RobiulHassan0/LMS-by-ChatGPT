// Mobile menu toggle
  const mobileBtn = document.getElementById('mobileBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileBtn && mobileBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));

  // Course detail modal (simple in-page modal)
  const viewBtns = document.querySelectorAll('.viewBtn');
  viewBtns.forEach(btn => btn.addEventListener('click', (e)=> openCourseModal(e)));

  function openCourseModal(e){
    const card = e.target.closest('article');
    const title = card.getAttribute('data-title') || card.querySelector('h3').innerText;
    const price = card.getAttribute('data-price') || '';
    const desc = card.getAttribute('data-desc') || '';
    const modal = createModal(title, price, desc);
    document.body.appendChild(modal);
    setTimeout(()=> modal.classList.add('opacity-100'), 10);
  }

  function createModal(title, price, desc){
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/40 flex items-center justify-center z-50 opacity-0 transition-opacity';
    overlay.innerHTML = `\n      <div class="bg-white rounded-xl max-w-2xl w-full p-6">\n        <div class=\"flex items-start justify-between gap-4\">\n          <div>\n            <h3 class=\"text-xl font-semibold\">${title}</h3>\n            <div class=\"text-sm text-slate-600 mt-2\">${desc}</div>\n            <div class=\"mt-4 text-indigo-600 font-bold\">${price}</div>\n          </div>\n          <div><button id=\"closeModal\" class=\"px-3 py-2 rounded border\">Close</button></div>\n        </div>\n        <div class=\"mt-4\">\n          <a href=\"login.html\" class=\"inline-block px-4 py-2 rounded bg-indigo-600 text-white\">এনরোল করতে লগইন করুন</a>\n        </div>\n      </div>\n    `;
    overlay.addEventListener('click', (ev)=>{ if(ev.target === overlay) closeModal(overlay); });
    overlay.querySelector('#closeModal').addEventListener('click', ()=> closeModal(overlay));
    return overlay;
  }
  function closeModal(node){ node.classList.remove('opacity-100'); setTimeout(()=> node.remove(), 200); }

  // Show 12 courses toggle
  const show12 = document.getElementById('show12');
  const more = document.getElementById('moreCourses');
  show12.addEventListener('click', ()=> { more.classList.toggle('hidden'); show12.innerText = more.classList.contains('hidden') ? '১২ টি দেখাও' : 'কম দেখাও'; });

  // Testimonials carousel simple
  const slides = document.querySelector('#slides > div');
  const total = slides ? slides.children.length : 0;
  let idx = 0;
  document.getElementById('next').addEventListener('click', ()=> { idx = (idx+1)%total; slides.style.transform = `translateX(-${idx*100}%)`; });
  document.getElementById('prev').addEventListener('click', ()=> { idx = (idx-1+total)%total; slides.style.transform = `translateX(-${idx*100}%)`; });
  setInterval(()=> { idx = (idx+1)%total; slides.style.transform = `translateX(-${idx*100}%)`; }, 6000);

  // Animated counters
  const counters = document.querySelectorAll('[data-target]');
  const animateCounters = ()=>{
    counters.forEach(el=>{
      const target = +el.getAttribute('data-target');
      const step = Math.ceil(target/120);
      let cur = 0;
      const t = setInterval(()=>{
        cur += step;
        if(cur >= target){ el.innerText = target.toLocaleString('en-US'); clearInterval(t); }
        else el.innerText = cur.toLocaleString('en-US');
      },12);
    });
  };
  // trigger when stats in view
  const statsSection = document.getElementById('stats');
  const obs = new IntersectionObserver((entries)=>{ if(entries[0].isIntersecting){ animateCounters(); obs.disconnect(); } }, {threshold:0.4});
  statsSection && obs.observe(statsSection);

  // contact form demo behavior
  const contactForm = document.getElementById('contactForm');
  contactForm && contactForm.addEventListener('submit', (e)=>{ e.preventDefault(); document.getElementById('formMsg').innerText = 'ধন্যবাদ — মেসেজ পাঠানো হয়েছে.'; contactForm.reset(); setTimeout(()=> document.getElementById('formMsg').innerText = '', 4000); });

  // preview button demo
  document.getElementById('previewBtn').addEventListener('click', ()=> alert('প্রিভিউ ডেমো — থিমে কাস্টম প্রিভিউ পেজ থাকবে'));

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=> a.addEventListener('click', function(e){ e.preventDefault(); const t = document.querySelector(this.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth', block:'start'}); }));
