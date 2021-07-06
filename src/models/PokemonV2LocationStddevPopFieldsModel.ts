import { Instance } from "mobx-state-tree"
import { PokemonV2LocationStddevPopFieldsModelBase } from "./PokemonV2LocationStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationStddevPopFieldsModel */
export interface PokemonV2LocationStddevPopFieldsModelType extends Instance<typeof PokemonV2LocationStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationStddevPopFieldsModel */
export { selectFromPokemonV2LocationStddevPopFields, pokemonV2LocationStddevPopFieldsModelPrimitives, PokemonV2LocationStddevPopFieldsModelSelector } from "./PokemonV2LocationStddevPopFieldsModel.base"

/**
 * PokemonV2LocationStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationStddevPopFieldsModel = PokemonV2LocationStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
