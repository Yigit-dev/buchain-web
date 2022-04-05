import CustomButton from "../../components/base/Button"
import WordText from '../../components/base/Text'
import {
    Text,
    Button,
    Link,
    Card,
} from '@nextui-org/react'

const ApplicationCard = ({data}) => {
  return (
    <Card hoverable bordered css={{maxW: 500}}>
        <Card.Header
        css={{
            position: 'absolute',
            zIndex: 1,
            background: 'rgba(255,255,255,0.8)',
            borderBottom: '1px solid #fff',
        }}
        >
            <Text.PageTitle h3 css={{fontSize: "2rem"}}>{data.title}</Text.PageTitle>
        </Card.Header>
        
        <Text.InfoLight>
        {data.description}
        </Text.InfoLight>
        
        <Card.Image
        objectFit="cover"
        src={data.cover}
        height={340}
        width="100%"
        alt="Boğaziçi üniversitesi fotoğrafı"
        />
        
        <Card.Footer>
            <Link href={data.link} target={'_blank'}>
                <Button.Register>Aramıza Katıl</Button.Register>
            </Link>
        </Card.Footer>
  </Card>
  )
}

export default ApplicationCard