import React from 'react'
import Layout from '../src/Layout'
import CustomButton from '../src/components/base/Button'
import WordText from '/src/components/base/Text.js'
import { Text, Button, Grid, Link } from '@nextui-org/react'

const Basvuru = () => {
  return (
    <Layout>
      <Grid.Container
        align="left"
        direction="column"
        alignItems="left"
        md="8"
        xl="12"
      >
        <Text.PageTitle>BAŞVURU</Text.PageTitle>
        <Text.InfoLight>
          Buchain'li olmak için aşağıdaki butona tıkla ve formu doldur!
        </Text.InfoLight>
        <Link
          href="https://forms.gle/XcqyH6LVFsDL6zdy8"
          target={'_blank'}
          css={{ marginTop: '10px' }}
        >
          <Button.Register>Aramıza Katıl</Button.Register>
        </Link>
      </Grid.Container>
    </Layout>
  )
}

export default Basvuru
