import { FaGithub } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

export default function Login() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#09090B]
        bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.12),transparent_40%)]
        text-white
      "
    >
      {/* Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/20
          blur-[180px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-52
          -left-52
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/10
          blur-[180px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          justify-between
          gap-20
          px-10
        "
      >
        {/* ================= Left Side ================= */}

        <div className="max-w-2xl flex-1">
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-500/20
              bg-purple-500/10
              px-4
              py-2
              text-sm
              uppercase
              tracking-wide
              text-purple-300
            "
          >
            <FiActivity />
            GitHub Analytics Dashboard
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-7xl font-extrabold tracking-tight">
            DevPulse
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">
            Monitor repositories, commits, contribution streaks,
            pull requests and language insights from your GitHub
            account through a beautiful real-time analytics
            dashboard.
          </p>

          {/* Feature Pills */}

          <div className="mt-10 flex flex-wrap gap-4">
            <div
              className="
                rounded-full
                border
                border-white/10
                bg-[#181C2B]
                px-4
                py-2
                text-sm
                text-slate-300
              "
            >
              ⚡ Real-Time Dashboard
            </div>

            <div
              className="
                rounded-full
                border
                border-white/10
                bg-[#181C2B]
                px-4
                py-2
                text-sm
                text-slate-300
              "
            >
              🔒 Secure GitHub OAuth
            </div>

            <div
              className="
                rounded-full
                border
                border-white/10
                bg-[#181C2B]
                px-4
                py-2
                text-sm
                text-slate-300
              "
            >
              📈 Developer Insights
            </div>
          </div>

          {/* Login Button */}

          <button
            onClick={() => {
              window.location.href =
              `${import.meta.env.VITE_API_URL}/oauth2/authorization/github`;
            }}
            className="
              mt-12
              flex
              items-center
              gap-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-500
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]
            "
          >
            <FaGithub className="text-2xl" />
            Continue with GitHub
          </button>

          {/* Footer */}

          <p className="mt-8 text-sm text-slate-500">
            Sign in securely using GitHub OAuth.
            <br />
            We never ask for your password.
          </p>
        </div>

        {/* ================= Right Side ================= */}

        <div className="hidden flex-1 justify-end lg:flex">
          <div
            className="
              relative
              w-[620px]
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#181C2B]
              shadow-2xl
              rotate-3
              transition-all
              duration-500
              hover:rotate-0
              hover:scale-105
              hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]
            "
          >
            {/* Browser Header */}

            <div
              className="
                flex
                items-center
                gap-2
                border-b
                border-white/10
                bg-[#111827]
                px-5
                py-4
              "
            >
              <div className="h-3 w-3 rounded-full bg-red-400" />

              <div className="h-3 w-3 rounded-full bg-yellow-400" />

              <div className="h-3 w-3 rounded-full bg-green-400" />

              <div
                className="
                  ml-5
                  rounded-full
                  bg-[#1F2937]
                  px-4
                  py-1
                  text-xs
                  text-slate-400
                "
              >
                devpulse.app/dashboard
              </div>
            </div>

            {/* Dashboard Preview */}

            <img
              src="/dashboard_preview.jpg"
              alt="Dashboard Preview"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}