import { Container } from 'react-bootstrap';
import "../styles/index.css";

const BlockMasterTitle = () => {
  return (
    <>
      <Container style={{ width: "auto" }}>
        <div style={{ position: "relative", background: "rgb(37 36 36)", color: "white", width: "100%" }}>
          <video autoPlay preload="true" muted loop src="https://res.cloudinary.com/docutv7ug/video/upload/v1652204585/Block-Master/DOCTOR_STRANGE_2_EN_EL_MULTIVERSO_DE_LA_LOCURA_Tr%C3%A1iler_2_Espa%C3%B1ol_Latino_2022_ynks5u.mp4" className="videoP"></video>
          <h1 className="h1Video">BLOCKMASTER</h1>
        </div>
      </Container>
    </>
  )
}
export default BlockMasterTitle;