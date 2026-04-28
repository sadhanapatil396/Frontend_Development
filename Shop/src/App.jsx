import React from 'react'
import Navbar from './components/Navbar'
import  Body from './components/Body'
import Footer from './components/Footer'
import "./App.css"
import Registration from './components/Registration'
const App = () => {
  return (
    <div>
      <Navbar/>
       <Registration/>
        <div className='cards'>
      
      <Body img="https://m.media-amazon.com/images/I/51+XiI37MbL._AC_UF1000,1000_QL80_.jpg"name="Pens" price="200"/>
      <Body img="https://m.media-amazon.com/images/I/71zMu7RJivL._AC_UF350,350_QL50_.jpg" name="College/School Bag" price="1,000"/>
      <Body img="https://m.media-amazon.com/images/I/81x29AHlgeL._AC_UY350_.jpg" name="Stylish Men Watch" price="1,500"/>
      <Body img="https://karatcart.com/cdn/shop/products/33015425_1_6a10bada-8036-423c-b950-d055abc77529.jpg?v=1656479470" name="women Earring" price="150"/>
      <Body img="https://m.media-amazon.com/images/I/71eVfoaScXL._AC_UY1100_.jpg" name="hand Bracelet" price="100"/>
      <Body img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAPkJr-A83pgKDpNBrRatIXniBLXptZhmZQ&s" name="iphone16" price="75,000"/>
      <Body img="https://www.missmosa.in/cdn/shop/files/DD3E22C1-A8E7-4416-9869-D7FC9090BBDF_fc3859d1-9cb3-4f43-9a4a-bd2c5dbd5fed.jpg?v=1763363225&width=500" name="women jokets" price="399"/>
      <Body img="https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2021-06-24at00.30.35_1200x1200.jpg?v=1624726603" name="doll" price="899"/>
      <Body img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0n1OqjH9US8arRatB-jrT7SH7TmauVTpR7w&s" name="Men's Jackets" price="1,990"/>
      <Body img="https://www.soosi.co.in/cdn/shop/products/WhatsApp_Image_2019-12-22_at_18.16.07_1200x1200.jpg?v=1577469125" name="hand bags" price="699"/>
      <Body img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0wfnw1WFglW4oxG6ly33K_iNeXXjvJ9TVg&s" name="Apple Laptop" price="1,75,000"/>
      <Body img="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017858757_437Wx649H_202306072357351.jpeg" name="Bangle" price="260"/>
      <Body img="https://m.media-amazon.com/images/I/91Dp5mRYNeL._AC_UF1000,1000_QL80_.jpg"name="SoundBox" price="3,500"/>
      <Body img="https://img.kwcdn.com/product/fancy/4b950f49-8586-4e10-8fe1-d916078d2a20.jpg?imageView2/2/w/500/q/60/format/webp"name="Dairy books" price="500"/>
      
      </div>
      <Footer/>

    </div>
  )
}

export default App