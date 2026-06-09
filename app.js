/* ══════════════════════════════════════════
   CONFIG — Replace SHEET_CSV_URL with your
   published Google Sheet CSV URL
   ══════════════════════════════════════════ */
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSL5-JbE30q3Od4iVzzXj_631LW2NTVkmuPmN1bGdEiBJmLpfXBxCAojr__6SU2SItnoPxPiebLmLlF/pub?output=csv";

/* ══ DUMMY DATA (used when no sheet URL set) ══ */
const DUMMY_DATA = [
  // Category, Value, Interpretation (Dzongkha)
  ["ལོ","མེ་ཕོ་རྟ།","ཁྲོ་གཏུམ་ཆེ་ལ་ང་བློ་ཡང། ཁེ་དྲག་ཆེ་ཞིང་འཐབ་ལ་དགའ། །ནོར་ནི་ཕུགས་སུ་ཆུང་བ་ཡིན། །རྟ་དང་ཁྱི་ལ་བརྩི་བ་སྟེ། །མི་ལ་གནོད་ཅིང་གྲོགས་ལ་བརྩོན། །ནད་ནི་གློ་གཟེར་ཆང་ནད་མང་།"],
  ["ལོ","མེ་མོ་ལུག།","ཞི་བདེ་ལྡན་ལ་ཆོས་ལ་དད། ཡོན་ཏན་ལྡན་ཞིང་སྙིང་རྗེ་ཅན། གྲོགས་མང་ནོར་འབྱོར་འཕེལ་བར་འགྱུར། ཚེ་ཚད་བདུན་ཅུ་རྩ་དྲུག་འཚོ།"],
  ["ལོ","ས་ཕོ་གླང།","བརྩོན་འགྲུས་ཆེ་ལ་ལས་ལ་དགའ། ལས་ཀ་བཟང་པོ་བྱེད་ནུས་ཤིང། གྲོགས་ལ་བརྩེ་བ་ཆེ་བ་ཡིན། ཚེ་ཚད་བདུན་ཅུ་རྩ་བཞི་འཚོ།"],
  ["ལོ","ས་མོ་ཡོས།","གྲོགས་མང་ལ་འཐུས་ཆེ་བ། ངག་གི་ལས་ལ་མཁས་པ་ཡིན། ཚེ་ཚད་དྲུག་ཅུ་རྩ་གསུམ་འཚོ།"],
  ["ལོ","ལྕགས་ཕོ་སྟག།","སྙིང་སྟོབས་ཆེ་ལ་དཔའ་བ་ཅན། ལས་ཀ་ཐག་ཆོད་ཅིང་གཞན་རྗེས་འབྲང། ཚེ་ཚད་བདུན་ཅུ་དོན་བཞི་འཚོ།"],
  ["ལོ","ལྕགས་མོ་ཡོས།","ལེགས་ཉེས་མཐོང་བར་མཁས་པ་ཡིན། ངག་གི་ལས་ལ་མཁས་ཤིང་གྲོགས་མང།"],
  ["ལོ","ཆུ་ཕོ་འབྲུག།","གྲུབ་མཐར་དོ་སྣང་ཆེ་བ་ཡིན། ཆབ་སྲིད་ལ་སོགས་གཞུང་ལས་ལ་འགྲོ།"],
  ["ལོ","ཆུ་མོ་སྦྲུལ།","མཁས་ལྡན་ཞིང་ཤེས་རབ་ལྡན། ཉམས་མྱོང་མང་ལ་ཆོས་ལ་དད།"],
  ["ལོ","ཤིང་ཕོ་རྟ།","ཕན་ཚུན་ལ་བཀོད་པ་དང། ལས་དང་ལྡན་པ་ཡིན།"],
  ["ལོ","ཤིང་མོ་ལུག།","མཐའ་འཁོར་ལ་ཕན་ཐོགས་ཆེ་བ། ཞི་བ་དང་བྱམས་བརྩེ་ལྡན།"],
  ["ཟླ","ཟླ་བ་དང་པོ།","ཐོག་མར་སྐྱེས་པའི་གྲུབ་འབྲས་ལ། དབྱར་གྱི་ཆར་ཆུ་ལྟར་གང་འབྱུང། ལོ་བཅུ་གཅིག་ལ་མ་ཤི་ན། ལོ་བདུན་ཅུ་རྩ་ལྔ་འཚོ་སྲིད།"],
  ["ཟླ","ཟླ་བ་གཉིས་པ།","དབྱར་རར་བུ་སྐྱེས་དབུལ་ཞིང་འཕོངས། །བུ་མོ་མྱ་ངན་མང་བ་སྟེ། །ཞག་ལྔ་ཟླ་དགུ་ལོ་བཅུ་ལ། །མ་ཤི་དྲུག་ཅུ་རྩ་བཞི་ཐུབ།"],
  ["ཟླ","ཟླ་བ་གསུམ་པ།","ལོ་ནི་སུམ་ཅུ་རྩ་གཅིག་འཚོ། ནང་མི་སྲིད་འཕེལ་བར་འགྱུར། ཆེད་དུ་མར་མེ་འབར་བར་ཡོད།"],
  ["ཟླ","ཟླ་བ་བཞི་པ།","ཟླ་བ་བཞི་པར་སྐྱེས་པའི་བུ། ལྷ་ཡིས་བྱིན་པའི་བུ་ཡིན་ཏེ། ཆོས་ལ་དད་ཅིང་ནོར་འཕེལ་བར། ཚེ་ཚད་བདུན་ཅུ་རྩ་བཞི་ཐུབ།"],
  ["ཞག","ས་འབྲུག།","འབྲུག་གི་ཞག་ལ་གང་སྐྱེས་པ། །ཞག་བཅུ་དང་ནི་ལོ་བཅུ་ལ། །མ་ཤི་ནང་སྲན་ཆེ་བ་འོང་། །སྤྲོ་ཐུང་སེམས་དཀར་ཆོས་ལ་དད།"],
  ["ཞག","ས་ཕོ་གླང།","གླང་གི་ཞག་ལ་སྐྱེས་པའི་བུ། ལས་ལ་བརྩོན་ཞིང་འབད་བ་ཆེ། སྲིད་གཞུང་ལ་འགྲོ་བར་ཆོས་མཐུན།"],
  ["ཞག","མེ་ཕོ་རྟ།","རྟ་ཡི་ཞག་ལ་སྐྱེས་པ་ལ། ཕན་ཚུན་ལ་དཔའ་བ་ཡིན། ལས་ཀ་མགྱོགས་ལ་ངོར་འཛིན་མང།"],
  ["དུས","ལུག་སྔ་ཆ།","ལུག་གི་དུས་ལ་སྐྱེས་པའི་བུ། ཁ་འཇམ་ཞི་ནག་ཁ་སྨྲས་མང་། །བུད་མེད་ཁང་ཞིང་ཆེད་དུ་ནི། ཁ་སྨྲས་དགྲ་འཐབ་རྟག་ཏུ་འབྱུང་།"],
  ["དུས","ས་སྟག་སྔ་ཆ།","སྟག་གི་དུས་ལ་སྐྱེས་པ་ལ། དཔའ་བ་ཆེ་ལ་གཞན་རྗེས་འབྲང། ལས་ཀ་ཐག་ཆོད་ལ་མི་ལ་དགའ།"],
  ["དུས","འབྲུག་ཕྱི་ཆ།","འབྲུག་གི་དུས་ལ་སྐྱེས་པ་ལ། གྲུབ་མཐར་དོ་སྣང་ཆེ་བ་ཡིན།"],
  ["སྐར་མ","ལག་པ།","རྒྱུ་སྐར་ལག་སྐྱེས་ཚེ་ཡི་ཚད། །ལོ་ནི་སུམ་ཅུ་རྩ་ལྔའམ། །ཡང་ན་དྲུག་ཅུ་རྩ་ལྔ་འཚོ། །ཆོམས་པོའི་ལས་ཀྱིས་འཚོ་བ་ཡིན།"],
  ["སྐར་མ","མིག་གི་གྲུ་བཞི།","མིག་གི་གྲུ་བཞི་སྐར་ལ་སྐྱེས། ལོ་དྲུག་ཅུ་རྩ་གཅིག་འཚོ་སྲིད། ཆོས་ལ་དད་ཅིང་ལས་ལ་མཁས།"],
  ["རེས་གཟའ","པ་སངས།","རེས་གཟའ་པ་སངས་ལ་སྐྱེས་འབྲས། །དམེ་དང་མགར་བ་བྱེད་པ་དང་། །ཤ་དཀར་བླ་མ་སློབ་དཔོན་བྱམས། །ཟས་ནོར་དཀར་པོའི་རིགས་རྣམས་འཕྲོད། །བུ་སྐྱེས་ཚེ་རིང་དབང་རྣོ་ཕྱུག།"],
  ["རེས་གཟའ","སྤེན་པ།","སྤེན་པའི་ཉིན་ལ་སྐྱེས་པའི་བུ། ལས་ཀ་བཟང་ལ་གྲུབ་འབྲས་མཐོང། ཞི་བ་དང་རིམ་གྲོ་ལ་དགའ།"],
  ["རེས་གཟའ","ཉི་མ།","ཉི་མའི་ཉིན་ལ་སྐྱེས་པ་ལ། སྙིང་སྟོབས་ཆེ་ལ་དབང་ལྡན་ཡིན། ལས་ཀ་ཐག་ཆོད་ལ་གྲུབ་འབྲས་ལེགས།"],
  ["དུས་སྦྱོར","བུམ་པ།","བུམ་ཁྱིམ་ལ་སྐྱེས་བཅོ་བརྒྱད་ཀྱི། །ལོ་ཟླའི་གྲངས་ལ་མ་ཤི་ན། །བལོ་ལྡན་མཁས་ཤིང་སྙན་པ་ཆེ། །འཁོར་མང་ལོངས་སྤྱོད་མི་རབ་མགུ།"],
  ["དུས་སྦྱོར","སྟིག་གི།","སྟིག་གི་དུས་སྦྱོར་ལ་སྐྱེས་པ། ཤེས་རབ་ལྡན་ལ་གྲུབ་འབྲས་ལེགས། ཆོས་ལ་དད་ཅིང་ནང་མི་སྲིད་འཕེལ།"],
  ["ཏཏྐལ","འཁྲིག།","དུས་སྦྱོར་ཏཏྐལ་སྐྱེས་འབྲས་ལ། །ཁ་དོག་བཟང་ཞིང་གཟུགས་བྱད་ལེགས། །ནད་མེད་ཚེ་རིང་བསོད་ནམས་ལྡན། །གོས་རིགས་སྔོན་པོ་རང་ཟས་འཕྲོད།"],
  ["ཏཏྐལ","སྲིད་པ།","སྲིད་པར་སྐྱེས་པའི་འབྲས་བུ་ལ། ཞི་བདེ་ལྡན་ལ་ལོ་རྒྱུས་མཁས། གྲོགས་མང་ལ་ཕན་ཐོགས་མཐོང།"],
  ["རྟེན་འབྲེལ","སྲིད་པ།","རྟེན་འབྲེལ་སྲིད་པར་བཙས་པའི་འབྲས། །ཉིན་དགུ་ཟླ་བ་གཉིས་དང་གསུམ། །ལོ་དགུ་དག་ལ་མ་ཤི་ན། །གཞན་གྱི་ཆུང་མར་འཁྲིག་པ་སྲེད།"],
  ["རྟེན་འབྲེལ","ཐུབ་པ།","ཐུབ་པར་སྐྱེས་པའི་འབྲས་བུ་ལ། མཐར་ཐུག་གྲུབ་མཐར་ལྟ་བ་ལེགས། ཆོས་ལ་དད་ཅིང་ལས་ལ་མཁས།"],
  ["ཚེས","ཚེས་དགུ།","ཚེས་དགུར་བཙས་པ་བྱུར་གྱི་བུ། རྒྱལ་ཁང་གི་ལས་ལ་འགྲོ་བར་འགྱུར། ལོ་བདུན་ཅུ་རྩ་ལྔ་འཚོ་སྲིད།"],
  ["ཚེས","ཚེས་བཅུ།","ཚེས་བཅུར་སྐྱེས་པའི་བུ་ལ། ཆོས་ལ་དད་ཅིང་གྲུབ་འབྲས་མཐོང། ལས་ཀ་བཟང་ལ་ལོ་རྒྱུས་མཁས།"],
  ["ཚེས","ཚེས་བཅུ་གཅིག།","ཚེས་བཅུ་གཅིག་ལ་སྐྱེས་པ་ལ། དཔའ་བ་ལྡན་ལ་གྲུབ་འབྲས་ལེགས།"],
  ["ཕ་མ་མཐུན་སྦྱོར","ཕ་མ་གཉིས་ཀ་མཐུན།","ཕ་ནས་བརྩིས་པས་ལྷ་ཡི་བུ། །མ་ནས་བརྩིས་པས་ལྷ་ཡི་བུ། །ཕ་མ་གཉིས་ཀར་མཐུན་པར་བཟང་། ལྷ་ཡི་བུར་གྱུར་བདེ་སྐྱིད་ལྡན།"],
  ["ཕ་མ་མཐུན་སྦྱོར","ཕ་ལས་མཐུན།","ཕ་ལས་བརྩིས་ན་ལྷ་ཡི་བུ། མ་ལས་བརྩིས་ན་སྣང་བ་འབྲིང། ཕ་ལ་མཐུན་ཞིང་མར་འབྲིང་བ་སྟེ།"],
  ["སྤར་ཁ","དྭ་ལྕགས།","དྭ་སྟེང་འདིར་སྐྱེས་འབྲས་ལ། །དམེ་གྲི་དྭ་ཡི་ས་ཞེས་བྱ། །སེམས་དཀར་སྤྲོ་ཐུང་ཁོང་ཁྲོ་འཕེལ། །གཡོ་སྤོགས་ཆུང་ལ་དྲག་རྩལ་ཆེ། །སྙིང་སྟོབས་ཆེ་ཞིང་ཡོན་ཏན་འཕྲོད།"],
  ["སྤར་ཁ","གིན་ཤིང།","གིན་ཤིང་གི་སྤར་ཁ་ལ་སྐྱེས། ཤིང་གི་ཡོན་ཏན་ལྡན་ལ་ལོ་རྒྱུས་མང། ཆོས་ལ་དད་ཅིང་གྲོགས་ལ་བཀའ་དྲིན།"],
  ["སྤར་ཁ","ཁྱི།","ཁྱི་ཡི་སྤར་ཁ་ལ་སྐྱེས་པ། ཁྱི་ལྟར་གདུང་བ་ལྡན་ཞིང་གྲོགས་ལ་བརྩེ།"],
  ["སྨེ","གནམ་སྨེ་གཅིག་དཀར།","གཅིག་དཀར་འདིར་གང་སྐྱེས་པ། །ལྷ་ཡིས་བྱིན་པའི་བུ་ཡིན་ཏེ། །འགྲོ་བའི་ལས་བརྩོན་ཕོ་བློ་རྒོད། །མོ་ནི་སྲིད་རྒྱགས་མི་རྨེ་སྟེ།"],
  ["སྨེ","ཉི་མ་གཉིས།","ཉི་མ་གཉིས་ལ་སྐྱེས་པའི་བུ། གཟི་བརྗིད་ལྡན་ལ་ལས་ལ་མཁས། ལོ་བདུན་ཅུ་རྩ་ལྔ་འཚོ་སྲིད།"],
  ["སྨེ","མུ་གེ་གསུམ།","མུ་གེ་གསུམ་ལ་སྐྱེས་པ་ལ། དཀའ་ངལ་མང་ལ་ཅང་མི་གཞི། འོན་ཀྱང་བརྩོན་འགྲུས་ལས་གྲུབ་ཐོབ།"],
  ["མཁའ་འགྲོ","ལས་ཀྱི་མཁའ་འགྲོ།","ལས་ཀྱི་མཁའ་འགྲོ་ལ་སྐྱེས་པ། །ཆོས་མེད་ཕྱི་མ་ངན་སོང་འགྲོ། །ནད་མང་གསོ་དཀའ་མཚོ་རུ་ལྷུང་། །ཚེ་དཔག་མེད་པའི་གཟུངས་སྔགས་དང་། །ཚེ་བསྐྱེད་ཆོ་ག་འབད་ན་དགེ།"],
  ["མཁའ་འགྲོ","ཡེ་ཤེས་མཁའ་འགྲོ།","ཡེ་ཤེས་མཁའ་འགྲོར་སྐྱེས་པ་ལ། ཆོས་ལ་དད་ཅིང་གྲུབ་འབྲས་མཐོང། བླ་མ་ལ་གུས་ལ་ལྷ་ཡིས་བསྲུངས།"]
];

