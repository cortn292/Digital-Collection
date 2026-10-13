/* ============================================================
   YOUR IMAGES AND POEMS
   One line per tile, in tray order. "src" is the file in /images.
   "poem" (optional) = title / author / link, shown in the Read view.
   "text" (optional) = full poem text to display. Only paste text
   you have the right to publish (public domain or your own).
   ============================================================ */
const MY_TILES=[
  {"id": "01", "src": "images/01.jpg", "text": ""},
  {"id": "02", "src": "images/02.jpg", "text": ""},
  {"id": "03", "src": "images/03.jpg", "text": ""},
  {"id": "04", "src": "images/04.jpg", "text": ""},
  {"id": "05", "src": "images/05.jpg", "text": ""},
  {"id": "06", "src": "images/06.jpg", "text": ""},
  {"id": "07", "src": "images/07.jpg", "text": ""},
  {"id": "08", "src": "images/08.jpg", "text": ""},
  {"id": "09", "src": "images/09.jpg", "text": ""},
  {"id": "10", "src": "images/10.jpg", "text": "The world is too much with us; late and soon,\nGetting and spending, we lay waste our powers;—\nLittle we see in Nature that is ours;\nWe have given our hearts away, a sordid boon!\nThis Sea that bares her bosom to the moon;\nThe winds that will be howling at all hours,\nAnd are up-gathered now like sleeping flowers;\nFor this, for everything, we are out of tune;\nIt moves us not.—Great God! I'd rather be\nA Pagan suckled in a creed outworn;\nSo might I, standing on this pleasant lea,\nHave glimpses that would make me less forlorn;\nHave sight of Proteus rising from the sea;\nOr hear old Triton blow his wreathèd horn.", "poem": {"title": "The World Is Too Much with Us", "by": "William Wordsworth", "url": "https://www.poetryfoundation.org/poems/45564/the-world-is-too-much-with-us"}},
  {"id": "11", "src": "images/11.jpg", "text": ""},
  {"id": "12", "src": "images/12.jpg", "text": ""},
  {"id": "13", "src": "images/13.jpg", "text": ""},
  {"id": "14", "src": "images/14.jpg", "text": "", "poem": {"title": "Design", "by": "Robert Frost", "url": "https://poets.org/poem/design"}},
  {"id": "15", "src": "images/15.jpg", "text": ""},
  {"id": "16", "src": "images/16.jpg", "text": ""},
  {"id": "17", "src": "images/17.jpg", "text": ""},
  {"id": "18", "src": "images/18.jpg", "text": ""},
  {"id": "19", "src": "images/19.jpg", "text": ""},
  {"id": "20", "src": "images/20.jpg", "text": ""},
  {"id": "21", "src": "images/21.jpg", "text": ""},
  {"id": "22", "src": "images/22.jpg", "text": ""},
  {"id": "23", "src": "images/23.jpg", "text": ""},
  {"id": "24", "src": "images/24.jpg", "text": "", "poem": {"title": "Lines", "by": "Anne Carson", "url": "https://www.newyorker.com/1997/03/31/lines-anne-carson-poem"}},
  {"id": "25", "src": "images/25.jpg", "text": ""},
  {"id": "26", "src": "images/26.jpg", "text": "", "poem": {"title": "Chaos", "by": "", "url": "https://www.blueridgejournal.com/poems/em-chaos.htm"}},
  {"id": "27", "src": "images/27.jpg", "text": ""},
  {"id": "28", "src": "images/28.jpg", "text": "", "poem": {"title": "Chaos", "by": "Stanley Moss", "url": "https://www.poetryfoundation.org/poetrymagazine/poems/144364/chaos-59bc02210a43f"}},
  {"id": "29", "src": "images/29.jpg", "text": ""},
  {"id": "30", "src": "images/30.jpg", "text": ""},
  {"id": "31", "src": "images/31.jpg", "text": ""},
  {"id": "32", "src": "images/32.jpg", "text": "", "poem": {"title": "Linear", "by": "", "url": "https://poets.org/poem/linear"}},
  {"id": "33", "src": "images/33.jpg", "text": ""},
  {"id": "34", "src": "images/34.jpg", "text": "", "poem": {"title": "Linear Process", "by": "", "url": "https://www.splitthisrock.org/poetry-database/poem/linear-process"}},
  {"id": "35", "src": "images/35.jpg", "text": ""},
  {"id": "36", "src": "images/36.jpg", "text": ""},
  {"id": "37", "src": "images/37.jpg", "text": ""},
  {"id": "38", "src": "images/38.jpg", "text": ""},
  {"id": "39", "src": "images/39.jpg", "text": ""},
  {"id": "40", "src": "images/40.jpg", "text": ""},
];
const $=s=>document.querySelector(s);
const poems=[["Between the rule and the ruled / the eye keeps counting.",3],[null],[null],["a horizon is only / a line we agreed to believe",5],[null],[null],["Every shelf an argument / for staying",4],[null],[null],[null],["lay one down. then another. / now you are building.",6],[null]];
function mk(i){let l='',n=2+(i*3)%4;for(let k=0;k<n;k++){const y=35+k*(130/n)+((i*7+k*5)%5)*3;l+=`<line x1="0" x2="300" y1="${y}" y2="${y}" stroke="#16130f" stroke-width="${1+((i+k)%4)*1.3}"/>`}
return 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="${i%3?'#efe5cb':'#e2d6b6'}"/>${l}</svg>`)}
let lib=MY_TILES.length?MY_TILES.map((t,i)=>({id:t.id||'t'+i,src:t.src,text:t.text||'',poem:t.poem||null})):poems.map((p,i)=>({id:'d'+i,src:mk(i),text:p[0]||''}));
let nSlots=7,slots=Array(nSlots).fill(null),sel=null,drag=null;
const get=id=>lib.find(t=>t.id===id);
function tileEl(t,sl){const d=document.createElement('div');d.className='tile'+(sel===t.id?' sel':'');d.dataset.id=t.id;d.innerHTML=`<img src="${t.src}" alt="">`+(t.poem?'<span class="mark">poem</span>':'');
d.addEventListener('pointerdown',e=>{if(e.target.classList.contains('tbtn')){e.stopPropagation();return}start(e,t.id,d)});
return d}
function render(){const S=$('#slots');S.innerHTML='';slots.forEach((id,i)=>{const s=document.createElement('div');s.className='slot'+(id?' full':'');s.dataset.i=i;if(id)s.appendChild(tileEl(get(id),true));else s.textContent=String(i+1).padStart(2,'0');S.appendChild(s)});
const T=$('#tray');T.innerHTML='';const used=new Set(slots);lib.filter(t=>!used.has(t.id)).forEach(t=>T.appendChild(tileEl(t,false)));if(!T.children.length)T.innerHTML='<p class="empty">All strips are placed. Upload more or release some.</p>'}
function start(e,id,el){drag={id,x:e.clientX,y:e.clientY,el,on:false,from:slots.indexOf(id)};window.addEventListener('pointermove',mv);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',cancel)}
function mv(e){if(!drag)return;if(!drag.on&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>8){drag.on=true;const r=drag.el.getBoundingClientRect(),g=drag.el.cloneNode(true);g.className='ghost';g.style.width=r.width+'px';g.style.height=r.height+'px';document.body.appendChild(g);drag.g=g;drag.ox=e.clientX-r.left;drag.oy=e.clientY-r.top}
if(drag.on){drag.g.style.left=e.clientX-drag.ox+'px';drag.g.style.top=e.clientY-drag.oy+'px';document.querySelectorAll('.slot.over').forEach(s=>s.classList.remove('over'));const s=slotAt(e);if(s)s.classList.add('over')}}
const slotAt=e=>{const el=document.elementFromPoint(e.clientX,e.clientY);return el&&el.closest('.slot')};
function cancel(){if(drag&&drag.g)drag.g.remove();drag=null;rm()}
function rm(){window.removeEventListener('pointermove',mv);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel)}
function up(e){const d=drag;cancel();if(!d)return;
if(d.on){const s=slotAt(e);if(s)place(d.id,+s.dataset.i,d.from);else if(d.from>=0){slots[d.from]=null;render()}else render()}
else{if(d.from>=0){slots[d.from]=null;sel=null;render()}else{sel=sel===d.id?null:d.id;render()}}}
function place(id,i,from){const prev=slots[i];if(from>=0)slots[from]=prev&&prev!==id?prev:null;slots[i]=id;sel=null;render()}
$('#slots').addEventListener('click',e=>{const s=e.target.closest('.slot');if(s&&sel&&!slots[+s.dataset.i])place(sel,+s.dataset.i,-1)});
$('#plus').onclick=()=>{if(nSlots<16){nSlots++;slots.push(null);render()}};
$('#minus').onclick=()=>{if(nSlots>2){nSlots--;slots.pop();render()}};
$('#clear').onclick=()=>{slots=Array(nSlots).fill(null);render()};


function modal(h){$('#mbox').innerHTML=h;$('#modal').classList.add('on')}
$('#modal').onclick=e=>{if(e.target.id==='modal')$('#modal').classList.remove('on')};
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;');
function poemOf(items){return items.filter(x=>x.poem).map(x=>{const p=x.poem;return `<div class="pm"><h4>${esc(p.title)}${p.by?' <span>— '+esc(p.by)+'</span>':''}</h4>`+(x.text?`<div class="poem">${esc(x.text)}</div>`:'')+(p.url?`<p><a href="${p.url}" target="_blank" rel="noopener">read the full poem ↗</a></p>`:'')+'</div>'}).join('')}
$('#read').onclick=()=>{const p=poemOf(slots.filter(Boolean).map(get));modal(p||'<p class="empty">No poems in your row yet. Look for tiles marked "poem".</p>')};
const KEY='structure-archive-v2';
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(_){return []}};
$('#save').onclick=()=>{const items=slots.filter(Boolean);if(!items.length){modal('<p class="empty">Place at least one strip first.</p>');return}
const a=load();a.unshift({t:$('#title').value.trim()||'Untitled',d:new Date().toLocaleDateString(),ids:items});
try{localStorage.setItem(KEY,JSON.stringify(a));$('#title').value='';modal('<p>Saved to the archive.</p>')}catch(_){modal('<p>Archive storage is full or unavailable in this browser.</p>')}};
function showArchive(){const a=load(),L=$('#list');if(!a.length){L.innerHTML='<p class="empty">Nothing archived yet. Arrange a column and press Save.</p>';return}
L.innerHTML=a.map((c,i)=>`<div class="card"><h3>${c.t.replace(/</g,'&lt;')}</h3><small>${c.d} · ${c.ids.length} lines</small><div class="col">${c.ids.map(get).filter(Boolean).map(x=>`<img src="${x.src}" alt="">`).join('')}</div><div class="row"><button data-r="${i}">Read</button><button data-x="${i}">Delete</button></div></div>`).join('');
L.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{const p=poemOf(a[+b.dataset.r].ids.map(get).filter(Boolean));modal(p||'<p class="empty">No poems in this one.</p>')});
L.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{a.splice(+b.dataset.x,1);try{localStorage.setItem(KEY,JSON.stringify(a))}catch(_){}showArchive()})}
function go(v){document.querySelectorAll('.view').forEach(x=>x.classList.toggle('on',x.id===v));if(v==='archive')showArchive();window.scrollTo(0,0)}
$('#home').onclick=()=>go('game');
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=e=>{e.stopPropagation();go(b.dataset.go)});
render();
