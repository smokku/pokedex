import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectStddevFieldsModelBase } from "./PokemonV2MoveeffectStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectStddevFieldsModel */
export interface PokemonV2MoveeffectStddevFieldsModelType extends Instance<typeof PokemonV2MoveeffectStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectStddevFieldsModel */
export { selectFromPokemonV2MoveeffectStddevFields, pokemonV2MoveeffectStddevFieldsModelPrimitives, PokemonV2MoveeffectStddevFieldsModelSelector } from "./PokemonV2MoveeffectStddevFieldsModel.base"

/**
 * PokemonV2MoveeffectStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveeffectStddevFieldsModel = PokemonV2MoveeffectStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
