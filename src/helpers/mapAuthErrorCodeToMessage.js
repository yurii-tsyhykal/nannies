export const mapAuthErrorCodeToMessage = errorCode => {
  switch (errorCode) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials.';
    case 'auth/invalid-email':
      return 'The email address is badly formatted. Please enter a valid email.';
    case 'auth/user-disabled':
      return 'This user account has been disabled.';
    case 'auth/email-already-in-use':
      return 'An account with this email address already exists. Try logging in instead.';
    case 'auth/weak-password':
      return 'Password is too weak. It must be at least 6 characters long.';
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is not enabled. Please contact support.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection and try again.';
    case 'auth/too-many-requests':
      return 'Access temporarily disabled due to too many failed attempts. Please try again later.';
    case 'auth/password-does-not-meet-requirements':
      return 'Password does not meet the security requirements set for this service. Please choose a stronger or different password.';
    default:
      console.warn('Unknown Firebase Auth error code:', errorCode);
      return 'An unknown authentication error occurred. Please try again.';
  }
};
