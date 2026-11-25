const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const NAV=[['home','Басты'],['about','Онды'],['ondy','Онды картасы'],['ba','Қазіргі/Болашақ'],['agashty','Ағашты'],['spring','Киіз үй'],['games','Ойындар'],['route','Саяхат'],['gallery','Галерея'],['research','Зерттеу'],['survey','Сауалнама'],['eco','Эко'],['econ','Экономика'],['time','Кезеңдер'],['plan','Жоспар']];
$('#links').innerHTML=NAV.map(n=>`<a href="#${n[0]}">${n[1]}</a>`).join('');
const L={ru:{sub1:'Природное наследие села Онды',sub2:'Место, где встречаются природа и традиции',b1:'Начать виртуальное путешествие',b2:'Смотреть 3D-комплекс',b3:'Познакомиться с проектом',title:'Агашты — новое туристическое направление'},
en:{sub1:'Natural heritage of Ondy village',sub2:'Where nature and tradition meet',b1:'Start virtual journey',b2:'View 3D tourist complex',b3:'Explore the research',title:'Agashty — a new tourist destination'}};
const KK={};$$('[data-i]').forEach(e=>KK[e.dataset.i]=e.textContent);
$('#lang').onchange=e=>$$('[data-i]').forEach(x=>x.textContent=(L[e.target.value]||KK)[x.dataset.i]||KK[x.dataset.i]);
// INTRO
const intro=$('#intro');setTimeout(()=>intro.classList.add('go'),1800);
setTimeout(()=>{$('#introLine').style.opacity=0;setTimeout(()=>{$('#introLine').classList.add('hide');$('#introMain').classList.remove('hide')},1500)},3800);
function enter(id){intro.style.opacity=0;setTimeout(()=>{intro.remove();document.getElementById(id).scrollIntoView()},900)}
// lazy videos
const vio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&e.target.dataset.src){e.target.src=e.target.dataset.src;e.target.removeAttribute('data-src')}}),{rootMargin:'300px'});$$('video[data-src]').forEach(v=>vio.observe(v));
// games
const G=[['Асық ату','Ежелгі қазақ ойыны: асықты нысанаға дәл тигізу. Көздегіштік пен тапқырлыққа тәрбиелейді.'],['Тоғызқұмалақ','Екі адамның ойыны: ұяларға құмалақ таратып, қазан жинау. Логикалық ойлауды дамытады.'],['Арқан тарту','Екі команда арқанды қарсы тартады. Бірлік пен төзімділікке тәрбиелейді.'],['Қазақ күресі','Дәстүрлі күрес: қарсыласты жығу. Адалдық пен шыдамдылықты үйретеді.'],['Дәстүрлі садақ ату','Нысанаға дәл көздеу. Қауіпсіздік ережесін қатаң сақтауды қажет етеді.'],['Атпен серуендеу','Арнайы маршрутта нұсқаушы бақылауымен жүреді.']];
$('#gcards').innerHTML=G.map(g=>`<div class="card"><b>${g[0]}</b></div>`).join('');$$('#gcards .card').forEach((c,i)=>c.onclick=()=>alert((window.agTranslate||String)(G[i][0])+'\n\n'+(window.agTranslate||String)(G[i][1])));
const ga=$('#gAsyk'),gx=ga.getContext('2d');let hits=0,shots=0,tgt=150;(function(){const f=()=>{gx.clearRect(0,0,360,200);gx.fillStyle='#e6b655';[40,26,12].forEach((r,i)=>{gx.fillStyle=i%2?'#fff':'#c0392b';gx.beginPath();gx.arc(tgt,100,r,0,7);gx.fill()});tgt=150+Math.sin(Date.now()/500)*110;requestAnimationFrame(f)};f()})();
ga.onclick=e=>{const r=ga.getBoundingClientRect(),x=(e.clientX-r.left)*360/r.width,y=(e.clientY-r.top)*200/r.height;shots++;if(Math.hypot(x-tgt,y-100)<40)hits++;$('#asykScore').textContent=`Дәл тию: ${hits} / ${shots}`};
let tk=Array(9).fill(9);function tkr(){$('#tk').innerHTML=tk.map((v,i)=>`<button>${v}</button>`).join('');$$('#tk button').forEach((b,i)=>b.onclick=()=>{let n=tk[i];if(!n)return;tk[i]=0;let j=i;if(n==1){j=(i+1)%9;tk[j]++}else for(let k=0;k<n;k++){j=(i+k)%9;tk[j]++}$('#tkMsg').textContent=`${n} құмалақ келесі ұяларға таратылды (таныстыру нұсқасы).`;tkr()})}tkr();

