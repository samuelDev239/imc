function calcular() {
    altur = document.getElementById('altura').value
    peso = document.getElementById('peso').value
    var altura1 = altur.replace(/[^0-9]/g, '')
    altura = altura1/100
    imc = peso / altura ** 2
    var imcd = imc.toString()
    imci = imcd.split('')
    var variavel1 = imci[0]
    var variavel2 = imci[1]
    var variavel3 = imci[2]
    var variavel4 = imci[3]

    var imce = variavel1 + variavel2 + variavel3 + variavel4
    console.log(imce)
    text = ""
    if(imc<18.5){
        text = "Seu imc é: " + imce +   "   E você está abaixo do peso"
       
    }
    else if(imc<24.9){
        text = "Seu imc é: " + imce +   "   E você está no peso ideal"
    }
    else if(imc<29.9){
        text = "Seu imc é: " + imce +   "   E você está levemente acima do peso ideal"
    }
    else if(imc<34.9){
        text = "Seu imc é: " + imce +   "   E você está com obesidade grau I"
    }
    else if(imc<39.9){
        text = "Seu imc é: " + imce +   "   E você você está com obesidade grau II(severa)"
    }
    else if(imc>40){
        text = "Seu imc é: " + imce +   "   E você está com obesidade grau III(mórbida)"
    }

    document.getElementById('resultado').innerText= text 

}