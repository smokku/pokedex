import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleMinFieldsModelBase } from "./PokemonV2MovebattlestyleMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleMinFieldsModel */
export interface PokemonV2MovebattlestyleMinFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleMinFieldsModel */
export { selectFromPokemonV2MovebattlestyleMinFields, pokemonV2MovebattlestyleMinFieldsModelPrimitives, PokemonV2MovebattlestyleMinFieldsModelSelector } from "./PokemonV2MovebattlestyleMinFieldsModel.base"

/**
 * PokemonV2MovebattlestyleMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovebattlestyleMinFieldsModel = PokemonV2MovebattlestyleMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
