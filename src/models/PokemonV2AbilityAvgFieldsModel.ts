import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityAvgFieldsModelBase } from "./PokemonV2AbilityAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityAvgFieldsModel */
export interface PokemonV2AbilityAvgFieldsModelType extends Instance<typeof PokemonV2AbilityAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityAvgFieldsModel */
export { selectFromPokemonV2AbilityAvgFields, pokemonV2AbilityAvgFieldsModelPrimitives, PokemonV2AbilityAvgFieldsModelSelector } from "./PokemonV2AbilityAvgFieldsModel.base"

/**
 * PokemonV2AbilityAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2AbilityAvgFieldsModel = PokemonV2AbilityAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
