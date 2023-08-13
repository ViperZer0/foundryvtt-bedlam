import BedlamActorSheet from './bedlam-sheet.js';

Hooks.once('init', () => {
    console.log("Hi!");
    Actors.registerSheet("swade", BedlamActorSheet, { label: "Bedlam Character Sheet", types: ["character"], makeDefault: false });
});