// research
const R=[['Өзектілігі','Маңғыстаудың ауылдық аймақтарында, соның ішінде Онды ауылының маңындағы Ағашты жерінде табиғи-рекреациялық әлеует жоғары, бірақ оны жүйелі зерттеп, туристік айналымға енгізу тетіктері толық қалыптаспаған.'],['Ғылыми болжам','Егер Ағашты жерінің табиғи және этномәдени ресурстары ғылыми негізде зерттеліп, қажетті инфрақұрылыммен қамтамасыз етілсе, онда бұл аумақ Онды ауылының жаңа туристік орталығына айналып, ауыл экономикасын әртараптандыруға және қосымша табыс әкелуге мүмкіндік береді.'],['Зерттеу мақсаты','Ағаштының туристік әлеуетін зерделеп, оны экологиялық-этнографиялық және отбасылық демалысқа арналған жаңа туристік бағыт ретінде дамытудың ғылыми-практикалық моделін ұсыну.'],["Зерттеу нысаны", "Маңғыстау ауданы, Онды ауылы маңындағы Ағашты жері."],["Зерттеу пәні", "Ағашты жерінің табиғи-рекреациялық әлеуеті және оны этно-экологиялық туризмде пайдалану тиімділігі."],['Ғылыми жаңалығы','Ағашты жерін жеке демалыс нүктесі ретінде емес, табиғат, экология, этномәдениет, ұлттық спорт, ауыл кәсіпкерлігі мен балалар туризмі өзара тоғысқан біртұтас туристік экожүйе ретінде модельдеп ұсыну.'],['Қорытынды','Ауыл экономикасы, жұмыспен қамту, инвестициялық тартымдылық, мәдени жаңғыру, табиғатты сақтау және ауылдық туризм.']];
$('#rs').innerHTML=R.map(r=>`<div class="card"><b>${r[0]}</b><p class="small">${r[1]}</p></div>`).join('');
const M=[['Бақылау','Жер бедері мен нысандарды бағалау.'],['Фотографиялық әдіс','Видео мен фото арқылы табиғатты тіркеу.'],['Картографиялық әдіс','Маршруттарды картаға белгілеу.'],['Сауалнама','Қоғамдық сұранысты анықтау.'],['Салыстырмалы әдіс','Басқа ауылдық бағыттармен салыстыру.'],['Жобалау','Кешен макеті мен құрылымын әзірлеу.']];
$('#meth').innerHTML=M.map(m=>`<div class="card" onclick="this.querySelector('p').classList.toggle('hide')"><b>${m[0]}</b><p class="small hide">${m[1]}</p></div>`).join('');
// eco
const E=['Қоқыс тастамау','Бұлақ суын ластамау','Өсімдіктерді қорғау','Табиғи жер бедерін бұзбау','Автокөлікті арнайы орындарға қою','Су ресурстарын бақылау','Өрт қауіпсіздігін сақтау','Санитарлық талаптарды орындау'];
$('#ecoc').innerHTML=E.map(e=>`<div class="card" onclick="this.style.background='rgba(74,168,181,.3)'">✅ ${e}</div>`).join('');
const Q=[['Қоқыспен не істейсіз?',['Бұлаққа тастаймын','Сұрыптау орнына саламын','Тастың астына қоямын'],1],['Көлікті қайда қоясыз?',['Арнайы орынға','Бұлақ жағасына','Өсімдік үстіне'],0],['Бұлақ суына қатысты дұрыс әрекет?',['Ыдыс жуу','Ластамау','Сабын қосу'],1],['Өрт қауіпсіздігі?',['Рұқсат етілген жерде ғана от жағу','Құрғақ шөпте от жағу','Темекіні тастау'],0],['Өсімдіктерге қалай қарайсыз?',['Жұлып аламын','Қорғаймын','Таптаймын'],1]];
let qi=0,sc=0;function qz(){if(qi>=Q.length){$('#quiz').innerHTML=`<h3>Нәтиже: ${sc}/${Q.length}</h3>`+(sc>=4?'<input id="nm" placeholder="Атыңыз"><button onclick="cert()">Сертификат алу</button>':'<button onclick="qi=0;sc=0;qz()">Қайта өту</button>');return}
 const q=Q[qi];$('#quiz').innerHTML=`<h3>«Мен — жауапты туристпін» · ${qi+1}/${Q.length}</h3><p>${q[0]}</p>`+q[1].map((o,i)=>`<button onclick="ans(${i})">${o}</button>`).join('')}
