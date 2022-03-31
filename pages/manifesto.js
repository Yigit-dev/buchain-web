import Layout from '../src/Layout'
import { Button, Collapse, Grid, Text } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Container, Row, Col } from '@nextui-org/react'
import WordText from '/src/components/base/Text.js'
import MainSupporter from '../src/components/MainSupporter'
import Supporters from '../src/components/Supporters'
import CustomButton from '../src/components/base/Button'
import Footer from '../src/components/Footer'

const Manifesto = () => {
  return (
    <Layout>
    <>
    
      <Grid.Container gap={2}
          style={{marginTop:'20px'}}
          justify="center"
          display="flex"
          alignItems="center"
          alignContent="center">

          <Grid xs={9}>
              <span><Text.LargeTitle>Manifesto!</Text.LargeTitle><br/> 
              <Text.SmallTitle>Topluluğumuzun misyonu, Boğaziçi Üniversitesi&apos;nin mensuplarına verdiği kültürel, akademik ve sektörel katkının Türkiye&apos;de Blokzincir alanında faaliyet gösteren araştırma ve çalışmalara aktarılmasına destek olmaktır.<br/>
              Blokzincir ve uygulamalarının yol açacağı sosyal ve ekonomik avantajların farkındalığını arttırmayı hedefleyen topluluğumuz; blokzincir alanında çalışan Boğaziçi Üniversitesi mezunları ve öğrencilerinin arasındaki bağları güçlendirmeyi hedefler.<br/>
              Blokzincir feslefesine ve kültürüne ışık tutan araştırmalar yapmayı hedefleyen bu topluluk, yaptığı çalışmaları ve birikimi toplum yararı ve sosyal yarar odaklı ticari faaliyetlere çevirir.<br/><br/><br/></Text.SmallTitle>
              <Text.LargeTitle>Danışma Kurulu</Text.LargeTitle></span>
          </Grid>

              <Grid.Container
                  style={{marginBottom:'20px',marginTop:'20px'}}
                  gap={2}
                  justify="center"
                  display="flex"
                  alignItems="center"
                  alignContent="center"
                >
                        <Grid xs={6} md={2} sm={2}  justify="center" align="center">
                          <span>
                            <Image width={100} height={100} alt=""/>
                            <Text.MidText>Ad Soyad</Text.MidText>
                            <Text.SmallTitle>Title</Text.SmallTitle>
                            <Text.SmallTitleLight>Title</Text.SmallTitleLight>
                          </span>
                        </Grid>

                        <Grid xs={6} md={2} sm={2}  justify="center" align="center">
                          <span>
                            <Image width={100} height={100} alt=""/>
                            <Text.MidText>Ad Soyad</Text.MidText>
                            <Text.SmallTitle>Title</Text.SmallTitle>
                            <Text.SmallTitleLight>Title</Text.SmallTitleLight>
                          </span>
                        </Grid>


                        <Grid xs={6} md={2} sm={2}  justify="center" align="center">
                          <span>
                            <Image width={100} height={100} alt=""/>
                            <Text.MidText>Ad Soyad</Text.MidText>
                            <Text.SmallTitle>Title</Text.SmallTitle>
                            <Text.SmallTitleLight>Title</Text.SmallTitleLight>
                          </span>
                        </Grid>

                        <Grid xs={6} md={2} sm={2}  justify="center" align="center">
                          <span>
                            <Image width={100} height={100} alt=""/>
                            <Text.MidText>Ad Soyad</Text.MidText>
                            <Text.SmallTitle>Title</Text.SmallTitle>
                            <Text.SmallTitleLight>Title</Text.SmallTitleLight>
                          </span>
                        </Grid>

                        <Grid xs={6} md={2} sm={2}  justify="center" align="center">
                          <span>
                            <Image width={100} height={100} alt=""/>
                            <Text.MidText>Ad Soyad</Text.MidText>
                            <Text.SmallTitle>Title</Text.SmallTitle>
                            <Text.SmallTitleLight>Title</Text.SmallTitleLight>
                          </span>
                        </Grid>
              </Grid.Container>
        
                <Grid xs={9}>
                    <span><Text.LargeTitle>Yönetişim</Text.LargeTitle><br/> 
                    <Text.SmallTitle>Topluluğumuzun misyonu, Boğaziçi Üniversitesi&apos;nin mensuplarına verdiği kültürel, akademik ve sektörel katkının Türkiye&apos;de Blokzincir alanında faaliyet gösteren araştırma ve çalışmalara aktarılmasına destek olmaktır.<br/>
                    Blokzincir ve uygulamalarının yol açacağı sosyal ve ekonomik avantajların farkındalığını arttırmayı hedefleyen topluluğumuz; blokzincir alanında çalışan Boğaziçi Üniversitesi mezunları ve öğrencilerinin arasındaki bağları güçlendirmeyi hedefler.<br/>
                    Blokzincir feslefesine ve kültürüne ışık tutan araştırmalar yapmayı hedefleyen bu topluluk, yaptığı çalışmaları ve birikimi toplum yararı ve sosyal yarar odaklı ticari faaliyetlere çevirir.<br/><br/><br/></Text.SmallTitle></span>
                </Grid>

                <Grid xs={9}>
                     <Text.LargeTitle>Üyelik Tipleri</Text.LargeTitle>
                </Grid>
                
              <Grid.Container
                gap={2}
                justify="center"
                display="flex"
                alignItems="center"
                alignContent="center"
                alignText="left"
                style={{margin:'30px'}}
              >
                    <Grid xs={8} md={5} sm={6} justify="center" align="center">                       
                    <span>
                         <Text.MidText>Öğrenci Üye</Text.MidText><br/>
                            <Text.SmallTitleLight>
                            TexttexttextTexttexttextTexttexttextText
                            TexttexttextTexttexttextTexttexttextTexttexttext
                            TexttexttextTexttexttextTexttexttextTexttexttext
                            TexttexttextTexttexttextTexttexttextText
                            </Text.SmallTitleLight><br/><br/>
                            <Button.ApplyManifesto>Başvur</Button.ApplyManifesto> </span>
                    </Grid>

                    <Grid xs={8} md={5} sm={6} justify="center" align="center">                       
                    <span>
                         <Text.MidText>Kurumsal Üye</Text.MidText><br/>
                            <Text.SmallTitleLight>
                            TexttexttextTexttexttextTexttexttextText
                            TexttexttextTexttexttextTexttexttextTexttexttext
                            TexttexttextTexttexttextTexttexttextTexttexttext
                            TexttexttextTexttexttextTexttexttextText
                            </Text.SmallTitleLight><br/><br/>
                            <Button.ApplyManifesto>Başvur</Button.ApplyManifesto> </span>
                    </Grid>

                    </Grid.Container>

                    <Grid.Container
                    gap={2}
                    justify="center"
                    display="flex"
                    alignItems="center"
                    alignContent="center"
                    alignText="left"
                    style={{margin:'30px'}}
            
                  >
                    <Grid xs={8} md={5} sm={6} justify="center" align="center">                       <span>
                         <Text.MidText>Mezun Üye</Text.MidText><br/>
                            <Text.SmallTitleLight>
                            TexttexttextTexttexttextTexttexttextText
                            TexttexttextTexttexttextTexttexttextTexttexttext
                            TexttexttextTexttexttextTexttexttextTexttexttext
                            TexttexttextTexttexttextTexttexttextText
                            </Text.SmallTitleLight><br/><br/>
                            <Button.ApplyManifesto>Başvur</Button.ApplyManifesto> </span>
                    </Grid>

                    <Grid xs={8} md={5} sm={6} justify="center" align="center">                       <span>
                         <Text.MidText>Kurumsal Üye</Text.MidText><br/>
                            <Text.SmallTitleLight>
                            TexttexttextTexttexttextTexttexttextText
                            TexttexttextTexttexttextTexttexttextTexttexttext
                            TexttexttextTexttexttextTexttexttextTexttexttext
                            TexttexttextTexttexttextTexttexttextText
                            </Text.SmallTitleLight><br/><br/>
                            <Button.ApplyManifesto>Başvur</Button.ApplyManifesto> </span>
                    </Grid>

                    </Grid.Container>


                    <Grid xs={9}>
                      <Text.LargeTitle>Destekçiler</Text.LargeTitle>
                   </Grid>

                  <Grid.Container
                    gap={2}
                    justify="center"
                    display="flex"
                    alignItems="center"
                    alignContent="center"
                  >
                  <Row justify="center" align="center">
                      <Grid xs={9} md={3} sm={3} justify="center" align="center">
                        <Text.MidText>Ana Destekçi </Text.MidText>
                      </Grid>
                  </Row>  
                      <MainSupporter />
                  </Grid.Container>
                      <Supporters/>
                </Grid.Container>
      </>
    </Layout>
  
    
  )
}

export default Manifesto