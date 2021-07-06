import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleVarianceFieldsModelBase } from "./PokemonV2MovebattlestyleVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleVarianceFieldsModel */
export interface PokemonV2MovebattlestyleVarianceFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleVarianceFieldsModel */
export { selectFromPokemonV2MovebattlestyleVarianceFields, pokemonV2MovebattlestyleVarianceFieldsModelPrimitives, PokemonV2MovebattlestyleVarianceFieldsModelSelector } from "./PokemonV2MovebattlestyleVarianceFieldsModel.base"

/**
 * PokemonV2MovebattlestyleVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovebattlestyleVarianceFieldsModel = PokemonV2MovebattlestyleVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
