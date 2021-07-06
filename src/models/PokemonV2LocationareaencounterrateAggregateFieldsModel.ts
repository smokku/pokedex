import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateAggregateFieldsModelBase } from "./PokemonV2LocationareaencounterrateAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateAggregateFieldsModel */
export interface PokemonV2LocationareaencounterrateAggregateFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateAggregateFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateAggregateFields, pokemonV2LocationareaencounterrateAggregateFieldsModelPrimitives, PokemonV2LocationareaencounterrateAggregateFieldsModelSelector } from "./PokemonV2LocationareaencounterrateAggregateFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_locationareaencounterrate"
 */
export const PokemonV2LocationareaencounterrateAggregateFieldsModel = PokemonV2LocationareaencounterrateAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
