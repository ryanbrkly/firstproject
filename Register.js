import { auth } from './firebase';

const Register = () => {
  const handleRegister = async () => {
    const email = "user@example.com";
    const password = "password123";
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Store additional user details in Firestore, such as user role
      const user = auth.currentUser;
      firestore.collection('users').doc(user.uid).set({
        email: user.email,
        role: 'admin', // You can set role as 'admin' or 'user' here
      });
    } catch (error) {
      console.error('Error registering:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
