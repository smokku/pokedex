import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameStddevFieldsModelBase } from "./PokemonV2ContesttypenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameStddevFieldsModel */
export interface PokemonV2ContesttypenameStddevFieldsModelType extends Instance<typeof PokemonV2ContesttypenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameStddevFieldsModel */
export { selectFromPokemonV2ContesttypenameStddevFields, pokemonV2ContesttypenameStddevFieldsModelPrimitives, PokemonV2ContesttypenameStddevFieldsModelSelector } from "./PokemonV2ContesttypenameStddevFieldsModel.base"

/**
 * PokemonV2ContesttypenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContesttypenameStddevFieldsModel = PokemonV2ContesttypenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
