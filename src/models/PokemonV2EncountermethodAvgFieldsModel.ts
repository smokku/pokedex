import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodAvgFieldsModelBase } from "./PokemonV2EncountermethodAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodAvgFieldsModel */
export interface PokemonV2EncountermethodAvgFieldsModelType extends Instance<typeof PokemonV2EncountermethodAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodAvgFieldsModel */
export { selectFromPokemonV2EncountermethodAvgFields, pokemonV2EncountermethodAvgFieldsModelPrimitives, PokemonV2EncountermethodAvgFieldsModelSelector } from "./PokemonV2EncountermethodAvgFieldsModel.base"

/**
 * PokemonV2EncountermethodAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncountermethodAvgFieldsModel = PokemonV2EncountermethodAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
