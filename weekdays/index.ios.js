// Import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']

// Create a react component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // moves stuff height wise
    alignItems: 'center' // moves stuff width wise
  }
})

// Show the react component on the screen
// Just called once
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
