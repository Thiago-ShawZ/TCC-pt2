import React from "react"

import Header from "../components/Header"

import smarmita_foto from "../images/smarmita_foto.jpg"
import styles from "./Conteudo.module.css"
import Arduino from "../images/Arduino_transparent.png"

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"



function Conteudo() {
    return(
        <>
            <Header/>
            <div className={styles.conteudo_mobile}>
            <section className={styles.project_history}>
                <div className={styles.image_history}>
                     <img  src={smarmita_foto} height="322" alt="Marmita preta com comida dentro" />
                </div>

                <div className={styles.text_history}>
                    <h1>HISTÓRIA DO PROJETO</h1>

                    <p>Tudo começou em uma conversa de café da tarde na família da Geh.</p>
                    <p>“Certo dia eu estava em casa conversando com minha família e desesperada para conseguir ter uma ideia boa para o projeto do TCC. Conversa vai, conversa vem, pedindo várias dicas do que fazer, minha vó me deu a ideia de fazer um robô que lavava a louça sozinho, o que com certeza não daria certo (rsrsrsrs).</p>
                    <p>Pensando em um projeto para ajudar outras pessoas, minha vó novamente, decidiu dar a idea de fazer uma marmita para os motoboys. Eu decidi parar para pensar nessa ideia, e pensar em como e qual diferencial poderia ter.</p>
                    <p>Até que enfim, eu e meus queridos amigos Fael, Thithico e Preto chegamos no projeto que finalmente é hoje.”</p>
                </div>
            </section>

                <h1>COMPONENTES</h1>
                
            <section className={styles.components_arduino}>
                <ArrowLeft size={27} color="#fff" />
                    <div className={styles.components_mobile}>
                        <img src={Arduino} height={229} alt="Foto de uma placa de arduino uno" />
                    </div>
                <ArrowRight size={27} color="#fff" />
                <button>Saiba mais</button>

                
                <Swiper>
                    <SwiperSlide>
                        <h1>teste</h1>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className={styles.code}>
                <h1>CÓDIGO</h1>
                <label>
                    <textarea readOnly defaultValue="" name="code" id="code" cols="30" rows="10"/> 
                </label>
            </section>
            </div>
        </>
    )
}

export default Conteudo
