import { Container, Row, Col, Image, Text, Button, Spacer } from "@nextui-org/react"
import { Column } from "docx"
import React from "react"
import classes from "../styles/Egitim.module.css"

const Egitim = (props) => {
    const tags = ["Yeni", "Yazılımcılar İçin"]
    return (
        <Container css={{ width: "50%", height: "32vw", padding: "2vw", 
        backgroundColor: "#FFFFFF", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", marginTop: "5px" }}>
            <Row css={{ height: "100%" }} >
                <Col css={{ width: "40%", height: "100%" }}>
                    <Container css={{ width: "100%", height: "100%", p: "0" }}>
                        <Image
                            width={"100%"}
                            height={"100%"}
                            src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                            alt="Default Image"
                            objectFit="cover"
                            css={{border: "1px gray solid"}}
                        />
                    </Container>
                </Col>
                <Spacer x={1} />
                <Col css={{ width: "60%", height: "100%", display: "flex", flexDirection: "column" }}>
                    <Row css={{
                        display: "flex", justifyContent: "flex-end",
                        width: "100%", marginBottom: "1vw"
                    }}>
                        {tags.map((tag) => {
                            return (
                                <Container key={tag} css={{
                                    margin: "0", padding: "0",
                                    width: "auto", minWidth: "25%", backgroundColor: tag === "Yeni" ? "#016fe9" : "#2A2D40",
                                    paddingLeft: "1vw", paddingRight: "1vw", paddingTop: "0.4vw",
                                    paddingBottom: ".4vw", borderRadius: "6px", display: "flex", alignItems: "center",
                                    justifyContent: "center", marginLeft: "0.5vw"
                                }} >
                                    <Text css={{ margin: "0", textAlign: "center", fontSize: "1vw", color: "white" }}>{tag}</Text>
                                </Container>
                            )
                        })}
                    </Row>
                    <Row css={{
                        width: "100%", marginBottom: "1.5vw"
                    }}>
                        <Container style={{
                            width: "100%", height: "100%",
                            display: "flex", justifyContent: "flex-start", alignItems: "center",
                            padding: "0",
                        }}>
                            <Text css={{ margin: "0", fontSize: "2vw", color: "#2E2C52" }}>Egitim Adi</Text>
                        </Container>
                    </Row>
                    <Row css={{
                        width: "100%", marginBottom: "1.5vw", height: "auto", maxHeight: "30%"
                    }}>
                        <Container style={{
                            width: "100%",
                            display: "flex", justifyContent: "flex-start",
                            padding: "0", paddingTop: ".5vw",
                            paddingBottom: ".5vw", height: "100%", overflow: "hidden",
                        }}>
                            <Text css={{
                                margin: "0", fontSize: ".8vw", 
                                flexWrap: "nowrap", textOverflow: "ellipsis", colo: "#2E2C52"
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Sed viverra tellus in hac habitasse platea. Quis ipsum suspendisse ultrices gravida dictum fusce. Sagittis purus sit amet volutpat consequat mauris. Et odio pellentesque diam volutpat. Praesent tristique magna sit amet purus gravida. Dignissim convallis Lorem ipsum dolor sit amet, consectetur adipisci Lorem ipsum dolor sit amet, consectetur adipisci </Text>
                        </Container>
                    </Row>
                    <Row css={{
                        width: "100%",
                        justifyContent: "center", paddingLeft: "0", paddingTop: ".3vw",
                        paddingBottom: ".3vw",
                    }}>
                        <Col css={{ margin: "0" }}>
                            <Text css={{ margin: "0", fontSize: "1.5vw", color: "#2E2C52" }}>Tarih</Text>
                            <Text css={{ margin: "0", fontSize: "1vw", color: "#2E2C52" }}>05 / 06 / 2021</Text>
                        </Col>
                        <Col css={{ margin: "0" }}>
                            <Text css={{ margin: "0", fontSize: "1.5vw", color: "#2E2C52" }}>Başvuru Tarihleri</Text>
                            <Text css={{ margin: "0", fontSize: "1vw", color: "#2E2C52" }}>01 / 06 / 2022 - 04 / 06 / 2022</Text>
                        </Col>
                    </Row>
                    <div style={{ flex: "1" }}></div>
                    <button style={{
                        alignSelf: "flex-start", marginBottom: "0.6vw", fontSize: "1.5vw",
                        width: "60%", borderRadius: "30px", backgroundColor: "#016fe9", color: "white",
                        border: "none", paddingTop: ".4vw", paddingBottom: ".4vw"
                    }} onClick={props.onClickKayit} className={classes.kayitButton}>
                        Kayıt Ol!</button>
                </Col>
            </Row>
        </Container>
    )
}


export default Egitim