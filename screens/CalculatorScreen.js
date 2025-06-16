import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Display from '../components/Display';
import Button from '../components/Button';

export default function CalculatorScreen() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [history, setHistory] = useState('');

  const handleNumberInput = (num) => {
    const newDisplayValue = displayValue === '0' ? num.toString() : displayValue + num;
    setDisplayValue(newDisplayValue);
  };

  const handleOperatorInput = (op) => {
    if (operator && firstValue) {
      handleEqual();
      setFirstValue(displayValue);
    } else {
      setFirstValue(displayValue);
    }
    setOperator(op);
    setHistory(displayValue + ' ' + op);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result = 0;

    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === '*') result = num1 * num2;
    else if (operator === '/') result = num1 / num2;
    else if (operator === '%') {
        result = num1 / 100;
        setDisplayValue(result.toString());
        setHistory(num1 + '%');
        setOperator(null);
        setFirstValue('');
        return;
    }

    setDisplayValue(result.toString());
    setHistory(firstValue + ' ' + operator + ' ' + displayValue + ' =');
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setHistory('');
  };

  const handlePlusMinus = () => {
    setDisplayValue((parseFloat(displayValue) * -1).toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Display value={displayValue} history={history} />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button label="AC" onPress={handleClear} top />
          <Button label="+/-" onPress={handlePlusMinus} top />
          <Button label="%" onPress={() => handleOperatorInput('%')} top />
          <Button label="/" onPress={() => handleOperatorInput('/')} operator />
        </View>
        <View style={styles.row}>
          <Button label="7" onPress={() => handleNumberInput(7)} />
          <Button label="8" onPress={() => handleNumberInput(8)} />
          <Button label="9" onPress={() => handleNumberInput(9)} />
          <Button label="*" onPress={() => handleOperatorInput('*')} operator />
        </View>
        <View style={styles.row}>
          <Button label="4" onPress={() => handleNumberInput(4)} />
          <Button label="5" onPress={() => handleNumberInput(5)} />
          <Button label="6" onPress={() => handleNumberInput(6)} />
          <Button label="-" onPress={() => handleOperatorInput('-')} operator />
        </View>
        <View style={styles.row}>
          <Button label="1" onPress={() => handleNumberInput(1)} />
          <Button label="2" onPress={() => handleNumberInput(2)} />
          <Button label="3" onPress={() => handleNumberInput(3)} />
          <Button label="+" onPress={() => handleOperatorInput('+')} operator />
        </View>
        <View style={styles.row}>
          <Button label="0" onPress={() => handleNumberInput(0)} double />
          <Button label="." onPress={() => handleNumberInput('.')} />
          <Button label="=" onPress={handleEqual} operator />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});