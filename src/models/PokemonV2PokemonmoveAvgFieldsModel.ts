import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveAvgFieldsModelBase } from "./PokemonV2PokemonmoveAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveAvgFieldsModel */
export interface PokemonV2PokemonmoveAvgFieldsModelType extends Instance<typeof PokemonV2PokemonmoveAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveAvgFieldsModel */
export { selectFromPokemonV2PokemonmoveAvgFields, pokemonV2PokemonmoveAvgFieldsModelPrimitives, PokemonV2PokemonmoveAvgFieldsModelSelector } from "./PokemonV2PokemonmoveAvgFieldsModel.base"

/**
 * PokemonV2PokemonmoveAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonmoveAvgFieldsModel = PokemonV2PokemonmoveAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
