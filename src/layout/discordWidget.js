import React from "react";


function DiscordWidget(props) {
    const id = "https://discord.com/widget?id=" + props.id + "&theme=dark"
    return (
        <>
        
        <iframe
            title="discordWidget"
            src={id}
            width="100%"
            height="300"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
        </iframe>
        </>
    );
}

export default DiscordWidget;