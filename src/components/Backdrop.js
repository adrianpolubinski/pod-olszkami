import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 98;
  background: rgba(0, 0, 0, 0.75);
`



function Backdrop({setGalleryModalVisible}) {

    const onCloseModalHandler = () => {
        setGalleryModalVisible(false);
    }

    return <Div onClick={onCloseModalHandler}></Div> 
}

export default Backdrop;