new Vue({
  el: '#app',
  data: {
    namesFemale: [
      'Anna',
      'Berta',
      'Claudia',
      'Dörte',
      'Elfriede',
      'Franziska',
      'Gudrun',
      'Gundula',
      'Gisela',
      'Hildegard',
      'Hanna',
      'Ina',
      'Julia',
      'Judith',
      'Klothilde',
      'Krimmhild',
      'Laura',
      'Lieselotte',
      'Mona',
      'Nina',
      'Olga',
      'Petra',
      'Rosa',
      'Rita',
      'Ruby',
      'Sieglinde',
      'Sara',
      'Tamara',
      'Wilma'
    ],
    namesMale: [
      'Alrik',
      'Björn',
      'Claus',
      'Dirk',
      'Erwin',
      'Fritz',
      'Günter',
      'Gustav',
      'Henning',
      'Holger',
      'Ijob',
      'Jens',
      'Jochen',
      'Karl',
      'Lars',
      'Michel',
      'Norbert',
      'Otto',
      'Peter',
      'Rolf',
      'Rudolf',
      'Rudy',
      'Siegfried',
      'Samuel',
      'Tore',
      'Wilfried'
    ],
    races: [
      'Mensch',
      'Elf',
      'Zwerg',
      'Halbelf',
      'Halbork',
      'Halbling',
      'Gnom',
      'Ork',
      'Oger'
    ],
    skills: [
      'kochen',
      'schreiben',
      'Geschichten erzählen',
      'kämpfen',
      'jagen',
      'heilen',
      'schleichen',
      'singen',
      'musizieren',
      'nähen',
      'tanzen',
      'Tränke brauen',
      'zaubern',
      'zeichnen',
      'mit Tieren umgehen',
      'klettern',
      'handwerken',
      'schlafen',
      'töpfern',
      'fischen',
      'stehlen',
      'handeln',
      'verschiedene Sprachen sprechen',
      'lehren'
    ],
    fame: [
      'ihre hervorragende Bratwurst',
      'marodierende Orkhorden',
      'finstere Wälder',
      'ihre Bürokratie',
      'den härtesten Rum',
      'nichts besonderes',
      'den feinsten Honig',
      'ihre drakonischen Gesetze',
      'ihre wunderschöne Landschaft',
      'die hübschesten Mädchen',
      'das beste Bier weit und breit'
    ],
    disadvantages: [
      'Tollpatschigkeit',
      'Angst vor Spinnen',
      'schwache Konstitution',
      'Dummheit',
      'Spielsucht',
      'Schulden',
      'Schüchternheit',
      'Kleptomanie',
      'Rachsucht',
      'Ungedult',
      'Blindheit',
      'Stottern',
      'Lispeln',
      'Müdigkeit',
      'Verfressenheit',
      'Jähzornigkeit',
      'Alberkeit',
      'negative Weltansicht',
      'Neugier',
      'Angstlichkeit',
      'schwache Blase'
    ],
    secrets: [
      'ich ein Muttermal am Hintern habe',
      'ich nicht an Götter glaube',
      'ich meine Seele verpfändet habe',
      'ich verheiratet bin',
      'ich von zu Hause weggelaufen bin',
      'meine Würfel gezinkt sind',
      'ich nicht lesen und schreiben kann',
      'ich an einem Freitag dem 13. geboren wurde',
      'ich schnarche',
      'ich furchbar schnell betrunken bin',
      'ich eine Perücke trage',
      'ich desertiert bin',
      'ich von Adel bin',
      'ich Gedichte mag',
      'ich von einer Hexe verflucht wurde',
      'ich ein uneheliches Kind habe'
    ],
    signs: [
      'meinem seltsamen Hut',
      'meinem Glaubenssymbol',
      'einer Narbe im Gesicht',
      'meiner besonderen Frisur',
      'meiner großen Nase',
      'meinem Akzent',
      'meiner Tätowierung',
      'der Feder an meinem Hut',
      'der Spielkarte an meinem Hut',
      'meinem Musikinstrument',
      'meinem prächtigem Bart',
      'meinem Herold der mir vorraus eilt',
      'meiner prunkvollen Kleidung',
      'meiner abgewetzten Kleidung',
      'meiner wunderschönen Stimme',
      'meiner einzigartigen Waffe'
    ],
    jobs: [
      ['Alchemist', 'Alchemistin'],
      ['Bäcker', 'Bäckerin'],
      ['Bauer', 'Bäuerin'],
      ['Bote', 'Botin' ],
      ['Falkner', 'Falknerin'],
      ['Gerber', 'Gerberin'],
      ['Koch', 'Köchin'],
      ['Händler', 'Händlerin'],
      ['Heiler', 'Heilerin'],
      ['Jäger', 'Jägerin' ],
      ['Matrose', 'Matrosin'],
      ['Müller', 'Müllerin'],
      ['Priester', 'Priesterin'],
      ['Schreiber', 'Schreiberin'],
      ['Schmied', 'Schmiedin'],
      ['Schneider', 'Schneiderin' ],
      ['Schreiner', 'Schreinerin'],
      ['Soldat', 'Soldatin'],
      ['Söldner', 'Söldnerin' ],
      ['Wirt', 'Wirtin'],
      ['Weber', 'Weberin']
    ],
    currentRace: "",
    currentSkill: "",
    skillList: new Array(),
    currentDisadvantage: "",
    disadvantageList: new Array(),
    currentName: "",
    currentAge: "",
    currentSecret: "",
    currentSign: "",
    currentFame: "",
    currentCity: "",
    currentLand: "",
    currentSign: "",
    currentOther: "",
    editMode: true,
    printMode: false,
  },
  methods: {
    switchToPrintView: function() {
      this.printMode = true;
      this.editMode  = false;
    },
    switchToEditView: function() {
      this.printMode = false;
      this.editMode  = true;
    },
    getRandomInt: function(max) {
      var min = 0;
      return Math.floor(Math.random() * (max - min)) + min;
    },
    randomResult: function(suggestionArray){
      var length = suggestionArray.length;
      var random = this.getRandomInt(length);
      return suggestionArray[random];
    },
    randomRace: function(){
      this.currentRace = this.randomResult(this.races);
    },
    randomSkill: function(){
      this.currentSkill = this.randomResult(this.skills);
    },
    addSkill: function(){
      this.skillList.push(this.currentSkill);
    },
    popSkill: function(skill){
      var pos = this.skillList.indexOf(skill);
      this.skillList.splice(pos, 1);
    },
    randomDisadvantage: function(){
      this.currentDisadvantage = this.randomResult(this.disadvantages);
    },
    addDisadvantage: function(){
      this.disadvantageList.push(this.currentDisadvantage);
    },
    popDisadvantage: function(disadvantage){
      var pos = this.disadvantageList.indexOf(disadvantage);
      this.disadvantageList.splice(pos, 1);
    },
    randomName: function(gender){
      if(gender == "f"){
        this.currentName = this.randomResult(this.namesFemale);
      }
      else if(gender == "m"){
        this.currentName = this.randomResult(this.namesMale);
      }
    },
    randomAge: function(){
      this.currentAge = this.getRandomInt(115) + 15;
    },
    randomSecret: function(){
      this.currentSecret = this.randomResult(this.secrets);
    },
    randomSign: function(){
      this.currentSign = this.randomResult(this.signs);
    },
    randomFame: function(){
      this.currentFame = this.randomResult(this.fame);
    },
     randomAll: function(gender){
      this.randomName(gender);
      this.randomRace();
      this.randomAge();
      this.randomSkill();
      this.randomDisadvantage();
      this.randomSecret();
      this.randomSign();
      this.randomFame();
    },
  }
});
