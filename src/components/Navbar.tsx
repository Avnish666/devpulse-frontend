import { useEffect, useState } from "react";
import {  FaUserCircle } from "react-icons/fa";
import { syncGithub } from "../api/dashboardApi";
import toast from "react-hot-toast";
import { FiRefreshCw, FiLogOut } from "react-icons/fi";
interface NavbarProps {
    onSync: () => Promise<void>;
  }
interface UserProfile {
  username: string;
  avatarUrl: string;
}

export default function Navbar({
    onSync,
  }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!token) return;

    fetch("${import.meta.env.VITE_API_URL}/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => console.error(err));
  }, [token]);

  function logout() {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  }

  async function handleSyncGithub() {

    try {
  
      setSyncing(true);
  
      await syncGithub();
  
      await onSync();
  
      setOpen(false);
  
      toast.success("GitHub synced successfully!");
  
    } catch (err) {
  
      console.error(err);
  
      toast.error("Sync failed.");
  
    } finally {
  
      setSyncing(false);
  
    }
  
  }

  return (
    <nav className="mb-10 flex items-center justify-between">
      <h1 className="text-5xl font-bold text-white">Dashboard</h1>

      <div className="flex items-center gap-6">
       

        {/* Profile */}
        <div className="relative">
          <button onClick={() => setOpen(!open)}>
            {user ? (
              <img
                src={user.avatarUrl}
                alt={user.username}
                className="h-11 w-11 rounded-full border-2 border-purple-500 object-cover"
              />
            ) : (
              <FaUserCircle
                size={42}
                className="text-gray-300 hover:text-white"
              />
            )}
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-56 rounded-xl border border-gray-700 bg-[#1E293B] shadow-xl">
              <div className="border-b border-gray-700 px-4 py-3">
                <p className="font-semibold text-white">
                  {user?.username || "Loading..."}
                </p>
              </div>

              <button
    onClick={handleSyncGithub}
    disabled={syncing}
    className="
        flex
        w-full
        items-center
        gap-3
        px-4
        py-3
        text-[#A855F7]
        hover:bg-[#334155]
        disabled:opacity-60
    "
>
    <FiRefreshCw
        className={syncing ? "animate-spin" : ""}
    />

    {syncing ? "Syncing..." : "Sync GitHub"}
</button>

              <button
                onClick={logout}
                className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-[#334155]"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}