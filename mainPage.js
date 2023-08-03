var color = 0;
var array = new Array(15);

function initialize(){
    document.getElementById("board").innerHTML = "";
    var buttonContainer = document.getElementById("board");
    for (var i = 0; i < 15; i++) {
        var row = document.createElement("div"); // 创建一行
        row.classList.add("row"); // 添加CSS类用于样式
    
        for (var j = 0; j < 15; j++) {
            var bt = document.createElement("button"); // 创建按钮元素
            bt.onclick = placeButton;
            bt.id = (i)+","+(j);
            bt.classList.add("boardpix");
            bt.textContent = (i)+","+(j); // 设置按钮文本
            bt.classList.add("grid-button"); // 添加CSS类用于样式
    
            row.appendChild(bt); // 将按钮添加到行中
        }
    
        buttonContainer.appendChild(row); // 将行添加到按钮容器中
        document.getElementById("start").textContent = "Restar Game";
    }
    color = 0;
    array = new Array(15);
    for (let i = 0; i < 15; i++) {
        array[i] = new Array(15);
        for(let j=0; j<15; j++){
            array[i][j]="U";
        }
      }
    }
function placeButton(){
    if((this.classList.contains("Red"))||(this.classList.contains("Blue"))){
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
        check_win();
    }
}
function check_win(){
    for(let i=0; i<15; i++){
        var longstr = array[i].join(''); // Convert array to a comma-separated string

        var substringToCheckR = "RRRRR";
        var substringToCheckB = "BBBBB";

        if (longstr.includes(substringToCheckR)) {
            alert("Red Win!!!");
            return;
        }
        if (longstr.includes(substringToCheckB)) {
            alert("Blue Win!!!");
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
            alert("Red Win!!!");
            return;
        }
        if (longstr.includes(substringToCheckB)) {
            alert("Blue Win!!!");
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
    console.log(zxarray);
    for(let i=0; i<29; i++){
        var longstr = zxarray[i].join(''); // Convert array to a comma-separated string

        var substringToCheckR = "RRRRR";
        var substringToCheckB = "BBBBB";

        if (longstr.includes(substringToCheckR)) {
            alert("Red Win!!!");
            return;
        }
        if (longstr.includes(substringToCheckB)) {
            alert("Blue Win!!!");
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
    console.log(zxarray);
    for(let i=0; i<29; i++){
        var longstr = zxarray[i].join(''); // Convert array to a comma-separated string

        var substringToCheckR = "RRRRR";
        var substringToCheckB = "BBBBB";

        if (longstr.includes(substringToCheckR)) {
            alert("Red Win!!!");
            return;
        }
        if (longstr.includes(substringToCheckB)) {
            alert("Blue Win!!!");
            return;
        }
    }
}
