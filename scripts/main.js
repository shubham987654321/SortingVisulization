/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style="box-shadow : 4px 4px 2px gray; margin:0% " + margin_size + "%; background-color: blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;" + "border-bottom-left-radius : 20px" ;
        divs[i].classList.add('line');
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);

    
}

// function disable_buttons()
// {
//     for(var i=0;i<butts_algos.length;i++)
//     {
//         butts_algos[i].classList=[];
//         butts_algos[i].classList.add("butt_locked");

//         butts_algos[i].disabled=true;
//         inp_as.disabled=true;
//         inp_gen.disabled=true;
//         inp_aspeed.disabled=true;
//     }
// }



function runalgo()
{
    // disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
//  background color selection

// background -gradinet

var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');

var body = document.getElementById('gradient');


function setGradient()
{
 
    body.style.backgroundImage= "linear-gradient(to right, "+ color1.value + ","+color2.value+")";
//    document.querySelector('#hex-code').innerHTML= "color1 : "+color1.value +"<br>" +"color2 : "+color2.value
}








