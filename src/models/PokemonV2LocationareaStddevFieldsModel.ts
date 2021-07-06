import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaStddevFieldsModelBase } from "./PokemonV2LocationareaStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaStddevFieldsModel */
export interface PokemonV2LocationareaStddevFieldsModelType extends Instance<typeof PokemonV2LocationareaStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaStddevFieldsModel */
export { selectFromPokemonV2LocationareaStddevFields, pokemonV2LocationareaStddevFieldsModelPrimitives, PokemonV2LocationareaStddevFieldsModelSelector } from "./PokemonV2LocationareaStddevFieldsModel.base"

/**
 * PokemonV2LocationareaStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationareaStddevFieldsModel = PokemonV2LocationareaStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
