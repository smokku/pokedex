import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameAvgFieldsModelBase } from "./PokemonV2EncounterconditionnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameAvgFieldsModel */
export interface PokemonV2EncounterconditionnameAvgFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameAvgFieldsModel */
export { selectFromPokemonV2EncounterconditionnameAvgFields, pokemonV2EncounterconditionnameAvgFieldsModelPrimitives, PokemonV2EncounterconditionnameAvgFieldsModelSelector } from "./PokemonV2EncounterconditionnameAvgFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionnameAvgFieldsModel = PokemonV2EncounterconditionnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
