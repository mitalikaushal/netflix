import React, {useState, useContext, createContext}from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps}) {
    return <Title { ...restProps }>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restPropos}) {
    return <Frame { ...restPropos }>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        //providing state values to use in another state
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item { ...restProps }>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader ({ children, ...restProps }) {
    // taking the previous state and using here by useing useContext
    const {toggleShow, setToggleShow } = useContext(ToggleContext)

    return <Header onClick={() => setToggleShow(!toggleShow)}{ ...restProps }>
    {children}
    {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}
    {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
    ) : (
        <img src="/images/icons/add.png" alt="Open" />
    )}
    </Header>
}

Accordion.Body = function AccordionBody ({ children, ...restPropos}) {
    const {toggleShow} = useContext(ToggleContext);

    return toggleShow ? <Body {...restPropos}>{children}</Body> : null;
}