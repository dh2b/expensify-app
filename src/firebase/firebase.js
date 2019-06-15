import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// const expenses = [
// 	{
// 		description: 'Rent',
// 		note: '',
// 		amount: 1050.5,
// 		createdAt: 15000
// 	},
// 	{
// 		description: 'Creditcard',
// 		note: 'Visa',
// 		amount: 500.3,
// 		createdAt: 1000
// 	},
// 	{
// 		description: 'Car',
// 		note: 'Toyota',
// 		amount: 245.0,
// 		createdAt: 455000
// 	}
// ];

// database.ref('expenses').push(expenses[2]);

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// database
// 	.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});

// database.ref('notes/-LhD9_JwCtMiTbx37N95').remove();

// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native, Angular, Python'
// });

// database.ref('notes').set(notes);

// database.ref('notes/12')

// database.ref().on(
// 	'value',
// 	(snapshot) => {
// 		const person = snapshot.val();
// 		console.log(
// 			`${person.name} is a ${person.job.title} at ${person.job.company}.`
// 		);
// 	},
// 	(e) => {
// 		console.log('Error fetching data', e);
// 	}
// );

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });

// setTimeout(() => {
// 	database.ref('age').set(25);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// database
// 	.ref('location/city')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data: ', e);
// 	})

// database
// 	.ref()
// 	.set({
// 		name: 'Darcio Bertocco',
// 		age: 34,
// 		stressLevel: 6,
// 		job: {
// 			title: 'Software Developer',
// 			company: 'Google'
// 		},
// 		location: {
// 			city: 'Sao Leopoldo',
// 			country: 'Brazil'
// 		}
// 	})
// 	.then(() => {
// 		console.log('Data is saved!');
// 	})
// 	.catch((e) => {
// 		console.log('This failed.', e);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle',
// 	'location/country': 'USA'
// });

// database
// 	.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('Data was removed!');
// 	})
// 	.catch((e) => {
// 		console.log('Did not remove data: ', e);
// 	});
