var vm = new Vue({
  el: '#app',
  data: {
    namesFemale:[],
    namesMale:[],
    races:[],
    skills:[],
    fame:[],
    disadvantages:[],
    secrets:[],
    signs:[],
    jobsFemale:[],
    jobsMale:[],
    currentRace: "",
    currentSkill: "",
    dadName: "",
    dadJob: "",
    momName: "",
    momJob: "",
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
    printMode: false
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
        return this.randomResult(this.namesFemale);
      }
      else if(gender == "m"){
         return this.randomResult(this.namesMale);
      }
    },
    getCurrentName: function(gender){
      this.currentName = this.randomName(gender);
    },
    randomJob: function(gender){
      if(gender == "f"){
        return this.randomResult(this.jobsFemale);
      }
      else if(gender == "m"){
        return this.randomResult(this.jobsMale);
      }
    },
    randomDadName: function(){
      this.dadName = this.randomName("m");
    },
    randomMomName: function(){
      this.momName = this.randomName("f");
    },
    randomDadJob: function(){
      this.dadJob = this.randomJob("m");
    },
    randomMomJob: function(){
      this.momJob = this.randomJob("f");
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
      this.getCurrentName(gender);
      this.randomDadName();
      this.randomDadJob();
      this.randomMomName();
      this.randomMomJob();
      this.randomRace();
      this.randomAge();
      this.randomSkill();
      this.randomDisadvantage();
      this.randomSecret();
      this.randomSign();
      this.randomFame();
    },
    readTextFile: function(file){

        var result;
        var rawFile = new XMLHttpRequest();
        rawFile.onreadystatechange = function (){
            if(rawFile.readyState === 4 && rawFile.status == 200){
                    result = rawFile.responseText.trim().split("\n");
            }
        }
        rawFile.open("GET", file, false);
        rawFile.overrideMimeType('text/plain');
        rawFile.send(null);

        return result;
    },
    init: function(){
        this.namesFemale = this.readTextFile("data/namesFemale.txt");
        this.namesMale = this.readTextFile("data/namesMale.txt");
        this.races = this.readTextFile("data/races.txt");
        this.skills = this.readTextFile("data/skills.txt");
        this.fame = this.readTextFile("data/fame.txt");
        this.disadvantages = this.readTextFile("data/disadvantages.txt");
        this.secrets = this.readTextFile("data/secrets.txt");
        this.signs = this.readTextFile("data/signs.txt");
        this.jobsFemale = this.readTextFile("data/jobsFemale.txt");
        this.jobsMale = this.readTextFile("data/jobsMale.txt");
    }
  }
});

vm.init();
