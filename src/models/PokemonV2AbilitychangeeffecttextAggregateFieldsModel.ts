import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextAggregateFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextAggregateFieldsModel */
export interface PokemonV2AbilitychangeeffecttextAggregateFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextAggregateFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextAggregateFields, pokemonV2AbilitychangeeffecttextAggregateFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextAggregateFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextAggregateFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_abilitychangeeffecttext"
 */
export const PokemonV2AbilitychangeeffecttextAggregateFieldsModel = PokemonV2AbilitychangeeffecttextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
