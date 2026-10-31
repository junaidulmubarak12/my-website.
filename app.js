
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
if(window.top!==window.self)document.documentElement.style.display="none"; // the CSP cannot forbid framing on GitHub Pages, so hide the page if it is framed
/* Anything read from storage, the network or a link is untrusted. These helpers turn it into plain, bounded values. */
const N=(v,d=0)=>(typeof v==="number"||typeof v==="string")&&v!==""&&Number.isFinite(+v)?+v:d;
const S_=(v,n)=>typeof v==="string"?v.slice(0,n):"";
const CL=(v,a,b,d)=>{v=N(v,NaN);return Number.isFinite(v)?Math.min(b,Math.max(a,v)):d};
const SITEV=typeof SITE!=="undefined"&&SITE&&typeof SITE==="object"?SITE:{};
const httpsUrl=u=>{try{const x=new URL(String(u));return x.protocol==="https:"?x.href:""}catch(e){return ""}};
const REV={name:S_(SITEV.reviewer,60),role:S_(SITEV.reviewerRole,80),date:S_(SITEV.reviewDate,30),contact:S_(SITEV.contact,120),owner:S_(SITEV.owner,60),feedback:httpsUrl(SITEV.feedbackUrl)};
const IMG=Object.fromEntries(Array.from({length:15},(_,i)=>[i+1,"img/stage-"+(i+1)+".jpg"]));
const TH=Object.fromEntries(Array.from({length:15},(_,i)=>[i+1,"img/t-"+(i+1)+".jpg"]));
const ST=[
{n:1,t:"Delayed dormancy",ni:"Apply before green tip:",i:"Horticultural mineral oil (2 L)",c:"Prune and train, keep the orchard clean, ensure drainage, stake young trees."},
{n:2,t:"Green tip",fn:"Skip fungicide if the weather stays dry for the next 7 days. Spray before the onset of rains (a full day or more):",f:"Mancozeb 75WP (300g)|Captan 50WP (300g)|Propineb 70WP (300g)|Zineb 75WP (300g)|Metiram 70WG (300g)",c:"Fertilizer: well-decomposed FYM with 1/3 urea, full DAP and 1/2 MOP. If a tree fails to leaf out, inspect its roots at once. Avoid injury to the collar. Ensure drainage."},
{n:3,t:"Tight cluster",fn:"Skip fungicide if dry for the next 7 days. If rain of a full day or more is forecast, spray before it begins:",f:"Mancozeb 75WP (300g)|Captan 50WP (300g)|Propineb 70WP (300g)|Zineb 75WP (300g)|Metiram 70WG (300g)|Mancozeb 75WG (300g)",c:"Inspect the orchard regularly to catch early diseases and overwintering pests."},
{n:4,t:"Pink bud",fn:"Crucial stage for primary scab. If the weather is dry, spray when most flowers are at pink stage, to avoid spraying in early flowering:",f:"Zineb 68% + Hexaconazole 5% (125g)|Metiram 55% + Pyraclostrobin 5% 60WG (100g)|Dodine 65WP (60g)|Dodine 40SC (90ml)|Tebuconazole 6.7% + Captan 26.9% 33.6SC (250ml)|Tebuconazole 38.9% SC (40ml)|Chlorothalonil 40% + Difenoconazole 4% 44SC (180ml)|Mancozeb 63% + Carbendazim 12% WP (250g)",ni:"Need based. If the oil spray was missed: Chlorpyriphos 20EC (100ml). For 2 or more thrips per flower, or leaf roller: Thiacloprid 21.7SC (40ml).",c:"Do not let water stand, remove crop debris, place 3–4 bee hives per hectare at 5–10% bloom, boron foliar spray (1–1.5 g/litre) if needed."},
{n:5,t:"Flowering",fn:"Spraying is not advisable during flowering. Only if 10 days have passed since the last fungicide and rain is forecast, spray one of:",f:"Mancozeb 75WP (300g)|Captan 50WP (300g)|Propineb 70WP (300g)|Zineb 75WP (300g)|Metiram 70WG (300g)|Mancozeb 75WG (300g)",c:"Spray in mist form and never wash the trees. Put pheromone traps (8–10 per hectare) to monitor the adult apple leaf blotch miner. Mow weeds to keep bees on the trees."},
{n:6,t:"Petal fall (60–70%)",fn:"Spray one of these before rains:",f:"Difenoconazole 25EC (30ml)|Flusilazole 40EC (20ml)|Penconazole 10EC (50ml)|Fluxapyroxad 75g/l + Difenoconazole 50g/l SC (30ml)|Trifloxystrobin 25% + Tebuconazole 50% 75WG (40g)|Fluopyram 17.7% + Tebuconazole 17.7% 400SC (50ml)|Trifloxystrobin 10% + Difenoconazole 12.25% + Sulphur 3% SC (90ml)",ni:"Insects, need based:",i:"Neem oil 1500 ppm (300ml)|Chlorpyriphos 20EC (100ml)|Quinalphos 25EC (100ml)",nm:"Mites, when 4–5 per leaf:",m:"Etoxazole 10SC (110ml)|Hexythiazox 5.45EC (40ml)|Spiromesifen 22.9SC (40ml)|Cyenopyrafen 30SC (30ml)",c:"Scout the orchard, especially high-density plantings, and check the lower side of leaves. Remove all scab-infected leaves before the rains start. Boron (1–1.5 g/litre) if not done at pink bud."},
{n:7,t:"Fruitlet",fn:"Spray one of these before rains:",f:"Zineb 68% + Hexaconazole 5% (125g)|Dodine 65WP (60g)|Dodine 40SC (90ml)|Fluxapyroxad 250g/l + Pyraclostrobin 250g/l 500SC (20ml)|Tebuconazole 6.7% + Captan 26.9% 33.6SC (250ml)|Pyraclostrobin 12.8% + Boscalid 25.2% WG (30g)|Tebuconazole 38.9% SC (40ml)|Mancozeb 63% + Carbendazim 12% WP (250g)",ni:"Insects:",i:"Quinalphos 25EC (100ml)|Chlorpyriphos 20EC (100ml)|Thiacloprid 21.7SC (40ml)",nm:"Mites, when more than 5 per leaf:",m:"Hexythiazox 5.45EC (40ml)|Spiromesifen 22.9SC (40ml)",c:"Remove scab-infected fruits and shoots with powdery mildew. Cut orchard grass. Whitewash trunks (1 kg lime + 300 g copper sulphate + 250 g glue in 10 L water). Where fruit borer is found, use pheromone traps: 8–10 per hectare to monitor, 40 per hectare to trap."},
{n:8,t:"Fruit development I",fn:"If rain is forecast, spray one of:",f:"Mancozeb 75WP (300g)|Captan 50WP (300g)|Propineb 70WP (300g)|Zineb 75WP (300g)|Ziram 80WP (200g)|Metiram 70WG (300g)",ni:"Insects, need based:",i:"Neem oil 1500 ppm (300ml), then after 4 days Lecanicillium lecanii 1.15% WP (500g)|Chlorpyriphos 20EC (100ml)|Quinalphos 25EC (100ml)",nm:"Mites, when more than 10 per leaf:",m:"Hexythiazox 5.45EC (40ml)|Spiromesifen 22.9SC (40ml)",c:"Do not spray the bio-agent where silk-worm rearing is done. Second fertilizer dose (1/3 urea, 1/2 MOP). Calcium chloride foliar spray 3–4 g/litre. Remove powdery mildew shoots, mulch in dry hot weather, whitewash trunks."},
{n:9,t:"Fruit development II",fn:"If rain is forecast, spray one of:",f:"Difenoconazole 25EC (30ml)|Flusilazole 40EC (20ml)|Penconazole 10EC (50ml)|Trifloxystrobin + Tebuconazole 75WG (40g)|Fluopyram 17.7% + Tebuconazole 17.7% 400SC (50ml)|Fluxapyroxad 250g/l + Pyraclostrobin 250g/l 500SC (20ml)|Fluxapyroxad 75g/l + Difenoconazole 50g/l SC (30ml)|Chlorothalonil 40% + Difenoconazole 4% 44SC (180ml)|Mancozeb 63% + Carbendazim 12% WP (250g)|Trifloxystrobin 10% + Difenoconazole 12.25% + Sulphur 3% SC (90ml)",ni:"Insects:",i:"Chlorpyriphos 20EC (100ml)|Quinalphos 25EC (100ml)|Thiacloprid 21.7SC (40ml)|Summer spray oil (750ml)",nm:"Mites:",m:"Hexythiazox 5.45EC (40ml)|Fenazaquin 10EC (40ml)|Spiromesifen 22.9SC (40ml)|Propargite 42% + Hexythiazox 2% EC (100ml)|Etoxazole 10SC (110ml)|Summer spray oil (750ml)",c:"Second calcium chloride spray (3–4 g/litre). If a tree’s leaves fade or look different from similar trees, inspect roots and collar for rot, scrape dead wood and follow the package of practices. Irrigate as needed; de-weed tree basins."},
{n:10,t:"Fruit development III",fn:"If rain is forecast, spray one of these before the rains:",f:"Mancozeb 75WP (300g)|Zineb 75WP (300g)|Ziram 80WP (200g)|Ziram 27SC (600ml)|Chlorothalonil 75WP (150g)|Mancozeb 75WG (300g)",ni:"Insects, need based:",i:"Chlorpyriphos 20EC (100ml)|Quinalphos 25EC (100ml)|Thiacloprid 21.7SC (40ml)|Neem oil 1500 ppm (300ml), then after 4 days Lecanicillium lecanii or Metarhizium anisopliae (500g)",nm:"Mites, when more than 10 per leaf:",m:"Fenazaquin 10EC (40ml)|Cyenopyrafen 30SC (30ml)|Etoxazole 10SC (110ml)",c:"Avoid spraying under wet and hot conditions; it can burn the leaves. Keep mite and aphid numbers low to avoid Alternaria leaf blotch and sooty mould. Fruit fly: methyl eugenol traps, 25–40 per hectare. Third calcium chloride spray, last 1/3 urea, potassium sulphate 4–5 g/litre for colour if needed."},
{n:11,t:"Fruit development IV",fn:"If Alternaria leaf blotch or scab is present, spray one of:",f:"Zineb 68% + Hexaconazole 4% 72WP (125g)|Hexaconazole 5EC (50ml)|Myclobutanil 10WP (70g)|Metiram 55% + Pyraclostrobin 5% 60WG (100g)|Pyraclostrobin 12.8% + Boscalid 25.2% WG (30g)",ni:"For sooty blotch or fly speck, spray one of:",i:"Mancozeb 75WP (300g)|Ziram 27SC (600ml)|Propineb 70WP (300g)|Ziram 80WP (200g)|Mancozeb 75WG (300g)",c:"Avoid spraying immediately after heavy rains, especially in low-altitude areas. Collect fallen fruit, de-weed tree basins, stake heavy branches, harvest early varieties early."},
{n:12,t:"Pre-harvest",x:"Check the waiting periods before you spray. The waiting-period table in Settings, under Learn, lists Propineb at 29 days and Ziram at 17 days, and the guide’s general rule says to stop sprays 3–4 weeks before harvest. Ask a SKUAST-K or Horticulture Department expert before spraying at this stage.",fn:"For long-term storage, the guide lists one of these fungicides 15–20 days before harvest:",f:"Captan 50WP (300g)|Propineb 70WP (300g)|Ziram 80WP (200g)|Zineb 75WP (300g)",c:"Need based: NAA (10 ppm) against pre-harvest fruit drop, second potassium sulphate spray (4–5 g/litre) for colour, calcium chloride (3–4 g/litre) for storage life. Cut orchard grass and remove water shoots."},
{n:13,t:"Harvest",c:"No sprays. Maturity checks: starch index 2.5 for CA storage and 3.5 for table use, fruit skin more than 75% red, TSS 12–14 Brix, pressure 16–18 lb per square inch, seeds more than 75% dark brown, days after full bloom (depends on variety)."},
{n:14,t:"Post-harvest",ni:"Insects, need based:",i:"Chlorpyriphos 20EC (100ml)|Essential where apple blotch leaf miner is a problem: Quinalphos 25EC (100ml)",nm:"Mites, when more than 20 per leaf:",m:"Fenazaquin 10EC (40ml)|Etoxazole 10SC (110ml)",c:"Collect and destroy fallen leaves, mummified fruits and dead wood. Spray 3–4% urea when half the leaves have turned yellow in scab or Alternaria infected orchards. Close anti-hail nets, tighten trellis wires, stake branches against snow, test the soil."},
{n:15,t:"Dormancy",c:"Prune virus-infected trees last and sterilize the tools. Apply fungicidal paste on pruning wounds. If the urea spray was missed in autumn, spray 5% urea on the orchard floor. Scrape cankers and apply paste. Keep the orchard clean."}
];

