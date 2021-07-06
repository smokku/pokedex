import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeVarianceFieldsModelBase } from "./PokemonV2AbilitychangeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeVarianceFieldsModel */
export interface PokemonV2AbilitychangeVarianceFieldsModelType extends Instance<typeof PokemonV2AbilitychangeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeVarianceFieldsModel */
export { selectFromPokemonV2AbilitychangeVarianceFields, pokemonV2AbilitychangeVarianceFieldsModelPrimitives, PokemonV2AbilitychangeVarianceFieldsModelSelector } from "./PokemonV2AbilitychangeVarianceFieldsModel.base"

/**
 * PokemonV2AbilitychangeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilitychangeVarianceFieldsModel = PokemonV2AbilitychangeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
