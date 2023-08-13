import CharacterSheet from '../../../systems/swade/swade.js';

export class BedlamActorSheet extends CharacterSheet {
    static get defaultOptions() {
        console.log("Bedlam Actor Sheet!!!");
        return mergeObject(super.defaltOptions, {
            template: "modules/bedlam-content/templates/actor/actor-sheet.hbs"
        });
    }
}

