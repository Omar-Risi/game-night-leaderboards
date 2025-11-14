import { Head } from '@inertiajs/react';
import { Trophy, Star, Crown } from 'lucide-react';
import { useState } from 'react';

export default function Welcome() {
    // Sample leaderboard data
    const [leaderboardData] = useState([
        { position: 1, username: "PixelMaster99", score: 15420 },
        { position: 2, username: "RetroGamer", score: 14890 },
        { position: 3, username: "NeonDreamer", score: 13650 },
        { position: 4, username: "CyberWarrior", score: 12340 },
        { position: 5, username: "RadicalDude", score: 11200 },
        { position: 6, username: "VaporWave", score: 10850 },
        { position: 7, username: "GroovyPlayer", score: 9920 },
        { position: 8, username: "TotallyAwesome", score: 9450 },
        { position: 9, username: "BoomBoxHero", score: 8760 },
        { position: 10, username: "FunkyFresh", score: 8230 },
    ]);

    const getPositionBadge = (position) => {
        switch (position) {
            case 1:
                return <Crown className="w-6 h-6 text-yellow-400" />;
            case 2:
                return <Trophy className="w-5 h-5 text-gray-300" />;
            case 3:
                return <Trophy className="w-5 h-5 text-amber-600" />;
            default:
                return <Star className="w-4 h-4 text-purple-400" />;
        }
    };

    const getRowStyle = (position) => {
        if (position === 1) return "bg-gradient-to-r from-yellow-300 to-orange-400 text-purple-900 font-bold";
        if (position === 2) return "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 font-semibold";
        if (position === 3) return "bg-gradient-to-r from-amber-400 to-orange-300 text-amber-900 font-semibold";
        return "bg-gradient-to-r from-pink-200 to-purple-200 hover:from-pink-300 hover:to-purple-300";
    };

    return (
        <>
            <Head title="Leaderboards">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 py-12 px-4">
                <main className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-lg" style={{
                            textShadow: '4px 4px 0px rgba(255,0,255,0.5), 8px 8px 0px rgba(0,255,255,0.5)'
                        }}>
                            LEADERBOARDS
                        </h1>
                        <p className="text-xl text-yellow-300 font-semibold drop-shadow-md">
                            🎮 Top Players of All Time 🎮
                        </p>
                    </div>

                    {/* Leaderboard Container */}
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-purple-600" style={{
                        boxShadow: '12px 12px 0px rgba(0,0,0,0.3)'
                    }}>
                        {/* Table Header */}
                        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-4">
                            <div className="grid grid-cols-12 gap-4 text-white font-bold text-lg">
                                <div className="col-span-2 text-center">RANK</div>
                                <div className="col-span-6">PLAYER</div>
                                <div className="col-span-4 text-right">SCORE</div>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y-4 divide-purple-300">
                            {leaderboardData.map((player) => (
                                <div
                                    key={player.position}
                                    className={`grid grid-cols-12 gap-4 p-4 items-center transition-all ${getRowStyle(player.position)}`}
                                >
                                    {/* Position */}
                                    <div className="col-span-2 flex items-center justify-center gap-2">
                                        {getPositionBadge(player.position)}
                                        <span className="text-2xl font-bold">#{player.position}</span>
                                    </div>

                                    {/* Username */}
                                    <div className="col-span-6">
                                        <span className="text-xl font-semibold">{player.username}</span>
                                    </div>

                                    {/* Score */}
                                    <div className="col-span-4 text-right">
                                        <span className="text-2xl font-bold bg-white bg-opacity-50 px-4 py-1 rounded-full">
                                            {player.score.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Message */}
                    <div className="mt-8 text-center">
                        <p className="text-white text-lg font-semibold drop-shadow-lg">
                            ✨ Keep playing to reach the top! ✨
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
