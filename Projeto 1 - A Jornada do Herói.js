console.clear()
const prompt = require('prompt-sync')();

let contagemSim = 0

// Achei interessante para poluir menos o código, armazenar od=s dialogos todos aqui antes!

let dialogoInicio = `Voce esta em sua casa, seu esposo(a) saiu com seus filhos, quando derrepente começa um plantão na tv......
um novo virus ZUMBI foi descoberto e esta a solta, tudo começou a sair de controle em uma base militar secreta onde o virus era estudado
você possui um BANKER em baixo de sua casa, e prescisa se esconder nele para se proteger, porem não sabe como esta a situação dos mantimentos por la.
voce sai as pressas para procurar mantimentos e se esconder no BUNKER, no caminho para o BUNKER você encontra um Radio!!`
let DialogoGalao = `OK, continuando para o bunker você entra na cosinha e acha um galão de Agua, porem se decidir levar ele, não conseguira levar mais nada, pois sua mão estara cheia`
let dialogoAmbulante = `Você chega no BUNKER, e consegue escutar pelo radio as noticias...
dias se passam e aparece pessoas dentro de sua casa, dizendo ser ambulantes que estão atraz de agua
e lhe pedem para dar um pouco de agua para eles (Seu estoque de comida certamente durara muito, assim como de agua!)`
let dialogoAmbulante2 = `Você chega no BUNKER, dias se passam e aparece pessoas dentro de sua casa, pessoas dizendo ser ambulantes que estão atraz de agua
e lhe pedem para dar um pouco de agua para eles (Seu estoque de comida certamente durara muito, assim como de agua!)`
let dialogoExercito = `Voce abre a porta e......... Eles realmente eram do bem, são do exercito e em troca de sua ajuda oferecem uma carona para um campo de refugiados
militar, onde seria o recomeço que o governo estava tentando fazer`
let dialogoAtaque = `você é carregado para dentrop de um caminhão militar e, enquanto esta no caminho é atacado por ZOMBIES os militares tentam matar com armas e bombas
mas isso apenas chama a atençao de mais ZOMBIES, um pouco antes você escuta que outra patrulha estava um pouco mais atraz de vocês...`
let dialogoCampo = `Não demora muito e o comboio chega e os ajuda a chgegar no campo de refugiados...
chegando la você se rencontra com seu esposo(a) e seus filhhos!!`
let dialogoSemAgua = `Não da mais tempo para pegar mais suprementos, você chega no bunker e instala seu radio, dias depois...
escuta a noticia que militares estariam montando um comboio para levar sobreviventes para um campo de refugiado`
let dialogoSemComboio = `Você não confia nos  militares, semans depois escuta novamente no radio sobre outro comboio, porem desta vez
seus recursos estão acabando, sua agua ja acabou a 3 dias e você esta desidratado e muito ruim de saude!`
let dialogoQuaseMorte = `Não confiou no comboio e ficou em seu BUNKER, 1 dia depois descobre que pegou uma doença de um rato que estava em seu BUNKER
e então seu radio sonta o aviso "A CIDADE SERA BOMBARDEADA EM 10h" isso para dar fim nos ZOMBIES`
let dialogoCampo2 = `Juntando suas ultimas forças, você consegue fugir da cidade antes do bombardeio e se encontra com militares que lhe ajudaram 
e te levaram para o campo de refugiado, porem sua doença se agravou e corre sério risco de vida`
let dialogoMorte = `Você decide não fugir e, horas depois a cidade é bombardeada, assim destruindo sua casa e BUNKER,   NÃO SOBRANDO NADA...`
let dialogoSemagua = `Você chega no Bunker, porem seus suprementos estão quase se acabando e, certamente nao dura-ra muito, dias se passam
e você ouve passos em sua casa... `
let dialogoZombie = `Você sai e sobe as escadas, e sua casa esta cheia de zombies, sua unica opção para desvialos é correr e tentar chegar na rua...`
let dialogoComboio2 = `Os ZOMBIES parecem ser bem lerdos... então você consegue chegar na rua, onde um comboio militar esta andando, Você é ajudado e
levado para o campo de refugiados, porem ao chegar la repara em aranhado em sua perna, Possivelmente uma mordida...`
let dialogoLouco = `Você desconfia de algo e, estava certo pelo jeito são zombies la fora, porem essa é a sua ultima saida, pois acabaram seus suprementos
e você esta enloquecendo dentro deste BUNKER...`
let dialogoFimBunker = `Você descide ficar, assim nao morrendo para os zombies, porem depois de 3 dias você fica totalmente louco e fora de si e em uma descição
fora de si abre o BUNKER e sai correndo pelo meio deles, você consegue chegar na rua e encontrar um comboio militar, porem nesta hora você desmaia pela sua
incapacidade fisica, e não se lembra mais de nada...`


console.log(dialogoInicio)

