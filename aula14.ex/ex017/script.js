function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')


    if(num.value.length == 0){
        window.alert('Por favor, digite um numero! ')
    
    }else{
        let n = Number(num.value)
        let c = 1

        tab.innerHTML = ' '

        while(c <= 10){
            let item = document.createElement('option') //Cria opcoes dinamicamente, sem a necessidade de criar no html <option>
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) //Adiciona os itens dinamicamente
            c++
        }
    }










}