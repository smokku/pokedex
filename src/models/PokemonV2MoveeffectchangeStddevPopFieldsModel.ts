import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeStddevPopFieldsModelBase } from "./PokemonV2MoveeffectchangeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeStddevPopFieldsModel */
export interface PokemonV2MoveeffectchangeStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeStddevPopFieldsModel */
export { selectFromPokemonV2MoveeffectchangeStddevPopFields, pokemonV2MoveeffectchangeStddevPopFieldsModelPrimitives, PokemonV2MoveeffectchangeStddevPopFieldsModelSelector } from "./PokemonV2MoveeffectchangeStddevPopFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveeffectchangeStddevPopFieldsModel = PokemonV2MoveeffectchangeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
