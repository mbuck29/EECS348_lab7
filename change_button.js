function para_change(){
    var border_r = document.getElementById("border_r").value;
    var border_g = document.getElementById("border_g").value;
    var border_b = document.getElementById("border_b").value;
    var border_w = document.getElementById("border_w").value;
    var back_r = document.getElementById("back_r").value;
    var back_g = document.getElementById("back_g").value;
    var back_b = document.getElementById("back_b").value;
    console.log(border_r);
    let color_border = `rgb(${border_r}, ${border_g}, ${border_b})`;
    console.log(color_border);
    let color_back = `rgb(${back_r}, ${back_g}, ${back_b})`;
    let paragraph = document.getElementById("paragraph");
    paragraph.style.borderColor = color_border;
    paragraph.style.backGroundColor = color_back;
    paragraph.style.borderWidth = border_w;
}
