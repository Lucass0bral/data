window.addEventListener('load',function(){
    document.querySelector("#btn").addEventListener("click",function(){
        datadenascimento();
    });
});

function datadenascimento(){
var data=document.querySelector("#data").value;
var nasc=new Date(data);
var idade= (new Date()-nasc)/(31557600000);
if(idade<=14){
alert('São permitidas apenas pessoas acima de 14 anos')
document.querySelector("#resultado").innerHTML= "São permitidas apenas pessoas acima de 14 anos";
return false
}
document.querySelector("#resultado").innerHTML= "Sua Idade é" + idade;
return true
}