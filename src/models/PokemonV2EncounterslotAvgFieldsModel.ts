import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotAvgFieldsModelBase } from "./PokemonV2EncounterslotAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotAvgFieldsModel */
export interface PokemonV2EncounterslotAvgFieldsModelType extends Instance<typeof PokemonV2EncounterslotAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotAvgFieldsModel */
export { selectFromPokemonV2EncounterslotAvgFields, pokemonV2EncounterslotAvgFieldsModelPrimitives, PokemonV2EncounterslotAvgFieldsModelSelector } from "./PokemonV2EncounterslotAvgFieldsModel.base"

/**
 * PokemonV2EncounterslotAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterslotAvgFieldsModel = PokemonV2EncounterslotAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
