import React, { useState } from 'react';


const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <div class="black">
              <button class='dark-button' 


className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
onClick={toggleDarkMode}


>

<span className="slider">mode escuro</span>
</button>

</div>
);
       
      
};

export default DarkModeToggle;