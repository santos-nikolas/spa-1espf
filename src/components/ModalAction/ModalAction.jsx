import { useState } from "react";
import "./ModalAction.scss"
import { useNavigate } from "react-router-dom";

export default function ModalAction(props) {

    const navigation = useNavigate();

    //Realizando uma consulta para determinar o último ID do produto.
    let id;
    
    fetch("http://localhost:5000/produtos")
    .then((response)=> response.json())
    .then((response)=>{
        id = response[response.length-1].id+1
    })
    .catch(error=> console.log(error));
    
    const[produto,setProduto] = useState({
        id:id,
        nome:'',
        desc:'',
        preco:''
    });
    
    const handleChange = (e)=>{
        //Destructuring
        const {name,value} = e.target;
      //Setando os dados diretamente no objeto atravé de SPREAD
        setProduto({...produto,[name]:value});
      }


      const handleSubmit = (e) =>{
        e.preventDefault();
     
          fetch("http://localhost:5000/produtos/",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(produto)
          })
          .then((response)=> console.log("Dados cadastrados com sucesso - STATUS CODE : " + response.status))
          .catch(error=> console.log(error));
  
          //Fechando o modal.
          props.setClose(false);

          //Redirect
          navigation("/produtos");
      }


    if(props.open){
        return (
            <div className="modal">
            <h1>Cadastrar Produtos</h1>
              <div>
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <span className="closeModal" onClick={()=> props.setClose(false)}>X</span>
                    <legend>Produto Selecionado</legend>
                    <div>
                      <label htmlFor="">Nome:</label>
                      <input type="text" name="nome" placeholder="Digite o nome do Produto." value={produto.nome} onChange={handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="">Descrição:</label>
                      <input type="text" name="desc" placeholder="Digite a descrição do Produto." value={produto.desc} onChange={handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="">Preço:</label>
                      <input type="text" name="preco" placeholder="Digite o preço do Produto." value={produto.preco} onChange={handleChange}/>
                    </div>
                    <div>
                      <button>CADASTRAR</button>
                    </div>
                  </fieldset>
                </form>
              </div>
    
        </div>
        )
  }
} 
