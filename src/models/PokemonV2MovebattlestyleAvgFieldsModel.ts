import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleAvgFieldsModelBase } from "./PokemonV2MovebattlestyleAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleAvgFieldsModel */
export interface PokemonV2MovebattlestyleAvgFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleAvgFieldsModel */
export { selectFromPokemonV2MovebattlestyleAvgFields, pokemonV2MovebattlestyleAvgFieldsModelPrimitives, PokemonV2MovebattlestyleAvgFieldsModelSelector } from "./PokemonV2MovebattlestyleAvgFieldsModel.base"

/**
 * PokemonV2MovebattlestyleAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovebattlestyleAvgFieldsModel = PokemonV2MovebattlestyleAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
