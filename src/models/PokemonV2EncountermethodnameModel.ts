import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameModelBase } from "./PokemonV2EncountermethodnameModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameModel */
export interface PokemonV2EncountermethodnameModelType extends Instance<typeof PokemonV2EncountermethodnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameModel */
export { selectFromPokemonV2Encountermethodname, pokemonV2EncountermethodnameModelPrimitives, PokemonV2EncountermethodnameModelSelector } from "./PokemonV2EncountermethodnameModel.base"

/**
 * PokemonV2EncountermethodnameModel
 *
 * columns and relationships of "pokemon_v2_encountermethodname"
 */
export const PokemonV2EncountermethodnameModel = PokemonV2EncountermethodnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