/* ══ 15 Kyetse sections config ══ */
const KYETSE_SECTIONS = [
  { id: "lo",       label: "ལོའི་འབྲས་བུ།",        category: "ལོའི་འབྲས་བུ།" },
  { id: "dawa",     label: "ཟླ་བའི་འབྲས་བུ།",      category: "ཟླ་བའི་འབྲས་བུ།" },
  { id: "zhag",     label: "ཞག་/ཉི་མའི་འབྲས་བུ།",  category: "ཞག་གམ་ཉི་མའི་འབྲས་བུ།" },
  { id: "dus",      label: "དུས་ཚོད་འབྲས་བུ།",     category: "དུས་ཚོད་འབྲས་བུ།" },
  { id: "karma",    label: "སྐྱེ་བརྟག་འཁོར་ལོའི་འབྲས་བུ།",   category: "སྐྱེ་བརྟག་འཁོར་ལོའི་འབྲས་བུ།" },
  { id: "reza",     label: "རེས་གཟའི་འབྲས་བུ།",    category: "རེས་གཟའི་འབྲས་བུ།" },
  { id: "skar",     label: "སྐར་མའི་འབྲས་བུ།",     category: "སྐར་མའི་འབྲས་བུ།" },
  { id: "dusjor",   label: "དུས་སྦྱོར་འབྲས་བུ།",   category: "དུས་སྦྱོར་འབྲས་བུ།" },
  { id: "tatkal",   label: "ཏཏྐལ་འབྲས་བུ།",         category: "ཏཏྐལ་འབྲས་བུ།" },
  { id: "tendrel",  label: "རྟེན་འབྲེལ་འབྲས་བུ།",  category: "རྟེན་འབྲེལ་འབྲས་བུ།" },
  { id: "tshe",     label: "ཚེས་གྲངས་འབྲས་བུ།",    category: "ཚེས་གྲངས་འབྲས་བུ།" },
  { id: "phama",    label: "ཕ་མ་མཐུན་སྦྱོར།",       category: "ཕ་མ་མཐུན་སྦྱོར།" },
  { id: "parkha",   label: "སྤར་ཁའི་འབྲས་བུ།",     category: "སྤར་ཁའི་འབྲས་བུ།" },
  { id: "sme",      label: "སྨེ་བའི་འབྲས་བུ།",      category: "སྨེ་བའི་འབྲས་བུ།" },
  { id: "khandro",  label: "མཁའ་འགྲོའི་འབྲས་བུ།",  category: "མཁའ་འགྲོའི་འབྲས་བུ།" }
];

