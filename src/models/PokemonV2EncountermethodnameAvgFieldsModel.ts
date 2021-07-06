import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameAvgFieldsModelBase } from "./PokemonV2EncountermethodnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameAvgFieldsModel */
export interface PokemonV2EncountermethodnameAvgFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameAvgFieldsModel */
export { selectFromPokemonV2EncountermethodnameAvgFields, pokemonV2EncountermethodnameAvgFieldsModelPrimitives, PokemonV2EncountermethodnameAvgFieldsModelSelector } from "./PokemonV2EncountermethodnameAvgFieldsModel.base"

/**
 * PokemonV2EncountermethodnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncountermethodnameAvgFieldsModel = PokemonV2EncountermethodnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
