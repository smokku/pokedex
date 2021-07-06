import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeStddevPopFieldsModelBase } from "./PokemonV2MoveattributeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeStddevPopFieldsModel */
export interface PokemonV2MoveattributeStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveattributeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeStddevPopFieldsModel */
export { selectFromPokemonV2MoveattributeStddevPopFields, pokemonV2MoveattributeStddevPopFieldsModelPrimitives, PokemonV2MoveattributeStddevPopFieldsModelSelector } from "./PokemonV2MoveattributeStddevPopFieldsModel.base"

/**
 * PokemonV2MoveattributeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveattributeStddevPopFieldsModel = PokemonV2MoveattributeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
