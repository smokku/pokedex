import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateAvgFieldsModelBase } from "./PokemonV2LocationareaencounterrateAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateAvgFieldsModel */
export interface PokemonV2LocationareaencounterrateAvgFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateAvgFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateAvgFields, pokemonV2LocationareaencounterrateAvgFieldsModelPrimitives, PokemonV2LocationareaencounterrateAvgFieldsModelSelector } from "./PokemonV2LocationareaencounterrateAvgFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2LocationareaencounterrateAvgFieldsModel = PokemonV2LocationareaencounterrateAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
