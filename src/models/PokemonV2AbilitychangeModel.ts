import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeModelBase } from "./PokemonV2AbilitychangeModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeModel */
export interface PokemonV2AbilitychangeModelType extends Instance<typeof PokemonV2AbilitychangeModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeModel */
export { selectFromPokemonV2Abilitychange, pokemonV2AbilitychangeModelPrimitives, PokemonV2AbilitychangeModelSelector } from "./PokemonV2AbilitychangeModel.base"

/**
 * PokemonV2AbilitychangeModel
 *
 * columns and relationships of "pokemon_v2_abilitychange"
 */
export const PokemonV2AbilitychangeModel = PokemonV2AbilitychangeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
