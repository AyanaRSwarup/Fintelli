import { useContext, createContext, useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

export const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  console.log("ProfileProvider rendering")
  const [profile, setProfile] = useState(null); 
  const [loading, setLoading] = useState(true);
  console.log("ProfileProvider mounted")

  useEffect(() => {
    console.log("useEffect fired")
    async function fetchProfile() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/getProfile`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (res.ok) {
          const data = await res.json();
          setProfile({
            name: data.name,
            email: data.email,
            profilePicture: data.picture,
          });
        } else {
          setProfile(null);
        }
      } catch (error) {
        setProfile(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, loading }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}

export default function ProtectedRoute({ children }) {
  const { profile, loading } = useProfile();

  if (loading) {
    return <Loading />;
  }

  if (!profile) {  
    return <Navigate to="/" replace />;
  }

  return children;
}