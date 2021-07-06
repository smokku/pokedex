import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleStddevPopFieldsModelBase } from "./PokemonV2MovebattlestyleStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleStddevPopFieldsModel */
export interface PokemonV2MovebattlestyleStddevPopFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleStddevPopFieldsModel */
export { selectFromPokemonV2MovebattlestyleStddevPopFields, pokemonV2MovebattlestyleStddevPopFieldsModelPrimitives, PokemonV2MovebattlestyleStddevPopFieldsModelSelector } from "./PokemonV2MovebattlestyleStddevPopFieldsModel.base"

/**
 * PokemonV2MovebattlestyleStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovebattlestyleStddevPopFieldsModel = PokemonV2MovebattlestyleStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