/* ══ Birth year options (Tibetan 60-year cycle) ══ */
const BIRTH_YEARS = [
  "མེ་ཕོ་རྟ།","མེ་མོ་ལུག།","ས་ཕོ་སྤྲེལ།","ས་མོ་བྱི།","ལྕགས་ཕོ་སྟག།","ལྕགས་མོ་ཡོས།",
  "ཆུ་ཕོ་འབྲུག།","ཆུ་མོ་སྦྲུལ།","ཤིང་ཕོ་རྟ།","ཤིང་མོ་ལུག།","མེ་ཕོ་སྤྲེལ།","མེ་མོ་བྱི།",
  "ས་ཕོ་སྟག།","ས་མོ་ཡོས།","ལྕགས་ཕོ་འབྲུག།","ལྕགས་མོ་སྦྲུལ།","ཆུ་ཕོ་རྟ།","ཆུ་མོ་ལུག།",
  "ཤིང་ཕོ་སྤྲེལ།","ཤིང་མོ་བྱི།","མེ་ཕོ་སྟག།","མེ་མོ་ཡོས།","ས་ཕོ་འབྲུག།","ས་མོ་སྦྲུལ།",
  "ལྕགས་ཕོ་རྟ།","ལྕགས་མོ་ལུག།","ཆུ་ཕོ་སྤྲེལ།","ཆུ་མོ་བྱི།","ཤིང་ཕོ་སྟག།","ཤིང་མོ་ཡོས།",
  "མེ་ཕོ་གླང།","མེ་མོ་གླང།","ས་ཕོ་གླང།","ས་མོ་གླང།"
];

const DZ_MONTHS = ["ཟླ་བ་དང་པོ།","ཟླ་བ་གཉིས་པ།","ཟླ་བ་གསུམ་པ།","ཟླ་བ་བཞི་པ།","ཟླ་བ་ལྔ་པ།","ཟླ་བ་དྲུག་པ།","ཟླ་བ་བདུན་པ།","ཟླ་བ་བརྒྱད་པ།","ཟླ་བ་དགུ་པ།","ཟླ་བ་བཅུ་པ།","ཟླ་བ་བཅུ་གཅིག་པ།","ཟླ་བ་བཅུ་གཉིས་པ།"];
const DZ_DAYS = ["༡","༢","༣","༤","༥","༦","༧","༨","༩","༡༠","༡༡","༡༢","༡༣","༡༤","༡༥","༡༦","༡༧","༡༨","༡༩","༢༠","༢༡","༢༢","༢༣","༢༤","༢༥","༢༦","༢༧","༢༨","༢༩","༣༠"];

