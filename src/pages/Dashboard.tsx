import { useEffect, useState } from "react";
console.log("Dashboard Loaded");
import DashboardCard from "../components/DashboardCard";
import CommitChart from "../components/CommitChart";
import { getDashboardData,getCommitFrequency,getLanguages,getMostActiveRepositories,getContributionHeatmap } from "../api/dashboardApi";
import { stompClient } from "../websocket";
import LanguagePieChart from "../components/LanguagePieChart";
import RepositoryChart from "../components/RepositoryChart";
import ContributionHeatmap from "../components/ContributionHeatmap";

import Navbar from "../components/Navbar";


function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [commitData, setCommitData] =useState<any[]>([]);
  const [languageData, setLanguageData] = useState<any[]>([]);
  const [repositoryData, setRepositoryData] =useState<any[]>([]);
  const [activities, setActivities] =useState<any[]>([]);
  const [heatmapData, setHeatmapData] =useState<any[]>([]);

  const loadDashboard = async () => {

    try {
  
      const dashboard = await getDashboardData();
      setData(dashboard);
  
      const commitFrequency = await getCommitFrequency();
  
      const formattedCommits =
        Object.entries(commitFrequency).map(
          ([date, commits]) => ({
            date: String(date).substring(0, 10),
            commits,
          })
        );
  
      setCommitData(formattedCommits);
  
      const languages = await getLanguages();
  
      const formattedLanguages =
        Object.entries(languages).map(
          ([language, count]) => ({
            language,
            count,
          })
        );
  
      setLanguageData(formattedLanguages);
  
      const repositories =
        await getMostActiveRepositories();
  
      setRepositoryData(repositories);
  
      const heatmap =
        await getContributionHeatmap();
  
      setHeatmapData(heatmap);
  
    } catch (err) {
  
      console.error(err);
  
    }
  
  };

  useEffect(() => {

    loadDashboard();
  
    stompClient.connect({}, () => {
  
      console.log("WebSocket Connected");
  
      stompClient.subscribe(
        "/topic/activity",
        (message:any) => {
  
          const activity =
            JSON.parse(message.body);
  
          setActivities(prev => [
            activity,
            ...prev
          ].slice(0, 10));
  
        }
      );
  
      stompClient.send(
        "/app/hello",
        {},
        "Avnish Test"
      );
  
    });
  
  }, []);

  if (!data) {
    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );
  }

  return (
    <div
  className="
    min-h-screen
    bg-[#09090B]
    bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.12),transparent_40%)]
"
>

      

<div className="max-w-7xl mx-auto px-8 py-8">
    <Navbar onSync={loadDashboard} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <DashboardCard
            title="Repositories"
            value={data.totalRepositories}
          />

          <DashboardCard
            title="Commits"
            value={data.totalCommits}
          />

          <DashboardCard
            title="Top Language"
            value={data.topLanguage}
          />

          <DashboardCard
            title="Current Streak"
            value={data.currentStreak}
          />

          <DashboardCard
            title="Longest Streak"
            value={data.longestStreak}
          />

          <DashboardCard
            title="Most Active Repo"
            value={data.mostActiveRepository?.split("/")[1] || data.mostActiveRepository}
          />

        </div>
        <div className="mt-12">
         <CommitChart data={commitData} />
         </div>

         <div className="mt-12">
          <LanguagePieChart data={languageData} />
         </div>

          <div className="mt-12">
           <RepositoryChart data={repositoryData} />
          </div>
      

           <div className="mt-12">
           <ContributionHeatmap
               data={heatmapData}
                />
           </div>

           <div
className="
mt-12
rounded-3xl
bg-[#181C2B]
border
border-white/5
p-8
shadow-lg
transition-all
duration-300
hover:border-purple-500/20
"
>

<div className="mb-6">
    <h2 className="text-2xl font-semibold text-white">
        Live Activity
    </h2>

    <p className="text-gray-400 mt-1">
        Real-time GitHub events from your repositories.
    </p>
</div>

  {activities.length === 0 ? (
    <p className="text-slate-400">
      No activity yet
    </p>
  ) : (
    activities.map((activity, index) => (
      <div
        key={index}
        className="
py-4
border-b
border-white/5
last:border-none
"
      >
        <div className="
text-purple-400
uppercase
tracking-wider
text-sm
font-semibold
">
          {activity.type}
        </div>
    
        <div className="text-white mt-1 text-lg">
          {activity.message}
        </div>

       <div className="text-gray-500 text-sm mt-2">
      {new Date(activity.timestamp).toLocaleString()}
    </div>
      </div>
    ))
  )}

</div>
       
      </div>
    </div>
  );
}

export default Dashboard;