let pergunta1 = prompt("Você deseja levar o radio para junto ao bunker? ")
if(pergunta1 == "sim"){
    contagemSim++
    console.log(DialogoGalao)
    let pergunta2 = prompt("Você vai levar o galão de agua? ")
    if(pergunta2 == "sim"){
        contagemSim++
        console.log(dialogoAmbulante)
        let pergunta3 = prompt("Deseja compratilhar um pouco de sua agua? ")
        if(pergunta3 == "sim"){
            contagemSim++
            console.log(dialogoExercito)
            let pergunta4 = prompt("Você gostaria de seguir com os militares para o campo de refugiado? ")
            if(pergunta4 == "sim"){
                contagemSim++
                console.log(dialogoAtaque)
                let pergunta5 = prompt("Você deseja fugir e esperar o outro Comboio chegar? ")
                if(pergunta5 == "sim"){
                    contagemSim++
                    console.log(dialogoCampo)
                }
            }
        }else{
            console.log(dialogoSemAgua)

        }
    }else{
        console.log(dialogoSemAgua)
        let pergunta3 = prompt("Deseja sair de casa e confiar nesse comboio? ")
        if(pergunta3 == "sim"){
            contagemSim++
            console.log(dialogoExercito)
            let pergunta4 = prompt("Você gostaria de seguir com os militares para o campo de refugiado? ")
            if(pergunta4 == "sim"){
                contagemSim++
                console.log(dialogoAtaque)
                let pergunta5 = prompt("Você deseja fugir e esperar o outro Comboio chegar? ")
                if(pergunta5 == "sim"){
                    contagemSim++
                    console.log(dialogoCampo)
                }
            }else{
                console.log(dialogoSemComboio)
                let pergunta4 = prompt("você gostaria de tentar encontrar com o comboio? ")
            if(pergunta4 == "sim"){
                contagemSim++
                console.log(dialogoAtaque)
                let pergunta5 = prompt("Você deseja fugir e esperar o outro Comboio chegar? ")
                if(pergunta5 == "sim"){
                    contagemSim++
                    console.log(dialogoCampo)
                }
            }else{
                console.log(dialogoQuaseMorte)
                let pergunta52 = prompt("Deseja tentar fugir da cidade para se proteger? ")
                if(pergunta52 == "sim"){
                    contagemSim++
                    console.log(dialogoCampo2)
                }
            }
        }}else{
            console.log(dialogoSemComboio)
            let pergunta4 = prompt("você gostaria de tentar encontrar com o comboio? ")
            if(pergunta4 == "sim"){
                contagemSim++
                console.log(dialogoAtaque)
                let pergunta5 = prompt("Você deseja fugir e esperar o outro Comboio chegar? ")
                if(pergunta5 == "sim"){
                    contagemSim++
                    console.log(dialogoCampo)
                }
            }else{
                console.log(dialogoQuaseMorte)
                let pergunta52 = prompt("Deseja tentar fugir da cidade para se proteger? ")
                if(pergunta52 == "sim"){
                    contagemSim++
                    console.log(dialogoCampo2)
                }else{
                    console.log(dialogoMorte)
                }
            }
        }
    }
}else{
    console.log(DialogoGalao)
    let pergunta2 = prompt("Você vai levar o galão de agua? ")
    if(pergunta2 == "sim"){
        contagemSim++
        console.log(dialogoAmbulante2)
        let pergunta3 = prompt("Deseja compratilhar um pouco de sua agua? ")
        if(pergunta3 == "sim"){
            contagemSim++
            console.log(dialogoExercito)
            let pergunta4 = prompt("Você gostaria de seguir com os militares para o campo de refugiado? ")
            if(pergunta4 == "sim"){
                contagemSim++
                console.log(dialogoAtaque)
                let pergunta5 = prompt("Você deseja fugir e esperar o outro Comboio chegar? ")
                if(pergunta5 == "sim"){
                    contagemSim++
                    console.log(dialogoCampo)
                }
            }
        }
    }else{
        console.log(dialogoSemagua)
        let pergunta4 = prompt("Deseja saie do BUNKER  e olhar oque são os passos? ")
        if(pergunta4){
            contagemSim++
            console.log(dialogoZombie)
            let pergunta5 = prompt("Deseja tentar sair correndo pelos ZOMBIES? ")
            if(pergunta5){
                contagemSim++
                console.log(dialogoComboio2)
            }
        }else{
            console.log(dialogoLouco)
            let pergunta5 = prompt("Deseja arriscar tudo e tentar fugir pelo meio deles?? ")
            if(pergunta5){
                contagemSim++
                console.log(dialogoComboio2)
            }else{
                console.log(dialogoFimBunker)
            }
        }
    }
}


console.log()
if(contagemSim == 5){
    console.log("Você triunfa de maneira inquestionável, e seus feitos serão lembrados por muitas gerações. (Total de 5 Sim)")
}else if(contagemSim == 4){
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.  (Total de 4 Sim)")
}else if(contagemSim == 3){
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.   (Total de 3 Sim)")
}else{
    console.log(`Você falha, mas ainda consegue fugir da situação.   (Total de ${contagemSim} Sim)`)
}




