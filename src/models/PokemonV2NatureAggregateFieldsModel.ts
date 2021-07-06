import { Instance } from "mobx-state-tree"
import { PokemonV2NatureAggregateFieldsModelBase } from "./PokemonV2NatureAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureAggregateFieldsModel */
export interface PokemonV2NatureAggregateFieldsModelType extends Instance<typeof PokemonV2NatureAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureAggregateFieldsModel */
export { selectFromPokemonV2NatureAggregateFields, pokemonV2NatureAggregateFieldsModelPrimitives, PokemonV2NatureAggregateFieldsModelSelector } from "./PokemonV2NatureAggregateFieldsModel.base"

/**
 * PokemonV2NatureAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_nature"
 */
export const PokemonV2NatureAggregateFieldsModel = PokemonV2NatureAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
