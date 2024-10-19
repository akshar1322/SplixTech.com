// cookielist.js
export const cookies = [
    {
        title: "Session Cookie",
        name: "session_id",
        domain: "https://splixtech.vercel.app/cookie-hub",
        description: "Used to maintain the session of a user.",
        lifetime: "Session"
      },
      {
        title: "CSRF Token",
        name: "csrf_token",
        domain: "https://splixtech.vercel.app/cookie-hub",
        description: "Prevents Cross-Site Request Forgery attacks.",
        lifetime: "Session"
      },
        {
            title: "User Cookie",
            name: "user",
            domain: "https://splixtech.vercel.app/cookie-hub",
            description: "Used to identify a user who has logged in.",
            lifetime: "30 days"
        },
        {
            title: "Consent Cookie",
            name: "cookie_consent",
            domain: "https://splixtech.vercel.app/cookie-hub",
            description: "Used to store the user's cookie consent preferences.",
            lifetime: "365 days"
        },
        {
            title: "Google Analytics",
            name: "_ga",
            domain: "https://splixtech.vercel.app/cookie-hub",
            description: "Used to distinguish users for website analytics.",
            lifetime: "2 years"
          },
          {
            title: "Google Analytics",
            name: "_gid",
            domain: "https://splixtech.vercel.app/cookie-hub",
            description: "Used to distinguish users for website analytics.",
            lifetime: "24 hours"
          },
          {
            title: "Login Session",
            name: "login_session",
            domain: "https://splixtech.vercel.app/cookie-hub",
            description: "Stores information about the logged-in user.",
            lifetime: "Session"
          },
          {
            title: "Language Preference",
            name: "language",
            domain: "https://splixtech.vercel.app/cookie-hub",
            description: "Stores the user's preferred language.",
            lifetime: "1 year"
          }
  ];
