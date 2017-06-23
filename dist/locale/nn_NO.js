!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.__vee_validate_locale__nn_NO=e.__vee_validate_locale__nn_NO||{},e.__vee_validate_locale__nn_NO.js=n())}(this,function(){"use strict";var e={name:"nn_NO",messages:{after:function(e,n){return e+"-feltet må vere etter "+n[0]+"."},alpha_dash:function(e){return e+"-feltet kan berre innehalde alfa-numeriske tegn, samt bindestrek og understrek."},alpha_num:function(e){return e+" kan berre innehalde alfanumeriske tegn."},alpha_spaces:function(e){return e+"-feltet kan berre innehalde alfanumeriske teng og mellomrom."},alpha:function(e){return e+"-feltet kan berre innehalde bokstaver."},before:function(e,n){return e+"-feltet må vere før "+n[0]+"."},between:function(e,n){return e+"-feltet må vere mellom verdiane "+n[0]+" og "+n[1]+"."},confirmed:function(e){return e+"-feltet samsvarer ikkje."},credit_card:function(e){return e+"-feltet er ugyldig."},date_between:function(e,n){return e+"-feltet må vere imellom "+n[0]+" og "+n[1]+"."},date_format:function(e,n){return e+"-feltet må vere i følgende format: "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=["*"]);var t=n[0];return e+"-feltet må vere numerisk, og kan innehalde "+("*"===t?"":t)+" desimaler."},digits:function(e,n){return e+"-feltet må vere numerisk og innehalde nøyaktig "+n[0]+" siffer."},dimensions:function(e,n){return e+"-feltet må vere "+n[0]+" gonger "+n[1]+" piksler."},email:function(e){return e+"-feltet må innehalde ein gyldig E-post adresse."},ext:function(e){return e+"-feltet må innehalde ei gyldig fil."},image:function(e){return e+"-feltet må vere eit bilete."},in:function(e){return e+"-feltet må vere ein gyldig verdi."},ip:function(e){return e+"-feltet må vere ei gyldig IP Adresse."},max:function(e,n){return e+"-feltet kan ikkje vere lengre enn "+n[0]+" tegn."},max_value:function(e,n){return e+" kan ikkje vere lengre enn "+n[0]+" tegn."},mimes:function(e){return e+"-feltet må ha ein gyldig filtype."},min:function(e,n){return e+"-feltet må innehalde minst "+n[0]+" tegn."},min_value:function(e,n){return e+"-feltet må vere "+n[0]+" eller mer."},not_in:function(e){return e+"-feltet må ha ein gyldig verdi."},numeric:function(e){return e+"-feltet kan berre innehalde nummer."},regex:function(e){return e+" har ugyldig formatering."},required:function(e){return e+" er eit obligatorisk felt."},size:function(e,n){return e+"-feltet må vere mindre enn "+n[0]+" KB."},url:function(e){return e+" er ikkje ein gyldig URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate&&(VeeValidate.Validator,!0)&&VeeValidate.Validator.addLocale(e),e});