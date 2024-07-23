import styles from './Person.module.css';

export default function Person({nome, idade, profissao}){
    return (
        <div>
            <p className={styles.contentItem}>Nome:{nome}</p>
            <p>Idade:{idade}</p>
            <p>Profissão:{profissao}</p>
        </div>
    )
}