/* ══ State ══ */
let db = [];
let savedReports = JSON.parse(localStorage.getItem('kyetse_reports') || '[]');
let reportCounter = parseInt(localStorage.getItem('kyetse_counter') || '1');

/* ══ Init ══ */
window.onload = function() {
  populateYearDropdowns();
  populateDOBDropdowns();
  loadData();
  renderSavedReports();
};

function populateYearDropdowns() {
  ['father-animal-year','mother-animal-year'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    BIRTH_YEARS.forEach(y => {
      const opt = document.createElement('option');
      opt.value = y; opt.textContent = y;
      sel.appendChild(opt);
    });
  });
}

function populateDOBDropdowns() {
  // dob-day and dob-month are now plain text inputs; nothing to populate
}

/* ══ Load data from Sheet or Dummy ══ */
async function loadData() {
  if (SHEET_CSV_URL && SHEET_CSV_URL.length > 10) {
    try {
      const res = await fetch(SHEET_CSV_URL);
      const csv = await res.text();
      db = parseCSV(csv);
      const count = db.length;
      document.getElementById('sheet-status').textContent = `✅ Sheet: ${count} rows`;
      document.getElementById('sheet-status').style.background = '#2E6B3E';
      document.getElementById('sheet-status').style.color = '#fff';
    } catch(e) {
      loadDummy();
    }
  } else {
    loadDummy();
  }
  buildKyetseDropdowns();
}

function loadDummy() {
  db = DUMMY_DATA.map(r => ({ category: r[0], value: r[1], interpretation: r[2] }));
  document.getElementById('sheet-status').textContent = '⚠ Dummy Data';
  document.getElementById('sheet-status').style.background = 'var(--gold)';
  document.getElementById('sheet-status').style.color = 'var(--maroon)';
}

function parseCSV(csv) {
  const result = [];
  let i = 0;
  const len = csv.length;
  let currentCat = '';

  function parseField() {
    if (csv[i] === '"') {
      i++;
      let field = '';
      while (i < len) {
        if (csv[i] === '"' && csv[i+1] === '"') { field += '"'; i += 2; }
        else if (csv[i] === '"') { i++; break; }
        else { field += csv[i++]; }
      }
      return field.trim();
    } else {
      let field = '';
      while (i < len && csv[i] !== ',' && csv[i] !== '\n' && csv[i] !== '\r') {
        field += csv[i++];
      }
      return field.trim();
    }
  }

  // Skip header line
  while (i < len && csv[i] !== '\n') i++;
  i++;

  while (i < len) {
    while (i < len && (csv[i] === '\r')) i++;
    if (i >= len) break;

    const cat    = parseField(); if (i < len && csv[i] === ',') i++;
    const val    = parseField(); if (i < len && csv[i] === ',') i++;
    const interp = parseField();
    while (i < len && csv[i] !== '\n') i++;
    if (i < len) i++;

    const cleanCat = cat.replace(/།/g,'').trim();
    if (cleanCat) currentCat = cleanCat;

    if (!val || !interp || interp.includes('འདིར་འཇུག')) continue;

    result.push({
      category: currentCat,
      value: val.replace(/།\s*$/,'').trim() + (val.endsWith('།') ? '།' : ''),
      rawValue: val,
      interpretation: interp
    });
  }
  console.log('Parsed', result.length, 'rows from sheet');
  return result;
}

/* Strip trailing ། for fuzzy matching */
function normalize(s) {
  return (s || '').replace(/།\s*$/,'').trim();
}

/* ══ Build 15 Kyetse Dropdowns ══ */
function buildKyetseDropdowns() {
  const grid = document.getElementById('kyetse-grid');
  const togglesEl = document.getElementById('section-toggles');
  document.getElementById('loading-msg').style.display = 'none';
  grid.style.display = 'grid';
  grid.innerHTML = '';
  togglesEl.innerHTML = '';

  KYETSE_SECTIONS.forEach(sec => {
    const opts = db.filter(r => normalize(r.category) === normalize(sec.category));

    const div = document.createElement('div');
    div.className = 'kyetse-field';
    div.innerHTML = `<label>${sec.label}</label>`;
    const sel = document.createElement('select');
    sel.id = 'ks-' + sec.id;
    sel.innerHTML = `<option value="">----</option>`;
    opts.forEach(o => {
      const opt = document.createElement('option');
      opt.value = o.value;
      opt.textContent = o.value;
      sel.appendChild(opt);
    });
    sel.onchange = function() {
      this.classList.toggle('selected', !!this.value);
      autoPreview();
    };
    div.appendChild(sel);

    const hint = document.createElement('div');
    hint.className = 'hint-box';
    hint.id = 'hint-' + sec.id;
    sel.addEventListener('change', function() {
      const row = db.find(r => normalize(r.category) === normalize(sec.category) && normalize(r.value) === normalize(this.value));
      if (row) {
        const short = row.interpretation.substring(0, 80) + (row.interpretation.length > 80 ? '…' : '');
        hint.textContent = short;
        hint.classList.add('show');
      } else {
        hint.classList.remove('show');
      }
    });
    div.appendChild(hint);
    grid.appendChild(div);

    const tog = document.createElement('label');
    tog.className = 'toggle-item';
    tog.innerHTML = `<input type="checkbox" id="tog-${sec.id}" checked> <span>${sec.label}</span>`;
    togglesEl.appendChild(tog);
  });
}

/* ══ Auto preview on any change ══ */
function autoPreview() {
  if (document.getElementById('father-animal-year').value || document.getElementById('child-gender').value || anyKyetseSelected()) {
    generateReport();
  }
}

function anyKyetseSelected() {
  return KYETSE_SECTIONS.some(s => {
    const el = document.getElementById('ks-' + s.id);
    return el && el.value;
  });
}

/* ══ Section labels for flowing prose headers (matches PDF template) ══ */
const SECTION_PROSE_LABELS = {
  lo:       'དང་པོ་ལོའི་འབྲས་བུ་བཤད་པ།',
  dawa:     'གཉིས་པ་ཟླ་བའི་འབྲས་བུ་བཤད་པ།',
  zhag:     'གསུམ་པ་ཞག་གམ་ཉི་མའི་འབྲས་བུ་བཤད་པ།',
  dus:      'བཞི་པ་དུས་ཚོད་འབྲས་བུ་བཤད་པ།',
  karma:    'ལྔ་པ་སྐྱེ་བརྟག་འཁོར་ལོའི་འབྲས་བུ་བཤད་པ།',
  reza:     'དྲུག་པ་རེས་གཟའི་འབྲས་བུ་བཤད་པ།',
  skar:     'བདུན་པ་སྐར་མའི་འབྲས་བུ་བཤད་པ།',
  dusjor:   'བརྒྱད་པ་དུས་སྦྱོར་འབྲས་བུ་བཤད་པ།',
  tatkal:   'དགུ་པ་ཏཏྐལ་འབྲས་བུ་བཤད་པ།',
  tendrel:  'བཅུ་པ་རྟེན་འབྲེལ་འབྲས་བུ་བཤད་པ།',
  tshe:     'བཅུ་གཅིག་པ་ཚེས་གྲངས་འབྲས་བུ་བཤད་པ།',
  phama:    'བཅུ་གཉིས་པ་ཕ་མ་མཐུན་སྦྱོར་འབྲས་བུ་བཤད་པ།',
  parkha:   'བཅུ་གསུམ་པ་སྤར་ཁའི་འབྲས་བུ་བཤད་པ།',
  sme:      'བཅུ་བཞི་སྨེ་བའི་འབྲས་བུ་བཤད་པ།',
  khandro:  'བཅོ་ལྔ་མཁའ་འགྲོའི་འབྲས་བུ་བཤད་པ།'
};

