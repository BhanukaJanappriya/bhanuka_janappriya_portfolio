import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Swords, TrendingUp, Zap, Target } from 'lucide-react';

// Pre-baked stats for fallback and initial load
const FALLBACK_STATS = {
  player: {
    name: 'Bhanuka Nambuwasam',
    username: 'bhanukajanappriya',
    avatar: 'https://images.chesscomfiles.com/uploads/v1/user/185624259.6f1f2331.200x200o.fb970c3b7f32.jpg',
    league: 'Legend',
    url: 'https://www.chess.com/member/bhanukajanappriya',
  },
  stats: {
    rapid: { rating: 1919, peak: 2000, wins: 2679, losses: 2554, draws: 166 },
    blitz: { rating: 1700, peak: 1732, wins: 1342, losses: 1215, draws: 74 },
    bullet: { rating: 1473, peak: 1528, wins: 1846, losses: 1781, draws: 74 },
    daily: { rating: 1287, peak: 1287, wins: 72, losses: 30, draws: 1 },
    puzzles: { rating: 2146, peak: 2146 },
    puzzleRush: { best: 45 }
  }
};

const ChessStats = () => {
  const [data, setData] = useState(FALLBACK_STATS);
  const [activeTab, setActiveTab] = useState('rapid');

  useEffect(() => {
    const fetchChessData = async () => {
      try {
        // Fetch profile
        const profileRes = await fetch('https://api.chess.com/pub/player/bhanukajanappriya');
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profile = await profileRes.json();

        // Fetch stats
        const statsRes = await fetch('https://api.chess.com/pub/player/bhanukajanappriya/stats');
        if (!statsRes.ok) throw new Error('Failed to fetch stats');
        const stats = await statsRes.json();

        // Parse profile data
        const playerInfo = {
          name: profile.name || 'Bhanuka Nambuwasam',
          username: profile.username || 'bhanukajanappriya',
          avatar: profile.avatar || FALLBACK_STATS.player.avatar,
          league: profile.league || 'Legend',
          url: profile.url || 'https://www.chess.com/member/bhanukajanappriya',
        };

        // Parse stats data
        const statsInfo = {
          rapid: {
            rating: stats.chess_rapid?.last?.rating || FALLBACK_STATS.stats.rapid.rating,
            peak: stats.chess_rapid?.best?.rating || FALLBACK_STATS.stats.rapid.peak,
            wins: stats.chess_rapid?.record?.win || FALLBACK_STATS.stats.rapid.wins,
            losses: stats.chess_rapid?.record?.loss || FALLBACK_STATS.stats.rapid.losses,
            draws: stats.chess_rapid?.record?.draw || FALLBACK_STATS.stats.rapid.draws,
          },
          blitz: {
            rating: stats.chess_blitz?.last?.rating || FALLBACK_STATS.stats.blitz.rating,
            peak: stats.chess_blitz?.best?.rating || FALLBACK_STATS.stats.blitz.peak,
            wins: stats.chess_blitz?.record?.win || FALLBACK_STATS.stats.blitz.wins,
            losses: stats.chess_blitz?.record?.loss || FALLBACK_STATS.stats.blitz.losses,
            draws: stats.chess_blitz?.record?.draw || FALLBACK_STATS.stats.blitz.draws,
          },
          bullet: {
            rating: stats.chess_bullet?.last?.rating || FALLBACK_STATS.stats.bullet.rating,
            peak: stats.chess_bullet?.best?.rating || FALLBACK_STATS.stats.bullet.peak,
            wins: stats.chess_bullet?.record?.win || FALLBACK_STATS.stats.bullet.wins,
            losses: stats.chess_bullet?.record?.loss || FALLBACK_STATS.stats.bullet.losses,
            draws: stats.chess_bullet?.record?.draw || FALLBACK_STATS.stats.bullet.draws,
          },
          daily: {
            rating: stats.chess_daily?.last?.rating || FALLBACK_STATS.stats.daily.rating,
            peak: stats.chess_daily?.best?.rating || FALLBACK_STATS.stats.daily.peak,
            wins: stats.chess_daily?.record?.win || FALLBACK_STATS.stats.daily.wins,
            losses: stats.chess_daily?.record?.loss || FALLBACK_STATS.stats.daily.losses,
            draws: stats.chess_daily?.record?.draw || FALLBACK_STATS.stats.daily.draws,
          },
          puzzles: {
            rating: stats.tactics?.highest?.rating || FALLBACK_STATS.stats.puzzles.rating,
            peak: stats.tactics?.highest?.rating || FALLBACK_STATS.stats.puzzles.peak,
          },
          puzzleRush: {
            best: stats.puzzle_rush?.best?.score || FALLBACK_STATS.stats.puzzleRush.best,
          }
        };

        setData({ player: playerInfo, stats: statsInfo });
      } catch (err) {
        console.warn('Error fetching Live Chess.com stats, using cached data:', err);
      }
    };

    fetchChessData();
  }, []);

  const calculateWinRate = (record) => {
    const total = record.wins + record.losses + record.draws;
    if (total === 0) return 0;
    return ((record.wins / total) * 100).toFixed(1);
  };

  const activeStats = data.stats[activeTab];
  const totalGames = activeStats ? (activeStats.wins + activeStats.losses + activeStats.draws) : 0;
  const winRate = activeStats ? calculateWinRate(activeStats) : 0;

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/10 bg-gradient-to-br from-white via-slate-50 to-slate-100/30 dark:from-[#0b0c10] dark:via-[#12131c] dark:to-[#08090f] shadow-lg">
      {/* Top Header */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200/60 dark:border-white/5 bg-[#81b64c]/5 dark:bg-[#81b64c]/2">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src={data.player.avatar} 
              alt={data.player.name} 
              className="w-16 h-16 rounded-2xl object-cover border-2 border-[#81b64c] shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#81b64c] text-[9px] font-black text-white shadow-sm">
              LK
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="text-lg font-black text-slate-800 dark:text-white leading-tight">
                {data.player.name}
              </h4>
              <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded bg-[#81b64c]/25 text-[#73a243] dark:text-[#81b64c] border border-[#81b64c]/30">
                {data.player.league} League
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-accent-gray mt-0.5">
              @ {data.player.username}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-[#81b64c] font-black text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#81b64c] animate-pulse mr-1" />
            <span className="uppercase tracking-widest text-[10px]">Live stats</span>
          </div>
          <a
            href={data.player.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#81b64c] hover:bg-[#73a243] text-white text-xs font-black uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all hover:scale-105 shadow-md shadow-[#81b64c]/25"
          >
            <span>Chess.com Profile</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 p-2 overflow-x-auto gap-1">
        {['rapid', 'blitz', 'bullet', 'daily'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold capitalize tracking-wider transition-all whitespace-nowrap ${
              activeTab === tab 
                ? 'bg-[#81b64c] text-white shadow-md' 
                : 'text-slate-500 dark:text-accent-gray hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Display Area */}
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main rating block */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-100/50 dark:bg-white/2 rounded-2xl border border-slate-200/50 dark:border-white/5 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#81b64c]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#81b64c]/10 transition-colors" />
            
            <span className="text-xs font-black uppercase tracking-widest text-[#81b64c] mb-2 flex items-center">
              <Trophy size={14} className="mr-1.5" />
              {activeTab} Rating
            </span>
            <div className="text-6xl font-black text-slate-800 dark:text-white tracking-tighter my-2 flex items-baseline justify-center">
              <span>{activeStats.rating}</span>
            </div>
            
            <div className="flex items-center space-x-2 mt-2 text-xs font-bold text-slate-500 dark:text-accent-gray bg-slate-200/55 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200/30 dark:border-white/5">
              <TrendingUp size={13} className="text-[#81b64c]" />
              <span>Best: {activeStats.peak}</span>
            </div>
          </div>

          {/* Record & Progress */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-accent-gray">
                  Win Ratio
                </span>
                <span className="text-sm font-black text-slate-800 dark:text-white">
                  {winRate}% Win Rate
                </span>
              </div>
              
              {/* Stacked Progress Bar */}
              <div className="h-3 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden flex">
                <div 
                  className="bg-[#81b64c] h-full" 
                  style={{ width: `${(activeStats.wins / totalGames) * 100}%` }}
                  title={`Wins: ${activeStats.wins}`}
                />
                <div 
                  className="bg-slate-400 dark:bg-white/20 h-full" 
                  style={{ width: `${(activeStats.draws / totalGames) * 100}%` }}
                  title={`Draws: ${activeStats.draws}`}
                />
                <div 
                  className="bg-red-500/80 h-full" 
                  style={{ width: `${(activeStats.losses / totalGames) * 100}%` }}
                  title={`Losses: ${activeStats.losses}`}
                />
              </div>
            </div>

            {/* Counts Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 bg-slate-100/50 dark:bg-white/2 rounded-xl border border-slate-200/40 dark:border-white/5 text-center">
                <div className="text-[10px] font-black text-slate-400 dark:text-accent-gray uppercase tracking-wider mb-1">Wins</div>
                <div className="text-lg font-black text-[#81b64c]">{activeStats.wins}</div>
              </div>
              <div className="p-3.5 bg-slate-100/50 dark:bg-white/2 rounded-xl border border-slate-200/40 dark:border-white/5 text-center">
                <div className="text-[10px] font-black text-slate-400 dark:text-accent-gray uppercase tracking-wider mb-1">Draws</div>
                <div className="text-lg font-black text-slate-600 dark:text-slate-300">{activeStats.draws}</div>
              </div>
              <div className="p-3.5 bg-slate-100/50 dark:bg-white/2 rounded-xl border border-slate-200/40 dark:border-white/5 text-center">
                <div className="text-[10px] font-black text-slate-400 dark:text-accent-gray uppercase tracking-wider mb-1">Losses</div>
                <div className="text-lg font-black text-red-500/80">{activeStats.losses}</div>
              </div>
            </div>

            <div className="text-[11px] font-bold text-slate-500 dark:text-accent-gray flex items-center space-x-2">
              <Swords size={12} className="text-slate-400" />
              <span>Analyzed across {totalGames.toLocaleString()} competitive match-ups</span>
            </div>
          </div>
        </div>

        {/* Additional Stats: Puzzles & Puzzle Rush */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-[#81b64c]/5 dark:bg-[#81b64c]/2 rounded-xl border border-[#81b64c]/10 dark:border-[#81b64c]/5">
            <div className="p-2.5 bg-[#81b64c]/10 rounded-lg text-[#81b64c] mr-4">
              <Target size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-accent-gray">Tactics & Puzzles Rating</p>
              <div className="flex items-baseline space-x-2 mt-0.5">
                <span className="text-lg font-black text-slate-800 dark:text-white">{data.stats.puzzles.rating}</span>
                <span className="text-[10px] text-[#81b64c] font-bold ml-1.5">Peak</span>
              </div>
            </div>
          </div>

          <div className="flex items-center p-4 bg-[#81b64c]/5 dark:bg-[#81b64c]/2 rounded-xl border border-[#81b64c]/10 dark:border-[#81b64c]/5">
            <div className="p-2.5 bg-[#81b64c]/10 rounded-lg text-[#81b64c] mr-4">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-accent-gray">Puzzle Rush Best Score</p>
              <div className="flex items-baseline space-x-2 mt-0.5">
                <span className="text-lg font-black text-slate-800 dark:text-white">{data.stats.puzzleRush.best}</span>
                <span className="text-[10px] text-[#81b64c] font-bold ml-1.5">Correct</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessStats;
