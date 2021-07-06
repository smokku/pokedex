import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterAvgFieldsModelBase } from "./PokemonV2EncounterAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterAvgFieldsModel */
export interface PokemonV2EncounterAvgFieldsModelType extends Instance<typeof PokemonV2EncounterAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterAvgFieldsModel */
export { selectFromPokemonV2EncounterAvgFields, pokemonV2EncounterAvgFieldsModelPrimitives, PokemonV2EncounterAvgFieldsModelSelector } from "./PokemonV2EncounterAvgFieldsModel.base"

/**
 * PokemonV2EncounterAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterAvgFieldsModel = PokemonV2EncounterAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
