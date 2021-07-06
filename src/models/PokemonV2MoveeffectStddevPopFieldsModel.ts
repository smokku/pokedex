import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectStddevPopFieldsModelBase } from "./PokemonV2MoveeffectStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectStddevPopFieldsModel */
export interface PokemonV2MoveeffectStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveeffectStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectStddevPopFieldsModel */
export { selectFromPokemonV2MoveeffectStddevPopFields, pokemonV2MoveeffectStddevPopFieldsModelPrimitives, PokemonV2MoveeffectStddevPopFieldsModelSelector } from "./PokemonV2MoveeffectStddevPopFieldsModel.base"

/**
 * PokemonV2MoveeffectStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveeffectStddevPopFieldsModel = PokemonV2MoveeffectStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
