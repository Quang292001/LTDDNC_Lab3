import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import book from './assets/book.png'

export default function App() {
  return (
    <View style={styles.container}>
     

      <View style={styles.container2}>
        <View style={styles.information}>
        <Image style={styles.book} source={book}/>
        <View style={styles.informationbook}>
        <Text style={{fontFamily:'Roboto'}} > Nguyên hàm tích phân và ứng dụng </Text>
        <Text> Cung cấp bởi Tiki Trading </Text>
        <Text style={{color:'red',fontSize:23}}> 141.800 đ </Text>
        <Text style={{textDecorationLine:'line-through'}}>141.800 đ</Text>
        <TouchableOpacity style={styles.button}>

        </TouchableOpacity>

        </View>
        </View>
        <View style={styles.giamga}>
        <Text>Mã giảm giá đã lưu</Text>
        <Text style={{marginLeft:30, color:'blue'}}>Xem tại đây</Text>
       
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
          <TouchableOpacity style={{borderBottomColor:'#ccc', borderWidth:1,paddingHorizontal:60,paddingVertical:10}}>
            <Text style={{fontSize:20, fontWeight:'200'}}>Mã giảm giá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderBottomColor:'#ccc', borderWidth:1,paddingHorizontal:30,paddingVertical:10,marginLeft:20, backgroundColor:'blue'}}>
            <Text style={{fontSize:20,fontWeight:'600',color:'#fff'}}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
       
      </View>

       <View style={styles.container3}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontWeight:'100'}}>Bạn có phiếu quà tặng Tiki/Got it/ UrBox?</Text>
          <Text style={{color:'blue', marginLeft:10}}>Nhập tại đây?</Text>
        </View>
     
        </View>

        <View style={styles.container4}>
          <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize:20, fontWeight:'300',marginRight:200}}>Tạm tính</Text>
            <Text style={{color:'red', fontSize:20, fontWeight:'100'}}>141.800 đ</Text>
          </View>
        
        </View>
        <View style={styles.container5}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize:25, fontWeight:'500',marginRight:200, color:'#cccc'}}>Thành tiền</Text>
            <Text style={{color:'red', fontSize:20, fontWeight:'100'}}>141.800 đ</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'red',paddingHorizontal:30,paddingVertical:15}}>
            <Text style={{fontSize:25,color:'#fff',fontWeight:'500'}}>Tiến hành đặt hàng</Text>
          </TouchableOpacity>
        </View>
    </View>

    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cccc',
    // alignItems: 'center',
    // justifyContent: 'center',
     flexDirection:'column'
  },
  
  container2:{
    flex:1,
    backgroundColor:'#cccc',
    height: 310,
    // width: 360,
    left: 1,
    top: 0,
    borderradius: 0,
    // position:'absolute',
    // alignContent:'center'

  },
  information:{
    backgroundColor:'white',
    justifyContent:'center',
    flexDirection:'row',
    position:'relative'
  },
  informationbook:{
    margin: 12,
    flexDirection:'column'
    
  },
  book:{
    margin:12
  },
  container3:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    height:50
    
   
  },
  container4:{
    // flex:1,
    // backgroundColor:'yellow',
    marginTop:20,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    height:50

  },
  container5:{
    // flex:1,
    // backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    marginTop:200
    
   
  },
  giamga:{
    flexDirection:'row',
    margin:10
  },

});
