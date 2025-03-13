import { useState } from "react";
import { View, Text, Button, Modal } from "react-native";

const ContentScreen = (props) => {
    const content = props.route.params.content;
    const [modalState, setModalState] = useState(true);
    
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Modal transparent={true} visible={modalState} animationType='slide'>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Content</Text>
          <Text>{content}</Text>
          <Button title='Close Content' onPress={()=>setModalState(false)}/>
        </View>
        </Modal>
  
        {
          !modalState?<Button title='Show Content' onPress={()=>setModalState(true)}/>:null
        }
        
      </View>
    );
}

export default ContentScreen;