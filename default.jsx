import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, TouchableOpacity, Dimensions, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state = {
        goal: "",
        saved: "",
        remaining: 0,
        message: 'Enter a savings goal to start saving!',
        image: 'https://codehs.com/uploads/c1d10199544dc49a3f2dba384e7204b1'
    }
    
    savingsProgress = () => {
        this.setState({
            remaining: this.state.goal - this.state.saved
        })
        
        if (this.state.saved/this.state.goal >= 1 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/557e2bab04dc3dc6ce3084fda2d5746f',
                message: 'Congratulations! You have saved enough to reach your goal!'
            })
        }
        
        else if (this.state.saved/this.state.goal >= .9 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/588b0b95d909d3930927bcf0bd63b84a',
                message: 'You are almost there!'
            })
        }
        
         else if (this.state.saved/this.state.goal >= .8 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/07b11a80faaea5218675eec1249becf1',
                message: 'You are almost there!'
            })
        }
        
         else if (this.state.saved/this.state.goal >= .7 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/173c80ec5f7d01c4efdf141ace917d38',
                message: 'You are getting close!'
            })
        }
        
         else if (this.state.saved/this.state.goal >= .6 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/eb98a9236d8892a3f8381fdc76223d11',
                message: 'You saved more than half of your goal!'
            })
        }
        
         else if (this.state.saved/this.state.goal >= .5 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/e683b414000dae0f5253c1508ddee1c9',
                message: 'You have saved half of your goal!'
            })
        }
        
         else if (this.state.saved/this.state.goal >= .4 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/2b09b70a5a2fe676c7493e36846d9a63',
                message: 'You almost saved half of your goal!'
            })
        }
        
         else if (this.state.saved/this.state.goal >= .3 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/91d75c756a54c047f88be6e7ff924f60',
                message: 'Great start!'
            })
        }
        
         else if (this.state.saved/this.state.goal >= .2 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/08b9d1e0c9a9dfcfd12b75b2587758a0',
                message: 'Good start!'
            })
        }
        
         else if (this.state.saved/this.state.goal >= .1 )
        {
            this.setState({
                image: 'https://codehs.com/uploads/e99b255a16d3afda1aa4a494225aeeab',
                message: 'You are just getting started!'
            })
        }
            
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>
                        Savings Tracker
                    </Text>
                <View style={styles.savingsInputContainer}>
                    <Text style={styles.inputText}>
                        Savings Goal:
                    </Text>
                    <TextInput style={styles.inputBox}
                        placeholder="0"
                        keyboardType= 'numeric'
                        clearTextOnFocus='true'
                        onChangeText={(goal) => this.setState({goal})}
                        value={this.state.goal}
                    />
                </View>
                <View style={styles.savingsInputContainer}>
                    <Text style={styles.inputText}>
                        Money Saved:
                    </Text>
                    <TextInput style={styles.inputBox}
                        placeholder="0"
                        keyboardType= 'numeric'
                        clearTextOnFocus='true'
                        onChangeText={(saved) => this.setState({saved})}
                        value={this.state.saved}
                    />
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={this.savingsProgress}
                >
                    <Text style={styles.buttonText}>
                        Calculate Progress
                    </Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.messageContainer}>
                    <Image
                        source={this.state.image}
                        style={{height: deviceHeight/3.75,  width: deviceWidth/2, borderRadius: 5}}
                    />
                    <Text style={styles.inputText}>
                        You need to save ${this.state.remaining} more to reach your goal.
                    </Text>
                    <Text style={styles.inputText}>
                        {this.state.message}
                    </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'lightblue',
    },
    
    inputContainer: {
        height: .6 * deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    
    messageContainer: {
        height: .35 * deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        fontSize: deviceHeight/15,
        textAlign: 'center',
        color: '#A48B27',
        marginBottom: 5,
    },
    
    inputText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    
    savingsInputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    inputBox: {
        height: deviceHeight/15,
        width: deviceWidth/3,
        fontSize: deviceHeight/15,
        borderWidth: 2,
        borderColor: '#A48B27',
        marginBottom: 5,
        borderRadius: 7,
    },
    
    button:{
        height: deviceHeight/7,
        width: deviceWidth/2.25,
        fontSize: deviceHeight/15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#A48B27',
        backgroundColor: 'gold',
        borderRadius: 10,
    },
    
    buttonText: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
    },
    
});