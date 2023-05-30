import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../CommonComponentStyling/CommonStlyes';

const Home = () => {

    return (
        <View>
            <Text>Home Page</Text>
            <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;