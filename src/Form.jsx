import styled from "styled-components";

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
    <>
        <Header>Send me a message for any inquiries...</Header>
        <FormContainer onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Your Name" required/>
        <FormInput type="email" placeholder="Your Email" required/>
        <MessageInput type="text" placeholder="Message" required/>
        </FormContainer>
        <FormButton type="submit">Submit</FormButton>
    </>
    );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 244px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.h1`
    padding: 15px 0 0 15px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 192% */
    letter-spacing: 0.22px;
    margin-bottom: 10px;
`;

const FormInput = styled.textarea`
    margin-bottom: 10px;
    background: #FFF;
    box-shadow: 0px 1px 0px 0px #000, 1px 1px 0px 0px #000, 1px 0px 0px 0px #000, 2px 2px 0px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 0px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 0px 0px #FFF inset;
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
    font-family: VT323;
    border-style: none;
    resize: none;
    height: 23px;
    line-height: 23px;
    padding-left: 5px;
    &.active {
        border-radius: 2px 2px 0px 0px;
        box-shadow: 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset, 1px 0px 0px 0px #000;
    }

    &:focus {
        outline:none;
        /* border: 1px solid #000; */
        border-radius: 2px 2px 0px 0px;
        box-shadow: 0px -1px 0px 0px #000, 0px -1px 0px 0px #000, 1px 0px 0px 0px #000;
    }
    `;

const MessageInput = styled.textarea`
    margin-bottom: 10px;
    height: 100px;
    background: #FFF;
    box-shadow: 0px 1px 0px 0px #000, 1px 1px 0px 0px #000, 1px 0px 0px 0px #000, 2px 2px 0px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 0px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 0px 0px #FFF inset;
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
    font-family: 'VT323';
    display: flex;
    justify-content: flex-start;
    border-style: none;
    resize: none;
    padding-left: 5px;
    padding-top: 5px;
    &.active {
        border-radius: 2px 2px 0px 0px;
        box-shadow: 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset, 1px 0px 0px 0px #000;
    }

    &:focus {
        outline:none;
        /* border: 1px solid #000; */
        border-radius: 2px 2px 0px 0px;
        box-shadow: 0px -1px 0px 0px #000, 0px -1px 0px 0px #000, 1px 0px 0px 0px #000;
    }
    `;

const FormButton = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 15px 15px 22px 0;
    width: 75px;
    height: 23px;
    flex-shrink: 0;
    background: #D9D9D9;
    box-shadow: 0px 1px 0px 0px #000, 1px 1px 0px 0px #000, 1px 0px 0px 0px #000, 2px 2px 0px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 0px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 0px 0px #FFF inset;
    color: #000;
    font-family: 'VT323', monospace;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 92.308% */
    letter-spacing: 0.22px;

    &:focus {
        outline:none;
        border: 1px solid #000;
        box-shadow: 1px 1px 0px 0px #000, 0px 1px 0px 0px #000, 1px 0px 0px 0px #000;
    }
    &:active {
        border: 1px solid #000;
        box-shadow: 1px 1px 0px 0px #000, 0px 1px 0px 0px #000, 1px 0px 0px 0px #000;
    }
`;

export default Form;