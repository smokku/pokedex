import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketSumFieldsModelBase } from "./PokemonV2ItempocketSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketSumFieldsModel */
export interface PokemonV2ItempocketSumFieldsModelType extends Instance<typeof PokemonV2ItempocketSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketSumFieldsModel */
export { selectFromPokemonV2ItempocketSumFields, pokemonV2ItempocketSumFieldsModelPrimitives, PokemonV2ItempocketSumFieldsModelSelector } from "./PokemonV2ItempocketSumFieldsModel.base"

/**
 * PokemonV2ItempocketSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItempocketSumFieldsModel = PokemonV2ItempocketSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
