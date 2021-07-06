import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextAggregateModelBase } from "./PokemonV2AbilitychangeeffecttextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextAggregateModel */
export interface PokemonV2AbilitychangeeffecttextAggregateModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextAggregateModel */
export { selectFromPokemonV2AbilitychangeeffecttextAggregate, pokemonV2AbilitychangeeffecttextAggregateModelPrimitives, PokemonV2AbilitychangeeffecttextAggregateModelSelector } from "./PokemonV2AbilitychangeeffecttextAggregateModel.base"

/**
 * PokemonV2AbilitychangeeffecttextAggregateModel
 *
 * aggregated selection of "pokemon_v2_abilitychangeeffecttext"
 */
export const PokemonV2AbilitychangeeffecttextAggregateModel = PokemonV2AbilitychangeeffecttextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
