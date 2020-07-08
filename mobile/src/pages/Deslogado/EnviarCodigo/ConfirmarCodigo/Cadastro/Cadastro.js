import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {Picker} from '@react-native-community/picker';

import styles from './styles';

export default function Cadastro({navigation}) {
  const [value, setValue] = React.useState('');

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../../../assets/logooficial.png')}
          resizeMode="contain"
          style={styles.logo}
        />

        <Text style={styles.textoImportante}>CADASTRO</Text>
      </View>

      <View style={styles.forms}>
        <TextInput placeholder="Nome" style={styles.insertText} />
        <TextInput placeholder="Sobrenome" style={styles.insertText} />

        <View style={styles.campoSexo}>
          <Text style={styles.textoImportante}>Sexo</Text>

          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}>
            <View style={styles.radioButton}>
              <RadioButton value="Masc" />

              <Text style={styles.textoRB}>Masculino</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Fem" />

              <Text style={styles.textoRB}>Feminino</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.campoDuplo}>
          <TextInputMask
            mask={'[000]'}
            placeholder="Altura (cm)"
            keyboardType={'number-pad'}
            style={styles.insertValuePequeno}
          />
          <TextInputMask
            mask={'[990],[000]'}
            placeholder="Peso (kg)"
            keyboardType={'decimal-pad'}
            style={styles.insertValuePequeno}
          />
        </View>

        <View style={styles.campoDuplo}>
          <TextInputMask
            mask={'[00]/[00]/[0000]'}
            placeholder="Data de Nasc."
            keyboardType={'number-pad'}
            style={styles.insertValuePequeno}
          />

          <Picker
            placeholder={'meta'}
            selectedValue={selectedValue}
            style={styles.insertValuePequeno}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Java" value="java" />
          </Picker>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fatButton}
          onPress={() => navigation.navigate('ContaCriada')}>
          <Text style={styles.textoFatButton}>FINALIZAR CADASTRO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.pop()}>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
