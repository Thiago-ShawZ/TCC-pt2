import React from 'react'

import { Link } from 'react-router-dom'

import smarmita_foto from "../images/smarmita_foto.jpg"
import styles from "./Home.module.css"
import publico_alvo from "../images/publico_alvo.png"
import Header from '../components/Header'






function Home() {
  return (
    <>
      <Header />

      <div className={styles.mobile_main}>
        <section className={styles.apresentation}>

          <div className={styles.titulo}>
            <h1>SMARMITA</h1>
          </div>

          <div className={styles.explicacao}>

            <div className={styles.smarmita_mobile}>
              <img src={smarmita_foto} height="322" alt="Marmita preta com comida dentro" />
            </div>

            <div className={styles.text}>
              <p>Nosso projeto de TCC, consiste em uma marmita inteligente. Ela terá a função de manter a comida refrigerada e aquecê-lá. O portador poderá selecionar a temperatura que deseja manter no interior da marmita.</p>
              <p>A marmita tem um visor que mostra a temperatura ambiente e a temperatura ajustável, dessa maneira o portador poderá conservar a comida e depois comer ela quentinha e fresca</p>
            </div>
          </div>
          
        </section>

        <section className={styles.target_public}>
          <div className={styles.publico_alvo}>
            <div className={styles.image_target_public}>
              <img src={publico_alvo} height="200" />
            </div>
            <div>
              <h1>PÚBLICO ALVO</h1>
              <p>Nosso público alvo são todas as pessoas que precisam fazer o uso de marmita durante as atividades do dia-a-dia, com prioridade a quem não tem acesso à micro-ondas ou à tomadas próximas para esquentar a comida, e aqueles que não tem possibilidade de almoçar na própria casa.
              Dessa maneira, nosso objetivo é ajudar e facilitar a vida daqueles que trabalham nas ruas, estudantes, pessoas que passam o dia fora de casa, entre outros.</p>
            </div>
          </div>
        </section>
        <section className={styles.process}>
          <h1>PROCESSO:</h1>


        </section>
      </div>
    </>
  )
}

export default Home