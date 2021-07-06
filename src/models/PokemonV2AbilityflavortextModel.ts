import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextModelBase } from "./PokemonV2AbilityflavortextModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextModel */
export interface PokemonV2AbilityflavortextModelType extends Instance<typeof PokemonV2AbilityflavortextModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextModel */
export { selectFromPokemonV2Abilityflavortext, pokemonV2AbilityflavortextModelPrimitives, PokemonV2AbilityflavortextModelSelector } from "./PokemonV2AbilityflavortextModel.base"

/**
 * PokemonV2AbilityflavortextModel
 *
 * columns and relationships of "pokemon_v2_abilityflavortext"
 */
export const PokemonV2AbilityflavortextModel = PokemonV2AbilityflavortextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
