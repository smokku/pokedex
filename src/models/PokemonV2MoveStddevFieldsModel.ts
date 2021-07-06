import { Instance } from "mobx-state-tree"
import { PokemonV2MoveStddevFieldsModelBase } from "./PokemonV2MoveStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveStddevFieldsModel */
export interface PokemonV2MoveStddevFieldsModelType extends Instance<typeof PokemonV2MoveStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveStddevFieldsModel */
export { selectFromPokemonV2MoveStddevFields, pokemonV2MoveStddevFieldsModelPrimitives, PokemonV2MoveStddevFieldsModelSelector } from "./PokemonV2MoveStddevFieldsModel.base"

/**
 * PokemonV2MoveStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveStddevFieldsModel = PokemonV2MoveStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
