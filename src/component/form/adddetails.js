import React, { Component } from 'react';
import { View } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Text, Button, Icon, Item, Input, Label, Form } from 'native-base';
import { HEXCOLOR } from '../../style/hexcolor';

class AddDetails extends Component {
  constructor() {
    super();
    this.state = {
      isDateTimePickerVisible: false,
    };
    this._showDateTimePicker = this._showDateTimePicker.bind(this);
  }

  _showDateTimePicker() { this.setState({ isDateTimePickerVisible: true }); }

  _hideDateTimePicker() { this.setState({ isDateTimePickerVisible: false }); }

  _handleDatePicked(date) {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  }
  render() {
    return (
      <View>
        <View>
          <Text>Add Details</Text>
        </View>
        <View>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Price</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Price</Label>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
              />
            </Item>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Button rounded style={{}} onPress={() => { this._showDateTimePicker(); }} >
                <Text style={{}}>Save</Text>
              </Button>
              <Button rounded style={{}} onPress={() => { }} >
                <Text style={{}}>Cancel</Text>
              </Button>
            </View>
          </Form>
        </View>
      </View>
    );
  }
}

export default AddDetails;
