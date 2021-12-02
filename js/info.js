var playerInfo = document.querySelector(".players");
var levelInfo = document.querySelector(".levels");
var nameInput = document.querySelector(".name");
var getNameBtn = document.querySelector(".button");

const playerTemplateText = document.querySelector(".playerTemplate");
const playerTemplate = Handlebars.compile(playerTemplateText.innerHTML)

const levelTemplateText = document.querySelector(".levelTemplate");
const plevelTemplate = Handlebars.compile(levelTemplateText.innerHTML)

axios
.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(result){
   playerInfo.innerHTML = playerTemplate({
    players : result.data
   });
});

function getPlayerName(name){

}getNameBtn.addEventListener('click', getPlayerName);