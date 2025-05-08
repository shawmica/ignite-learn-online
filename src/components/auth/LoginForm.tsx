
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real application, this would send data to the backend API
    // POST /api/auth/login/
    try {
      // Simulating API call
      setTimeout(() => {
        // For demo purposes, determine role based on email
        // In a real app, role would come from the backend
        const role = email.includes('instructor') ? 'instructor' : 'student';
        
        // Store JWT token in localStorage (in a real app, this would come from the backend)
        localStorage.setItem('token', 'sample-jwt-token');
        localStorage.setItem('user', JSON.stringify({
          email: email,
          role: role,
          firstName: 'Demo',
          lastName: 'User'
        }));
        
        toast({
          title: "Login Successful",
          description: "Welcome back to Ignite Learn!",
        });
        setIsLoading(false);
        
        // Redirect based on role
        navigate(role === 'instructor' ? '/instructor-dashboard' : '/dashboard');
      }, 1500);
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-800">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary-600 hover:text-primary-800 font-medium">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
