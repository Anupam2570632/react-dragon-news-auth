import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [news, setNews] = useState([]);
    const [allNews, setAllNews] = useState([]);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider()
    const GoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubProvider = new GithubAuthProvider()
    const GithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe()
        }

    }, [])

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setAllNews(data)
            })
    }, [])


    const filterNews = (category) => {
        if (category == 0) {
            setNews(allNews)
        }
        else {
            const filteredNews = allNews.filter((aNews) => aNews.category_id == category)
            setNews(filteredNews)
        }
    }

    const AuthInfo = { user, createUser, logIn, logOut, GoogleSignIn, GithubSignIn, news, filterNews }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;