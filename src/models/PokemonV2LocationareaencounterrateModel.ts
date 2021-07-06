import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateModelBase } from "./PokemonV2LocationareaencounterrateModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateModel */
export interface PokemonV2LocationareaencounterrateModelType extends Instance<typeof PokemonV2LocationareaencounterrateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateModel */
export { selectFromPokemonV2Locationareaencounterrate, pokemonV2LocationareaencounterrateModelPrimitives, PokemonV2LocationareaencounterrateModelSelector } from "./PokemonV2LocationareaencounterrateModel.base"

/**
 * PokemonV2LocationareaencounterrateModel
 *
 * columns and relationships of "pokemon_v2_locationareaencounterrate"
 */
export const PokemonV2LocationareaencounterrateModel = PokemonV2LocationareaencounterrateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
