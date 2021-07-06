import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateVarianceFieldsModelBase } from "./PokemonV2LocationareaencounterrateVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateVarianceFieldsModel */
export interface PokemonV2LocationareaencounterrateVarianceFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateVarianceFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateVarianceFields, pokemonV2LocationareaencounterrateVarianceFieldsModelPrimitives, PokemonV2LocationareaencounterrateVarianceFieldsModelSelector } from "./PokemonV2LocationareaencounterrateVarianceFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2LocationareaencounterrateVarianceFieldsModel = PokemonV2LocationareaencounterrateVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