const PHI={hexaconazole:10,fluxapyroxad:14,difenoconazole:15,pyraclostrobin:25,ziram:17,metiram:11,dodine:22,penconazole:13,captan:1,propineb:29,chlorothalonil:36,flusilazole:25,fluopyram:7,tebuconazole:6,trifloxystrobin:4,boscalid:13,myclobutanil:15,imidacloprid:11,spiromesifen:9,hexythiazox:13,propargite:9,mancozeb:14};


const KEY=["Apply horticultural mineral oil before green tip. No fungicide yet.","Spray a fungicide only before rain. If the next 7 days are dry, skip it.","Same rule as green tip: spray before rain, and skip it if the next 7 days are dry.","The key stage for primary scab. Spray when most flowers are at pink stage.","Do not spray during flowering. One exception: 10 days since the last fungicide and rain is forecast.","Spray a fungicide before rains, and remove scab-infected leaves.","Spray before rains. Remove scab-infected fruits.","Spray a fungicide if rain is forecast. Treat mites only above 10 per leaf.","Spray a fungicide if rain is forecast. Check roots and collar for rot.","Spray before rains, but not in wet and hot weather.","Spray only if scab, Alternaria leaf blotch, sooty blotch or fly speck is present.","Check the waiting periods first. Some listed fungicides need more days than the guide’s spray window.","No sprays. Check that the fruit is mature.","Collect fallen leaves. Spray urea when half the leaves turn yellow in scab orchards.","No sprays. Prune, paste the wounds and keep the orchard clean."];
const IC={stage:'<path d="M12 3c-4 3-6 6-6 9a6 6 0 0 0 12 0c0-3-2-6-6-9z"/><path d="M12 9v9"/>',spr:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',wx:'<path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.600-1A4.500 4.500 0 0 1 17 18H7z"/>',dia:'<path d="M6 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6z"/><path d="M9 3v18M12 8h4"/>',set:'<path d="M12 8.500a3.500 3.500 0 1 0 0 7 3.500 3.500 0 0 0 0-7z"/><path d="M19.400 13a7.500 7.500 0 0 0 0-2l2-1.500-2-3.400-2.300 1a7.600 7.600 0 0 0-1.700-1L15 3.500h-4l-.4 2.600a7.600 7.600 0 0 0-1.700 1l-2.300-1-2 3.400 2 1.500a7.500 7.500 0 0 0 0 2l-2 1.500 2 3.400 2.300-1c.5.400 1.100.7 1.700 1l.4 2.600h4l.4-2.600c.6-.3 1.200-.6 1.700-1l2.300 1 2-3.400z"/>'};
const TABS=[["stage","Home"],["spr","Sprays"],["wx","Weather"],["dia","Diary"],["set","Settings"]];
let tab="stage",sub="",cur=4;
try{cur=+localStorage.getItem("apple-stage")||4}catch(e){}
const setCur=n=>{cur=n;try{localStorage.setItem("apple-stage",n)}catch(e){}};

const rowH=x=>{x=x.trim();const m=x.match(/^(.*?)\s*\(([^()]*)\)$/);return m&&m[1].length<90&&!/then/.test(x)?`<div class="rw"><span>${esc(m[1])}</span><b>${esc(m[2])}</b></div>`:`<div class="rw"><span>${esc(x)}</span></div>`};
const list=s=>s?s.split("|").map(rowH).join(""):"";
const sec=(h,n,l)=>(n||l)?`<div class="sec"><h3>${h}</h3>${n?`<p>${esc(n)}</p>`:""}${list(l)}</div>`:"";


const DEF={size:1,theme:"auto",hint:true,calm:false,heat:30,tank:100};
const cleanSet=o=>{o=o&&typeof o==="object"?o:{};return{size:[1,1.15,1.3].includes(+o.size)?+o.size:1,theme:["auto","light","dark"].includes(o.theme)?o.theme:"auto",hint:o.hint!==false,calm:o.calm===true,heat:CL(o.heat,1,60,30),tank:CL(o.tank,1,5000,100)}};
let SET=cleanSet(null);try{SET=cleanSet(JSON.parse(localStorage.getItem("apple-settings")))}catch(e){}
const saveSet=()=>{SET=cleanSet(SET);try{localStorage.setItem("apple-settings",JSON.stringify(SET))}catch(e){}};
function applySet(){const r=document.documentElement;r.style.setProperty("--fs",SET.size);SET.theme==="auto"?r.removeAttribute("data-theme"):r.setAttribute("data-theme",SET.theme);document.body.classList.toggle("nohint",!SET.hint);r.classList.toggle("calm",!!SET.calm)}
applySet();
const OSRM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const rm=()=>OSRM||SET.calm;
let ANIM=true,LOAD=false,ERR=false,wstep=0,WELCOMED=false;
try{WELCOMED=localStorage.getItem("apple-welcome")==="1"}catch(e){}
function endSplash(){const s=document.getElementById("splash");if(s){s.classList.add("hide");setTimeout(()=>s.remove(),500)}}
const LOGO=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c-1.5-1.6-6-1.4-6 4.2 0 3.7 2.6 7.8 4.6 7.8.9 0 1.1-.5 1.4-.5s.5.5 1.4.5c2 0 4.6-4.1 4.6-7.8C18 6.6 13.5 6.4 12 8z" fill="#b3262e"/><path d="M12 8c0-2 1-3.5 3-4" stroke="#3f8f4a" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`;
const mi=p=>`<svg class="mi" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const ICO={hum:mi('<path d="M12 3c-4 4.5-6 7.5-6 10a6 6 0 0 0 12 0c0-2.5-2-5.5-6-10z"/>'),wind:mi('<path d="M3 9h11a3 3 0 1 0-3-3M3 14h15a3 3 0 1 1-3 3M3 19h7"/>'),rain:mi('<path d="M7 14a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1A4.5 4.5 0 0 1 17 14H7zM9 17v3M13 17v3M17 17v3"/>'),next:mi('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>')};
const greet=()=>{const h=new Date().getHours();return h<12?"Good morning":h<17?"Good afternoon":"Good evening"};
const wicon=c=>c===0?`<svg viewBox="0 0 48 48" class="wi"><circle cx="24" cy="24" r="9" fill="#f4a261"/><path d="M24 5v5M24 38v5M5 24h5M38 24h5M11 11l3 3M34 34l3 3M37 11l-3 3M14 34l-3 3" stroke="#f4a261" stroke-width="3" stroke-linecap="round"/></svg>`
 :`<svg viewBox="0 0 48 48" class="wi"><circle cx="35" cy="14" r="7" fill="#f4a261"${c>3?' opacity="0"':""}/><path d="M13 36h21a7 7 0 0 0 0-14 10 10 0 0 0-19-2 8 8 0 0 0-2 16z" fill="var(--card)" stroke="var(--mut)" stroke-width="2.5" stroke-linejoin="round"/>${c>=51?'<path d="M18 40l-2 5M26 40l-2 5M34 40l-2 5" stroke="#3b8fb0" stroke-width="3" stroke-linecap="round"/>':""}</svg>`;

const chipsHTML=()=>`<div class="chips" id="strip">${ST.map(x=>`<button class="chip${x.n===cur?" on":""}" data-s="${x.n}"><img src="${TH[x.n]}" alt="" width="30" height="30" loading="lazy" decoding="async">${esc(x.t)}</button>`).join("")}</div>`;
function lastGap(){if(!D.length)return 7;const d=Math.floor((Date.now()-new Date(D[0].date+"T00:00:00"))/864e5);return d>=0&&d<365?d:7}
function todayHTML(w){
  const s=ST[cur-1],foot=`<p class="m" style="margin:12px 0 0">Source: SKUAST-K Guide 2026. ${REV.name?"Reviewed by "+esc(REV.name):"Not yet reviewed by an expert"}.</p>`;
  if(!PLACE)return `<div class="card today"><span class="m">Today</span><h2>${esc(s.t)}</h2><p>Choose your place to get today’s spray advice for this stage.</p><button class="btn" data-g="wx">Choose my place</button>${foot}</div>`;
  if(!w)return `<div class="card today"><span class="m">Today</span><h2>${esc(s.t)}</h2>${ERR?`<p>The forecast could not be loaded. Check your internet connection.</p>`:`<div class="sk" style="height:64px;margin-top:10px"></div>`}${foot}</div>`;
  const x=wxIn(w),[v,o]=advise(cur,x.rain!=="dry",x.hot,x.wet,lastGap());
  const rain=x.n24>=1?`Rain expected in the next 24 hours (${x.n24.toFixed(1)} mm).`:x.rain==="week"?"No rain in the next 24 hours, but rain later this week.":"Dry for the next 7 days.";
  const T={go:"Spray before the rain",wait:"Wait and check",stop:"Do not spray today"};
  return `<div class="card today ${v}"><span class="m">Today${WX&&WX.old?" (old forecast)":""}. Wrong stage? Pick yours below.</span><h2>${esc(s.t)}</h2><div class="tv">${T[v]}</div><p>${rain}</p><p class="m">${esc(o[0][1])}</p>
  <div class="acts2"><button class="btn" data-g="spr">What to spray</button><button class="btn alt" data-g="wx">Weather details</button></div>${foot}</div>`;
}
function homeView(){
  const s=ST[cur-1];
  return `<div class="gr"><div><span class="m">${greet()}${PROF.name?", "+esc(PROF.name):""}</span><h1>Assalamu alaikum</h1></div><button class="round" data-g="set" data-sub="learn" aria-label="Learn: safety notes and waiting periods">${LOGO}</button></div>
  <div id="today"></div>
  ${chipsHTML()}
  <div class="card stage"><img src="${IMG[s.n]}" alt="${esc(s.t)}" width="480" height="258" decoding="async"><div class="tx"><span class="m">Stage ${s.n} of 15</span><h2>${esc(s.t)}</h2><p class="lead">${esc(KEY[cur-1])}</p><button class="btn" data-g="spr">See sprays and doses</button></div></div>
  <div class="card" id="wcard"></div><div class="tiles" id="htiles"></div>
  <div class="two"><div class="card" id="hring">${ringHTML()}</div><div class="card" id="hrain"></div></div>`;
}
function ringHTML(){
  const C=2*Math.PI*48;
  return `<h3>Season</h3><div class="ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="48" class="rb"/><circle cx="60" cy="60" r="48" class="rp" transform="rotate(-90 60 60)" style="--full:${C.toFixed(1)};stroke-dasharray:${C.toFixed(1)};stroke-dashoffset:${(C*(1-cur/15)).toFixed(1)}"/></svg><div><b>${cur}/15</b><span>${esc(ST[cur-1].t)}</span></div></div>`;
}

