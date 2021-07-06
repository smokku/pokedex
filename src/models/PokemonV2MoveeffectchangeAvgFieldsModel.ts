import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeAvgFieldsModelBase } from "./PokemonV2MoveeffectchangeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeAvgFieldsModel */
export interface PokemonV2MoveeffectchangeAvgFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeAvgFieldsModel */
export { selectFromPokemonV2MoveeffectchangeAvgFields, pokemonV2MoveeffectchangeAvgFieldsModelPrimitives, PokemonV2MoveeffectchangeAvgFieldsModelSelector } from "./PokemonV2MoveeffectchangeAvgFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveeffectchangeAvgFieldsModel = PokemonV2MoveeffectchangeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
