import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaAvgFieldsModelBase } from "./PokemonV2LocationareaAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaAvgFieldsModel */
export interface PokemonV2LocationareaAvgFieldsModelType extends Instance<typeof PokemonV2LocationareaAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaAvgFieldsModel */
export { selectFromPokemonV2LocationareaAvgFields, pokemonV2LocationareaAvgFieldsModelPrimitives, PokemonV2LocationareaAvgFieldsModelSelector } from "./PokemonV2LocationareaAvgFieldsModel.base"

/**
 * PokemonV2LocationareaAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2LocationareaAvgFieldsModel = PokemonV2LocationareaAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