function sprView(){
  const s=ST[cur-1],p=cur>1?cur-1:15,n=cur<15?cur+1:1;
  return `<div class="pn"><button data-s="${p}">Previous</button><b>Stage ${s.n} of 15</b><button data-s="${n}">Next</button></div>
  <div class="hero"><img src="${IMG[s.n]}" alt="${esc(s.t)}" width="480" height="258" decoding="async"><div class="tx"><h2>${esc(s.t)}</h2><p class="lead">${esc(KEY[cur-1])}</p></div></div>
  ${s.x?`<div class="call"><b>Check before spraying.</b> ${esc(s.x)}</div>`:""}
  ${sec("Fungicide",s.fn,s.f)}${sec("Insecticide and oil",s.ni,s.i)}${sec("Mites",s.nm,s.m)}
  ${s.c?`<div class="sec"><h3>In the orchard</h3><p>${esc(s.c)}</p></div>`:""}
  ${s.f||s.i||s.m?`<p class="m">All doses are per 100 litres of water. Use one product from a list, and never repeat the same pesticide in two sprays in a row.</p>`:`<p class="m">The guide lists no fungicide or insecticide for this stage.</p>`}`;
}


const PL={"Srinagar":[34.084,74.797],"Anantnag":[33.731,75.149],"Baramulla":[34.198,74.364],"Sopore":[34.3,74.47],"Shopian":[33.717,74.83],"Pulwama":[33.874,74.9],"Kulgam":[33.64,75.02],"Kupwara":[34.526,74.256],"Budgam":[34.02,74.72],"Ganderbal":[34.23,74.77],"Bandipora":[34.42,74.65]};
let PLACE=null,WX=null;
const cleanPlace=p=>{if(!p||typeof p!=="object")return null;const la=N(p.lat,NaN),lo=N(p.lon,NaN);return la>=-90&&la<=90&&lo>=-180&&lo<=180?{name:PL[p.name]?p.name:"Your location",lat:la,lon:lo}:null};
try{PLACE=cleanPlace(JSON.parse(localStorage.getItem("apple-place")))}catch(e){}
const setPlace=p=>{PLACE=cleanPlace(p);try{localStorage.setItem("apple-place",JSON.stringify(PLACE))}catch(e){}};

function wxView(){
  return `<h1>Weather check</h1><p class="m">Live weather for your orchard. <span class="hi">Mausam dekh kar faisla.</span></p>
  <div class="card" id="wcard"></div>
  <div class="sec"><h3>What should I spray today?</h3><p class="m">Answer these questions. The page then shows what the guide allows for your stage and weather, with doses and waiting periods.</p>
  <label for="ws">Stage of your trees</label><select id="ws">${ST.map(s=>`<option value="${s.n}"${s.n===cur?" selected":""}>Stage ${s.n}: ${esc(s.t)}</option>`).join("")}</select>
  <label for="wk">What do you see in the orchard?</label><select id="wk"><option value="routine">Nothing special, routine protection</option><option value="scab">Scab or Alternaria leaf blotch</option><option value="sooty">Sooty blotch or fly speck</option><option value="insects">Insects or leaf miner</option><option value="mites">Mites</option></select>
  <div id="wmw" hidden><label for="wm">Mites per leaf (count a few leaves)</label><input id="wm" type="number" min="0" value="0"></div>
  <label for="wr">Rain forecast</label><select id="wr"><option value="now">Rain within 24 hours</option><option value="week">Rain later this week</option><option value="dry">Dry for the next 7 days</option></select>
  <label for="wh">Is it very hot now?</label><select id="wh"><option value="0">No</option><option value="1">Yes, high temperature</option></select>
  <label for="ww">Is it raining, or are the leaves wet?</label><select id="ww"><option value="0">No</option><option value="1">Yes</option></select>
  <label for="wg">Days since your last fungicide spray</label><input id="wg" type="number" min="0" value="7">
  <label for="wl">Product you sprayed last (optional)</label><input id="wl" value="${esc(D.length?D[0].p:"")}" placeholder="For example, Mancozeb 75WP">
  <label for="wt">Your spray tank size in litres</label><input id="wt" type="number" min="1" value="${TANK}"></div>
  <div id="wo"></div>`;
}

