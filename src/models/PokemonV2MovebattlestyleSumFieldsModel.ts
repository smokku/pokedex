import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleSumFieldsModelBase } from "./PokemonV2MovebattlestyleSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleSumFieldsModel */
export interface PokemonV2MovebattlestyleSumFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleSumFieldsModel */
export { selectFromPokemonV2MovebattlestyleSumFields, pokemonV2MovebattlestyleSumFieldsModelPrimitives, PokemonV2MovebattlestyleSumFieldsModelSelector } from "./PokemonV2MovebattlestyleSumFieldsModel.base"

/**
 * PokemonV2MovebattlestyleSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovebattlestyleSumFieldsModel = PokemonV2MovebattlestyleSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
