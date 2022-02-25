import { Text } from '@nextui-org/react'
import Icon from '/src/components/base/icons.js'
import WordText from '/src/components/base/Text.js'
import variables from "/styles/palette.module.scss"

// PREVIEW FOR TEXT COMPONENTS ACCORDING TO THEIR PAGES

const Home = () => {
  return (
    <div>

     Icon check:<br/>   
        <Icon name="instagram"/> <Icon name="envelope"/> <Icon name="twitter"/>
        <Icon name="discord"/> <Icon name="hamburger"/>
        <br></br>
        ------Manifesto--------
            <Text.Titles>Manifesto!</Text.Titles>
            <Text.Info>Topluluğumuzun misyonu, Boğaziçi Üniversitesi&apos;nin mensuplarına verdiği</Text.Info>
            <Text.Titles>Danışma Kurulu</Text.Titles>
            <Text.MidText>Ad Soyad</Text.MidText>
            <Text.SmallTitle>Title</Text.SmallTitle>
            <Text.SmallTitleLight>Title</Text.SmallTitleLight>
            <Text.Titles>Üyelik Tipleri</Text.Titles>
            <Text.Info>Öğrenci Üye</Text.Info>
            <Text.SmallTitleLight>TexttexttextTexttexttextTexttexttext
              TexttexttextTexttexttextTexttexttextTexttexttext
            </Text.SmallTitleLight>
              
              <Text.Titles>Destekçiler</Text.Titles>
              <Text.Titles>Ana Destekçi</Text.Titles>
              <Text.Titles>X Destekçiler</Text.Titles>
              <Text.SmallTitle>X ŞİRKETİ</Text.SmallTitle>
              <Text.SmallTitle>Şirket Açıklaması</Text.SmallTitle>
          <br/>
        ------Başvuru--------
            <Text.Titles>Başvuru</Text.Titles>
            <Text.Info>İçerik</Text.Info>
          <br/>
        ------Oluşumlar--------
          <br/>main:
              <Text.Titles>Oluşum 1</Text.Titles>
              <Text.Titles>Oluşum Adı</Text.Titles>
              <Text.SmallTitleLight>Oluşum Açıklaması</Text.SmallTitleLight>
              <br/><br/>other:
              <Text.Titles>Oluşum 1</Text.Titles>
              <Text.Info>Oluşum Adı</Text.Info>
              <Text.InfoLight>Oluşum Açıklaması</Text.InfoLight>
        -----Eğitimler----
            <Text.Titles>Eğitimler</Text.Titles>
            <Text.Info>TexttexttextTexttexttextTexttexttextTexttext
              textTexttexttextTexttexttextTexttexttext</Text.Info>
          
            <Text.Titles>Eğitim Adı</Text.Titles>
            <Text.InfoLight>Eğitim AçıklamasıEğitim Açıklaması</Text.InfoLight>
            <Text.Titles>Tarih 05/06/2022</Text.Titles>
            <Text.Titles>Başvuru Tarihleri 05/06/22 - 06/06/22 </Text.Titles>

            <Text.MenuPassive>TÜMÜ</Text.MenuPassive>
            <Text.MenuPassive>ÜYELER İÇİN</Text.MenuPassive>
            <Text.SmallTitle>ŞİRKETLER İÇİN</Text.SmallTitle>
            <Text.MenuPassive>YAZILIMCILAR İÇİN</Text.MenuPassive>
          <br/>
        -----Navbar----<br/>
            <Text.MidText>Hakkımızda</Text.MidText>
            <div style={{backgroundColor: variables.dark,width : '150px'}}>
            <Text.WhiteText>Manifesto</Text.WhiteText>
            <Text.WhiteText>Yönetişim</Text.WhiteText>
            <Text.WhiteText>Tüzük</Text.WhiteText>
            <Text.WhiteText>Üyeler ve Destekçiler</Text.WhiteText>
            </div>

          <br/>

          <Text.Titles>Blokzincir projesi geliştiren ve geliştirmek isteyen insanları
             bir araya getiren merkezsiz,Boğaziçi tabanlı bir platform!</Text.Titles>
    </div>

  )
}



export default Home