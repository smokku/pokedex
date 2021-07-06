import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateMinFieldsModelBase } from "./PokemonV2LocationareaencounterrateMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateMinFieldsModel */
export interface PokemonV2LocationareaencounterrateMinFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateMinFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateMinFields, pokemonV2LocationareaencounterrateMinFieldsModelPrimitives, PokemonV2LocationareaencounterrateMinFieldsModelSelector } from "./PokemonV2LocationareaencounterrateMinFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2LocationareaencounterrateMinFieldsModel = PokemonV2LocationareaencounterrateMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
