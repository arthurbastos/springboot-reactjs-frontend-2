export default class UtilService{

    static obterMesPorId(id){
        let mesSelecionado = '';
        switch (id) {
            case 1:
                mesSelecionado = 'Janeiro';
                break;
            case 2:
                mesSelecionado = 'Fevereiro';
                break;
            case 3:
                mesSelecionado = 'Março';
                break;
            case 4:
                mesSelecionado = 'Abril';
                break;
            case 5:
                mesSelecionado = 'Maio';
                break;
            case 6:
                mesSelecionado = 'Junho';
                break;
            case 7:
                mesSelecionado = 'Julho';
                break;
            case 8:
                mesSelecionado = 'Agosto';
                break;
            case 9:
                mesSelecionado = 'Setembro';
                break;
            case 10:
                mesSelecionado = 'Outubro';
                break;
            case 11:
                mesSelecionado = 'Novembro';
                break;
            case 12:
                mesSelecionado = 'Dezembro';
                break;
        }
    
        return mesSelecionado;
    }
}

