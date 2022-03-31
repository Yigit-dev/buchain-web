import React from 'react'
import Layout from '../src/Layout'
import CustomButton from '../src/components/base/Button'
import WordText from '/src/components/base/Text.js'
import {
  Text,
  Button,
  Grid,
  Container,
  Link,
  Card,
  Col,
  Row,
} from '@nextui-org/react'

const Basvuru = () => {
  return (
    <Layout>
      <Grid.Container
        align="center"
        justify="center"
        gap={3}
        css={{ padding: '0', marginTop: '4px', marginBottom:'60px' }}
      >
        <Grid xs={12} sm={6} md={4}>
          <Card hoverable bordered>
            <Card.Header
              css={{
                position: 'absolute',
                zIndex: 1,
                background: 'rgba(255,255,255,0.8)',
                borderBottom: '1px solid #fff',
              }}
            >
              <Text.PageTitle h3 color="white">
                📜 Üyelik
              </Text.PageTitle>
            </Card.Header>
            <Text.InfoLight>
              Buchain topluluğunun bir parçası olmak için aşağıdaki butona tıkla
              ve formu doldur!
            </Text.InfoLight>
            <Card.Image
              objectFit="cover"
              src={'https://i.ibb.co/qJymMC2/20211025-110902.jpg'}
              height={340}
              width="100%"
              alt="Boğaziçi üniversitesi fotoğrafı"
            />
            <Card.Footer>
              <Link
                href="https://forms.gle/XcqyH6LVFsDL6zdy8"
                target={'_blank'}
              >
                <Button.Register>Aramıza Katıl</Button.Register>
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card hoverable bordered>
            <Card.Header
              css={{
                position: 'absolute',
                zIndex: 1,
                background: 'rgba(255,255,255,0.8)',
                borderBottom: '1px solid #fff',
              }}
            >
              <Text.PageTitle h3 color="white">
                🎯 Girişim Başvurusu
              </Text.PageTitle>
            </Card.Header>
            <Text.InfoLight>
              Bir fikrin veya projen hakkında yardıma mı ihtiyacın var? Bize
              ulaş!
            </Text.InfoLight>
            <Card.Image
              objectFit="cover"
              src={'https://i.ibb.co/mXhZdbc/20211025-180133.jpg'}
              height={340}
              width="100%"
              alt="Boğaziçi üniversitesi fotoğrafı"
            />
            <Card.Footer>
              <Link
                href="mailto:bogazicichain@gmail.com?subject=Girişim Başvurusu"
                target={'_blank'}
              >
                <Button.Register>Bize Ulaş</Button.Register>
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card hoverable bordered>
            <Card.Header
              css={{
                position: 'absolute',
                zIndex: 1,
                background: 'rgba(255,255,255,0.8)',
                borderBottom: '1px solid #fff',
              }}
            >
              <Text.PageTitle h3 color="white">
                💎 Sponsorluk Başvurusu
              </Text.PageTitle>
            </Card.Header>
            <Text.InfoLight>
              Buchain&apos;in ilerlemesine ve blockchain teknolojisinin geleceğine
              katkıda bulunmak mı istiyorsunuz?
            </Text.InfoLight>
            <Card.Image
              objectFit="cover"
              src={'https://i.ibb.co/g9ksYjV/20220126-124556.jpg'}
              height={340}
              width="100%"
              alt="Boğaziçi üniversitesi fotoğrafı"
            />
            <Card.Footer>
              <Link
                href="mailto:bogazicichain@gmail.com?subject=Sponsorluk"
                target={'_blank'}
              >
                <Button.Register>Sponsor Ol</Button.Register>
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export default Basvuru
