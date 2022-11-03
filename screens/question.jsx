import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TouchableHighlight, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Slideshow from 'react-native-image-slider-show';
import DropDownPicker from 'react-native-dropdown-picker';

export default function QuestionScreen1({ route, navigation }) {

    const { score, questions, questionNum } = route.params;

    // dropdown
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'North Hall', value: 'NH' },
        { label: 'Science Building', value: 'SB' },
        { label: 'Spoelhof Fieldhouse', value: 'SF' },
        { label: 'Prince Conference Center', value: 'PCC' },
        { label: 'Spoelhof Center', value: 'SC' },
        { label: 'Hiemenga Hall', value: 'HH' },
        { label: 'Business School', value: 'BS' },
        { label: 'Hekman Library', value: 'HL' },
        { label: 'DeVries Hall', value: 'DH' },
        { label: 'Engineering Building', value: 'EB' },
        { label: 'Covenant Fine Arts Center', value: 'CFAC' },
        { label: 'DeVos Communications Center', value: 'DCC' }
    ]);

    // Text box
    const [number, onChangeNumber] = useState(null);


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[globalStyles.unpaddedContainer, { postion: "absolute" }]}>

            {/*image*/}

            <View style={globalStyles.roomImages}>
                <Slideshow height={400}
                    dataSource={[
                        { url: questions[questionNum].images[0] },
                        { url: questions[questionNum].images[1] },
                        { url: questions[questionNum].images[2] },
                        { url: questions[questionNum].images[3] },
                    ]}
                    scrollEnabled={true}
                />
            </View>

            {/* div */}

            <View style={{ flex: 0.15 }}></View>

            {/* title */}

            <Text style={globalStyles.subtitle}>What Room Is This?</Text>

            {/* div */}

            <View style={{ flex: 0.15 }}></View>

            {/* dropdown */}

            <View style={[{ marginHorizontal: 60 }, { zIndex: 10 }]}>
                <DropDownPicker
                    style={globalStyles.dropDown}
                    textStyle={globalStyles.dropDownText}
                    dropDownContainerStyle={globalStyles.dropDown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>

            {/* div */}

            <View style={{ flex: 0.15 }}></View>

            {/* textinput */}

            <TextInput
                id="RoomNumEntry"
                style={globalStyles.textBox}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Room Number"
                keyboardType="numbers-and-punctuation"
                maxLength={3}
                placeholderTextColor="#424B4C"
                clearButtonMode="unless-editing"
            />

            {/* div */}

            <View style={{ flex: 0.15 }}></View>

            {/* button */}

            <TouchableHighlight
                style={globalStyles.button}
                underlayColor={'#97354E'}
                onPress={() => {
                    navigation.navigate('results', { score, dropDownGuess: value, textInputGuess: number, questions, questionNum })
                }}>
                <Text style={globalStyles.buttonText}>Check Answers</Text>
            </TouchableHighlight>
        </KeyboardAvoidingView >
    );
}
