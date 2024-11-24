import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = theme => localStorage.setItem('theme', theme);

    const getPreferredTheme = () => {
        const forcedTheme = document.documentElement.getAttribute('data-bss-forced-theme');
        if (forcedTheme) return forcedTheme;

        const storedTheme = getStoredTheme();
        if (storedTheme) {
            return storedTheme;
        }

        const pageTheme = document.documentElement.getAttribute('data-bs-theme');

        if (pageTheme) {
            return pageTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getPreferredTheme);

    useEffect(() => {
        const applyTheme = (theme) => {
            if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-bs-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-bs-theme', theme);
            }
        };

        applyTheme(theme);

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            const storedTheme = getStoredTheme();
            if (!storedTheme || storedTheme == "auto") {
                setTheme(getPreferredTheme());
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        }
    }, [theme]);

    const handleThemeChange = (selectedTheme) => {
        setStoredTheme(selectedTheme);
        setTheme(selectedTheme);

        // Explicitly send theme change to the iframe
        const iframe = document.querySelector("iframe");
        if (iframe) {
            let computedTheme = selectedTheme;
            if (selectedTheme === "auto") {
                computedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }
            iframe.contentWindow.postMessage({ type: "themeChange", theme: computedTheme }, "*");
        }
    };

    return (
        <div className="theme-switcher dropdown">
            <a className="dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-sun-fill mb-1">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                </svg>
            </a>
            <div className="dropdown-menu">
                <a
                    className={`dropdown-item d-flex align-items-center ${theme === "light" ? "active" : ""}`}
                    href="#"
                    onClick={() => handleThemeChange("light")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-sun-fill opacity-50 me-2">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                    </svg>
                    Light
                </a>
                <a
                    className={`dropdown-item d-flex align-items-center ${theme === "dark" ? "active" : ""}`}
                    href="#"
                    onClick={() => handleThemeChange("dark")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-moon-stars-fill opacity-50 me-2">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"></path>
                    </svg>
                    Dark
                </a>
                <a
                    className={`dropdown-item d-flex align-items-center ${theme === "auto" ? "active" : ""}`}
                    href="#"
                    onClick={() => handleThemeChange("auto")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-half opacity-50 me-2">
                        <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></path>
                    </svg>
                    Auto
                </a>
            </div>
        </div>
    );
};

export default ThemeSwitcher;