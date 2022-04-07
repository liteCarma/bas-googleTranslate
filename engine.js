function gtranslate(){
  VAR_FROM = _function_argument("from")
  VAR_TEXT = _function_argument("text")
  VAR_TO = _function_argument("to")
  //https://github.com/vkedwardli/google-translate-api
  var googleTranslate = {
  langs: {
  'auto': 'Automatic',
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'am': 'Amharic',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'az': 'Azerbaijani',
  'eu': 'Basque',
  'be': 'Belarusian',
  'bn': 'Bengali',
  'bs': 'Bosnian',
  'bg': 'Bulgarian',
  'ca': 'Catalan',
  'ceb': 'Cebuano',
  'ny': 'Chichewa',
  'zh-CN': 'Chinese (Simplified)',
  'zh-TW': 'Chinese (Traditional)',
  'co': 'Corsican',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'eo': 'Esperanto',
  'et': 'Estonian',
  'tl': 'Filipino',
  'fi': 'Finnish',
  'fr': 'French',
  'fy': 'Frisian',
  'gl': 'Galician',
  'ka': 'Georgian',
  'de': 'German',
  'el': 'Greek',
  'gu': 'Gujarati',
  'ht': 'Haitian Creole',
  'ha': 'Hausa',
  'haw': 'Hawaiian',
  'he': 'Hebrew',
  'iw': 'Hebrew',
  'hi': 'Hindi',
  'hmn': 'Hmong',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'ig': 'Igbo',
  'id': 'Indonesian',
  'ga': 'Irish',
  'it': 'Italian',
  'ja': 'Japanese',
  'jw': 'Javanese',
  'kn': 'Kannada',
  'kk': 'Kazakh',
  'km': 'Khmer',
  'ko': 'Korean',
  'ku': 'Kurdish (Kurmanji)',
  'ky': 'Kyrgyz',
  'lo': 'Lao',
  'la': 'Latin',
  'lv': 'Latvian',
  'lt': 'Lithuanian',
  'lb': 'Luxembourgish',
  'mk': 'Macedonian',
  'mg': 'Malagasy',
  'ms': 'Malay',
  'ml': 'Malayalam',
  'mt': 'Maltese',
  'mi': 'Maori',
  'mr': 'Marathi',
  'mn': 'Mongolian',
  'my': 'Myanmar (Burmese)',
  'ne': 'Nepali',
  'no': 'Norwegian',
  'ps': 'Pashto',
  'fa': 'Persian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pa': 'Punjabi',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sm': 'Samoan',
  'gd': 'Scots Gaelic',
  'sr': 'Serbian',
  'st': 'Sesotho',
  'sn': 'Shona',
  'sd': 'Sindhi',
  'si': 'Sinhala',
  'sk': 'Slovak',
  'sl': 'Slovenian',
  'so': 'Somali',
  'es': 'Spanish',
  'su': 'Sundanese',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'tg': 'Tajik',
  'ta': 'Tamil',
  'te': 'Telugu',
  'th': 'Thai',
  'tr': 'Turkish',
  'uk': 'Ukrainian',
  'ur': 'Urdu',
  'uz': 'Uzbek',
  'vi': 'Vietnamese',
  'cy': 'Welsh',
  'xh': 'Xhosa',
  'yi': 'Yiddish',
  'yo': 'Yoruba',
  'zu': 'Zulu'
  },
  extractResult: {
  time: 0
  },
  languagesGetCode: function (desiredLang) {
  if (!desiredLang) {
  return false;
  }
  if (this.langs[desiredLang]) {
  return desiredLang;
  }
  var keys = Object.keys(this.langs).filter(function (key) {
  if (typeof this.langs[key] !== 'string') {
  return false;
  }
  return this.langs[key].toLowerCase() === desiredLang.toLowerCase();
  });
  return keys[0] || false;
  },
  languagesIsSupported: function isSupported(desiredLang) {
  return Boolean(this.languagesGetCode(desiredLang));
  },
  extract: function (key, res) {
  var re = new RegExp('"' + key + '":".*?"');
  var result = re.exec(res.body);
  if (result !== null) {
  return result[0].replace('"'+ key + '":"', '').slice(0, -1);
  }
  return '';
  },
  translate: function () {
  _textGTranslate = _function_argument('text')
  _optsGTranslate = _function_argument('opts') || {}
  _optsGTranslate.from = _optsGTranslate.from || 'auto';
  _optsGTranslate.to = _optsGTranslate.to || 'en';
  _optsGTranslate.tld = _optsGTranslate.tld || 'com';
  [_optsGTranslate.from, _optsGTranslate.to].forEach(function (lang) {
  if (lang && !googleTranslate.languagesIsSupported(lang)) {
  fail_user('The language \'' + lang + '\' is not supported', true)
  }
  });
  _optsGTranslate.from = googleTranslate.languagesGetCode(_optsGTranslate.from);
  _optsGTranslate.to = googleTranslate.languagesGetCode(_optsGTranslate.to);
  var url = 'https://translate.google.' + _optsGTranslate.tld;
  _if(googleTranslate.extractResult.time + 3600000 < Date.now(), function() {
  _call_function(got.get, {url: url})!
  var res = _result_function();
  var time = Date.now();
  googleTranslate.extractResult = {
  'time': Date.now(),
  'f.sid': googleTranslate.extract('FdrFJe', res),
  'bl': googleTranslate.extract('cfb2h', res),
  }
  })!
  var data = {
  'rpcids': 'MkEWBc',
  'f.sid': googleTranslate.extractResult['f.sid'],
  'bl': googleTranslate.extractResult['bl'],
  'hl': 'en-US',
  'soc-app': 1,
  'soc-platform': 1,
  'soc-device': 1,
  '_reqid': Math.floor(1000 + (Math.random() * 9000)),
  'rt': 'c'
  }
  url = url + '/_/TranslateWebserverUi/data/batchexecute?' + Object.keys(data).map(function(k) {
  return k + '=' + data[k]
  }).join('&');
  var body = 'f.req=' + encodeURIComponent(JSON.stringify([
  [
  [
  'MkEWBc',
  JSON.stringify([
  [_textGTranslate, _optsGTranslate.from, _optsGTranslate.to, true],
  [null]
  ]),
  null,
  'generic'
  ]
  ]
  ])) + '&';
  _call_function(got.post, {
  url: url,
  headers: {
  'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: body
  })!
  var json = _result_function().slice(6)
  var length = '';
  var result = {
  text: '',
  pronunciation: '',
  from: {
  language: {
  didYouMean: false,
  iso: ''
  },
  text: {
  autoCorrected: false,
  value: '',
  didYouMean: false
  }
  },
  raw: ''
  };
  try {
  length = /^\d+/.exec(json)[0];
  json = JSON.parse(json.slice(length.length, parseInt(length, 10) + length.length));
  json = JSON.parse(json[0][2]);
  result.raw = json;
  } catch (e) {
  return result;
  }
  if (json[1][0][0][5] === undefined || json[1][0][0][5] === null) {
  // translation not found, could be a hyperlink or gender-specific translation?
  result.text = json[1][0][0][0];
  } else {
  json[1][0][0][5].forEach(function (obj) {
  if (obj[0]) {
  result.text += obj[0];
  }
  });
  }
  result.pronunciation = json[1][0][0][1];
  // From language
  if (json[0] && json[0][1] && json[0][1][1]) {
  result.from.language.didYouMean = true;
  result.from.language.iso = json[0][1][1][0];
  } else if (json[1][3] === 'auto') {
  result.from.language.iso = json[2];
  } else {
  result.from.language.iso = json[1][3];
  }
  // Did you mean & autocorrect
  if (json[0] && json[0][1] && json[0][1][0]) {
  var str = json[0][1][0][0][1];
  str = str.replace(/<b>(<i>)?/g, '[');
  str = str.replace(/(<\/i>)?<\/b>/g, ']');
  result.from.text.value = str;
  if (json[0][1][0][2] === 1) {
  result.from.text.autoCorrected = true;
  } else {
  result.from.text.didYouMean = true;
  }
  }
  _function_return(result) ;
  }
  }
  
  _call_function(googleTranslate.translate, {
    text: VAR_TEXT,
    opts: {
    to: VAR_TO,
    from: VAR_FROM
    }
  })!
}