/* ══ Build the opening intro sentence matching PDF template ══ */
function buildIntroSentence(fatherAnimalYear, fatherAge, motherAnimalYear, motherAge, gender, dobYear, dobMonth, dobDay, timingAnimal) {
  // Flow: དེ་ཡང་ཕ་[fatherAnimalYear]རང་ལོ་[fatherAge]དང་མ་[motherAnimalYear]རང་ལོ་[motherAge]
  //       སོན་པ་གཉིས་ལ་[gender][dobYear]ལོ་ཟླ་བ་[dobMonth]པའི་ཚེས་[dobDay]དུས་ཚོད་[timingAnimal]ཐོག་བཙས་པའི་[gender]འདི་ཉིད།

  let intro = `ཨོཾ་སྭ་སྟི། སྤང་རྟོགས་ཡོན་ཏན་མཆོག་གི་རྩེར་སོར་ཅིང་། །ལེགས་གསུངས་དམ་པས་ཆོས་ཀྱི་བདུད་རྩི་ཡིས། །འགྲོ་ཀུན་འཕགས་པའི་ས་ལ་དགོན་མཛད་པའི། །ངོ་མཚར་འབུམ་ལྡན་མཆོག་གསུམ་དམ་པས་སྲུངས། །སྐྱེ་དགུའི་ཡིད་ཀྱི་ཀུན་དན་བཞད་པའི་གཉེན། །འགྲོ་འདུལ་འཇམ་དབྱངས་བླ་མས་དགེ་ལེགས་སྩོལ། །ཞེས་མཆོད་པར་བརྗོད་པའི་ལྷ་རྫས་ཀྱིས་མདུན་བསུས་ཏེ་སྐྱེས་རྩིས་ཤིག་འབྲི་བ་ལགས།`;

  intro += ` དེ་ཡང་ཕ་`;
  if (fatherAnimalYear) intro += `${fatherAnimalYear}རང་ལོ་`;
  if (fatherAge) intro += `${fatherAge}`;
  intro += `དང་མ་`;
  if (motherAnimalYear) intro += `${motherAnimalYear}རང་ལོ་`;
  if (motherAge) intro += `${motherAge}`;
  intro += `སོན་པ་གཉིས་ལ་`;
  if (gender) intro += `${gender}`;
  if (dobYear) intro += `${dobYear}ལོ་`;
  if (dobMonth) intro += `ཟླ་བ་${dobMonth}`;
  if (dobDay) intro += `པའི་ཚེས་${dobDay}`;
  intro += `དུས་ཚོད་`;
  if (timingAnimal) intro += `${timingAnimal}`;
  intro += `ཐོག་བཙས་པའི་`;
  if (gender) intro += `${gender}`;
  intro += `འདི་ཉིད།`;

  return intro;
}

/* ══ Generate Report (PDF-template style: flowing prose) ══ */
function generateReport() {
  const fatherAnimalYear = document.getElementById('father-animal-year').value || '';
  const fatherAge        = document.getElementById('father-age').value         || '';
  const motherAnimalYear = document.getElementById('mother-animal-year').value || '';
  const motherAge        = document.getElementById('mother-age').value         || '';
  const gender           = document.getElementById('child-gender').value       || '';
  const dobYear          = document.getElementById('dob-year').value           || '';
  const dobMonth         = document.getElementById('dob-month').value         || '';
  const dobDay           = document.getElementById('dob-day').value           || '';
  const timingAnimal     = document.getElementById('timing-animal').value     || '';

  // Collect selected sections
  const selectedSections = [];
  KYETSE_SECTIONS.forEach(sec => {
    const togEl = document.getElementById('tog-' + sec.id);
    if (togEl && !togEl.checked) return;
    const selEl = document.getElementById('ks-' + sec.id);
    if (!selEl || !selEl.value) return;
    const row = db.find(r => normalize(r.category) === normalize(sec.category) && normalize(r.value) === normalize(selEl.value));
    if (!row) return;
    selectedSections.push({ sec, value: selEl.value, text: row.interpretation });
  });

  if (selectedSections.length === 0) {
    document.getElementById('report-doc').innerHTML = `<div class="report-empty"><div class="report-empty-icon">༄༅</div><div>སྐྱེས་རྩིས་འབྲི་སའི་ཤོག་གུ།</div></div>`;
    return;
  }

  const today = new Date().toLocaleDateString('en-GB');
  const reportNum = String(reportCounter).padStart(4, '0');

  // Build the intro sentence
  const introText = buildIntroSentence(fatherAnimalYear, fatherAge, motherAnimalYear, motherAge, gender, dobYear, dobMonth, dobDay, timingAnimal);

  // Build selected values summary line (like the PDF: རེས་འགྲོགས་ཟླ་སྐར་... etc.)
  const summaryParts = selectedSections.map(s => `${s.value}`).join('། ');

  // Build flowing section prose (each section: ༈ label + value in parens + text)
  let sectionsHTML = '';
  selectedSections.forEach((s, idx) => {
    const proseLbl = SECTION_PROSE_LABELS[s.sec.id] || s.sec.label;
    sectionsHTML += `
      <div class="report-section" id="rsec-${s.sec.id}">
        <div class="prose-section-header">
          <span class="prose-marker">༈</span>
          <span class="prose-section-label">${proseLbl}</span>
          <span class="prose-section-value">༼${s.value}༽</span>
        </div>
        <div class="report-section-body" contenteditable="true" id="rbody-${s.sec.id}">${s.text}</div>
      </div>`;
  });

  document.getElementById('report-doc').innerHTML = `
    <div class="report-header-block">
      <div class="report-mangalam">༄༅། །</div>
    </div>

    <div class="report-intro-block">
      <p class="report-intro-text" id="report-intro-text">${introText}</p>
      ${summaryParts ? `<p class="report-summary-line">${summaryParts}</p>` : ''}
    </div>

    ${sectionsHTML}

    <div class="report-footer">
      དེང་འདིར་མི་མཐུན་རྒུད་པ་ཀུན་ཞི་ནས། མཐུན་རྐྱེན་ཚེ་བསོད་བདེ་ལེགས་གོང་དུ་འཕེལ། །
      ཇི་ལྟར་བསམ་པ་ཡིད་བཞིན་ལྷུན་གྱིས་གྲུབ། །ཕུན་ཚོགས་དཔལ་ཡོན་རྒྱས་པའི་བཀྲ་ཤིས་ཤོག། སརྦ་མངྒལཾ།།  །།
    </div>`;

  showStatus('✅ སྐྱེས་རྩིས་གསར་བཟོ་ཚར་ཡི།');
}

