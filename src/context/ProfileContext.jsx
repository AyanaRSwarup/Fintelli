import { useContext, createContext, useState, useEffect } from "react";

export const ProfileContext = createContext(null);


export function ProfileProvider({ children }) {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        profilePicture: ""
    });

    useEffect(()=>{
        async function fetchProfile(){
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/getProfile`, {
                method: "GET",
                credentials: "include"
            });
            if(res.ok){
                const data = await res.json();
                setProfile({
                    name: data.name,
                    email: data.email,
                    profilePicture: data.profilePicture
                });
            } else {
                setProfile({
                    name: "",
                    email: "",
                    profilePicture: ""
                });
            }
        }

        fetchProfile();
    }, [])
    return(
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    )
}

export function useProfile(){
    return useContext(ProfileContext);
}
