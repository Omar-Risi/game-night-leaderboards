import { Head, Link } from '@inertiajs/react';
import { Trophy, Star, Crown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Welcome({ players }) {
    const playersData = players.data || [];
    const { current_page, last_page, from } = players;

    // Transform players data into leaderboard format
    const leaderboardData = playersData.map((player, index) => ({
        position: (from || 0) + index,
        username: player.user_name || 'Unknown Player',
        score: player.total_score || 0
    }));

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
                        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg" style={{
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
                            {leaderboardData.length > 0 ? (
                                leaderboardData.map((player) => (
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
                                ))
                            ) : (
                                <div className="p-8 text-center text-gray-500">
                                    <p className="text-xl">No players yet! Be the first to join the leaderboard! 🎮</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    {last_page > 1 && (
                        <div className="mt-8 flex justify-center items-center gap-4">
                            <Link
                                href={`/?page=${current_page - 1}`}
                                preserveScroll
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-lg border-4 transition-all ${
                                    current_page === 1
                                        ? 'bg-gray-400 border-gray-500 text-gray-600 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-yellow-400 to-orange-500 border-purple-600 text-purple-900 hover:from-yellow-300 hover:to-orange-400 active:scale-95 shadow-lg'
                                }`}
                                style={current_page !== 1 ? { boxShadow: '6px 6px 0px rgba(0,0,0,0.3)' } : {}}
                                disabled={current_page === 1}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                PREV
                            </Link>

                            <div className="bg-white px-8 py-3 rounded-lg border-4 border-purple-600 shadow-lg" style={{
                                boxShadow: '6px 6px 0px rgba(0,0,0,0.3)'
                            }}>
                                <span className="text-purple-900 font-bold text-xl">
                                    Page {current_page} of {last_page}
                                </span>
                            </div>

                            <Link
                                href={`/?page=${current_page + 1}`}
                                preserveScroll
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-lg border-4 transition-all ${
                                    current_page === last_page
                                        ? 'bg-gray-400 border-gray-500 text-gray-600 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-yellow-400 to-orange-500 border-purple-600 text-purple-900 hover:from-yellow-300 hover:to-orange-400 active:scale-95 shadow-lg'
                                }`}
                                style={current_page !== last_page ? { boxShadow: '6px 6px 0px rgba(0,0,0,0.3)' } : {}}
                                disabled={current_page === last_page}
                            >
                                NEXT
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    )}

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
