import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import Tabbar from '../../../assets/Tabbar/Tabbar';
import {
	Container,
	Header,
	Content,
	H1,
	H2,
	H3,
	getTheme,
	StyleProvider,
	Left,
	Right,
	Card,
	CardItem,
	Body,
	Icon,
	Form,
	Item,
	Input,
	Label,
	Button,
	Text,
} from 'native-base';

import material from '../../../../native-base-theme/variables/material';
import styles from './styles';

export default function Home({ navigation }) {
	return (
		<StyleProvider style={getTheme(material)}>
			<Container style={styles.container}>
				<Image
					style={{
						tintColor: material.brandSuccess,
						width: 100,
						height: 100,
						marginBottom: 10,
					}}
					source={require('../../../assets/marketing.png')}
				/>

				<Text style={styles.textoCabecalho}>PATROCINADORES</Text>
				<Content showsVerticalScrollIndicator={false}>
					<Body>
						<Card style={{ marginBottom: 25 }}>
							<CardItem cardBody>
								<Image
									style={styles.image}
									source={require('../../../assets/laVidaFit.png')}
								/>
							</CardItem>
							<CardItem cardBody>
								<Body style={{ alignContent: 'center' }}>
									<Button rounded full success>
										<Text>Visitar Site</Text>
									</Button>
								</Body>
							</CardItem>
						</Card>

						<Card style={{ marginBottom: 25 }}>
							<CardItem cardBody>
								<Image
									style={styles.image}
									source={require('../../../assets/laVidaFit.png')}
								/>
							</CardItem>
							<CardItem cardBody>
								<Body style={{ alignContent: 'center' }}>
									<Button rounded full success>
										<Text>Visitar Site</Text>
									</Button>
								</Body>
							</CardItem>
						</Card>

						<Card>
							<CardItem cardBody>
								<Image
									style={styles.image}
									source={require('../../../assets/laVidaFit.png')}
								/>
							</CardItem>
							<CardItem cardBody>
								<Body style={{ alignContent: 'center' }}>
									<Button rounded full success>
										<Text>Visitar Site</Text>
									</Button>
								</Body>
							</CardItem>
						</Card>
					</Body>
				</Content>
			</Container>
		</StyleProvider>
	);
}
