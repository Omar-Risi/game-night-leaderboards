import { Head, useForm } from '@inertiajs/react';
import { UserPlus, Gamepad2 } from 'lucide-react';

export default function Signup() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        gutech_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/api/signup', {
            onSuccess: () => {
                alert('We got your information happy gaming!');

                setTimeout(() => window.location = "/", 2000)
            },
        });
    };

    return (
        <>
            <Head title="Player Signup">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 py-12 px-4 flex items-center justify-center">
                <main className="max-w-md w-full">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Gamepad2 className="w-20 h-20 text-yellow-300 drop-shadow-lg" />
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg" style={{
                            textShadow: '4px 4px 0px rgba(255,0,255,0.5), 8px 8px 0px rgba(0,255,255,0.5)'
                        }}>
                            JOIN THE GAME!
                        </h1>
                        <p className="text-xl text-yellow-300 font-semibold drop-shadow-md">
                            🎮 Sign up to compete 🎮
                        </p>
                    </div>

                    {/* Signup Form Container */}
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-purple-600" style={{
                        boxShadow: '12px 12px 0px rgba(0,0,0,0.3)'
                    }}>
                        {/* Form Header */}
                        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-4">
                            <h2 className="text-white font-bold text-2xl text-center flex items-center justify-center gap-2">
                                <UserPlus className="w-6 h-6" />
                                PLAYER REGISTRATION
                            </h2>
                        </div>

                        {/* Form Body */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-purple-900 font-bold text-lg mb-2">
                                    PLAYER NAME
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-4 py-3 text-lg border-4 border-purple-400 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-300 transition-all"
                                    placeholder="Enter your name"
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-2 text-red-600 font-semibold">
                                        ⚠️ {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* GUTech ID Field */}
                            <div>
                                <label htmlFor="gutech_id" className="block text-purple-900 font-bold text-lg mb-2">
                                    GUTECH ID
                                </label>
                                <input
                                    type="text"
                                    id="gutech_id"
                                    value={data.gutech_id}
                                    onChange={(e) => setData('gutech_id', e.target.value)}
                                    className="w-full px-4 py-3 text-lg border-4 border-purple-400 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-300 transition-all"
                                    placeholder="Enter your GUTech ID"
                                    required
                                />
                                {errors.gutech_id && (
                                    <p className="mt-2 text-red-600 font-semibold">
                                        ⚠️ {errors.gutech_id}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold text-xl py-4 rounded-lg border-4 border-purple-600 hover:from-yellow-300 hover:to-orange-400 active:scale-95 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    boxShadow: '6px 6px 0px rgba(0,0,0,0.3)'
                                }}
                            >
                                {processing ? 'JOINING...' : 'JOIN NOW! 🚀'}
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-white text-sm font-semibold drop-shadow-lg">
                            Ready to dominate the leaderboard? 🏆
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
