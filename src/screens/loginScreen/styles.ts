// import { StyleSheet } from "react-native";
// import { fonts } from "../../utils/constants";

// export default StyleSheet.create({
//     container:{
//         flex:1,
//         paddingTop: 100,
//         paddingHorizontal:20,
//     },
//     formCont:{
//         marginTop:20,
//     },
//     inputCont:{},
//     input:{
//         borderWidth:1,
//         borderColor:'#ccc',
//         padding:10,
//         borderRadius:15,
//         marginBottom:10,
//         fontSize:16,
//     },
//     label:{
//         marginBottom:5,
//         fontFamily:fonts.Cairo,
//         color:'#333',
//         fontSize:15,
//     },
//     submitBtn:{
//         backgroundColor:'gold',
//         alignItems:'center',
//         paddingVertical:10,
//         borderRadius:10,
//         width:'100%',
//     },
//     submitText:{
//         fontFamily:fonts.CairoBold,
//         fontSize:20
//     },
//     title:{
//         fontFamily:fonts.CairoBold,
//         fontSize:20,
//         marginBottom:10,
//         textAlign:'center'
//     },
//     note:{
//         fontFamily:fonts.CairoLight,
//         fontSize:10,
//         marginBottom:5,
//     },
// })
import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { fonts } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: responsiveHeight(12), 
    paddingHorizontal: responsiveWidth(5), 
  },
  formCont: {
    marginTop: responsiveHeight(2.5), 
  },
  inputCont: {},
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: responsiveHeight(1.3), 
    borderRadius: responsiveWidth(5),
    marginBottom: responsiveHeight(1.3), 
    fontSize: responsiveFontSize(2), 
    fontFamily: fonts.Cairo,
  },
  label: {
    marginBottom: responsiveHeight(0.7), 
    fontFamily: fonts.Cairo,
    color: "#333",
    fontSize: responsiveFontSize(1.9), 
  },
  submitBtn: {
    backgroundColor: "gold",
    alignItems: "center",
    paddingVertical: responsiveHeight(1.5), 
    borderRadius: responsiveWidth(3.5), 
    width: "100%",
  },
  submitText: {
    fontFamily: fonts.CairoBold,
    fontSize: responsiveFontSize(2.5), 
  },
  title: {
    fontFamily: fonts.CairoBold,
    fontSize: responsiveFontSize(2.5), 
    marginBottom: responsiveHeight(1.3), 
    textAlign: "center",
  },
  note: {
    fontFamily: fonts.CairoLight,
    fontSize: responsiveFontSize(1.4), 
    marginBottom: responsiveHeight(0.7), 
  },
});
