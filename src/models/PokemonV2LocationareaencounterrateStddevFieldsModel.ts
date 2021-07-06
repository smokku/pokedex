import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateStddevFieldsModelBase } from "./PokemonV2LocationareaencounterrateStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateStddevFieldsModel */
export interface PokemonV2LocationareaencounterrateStddevFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateStddevFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateStddevFields, pokemonV2LocationareaencounterrateStddevFieldsModelPrimitives, PokemonV2LocationareaencounterrateStddevFieldsModelSelector } from "./PokemonV2LocationareaencounterrateStddevFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationareaencounterrateStddevFieldsModel = PokemonV2LocationareaencounterrateStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
