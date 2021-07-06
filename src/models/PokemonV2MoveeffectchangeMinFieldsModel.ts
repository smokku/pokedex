import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeMinFieldsModelBase } from "./PokemonV2MoveeffectchangeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeMinFieldsModel */
export interface PokemonV2MoveeffectchangeMinFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeMinFieldsModel */
export { selectFromPokemonV2MoveeffectchangeMinFields, pokemonV2MoveeffectchangeMinFieldsModelPrimitives, PokemonV2MoveeffectchangeMinFieldsModelSelector } from "./PokemonV2MoveeffectchangeMinFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveeffectchangeMinFieldsModel = PokemonV2MoveeffectchangeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
