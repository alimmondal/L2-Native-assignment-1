import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons as an example
import { ImLocation } from "react-icons/im";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.ImageView}>
        <View>
        <Image source={require("./assets/githubLogo.png")} style={styles.img} />
        </View>
        <View style={styles.TextView}>
          <Text style={styles.gHead}>The Octocat</Text>
          <Text style={styles.gSubHead}>@octocat</Text>
          <Text style={styles.date}>Joined 25 Jan 2011</Text>
        </View>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.pText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer  adipiscing elit</Text>
      </View>

      <View style={styles.report}>
        <View style={styles.reportColum}>
          <Text style={styles.reportText}>Repos</Text>
          <Text style={styles.rpNumber}>8</Text>
        </View>
        <View style={styles.reportColum}>
          <Text style={styles.reportText}>Followers</Text>
          <Text style={styles.rpNumber}>3938</Text>
        </View>
        <View style={styles.reportColum}>
          <Text style={styles.reportText}>Following</Text>
          <Text style={styles.rpNumber}>9</Text>
      </View>  
      </View>

      <View style={{ flex: 1,alignSelf:"flex-start", gap:10, marginTop:50, margin:20 }}>
        
        <View style={styles.icon}>
          <Icon name="linkedin" size={30} color="#900" />
          <Text>https://linkedin.com/in/alim-mondal</Text>   
        </View>
        <View style={styles.icon}>
          <Icon name="link" size={30} color="#900" />
          <Text>https://github.com/alimmondal</Text>   
        </View>
        <View style={styles.icon}>
          <Icon name="twitter" size={30} color="#900" />
          <Text style={{color:"lightgrey"}}>Not Available</Text>
        </View>
        <View style={styles.icon}>
          <Icon name="building" size={30} color="#900" />
          <Text>@github</Text>          
        </View>
        
    </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  ImageView: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: "lightgrey",
    padding: 50
  },
  gHead: {
    fontSize: 25,
    fontWeight: "bold",
  },
  gSubHead: {
    color: "blue",
    fontSize: 17
  },
  pText: {
    textAlign: "justify",
    fontSize: 15,
    padding: 20
  },
  report: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#F3F4F7",
    padding: 40,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  
  },
  reportColum: {
    flexDirection: "column",
    alignItems: "center",
  },
  reportText: {
    fontSize: 17,
  },
  rpNumber: {
    fontSize: 20,
    fontWeight: "bold",
},
  icon: {
    flexDirection: "row",
  gap:20  
  }

});
