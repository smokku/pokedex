import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameStddevPopFieldsModelBase } from "./PokemonV2TypenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameStddevPopFieldsModel */
export interface PokemonV2TypenameStddevPopFieldsModelType extends Instance<typeof PokemonV2TypenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameStddevPopFieldsModel */
export { selectFromPokemonV2TypenameStddevPopFields, pokemonV2TypenameStddevPopFieldsModelPrimitives, PokemonV2TypenameStddevPopFieldsModelSelector } from "./PokemonV2TypenameStddevPopFieldsModel.base"

/**
 * PokemonV2TypenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2TypenameStddevPopFieldsModel = PokemonV2TypenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
