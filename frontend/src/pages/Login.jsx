import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import api from '../services/api';

const Login = () => {
  const [livros, setLivros] = useState([]);
  const [series, setSeries] = useState([]);
  const [novo, setNovo] = useState(false);
  const [aluno, setAluno] = useState('');
  const [idusuario, setIdusuario] = useState('');
  const [ra, setRa] = useState('');
  const [serie, setSerie] = useState('');
  const [livro, setLivro] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    api.get('series').then(response => {
        setSeries(response.data);
    });

    api.get('materias').then(response => {
        setLivros(response.data);
    });
  },[]);

  const ExisteAluno = (nome) => {
      api.get('usuarios', {params:{nome: nome}}).then(response=>{
          let data = response.data[0];
          if(data) {
            setRa(data.ra);
            setIdusuario(data.id);
            setAluno(nome);
          } else {
            setRa('');
            setNovo(true);
            setAluno(nome);
          }
      });

  }

  const handleSubmit = (event) =>{
      event.preventDefault();

      if(novo){
        api.post('usuarios',{nome: aluno, ra: ra}).then(response=>{
          setIdusuario(response.data[0]);
          console.log('Novo aluno Adicionado');
        }).catch(()=>{
          console.log('Erro no cadastro!');
        });
      }

      const dataList = {
        serie: serie,
        livro: livro,
        aluno: aluno,
        ra: ra,
        idusuario: idusuario
      }

      navigate('/atividade', {state: dataList});
  }



  return (
    <div className="container">
    <form>
      <h1>Teste idiomas</h1>
      <div className="input-box">
        <input type="text" onKeyUp={(e)=>{ExisteAluno(e.target.value)}}  placeholder="Nome do aluno" required></input>
      </div>

      <div className="input-box">
        <input type="text" onChange={(e)=>{setRa(e.target.value)}} value={ra} placeholder="Registro do aluno (RA)" required></input>
      </div>

      <div className="input-box">
        <select onChange={(e)=>{setSerie(e.target.value)}} className="form-select custom-select" type="text" placeholder="Serie" required>
          <option>
          Escolha a Série
          </option>
          {series.map((serie)=>{
            return <option key={serie.id} value={serie.id} >{serie.serie}</option>
          })}
        </select>
      </div>

      <div className="input-box">
        <select onChange={(e)=>{setLivro(e.target.value)}} className="form-select custom-select" type="text" placeholder="Escolha o livro" required>
          <option>
          Escolha o livro
          </option>
          {livros.map((livro)=>{
            return <option key={livro.id} value={livro.id} >{livro.materia}</option>
          })}
        </select>
      </div>

      <div className="forgot-password">
      <a href="#">Esqueceu sua senha?</a>
      </div>

      <button onClick={handleSubmit} className="btn">Entrar</button>

      <div className="register-link">
        <p>Não tem uma conta?
          <a href="#"> Registre-se!</a>
        </p>
      </div>
    </form>
   </div>
  )
}

export default Login