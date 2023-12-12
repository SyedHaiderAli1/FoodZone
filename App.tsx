import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {Provider} from 'react-redux'

import store from './src/store/stores'
import Navigation from './navigation'
import * as Colors from './src/constants/colors'

function App(): JSX.Element {
    const backgroundStyle = {backgroundColor: Colors.White, flex: 1}

    return (
        <Provider store={store}>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar barStyle={'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
                <Navigation />
            </SafeAreaView>
        </Provider>
    )
}

export default App
