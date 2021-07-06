import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateStddevSampFieldsModelBase } from "./PokemonV2LocationareaencounterrateStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateStddevSampFieldsModel */
export interface PokemonV2LocationareaencounterrateStddevSampFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateStddevSampFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateStddevSampFields, pokemonV2LocationareaencounterrateStddevSampFieldsModelPrimitives, PokemonV2LocationareaencounterrateStddevSampFieldsModelSelector } from "./PokemonV2LocationareaencounterrateStddevSampFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationareaencounterrateStddevSampFieldsModel = PokemonV2LocationareaencounterrateStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
