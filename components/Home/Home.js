import {View, Text} from 'react-native';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <View>
            <Text>Home Page</Text>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </View>
    );
}

export default Home;