function advise(s,rain,hot,wet,gap){
  const o=[],add=(c,m)=>o.push([c,m]);
  if(s===5)rain&&gap>=10?add("wait","Flowering: spraying is not advisable. The guide allows a fungicide only if 10 days have passed since the last one and rain is forecast. Spray in mist form."):add("stop","Flowering: do not spray. Spraying is not advisable during flowering.");
  else if(s===2||s===3)rain?add("go","Rain is coming. Spray a listed fungicide before the rain starts."):add("stop","Dry for 7 days. The guide says do not spray fungicide now.");
  else if(s===4)rain?add("go","Spray a listed fungicide before the rain. This is the key stage for primary scab."):add("wait","Dry weather. Spray when most flowers are at pink stage, not in early flowering.");
  else if(s>=6&&s<=10)rain?add("go","Rain is forecast. Spray a listed fungicide before the rain."):add("wait","No rain forecast. The guide schedules fungicide before rains. Use insect or mite sprays only when the counts in the stage are reached.");
  else if(s===11)add("wait","Spray only if scab, Alternaria leaf blotch, sooty blotch or fly speck is present. Avoid spraying right after heavy rain, especially at low altitude.");
  else if(s===12)add("wait","Spray only if needed for storage, and check the waiting period first (see the warning on the Sprays page).");
  else add("wait","The guide lists no fungicide for this stage.");
  if(hot)add("wait","High temperature: do not spray in the heat. Spray in the early morning or evening.");
  if(wet)add("wait","Rainy or wet weather: avoid spraying. It can burn the leaves, especially in Stage 10.");
  add("wait","If heavy rain falls within 12 hours after spraying, repeat the spray (when no sticker or adjuvant was used). Never spray in full bloom.");
  return [o.some(x=>x[0]==="stop")?"stop":(hot||wet)?"wait":o.some(x=>x[0]==="go")?"go":"wait",o];
}
const canSpray=(s,rain,gap)=>s===5?rain&&gap>=10:(s===2||s===3||(s>=6&&s<=10))?rain:(s===4||s===12);
let TANK=SET.tank;
const ACT=Object.keys(PHI).concat(["zineb","neem","quinalphos","chlorpyriphos","thiacloprid","fenazaquin","etoxazole","cyenopyrafen","carbendazim","sulphur"]);
function recRow(x,last,tank,s){
  x=x.trim();const m=x.match(/^(.*?)\s*\(([^()]*)\)$/),ok=m&&m[1].length<90&&!/then/.test(x);
  const name=ok?m[1]:x,dose=ok?m[2]:"",q=x.toLowerCase();
  const same=ACT.some(k=>q.includes(k)&&last.includes(k)),w=phi(x),dm=dose.match(/^([\d.]+)\s*(g|ml|l)$/i);
  const big=dm&&tank!==100?`${+(dm[1]*tank/100).toFixed(1)} ${dm[2].toLowerCase()==="l"?"L":dm[2].toLowerCase()}`:dose;
  const unk=["zineb","carbendazim","sulphur"].filter(k=>q.includes(k)),dy=w+(w===1?" day":" days");
  const note=same?"Skip: same as your last spray":w===null?"Waiting period: check the label":s===12&&w>20?"Waiting period "+dy+" is longer than this stage’s 15–20 days. Ask an expert first.":unk.length?"At least "+dy+". The guide’s table does not list "+unk.join(" or ")+", so check the label.":"Waiting period "+dy;
  return `<div class="rw${same?" skip":""}"><span>${esc(name)}<small${s===12&&w>20&&!same?' style="color:var(--green)"':""}>${note}</small></span><div class="dz"><b>${esc(big)}</b>${dose&&tank!==100?`<small>for ${tank} L (guide: ${esc(dose)} per 100 L)</small>`:""}</div></div>`;
}
function recHTML(s,v,can,prob,mites,last,tank){
  const S=ST[s-1],MT={6:4,7:5,8:10,10:10,14:20};
  const blk=(t,n,l)=>`<div class="sec"><h3>${t}</h3>${n?`<p>${esc(n)}</p>`:""}${l.split("|").map(x=>recRow(x,last,tank,s)).join("")}</div>`;
  const msg=(t,m)=>`<div class="sec"><h3>${t}</h3><p>${m}</p></div>`;
  if(v==="stop")return msg("What to spray","Nothing right now. Check again when the forecast changes.");
  let h="";
  if(s===1)h+=blk("Oil spray",S.ni,S.i);
  else if(s===11)h+=prob==="scab"?blk("Fungicide for scab or Alternaria leaf blotch",S.fn,S.f):prob==="sooty"?blk("Fungicide for sooty blotch or fly speck",S.ni,S.i):msg("Fungicide","Stage 11 sprays are only for scab, Alternaria leaf blotch, sooty blotch or fly speck. Choose what you see in the orchard above.");
  else if(S.f)h+=can?blk("Fungicide",S.fn,S.f):(prob==="scab"&&s!==5)?blk("Fungicide for the scab you see",(S.fn||"")+" Spray when the weather allows, not in heat or rain.",S.f):msg("Fungicide","No fungicide is scheduled by the guide today. It lists these only before rain.");
  if(prob==="insects"&&s!==1&&S.i&&s!==11)h+=blk("Insecticide (need based)",S.ni,S.i);
  if(prob==="mites"&&s!==11){
    const t=MT[s];
    if(!S.m)h+=msg("Mites","The guide lists no mite spray for this stage.");
    else if(t!==undefined&&mites<=t)h+=msg("Mites",`The guide says to spray only above ${t} mites per leaf. ${mites?"You counted "+mites+", so do not spray for mites yet.":"Count a few leaves and enter the number above."}`);
    else h+=blk("Mite spray",S.nm,S.m);
  }
  if(s===12&&S.x)h+=`<div class="call"><b>Check before spraying.</b> ${esc(S.x)}</div>`;
  return h+`<p class="m">Use one product from each list, never the same pesticide in two sprays in a row, and keep 3–4 days between an insecticide and a fungicide spray. Check the product label and the waiting period before you buy.</p>`;
}
function calcW(){
  const s=+$("ws").value,rain=$("wr").value!=="dry",hot=$("wh").value==="1",wet=$("ww").value==="1",gap=+$("wg").value||0;
  const prob=$("wk").value,mites=+$("wm").value||0,last=$("wl").value.toLowerCase(),tank=Math.max(1,+$("wt").value||100);
  $("wmw").hidden=prob!=="mites";
  const [w,o]=advise(s,rain,hot,wet,gap);
  const T={go:"Spray before the rain",wait:"Wait and check",stop:"Do not spray"},H={go:"Rain se pehle spray karein",wait:"Ruk kar dekhein",stop:"Spray na karein"};
  $("wo").innerHTML=`<div class="verdict ${w}"><h2>${T[w]}</h2><p class="m"><span class="hi">${H[w]}. </span>Stage ${s}: ${esc(ST[s-1].t)}</p></div>`+recHTML(s,w,canSpray(s,rain,gap),prob,mites,last,tank)+`<div class="sec"><h3>Why</h3>${o.map(x=>`<div class="why">${esc(x[1])}</div>`).join("")}</div>`;
}

const DT=/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/;
function cleanWx(j){
  try{
    const c=j.current,h=j.hourly,d=j.daily,tt=a=>{if(!Array.isArray(a)||a.length>400||!a.every(x=>typeof x==="string"&&DT.test(x)))throw 0;return a.slice()},nn=(a,k)=>a.slice(0,k).map(x=>N(x));
    if(typeof c.time!=="string"||!DT.test(c.time))throw 0;
    return{current:{time:c.time,temperature_2m:N(c.temperature_2m),relative_humidity_2m:N(c.relative_humidity_2m),precipitation:N(c.precipitation),weather_code:N(c.weather_code),wind_speed_10m:N(c.wind_speed_10m)},
      hourly:{time:tt(h.time),precipitation:nn(h.precipitation,400)},
      daily:{time:tt(d.time).slice(0,7),precipitation_sum:nn(d.precipitation_sum,7),temperature_2m_max:nn(d.temperature_2m_max,7),sunrise:tt(d.sunrise).slice(0,7),sunset:tt(d.sunset).slice(0,7)}};
  }catch(e){return null}
}
function wxIn(w){
  const c=w.current,h=w.hourly,d=w.daily,code=c.weather_code;
  let i=h.time.findIndex(t=>t>=c.time.slice(0,13)+":00");if(i<0)i=0;
  const n24=h.precipitation.slice(i,i+24).reduce((a,b)=>a+(b||0),0);
  return{n24,rain:n24>=1?"now":d.precipitation_sum.some(x=>x>=1)?"week":"dry",hot:c.temperature_2m>=SET.heat,
    wet:(c.precipitation||0)>0||(code>=51&&code<=67)||(code>=80&&code<=82)||code>=95,
    cond:code===0?"Clear":code<=3?"Partly cloudy":code<=48?"Fog":code<=57?"Drizzle":code<=67?"Rain":code<=77?"Snow":code<=82?"Rain showers":code<=86?"Snow showers":"Thunderstorm"};
}
const tm=t=>new Date(t).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit"});

