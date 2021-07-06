import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameStddevPopFieldsModelBase } from "./PokemonV2StatnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameStddevPopFieldsModel */
export interface PokemonV2StatnameStddevPopFieldsModelType extends Instance<typeof PokemonV2StatnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameStddevPopFieldsModel */
export { selectFromPokemonV2StatnameStddevPopFields, pokemonV2StatnameStddevPopFieldsModelPrimitives, PokemonV2StatnameStddevPopFieldsModelSelector } from "./PokemonV2StatnameStddevPopFieldsModel.base"

/**
 * PokemonV2StatnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2StatnameStddevPopFieldsModel = PokemonV2StatnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
