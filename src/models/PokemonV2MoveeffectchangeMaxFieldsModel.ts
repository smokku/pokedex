import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeMaxFieldsModelBase } from "./PokemonV2MoveeffectchangeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeMaxFieldsModel */
export interface PokemonV2MoveeffectchangeMaxFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeMaxFieldsModel */
export { selectFromPokemonV2MoveeffectchangeMaxFields, pokemonV2MoveeffectchangeMaxFieldsModelPrimitives, PokemonV2MoveeffectchangeMaxFieldsModelSelector } from "./PokemonV2MoveeffectchangeMaxFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveeffectchangeMaxFieldsModel = PokemonV2MoveeffectchangeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
