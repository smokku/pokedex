import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityVarianceFieldsModelBase } from "./PokemonV2AbilityVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityVarianceFieldsModel */
export interface PokemonV2AbilityVarianceFieldsModelType extends Instance<typeof PokemonV2AbilityVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityVarianceFieldsModel */
export { selectFromPokemonV2AbilityVarianceFields, pokemonV2AbilityVarianceFieldsModelPrimitives, PokemonV2AbilityVarianceFieldsModelSelector } from "./PokemonV2AbilityVarianceFieldsModel.base"

/**
 * PokemonV2AbilityVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilityVarianceFieldsModel = PokemonV2AbilityVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
