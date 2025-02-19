import React from "react";

const Loading = () => {
    return (
        <div className="w-screen h-screen fixed inset-0 flex items-center justify-center bg-white z-50 flex-col gap-4">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg font-slab text-accent">Loading...</p>
        </div>
    );
};

export default Loading;
