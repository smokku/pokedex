import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyAggregateFieldsModelBase } from "./PokemonV2TypeefficacyAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyAggregateFieldsModel */
export interface PokemonV2TypeefficacyAggregateFieldsModelType extends Instance<typeof PokemonV2TypeefficacyAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyAggregateFieldsModel */
export { selectFromPokemonV2TypeefficacyAggregateFields, pokemonV2TypeefficacyAggregateFieldsModelPrimitives, PokemonV2TypeefficacyAggregateFieldsModelSelector } from "./PokemonV2TypeefficacyAggregateFieldsModel.base"

/**
 * PokemonV2TypeefficacyAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_typeefficacy"
 */
export const PokemonV2TypeefficacyAggregateFieldsModel = PokemonV2TypeefficacyAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
