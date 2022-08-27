let deveLimpar = false;


function getVisor(){
    return document.querySelector("#visor")
}

const preencher = (value) => {
    let input = getVisor()
    if(input.value.length >= input.getAttribute("maxlength")){
        return
    }
    
    let isTheSameLastSymbol = false;
    const operations = ["+", "-", "/", "*"]
    operations.forEach((item) => {
        if(item == value){
            if(value == input.value.substr(-1)){
                isTheSameLastSymbol = true;
                return;
            }
        }
    })
    if(deveLimpar){
        input.value = ""
        deveLimpar = false;
    }
    if(isTheSameLastSymbol){
        return;
    }
    input.value += value;
    
}

const calcular = () => {
    let input = getVisor()
    if(!input.value){
        return
    }

    let resultado
    
    try{
        resultado = eval(input.value)
    }
    catch{
        console.log('Ocorreu um erro. Verifique sua expressão e tente novamente')
        input.setAttribute("placeholder", "Erro.")
        input.value = ""
        return
    }
    
    input.value = resultado;
}

const limpar = () => {
    let input = getVisor()
    input.value = ""
    input.setAttribute("placeholder", "0")
}

const limparUltimo = () => {
    let input = getVisor();
    input.value = input.value.substr(0, input.value.length - 1)
    input.setAttribute("placeholder", "0")
}

const copy = () => {
    let input = getVisor();
    navigator.clipboard.writeText(input.value);
}