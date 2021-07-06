import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameStddevPopFieldsModelBase } from "./PokemonV2LocationnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameStddevPopFieldsModel */
export interface PokemonV2LocationnameStddevPopFieldsModelType extends Instance<typeof PokemonV2LocationnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameStddevPopFieldsModel */
export { selectFromPokemonV2LocationnameStddevPopFields, pokemonV2LocationnameStddevPopFieldsModelPrimitives, PokemonV2LocationnameStddevPopFieldsModelSelector } from "./PokemonV2LocationnameStddevPopFieldsModel.base"

/**
 * PokemonV2LocationnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationnameStddevPopFieldsModel = PokemonV2LocationnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
