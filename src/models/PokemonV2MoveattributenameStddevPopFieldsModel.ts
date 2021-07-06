import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameStddevPopFieldsModelBase } from "./PokemonV2MoveattributenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameStddevPopFieldsModel */
export interface PokemonV2MoveattributenameStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveattributenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameStddevPopFieldsModel */
export { selectFromPokemonV2MoveattributenameStddevPopFields, pokemonV2MoveattributenameStddevPopFieldsModelPrimitives, PokemonV2MoveattributenameStddevPopFieldsModelSelector } from "./PokemonV2MoveattributenameStddevPopFieldsModel.base"

/**
 * PokemonV2MoveattributenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveattributenameStddevPopFieldsModel = PokemonV2MoveattributenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
