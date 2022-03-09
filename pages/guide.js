import { Button, Collapse, Grid, Text } from '@nextui-org/react'
import TextTitles from '../src/components/base/Text'
import CustomButton from '../src/components/base/Button'
import ConsultantCard from '../src/components/ConsultantCard'
import ExampleCard from '../src/components/Card/ExampleCard'
import FormationModul from '../src/components/Modal/FormationModul'

const Guide = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Buchain Guide</h1>
      <Grid.Container gap={2} justify="center">
        <Grid justify="center" xs={12}>
          <Collapse
            shadow
            title="Text"
            subtitle="Base Text Components"
            css={{ width: 800 }}
          >
            <Text>Text: Lorem ipsum dolor amet</Text>
            <Text.Title>Title: Lorem ipsum dolor amet</Text.Title>
            <Text.Info>Info: Lorem ipsum dolor amet</Text.Info>
            <Text.InfoLight>InfoLight: Lorem ipsum dolor amet</Text.InfoLight>
            <Text.MidText>MidText: Lorem ipsum dolor amet</Text.MidText>
            <Text.SmallTitle>
              SmallTitle: Lorem ipsum dolor amet
            </Text.SmallTitle>
            <Text.SmallTitleLight>
              SmallTitleLight: Lorem ipsum dolor amet
            </Text.SmallTitleLight>
            <Text.MenuPassive>
              MenuPassive: Lorem ipsum dolor amet
            </Text.MenuPassive>
            <div style={{ background: 'black' }}>
              <Text.White>White: Lorem ipsum dolor amet</Text.White>
            </div>
          </Collapse>
        </Grid>
        <Grid justify="center" xs={12}>
          <Collapse
            shadow
            title="Button"
            subtitle="Base Button Components"
            css={{ width: 800 }}
          >
            <Button.Apply>Apply Button</Button.Apply>
            <Button.Register>Register Button</Button.Register>
            <Button.Courses>Courses Button</Button.Courses>
          </Collapse>
        </Grid>
        <Grid justify="center" xs={12}>
          <Collapse
            shadow
            title="Card"
            subtitle="Card Components"
            css={{ width: 800 }}
          >
            <ConsultantCard />
            <ExampleCard />
          </Collapse>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default Guide
