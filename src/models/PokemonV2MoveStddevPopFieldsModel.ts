import { Instance } from "mobx-state-tree"
import { PokemonV2MoveStddevPopFieldsModelBase } from "./PokemonV2MoveStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveStddevPopFieldsModel */
export interface PokemonV2MoveStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveStddevPopFieldsModel */
export { selectFromPokemonV2MoveStddevPopFields, pokemonV2MoveStddevPopFieldsModelPrimitives, PokemonV2MoveStddevPopFieldsModelSelector } from "./PokemonV2MoveStddevPopFieldsModel.base"

/**
 * PokemonV2MoveStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveStddevPopFieldsModel = PokemonV2MoveStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
