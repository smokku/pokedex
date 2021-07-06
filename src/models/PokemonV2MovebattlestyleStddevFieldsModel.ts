import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleStddevFieldsModelBase } from "./PokemonV2MovebattlestyleStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleStddevFieldsModel */
export interface PokemonV2MovebattlestyleStddevFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleStddevFieldsModel */
export { selectFromPokemonV2MovebattlestyleStddevFields, pokemonV2MovebattlestyleStddevFieldsModelPrimitives, PokemonV2MovebattlestyleStddevFieldsModelSelector } from "./PokemonV2MovebattlestyleStddevFieldsModel.base"

/**
 * PokemonV2MovebattlestyleStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovebattlestyleStddevFieldsModel = PokemonV2MovebattlestyleStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