function ans(i){if(i==Q[qi][2])sc++;qi++;qz()}qz();
function cert(){const c=$('#cert');c.classList.remove('hide');c.innerHTML=`<h2 style="color:#8a5a12">СЕРТИФИКАТ</h2><p id="certName"></p><h3>«Ағаштының табиғат қорғаушысы»</h3><p>Виртуалды сертификат · AGASHTY 3D · 2026</p><button onclick="window.print()">Басып шығару</button>`;$('#certName').textContent=$('#nm').value||(window.agTranslate||String)('Қатысушы')}
// economy
const EC=['Жаңа жұмыс орындары','Жергілікті гидтер','Ат күтушілер','Аспаздар','Қолөнер шеберлері','Жүргізушілер','Ұлттық тағам өндірісі','Ауыл жастарын туризмге тарту','Жергілікті кәсіпкерлікті дамыту'];
$('#ec').innerHTML=EC.map(e=>`<div class="card">🌱 ${e}</div>`).join('');
// planner
const PT2=['Отбасылық демалыс','Мектеп оқушыларының өлкетану саяхаты','Экотуризм','Этнотуризм','Белсенді демалыс'];
$('#ptype').innerHTML=PT2.map((p,i)=>`<label><input type="radio" name="pt" value="${i}" ${i?'':'checked'}> ${p}</label><br>`).join('');
$('#pact').innerHTML=['Табиғи бұлақ','Этноауыл','Киіз үйге кіру','Экобассейн (жоба)','Ұлттық ойындар','Атпен серуендеу','Садақ ату','Фотозона'].map(k=>`<label><input type="checkbox" value="${k}" checked> ${k}</label><br>`).join('');
$('#pgo').onclick=()=>{const t=PT2[$('input[name=pt]:checked').value],a=$$('#pact input:checked').map(x=>x.value);$('#pout').innerHTML=`<h3>${t}</h3><ol><li>Онды ауылы — жолға шығу</li>${a.map(x=>`<li>${x}</li>`).join('')}<li>Онды ауылына қайту</li></ol><p class="note">Болжамды ұзақтығы 3–5 сағат. Бұл — демонстрациялық үлгі, нақты брондау жүйесі емес.</p>`};