/* ══ Save Report ══ */
function saveReport() {
  const gender = document.getElementById('child-gender').value || '';
  const dobYear = document.getElementById('dob-year').value || '';
  const name = (gender || 'བུ་') + (dobYear ? '་' + dobYear : '') || 'མིང་མེད།';
  const doc = document.getElementById('report-doc');
  if (doc.querySelector('.report-empty')) { showStatus('⚠ སྐྱེས་རྩིས་གསརཔ་བཟོ་མ་ཚུགས།'); return; }

  const report = {
    id: reportCounter,
    name: name,
    date: new Date().toLocaleDateString('en-GB'),
    html: doc.innerHTML,
    inputs: getInputSnapshot()
  };

  savedReports.unshift(report);
  if (savedReports.length > 50) savedReports = savedReports.slice(0, 50);
  reportCounter++;
  localStorage.setItem('kyetse_reports', JSON.stringify(savedReports));
  localStorage.setItem('kyetse_counter', reportCounter);
  renderSavedReports();
  showStatus('💾 སྐྱེས་རྩིས་བཀོལ་སྤྱོད་གྲུབ།');
}

function getInputSnapshot() {
  const snap = { personal: {}, kyetse: {} };
  snap.personal.fatherAnimalYear = document.getElementById('father-animal-year').value;
  snap.personal.fatherAge        = document.getElementById('father-age').value;
  snap.personal.motherAnimalYear = document.getElementById('mother-animal-year').value;
  snap.personal.motherAge        = document.getElementById('mother-age').value;
  snap.personal.gender           = document.getElementById('child-gender').value;
  snap.personal.dobYear          = document.getElementById('dob-year').value;
  snap.personal.dobMonth         = document.getElementById('dob-month').value;
  snap.personal.dobDay           = document.getElementById('dob-day').value;
  snap.personal.timingAnimal     = document.getElementById('timing-animal').value;
  KYETSE_SECTIONS.forEach(s => {
    const el = document.getElementById('ks-' + s.id);
    if (el) snap.kyetse[s.id] = el.value;
  });
  return snap;
}

function loadSnapshot(snap) {
  if (!snap) return;
  const p = snap.personal;
  document.getElementById('father-animal-year').value = p.fatherAnimalYear || '';
  document.getElementById('father-age').value         = p.fatherAge        || '';
  document.getElementById('mother-animal-year').value = p.motherAnimalYear || '';
  document.getElementById('mother-age').value         = p.motherAge        || '';
  document.getElementById('child-gender').value       = p.gender           || '';
  document.getElementById('dob-year').value           = p.dobYear          || '';
  document.getElementById('dob-month').value          = p.dobMonth         || '';
  document.getElementById('dob-day').value            = p.dobDay           || '';
  document.getElementById('timing-animal').value      = p.timingAnimal     || '';
  KYETSE_SECTIONS.forEach(s => {
    const el = document.getElementById('ks-' + s.id);
    if (el && snap.kyetse) { el.value = snap.kyetse[s.id] || ''; el.classList.toggle('selected', !!el.value); }
  });
  generateReport();
}

/* ══ Render saved reports ══ */
function renderSavedReports() {
  const card = document.getElementById('saved-card');
  const list = document.getElementById('saved-list');
  if (savedReports.length === 0) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  list.innerHTML = savedReports.map((r,i) => `
    <div class="saved-item">
      <div class="saved-item-info">
        <div class="saved-item-name">${r.name}</div>
        <div class="saved-item-meta">#${r.id} &nbsp;·&nbsp; ${r.date}</div>
      </div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-sm btn-gold" onclick="openSaved(${i})">འབྱེད།</button>
        <button class="btn btn-sm btn-outline" onclick="deleteSaved(${i})">✕</button>
      </div>
    </div>`).join('');
}

