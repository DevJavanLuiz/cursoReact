import PropType from "prop-types"

export default function Items({marca, anoLancado}){
    return(
        <>
        <li>{marca} - {anoLancado}</li>
        </>
    )
}

Items.propTypes = {
    marca: PropType.string.isRequired
}

Items.defaultProps = {
    marca: "Expresse uma marca",
    anoLancado: 0
}