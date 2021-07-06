import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectSumFieldsModelBase } from "./PokemonV2MoveeffectSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectSumFieldsModel */
export interface PokemonV2MoveeffectSumFieldsModelType extends Instance<typeof PokemonV2MoveeffectSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectSumFieldsModel */
export { selectFromPokemonV2MoveeffectSumFields, pokemonV2MoveeffectSumFieldsModelPrimitives, PokemonV2MoveeffectSumFieldsModelSelector } from "./PokemonV2MoveeffectSumFieldsModel.base"

/**
 * PokemonV2MoveeffectSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveeffectSumFieldsModel = PokemonV2MoveeffectSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
