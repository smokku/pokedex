import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameSumFieldsModelBase } from "./PokemonV2MovebattlestylenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameSumFieldsModel */
export interface PokemonV2MovebattlestylenameSumFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameSumFieldsModel */
export { selectFromPokemonV2MovebattlestylenameSumFields, pokemonV2MovebattlestylenameSumFieldsModelPrimitives, PokemonV2MovebattlestylenameSumFieldsModelSelector } from "./PokemonV2MovebattlestylenameSumFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovebattlestylenameSumFieldsModel = PokemonV2MovebattlestylenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
