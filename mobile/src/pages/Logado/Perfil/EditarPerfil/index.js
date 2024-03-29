import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TextInputMask from 'react-native-text-input-mask';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment"

import styles from './styles';

const iconSize = 16;

import MCIcon from 'react-native-vector-icons/MaterialIcons';
import colors from 'dir-src/assets/colors';
const rightArrow = <MCIcon name="keyboard-arrow-right" size={iconSize} color={colors.mainTextColor} />
var campo = '';
var valorCampo = '';

import FeatherIcons from 'react-native-vector-icons/Feather';

const iconSize2 = 18;

const Relogio = <FeatherIcons name="clock" size={iconSize2} color={colors.red} />



export default function EditPerfil({ navigation }) {
   const [meta, editMeta] = useState(global.user.meta); //META
   const [sexo, editSexo] = useState(global.user.sexo); //sexo
   const [name, editName] = useState(global.user.name);
   const [surname, editSurname] = useState(global.user.surname);
   const [peso, editPeso] = useState(global.user.peso);
   const [altura, editAltura] = useState(global.user.altura);
   const [dtNasc, editDtNasc] = useState(global.user.dtNasc);

   const [modalVisible, setModalVisible] = useState(false);

   const [dtNascAux, setDtNasc] = React.useState(parseInt(moment().format('L')));


   // DatePicker functions
   const [show, setShow] = useState(false);

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || dtNascAux;
      setShow(Platform.OS === 'ios');
      setDtNasc(currentDate);
      editDtNasc(moment(currentDate).format("DD/MM/YYYY"))
   };

   const showDatepicker = () => {
      setShow(true);
      // showMode('date');
   };

   const CampoDtNasc = () => {
      var retorno;

      if (dtNascAux == parseInt(moment().format('L')))
         retorno = global.user.dtNasc;
      else {
         retorno = moment(dtNascAux).format("DD/MM/YYYY");
      }

      return <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center' }}>
         <Text style={styles.insertDtNascText}>{retorno}</Text>
         <Text >{Relogio}</Text>

      </View>

   }

   async function handleCompleteRegister(e) {
      e.preventDefault();

      //CRIAR OUTRA FUNÇÃO NÃO-ASYNC PARA VERIFICAR CAMPOS INVES DE POR AQUI
      //if (name === '') {
      //	return alert('Você esqueceu de por seu nome');
      //}

      global.user.name = name;
      global.user.surname = surname;
      global.user.sexo = sexo;
      global.user.peso = peso;
      global.user.altura = altura;
      global.user.dtNasc = dtNasc;
      global.user.meta = meta;

      fetch('http://' + global.endereco + '/api/att_dados', {
         method: 'post',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            email: global.user.email,
            name: name,
            surname: surname,
            sexo: sexo,
            peso: peso,
            altura: altura,
            dtNasc: dtNasc,
            meta: meta
         }),
      })
         .then((response) => response.json())
         .then((response) => {
            if ('error' in response) {
               alert(response.error);
            } else {
               console.log(response);
               Alert.alert('Concluído', 'Seus dados foram alterados!')
            }
         })
         .catch((err) => {
            console.log(err);
         });

      Alert.alert('Concluído', 'Seus dados foram alterados!');
      setModalVisible(!modalVisible);
   }



   const TextInputNome = () => (
      <TextInput
         style={styles.modalInputText}
         defaultValue={global.user.name}
         onChangeText={(text) => editName(text)}
         name={name}

         autoCapitalize='words'
         autoFocus={true}
         keyboardType='default'

      />
   );

   const TextInputSobrenome = () => (
      <TextInput
         style={styles.modalInputText}
         defaultValue={global.user.surname}
         onChangeText={(text) => editSurname(text)}
         surname={surname}

         autoCapitalize='words'
         autoFocus={true}
         keyboardType='default'

      />
   )

   const TextInputDtNasc = () => (
      // <TextInputMask
      // 	mask={'[00]/[00]/[0000]'}
      // 	// placeholder="Data de Nasc."
      // 	defaultValue={global.user.dtNasc}
      // 	keyboardType={'number-pad'}
      // 	autoFocus={true}
      // 	style={styles.modalInputText}
      // 	onChangeText={(text) => {
      // 		editDtNasc(text);
      // 	}}

      // 	dtNasc={dtNasc}
      // />

      <TouchableOpacity style={styles.insertDtNasc} onPress={showDatepicker}>
         {CampoDtNasc()}
      </TouchableOpacity>
   )

   const TextInputAltura = () => (
      <TextInputMask
         mask={'[000]'}
         // placeholder="Altura (cm)"
         defaultValue={global.user.altura}
         keyboardType={'number-pad'}
         autoFocus={true}
         style={styles.modalInputText}
         onChangeText={(text) => {
            editAltura(text);
         }}
         altura={altura}
      />
   )

   const TextInputPeso = () => (
      <TextInputMask

         mask={'[990],[000]'}
         // placeholder="Peso (kg)"
         defaultValue={global.user.peso}
         keyboardType={'decimal-pad'}
         autoFocus={true}
         style={styles.modalInputText}
         onChangeText={(text) => {
            editPeso(text);
         }}
         peso={peso}
      />
   )

   const PickerSexo = () => (
      <Picker
         selectedValue={sexo}
         style={styles.modalInputText}
         onValueChange={(itemValue, itemIndex) => editSexo(itemValue)}
      >
         <Picker.Item label="Masculino" value="Masculino" />
         <Picker.Item label="Feminino" value="Feminino" />
      </Picker>
   )


   const PickerMeta = () => (
      <Picker

         selectedValue={meta}
         style={styles.modalInputText}
         onValueChange={(itemValue, itemIndex) => editMeta(itemValue)}
      >
         <Picker.Item label="Emagrecer" value="Emagrecer" />
         <Picker.Item label="Definir" value="Definir" />
         <Picker.Item label="Crescer" value="Crescer" />
      </Picker>

   )

   const TipoInput = () => {
      switch (valorCampo) {
         case 'nome':
            return TextInputNome();

         case 'sobrenome':
            return TextInputSobrenome();

         case 'sexo':
            return PickerSexo();

         case 'dtNasc':
            return TextInputDtNasc();

         case 'altura':
            return TextInputAltura();

         case 'peso':
            return TextInputPeso();

         case 'meta':
            return PickerMeta();

         default:
            return <View></View>
      }
   }

   return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

         <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}

         >
            <View style={styles.containerModal}>

               <View style={styles.baseModal}>
                  <Text style={styles.modalTitle}>Alterando {campo}</Text>
                  {TipoInput()}

                  <View style={styles.doubleButtons}>
                     <TouchableOpacity style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                        setModalVisible(!modalVisible);
                        Alert.alert('Info', 'Seus dados não foram alterados!')
                     }}>
                        <Text style={styles.link}>Cancelar</Text>
                     </TouchableOpacity>

                     <TouchableOpacity style={styles.bigButton} onPress={handleCompleteRegister} >
                        <Text style={styles.bigButtonText}>Confirmar</Text>

                     </TouchableOpacity>
                  </View>
               </View>

               {show && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={dtNascAux}
                     mode={'date'}
                     display="default"
                     onChange={onChange}
                  />
               )}

            </View>
         </Modal>

         <TouchableOpacity style={styles.editInfo} onPress={() => {
            campo = "seu nome";
            valorCampo = 'nome';
            setModalVisible(true);
         }}>
            <View style={styles.infoEsquerda}>
               <Text style={styles.infoText}>Seu nome</Text>

            </View>

            <View style={styles.infoDireita}>
               <Text style={styles.infoText}>{global.user.name}</Text>
               {rightArrow}
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.editInfo} onPress={() => {
            campo = "seu sobrenome";
            valorCampo = 'sobrenome';
            setModalVisible(true);
         }}>
            <View style={styles.infoEsquerda}>
               <Text style={styles.infoText}>Seu sobrenome</Text>

            </View>

            <View style={styles.infoDireita}>
               <Text style={styles.infoText}>{global.user.surname}</Text>
               {rightArrow}
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.editInfo} onPress={() => {
            campo = "seu sexo";
            valorCampo = 'sexo';
            setModalVisible(true);
         }}>
            <View style={styles.infoEsquerda}>
               <Text style={styles.infoText}>Seu sexo</Text>

            </View>

            <View style={styles.infoDireita}>
               <Text style={styles.infoText}>{global.user.sexo}</Text>
               {rightArrow}
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.editInfo} onPress={() => {
            campo = "sua data de nascimento";
            valorCampo = 'dtNasc';
            setModalVisible(true);
         }}>
            <View style={styles.infoEsquerda}>
               <Text style={styles.infoText}>Data de Nascimento</Text>

            </View>

            <View style={styles.infoDireita}>
               <Text style={styles.infoText}>{global.user.dtNasc}</Text>
               {rightArrow}
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.editInfo} onPress={() => {
            campo = "sua altura";
            valorCampo = 'altura';
            setModalVisible(true);
         }}>
            <View style={styles.infoEsquerda}>
               <Text style={styles.infoText}>Altura</Text>

            </View>

            <View style={styles.infoDireita}>
               <Text style={styles.infoText}>{global.user.altura} cm</Text>
               {rightArrow}
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.editInfo} onPress={() => {
            campo = "seu peso";
            valorCampo = 'peso';
            setModalVisible(true);
         }}>
            <View style={styles.infoEsquerda}>
               <Text style={styles.infoText}>Peso</Text>

            </View>

            <View style={styles.infoDireita}>
               <Text style={styles.infoText}>{global.user.peso} Kg</Text>
               {rightArrow}
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.editInfo} onPress={() => {
            campo = "seu objetivo";
            valorCampo = 'meta';
            setModalVisible(true);
         }}>
            <View style={styles.infoEsquerda}>
               <Text style={styles.infoText}>Objetivo</Text>

            </View>

            <View style={styles.infoDireita}>
               <Text style={styles.infoText}>{global.user.meta}</Text>
               {rightArrow}
            </View>
         </TouchableOpacity>

      </ScrollView>
   );
}
