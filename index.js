window.onload=function() {
   start_carusel();
    setTimeout(()=>{
    $("#my_preloader").remove();
    $("html").css({
    "overflow-y": "auto"
});
},500); 
};

let carusel_items=document.getElementsByClassName("my_carousel_img");
let carusel_arr_marker=[0,1,2,3,4,5,6]; //указывает очередность фоток
function start_carusel(){
    carusel_items[carusel_arr_marker[0]].style.cssText=`
transform:translate(-95%,-50%);
height: 40vh;
z-index:1097;
`;
carusel_items[carusel_arr_marker[1]].style.cssText=`
transform:translate(-85%,-50%);
height: 43vh;
z-index:1098;
`;
carusel_items[carusel_arr_marker[2]].style.cssText=`
transform:translate(-70%,-50%);
height: 45vh;
z-index:1099;
`;
carusel_items[carusel_arr_marker[3]].style.cssText=`
transform:translate(-50%,-50%);
height: 50vh;
z-index:1100;
`;
carusel_items[carusel_arr_marker[4]].style.cssText=`
transform:translate(-30%,-50%);
height: 45vh;
z-index:1099;
`;
carusel_items[carusel_arr_marker[5]].style.cssText=`
transform:translate(-15%,-50%);
height: 43vh;
z-index:1098;
`;
carusel_items[carusel_arr_marker[6]].style.cssText=`
transform:translate(-5%,-50%);
height: 40vh;
z-index:1097;
`;
}
function my_carusel_next(){
for(i=0;i<7;i++)
carusel_items[0].style.cssText=`
transform:translate(-90%,-50%);
height: 40vh;
z-index:1097;
`;
carusel_items[1].style.cssText=`
transform:translate(-80%,-50%);
height: 43vh;
z-index:1098;
`;
carusel_items[2].style.cssText=`
transform:translate(-70%,-50%);
height: 45vh;
z-index:1099;
`;
carusel_items[3].style.cssText=`
transform:translate(-50%,-50%);
height: 50vh;
z-index:1100;
`;
carusel_items[4].style.cssText=`
transform:translate(-30%,-50%);
height: 45vh;
z-index:1099;
`;
carusel_items[5].style.cssText=`
transform:translate(-20%,-50%);
height: 43vh;
z-index:1098;
`;
carusel_items[6].style.cssText=`
transform:translate(-10%,-50%);
height: 40vh;
z-index:1097;
`;
}
function my_carusel_previous(){
    console.log("next");
    }