function suporteN1(chamado){
    console.log("N1 recebeu o chamado");
    if(chamado.prioridade == "normal") {
        console.log("N1 assumiu o chamado");
        return "Suporte N1";
    }
    console.log("N1 não conseguiu resolver");
    console.log("Encaminhado para N2");
    return suporteN2(chamado);
}
function suporteN2(chamado){
    console.log("N2 recebeu o chamado");
    if(chamado.prioridade == "media") {
        console.log("N2 assumiu o chamado");
        return "Suporte N2";
    }
    console.log("N2 não conseguiu resolver");
    console.log("Encaminhado para especialista...");
    return especialista(chamado);

}

function especialista(chamado){
    console.log("especialista recebeu o chamado");
    if(chamado.prioridade == "alta") {
        console.log("especialista assumiu o chamado");
        return "Suporte especialista";
    }
 throw new error("Nenhum responsável encontrado!");
}

module.exports = {
    suporteN1
}

