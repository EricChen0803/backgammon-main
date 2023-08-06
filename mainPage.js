var color = 0;
var array = new Array(15);
var windowOpen = false;
var RedScore = 0;
var BlueScore = 0;
function initialize(){
    var welcomePage = document.getElementById("welcome");
    if(welcomePage!=null){
        welcomePage.remove();
    }
    closeWindow();
    document.getElementById("board").innerHTML = "";
    var buttonContainer = document.getElementById("board");
    for (var i = 0; i < 15; i++) {
        var row = document.createElement("div"); 
        row.classList.add("row"); 
    
        for (var j = 0; j < 15; j++) {
            var bt = document.createElement("button"); 
            bt.onclick = placeButton;
            bt.id = (i)+","+(j);
            bt.classList.add("boardpix");
            bt.classList.add("grid-button"); 
    
            row.appendChild(bt);
        }
    
        buttonContainer.appendChild(row); 
        document.getElementById("start").textContent = "Restart Game";
        changeCurrentRound();
    }
    color = 0;
    array = new Array(15);
    for (let i = 0; i < 15; i++) {
        array[i] = new Array(15);
        for(let j=0; j<15; j++){
            array[i][j]="U";
        }
      }
    changeCurrentRound();
    }
function placeButton(){
    if((this.classList.contains("Red"))||(this.classList.contains("Blue"))){
        document.getElementById("wrongclick").play();
        return;
    }
    if(color == 0){
        this.classList.add("Red");
        color = 1;
        var elementId = this.id;
        var parts = elementId.split(',');
        var first = parseInt(parts[0]);
        var second = parseInt(parts[1]);
        array[first][second]="R";
        document.getElementById("soundclick").play();
        check_win();
    }
    else{
        this.classList.add("Blue");
        var elementId = this.id;
        var parts = elementId.split(',');
        var first = parseInt(parts[0]);
        var second = parseInt(parts[1]);
        array[first][second]="B";
        color = 0;
        document.getElementById("soundclick").play();
        check_win();
    }
    changeCurrentRound();
}
function changeCurrentRound(){
    if(color==0){
        document.getElementById("curr").textContent = 'Current Round: Red';
    }
    else{
        document.getElementById("curr").textContent = 'Current Round: Blue';
    }
}
function check_win(){
    for(let i=0; i<15; i++){
        var longstr = array[i].join(''); // Convert array to a comma-separated string

        var substringToCheckR = "RRRRR";
        var substringToCheckB = "BBBBB";

        if (longstr.includes(substringToCheckR)) {
            redWin();
            return;
        }
        if (longstr.includes(substringToCheckB)) {
            blueWin();
            return;
        }
    }
    for(let i=0; i<15; i++){
        var tparray = [];
        for(let j=0; j<15; j++){
            tparray.push(array[j][i]);
        }
        var longstr = tparray.join(''); // Convert array to a comma-separated string

        var substringToCheckR = "RRRRR";
        var substringToCheckB = "BBBBB";

        if (longstr.includes(substringToCheckR)) {
            redWin();
            return;
        }
        if (longstr.includes(substringToCheckB)) {
            blueWin();
            return;
        }
    }
    var countArray = new Array(30).fill(0);
    var zxarray = new Array(30);
    for (var i = 0; i < 30; i++) {
        zxarray[i] = new Array(15);
        for(let j=0; j<15; j++){
            zxarray[i][j]="U";
        }
      }
      for(let i=0; i<15; i++){
        for(let j=0; j<15; j++){
            if(i-j<0){
                zxarray[30+(i-j)][countArray[30+(i-j)]]= array[i][j];
                countArray[30+(i-j)]++;
            }
            else{
                zxarray[(i-j)][countArray[(i-j)]]= array[i][j];
                countArray[(i-j)]++;
            }
        }
    }
    for(let i=0; i<30; i++){
        var longstr = zxarray[i].join(''); // Convert array to a comma-separated string

        var substringToCheckR = "RRRRR";
        var substringToCheckB = "BBBBB";

        if (longstr.includes(substringToCheckR)) {
            redWin();
            return;
        }
        if (longstr.includes(substringToCheckB)) {
            blueWin();
            return;
        }
    }
    countArray = new Array(30).fill(0);
    zxarray = new Array(30);
    for (var i = 0; i < 30; i++) {
        zxarray[i] = new Array(15);
        for(let j=0; j<15; j++){
            zxarray[i][j]="U";
        }
      }
      for(let i=0; i<15; i++){
        for(let j=0; j<15; j++){
            zxarray[(i+j)][countArray[(i+j)]]= array[i][j];
            countArray[(i+j)]++;
        }
    }
    for(let i=0; i<30; i++){
        var longstr = zxarray[i].join(''); // Convert array to a comma-separated string

        var substringToCheckR = "RRRRR";
        var substringToCheckB = "BBBBB";

        if (longstr.includes(substringToCheckR)) {
            redWin();
            return;
        }
        if (longstr.includes(substringToCheckB)) {
            blueWin();
            return;
        }
    }
}

