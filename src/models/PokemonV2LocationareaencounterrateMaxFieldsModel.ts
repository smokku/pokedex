import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateMaxFieldsModelBase } from "./PokemonV2LocationareaencounterrateMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateMaxFieldsModel */
export interface PokemonV2LocationareaencounterrateMaxFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateMaxFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateMaxFields, pokemonV2LocationareaencounterrateMaxFieldsModelPrimitives, PokemonV2LocationareaencounterrateMaxFieldsModelSelector } from "./PokemonV2LocationareaencounterrateMaxFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2LocationareaencounterrateMaxFieldsModel = PokemonV2LocationareaencounterrateMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
