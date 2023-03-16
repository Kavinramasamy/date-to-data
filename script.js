var inp=document.createElement("input");
inp.setAttribute("type","date");
inp.setAttribute("id","dob");
inp.setAttribute("class","form-control")
inp.style.width="80%";
var button=document.createElement("button");
button.innerHTML="Displaydata";
button.setAttribute("class","btn btn-success");
button.addEventListener("click",Displaydata);

var tag=document.createElement("div");
tag.setAttribute("class","text-center");
tag.append(inp,button);
document.body.append(tag);

function brk(){
    var brre=document.createElement("br")
    return brre;

}
function paragraph(type,innerhtml){
var para=document.createElement("p");
para.innerHTML=type+" : "+innerhtml;
return para;

}

function Displaydata(){
var inputs=document.getElementById("dob").value;
console.log(typeof(inputs));
if(Date.parse(inputs)){
    var inputdate=new Date(inputs);
    console.log(inputdate);
    var currentdate=new Date();
    var millisecdiff=currentdate.getTime()-inputdate.getTime();
    console.log(millisecdiff);
    var sec=Math.floor(millisecdiff/1000);
    console.log(sec);
    var min=Math.floor(sec/60);
    console.log(min);
    var hour=Math.floor(min/60);
    console.log(hour);
    var day=Math.floor(hour/24);
    console.log(day);
    var years=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(years)
    var mon=(years*12)+currentdate.getMonth()-inputdate.getMonth();
    console.log(mon)

    var output =paragraph("Given input date is",inputdate);
    var output1 =paragraph("Year",years);
    var output2 =paragraph("Month",mon);
    var output3 =paragraph("Day",day);
    var output4 =paragraph("Hour",hour);
    var output5 =paragraph("Minutes",min);
    var output6 =paragraph("Second",sec);
    var output7 =paragraph("Millisecond",millisecdiff);

    document.body.append(brk(),output,output1,output2,output3,output4,output5,output6,output7);
    button.removeEventListener("click",Displaydata);
    
    
}
}

