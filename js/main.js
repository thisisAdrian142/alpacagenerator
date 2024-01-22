'use strict';

const imageContainer = document.getElementById("image-container");
const btnsAcessorizeContainer = document.getElementById("btns-acessorize");
const btnStyleContainer = document.getElementById("btns-style");
const btnRandomOnClick = document.getElementById("btn_random");
const btnDownloadOnClick = document.getElementById("btn_download");
const positions = [4, 0, 0, 0, 0, 0, 3, 0];

const AlpacaLists = [
    {id: 7, category: "backgrounds", parts: ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70", "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"]},
    {id: 4, category: "neck", parts: ["default", "bend-backward", "bend-forward", "thick"]},
    {id: 1, category: "ears", parts: ["default", "tilt-backward", "tilt-forward"]},
    {id: 0, category: "hair", parts: ["default", "bang", "curls", "elegant", "fancy", "short"]},
    {id: 2, category: "eyes", parts: ["default", "angry", "naughty", "panda", "smart", "star"]},
    {id: 5, category: "leg", parts: ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"]},
    {id: 6, category: "accessories", parts: ["earings", "flower", "glasses", "headphone"]},
    {id: 3, category: "mouth",  parts: ["default", "astonished", "eating", "laugh", "tongue"]},
];