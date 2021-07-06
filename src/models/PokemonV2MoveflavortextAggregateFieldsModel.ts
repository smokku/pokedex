import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextAggregateFieldsModelBase } from "./PokemonV2MoveflavortextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextAggregateFieldsModel */
export interface PokemonV2MoveflavortextAggregateFieldsModelType extends Instance<typeof PokemonV2MoveflavortextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextAggregateFieldsModel */
export { selectFromPokemonV2MoveflavortextAggregateFields, pokemonV2MoveflavortextAggregateFieldsModelPrimitives, PokemonV2MoveflavortextAggregateFieldsModelSelector } from "./PokemonV2MoveflavortextAggregateFieldsModel.base"

/**
 * PokemonV2MoveflavortextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveflavortext"
 */
export const PokemonV2MoveflavortextAggregateFieldsModel = PokemonV2MoveflavortextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
