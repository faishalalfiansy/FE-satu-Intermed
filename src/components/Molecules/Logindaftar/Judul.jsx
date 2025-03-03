import HeaderCard from "../../atom/HeaderCard"
import SubJudul from "../../atom/subJudul";
const Judul = (props) => {
    const { titleHeader, titleSubjudul, kelasjudul } = props
    return (
        <div className={kelasjudul}>
            <HeaderCard> {titleHeader} </HeaderCard>
            <SubJudul> {titleSubjudul} </SubJudul>
        </div>
    )
}

export default Judul;