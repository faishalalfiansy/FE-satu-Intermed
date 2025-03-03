import HeaderCard from "../../Atom/HeaderCard";
import SubJudul from "../../Atom/SubJudul";
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