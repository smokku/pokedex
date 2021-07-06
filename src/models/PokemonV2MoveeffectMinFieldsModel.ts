import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectMinFieldsModelBase } from "./PokemonV2MoveeffectMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectMinFieldsModel */
export interface PokemonV2MoveeffectMinFieldsModelType extends Instance<typeof PokemonV2MoveeffectMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectMinFieldsModel */
export { selectFromPokemonV2MoveeffectMinFields, pokemonV2MoveeffectMinFieldsModelPrimitives, PokemonV2MoveeffectMinFieldsModelSelector } from "./PokemonV2MoveeffectMinFieldsModel.base"

/**
 * PokemonV2MoveeffectMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveeffectMinFieldsModel = PokemonV2MoveeffectMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
