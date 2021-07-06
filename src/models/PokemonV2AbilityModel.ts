import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityModelBase } from "./PokemonV2AbilityModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityModel */
export interface PokemonV2AbilityModelType extends Instance<typeof PokemonV2AbilityModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityModel */
export { selectFromPokemonV2Ability, pokemonV2AbilityModelPrimitives, PokemonV2AbilityModelSelector } from "./PokemonV2AbilityModel.base"

/**
 * PokemonV2AbilityModel
 *
 * columns and relationships of "pokemon_v2_ability"
 */
export const PokemonV2AbilityModel = PokemonV2AbilityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