function wcardHTML(w){
  const head=`<div class="wh"><select id="wp" class="pill" aria-label="Your place"><option value="">Choose a place</option>${Object.keys(PL).map(k=>`<option${PLACE&&PLACE.name===k?" selected":""}>${k}</option>`).join("")}${PLACE&&!PL[PLACE.name]?`<option selected>${esc(PLACE.name)}</option>`:""}</select><button class="pill alt" data-a="gps">Use my location</button></div>`;
  if(!PLACE)return head+`<p class="m" style="margin-top:12px">Choose a place to see the weather now and the forecast for the next 7 days.</p>`;
  if(!w)return head+(ERR?`<p class="m" style="margin-top:12px">The forecast could not be loaded. Check your internet connection and try again.</p>`:`<div class="sk" style="height:84px;margin-top:14px"></div><div class="sk" style="height:56px;margin-top:10px"></div>`);
  const c=w.current,d=w.daily,x=wxIn(w),t=Math.round(c.temperature_2m);
  const sr=new Date(d.sunrise[0]),ss=new Date(d.sunset[0]),f=Math.max(0,Math.min(1,(new Date(c.time)-sr)/(ss-sr))),g=1-f;
  const px=g*g*12+2*g*f*100+f*f*188,py=g*g*72+2*g*f*-30+f*f*72,P="M12 72Q100-30 188 72";
  const sun=rm()?`<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="7" fill="#f4a261"/>`:`<circle r="7" fill="#f4a261"><animateMotion path="${P}" keyPoints="0;${f.toFixed(3)}" keyTimes="0;1" calcMode="linear" dur="1.8s" fill="freeze"/></circle>`;
  return head+(WX&&WX.old?`<div class="call" style="margin-top:12px"><b>Old forecast.</b> There is no internet, so this is the forecast saved at ${tm(WX.t)}. Check the weather again when you are online before you spray.</div>`:"")+`<div class="wt"><div><div class="big"><span data-count="${t}">${t}</span>°C</div><div class="m">${x.cond}</div></div>${wicon(c.weather_code)}</div>
  <div class="mets">${[[ICO.hum,c.relative_humidity_2m+"%","Humidity"],[ICO.wind,Math.round(c.wind_speed_10m)+" km/h","Wind"],[ICO.rain,(c.precipitation||0)+" mm","Rain now"],[ICO.next,x.n24.toFixed(1)+" mm","Next 24 h"]].map(m=>`<div>${m[0]}<b>${m[1]}</b><span>${m[2]}</span></div>`).join("")}</div>
  <div class="sun"><svg viewBox="0 0 200 84" aria-hidden="true"><path class="arc" d="${P}"/>${sun}</svg><div><span>Sunrise ${tm(d.sunrise[0])}</span><span>Sunset ${tm(d.sunset[0])}</span></div></div>
  ${tab==="wx"?d.time.map((q,k)=>`<div class="rw"><span>${new Date(q+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})}</span><b>${(d.precipitation_sum[k]||0).toFixed(1)} mm rain, high ${Math.round(d.temperature_2m_max[k])}°C</b></div>`).join("")+`<p class="m">Rain of 1 mm or more counts as rain. The guide gives no number for heat, so this page treats ${SET.heat}°C or more as hot (change this in Settings).</p>`:""}`;
}
function tilesHTML(w){
  const x=w&&wxIn(w);let v="–",lab="Choose a place";
  if(x){v={go:"Go",wait:"Wait",stop:"Stop"}[advise(cur,x.rain!=="dry",x.hot,x.wet,7)[0]];lab=WX&&WX.old?"Old forecast":"Spray advice"}
  return `<div class="tile g"><b>${v}</b><span>${lab}</span></div>
  <div class="tile b"><b>${x?`<span data-count="${x.n24.toFixed(1)}" data-dec="1">${x.n24.toFixed(1)}</span>`:"–"}</b><span>mm in 24 h</span></div>
  <div class="tile p"><b><span data-count="${cur}">${cur}</span>/15</b><span>Spray stage</span></div>`;
}
function rainHTML(w){
  if(!w)return `<h3>Rain, next 3 days</h3><p class="m">Choose a place to see the forecast.</p>`;
  const d=w.daily;
  return `<h3>Rain, next 3 days</h3><div class="cyls">${[0,1,2].map(i=>{const mm=d.precipitation_sum[i]||0,lab=mm<1?"Dry":mm<5?"Light":mm<10?"Moderate":"Heavy";
    return `<div><div class="cyl" style="--i:${i};--h:${mm>0?Math.max(6,Math.min(100,mm*10)):0}%"><i></i></div><b>${mm.toFixed(1)} mm</b><span>${i?new Date(d.time[i]+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short"}):"Today"}, ${lab}</span></div>`}).join("")}</div>`;
}
function fillWx(){
  const w=WX&&PLACE&&WX.k===PLACE.lat+","+PLACE.lon?WX.j:null;
  if($("wcard"))$("wcard").innerHTML=wcardHTML(w);
  if($("htiles"))$("htiles").innerHTML=tilesHTML(w);
  if($("hrain"))$("hrain").innerHTML=rainHTML(w);
  if($("today"))$("today").innerHTML=todayHTML(w);
  if(w&&$("wr")){const x=wxIn(w);$("wr").value=x.rain;$("wh").value=x.hot?"1":"0";$("ww").value=x.wet?"1":"0"}
  if($("wo"))calcW();
  counts();
}
function ensureWx(){
  if(!PLACE)return;
  if(!(WX&&WX.k===PLACE.lat+","+PLACE.lon&&Date.now()-WX.t<6e5))loadWx();
}
async function loadWx(){
  const p=PLACE;LOAD=true;ERR=false;fillWx();
  try{
    const r=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${p.lat}&longitude=${p.lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&hourly=precipitation&daily=precipitation_sum,temperature_2m_max,sunrise,sunset&forecast_days=7&timezone=auto`,{signal:AbortSignal.timeout?AbortSignal.timeout(10000):undefined});
    if(!r.ok)throw new Error("bad response");
    const cj=cleanWx(await r.json());if(!cj)throw new Error("bad data");
    WX={j:cj,k:p.lat+","+p.lon,t:Date.now()};
    try{localStorage.setItem("apple-wx",JSON.stringify(WX))}catch(x){}
  }catch(e){
    let s=null;try{s=JSON.parse(localStorage.getItem("apple-wx"))}catch(x){}
    const sj=s&&s.k===p.lat+","+p.lon&&Date.now()-N(s.t)<432e5?cleanWx(s.j):null;
    if(sj)WX={j:sj,k:s.k,t:N(s.t),old:true};else ERR=true;
  }
  LOAD=false;fillWx();
}
function gps(){
  if(!navigator.geolocation){alert("This phone does not share its location. Choose a place from the list.");return}
  navigator.geolocation.getCurrentPosition(p=>{setPlace({name:"Your location",lat:+p.coords.latitude.toFixed(3),lon:+p.coords.longitude.toFixed(3)});render()},
    ()=>alert("Could not get your location. Allow location access, or choose a place from the list."),{timeout:15000});
}
function counts(){
  document.querySelectorAll("[data-count]").forEach(el=>{
    const t=+el.dataset.count,d=+el.dataset.dec||0;
    if(rm())return;
    const t0=performance.now(),step=n=>{const k=Math.min(1,(n-t0)/900);el.textContent=(t*(1-Math.pow(1-k,3))).toFixed(d);if(k<1)requestAnimationFrame(step)};
    requestAnimationFrame(step);
  });
}

const newId=()=>"d"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const cleanEntry=e=>{
  if(!e||typeof e!=="object"||typeof e.date!=="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date))return null;
  const st=Math.round(CL(e.st,1,15,0)),p=S_(e.p,120);if(!st||!p)return null;
  return{id:typeof e.id==="string"&&/^[\w-]{1,40}$/.test(e.id)?e.id:newId(),date:e.date,st:String(st),p,dose:S_(e.dose,60),note:S_(e.note,300),block:S_(e.block,80),d:e.d===null||e.d===undefined?null:Math.round(CL(e.d,0,365,0))};
};
const cleanList=a=>{const seen=new Set(),out=[];(Array.isArray(a)?a:[]).forEach(x=>{const c=cleanEntry(x);if(c&&!seen.has(c.id)){seen.add(c.id);out.push(c)}});return out.slice(0,500)};
let D=[];try{D=cleanList(JSON.parse(localStorage.getItem("apple-diary-v1")))}catch(e){}
const saveD=()=>{D=cleanList(D);try{localStorage.setItem("apple-diary-v1",JSON.stringify(D))}catch(e){}};
const fmt=d=>d.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
function phi(p){const q=p.toLowerCase();let d=0,hit=0;for(const k in PHI)if(q.includes(k)){hit++;d=Math.max(d,PHI[k])}return hit?d:null}

function diaView(){
  const t=new Date(),iso=new Date(t-t.getTimezoneOffset()*6e4).toISOString().slice(0,10);
  const rows=D.map((e,i)=>{
    let w=`<span class="m">Waiting period is not in the guide’s table. Check the product label.</span>`;
    if(e.d!==null){const h=new Date(e.date+"T00:00:00");h.setDate(h.getDate()+e.d);w=`<b>Do not harvest, cut grass or let animals in before ${fmt(h)}</b> (${e.d} days)`}
    return `<div class="ent"><b>${esc(e.p)}</b>${e.dose?" ("+esc(e.dose)+")":""}<br><span class="m">${fmt(new Date(e.date+"T00:00:00"))}, Stage ${esc(e.st)}${e.block?", "+esc(e.block):""}</span>${e.note?"<br>"+esc(e.note):""}<br>${w}<br><button class="x" data-a="del" data-i="${i}">Delete</button></div>`}).join("");
  return `<h1>Spray diary</h1><p class="m"><span class="hi">Apna spray ka record. </span>Saved on this phone only. The page works out the earliest safe harvest date from the guide’s waiting periods.</p>
  <label for="dd">Date</label><input id="dd" type="date" value="${iso}">
  <label for="ds">Stage</label><select id="ds">${ST.map(s=>`<option value="${s.n}"${s.n===cur?" selected":""}>${s.n}: ${esc(s.t)}</option>`).join("")}</select>
  <label for="dp">Product sprayed</label><input id="dp" placeholder="For example, Mancozeb 75WP">
  <label for="dq">Dose used (optional)</label><input id="dq" placeholder="For example, 300g per 100 L">
  <label for="db">Orchard or block (optional)</label><input id="db">
  <label for="dn">Note (optional)</label><input id="dn">
  <button class="btn" style="margin-top:16px" data-a="add">Save spray</button>
  <div class="sec"><h3>Saved sprays</h3>${rows||`<p class="m">Nothing saved yet. Your sprays will appear here.</p>`}</div>`;
}

const seg=(k,o)=>`<div class="seg">${o.map(x=>`<button class="${SET[k]===x[0]?"on":""}" data-set="${k}" data-v="${x[0]}">${x[1]}</button>`).join("")}</div>`;
function settingsHTML(){
  const row=(t,d,c)=>`<div class="set"><div><b>${t}</b><span class="m">${d}</span></div>${c}</div>`;
  return `<div class="sec" id="settings"><h3>Account and preferences</h3><p class="m">The recommended choices are already selected. Your choices are saved on this phone.</p>
  ${accHTML()}
  ${row("Text size","Larger text is easier to read in sunlight. Large is recommended.",seg("size",[[1,"Normal"],[1.15,"Large"],[1.3,"Extra large"]]))}
  ${row("Screen colours","Auto follows your phone. Dark is easier on the eyes at night.",seg("theme",[["auto","Auto"],["light","Light"],["dark","Dark"]]))}
  ${row("Hinglish hints","Short Hinglish lines under the English. Recommended: On.",seg("hint",[[true,"On"],[false,"Off"]]).replace(/data-v="true"/,'data-v="1"').replace(/data-v="false"/,'data-v="0"'))}
  ${row("Animations","Turn off to save battery on an older phone. Recommended: On.",seg("calm",[[false,"On"],[true,"Off"]]).replace(/data-v="true"/,'data-v="1"').replace(/data-v="false"/,'data-v="0"'))}
  ${row("Install on this phone",standalone()?"Already installed. After the first visit with internet, the guide also opens without signal.":"After you open the guide once with internet, it works without signal. Live weather still needs internet. Android: Chrome menu, then Install app. iPhone: Share, then Add to Home Screen.",INST?`<div class="wh"><button class="pill" data-a="install">Install</button></div>`:"")}
  ${row("My place for the weather",PLACE?esc(PLACE.name):"Not chosen yet",`<div class="wh"><button class="pill alt" data-g="wx">Change</button>${PLACE?`<button class="pill alt" data-a="forgetplace">Forget</button>`:""}</div>`)}
  ${row("Spray tank size (litres)","The guide gives doses per 100 litres. Enter your tank size and the Weather page works out the dose for it.",`<input id="st-tank" type="number" min="1" value="${+SET.tank}">`)}
  ${row("Hot weather limit (°C)","The guide says not to spray in high heat but gives no number. The recommended starting value is 30°C. Ask your expert and change it here.",`<input id="st-heat" type="number" min="1" value="${+SET.heat}">`)}
  ${row("Welcome guide","Show the short introduction again.",`<div class="wh"><button class="pill alt" data-a="rewelcome">Show again</button></div>`)}
  ${row("My data","Spray diary entries and settings are stored only on this phone.",`<div class="wh"><button class="pill alt" data-a="cleardiary">Clear spray diary</button><button class="pill alt" data-a="resetset">Reset settings</button></div>`)}
  </div>`;
}
function learnView(){
  return `<div class="pn"><button data-g="set">Back to Settings</button></div><h1>Learn</h1>
  <div class="sec"><h3>Scab</h3><p class="m">What the guide says. Photos and symptom descriptions will be added after expert review.</p><ul>
  <li>Pink bud is the crucial stage for primary scab infection. Keep the orchard clean and drained.</li>
  <li>At petal fall, remove all scab-infected leaves before the rains start.</li>
  <li>At fruitlet stage, remove scab-infected fruits.</li>
  <li>Fungicides are sprayed before rains from pink bud to fruit development IV. In Stage 11, use the scab list if scab is present.</li>
  <li>After harvest, spray 3–4% urea when half the leaves have turned yellow, and collect fallen leaves. In dormancy, if the urea spray was missed, spray 5% urea on the orchard floor.</li></ul></div>
  <div class="sec"><h3>Apple leaf blotch miner</h3><p class="m">The guide mentions this pest in two places.</p><ul>
  <li>At flowering, put pheromone traps (8–10 per hectare) to monitor the adult moths.</li>
  <li>After harvest, where it is a problem, the guide lists Quinalphos 25EC (100ml per 100 L water) as an essential spray. Collect and destroy fallen leaves.</li></ul></div>
  <div class="sec"><h3>Before you spray</h3><ul>
  <li>Do not mix fungicides, insecticides and spray solutions.</li>
  <li>Keep a gap of 3–4 days between an insecticide and a fungicide spray unless advised otherwise.</li>
  <li>If heavy rain falls within 12 hours of a spray, repeat it (when no adjuvant or sticker was used).</li>
  <li>Tell beekeepers nearby about the spray time. Keep bee colonies away from the spray area.</li>
  <li>Do not repeat the same pesticide in two sprays in a row.</li>
  <li>Avoid high temperature and rainy weather. Spray in the early morning or evening.</li>
  <li>No spray in full bloom.</li>
  <li>Stop insecticide and fungicide sprays 3–4 weeks before harvest.</li>
  <li>Spray before rains at the right stage. Avoid spraying right after severe rain (after 15 June), especially in low-altitude areas.</li></ul></div>
  <details><summary>Do’s and don’ts for the person spraying</summary><ul>
  <li>Buy only from a licensed dealer. Check batch number, registration number, manufacture and expiry dates, and keep the bill.</li>
  <li>Read the label. Use the recommended dose at the proper stage. Use clean water. Keep the solution stirred while spraying.</li>
  <li>Wear gloves, a face mask and an apron that covers the whole body. Protect nose, eyes, ears and hands.</li>
  <li>Never use too much or too little. Never spray without protective clothing.</li>
  <li>Do not eat, drink, chew or smoke while spraying. Do not blow clogged nozzles with your mouth.</li>
  <li>Do not move pesticide to another container. Do not use leaking equipment. Ask an expert if unsure.</li></ul></details>
  <details><summary>Waiting period before harvest</summary><p class="m">Do not harvest fruit, cut grass or let poultry or livestock into the orchard until the waiting period after the last spray is complete.</p>
  <table>${Object.keys(PHI).map(k=>`<tr><td>${k[0].toUpperCase()+k.slice(1)}</td><td>${PHI[k]} days</td></tr>`).join("")}</table>
  <p class="m">Zineb is not in the guide’s table. Check its label.</p></details>`;
}
const navrow=(s,t,d)=>`<button class="navrow" data-g="set" data-sub="${s}"><span><b>${t}</b><span class="m">${d}</span></span><svg class="mi" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button>`;
function aboutView(){
  const rev=REV.name?`<p><b>Reviewed by ${esc(REV.name)}</b>${REV.role?", "+esc(REV.role):""}${REV.date?", "+esc(REV.date):""}.</p>`:`<div class="call"><b>Not yet reviewed by an expert.</b> Check every dose and product with your Horticulture officer or SKUAST-K before you spray.</div>`;
  return `<div class="pn"><button data-g="set">Back to Settings</button></div><h1>About this guide</h1>
  <div class="sec"><h3>What it is</h3><p>A free guide for apple growers in Kashmir. It shows what the SKUAST-K spray schedule says for each growth stage, checks it against the weather where you are, and keeps a record of your sprays. It sells nothing and has no advertisements.</p></div>
  <div class="sec"><h3>Where the information comes from</h3><p>The stages, products, doses and waiting periods are copied from the SKUAST-K Integrated Management Guide for Apple Orchards in Kashmir, 2026 (Directorate of Research). The stage photos come from the same guide and are used with SKUAST-K’s permission. The spray information was copied in October 2026.</p>${rev}</div>
  <div class="sec"><h3>Please remember</h3><ul><li>This guide repeats the official schedule. It cannot see your trees.</li><li>Read the product label and check the waiting period before every spray.</li><li>Products must be registered in India (CIB &amp; RC). Ask a Plant Protection officer if you are unsure.</li></ul></div>
  <div class="sec"><h3>Contact and feedback</h3>${REV.contact?`<p>${esc(REV.contact)}</p>`:""}${REV.feedback?`<p><a class="lnk" href="${esc(REV.feedback)}" target="_blank" rel="noopener noreferrer">Send feedback or report a mistake</a></p>`:`<p class="m">The feedback link has not been added yet.</p>`}</div>
  <div class="sec"><h3>Version</h3><p>Version 2${REV.owner?". Made by "+esc(REV.owner)+".":"."}</p></div>`;
}
function privacyView(){
  return `<div class="pn"><button data-g="set">Back to Settings</button></div><h1>Privacy</h1>
  <div class="sec"><h3>What stays on your phone</h3><p>Your settings, your spray diary, the place you choose and the last weather forecast are saved on your phone only. You can delete them any time in Settings, under My data.</p></div>
  <div class="sec"><h3>Weather and your location</h3><p>To show the weather, this guide sends the coordinates of your chosen place to Open-Meteo (open-meteo.com), which can see your internet address. If you tap Use my location, your phone shares its position with this page. It is used only to get the weather and is saved on your phone, rounded to about 100 metres.</p></div>
  <div class="sec"><h3>Fonts</h3><p>The page loads its text font from Google Fonts, so Google can see your internet address when the font is first downloaded.</p></div>
  <div class="sec"><h3>Accounts</h3><p>${ON?"If you create an account, your email address, your name and your spray diary are stored with Google Firebase. Your password is handled by Firebase and is never seen by this guide. You can delete the account and the online data in Settings. Logging out keeps a copy of your diary on this phone.":"Accounts are not switched on yet. When they are, this page will explain what is stored."}</p></div>
  <div class="sec"><h3>What this guide does not do</h3><p>It has no advertisements, no tracking and no analytics, and it does not sell or share your information.</p></div>
  <div class="sec"><h3>Questions</h3><p>${REV.contact?esc(REV.contact):"Use the feedback link on the About page."}</p></div>`;
}
function setView(){
  if(sub==="learn")return learnView();
  if(sub==="about")return aboutView();
  if(sub==="privacy")return privacyView();
  return `<h1>Settings</h1>
  ${navrow("learn","Learn","Scab, leaf miner, safety rules and waiting periods")}${navrow("about","About this guide","Where the information comes from, and who checked it")}${navrow("privacy","Privacy","What is saved, and what is shared")}${settingsHTML()}`;
}

const FOOT=`<p class="foot">Photos and spray guidance: SKUAST-K Integrated Management Guide for Apple Orchards in Kashmir, 2026. This page repeats the guide and may contain copying errors. Check the original and ask a Plant Protection officer before you spray. Use and sale of products depend on CIB &amp; RC registration and label claim.</p>`;



/* ---------- Works without internet, and can be installed ---------- */
let INST=null,hideInst=false;try{hideInst=localStorage.getItem("apple-inst")==="1"}catch(e){}
const standalone=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone;
const iOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
addEventListener("beforeinstallprompt",e=>{e.preventDefault();INST=e;ANIM=false;render()});
addEventListener("appinstalled",()=>{INST=null;ANIM=false;render()});
addEventListener("online",()=>{ANIM=false;render()});addEventListener("offline",()=>{ANIM=false;render()});
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register("sw.js").catch(()=>{});
function topBanners(){
  let b="";
  if(!navigator.onLine)b+=`<div class="call" style="margin:0 0 12px"><b>You are offline.</b> The live weather needs internet. Everything else works.</div>`;
  if(tab==="stage"&&!standalone()&&!hideInst&&(INST||iOS))b+=`<div class="card"><b>Use the guide without internet</b><p class="m">${INST?"Install it on your phone. It opens like an app and works without signal.":"Tap the Share button, then Add to Home Screen. It then opens like an app and works without signal."}</p><div class="wh">${INST?`<button class="pill" data-a="install">Install</button>`:""}<button class="pill alt" data-a="hideinst">Not now</button></div></div>`;
  return b;
}
/* ---------- Optional account (Firebase email login). The two Firebase values live in config.js. ---------- */
const CFGV=typeof CFG!=="undefined"&&CFG?CFG:{};
const DBHOST=/^https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)*\.(firebaseio\.com|firebasedatabase\.app)$/;
const API={key:String(CFGV.apiKey||""),db:String(CFGV.dbUrl||"").trim().replace(/\/+$/,"")};
const ON=/^[A-Za-z0-9_-]{8,60}$/.test(API.key)&&DBHOST.test(API.db);
let AUTH=null,PROF={name:""},TOMB=[],SYNC="";
const store=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const cleanAuth=a=>a&&typeof a==="object"&&typeof a.email==="string"&&a.email.length<=254&&typeof a.uid==="string"&&/^[\w-]{1,128}$/.test(a.uid)&&typeof a.idToken==="string"&&typeof a.refresh==="string"&&Number.isFinite(+a.exp)?{email:a.email,uid:a.uid,idToken:a.idToken,refresh:a.refresh,exp:+a.exp}:null;
const cleanTomb=a=>(Array.isArray(a)?a:[]).filter(x=>typeof x==="string"&&/^[\w-]{1,40}$/.test(x)).slice(-2000);
try{AUTH=ON?cleanAuth(JSON.parse(localStorage.getItem("apple-auth"))):null}catch(e){}
try{PROF={name:S_((JSON.parse(localStorage.getItem("apple-profile"))||{}).name,60)}}catch(e){}
try{TOMB=cleanTomb(JSON.parse(localStorage.getItem("apple-tomb")))}catch(e){}
D.forEach((e,i)=>{if(!e.id)e.id="d"+Date.now().toString(36)+i});saveD();
async function fb(path,body){
  const r=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:"+path+"?key="+API.key,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
  let j={};try{j=await r.json()}catch(e){}
  if(!r.ok)throw new Error(j&&j.error&&typeof j.error.message==="string"?j.error.message:"ERROR");return j;
}
const ERRS={EMAIL_EXISTS:"This email already has an account. Log in instead.",INVALID_LOGIN_CREDENTIALS:"Wrong email or password.",INVALID_PASSWORD:"Wrong email or password.",EMAIL_NOT_FOUND:"No account with this email.",INVALID_EMAIL:"This email address is not valid.",MISSING_PASSWORD:"Please enter a password.",TOO_MANY_ATTEMPTS_TRY_LATER:"Too many tries. Wait a few minutes and try again.",OPERATION_NOT_ALLOWED:"Email login is not switched on in Firebase yet.",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"For safety, log out, log in again, then delete your account."};
const friendly=e=>{const m=String(e&&e.message||"");return m.startsWith("WEAK_PASSWORD")?"Choose a password with at least 6 characters.":m==="Failed to fetch"?"No internet connection.":ERRS[m]||"Something went wrong. Please try again."};
function setAuth(j){const a=cleanAuth({email:j.email,uid:j.localId,idToken:j.idToken,refresh:j.refreshToken,exp:Date.now()+(N(j.expiresIn,3600)-60)*1000});if(!a)throw new Error("ERROR");AUTH=a;store("apple-auth",AUTH)}
async function token(){
  if(!AUTH)throw new Error("NOAUTH");
  if(Date.now()<AUTH.exp)return AUTH.idToken;
  const r=await fetch("https://securetoken.googleapis.com/v1/token?key="+API.key,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token="+encodeURIComponent(AUTH.refresh)});
  const j=await r.json();if(!r.ok)throw new Error("SESSION");
  setAuth({email:AUTH.email,localId:j.user_id,idToken:j.id_token,refreshToken:j.refresh_token,expiresIn:j.expires_in});return AUTH.idToken;
}
const nodeUrl=async()=>API.db+"/users/"+AUTH.uid+".json?auth="+await token();
const paintAcc=()=>{const el=$("acs");if(el&&AUTH)el.textContent="Signed in as "+AUTH.email+". "+SYNC};
/* Diary entries have ids. Deleted ids are remembered, so two phones never bring back a deleted entry. */
async function sync(){
  if(!ON||!AUTH)return;
  try{
    SYNC="Saving…";paintAcc();
    const r=await fetch(await nodeUrl());if(!r.ok)throw new Error("DB");
    const rem=await r.json()||{},arr=x=>Array.isArray(x)?x.filter(Boolean):x?Object.values(x):[];
    TOMB=cleanTomb([...new Set([...TOMB,...arr(rem.tomb)])]);
    const seen=new Set(),all=[];
    [...cleanList(arr(rem.diary)),...D].forEach(e=>{if(e&&e.id&&!TOMB.includes(e.id)&&!seen.has(e.id)){seen.add(e.id);all.push(e)}});
    all.sort((a,b)=>(b.date||"").localeCompare(a.date||"")||b.id.localeCompare(a.id));
    D=all;store("apple-tomb",TOMB);saveD();
    if(rem.profile&&typeof rem.profile.name==="string"&&!PROF.name){PROF={name:S_(rem.profile.name,60)};store("apple-profile",PROF)}
    const w=await fetch(await nodeUrl(),{method:"PUT",body:JSON.stringify({diary:D,tomb:TOMB,profile:PROF})});
    if(!w.ok)throw new Error("DB");
    SYNC="Saved online at "+new Date().toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit"})+".";
  }catch(e){
    if(e.message==="SESSION"){AUTH=null;store("apple-auth",null);SYNC="";render();return}
    SYNC="Could not save online. Your diary is safe on this phone and will sync later.";
  }
  paintAcc();
  const f=document.activeElement;if(tab==="dia"&&!(f&&/INPUT|SELECT|TEXTAREA/.test(f.tagName)))render();
}
async function acct(kind){
  const m=t=>{const el=$("acm");if(el)el.textContent=t};
  const mail=$("ac-mail")?$("ac-mail").value.trim():"",pass=$("ac-pass")?$("ac-pass").value:"";
  try{
    if(kind==="login"||kind==="signup"){
      if(!mail||!pass){m("Please enter your email and password.");return}
      if(kind==="signup"&&pass.length<10){m("Choose a password with at least 10 characters. A short sentence works well.");return}
      m("Please wait…");
      setAuth(await fb(kind==="login"?"signInWithPassword":"signUp",{email:mail,password:pass,returnSecureToken:true}));
      await sync();render();
    }else if(kind==="forgot"){
      if(!mail){m("Enter your email above first.");return}
      await fb("sendOobCode",{requestType:"PASSWORD_RESET",email:mail});m("We sent a password reset link to your email.");
    }else if(kind==="saveprof"){
      PROF={name:S_($("ac-name").value.trim(),60)};store("apple-profile",PROF);await sync();m("Saved.");
    }else if(kind==="delacc"){
      if(!confirm("Delete your account and your online diary? This cannot be undone."))return;
      await fetch(await nodeUrl(),{method:"DELETE"});await fb("delete",{idToken:await token()});
      AUTH=null;store("apple-auth",null);SYNC="";render();
    }
  }catch(e){m(friendly(e))}
}
function accHTML(){
  if(!ON)return `<div class="set"><div><b>Account</b><span class="m">Accounts are coming soon. Your diary is saved on this phone for now.</span></div></div>`;
  if(AUTH)return `<div class="set"><div><b>Account</b><span class="m" id="acs">Signed in as ${esc(AUTH.email)}. ${esc(SYNC)}</span></div>
  <label for="ac-name">Your name</label><input id="ac-name" value="${esc(PROF.name)}" autocomplete="name">
  <div class="wh"><button class="pill" data-a="saveprof">Save name</button><button class="pill alt" data-a="syncnow">Save diary online now</button><button class="pill alt" data-a="logout">Log out</button></div>
  <p class="m">Your spray diary is saved online, so you keep it if you change phones. Logging out keeps a copy on this phone. Use Clear spray diary below to remove it.</p>
  <div class="wh"><button class="pill alt" data-a="delacc">Delete my account and online data</button></div><div id="acm" class="m" role="status"></div></div>`;
  return `<div class="set"><div><b>Account</b><span class="m">Optional. An account keeps your spray diary safe online so you can use it on another phone. We store only your email, your name and your spray diary.</span></div>
  <label for="ac-mail">Email</label><input id="ac-mail" type="email" autocomplete="email">
  <label for="ac-pass">Password (at least 10 characters)</label><input id="ac-pass" type="password" autocomplete="current-password">
  <div class="wh"><button class="pill" data-a="login">Log in</button><button class="pill alt" data-a="signup">Create account</button><button class="pill alt" data-a="forgot">Forgot password</button></div><div id="acm" class="m" role="status"></div></div>`;
}

function welcomeHTML(){
  const dots=`<div class="dots" aria-hidden="true">${[0,1,2,3].map(i=>`<i class="${i===wstep?"on":""}"></i>`).join("")}</div>`;
  const opts=Object.keys(PL).map(k=>`<option${PLACE&&PLACE.name===k?" selected":""}>${k}</option>`).join("")+(PLACE&&!PL[PLACE.name]?`<option selected>${esc(PLACE.name)}</option>`:"");
  const steps=[
    `<div class="logo">${LOGO}</div><h1>Assalamu alaikum</h1><p class="lead">This guide shows what the SKUAST-K spray schedule says for your apple trees today, using the weather where you are.</p><p class="m"><span class="hi">Aaj aapke ped ke liye kya karna hai, mausam ke saath.</span></p>`,
    `<h2>Where is your orchard?</h2><p class="m">Used only to read the weather forecast.</p><select id="wp" class="pill wide" aria-label="Your place"><option value="">Choose a place</option>${opts}</select><button class="pill alt wide" data-a="gps" style="margin-top:10px">Use my location</button>`,
    `<h2>Which stage are your trees at?</h2><p class="m">Tap the photo that looks like your trees. You can change it any time.</p>${chipsHTML()}<img class="ph" src="${IMG[cur]}" alt="${esc(ST[cur-1].t)}" width="480" height="258"><p class="lead">${esc(ST[cur-1].t)}: ${esc(KEY[cur-1])}</p>`,
    `<h2>Use it like an app</h2><p class="m">After you open the guide once with internet, it also works without signal. Live weather still needs internet.</p>${INST?`<button class="btn" data-a="install">Install on this phone</button>`:`<p>${iOS?"Tap the Share button, then Add to Home Screen.":"Open the browser menu and choose Install app or Add to Home screen."}</p>`}`];
  return `<div class="welcome">${dots}<div class="wbody">${steps[wstep]}</div><div class="wnav">${wstep?`<button class="pill alt" data-a="wback">Back</button>`:`<span></span>`}${wstep<3?`<button class="btn" data-a="wnext">Next</button>`:`<button class="btn" data-a="wdone">Open the guide</button>`}</div>${wstep<3?`<button class="skip" data-a="wdone">Skip</button>`:""}</div>`;
}
function render(){
  $("tabs").innerHTML=TABS.map(t=>`<button class="${t[0]===tab?"on":""}" data-tab="${t[0]}"><svg viewBox="0 0 24 24" aria-hidden="true">${IC[t[0]]}</svg>${t[1]}</button>`).join("");
  const v=$("v");v.className=ANIM?"anim":"";
  v.innerHTML=WELCOMED?topBanners()+({stage:homeView,spr:sprView,wx:wxView,dia:diaView,set:setView}[tab])()+FOOT:welcomeHTML();
  $("tabs").style.display=WELCOMED?"":"none";
  [...v.children].forEach((c,i)=>c.style.setProperty("--i",Math.min(i,8)));
  if(WELCOMED&&(tab==="stage"||tab==="wx")){fillWx();ensureWx()}
  const on=document.querySelector(".chip.on"),sp=$("strip");
  if(on&&sp)sp.scrollLeft=on.offsetLeft-sp.clientWidth/2+on.clientWidth/2;
  endSplash();
}

document.addEventListener("click",e=>{
  const t=e.target.closest("[data-tab],[data-s],[data-g],[data-a],[data-set],[data-jump]");
  if(!t)return;
  const d=t.dataset;
  if(d.jump){const el=$(d.jump);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});return}
  ANIM=!!(d.tab||d.g);
  if(d.tab||d.g){tab=d.tab||d.g;sub=d.sub||"";window.scrollTo(0,0);if(tab==="dia"&&AUTH)sync()}
  else if(d.s){setCur(+d.s);if(tab==="spr"){ANIM=true;window.scrollTo(0,0)}}
  else if(d.set){const k=d.set,v=d.v;SET[k]=k==="size"?+v:(k==="hint"||k==="calm")?v==="1":v;saveSet();applySet()}
  else if(d.a==="forgetplace"){PLACE=null;WX=null;try{localStorage.removeItem("apple-place")}catch(x){}}
  else if(d.a==="cleardiary"){if(!confirm("Delete all your saved sprays?"))return;D.forEach(g=>g.id&&TOMB.push(g.id));store("apple-tomb",TOMB);D=[];saveD();if(AUTH)sync()}
  else if(d.a==="resetset"){if(!confirm("Reset all settings?"))return;SET={...DEF};TANK=SET.tank;saveSet();applySet()}
  else if(["login","signup","forgot","saveprof","delacc"].includes(d.a)){acct(d.a);return}
  else if(d.a==="syncnow"){sync();return}
  else if(d.a==="logout"){AUTH=null;store("apple-auth",null);SYNC=""}
  else if(d.a==="install"){if(INST){INST.prompt();INST.userChoice.then(()=>{INST=null;ANIM=false;render()})}return}
  else if(d.a==="hideinst"){hideInst=true;try{localStorage.setItem("apple-inst","1")}catch(x){}}
  else if(d.a==="wnext"){wstep=Math.min(3,wstep+1);ANIM=true}
  else if(d.a==="wback"){wstep=Math.max(0,wstep-1);ANIM=true}
  else if(d.a==="wdone"){WELCOMED=true;try{localStorage.setItem("apple-welcome","1")}catch(x){}tab="stage";sub="";ANIM=true;window.scrollTo(0,0)}
  else if(d.a==="rewelcome"){WELCOMED=false;wstep=0;ANIM=true;try{localStorage.removeItem("apple-welcome")}catch(x){}window.scrollTo(0,0)}
  else if(d.a==="gps"){gps();return}
  else if(d.a==="add"){
    const p=$("dp").value.trim();
    if(!p||!$("dd").value){alert("Please enter the date and the product.");return}
    D.unshift({id:newId(),date:$("dd").value,block:$("db").value.trim(),st:$("ds").value,p,dose:$("dq").value.trim(),note:$("dn").value.trim(),d:phi(p)});saveD();if(AUTH)sync();
  }else if(d.a==="del"){
    if(!confirm("Delete this entry?"))return;
    const g=D.splice(+d.i,1)[0];if(g&&g.id){TOMB.push(g.id);store("apple-tomb",TOMB)}saveD();if(AUTH)sync();
  }
  render();
});
document.addEventListener("input",e=>{if(e.target.id==="ws")setCur(+e.target.value);if(e.target.id==="wt"||e.target.id==="st-tank"){SET.tank=+e.target.value||100;saveSet();TANK=SET.tank}if(e.target.id==="st-heat"){SET.heat=+e.target.value||30;saveSet()}if(tab==="wx"&&$("wo"))calcW()});
document.addEventListener("change",e=>{if(e.target.id==="wp"&&PL[e.target.value]){ANIM=false;setPlace({name:e.target.value,lat:PL[e.target.value][0],lon:PL[e.target.value][1]});render()}});
render();
if(AUTH)sync();
