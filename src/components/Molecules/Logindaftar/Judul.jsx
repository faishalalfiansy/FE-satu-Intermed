import HeaderCard from "/src/components/Atom/HeaderCard.jsx";
import SubJudul from "/src/components/Atom/SubJudul";
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