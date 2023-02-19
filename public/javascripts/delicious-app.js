import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import typeAhead from './modules/typeAhead';
import makeMap from './modules/map';
import ajaxHeart from './modules/heart';

// Cannot make a billing at google cloud, because for some reason, it doesn't accept paypal payment method
// API-Key doesn't work, but the fn is correct
//autocomplete($('#address'), $('#lat'), $('#lng'));

typeAhead($('.search'));

makeMap($('#map'));

const heartForms = $$('form.heart');
heartForms.on('submit', ajaxHeart); // you can loop over with bling js ,on() without a forEach-fn