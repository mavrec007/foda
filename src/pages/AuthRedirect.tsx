import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import LandingPage from './Landing';
import { useNavigate } from 'react-router-dom';

export const AuthRedirect = () => {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && session) {
      navigate('/dashboard', { replace: true });
    }
  }, [loading, session, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="glass-card p-8 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return <LandingPage />;
};
