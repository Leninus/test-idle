var gameData = 
{
    gold: 0,
    gpc: 1,
    gpccost: 10
}
var mainGameLoop = window.setInterval(function() 
{
    mineGold()
}, 1000)
var saveGameLoop = window.setInterval(function()
{
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)
var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null)
{
    gameData = savegame
}

function mineGold()
{
    gameData.gold += gameData.gpc 
    document.getElementById("gold").innerHTML = gameData.gold + " Gold Mined"
}
function buyGPC()
{
    if (gameData.gold >= gameData.gpccost)
    {
        gameData.gold -= gameData.gpccost
        gameData.gpc += 1
        gameData.gpccost *= 2
        document.getElementById("gold").innerHTML = gameData.gold + " Gold Miend"
        document.getElementById("pCUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.gpc + ") Cost: " + gameData.gpccost + " Gold"
    }
}