// ---- scenes (concept images, hotspots) ----
const SC={
ondy:{night:0,hs:[['Мектеп',40,43,'Қызыл төбелі мектеп ғимараты — ауыл композициясының басты нысаны.'],['Мешіт',93,48,'Ауылдың шетіндегі мешіт.'],['Ауыл көшелері',50,60,'Ауыл үйлерін байланыстыратын көшелер.'],['Тау бөктерлері',22,18,'Ауыл маңындағы тасты тау бөктерлері.'],['Ағаштыға апаратын жол',60,27,'Дала жолы ауылдан тыс шығады.'],['ОНДЫ АУЫЛЫ',75,72,'Нақты видеоны ашу үшін төмендегі батырманы басыңыз.']]},
agashty:{night:1,hs:[["Табиғи бұлақ", 35, 94, "Табиғи бұлақ сақталады."], ["Ағаш көпір", 36, 76, "Бұлақ үстіндегі жаяу көпір."], ["Үлкен орталық киіз үй", 50, 52, "Кешеннің орталық нысаны."], ["Шағын киіз үйлер", 35, 35, "Қонақтарға арналған киіз үйлер."], ["Ұлттық асхана", 15, 54, "Ашық ұлттық асхана."], ["Экобассейн", 38, 62, "Бұлақтан бөлек жобалық нысан. Су сапасы мен санитарлық талаптар зерттеледі."], ["Атпен серуендеу алаңы", 64, 37, "Арнайы қауіпсіз алаң."], ["Балалар ойын алаңы", 76, 38, "Балаларға арналған ойын және отбасылық демалыс алаңы."], ["Демалыс бастырмасы", 58, 44, "Көлеңкелі демалыс орны."], ["Садақ ату алаңы", 93, 38, "Садақ атуға арналған қауіпсіз жобалық алаң."], ["Жалға беру орны", 72, 59, "Велосипедтер мен квадроциклдерді жалға беру орны."], ["Туристік ақпараттық орталық", 89, 57, "Қонақтарды қабылдау, маршруттар мен қызметтер туралы ақпарат."], ["Санитарлық торап (WC)", 92, 75, "Келушілерге арналған санитарлық торап."], ["АҒАШТЫ фотозонасы", 69, 79, "Жүрек пішінді сәндік арка мен жарықтандырылған жазу — естелік суретке арналған орын."]]},
yurt:{night:1,hs:[['Шаңырақ',50,9,'Киіз үйдің төбесіндегі дөңгелек бөлігі, отбасы мен бірліктің символы.'],['Уық',25,25,'Кереге мен шаңырақты байланыстыратын ағаш бөлік.'],['Кереге',55,48,'Киіз үйдің торкөзді жиналмалы қабырғасы.'],['Домбыра',64,56,'Қазақ халқының дәстүрлі ішекті музыкалық аспабы.'],['Сандық',80,52,'Киім-кешек пен бағалы бұйымдарды сақтауға арналған ағаш жиһаз.'],['Ер-тұрман',94,40,'Атқа мінуге арналған дәстүрлі жабдықтар жиынтығы.'],['Текемет',20,80,'Ұлттық өрнектермен безендірілген киіз төсеніш.'],['Басқұр',40,15,'Киіз үйді бекітуге және безендіруге арналған өрнекті жалпақ бау.'],['Құрақ көрпе',82,40,'Түрлі маталарды үйлестіріп тігетін ұлттық қолөнер бұйымы.'],['Бесбармақ',50,64,'Қазақ халқының ет пен қамырдан дайындалатын дәстүрлі ұлттық тағамы. Құрметті қонақтарға ұсынылатын дастарханның басты тағамдарының бірі.'],['Қазы',31,72,'Жылқы етінен дайындалатын дәстүрлі ұлттық тағам.'],['Бауырсақ',46,53,'Майға пісірілетін дәстүрлі нан тағамы. Қонақжайлылықтың символы.'],['Құрт',72,66,'Сүт өнімінен дайындалып, кептірілетін ұлттық тағам.'],['Ірімшік',38,80,'Сүттен дайындалатын дәстүрлі тағам.'],['Қымыз',58,57,'Бие сүтінен ашытылып дайындалатын дәстүрлі сусын.'],['Құмыра',34,58,'Өрнекті ұлттық құмыра.'],['Астау',60,76,'Тағам ұсынуға арналған ағаш ыдыс.']]}};
$$('.scn').forEach(el=>{const d=SC[el.dataset.scn],pan=el.querySelector('.pan'),inf=el.querySelector('.sinfo'),hs=el.querySelector('.hs');
 hs.innerHTML=d.hs.map((h,i)=>`<button style="left:${h[1]}%;top:${h[2]}%" title="${h[0]}" data-i="${i}"></button>`).join('');
 const rs=()=>{pan.style.transformOrigin='50% 50%';pan.style.transform='scale(1)';inf.classList.add('hide')};
 hs.onclick=e=>{const b=e.target.closest('button');if(!b)return;const h=d.hs[b.dataset.i];pan.style.transformOrigin=h[1]+'% '+h[2]+'%';pan.style.transform='scale(2.3)';inf.classList.remove('hide');inf.innerHTML=`<b>${h[0]}</b><p>${h[3]}</p>`+(el.dataset.scn=='agashty'&&h[0]!='Табиғи бұлақ'?'<em>Ұсынылып отырған жоба</em>':'')};
 const bar=el.nextElementSibling;bar.querySelector('[data-r]').onclick=rs;bar.querySelector('[data-fs]').onclick=()=>el.requestFullscreen&&el.requestFullscreen();
 const n=bar.querySelector('[data-night]');if(n)n.onclick=()=>pan.classList.toggle('night');
 const v=bar.querySelector('[data-vid]');if(v)v.onclick=()=>openVid('v5')});
