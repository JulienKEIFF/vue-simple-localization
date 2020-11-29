'use strict'

let vueTranslation;
vueTranslation.install = function(Vue, translation){

  Vue.filter('translate', function(key, lang){
    if(typeof key == "undefined") return "";
    if(typeof translation == "undefined"){
      console.info("Translation is undefined.");
      return
    }
    if(typeof translation[key] == "undefined"){
      console.error("The translation key doesn't exist");
      return key
    }
    if(typeof translation[key][lang] == "undefined"){
      console.error("The lang key doesn't exist for this translation key");
      return key
    } 
    return translation[key][lang];
  });

};

export default vueTranslation;