import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetSumFieldsModelBase } from "./PokemonV2MovetargetSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetSumFieldsModel */
export interface PokemonV2MovetargetSumFieldsModelType extends Instance<typeof PokemonV2MovetargetSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetSumFieldsModel */
export { selectFromPokemonV2MovetargetSumFields, pokemonV2MovetargetSumFieldsModelPrimitives, PokemonV2MovetargetSumFieldsModelSelector } from "./PokemonV2MovetargetSumFieldsModel.base"

/**
 * PokemonV2MovetargetSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovetargetSumFieldsModel = PokemonV2MovetargetSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