// compare slider
const RT=['0% — қазіргі табиғат','20% — жаяу жүргінші жолдары','40% — киіз үйлер','60% — демалыс аймақтары','80% — туристік қызметтер','100% — толық туристік кешен (жобалық ұсыныс)'];
const cf=$('#cfut');const stageImages=RT.map((_,i)=>'assets/images/stage-'+i*20+'.jpg');stageImages.forEach(src=>{const im=new Image();im.src=src});$('#rng').oninput=e=>{const v=+e.target.value;cf.src=stageImages[v/20];cf.style.opacity=1;$('#rtxt').textContent=RT[v/20];$('#stageLabel').textContent=v+'%';};$$('[data-stage]').forEach(b=>b.onclick=()=>{$('#rng').value=b.dataset.stage;$('#rng').oninput({target:$('#rng')})});$('#rng').oninput({target:$('#rng')});
// gallery + player
const VL=['v1','v2','v3','v4','v5','v6','v7'];
const VN=['Ағаштының тау бөктерлері','Жасыл тау алқабы','Күннің батуы және ауыл көрінісі','Табиғат аясындағы демалыс','Онды ауылы жоғарыдан','Ағаштыға апаратын жол','Табиғи бұлақ'];
const covers=[1,2,3,3,1,2,2];
const CAT={'Барлығы':VL,'Онды ауылы':['v3','v5'],'Ауылдың жоғарыдан көрінісі':['v5'],'Ағаштыға апаратын жол':['v6'],'Тау бөктерлері':['v1','v2'],'Табиғи бұлақ':['v7'],'Жасыл алқаптар':['v2','v4'],'Табиғат аясындағы демалыс':['v4'],'Күннің батуы':['v3'],'Ағашты табиғаты':['v1','v2','v4','v7']};
$('#gf').innerHTML=Object.keys(CAT).map(c=>`<button>${c}</button>`).join('');
function frame(v,k){return `assets/images/${v}_${k}${['v2','v6'].includes(v)?'_upright':''}.jpg`}
function showPhoto(src){$('#mc').innerHTML=`<img src="${src}" alt="">`;$('#mctl').classList.add('hide');$('#modal').classList.remove('hide')}
function gal(c){$('#gg').innerHTML=CAT[c].map(v=>{const i=VL.indexOf(v);return `<div class="card gi"><img loading="lazy" src="${frame(v,covers[i])}" alt="${VN[i]}"><strong>${VN[i]}</strong><button data-v="${v}">▶ Видеоны көру</button></div>`}).join('');
 $$('#gg .gi').forEach(card=>{const v=card.querySelector('button').dataset.v;card.querySelector('img').onclick=()=>openVid(v);card.querySelector('button').onclick=()=>openVid(v)});
}
$$('#gf button').forEach((b,i)=>b.onclick=()=>gal(Object.keys(CAT)[i]));gal('Барлығы');
$('#gc').innerHTML=['ondy','agashty','yurt-interior'].map(n=>`<div class="card gi"><img src="assets/images/${n}-reference.jpg" alt=""><small>Концептуалды визуализация</small></div>`).join('');
$$('#gc img').forEach(i=>i.onclick=()=>{$('#mc').innerHTML=`<img src="${i.src}" alt="">`;$('#mctl').classList.add('hide');$('#modal').classList.remove('hide')});
let vi=0;const mv=()=>$('#mc video');
function openVid(v){vi=VL.indexOf(v);$('#mc').innerHTML=`<video src="assets/videos/${v}.mp4" autoplay playsinline></video>`;$('#mctl').classList.remove('hide');$('#modal').classList.remove('hide');const m=mv();m.ontimeupdate=()=>$('#mbar').value=m.currentTime/(m.duration||1)*1000}
$('#mp').onclick=()=>openVid(VL[(vi+6)%7]);$('#mn').onclick=()=>openVid(VL[(vi+1)%7]);$('#mpl').onclick=()=>{const m=mv();m.paused?m.play():m.pause()};
$('#mm').onclick=()=>{const m=mv();m.muted=!m.muted;$('#mm').textContent=m.muted?'🔇':'🔊'};$('#mbar').oninput=e=>{const m=mv();m.currentTime=e.target.value/1000*m.duration};$('#mf').onclick=()=>mv().requestFullscreen&&mv().requestFullscreen();
function closeM(){$('#modal').classList.add('hide');$('#mc').innerHTML=''}
// timeline
const T=['Ағашты аумағын зерттеу','Табиғи нысандарды картаға түсіру','Туристік маршрут әзірлеу','Жерді абаттандыру','Киіз үйлер мен демалыс орындарын ұйымдастыру','Ұлттық ойындар алаңын құру','Атпен серуендеу бағытын белгілеу','Ақпараттық белгілер орнату','Экологиялық қауіпсіздік жүйесін енгізу','Туристерді қабылдауды бастау'];
$('#tl').innerHTML=T.map((t,i)=>`<button>${['I','II','III','IV','V','VI','VII','VIII','IX','X'][i]} кезең — ${t}</button>`).join('');
$$('#tl button').forEach((b,i)=>b.onclick=()=>{$$('#tl button').forEach((x,j)=>x.classList.toggle('done',j<=i));$('#rng').value=Math.min(100,Math.round((i+1)/2)*20);$('#rng').oninput({target:$('#rng')});$('#ba').scrollIntoView({behavior:'smooth'})});