function openSaved(i) {
  const r = savedReports[i];
  document.getElementById('report-doc').innerHTML = r.html;
  if (r.inputs) loadSnapshot(r.inputs);
  showStatus('📂 སྔོན་གྱི་སྐྱེས་རྩིས་ཕྱེས་གྲུབ།');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteSaved(i) {
  savedReports.splice(i, 1);
  localStorage.setItem('kyetse_reports', JSON.stringify(savedReports));
  renderSavedReports();
}

/* ══════════════════════════════════════════════════════════
   DOCX EXPORT — pure browser, zero dependencies, works offline
   Builds a real .docx (OOXML) ZIP from scratch using only
   native browser APIs: TextEncoder + Uint8Array + Blob.
   ══════════════════════════════════════════════════════════ */

/* ── Minimal ZIP builder ── */
function makeDocx(files) {
  // files: [{ name, data: Uint8Array }]
  const enc = new TextEncoder();
  function uint8(str) { return enc.encode(str); }
  function u16le(n) { return [n & 0xff, (n >> 8) & 0xff]; }
  function u32le(n) { return [n & 0xff, (n>>8)&0xff, (n>>16)&0xff, (n>>24)&0xff]; }

  function crc32(buf) {
    let c = 0xFFFFFFFF;
    const t = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let v = i;
      for (let j = 0; j < 8; j++) v = (v & 1) ? (0xEDB88320 ^ (v >>> 1)) : (v >>> 1);
      t[i] = v;
    }
    for (let i = 0; i < buf.length; i++) c = t[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  function concat(...arrays) {
    const total = arrays.reduce((s, a) => s + a.length, 0);
    const out = new Uint8Array(total);
    let offset = 0;
    for (const a of arrays) { out.set(a, offset); offset += a.length; }
    return out;
  }

  const localHeaders = [];
  const centralDirs = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = uint8(file.name);
    const data = file.data instanceof Uint8Array ? file.data : uint8(file.data);
    const crc = crc32(data);
    const local = concat(
      new Uint8Array([0x50,0x4B,0x03,0x04]),   // sig
      new Uint8Array([0x14,0x00]),               // version needed
      new Uint8Array([0x00,0x00]),               // flags
      new Uint8Array([0x00,0x00]),               // compression (stored)
      new Uint8Array([0x00,0x00,0x00,0x00]),     // mod time/date
      new Uint8Array(u32le(crc)),
      new Uint8Array(u32le(data.length)),
      new Uint8Array(u32le(data.length)),
      new Uint8Array(u16le(nameBytes.length)),
      new Uint8Array([0x00,0x00]),               // extra len
      nameBytes,
      data
    );
    localHeaders.push(local);

    const central = concat(
      new Uint8Array([0x50,0x4B,0x01,0x02]),
      new Uint8Array([0x14,0x00,0x14,0x00]),
      new Uint8Array([0x00,0x00,0x00,0x00]),
      new Uint8Array([0x00,0x00,0x00,0x00]),
      new Uint8Array(u32le(crc)),
      new Uint8Array(u32le(data.length)),
      new Uint8Array(u32le(data.length)),
      new Uint8Array(u16le(nameBytes.length)),
      new Uint8Array([0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]),
      new Uint8Array(u32le(offset)),
      nameBytes
    );
    centralDirs.push(central);
    offset += local.length;
  }

  const cdStart = offset;
  const cdBytes = concat(...centralDirs);
  const eocd = concat(
    new Uint8Array([0x50,0x4B,0x05,0x06,0x00,0x00,0x00,0x00]),
    new Uint8Array(u16le(files.length)),
    new Uint8Array(u16le(files.length)),
    new Uint8Array(u32le(cdBytes.length)),
    new Uint8Array(u32le(cdStart)),
    new Uint8Array([0x00,0x00])
  );

  return concat(...localHeaders, cdBytes, eocd);
}

/* ── XML helpers ── */
function xmlEsc(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function wPara(opts) {
  // opts: { text, font, size, bold, color, align, spBefore, spAfter, borderBottom, borderTop, shade, italic, lineSpacing }
  const pPr = [];
  if (opts.align) pPr.push(`<w:jc w:val="${opts.align}"/>`);
  const hasBefore = opts.spBefore != null;
  const hasAfter  = opts.spAfter  != null;
  const hasLine   = opts.lineSpacing != null;
  if (hasBefore || hasAfter || hasLine) {
    let spacingAttr = '';
    if (hasBefore) spacingAttr += ` w:before="${opts.spBefore}"`;
    if (hasAfter)  spacingAttr += ` w:after="${opts.spAfter}"`;
    if (hasLine)   spacingAttr += ` w:line="${opts.lineSpacing}" w:lineRule="auto"`;
    pPr.push(`<w:spacing${spacingAttr}/>`);
  }
  if (opts.borderBottom) {
    pPr.push(`<w:pBdr><w:bottom w:val="single" w:sz="6" w:space="4" w:color="${opts.borderBottom}"/></w:pBdr>`);
  }
  if (opts.borderTop) {
    pPr.push(`<w:pBdr><w:top w:val="single" w:sz="6" w:space="4" w:color="${opts.borderTop}"/></w:pBdr>`);
  }
  if (opts.shade) {
    pPr.push(`<w:shd w:val="clear" w:color="auto" w:fill="${opts.shade}"/>`);
  }

  const rPr = [];
  if (opts.font) rPr.push(`<w:rFonts w:ascii="${opts.font}" w:hAnsi="${opts.font}" w:cs="${opts.font}"/>`);
  if (opts.size) rPr.push(`<w:sz w:val="${opts.size}"/><w:szCs w:val="${opts.size}"/>`);
  if (opts.bold) rPr.push(`<w:b/><w:bCs/>`);
  if (opts.color) rPr.push(`<w:color w:val="${opts.color}"/>`);

  const run = opts.text != null
    ? `<w:r>${rPr.length ? `<w:rPr>${rPr.join('')}</w:rPr>` : ''}<w:t xml:space="preserve">${xmlEsc(opts.text)}</w:t></w:r>`
    : '';

  return `<w:p>${pPr.length ? `<w:pPr>${pPr.join('')}</w:pPr>` : ''}${run}</w:p>`;
}

function wTable(rows, colWidths) {
  const totalW = colWidths.reduce((a,b) => a+b, 0);
  const rowsXml = rows.map(cells => {
    const cellsXml = cells.map((cell, ci) => {
      const tcPr = [
        `<w:tcW w:w="${colWidths[ci]}" w:type="dxa"/>`,
        `<w:tcBorders>
          <w:top w:val="single" w:sz="2" w:color="D9C9A3"/>
          <w:left w:val="single" w:sz="2" w:color="D9C9A3"/>
          <w:bottom w:val="single" w:sz="2" w:color="D9C9A3"/>
          <w:right w:val="single" w:sz="2" w:color="D9C9A3"/>
        </w:tcBorders>`,
        `<w:tcMar><w:top w:w="80" w:type="dxa"/><w:left w:w="120" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar>`
      ];
      if (cell.shade) tcPr.push(`<w:shd w:val="clear" w:color="auto" w:fill="${cell.shade}"/>`);
      return `<w:tc><w:tcPr>${tcPr.join('')}</w:tcPr>${wPara(cell)}</w:tc>`;
    });
    return `<w:tr>${cellsXml.join('')}</w:tr>`;
  });
  return `<w:tbl>
    <w:tblPr>
      <w:tblW w:w="${totalW}" w:type="dxa"/>
      <w:tblBorders>
        <w:insideH w:val="single" w:sz="2" w:color="D9C9A3"/>
        <w:insideV w:val="single" w:sz="2" w:color="D9C9A3"/>
      </w:tblBorders>
    </w:tblPr>
    <w:tblGrid>${colWidths.map(w=>`<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>
    ${rowsXml.join('\n')}
  </w:tbl>`;
}

/* ══ Export DOCX (PDF-template style: flowing prose) ══ */
async function exportDOCX() {
  const reportEl = document.getElementById('report-doc');
  if (reportEl.querySelector('.report-empty')) { showStatus('⚠ སྐྱེས་རྩིས་གསརཔ་བཟོ་མ་ཚུགས།'); return; }

  showStatus('⏳ Word ཡིག་ཆ་གསར་བཟོ་བཞིན་པ།…');

  try {
    const fatherAnimalYear = document.getElementById('father-animal-year').value || '';
    const fatherAge        = document.getElementById('father-age').value         || '';
    const motherAnimalYear = document.getElementById('mother-animal-year').value || '';
    const motherAge        = document.getElementById('mother-age').value         || '';
    const gender           = document.getElementById('child-gender').value       || '';
    const dobYear          = document.getElementById('dob-year').value           || '';
    const dobMonth         = document.getElementById('dob-month').value         || '';
    const dobDay           = document.getElementById('dob-day').value           || '';
    const timingAnimal     = document.getElementById('timing-animal').value     || '';

    // Collect sections from rendered report (respects any user edits in contenteditable)
    const sections = [];
    KYETSE_SECTIONS.forEach(s => {
      const togEl = document.getElementById('tog-' + s.id);
      if (togEl && !togEl.checked) return;
      const bodyEl  = document.getElementById('rbody-' + s.id);
      const valEl   = document.querySelector(`#rsec-${s.id} .prose-section-value`);
      if (bodyEl && valEl) {
        // Strip the ༼ ༽ wrappers from the value display
        const rawVal = valEl.textContent.replace(/^༼|༽$/g,'').trim();
        sections.push({
          id: s.id,
          proseLabel: SECTION_PROSE_LABELS[s.id] || s.label,
          value: rawVal,
          text: bodyEl.innerText
        });
      }
    });

    const FONT   = 'Noto Serif Tibetan';
    const MAROON = '6B1A1A';
    const GOLD   = 'C9922A';
    const MUTED  = '7A6A50';
    const DARK   = '1C1008';
    const CREAM  = 'FDF7EC';
    const RED_BORDER = 'AA0000';

    // ── Build body XML ──
    let body = '';

    // ── Opening: ༄༅། ། centered (matches PDF) ──
    body += wPara({ text: '༄༅།  །', font: FONT, size: 32, bold: true, color: DARK, align: 'center', spBefore: 0, spAfter: 240 });

    // ── Invocation prayer paragraph ──
    const invocation = `ཨོཾ་སྭ་སྟི། སྤང་རྟོགས་ཡོན་ཏན་མཆོག་གི་རྩེར་སོར་ཅིང་། །ལེགས་གསུངས་དམ་པས་ཆོས་ཀྱི་བདུད་རྩི་ཡིས། །འགྲོ་ཀུན་འཕགས་པའི་ས་ལ་དགོན་མཛད་པའི། །ངོ་མཚར་འབུམ་ལྡན་མཆོག་གསུམ་དམ་པས་སྲུངས། །སྐྱེ་དགུའི་ཡིད་ཀྱི་ཀུན་དན་བཞད་པའི་གཉེན། །འགྲོ་འདུལ་འཇམ་དབྱངས་བླ་མས་དགེ་ལེགས་སྩོལ། །ཞེས་མཆོད་པར་བརྗོད་པའི་ལྷ་རྫས་ཀྱིས་མདུན་བསུས་ཏེ་སྐྱེས་རྩིས་ཤིག་འབྲི་བ་ལགས།`;
    body += wPara({ text: invocation, font: FONT, size: 22, color: DARK, spBefore: 0, spAfter: 120, lineSpacing: 360 });

    // ── Intro sentence: father/mother/child details ──
    let introLine = `དེ་ཡང་ཕ་`;
    if (fatherAnimalYear) introLine += `${fatherAnimalYear}རང་ལོ་`;
    if (fatherAge) introLine += `${fatherAge}`;
    introLine += `དང་མ་`;
    if (motherAnimalYear) introLine += `${motherAnimalYear}རང་ལོ་`;
    if (motherAge) introLine += `${motherAge}`;
    introLine += `སོན་པ་གཉིས་ལ་`;
    if (gender) introLine += `${gender}`;
    if (dobYear) introLine += `${dobYear}ལོ་`;
    if (dobMonth) introLine += `ཟླ་བ་${dobMonth}`;
    if (dobDay) introLine += `པའི་ཚེས་${dobDay}`;
    introLine += `དུས་ཚོད་`;
    if (timingAnimal) introLine += `${timingAnimal}`;
    introLine += `ཐོག་བཙས་པའི་`;
    if (gender) introLine += `${gender}`;
    introLine += `འདི་ཉིད།`;

    // Append the value summary (like the PDF: རེས་འགྲོགས་ཟླ་སྐར་རགས་པ་ལག་ལ། ...)
    if (sections.length > 0) {
      introLine += ` ${sections.map(s => s.value).join('། ')}།`;
    }
    introLine += ` བཅས་ཀྱི་འབྲས་བུ་ཞིབ་ཏུ་བསྟན་པ་ནི།`;

    body += wPara({ text: introLine, font: FONT, size: 22, color: DARK, spBefore: 0, spAfter: 200, lineSpacing: 360 });

    // ── Each Kyetse section as flowing prose ──
    sections.forEach((sec, idx) => {
      // Section header line: ༈ + prose label + ༼value༽
      const headerText = `༈  ${sec.proseLabel}  ༼${sec.value}༽`;
      body += wPara({ text: headerText, font: FONT, size: 22, bold: true, color: MAROON, spBefore: 200, spAfter: 80 });

      // Section body text - each line as a paragraph
      const lines = sec.text.split('\n').filter(l => l.trim());
      if (lines.length === 0) {
        body += wPara({ text: sec.text.trim(), font: FONT, size: 22, color: DARK, spBefore: 0, spAfter: 80, lineSpacing: 360 });
      } else {
        lines.forEach(line => {
          body += wPara({ text: line, font: FONT, size: 22, color: DARK, spBefore: 0, spAfter: 60, lineSpacing: 360 });
        });
      }
    });

    // ── Closing verse (matches PDF exactly) ──
    body += wPara({ text: '', spBefore: 200, spAfter: 0 });
    body += wPara({
      text: 'དེང་འདིར་མི་མཐུན་རྒུད་པ་ཀུན་ཞི་ནས། །མཐུན་རྐྱེན་ཚེ་བསོད་བདེ་ལེགས་གོང་དུ་འཕེལ། །ཇི་ལྟར་བསམ་པ་ཡིད་བཞིན་ལྷུན་གྱིས་གྲུབ། །ཕུན་ཚོགས་དཔལ་ཡོན་རྒྱས་པའི་བཀྲ་ཤིས་ཤོག། སརྦ་མངྒལཾ།། །།',
      font: FONT, size: 22, color: DARK, align: 'center',
      spBefore: 160, spAfter: 0, borderTop: GOLD
    });

    // ── Assemble document.xml ──
    const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing">
  <w:body>
    ${body}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>`;

    // ── OOXML supporting files ──
    const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
</Types>`;

    const relsMain = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

    const wordRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
</Relationships>`;

    const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Noto Serif Tibetan" w:hAnsi="Noto Serif Tibetan" w:cs="Noto Serif Tibetan"/>
        <w:sz w:val="22"/>
        <w:szCs w:val="22"/>
        <w:lang w:val="dz-BT" w:eastAsia="dz-BT" w:bidi="dz-BT"/>
      </w:rPr>
    </w:rPrDefault>
  </w:docDefaults>
</w:styles>`;

    const settingsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:defaultTabStop w:val="720"/>
</w:settings>`;

    // ── Pack into ZIP / DOCX ──
    const enc = new TextEncoder();
    const zipBytes = makeDocx([
      { name: '[Content_Types].xml',       data: enc.encode(contentTypes) },
      { name: '_rels/.rels',               data: enc.encode(relsMain) },
      { name: 'word/document.xml',         data: enc.encode(documentXml) },
      { name: 'word/_rels/document.xml.rels', data: enc.encode(wordRels) },
      { name: 'word/styles.xml',           data: enc.encode(stylesXml) },
      { name: 'word/settings.xml',         data: enc.encode(settingsXml) },
    ]);

    const blob = new Blob([zipBytes], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Kyetse_${(gender||'bu')}_${dobYear||'unknown'}_${new Date().toISOString().slice(0,10)}.docx`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    showStatus('✅ Word ཡིག་ཆ་བཀོལ་སྤྱོད་གྲུབ།');

  } catch (err) {
    console.error('DOCX export error:', err);
    showStatus('⚠ Error: ' + err.message);
  }
}

/* ══ Clear form ══ */
function clearForm() {
  document.getElementById('father-animal-year').value = '';
  document.getElementById('father-age').value         = '';
  document.getElementById('mother-animal-year').value = '';
  document.getElementById('mother-age').value         = '';
  document.getElementById('child-gender').value       = '';
  document.getElementById('dob-year').value           = '';
  document.getElementById('dob-month').value          = '';
  document.getElementById('dob-day').value            = '';
  document.getElementById('timing-animal').value      = '';
  KYETSE_SECTIONS.forEach(s => {
    const el = document.getElementById('ks-' + s.id);
    if (el) { el.value = ''; el.classList.remove('selected'); }
    const hint = document.getElementById('hint-' + s.id);
    if (hint) hint.classList.remove('show');
  });
  document.getElementById('report-doc').innerHTML = `<div class="report-empty"><div class="report-empty-icon">༄༅</div><div>སྐྱེས་རྩིས་འབྲི་སའི་ཤོག་གུ།</div></div>`;
}

function showStatus(msg) {
  const bar = document.getElementById('status-bar');
  bar.textContent = msg;
  bar.classList.add('show');
  setTimeout(() => bar.classList.remove('show'), 3000);
}
