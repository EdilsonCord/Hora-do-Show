import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Container, Content, H1, H2, H3, getTheme, StyleProvider, Icon, Form, Item, Input, Label, Button, Text } from 'native-base';

import material from '../../../../native-base-theme/variables/material'

import styles from './styles';


export default function CadastrarInformacoes({navigation}) {

    return(
        <StyleProvider getTheme={material}>
            <Container style={styles.container}>
                    <Text>Completar Perfil</Text>

                    <Item>
                        <Input placeholder="Nome"></Input>
                        <Input placeholder="Sobrenome"></Input>
                    </Item>

            </Container>

        </StyleProvider>
    );

}