import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Slideshow from 'react-native-image-slider-show';
import DropDownPicker from 'react-native-dropdown-picker';

export default function QuestionScreen1({ route, navigation }) {

    const { score } = route.params;

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
        { label: 'Buisiness School', value: 'BS' },
        { label: 'Hekman Library', value: 'HL' },
        { label: 'DeVries Hall', value: 'DH' },
        { label: 'Engineering Building', value: 'EB' },
        { label: 'Covenant Fine Arts Center', value: 'CFAC' },
        { label: 'DeVos Communications Center', value: 'DCC' }
    ]);

    // Text box
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={globalStyles.template}>
            <Text>Question Number One</Text>
            <Slideshow
                dataSource={[
                    { url: require('../img/NH064/NH064-1.jpg') },
                    { url: require('../img/NH064/NH064-2.jpg') },
                    { url: require('../img/NH064/NH064-3.jpg') },
                    { url: require('../img/NH064/NH064-4.jpg') },
                ]}
                scrollEnabled={false}
            />
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <TextInput
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Room #"
                keyboardType="alphanumeric"
            />
            <Button
                title="Check answers"
                onPress={() => navigation.navigate('results2', { score, dropDownGuess: value, textInputGuess: number, dropDownAnswer: "NH", textInputAnswer: "064" })}
            />
        </View>
    );
}