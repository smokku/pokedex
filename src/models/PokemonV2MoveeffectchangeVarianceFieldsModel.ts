import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeVarianceFieldsModelBase } from "./PokemonV2MoveeffectchangeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeVarianceFieldsModel */
export interface PokemonV2MoveeffectchangeVarianceFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeVarianceFieldsModel */
export { selectFromPokemonV2MoveeffectchangeVarianceFields, pokemonV2MoveeffectchangeVarianceFieldsModelPrimitives, PokemonV2MoveeffectchangeVarianceFieldsModelSelector } from "./PokemonV2MoveeffectchangeVarianceFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveeffectchangeVarianceFieldsModel = PokemonV2MoveeffectchangeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
