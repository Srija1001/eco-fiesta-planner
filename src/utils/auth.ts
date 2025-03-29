
import { useToast } from "@/hooks/use-toast";

// Mock user data for demonstration purposes
interface User {
  id: string;
  name: string;
  email: string;
}

// This would be replaced with actual authentication logic in a real application
const mockLogin = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, any non-empty email/password will succeed
      if (email && password) {
        resolve({
          id: '1',
          name: 'Demo User',
          email: email
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
};

const mockSignup = (name: string, email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, any non-empty name/email/password will succeed
      if (name && email && password) {
        resolve({
          id: '1',
          name: name,
          email: email
        });
      } else {
        reject(new Error('Invalid signup information'));
      }
    }, 1000);
  });
};

const mockLogout = (): Promise<void> => {
  return new Promise((resolve) => {
    // Clear any user data from local storage
    localStorage.removeItem('ecofiesta_user');
    setTimeout(resolve, 500);
  });
};

export const useAuth = () => {
  const { toast } = useToast();

  const login = async (email: string, password: string): Promise<User | null> => {
    try {
      const user = await mockLogin(email, password);
      // Store user data in local storage for persistence
      localStorage.setItem('ecofiesta_user', JSON.stringify(user));
      
      toast({
        title: 'Login successful',
        description: 'Welcome back to Eco Fiesta!',
      });
      
      return user;
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error instanceof Error ? error.message : 'An unknown error occurred',
        variant: 'destructive'
      });
      
      return null;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<User | null> => {
    try {
      const user = await mockSignup(name, email, password);
      // Store user data in local storage for persistence
      localStorage.setItem('ecofiesta_user', JSON.stringify(user));
      
      toast({
        title: 'Account created',
        description: 'Welcome to Eco Fiesta!',
      });
      
      return user;
    } catch (error) {
      toast({
        title: 'Signup failed',
        description: error instanceof Error ? error.message : 'An unknown error occurred',
        variant: 'destructive'
      });
      
      return null;
    }
  };

  const logout = async (): Promise<void> => {
    await mockLogout();
    
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

  const getCurrentUser = (): User | null => {
    const userData = localStorage.getItem('ecofiesta_user');
    return userData ? JSON.parse(userData) : null;
  };

  return {
    login,
    signup,
    logout,
    getCurrentUser
  };
};
