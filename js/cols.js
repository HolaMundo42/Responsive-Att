document.write("<div class='button-container' ");
document.write("<tr>");

const walls = []; 

for (var j = 1; j <= 9999; j++) { 
    if (walls.includes(j)){
        document.write("<a class='wall' id='" + j + "' style='background: rgb(83, 78, 78); opacity: 100;'></a>");
    }
    else {
        document.write("<a onclick='select(this)' class='button' id='" + j + "'></a>");
    }
}

document.write("</div>");
        
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