import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterModelBase } from "./PokemonV2EncounterModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterModel */
export interface PokemonV2EncounterModelType extends Instance<typeof PokemonV2EncounterModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterModel */
export { selectFromPokemonV2Encounter, pokemonV2EncounterModelPrimitives, PokemonV2EncounterModelSelector } from "./PokemonV2EncounterModel.base"

/**
 * PokemonV2EncounterModel
 *
 * columns and relationships of "pokemon_v2_encounter"
 */
export const PokemonV2EncounterModel = PokemonV2EncounterModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
