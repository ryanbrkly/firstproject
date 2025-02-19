const handleLogin = async () => {
  const email = "user@example.com";
  const password = "password123";
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
};
