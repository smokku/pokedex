import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeAvgFieldsModelBase } from "./PokemonV2AbilitychangeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeAvgFieldsModel */
export interface PokemonV2AbilitychangeAvgFieldsModelType extends Instance<typeof PokemonV2AbilitychangeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeAvgFieldsModel */
export { selectFromPokemonV2AbilitychangeAvgFields, pokemonV2AbilitychangeAvgFieldsModelPrimitives, PokemonV2AbilitychangeAvgFieldsModelSelector } from "./PokemonV2AbilitychangeAvgFieldsModel.base"

/**
 * PokemonV2AbilitychangeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2AbilitychangeAvgFieldsModel = PokemonV2AbilitychangeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
