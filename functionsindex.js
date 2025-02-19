const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.scheduledBackup = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
  const adminData = await admin.firestore().collection('adminData').get();
  let backupData = [];
  
  adminData.forEach(doc => {
    backupData.push(doc.data());
  });

  // Save to backup collection
  await admin.firestore().collection('backups').add({
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    data: backupData,
  });

  console.log('Backup created successfully at', new Date());
});
