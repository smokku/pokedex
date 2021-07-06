import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonAvgFieldsModelBase } from "./PokemonV2PokemonAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonAvgFieldsModel */
export interface PokemonV2PokemonAvgFieldsModelType extends Instance<typeof PokemonV2PokemonAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonAvgFieldsModel */
export { selectFromPokemonV2PokemonAvgFields, pokemonV2PokemonAvgFieldsModelPrimitives, PokemonV2PokemonAvgFieldsModelSelector } from "./PokemonV2PokemonAvgFieldsModel.base"

/**
 * PokemonV2PokemonAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonAvgFieldsModel = PokemonV2PokemonAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
