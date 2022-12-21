import React from 'react';
import vk from "../styles/vk.png";
import telegram from "../styles/telegram.png";
import discord from "../styles/discord.png";

const About = () => {
    return (
        <div className="background2">
            <p className="text1">
                Данное деяние носит в себе развлекательный и познавательный характер,
                так что не воспринимайте все близко к сердцу :)
            </p>
            <p className="text2">                Тесты отобраны на тему аниме и игр,
                проверены на адекватность и доступность, а так же отредактированы лично мной для большего интереса.
            </p>
            <div className="container1">
                <div className="box-1">
                    <a href = "https://t.me/caxarochek11" ><img src={telegram} alt={'telegram'}/><p>Telegram автора</p></a>
                </div>
                <div className="box-2">
                    <a href = "https://vk.com/vadfenrir"><img src={vk} alt={'vk'}/><p>VK автора</p></a>
                </div>
                <div className="box-3">
                    <a href = "https://discord.com/channels/@me"><img src={discord} alt={'discord'}/><p>Discord автора</p></a>
                </div>
            </div>
        </div>
    );
};

export default About;