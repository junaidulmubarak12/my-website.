/* Weather reminder texts. Shared by the page and the service worker.
   It only reads numbers from a forecast and returns plain text. It stores nothing. */
var REMIND=(function(){
  var T={
    en:{snow:"It might snow today.",rain:"It might rain today.",hail:"Hail is possible today.",
        frost:function(x){return "Frost is possible: low of "+x+"°C."},
        test:"This is a test. If you can see this, weather reminders work on your phone."},
    hi:{snow:"Aaj barf girne ki sambhavna hai.",rain:"Aaj baarish ho sakti hai.",hail:"Aaj ole pad sakte hain.",
        frost:function(x){return "Frost ho sakta hai: sabse kam taapmaan "+x+"°C."},
        test:"Yeh ek test hai. Agar aap ise dekh rahe hain to mausam ke reminder aapke phone par kaam karte hain."}};
  function num(x){return typeof x==="number"&&isFinite(x)?x:null}
  function at0(a){return Array.isArray(a)?num(a[0]):null}
  function pick(l){return T[l==="hi"?"hi":"en"]}
  return {
    title:function(){return "Kashmir Apple Guide"},
    test:function(l){return pick(l).test},
    url:function(lat,lon){
      return "https://api.open-meteo.com/v1/forecast?latitude="+encodeURIComponent(+lat)+"&longitude="+encodeURIComponent(+lon)+
        "&daily=precipitation_sum,temperature_2m_min,weather_code,snowfall_sum&forecast_days=1&timezone=auto";
    },
    /* d = the "daily" part of an Open-Meteo forecast. Looks at today only. Returns a list of short sentences. */
    messages:function(d,lang){
      var t=pick(lang),out=[];
      if(!d||typeof d!=="object")return out;
      var code=at0(d.weather_code),sn=at0(d.snowfall_sum),pr=at0(d.precipitation_sum),lo=at0(d.temperature_2m_min);
      var snow=(sn!==null&&sn>=0.1)||[71,73,75,77,85,86].indexOf(code)>=0;
      var hail=code===96||code===99;
      var rain=!snow&&!hail&&((pr!==null&&pr>=1)||[61,63,65,66,67,80,81,82,95].indexOf(code)>=0);
      if(snow)out.push(t.snow);
      if(hail)out.push(t.hail);
      if(rain)out.push(t.rain);
      if(lo!==null&&lo<=2)out.push(t.frost(Math.round(lo)+0));
      return out;
    }
  };
})();
