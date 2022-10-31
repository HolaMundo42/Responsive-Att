document.write("<div class='button-container' id='button' ");
document.write("<tr>");

const walls = []; 



if (window.innerWidth > 1200){
for (var j = 1; j <= 9999; j++) { 
    if (walls.includes(j)){
        document.write("<a class='wall' id='" + j + "' style='background: rgb(83, 78, 78); opacity: 100;'></a>");
        }
        else {
            document.write("<a onclick='select(this)' class='button' id='" + j + "'></a>");
        }
    }
    document.write("</div>");
}else{
    document.write("</div>");
    var elem = document.getElementById("button");
    elem.remove();
    document.write("<p>not available<br>for this screen size</p>");
}

        
select = (val) => {
    let color = "red";
    if (val.style.background != color) {
        val.style.background = color;
        val.style.opacity = "50%";
    }
    else{
        val.style = null;
    }
}