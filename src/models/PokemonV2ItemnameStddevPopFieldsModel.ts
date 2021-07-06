import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameStddevPopFieldsModelBase } from "./PokemonV2ItemnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameStddevPopFieldsModel */
export interface PokemonV2ItemnameStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameStddevPopFieldsModel */
export { selectFromPokemonV2ItemnameStddevPopFields, pokemonV2ItemnameStddevPopFieldsModelPrimitives, PokemonV2ItemnameStddevPopFieldsModelSelector } from "./PokemonV2ItemnameStddevPopFieldsModel.base"

/**
 * PokemonV2ItemnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemnameStddevPopFieldsModel = PokemonV2ItemnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
