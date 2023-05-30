import { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { Link } from 'react-router-dom';

import Loader from '../Utils/CustomLoader';

const Index = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an async operation
        setTimeout(() => {
        setLoading(false);
        }, 10000);
    }, []);

    return (
        // <View>
        //     {loading ? (
        //     <Loader />
        //     ) : (
        //     <Text>Welcome to my awesome app!</Text>
        //     )}
        // </View>
        <View>
            <Text>Index Page</Text>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </View>
    );
}

export default Index;