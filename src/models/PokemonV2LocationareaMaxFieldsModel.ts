import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaMaxFieldsModelBase } from "./PokemonV2LocationareaMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaMaxFieldsModel */
export interface PokemonV2LocationareaMaxFieldsModelType extends Instance<typeof PokemonV2LocationareaMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaMaxFieldsModel */
export { selectFromPokemonV2LocationareaMaxFields, pokemonV2LocationareaMaxFieldsModelPrimitives, PokemonV2LocationareaMaxFieldsModelSelector } from "./PokemonV2LocationareaMaxFieldsModel.base"

/**
 * PokemonV2LocationareaMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2LocationareaMaxFieldsModel = PokemonV2LocationareaMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
