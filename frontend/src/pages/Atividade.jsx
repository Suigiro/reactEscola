import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from '../services/api';

const Atividade = () => {
    const { state } = useLocation();
    const [serie] = useState(state.serie);
    const [livro] = useState(state.livro);
    const [aluno] = useState(state.aluno);
    const [ra] = useState(state.ra);
    const [idusuario] = useState(state.idusuario);
    const [atividade, setAtividade] = useState('');
    const [perguntas, setPerguntas] = useState([]);
    const [total, setTotal] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(()=>{
        api.get('atividades',{params:{serie: serie, materia: livro}}).then(response=>{
            let data = response.data;
            let pe = [];
            let aux = '';
            let cont = 0;
            let op = [];
            data.map((itens)=>{
                if(cont === 0){
                    setAtividade(itens.atividade);
                }
                if(aux === ''){
                    cont = 0;
                    aux = itens.titulo;
                    op.push({
                        opcao: itens.opcao,
                        certo: itens.certo
                    });
                    pe.push({
                        id: cont,
                        titulo: itens.titulo,
                        descricao: itens.descricao,
                        opcoes: op
                    });
                }else if(aux === itens.titulo){
                    pe[cont].opcoes.push({
                        opcao: itens.opcao,
                        certo: itens.certo
                    });
                } else {
                    op = [];
                    cont+=1;
                    aux = itens.titulo;
                    op.push({
                        opcao: itens.opcao,
                        certo: itens.certo
                    });
                    pe.push({
                        id: cont,
                        titulo: itens.titulo,
                        descricao: itens.descricao,
                        opcoes: op
                    });
                }
            });
           setPerguntas(pe);
           setTotal(perguntas.length)
        });
    },[]);

    console.log(idusuario, perguntas, perguntas.length)

    return (
        <div>
            <h1>Atividade: {atividade}</h1>
            <h2>Aluno: {aluno} </h2>
            <h2>RA: {ra} </h2>
            <h2>Serie: {serie} </h2>
            <h2>Livro: {livro} </h2>
            <h2>Total: {total} </h2>
        </div>
    );
};

export default Atividade;