function redWin(){
    if(windowOpen==true){
        return;
    }
    var windowElement = document.createElement("div");
    windowElement.id = "popOutWindow";
    windowElement.className = "window";
    document.body.appendChild(windowElement);
    var pp = document.createElement("p");
    pp.innerText = "Congratulation Red! \n You win!"
    pp.className = "congSign";
    windowElement.appendChild(pp);
    var rebt = document.createElement("button");
    rebt.className = "restartButton";
    rebt.onclick = initialize;
    rebt.textContent = "Play Another Round";
    windowElement.appendChild(rebt);
    var bt = document.createElement("button");
    bt.className = "closeButton";
    bt.onclick = closeWindow;
    bt.textContent = "Close";
    windowElement.appendChild(bt);
    windowOpen = true;
    
    var buttons = document.getElementsByClassName("boardpix");
    for(let i=0; i<225; i++){
        buttons[i].disabled = true;
    }
    updateScore("Red");
}
function blueWin(){
    if(windowOpen==true){
        return;
    }
    var windowElement = document.createElement("div");
    windowElement.id = "popOutWindow";
    windowElement.className = "window";
    document.body.appendChild(windowElement);
    var pp = document.createElement("p");
    pp.innerText = "Congratulation Blue! \n You win!"
    pp.className = "congSign";
    windowElement.appendChild(pp);
    var rebt = document.createElement("button");
    rebt.className = "restartButton";
    rebt.onclick = initialize;
    rebt.textContent = "Play Another Round";
    windowElement.appendChild(rebt);
    var bt = document.createElement("button");
    bt.className = "closeButton";
    bt.onclick = closeWindow;
    bt.textContent = "Close";
    windowElement.appendChild(bt);
    windowOpen = true;
    
    var buttons = document.getElementsByClassName("boardpix");
    for(let i=0; i<225; i++){
        buttons[i].disabled = true;
    }
    updateScore("Blue");
}
function closeWindow(){ 
    if(windowOpen == true){
        var window = document.getElementById("popOutWindow");
        window.remove();
        windowOpen = false;
    }
}

function updateScore(winner){
    if(winner=="Red"){
        RedScore++;
        var tp = document.getElementById("RedScore");
        tp.textContent = "Red Player Score: "+RedScore;
    }
    else{
        BlueScore++;
        var tp = document.getElementById("BlueScore");
        tp.textContent = "Blue Player Score: "+BlueScore; 
    }
    var tp = document.getElementById("Winner");
    if(RedScore>BlueScore){
        tp.textContent = "Winner: Red Player"
    }
    else if(BlueScore>RedScore){
        tp.textContent = "Winner: Blue Player"
    }
    else{
        tp.textContent = "Winner: Tie"
    }
}
function clearScore(){
    RedScore = -1;
    BlueScore = -1;
    updateScore("Red");
    updateScore("Blue");
}
