import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeStddevFieldsModelBase } from "./PokemonV2MoveeffectchangeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeStddevFieldsModel */
export interface PokemonV2MoveeffectchangeStddevFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeStddevFieldsModel */
export { selectFromPokemonV2MoveeffectchangeStddevFields, pokemonV2MoveeffectchangeStddevFieldsModelPrimitives, PokemonV2MoveeffectchangeStddevFieldsModelSelector } from "./PokemonV2MoveeffectchangeStddevFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveeffectchangeStddevFieldsModel = PokemonV2MoveeffectchangeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
