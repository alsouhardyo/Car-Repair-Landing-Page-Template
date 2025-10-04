import { BarLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="w-screen h-screen fixed inset-0 flex items-center justify-center bg-white z-50 flex-col gap-4">
            <BarLoader color="#405ff2" />
            <p className="text-lg font-slab text-accent animate-pulse">Loading...</p>
        </div>
    );
};

export default Loading;
