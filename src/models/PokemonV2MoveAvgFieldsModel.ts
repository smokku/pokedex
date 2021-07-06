import { Instance } from "mobx-state-tree"
import { PokemonV2MoveAvgFieldsModelBase } from "./PokemonV2MoveAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveAvgFieldsModel */
export interface PokemonV2MoveAvgFieldsModelType extends Instance<typeof PokemonV2MoveAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveAvgFieldsModel */
export { selectFromPokemonV2MoveAvgFields, pokemonV2MoveAvgFieldsModelPrimitives, PokemonV2MoveAvgFieldsModelSelector } from "./PokemonV2MoveAvgFieldsModel.base"

/**
 * PokemonV2MoveAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveAvgFieldsModel = PokemonV2MoveAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
