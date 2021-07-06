import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaStddevPopFieldsModelBase } from "./PokemonV2LocationareaStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaStddevPopFieldsModel */
export interface PokemonV2LocationareaStddevPopFieldsModelType extends Instance<typeof PokemonV2LocationareaStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaStddevPopFieldsModel */
export { selectFromPokemonV2LocationareaStddevPopFields, pokemonV2LocationareaStddevPopFieldsModelPrimitives, PokemonV2LocationareaStddevPopFieldsModelSelector } from "./PokemonV2LocationareaStddevPopFieldsModel.base"

/**
 * PokemonV2LocationareaStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationareaStddevPopFieldsModel = PokemonV2LocationareaStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
