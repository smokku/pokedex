import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotModelBase } from "./PokemonV2EncounterslotModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotModel */
export interface PokemonV2EncounterslotModelType extends Instance<typeof PokemonV2EncounterslotModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotModel */
export { selectFromPokemonV2Encounterslot, pokemonV2EncounterslotModelPrimitives, PokemonV2EncounterslotModelSelector } from "./PokemonV2EncounterslotModel.base"

/**
 * PokemonV2EncounterslotModel
 *
 * columns and relationships of "pokemon_v2_encounterslot"
 */
export const PokemonV2EncounterslotModel = PokemonV2EncounterslotModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
