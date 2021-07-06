import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameModelBase } from "./PokemonV2EncounterconditionnameModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameModel */
export interface PokemonV2EncounterconditionnameModelType extends Instance<typeof PokemonV2EncounterconditionnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameModel */
export { selectFromPokemonV2Encounterconditionname, pokemonV2EncounterconditionnameModelPrimitives, PokemonV2EncounterconditionnameModelSelector } from "./PokemonV2EncounterconditionnameModel.base"

/**
 * PokemonV2EncounterconditionnameModel
 *
 * columns and relationships of "pokemon_v2_encounterconditionname"
 */
export const PokemonV2EncounterconditionnameModel = PokemonV2EncounterconditionnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
