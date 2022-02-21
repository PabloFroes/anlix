import React, { Fragment, useEffect, useState } from 'react';
import SearchService from '../../services/search';
import '../../styles/style.css'


const HomeScreen = () => {
  const [name, setName] = useState("");
  const [dataPatient, setDataPatient] = useState([])
  const [getData, setGetData] = useState(false)
    
    const getPatient = async (name) => {
        try {
            const response = await SearchService.getIndex(name)
            const data = response.data
            setDataPatient(data)
            return data
            
          } catch (error) {
              
          }
      }
      
      const HandleSubmit = async (evt) => {
          evt.preventDefault();
          try {
              await getPatient(name).then(async (data) => setDataPatient(data))
              setGetData(true)
          } catch (error) {
              console.log(error)
          }
      }

      const listPatient = dataPatient.map((item) =>     
        <li>
          <div className="contact-data">
            <p className="label">Nome: {item.Nome}</p>                               
            <p className="label">"Ultimas Características Cardíacas"</p>
            <div className="data">{item.lastIndexCard.map((index)=> 
              <p>EPOC: {index.epoc} Índice Cardíaco: {index.ind_card}</p>
            )}</div>
            <p className="label">"Ultimas Características Pulmonar"</p> 
            <div className="data">{item.lastIndexPulm.map((index)=> 
              <p>EPOC: {index.epoc} Índice Cardíaco: {index.ind_pulm}</p>
              )}</div>
          </div>
          <hr/>
        </li>
      )

      if(getData){
          return (
            <Fragment>
            <p className='content-title'>Desafio Anlix</p>
            <div className='content'>
                <div className="search">
                    <p>Buscar características mais recentes do paciente pelo nome</p>
                    <form onSubmit={HandleSubmit}>
                        <label>Nome: </label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                        <button type="submit">Buscar Paciente</button>
                    </form>
                    <ul className='listPatient'>{listPatient}</ul>                       
                    </div>
                </div>
        </Fragment>
          ) 
      }

  return (
      <Fragment>
          <p className='content-title'>Desafio Anlix</p>
          <div className='content'>
              <div className="search">
                  <p>Buscar características mais recentes do paciente pelo nome</p>
                  <form onSubmit={HandleSubmit}>
                      <label>Nome: </label>
                      <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                      <button type="submit">Buscar Paciente</button>
                  </form>
                      <div className="search-result">
                      </div>
                  </div>
              </div>
      </Fragment>
  )
}

export default HomeScreen