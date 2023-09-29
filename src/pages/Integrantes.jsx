import React from "react"
import styles from "./Integrantes.module.css"
import Header from "../components/Header"

import Rafael_imagem from "../images/Rafael_imagem.jpg"
import Geh_imagem from "../images/Geh_imagem.jpg"
import Preto_imagem from "../images/Preto_imagem.jpg"
import Thiago_imagem from "../images/Thiago_imagem.jpg"

import { InstagramLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react"



function Integrantes() {
    return(
        <>
            <Header />
            <section className={styles.Integrantes}>
                <h1>INTEGRANTES</h1>

                <div className={styles.integrantes_cards}>
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <img src={Rafael_imagem} height={321} width={307} alt="" className={styles.imagem}/>
                        </div>

                        <div>
                            <p className={styles.name}>Rafael Lima</p>
                        </div>

                        <div className={styles.icons}>
                            <a href="https://instagram.com/faell.lv?igshid=YTQwZjQ0NmI0OA==" target="_blank">
                                <InstagramLogo size={40} />
                            </a>

                            <a href="https://www.linkedin.com/in/rafael-lima-viana-623538264" target="_blank">
                                <LinkedinLogo size={40} />
                            </a>

                            <a href="mailto:rlimaviana011@hotmail.com?subject=Assunto do email" target="_blank">
                                <Envelope size={40}/>
                            </a>
                        </div>
                        
                        
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <img src={Geh_imagem} height={321} width={307} alt="" className={styles.imagem}/>
                        </div>

                        <div>
                            <p className={styles.name}>Geovanna Lisboa</p>
                        </div>

                        <div className={styles.icons}>
                        <a href="https://instagram.com/geh.lisboa?igshid=YTQwZjQ0NmI0OA==">
                                <InstagramLogo size={40} />
                            </a>
                        
                        
                            <a href="#">
                                <LinkedinLogo size={40} />
                            </a>
                        
                        
                            <a href="#">
                                <Envelope size={40}/>
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <img src={Preto_imagem} height={321} width={307} alt="" className={styles.imagem}/>
                        </div>

                        <div>
                            <p className={styles.name}>Pietro Pestana</p>
                        </div>

                        <div className={styles.icons}>
                        <a href="https://instagram.com/pietro_pestana?igshid=YTQwZjQ0NmI0OA==">
                                <InstagramLogo size={40} />
                            </a>
                        
                        
                            <a href="#">
                                <LinkedinLogo size={40} />
                            </a>
                        
                        
                            <a href="#">
                                <Envelope size={40}/>
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card_image}>
                            <img src={Thiago_imagem} height={321} width={307} alt="" className={styles.imagem}/>
                        </div>

                        <div>
                            <p className={styles.name}>Thiago Costa</p>
                        </div>

                        <div className={styles.icons}>
                        <a href="https://instagram.com/thiagotoglory?igshid=YTQwZjQ0NmI0OA==" target="_blank">
                                <InstagramLogo size={40} />
                            </a>
                        
                        
                            <a href="https://www.linkedin.com/in/thiago-costa-6b217826b/" target="_blank">
                                <LinkedinLogo size={40} />
                            </a>
                        
                        
                            <a href="#">
                                <Envelope size={40}/>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Integrantes