function botao(){
    let ano = document.querySelector('#Campeos')
    let oi = document.querySelector('#oi')
    
    if(ano.value===""){
     alert ('Campo vazio... Por favor digite um ano');
    }
    else if (ano.value==='1999'){
        oi.innerHTML = 'O artilheiro da Champions de 1999 foi o Andry Shevchenko com 8 gols!'
    }
    else if (ano.value==='2000'){
        oi.innerHTML = 'O artilheiro da Champions de 2000 Raúl com 10 gols!'
    } 
    else if (ano.value==='2001'){
        oi.innerHTML = 'O artilheiro da Champions de 2001 foi o Raúl com  7 gols!'
    } 
    else if (ano.value==='2002'){
        oi.innerHTML = 'O artilheiro da Champions de 2002 foi o Van Nistelrooy com 10 gols!'
    } 
   else if (ano.value==='2003'){
        oi.innerHTML = 'O artilheiro da Champions de 2003 foi o Van Nistelrooy com 12 gols!'
    } 
    else if (ano.value==='2004'){
        oi.innerHTML = 'O artilheiro da Champions de 2004 foi o Morientes com 8 gols!'
    } 
    else if (ano.value==='2005'){
        oi.innerHTML = 'O artilheiro da Champions de 2005 foi o Van Nistelrooy com 8 gols!'
    } 
    else if (ano.value==='2006'){
        oi.innerHTML = 'O artilheiro da Champions de 2006 foi o Andriy Shevchenko com 9 gols!'
    } 
    else if (ano.value==='2007'){
        oi.innerHTML = 'O artilheiro da Champions de 2007 foi o Kaká 10 gols!'
    } 
    else if (ano.value==='2008'){
        oi.innerHTML = 'O artilheiro da Champions de 2008 foi o Cristiano Ronaldo com 8 gols!'
    } 
    else if (ano.value==='2009'){
        oi.innerHTML = 'O artilheiro da Champions de 2009 foi o Lionel Messi com 9 gols'
    } 
    else if (ano.value==='2010'){
        oi.innerHTML = 'O artilheiro da Champions de 2010 foi a Lionel Messi com 8 gols!'
    } 
    else if (ano.value==='2011'){
        oi.innerHTML = 'O artilheiro da Champions de 2011 foi o Lionel Messi com 12 gols!'
    } 
    else if (ano.value==='2012'){
        oi.innerHTML = 'O artilheiro da Champions de 2012 foi o Lionel Messi com 14 gols!'
    } 
    else if (ano.value==='2013'){
        oi.innerHTML = 'O artilheiro da Champions de 2013 foi o Cristiano Ronaldo com 12 gols!'
    } 
    else if (ano.value==='2014'){
        oi.innerHTML = 'O artilheiro da Champions de 2014 foi o Cristiano Ronaldo 17 gols!'
    } 
    else if (ano.value==='2015'){
        oi.innerHTML = 'O artilheiro da Champions de 2015 foi o Cristiano Ronaldo/Lionel Messi/Neymar com 10 gols!'
    } 
    else if (ano.value==='2016'){
        oi.innerHTML = 'O artilheiro da Champions de 2016 foi o Cristiano Ronaldo com 16 gols!'
    } 
    else if (ano.value==='2017'){
        oi.innerHTML = 'O artilheiro da Champions de 2017 foi o Cristiano Ronaldo com 12 gols!'
    } 
    else if (ano.value==='2018'){
        oi.innerHTML = 'O artilheiro da Champions de 2018 foi o Cristiano Ronaldo com 15 gols!'
    } 
    else if (ano.value==='2019'){
        oi.innerHTML = 'O artilheiro da Champions de 2019 foi o Lionel Messi com 12 gols!'
    } 
    else if (ano.value==='2020'){
        oi.innerHTML = 'O artilheiro da Champions de 2020 foi o Lewandowski com 15 gols!'
    } 
    else if (ano.value==='2021'){
        oi.innerHTML = 'O artilheiro da Champions de 2021 foi o Haaland com 10 gols!'
    } 
    else{
        oi.innerHTML = 'Esse ano não está disponivel no sistema, escolha um ano entre 1999 e 2021'
    }
}