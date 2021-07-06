import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameStddevPopFieldsModelBase } from "./PokemonV2ContesttypenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameStddevPopFieldsModel */
export interface PokemonV2ContesttypenameStddevPopFieldsModelType extends Instance<typeof PokemonV2ContesttypenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameStddevPopFieldsModel */
export { selectFromPokemonV2ContesttypenameStddevPopFields, pokemonV2ContesttypenameStddevPopFieldsModelPrimitives, PokemonV2ContesttypenameStddevPopFieldsModelSelector } from "./PokemonV2ContesttypenameStddevPopFieldsModel.base"

/**
 * PokemonV2ContesttypenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ContesttypenameStddevPopFieldsModel = PokemonV2ContesttypenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
