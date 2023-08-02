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
    array = new Array(15);
    for (let i = 0; i < 15; i++) {
        array[i] = new Array(15);
      }
    }
function placeButton(){
    if((this.classList.contains("Red"))||(this.classList.contains("Blue"))){
        return;
    }
    if(color == 0){
        this.classList.add("Red");
        color = 1;
        check_win();
    }
    else{
        this.classList.add("Blue");
        color = 0;
        check_win();
    }
}
function check_win(){

}
