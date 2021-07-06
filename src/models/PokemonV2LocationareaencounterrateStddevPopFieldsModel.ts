import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateStddevPopFieldsModelBase } from "./PokemonV2LocationareaencounterrateStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateStddevPopFieldsModel */
export interface PokemonV2LocationareaencounterrateStddevPopFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateStddevPopFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateStddevPopFields, pokemonV2LocationareaencounterrateStddevPopFieldsModelPrimitives, PokemonV2LocationareaencounterrateStddevPopFieldsModelSelector } from "./PokemonV2LocationareaencounterrateStddevPopFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationareaencounterrateStddevPopFieldsModel = PokemonV2LocationareaencounterrateStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
