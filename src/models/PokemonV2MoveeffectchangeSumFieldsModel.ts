import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeSumFieldsModelBase } from "./PokemonV2MoveeffectchangeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeSumFieldsModel */
export interface PokemonV2MoveeffectchangeSumFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeSumFieldsModel */
export { selectFromPokemonV2MoveeffectchangeSumFields, pokemonV2MoveeffectchangeSumFieldsModelPrimitives, PokemonV2MoveeffectchangeSumFieldsModelSelector } from "./PokemonV2MoveeffectchangeSumFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveeffectchangeSumFieldsModel = PokemonV2MoveeffectchangeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
