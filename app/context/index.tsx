"use client";
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

interface LoadingContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
    }, [loading]);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const UseLoading = (): LoadingContextType => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};
